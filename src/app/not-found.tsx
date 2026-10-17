export const metadata = { robots: { index: false, follow: true } };
import Link from "next/link";

export default function NotFound() {
  return (
    <section data-nav="light" className="rails rails-light bg-grid flex min-h-[100svh] flex-col items-center justify-center bg-[#ffffff] px-6 pt-[64px] text-center text-[#111735]">
      <p className="eyebrow-pill">Error 404</p>
      <h1 className="h-hero mt-5 max-w-[12ch]">This page can’t be found.</h1>
      <p className="mt-5 max-w-[40ch] text-[17px] text-[#111735]/55">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="pill pill-dark h-12 px-6">Back to home</Link>
        <Link href="/contact" className="pill h-12 px-6">Contact us</Link>
        <Link href="/book-demo" className="pill h-12 px-6">Book a demo</Link>
        <Link href="/products" className="pill h-12 border border-[#111735]/16 px-6">Explore products</Link>
      </div>
    </section>
  );
}
