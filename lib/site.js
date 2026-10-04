// Central site + link config. No secrets here.
export const SITE = {
  name: "Masar Store API Docs",
  shortName: "Masar API",
  collection: "Ecommerce Masar",
  description:
    "Production-grade documentation and live playground for the E-commerce Masar backend: auth, products, cart, orders, coupons, reviews and more.",
  youtube: "https://youtube.com/@masar1424",
  portfolio: "https://osama.osamaoriginal77.workers.dev/",
  feedback: "https://masar-fawn.vercel.app/",
  author: "Osama El-Gamal",
};

export function siteUrl() {
  const u = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return u.replace(/\/$/, "");
}

export function allowedBaseUrls() {
  // Only Masar-production is real (the "Production" Bruno env is fake and is
  // excluded by the parser). Override via ALLOWED_BASE_URLS when needed.
  const raw =
    process.env.ALLOWED_BASE_URLS ||
    "https://e-commerce-backend-masar.vercel.app";
  return raw
    .split(",")
    .map((s) => s.trim().replace(/\/$/, ""))
    .filter(Boolean);
}
