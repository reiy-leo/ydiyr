import type { Messages } from "./types.ts";

export const id: Messages = {
  title: "Datamu, tanggung jawabmu · ydiyr",
  description: "Aplikasi buatan saya menyimpan datamu di perangkatmu sendiri dan hanya menyinkronkan lewat Google Drive atau WebDAV milikmu, tidak pernah lewat server pengembang.",
  nav: { apps: "Aplikasi", webdav: "WebDAV sendiri", language: "Bahasa", followBrowser: "Ikuti browser" },
  hero: {
    badge: "Datamu, keputusanmu",
    h1: "Datamu adalah tanggung jawabmu.",
    lede: "Semua aplikasi buatan saya menyimpan datamu di perangkatmu. Untuk sinkron antarperangkat, kamu menghubungkan Google Drive atau WebDAV milikmu sendiri. Saya tidak punya server dan tidak pernah menyentuh datamu.",
    ctaApps: "Lihat aplikasinya",
    ctaWebdav: "Tidak punya WebDAV?",
  },
  principles: {
    h2: "Artinya apa",
    items: [
      { t: "Data ada di tanganmu", d: "Data disimpan dulu di perangkatmu dan tetap jalan tanpa internet. Mau diekspor, dipindah, atau dihapus, kamu yang menentukan." },
      { t: "Sinkron hanya ke penyimpananmu", d: "Sinkronisasi lewat Google Drive atau WebDAV milikmu sendiri. Tidak ada server pengembang di tengah." },
      { t: "Tak ada yang bisa menghilangkan atau menjualnya", d: "Saya tidak bisa mengakses datamu, jadi saya tidak bisa menghilangkan atau menjualnya. Kalau suatu hari saya berhenti merawat aplikasinya, datamu tetap milikmu." },
    ],
    flip: {
      t: "Sisi lainnya: kalau hilang, tidak ada yang bisa memulihkan",
      d: "Lupa kata sandi utama, menghapus file di drive, atau kehilangan perangkat tanpa cadangan, saya tidak punya apa-apa untuk dipulihkan. Cadangan jadi urusanmu.",
    },
  },
  flow: {
    h2: "Ke mana datamu pergi",
    lede: "Sinkron hanyalah perangkatmu berbicara dengan penyimpananmu. Saya tidak ada di jalurnya.",
    device: "Perangkatmu",
    drive: "Google Drive-mu",
    webdav: "WebDAV-mu",
    or: "atau",
    server: "Server pengembang",
    serverNote: "Tidak terlibat. Tidak ada.",
  },
  apps: {
    h2: "Aplikasi yang dibuat dengan cara ini",
    lede: "Semuanya mengutamakan penyimpanan lokal dan hanya sinkron ke penyimpanan milikmu.",
    platforms: "Platform",
    sync: "Sinkron",
    soon: "segera",
    site: "Situs",
    navill: {
      tagline: "Pengelola bookmark di tab baru: ruang kerja, laci, alias, dan berbagi.",
      note: "Berbagi hanya terjadi saat kamu menekan Bagikan, dan hanya ruang kerja atau laci yang kamu pilih yang diunggah.",
    },
    mimatory: {
      tagline: "Pengelola kata sandi lokal dengan brankas terenkripsi.",
      note: "Di Google Drive, ia memakai folder data aplikasi yang tersembunyi. Yang keluar dari perangkatmu hanya teks terenkripsi (AES-256-GCM).",
    },
    reicky: {
      tagline: "Catatan tempel untuk desktop, seperti Stickies di macOS.",
      note: "Untuk sekarang catatan disimpan di komputermu. Sinkron Google Drive dan WebDAV sedang dikerjakan.",
    },
  },
  duties: {
    h2: "Bagianmu",
    lede: "Memiliki data sendiri berarti menyiapkan jaring pengaman sendiri. Sepuluh menit cukup.",
    items: [
      { t: "Sesekali ekspor cadangan", d: "Simpan di tempat lain, misalnya hard disk eksternal atau cloud kedua." },
      { t: "Ingat kata sandi utamamu", d: "Kalau lupa kata sandi utama Mimatory, tidak ada yang bisa membuka brankasnya. Saya juga tidak." },
      { t: "Amankan akun penyimpananmu", d: "Aktifkan verifikasi 2 langkah di Google, dan pakai kata sandi panjang untuk WebDAV." },
      { t: "Sinkronkan sebelum ganti perangkat", d: "Pastikan semuanya sudah ada di perangkat baru sebelum menghapus yang lama." },
    ],
  },
  webdav: {
    h2: "Tidak punya WebDAV? Jalankan sendiri",
    lede: "WebDAV adalah protokol file yang umum dan didukung banyak aplikasi. Kalau belum punya, ada dua cara.",
    r2: {
      t: "WebDAV milikmu di Cloudflare R2",
      d: "Fork r2-webdav saya bisa dipasang di akun Cloudflare milikmu dalam beberapa menit. File tersimpan di bucket R2-mu, dan ada pengelola file di browser.",
      cta: "Lihat r2-webdav",
    },
    others: {
      t: "Atau pakai yang sudah ada",
      d: "Nextcloud, NAS Synology, dan Jianguoyun (坚果云) mendukung WebDAV. Isi alamat dan login, selesai.",
    },
  },
  footer: { meaning: "ydiyr = your data is your responsibility", license: "Lisensi MIT" },
};
