import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const [isSignInform, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInform)
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg" alt="" />
            </div>
            <form className="w-4/12 absolute top-3/12  right-3/6  translate-x-2/4  py-12 bg-black/80 flex flex-col gap-5 items-center text-white rounded">
                <h1 className="text-3xl font-bold">{isSignInform ? "Sign In" : "Sign Up"}</h1>
                {!isSignInform && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border-1 bg-gray-900/40 border-white/50 rounded w-8/12 outline-none  placeholder-white/50 px-3 py-4"
                    />
                )}
                <input
                    type="text"
                    placeholder="Email Address"
                    className="border-1 bg-gray-900/40 border-white/50 rounded w-8/12 outline-none  placeholder-white/50 px-3 py-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border-1 bg-gray-900/40 border-white/50 rounded w-8/12 outline-none placeholder-white/50 px-3 py-4"
                />
                <button className="bg-[#e50914] w-8/12 py-3 rounded text-[18px]">{isSignInform ? "Sign In" : "Sign Up"}</button>
                <p className="text-white/70 text-[1.1em]">{isSignInform ? (
                    <>
                        New to Netflix? <span onClick={toggleSignInForm} className="cursor-pointer text-white underline">Sign up now.</span>
                    </>
                ) : (
                    <>
                        Already have an account? <span onClick={toggleSignInForm} className="cursor-pointer text-white underline">Sign in now.</span>
                    </>
                )}
                </p>
            </form>
        </div>
    )
}

export default Login