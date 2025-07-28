import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants"
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error", error)
        });
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(
                    addUser(
                        { uid: uid, email: email, displayName: displayName, photoURL: photoURL }
                    )
                )
                navigate("/browse")
            }
            else {
                dispatch(removeUser())
                navigate("/")
            }
        })

        // 
        return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
       dispatch(changeLanguage(e.target.value))
        
    }


    return (
        <div className='absolute w-full py-5 bg-gradient-to-b from-black flex justify-between items-center px-5 z-100'>
            <div>
                <Link to="/browse">
                    <img
                        className='w-40'
                        src={LOGO_URL}
                        alt="Logo" />
                </Link>
            </div>
            {user &&
                (
                    <>
                        <div>
                            <button className="px-4 py-2 cursor-pointer text-white bg-purple-800 rounded-2xl"
                                onClick={handleGptSearchClick}>GPT Search</button>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <select
                                className="text-white bg-zinc-900 border border-zinc-700
                                 rounded-md px-4 py-2 focus:outline-none focus:border-[#D81F26] transition-colors"
                                onChange={handleLanguageChange}
                            >
                                {SUPPORTED_LANGUAGES.map((lang) =>
                                (
                                    <option key={lang.identifer} value={lang.identifer}>
                                        {lang.name}
                                    </option>
                                )
                                )}
                            </select>

                            <p className="capitalize text-white">{user.displayName}</p>
                            <img
                                className='w-10 rounded-full shadow'
                                src={user.photoURL}
                                alt="usericon"
                            />
                            <button className='text-white cursor-pointer' onClick={handleSignOut}>(Sign out)</button>
                        </div>
                    </>
                )}
        </div>
    )
}

export default Header
