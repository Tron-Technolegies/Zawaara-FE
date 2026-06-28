import { FiTruck } from "react-icons/fi";
import { useState } from "react";
import api from "../../api/api";

const inputBase =
  "w-full border rounded-sm px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400 bg-white";

const inputOk =
  "border-gray-200 focus:border-[#d8b98a] focus:ring-1 focus:ring-[#d8b98a]";

function Field({ children }) {
  return <div>{children}</div>;
}

export default function ShippingForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    country: "India",
    postal_code: "",
    is_default: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const full_name = `${formData.first_name} ${formData.last_name}`.trim();

    try {
      const token = localStorage.getItem("access");

      const response = await api.post(
        "api/user/address/add/",
        {
          full_name,
          email: formData.email,
          phone: formData.phone,
          address_line_1: formData.address_line_1,
          address_line_2: formData.address_line_2,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          postal_code: formData.postal_code,
          is_default: formData.is_default,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      alert("Address saved successfully.");

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        state: "",
        country: "India",
        postal_code: "",
        is_default: true,
      });
    } catch (error) {
      console.log(error);
      alert("Failed to save address.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Heading */}
      <div className="flex items-center gap-3 mb-4">
        <FiTruck className="text-[#d8b98a]" size={18} />

        <h2 className="uppercase tracking-[3px] text-sm font-medium">
          Shipping Information
        </h2>
      </div>

      <hr className="mb-6 border-gray-200" />

      {/* Email */}
      <Field>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          className={`${inputBase} ${inputOk}`}
        />
      </Field>

      <div className="space-y-4 mt-4">
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name *"
              className={`${inputBase} ${inputOk}`}
            />
          </Field>

          <Field>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name *"
              className={`${inputBase} ${inputOk}`}
            />
          </Field>
        </div>

        {/* Street Address */}
        <Field>
          <input
            type="text"
            name="address_line_1"
            value={formData.address_line_1}
            onChange={handleChange}
            placeholder="Street Address *"
            className={`${inputBase} ${inputOk}`}
          />
        </Field>

        {/* Apartment */}
        <Field>
          <input
            type="text"
            name="address_line_2"
            value={formData.address_line_2}
            onChange={handleChange}
            placeholder="Apartment / Suite (Optional)"
            className={`${inputBase} ${inputOk}`}
          />
        </Field>

        {/* City / State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City *"
              className={`${inputBase} ${inputOk}`}
            />
          </Field>

          <Field>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State *"
              className={`${inputBase} ${inputOk}`}
            />
          </Field>
        </div>

        {/* Country / Postal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`${inputBase} ${inputOk}`}
            >
              <option value="India">India</option>
              <option value="UAE">UAE</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </Field>

          <Field>
            <input
              type="text"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              placeholder="Postal Code *"
              className={`${inputBase} ${inputOk}`}
            />
          </Field>
        </div>

        {/* Phone */}
        <Field>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            className={`${inputBase} ${inputOk}`}
          />
        </Field>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full
            bg-[#d8b98a]
            hover:bg-[#a77a33]
            text-black
            py-4
            uppercase
            tracking-[3px]
            text-xs
            transition
          "
        >
          Continue to Review
        </button>
      </div>
    </form>
  );
}