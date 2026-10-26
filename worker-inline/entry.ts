/**
 * 内联部署入口（wrangler.inline.jsonc）。
 * Hark 用 API Token 部署时，Static Assets 上传接口会返回 401（未授权），
 * 所以把 public/ 打进脚本，用一个假的 ASSETS Fetcher 交给 src/index.ts，逻辑完全复用。
 */
import worker from "../src/index.ts";
import { INLINE_ASSETS } from "./assets.generated.ts";

function decode(b64: string): Uint8Array {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

const inlineAssets = {
  async fetch(input: RequestInfo | URL): Promise<Response> {
    const url = new URL(input instanceof Request ? input.url : String(input));
    let path = url.pathname;
    let a = INLINE_ASSETS[path];
    // 单页应用：没有扩展名的路径都回 index.html
    if (!a && !/\.[a-z0-9]+$/i.test(path)) {
      path = "/index.html";
      a = INLINE_ASSETS[path];
    }
    if (!a) return new Response("Not Found", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
    return new Response(a.b ? decode(a.d) : a.d, {
      headers: {
        "Content-Type": a.t,
        "Cache-Control": path.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    });
  },
  connect() {
    throw new Error("not supported");
  },
} as unknown as Fetcher;

export default {
  fetch(req: Request, env: Record<string, unknown>) {
    return worker.fetch(req, { ...env, ASSETS: inlineAssets }, {} as ExecutionContext);
  },
};
