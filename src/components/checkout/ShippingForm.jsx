import { FiTruck } from "react-icons/fi";
import { useState, useEffect } from "react";
import api from "../../api/api";
import { INDIAN_STATES } from "../../constants/states";

const inputBase =
  "w-full border rounded-sm px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400 bg-white";

const inputOk =
  "border-gray-200 focus:border-[#d8b98a] focus:ring-1 focus:ring-[#d8b98a]";

function Field({ children }) {
  return <div>{children}</div>;
}

export default function ShippingForm({ onContinue, form, setForm }) {
  useEffect(() => {
    const fetchDefaultAddress = async () => {
      const token = localStorage.getItem("access");
      if (!token) return;

      // Only fetch and fill if shipping address is empty
      if (form.address_line_1 || form.first_name) return;

      try {
        const response = await api.get("api/user/address/default/", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data && (response.data.address_line_1 || response.data.full_name)) {
          const addr = response.data;
          const parts = (addr.full_name || "").trim().split(" ");
          const firstName = parts[0] || "";
          const lastName = parts.slice(1).join(" ") || "";

          setForm((prev) => ({
            ...prev,
            first_name: firstName,
            last_name: lastName,
            email: addr.email || prev.email || "",
            phone: addr.phone || prev.phone || "",
            address_line_1: addr.address_line_1 || "",
            address_line_2: addr.address_line_2 || "",
            city: addr.city || "",
            state: addr.state || "",
            country: addr.country || "India",
            postal_code: addr.postal_code || "",
            is_default: true,
          }));
          return;
        }
      } catch (err) {
        // Fallback: fetch profile info
        try {
          const userRes = await api.get("api/user/user_details/", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (userRes.data) {
            setForm((prev) => ({
              ...prev,
              first_name: userRes.data.first_name || prev.first_name || "",
              last_name: userRes.data.last_name || prev.last_name || "",
              email: userRes.data.email || prev.email || "",
              phone: userRes.data.mobile || prev.phone || "",
            }));
          }
        } catch (e) {
          // ignore
        }
      }
    };

    fetchDefaultAddress();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
        is_default: form.is_default !== undefined ? form.is_default : true,
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
          required
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
              required
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
              required
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
            required
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
              required
              className={`${inputBase} ${inputOk}`}
            />
          </Field>

          <Field>
            {form.country === "India" || !form.country ? (
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                className={`${inputBase} ${inputOk}`}
              >
                <option value="">Select State *</option>
                {INDIAN_STATES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State / Province *"
                required
                className={`${inputBase} ${inputOk}`}
              />
            )}
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
              required
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
            required
            className={`${inputBase} ${inputOk}`}
          />
        </Field>

        {/* Default Shipping Checkbox */}
        <div className="pt-2">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              name="is_default"
              checked={form.is_default ?? true}
              onChange={handleChange}
              className="accent-[#d8b98a] w-4 h-4 cursor-pointer"
            />
            <span className="text-xs text-gray-700">
              Save this as my default shipping address
            </span>
          </label>
        </div>

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