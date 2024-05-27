import { useContext } from "react";
import { UserContext } from "../components/StructureComponents/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountNavbar } from "../components/AccountComponents/AccountNavbar";

export function ProfilePage() {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    let subpage = pathname.split('/')?.[2];
    if (subpage === undefined) {
        subpage = 'profile';
    }

    if (!user) {
        return navigate('/login');
    }

    return (
        <div>
            <AccountNavbar />
            {subpage === 'profile' && (
                <div className="flex flex-col items-center text-center max-w-lg mx-auto ">

                    <div className="w-12 h-12 rounded-full bg-primary  flex items-center justify-center mb-5">
                        <span className="text-2xl text-white">{user.name[0].toUpperCase()}</span>
                    </div>

                    <h3 class="text-2xl font-semibold mb-3">{user.name}</h3>

                    Logged in as {user.name} ({user.email})<br />

                    <button onClick={async () => {
                        await clearUser();
                        await localStorage.removeItem('token');
                        navigate('/');
                    }} className="primary max-w-sm mt-2">Logout</button>

                </div>

            )}
        </div>
    )
}