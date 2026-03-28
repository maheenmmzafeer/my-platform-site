import Link from "next/link";

export default function NotFound() {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-10 text-center">
      <p className="text-xs uppercase tracking-wider text-zinc-500">Error 404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-zinc-600">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
      >
        Return Home
      </Link>
    </section>
  );
}