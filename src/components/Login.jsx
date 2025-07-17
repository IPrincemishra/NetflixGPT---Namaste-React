import { useRef, useState } from "react"
import Header from "./Header"
import { validateEmail } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [isSignInform, setIsSignInForm] = useState(true)
    const [errMsg, setErrMsg] = useState(null)
    const navigate = useNavigate()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInform)
    }

    const handleBtnClick = () => {
        // Validate the form data
        const msg = validateEmail(email.current.value, password.current.value)
        setErrMsg(msg)

        if (msg) return;

        // Sign in Sign up Logic
        if (!isSignInform) {
            // Sign Up Logic 
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            ).then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://i.imgur.com/WM6zTNc.png"
                }).then(() => {
                    navigate("/browse")
                }).catch((error) => {
                    setErrMsg(error.message)
                });
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorMessage, " : ", errorCode)
            });
        } else {
            // Sign in Logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            ).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorMessage, " : ", errorCode)
            });
        }


    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg" alt="" />
            </div>
            <form
                onSubmit={e => e.preventDefault()}
                className="w-4/12 absolute top-3/12  right-3/6  translate-x-2/4  py-12 bg-black/80 flex flex-col gap-5 items-center text-white rounded">
                <h1 className="text-3xl font-bold">{isSignInform ? "Sign In" : "Sign Up"}</h1>
                {!isSignInform && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="border-1 bg-gray-900/40 border-white/50 rounded w-8/12 outline-none  placeholder-white/50 px-3 py-4"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="border-1 bg-gray-900/40 border-white/50 rounded w-8/12 outline-none  placeholder-white/50 px-3 py-4"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="border-1 bg-gray-900/40 border-white/50 rounded w-8/12 outline-none placeholder-white/50 px-3 py-4"
                />
                {
                    errMsg === null ? " " : (
                        <p className="text-[#e50914]">{errMsg}</p>
                    )
                }
                <button
                    className="bg-[#e50914] w-8/12 py-3 rounded text-[18px] cursor-pointer"
                    onClick={handleBtnClick}>
                    {isSignInform ? "Sign In" : "Sign Up"}
                </button>
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