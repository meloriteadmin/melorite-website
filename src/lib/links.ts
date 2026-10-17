import { products } from "@/data/products";
/** Preserve product intent in shared navigation as well as in page CTAs. */
export function demoHrefForPath(pathname: string) {
  const product = products.find(({ slug }) => pathname === `/products/${slug}`);
  return product ? `/book-demo?product=${product.slug}` : "/book-demo";
}
