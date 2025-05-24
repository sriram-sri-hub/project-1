import { Link } from "react-router-dom"; 

export default function Home() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center min-h-[80vh] px-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        {/* Decorative Gradient Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-2xl -z-10 animate-pulse"></div>

        <div className="text-white text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
          Welcome to <span className="text-yellow-300">HOME</span>
        </div>
        <div className="text-white text-lg md:text-xl mb-8 text-center max-w-xl drop-shadow">
          Organize your thoughts, manage your tasks, and bring your ideas to life — all in one place.
        </div>
        <Link to="/login">
          <button className="bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 hover:from-yellow-500 hover:to-indigo-600 text-white px-8 py-3 rounded-full shadow-xl text-lg font-semibold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300">
            Get Started
          </button>
        </Link>
      </section>
    </>
  );
}
