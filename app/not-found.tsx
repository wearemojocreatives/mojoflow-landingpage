import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-mojo-bg text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-extrabold font-heading text-white mb-3">404 — Page Not Found</h2>
      <p className="text-mojo-muted text-sm max-w-md mb-6">
        The requested page does not exist. Return to MOJO FLOW home page to join the waitlist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-heading font-semibold text-white bg-mojo-violet hover:bg-mojo-violet-light transition-all"
      >
        Back to MOJO FLOW
      </Link>
    </div>
  );
}
