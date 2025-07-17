import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

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


    return (
        <div className='absolute w-full py-5 bg-gradient-to-b from-black flex justify-between items-center px-5 z-10'>
            <div>
                <img
                    className='w-40'
                    src="https://imgs.search.brave.com/w2yL9OzZmK7QmSUlMIQNZSllLSCpSroPpwjr_3IV4Hk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA4L05ldGZsaXhf/MjAxNV9sb2dvLnN2/Zw"
                    alt="Logo" />
            </div>
            {user &&
                (<div className='flex gap-3 items-center'>
                    <p className="capitalize text-white">{user.displayName}</p>
                    <img
                        className='w-10 rounded'
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
