import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            sessionStorage.setItem('jwttoken', token);
            toast.success('Google Login Success');
            usenavigate('/');
        }
    }, []);

    const handleGoogleLogin = () => {
        const googleLoginUrl = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com";
        window.location.href = googleLoginUrl;
    };

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:8000/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('userrole', resp.role);
                        usenavigate('/');
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md">
                <form onSubmit={ProceedLogin} className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-white mb-6">User Login</h2>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2">User Name <span className="text-red-500">*</span></label>
                        <input 
                            value={username} 
                            onChange={e => usernameupdate(e.target.value)} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" 
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-bold mb-2">Password <span className="text-red-500">*</span></label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={e => passwordupdate(e.target.value)} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" 
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            type="submit" 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                        <Link 
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" 
                            to={'/register'}
                        >
                            New User
                        </Link>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <button 
                            type="button" 
                            onClick={handleGoogleLogin} 
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
