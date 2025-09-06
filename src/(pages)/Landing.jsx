import CurvedLoop from "../component/CurvedLoop";
import SplitText from "../component/SplitText";

const handleAnimationComplete = (i) => {
  console.log("Letter done:", i);
};

// With custom props
export default function Landing() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-b from-black to-sky-200">
      <div className="fixed top-6 left-1/2 -translate-x-1/2">
        <nav className="w-[500px] max-w-5xl bg-transparent border border-blue-200 rounded-2xl px-6 py-3 flex items-center justify-center backdrop-blur-md">
          <ul className="flex space-x-6 text-white">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between px-20 pt-32">
        <div className="max-w-xl">
          <SplitText
            text="Hello, Saya Muhammad Syukri!"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <h2 className="text-2xl mt-6 text-white">
            I'm Muhammad Syukri, mahasiswa yang sedang menempuh pendidikan
            semester 5 pada Program Studi Informatika Universitas Syiah Kuala,
          </h2>
        </div>
        <div>
          <img
            src="/syukri.jpg"
            alt="Profile"
            className="w-80 h-110 rounded-2xl"
          />
        </div>
      </div>

      <CurvedLoop
        marqueeText="Welcome ✦ to ✦ My ✦ Portfolio ✦ Muhammad ✦ Syukri ✦"
        speed={3}
        curveAmount={0}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />
    </main>
  );
}
