import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CaretRightIcon,
  EyeIcon,
  EyeSlashIcon,
  HouseIcon,
} from "@phosphor-icons/react";
import authUser from "../../store/user.store";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const { createUser, message, resetMessage } = authUser();

  useEffect(() => {
    setInterval(() => {
      resetMessage();
    }, 3000);
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Clicked");

    await createUser(name, email, password, role);
  };

  const handleSendCode = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="bg-[url(/images/shopHero.jpg)]">
        <div className=" backdrop-brightness-50 text-white w-full">
          <div className=" py-12 px-12 flex  items-center gap-4 text-xl container m-auto '  ">
            <HouseIcon /> Account <CaretRightIcon /> Signup
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>
          {message ? message : ""}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full border px-6 py-4 rounded-full border-gray-300  focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border px-6 py-4 rounded-full border-gray-300  focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {!isVerified ? (
              <button onClick={handleSendCode}>
                Send email verification code
              </button>
            ) : (
              <div></div>
            )}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border px-6 py-4 rounded-full border-gray-300  pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeSlashIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>

            <div className="flex gap-4">
              <div className="flex gap-2">
                <input
                  type="radio"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  name="role"
                  id="user"
                />
                <label htmlFor="user">User</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  name="role"
                  id="seller"
                />
                <label htmlFor="seller">Seller</label>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm py-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                Accept all terms and conditions
              </label>
            </div>

            <button
              type="submit"
              disabled={isVerified ? false : true}
              className="w-full cursor-pointer bg-green-600 text-white font-medium py-4 rounded-full hover:bg-green-700 transition"
            >
              Signup
            </button>

            <p className="text-center text-md mt-4 text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="text-green-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
