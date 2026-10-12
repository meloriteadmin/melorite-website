import Link from "next/link";

export default function NotFound() {
  return (
    <section data-nav="dark" className="rails flex min-h-[100svh] flex-col items-center justify-center bg-[#111735] px-6 pt-[64px] text-center text-white">
      <p className="mono-label text-white/45">Error 404</p>
      <h1 className="h-hero mt-5 max-w-[12ch]">This page can’t be found.</h1>
      <p className="mt-5 max-w-[40ch] text-[17px] text-white/55">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="pill pill-light h-12 px-6">Back to home</Link>
        <Link href="/products" className="pill pill-ghost-dark h-12 px-6">Explore products</Link>
      </div>
    </section>
  );
}
