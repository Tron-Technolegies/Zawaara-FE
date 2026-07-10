import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import api from "../api/api";

function ChangePassword() {
  useEffect(()=>{
          window.scrollTo(0, 0)
        }, [])
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.old_password ||
      !formData.new_password ||
      !formData.confirm_password
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.new_password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("access");

      const response = await api.put(
        "api/user/change-password/",
        {
          old_password: formData.old_password,
          new_password: formData.new_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

      setFormData({
        old_password: "",
        new_password: "",
        confirm_password: "",
      });

    } catch (error) {
      alert(
        error.response?.data?.error ||
        "Failed to change password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-[#e5e5e5] p-6 md:p-8">
      <h2 className="text-xl font-semibold mb-6">
        Change Password
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Old Password */}
        <div>
          <label className="block text-[11px] uppercase tracking-[2px] mb-2">
            Current Password
          </label>

          <div className="relative">
            <input
              type={showOld ? "text" : "password"}
              name="old_password"
              value={formData.old_password}
              onChange={handleChange}
              className="w-full border border-[#e5e5e5] px-4 py-3 pr-12 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowOld(!showOld)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showOld ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <div className="text-right">
            <NavLink
                to="/forgot"
                className="text-sm text-red-500 hover:text-red-600"
            >
                Forgot your current password?
            </NavLink>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block text-[11px] uppercase tracking-[2px] mb-2">
            New Password
          </label>

          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              name="new_password"
              value={formData.new_password}
              onChange={handleChange}
              className="w-full border border-[#e5e5e5] px-4 py-3 pr-12 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showNew ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-[11px] uppercase tracking-[2px] mb-2">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="w-full border border-[#e5e5e5] px-4 py-3 pr-12 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#4d4d4d] text-white px-10 py-4 uppercase tracking-[2px] text-[11px]"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>

      </form>
    </div>
  );
}

export default ChangePassword;