import { useState } from "react";
import {
  MailOpenIcon as Envelope,
  User,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import signupImg from "/signup.jpg";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/User/UserSlice";
import { useSignupMutation } from "../../../redux/features/Api/ApiSlice";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [signup] = useSignupMutation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signup({
      email,
      name: username,
      password,
      confirmPassword,
    });
    console.log(res.data);
    dispatch(setUser(res.data));

    if (res.data.success === true) {
      toast.success("User registered successfully!");
      window.location.href = "/";
    } else {
      toast.error("User registration failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a20]">
      <Link to={"/"}>
        <div className="absolute top-8 left-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff0099] to-[#0066ff] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#080814] flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
            <span className="ml-2 text-white font-bold text-xl">
              <span className="text-[#ff0099]">AD</span>
              <span className="text-[#0066ff]">FUSION</span>
              <span className="text-sm text-gray-400 ml-1">Labs</span>
            </span>
          </div>
        </div>
      </Link>
      {/* Left side with logo and illustration */}
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-8 relative">
        {/* Illustration */}
        <div className="w-full max-w-md">
          <img
            src={signupImg}
            alt="Data visualization illustration"
            className="w-full h-auto"
            style={{
              clipPath: "inset(0 0 0 0)",
              transform: "scale(0.8)",
            }}
          />
        </div>
      </div>

      {/* Right side with sign up form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#1e1e24] rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Sign up</h2>

          <p className="text-gray-300 mb-6">
            If you already have an account register <br />
            You can{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              login here !
            </a>
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Envelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="bg-transparent border-b border-gray-600 text-white w-full pl-10 pb-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Username field */}
            <div className="mb-6">
              <label htmlFor="username" className="block text-white mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type="text"
                  id="username"
                  className="!bg-transparent border-b border-gray-600 text-white w-full pl-10 pb-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name here"
                  value={email}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-white mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="!bg-transparent border-b border-gray-600 text-white w-full pl-10 pb-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />{" "}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password field */}
            <div className="mb-8">
              <label
                htmlFor="confirmPassword"
                className="block text-white mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="bg-transparent border-b border-gray-600 text-white w-full pl-10 pr-10 pb-2 focus:outline-none focus:border-blue-500"
                  placeholder="Confirm your Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Register button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
