import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            sessionStorage.setItem('jwttoken', token);
            toast.success('Google Sign-Up Success');
        }
    }, []);

    const handleGoogleSignUp = () => {
        const googleSignUpUrl = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com";
        window.location.href = googleSignUpUrl;
    };

    const handleCreateAccount = () => {
        if (!sessionStorage.getItem('jwttoken')) {
            toast.error('Please sign up with Google first.');
        } else {
            toast.success('Account created successfully!');
            navigate('/'); // Navigate to the homepage or dashboard after account creation
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md">
                <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 text-center">
                        <h2 className="text-2xl font-bold text-white mb-6">Create New Account</h2>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <button 
                            type="button" 
                            onClick={handleGoogleSignUp} 
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign Up with Google
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <button 
                            type="button" 
                            onClick={handleCreateAccount} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Create Account
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <Link 
                            to="/login" 
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        >
                            Already have an account? Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
