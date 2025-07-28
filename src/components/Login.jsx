import { useRef, useState } from "react"
import Header from "./Header"
import { validateEmail } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { BG_URL, USERICON_URL } from "../utils/constants";

const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true)
    const [errMsg, setErrMsg] = useState(null)

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)


    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm)
    }

    const handleBtnClick = () => {
        // Validate the form data
        const msg = validateEmail(email.current.value, password.current.value)
        setErrMsg(msg)

        if (msg) return;

        // Sign in Sign up Logic
        if (!isSignInForm) {
            // Sign Up Logic 
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USERICON_URL
                    })
                        .then(() => {
                        })
                        .catch((error) => {
                            setErrMsg(error.message)
                        });
                })
                .catch((error) => {
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
                // eslint-disable-next-line no-unused-vars
                const user = userCredential.user;
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
                <img src={BG_URL} alt="IMG" />
            </div>
            <form
                onSubmit={e => e.preventDefault()}
                className="w-4/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  py-12 bg-black/80 flex flex-col gap-5 items-center text-white rounded">
                <h1 className="text-3xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
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
                    autoComplete="email"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="border-1 bg-gray-900/40 border-white/50 rounded w-8/12 outline-none placeholder-white/50 px-3 py-4"
                    autoComplete="current-password"
                />
                {
                    errMsg === null ? " " : (
                        <p className="text-[#e50914]">{errMsg}</p>
                    )
                }
                <button
                    className="bg-[#e50914] w-8/12 py-3 rounded text-[18px] cursor-pointer"
                    onClick={handleBtnClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="text-white/70 text-[1.1em]">{isSignInForm ? (
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