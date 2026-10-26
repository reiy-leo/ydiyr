// 只有一件事：短链 ydiyr.rei8t.dev 301 到主域名（保留路径和查询参数），其余交给静态资源。
const CANONICAL = "your-data-is-your-responsibility.rei8t.dev";
const SHORT = "ydiyr.rei8t.dev";

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === SHORT) {
      url.hostname = CANONICAL;
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
