import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="text-6xl font-extrabold tracking-tight text-brand sm:text-7xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md font-devanagari text-base text-zinc-500 sm:text-lg">
        यह पृष्ठ मौजूद नहीं है। होमपेज पर वापस जाएं।
      </p>
      <p className="mt-2 max-w-md text-sm text-zinc-600">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-cta inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-sm font-bold text-white">
          Go Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full border border-ink px-7 text-sm font-bold text-ink transition-colors hover:bg-black/[0.04]"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
