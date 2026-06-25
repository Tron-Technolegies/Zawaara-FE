import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../api/api";  


const SignUp = () => {
 
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const hasMinLength = formData.password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(formData.password);
  const hasLowerCase = /[a-z]/.test(formData.password);
  const hasNumber = /\d/.test(formData.password);
  const hasSpecialChar = /[@$!%*?&]/.test(formData.password);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) =>{
  e.preventDefault();
 

 if (
  !formData.full_name ||
  !formData.email ||
  !formData.mobile ||
  !formData.password
 ){
  alert("Please fill all fields")
  return;
 }
 if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
  alert("Please enter a valid 10-digit mobile number");
  return;
}
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if (!passwordRegex.test(formData.password)) {
  alert(
    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
  );
  return;
}

 try{
  const response = await api.post("api/user/signup/",{
    full_name: formData.full_name,
    email:formData.email,
    mobile:formData.mobile,
    password:formData.password
  });
  console.log(response.data)
  alert("Account created successfully:");
  navigate("/login")
 }catch (error){
  console.log(error);

  if(error.response){
    alert(error.response.data.error);
  }else{
    alert("Something went wrong");
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
              Create Account
            </h1>

            <p className="mt-3 text-gray-500 text-sm md:text-base">
              Sign up to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="full_name"
                placeholder="Enter full name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
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

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="mobile"
                placeholder="Phone number"
                value={formData.mobile}
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
            </div>
            <p className="text-xs text-gray-500 mt-2">
                  Password must contain:
                </p>

                <ul className="text-xs mt-3 space-y-1">
                  <li className={hasMinLength ? "text-green-600" : "text-red-500"}>
                    ✓ Minimum 8 characters
                  </li>

                  <li className={hasUpperCase ? "text-green-600" : "text-red-500"}>
                    ✓ One uppercase letter
                  </li>

                  <li className={hasLowerCase ? "text-green-600" : "text-red-500"}>
                    ✓ One lowercase letter
                  </li>

                  <li className={hasNumber ? "text-green-600" : "text-red-500"}>
                    ✓ One number
                  </li>

                  <li className={hasSpecialChar ? "text-green-600" : "text-red-500"}>
                    ✓ One special character
                  </li>
                </ul>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 bg-black text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
            
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-red-500 font-medium hover:text-red-600"
              >
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;