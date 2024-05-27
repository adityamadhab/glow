import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../components/StructureComponents/UserContext";
import { toast } from 'sonner';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    async function loginUser(e) {
        e.preventDefault();
        try {
            const res = await axios.post('/user/login', {
                email,
                password
            });
            await setUser(res.data.user);
            await localStorage.setItem('token', res.data.token);
            await navigate('/');
            toast.success('Login Sucessfull');
            
        } catch (error) {
            toast.warning('Login failed');
        }
    }

    return (
        <div className="mt-4 grow flex justify-around items-center">
            <div className="mb-40">
                <h1 className="mt-3 text-4xl text-center font-bold">Login</h1>
                <form className="mt-4 max-w-md mx-auto" onSubmit={loginUser}>
                    <label className="text-md text-black py-2 font-semibold">Email</label>
                    <input type="email" 
                        placeholder="johndoe@example.com"
                        value={email}
                        onChange={(e)=> {
                            setEmail(e.target.value);
                        }} 
                    />
                    <label className="text-md text-black font-semibold py-2">Password</label>
                    <input type="password" 
                        placeholder="password"
                        value={password}
                        onChange={(e)=> {
                            setPassword(e.target.value);
                        }}
                    />
                    <button className="primary">Login</button>
                    <div className="text-center py-2">
                        Don't have a account yet? <Link to={'/register'} className=" text-black underline">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}