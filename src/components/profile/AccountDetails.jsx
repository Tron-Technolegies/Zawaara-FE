
import { useState, useEffect } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";





function AccountDetails() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
  });

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await api.get(
        "api/user/user_details/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
  fetchUserDetails();
}, []);

 
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("access");

    const response = await api.put(
      "api/user/update-profile/",
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    setUserData(response.data);

    alert(response.data.message);
  } catch (error) {
    console.log(error);
    alert("Failed to update profile");
  }
};

  const handleChange = (e) => {
  setUserData({
    ...userData,
    [e.target.name]: e.target.value,
  });
};




  return (
    <div className="bg-white border border-[#e5e5e5] p-6 md:p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-[11px] uppercase tracking-[2px] mb-2">
              First Name *
            </label>

            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
              className="w-full border border-[#e5e5e5] px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[2px] mb-2">
              Last Name *
            </label>

            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
              className="w-full border border-[#e5e5e5] px-4 py-3 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-[11px] uppercase tracking-[2px] mb-2">
            Email Address *
          </label>

          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full border border-[#e5e5e5] px-4 py-3 outline-none"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-[11px] uppercase tracking-[2px] mb-2">
            Mobile Number *
          </label>

          <div className="flex border border-[#e5e5e5]">
            <div className="px-4 flex items-center border-r">
              🇮🇳 +91
            </div>

            <input
              type="text"
              name="mobile"
              value={userData.mobile}
              onChange={handleChange}
              className="flex-1 px-4 py-3 outline-none"
            />
          </div>
        </div>

        {/* DOB + Gender */}
        {/* <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-[11px] uppercase tracking-[2px] mb-2">
              Date Of Birth
            </label>

            <input
              type="date"
              className="w-full border border-[#e5e5e5] px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[2px] mb-2">
              Gender
            </label>

            <select className="w-full border border-[#e5e5e5] px-4 py-3 outline-none">
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
        </div> */}

        {/* Newsletter */}
        <div>
          <label className="flex items-center gap-3 text-sm text-[#444]">
            <input type="checkbox" defaultChecked />

            Subscribe to our newsletter for early access to
            collections and exclusive offers.
          </label>
        </div>

        <hr />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="bg-[#4d4d4d] text-white px-10 py-4 uppercase tracking-[2px] text-[11px]"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => navigate("/change-password")}
            className="border border-[#ddd] px-10 py-4 uppercase tracking-[2px] text-[11px]"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default AccountDetails