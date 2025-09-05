export default function SignIn() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-b from-white to-sky-200">
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="min-h-[450px] w-full max-w-4xl rounded-2xl bg-white p-8 shadow-xl text-center">
          <h1 className="text-4x1 md:text-5x1 font-bold text-slate-800">
            Sign In
          </h1>
          <p className="mt-3 text-slate-500">
            Just sign in if you have an account in here. Enjoy our Website
          </p>
          <div className="mt-8 w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-400">
              Your Email / Username
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}
