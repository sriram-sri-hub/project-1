import { Link, Outlet } from "react-router";

function BasicLayouts() {
    return (
        <>
            <header className="bg-black text-white py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-6">
                <div className="text-2xl font-semibold flex items-center gap-2">
                    <span role="img" aria-label="notebook">
                        <Link to={'/home'}>📚</Link>
                    </span> HOME
                </div>
                <div className="mt-3 sm:mt-0 flex gap-3">
                    <Link to={'/login'}>
                        <button className="bg-black border-2 border-white text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            Sign In
                        </button>
                    </Link>
                    <Link to={'/sign-up'}>
                        <button className="bg-white text-black px-4 py-2 rounded border border-black hover:bg-gray-200 transition">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </header>
            <main className="">
                <Outlet />
            </main>
        </>
    );
}

export default BasicLayouts;
