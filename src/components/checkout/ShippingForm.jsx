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

export default function ShippingForm({onContinue,form,
    setForm,}) {
    // const [form, setForm] = useState({
    //   first_name: "",
    //   last_name: "",
    //   email: "",
    //   phone: "",
    //   address_line_1: "",
    //   address_line_2: "",
    //   city: "",
    //   state: "",
    //   country: "India",
    //   postal_code: "",
    //   is_default: true,
    // });

  const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const full_name = `${form.first_name} ${form.last_name}`.trim();

    try {
      await api.post("api/user/address/add/", {
        full_name,
        email: form.email,
        phone: form.phone,
        address_line_1: form.address_line_1,
        address_line_2: form.address_line_2,
        city: form.city,
        state: form.state,
        country: form.country,
        postal_code: form.postal_code,
        is_default: form.is_default,
      });

      onContinue();
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.detail || "Failed to save address. Please check your details.");
    } finally {
      setSaving(false);
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
          value={form.email}
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
              value={form.first_name}
              onChange={handleChange}
              placeholder="First Name *"
              className={`${inputBase} ${inputOk}`}
            />
          </Field>

          <Field>
            <input
              type="text"
              name="last_name"
              value={form.last_name}
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
            value={form.address_line_1}
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
            value={form.address_line_2}
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
              value={form.city}
              onChange={handleChange}
              placeholder="City *"
              className={`${inputBase} ${inputOk}`}
            />
          </Field>

          <Field>
            <input
              type="text"
              name="state"
              value={form.state}
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
              value={form.country}
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
              value={form.postal_code}
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
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            className={`${inputBase} ${inputOk}`}
          />
        </Field>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={saving}
          className="
            w-full
            bg-[#d8b98a]
            hover:bg-[#a77a33]
            disabled:opacity-60
            disabled:cursor-not-allowed
            text-black
            py-4
            uppercase
            tracking-[3px]
            text-xs
            transition
            cursor-pointer
          "
        >
          {saving ? "Saving..." : "Continue to Review"}
        </button>
      </div>
    </form>
  );
}