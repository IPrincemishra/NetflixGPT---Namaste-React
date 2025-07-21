import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO_URL } from "../utils/constants"

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
    }, [])

    return (
        <div className='absolute w-full py-5 bg-gradient-to-b from-black flex justify-between items-center px-5 z-100'>
            <div>
                <img
                    className='w-40'
                    src={LOGO_URL}
                    alt="Logo" />
            </div>
            {user &&
                (<div className='flex gap-3 items-center'>
                    <p className="capitalize text-white">{user.displayName}</p>
                    <img
                        className='w-10 rounded-full shadow'
                        src={user.photoURL}
                        alt="usericon"
                    />
                    <button className='text-white cursor-pointer' onClick={handleSignOut}>(Sign out)</button>
                </div>
                )}
        </div>
    )
}

export default Header
