import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../api/api"

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try{
      const response = await api.post("api/user/login/",{
        email:formData.email,
        password:formData.password
      });

      localStorage.setItem(
          "access",
          response.data.tokens.access
        );

        localStorage.setItem(
          "refresh",
          response.data.tokens.refresh
        );
        
      console.log(response.data)
      alert("Login Successfully")
      navigate("/")
    }catch(error){
      console.log(error);
    
    if(error.response){
      alert(error.response.data.error);
    }else{
      alert("Something went wrong")
    }
  }
};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Welcome Back
            </h1>
            <p className="mt-3 text-gray-500 text-sm md:text-base">
              Sign in to access your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Username
              </label>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button>
              </div>

              <div className="flex justify-end mt-3">
                <NavLink
                  to="/forgot"
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Forgot password?
                </NavLink>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 bg-black text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="text-red-500 font-medium hover:text-red-600"
              >
                Sign up now
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;