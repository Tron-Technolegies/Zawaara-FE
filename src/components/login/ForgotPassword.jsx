import { useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../../api/api"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email address");
      return;
    }

    try {
      const response = await api.post(
        "api/user/forgot-password/",
        {
          email: email,
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.error ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Forgot Password?
            </h1>

            <p className="mt-3 text-gray-500 text-sm md:text-base">
              Enter your email address and we'll send you a password reset link.
            </p>
          </div>

          {/* Success Message */}
          {message && (
            <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
              <p className="text-sm text-green-700">{message}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-black text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Send Reset Link
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <span>Remember your password?</span>
            <NavLink
              to="/login"
              className="text-red-500 font-medium hover:text-red-600"
            > Log in 
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;