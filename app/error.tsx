'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-mojo-bg text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-extrabold font-heading text-white mb-3">Something went wrong!</h2>
      <p className="text-mojo-muted text-sm max-w-md mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-xl font-heading font-semibold text-white bg-mojo-violet hover:bg-mojo-violet-light transition-all"
      >
        Try again
      </button>
    </div>
  );
}
