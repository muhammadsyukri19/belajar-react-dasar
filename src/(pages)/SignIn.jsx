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

          {/* masukkan email atau username */}
          <div className="mt-8 w-full max-h-[70px] rounded-2xl border border-sky-200 bg-white p-6">
            <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
              Your Email / Username
            </label>
            <input type="text" classsName=""></input>
          </div>

          {/* masukkan password */}
          <div className="mt-8 w-full rounded-2xl border border-sky-400 bg-white p-6">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-400">
              Enter Password
            </label>
            <input type="text" classsName=""></input>
          </div>

          {/* keterangan kecil */}
          <div>
            <p className="flex mt-4 text-sm text-slate-400">Forgot Password?</p>
            q
          </div>

          {/* tombol sign in */}
          <div className="mt-8 w-full rounded-[15px] bg-sky-500 p-4 text-white hover:bg-sky-600">
            Sign In
          </div>
        </div>
      </div>
    </main>
  );
}
