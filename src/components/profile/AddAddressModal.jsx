import { FiX } from "react-icons/fi";

function AddAddressModal({ onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] shadow-xl rounded-sm">

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-[22px] tracking-[2px] uppercase text-[#222]">
              Add New Address
            </h2>

            <button onClick={onClose}>
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Form */}
          <div className="p-4 md:p-5">
            <form className="space-y-6">

              {/* Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-[2px]">
                    First Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full border mt-2 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[2px]">
                    Last Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full border mt-2 px-3 py-2"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="text-[11px] uppercase tracking-[2px]">
                  Mobile Number *
                </label>

                <div className="flex mt-2 border">
                  <div className="px-4 flex items-center border-r">
                    🇮🇳 +91
                  </div>

                  <input
                    type="text"
                    placeholder="10-digit mobile number"
                    className="flex-1 px-4 py-3"
                  />
                </div>
              </div>

              {/* Pin */}
              <div>
                <label className="text-[11px] uppercase tracking-[2px]">
                  Pin Code *
                </label>

                <input
                  type="text"
                  placeholder="6 digits PIN"
                  className="w-full border mt-2 px-4 py-3"
                />
              </div>

              {/* Address */}
              <div>
                <label className="text-[11px] uppercase tracking-[2px]">
                  Address *
                </label>

                <textarea
                  rows="3"
                  placeholder="House No, Building, Street, Area"
                  className="w-full border border-[#e5e5e5] px-3 py-2 text-sm resize-none"
                />
              </div>

              {/* City + State */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-[2px]">
                    City / District *
                  </label>

                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full border mt-2 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[2px]">
                    State *
                  </label>

                  <select className="w-full border mt-2 px-4 py-3">
                    <option>Select State</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Delhi</option>
                  </select>
                </div>
              </div>

              {/* Checkbox */}
              <label className="flex items-center gap-3 text-sm">
                <input type="checkbox" />
                Make this my default shipping address
              </label>
            </form>
          </div>

          {/* Footer */}
          <div className="border-t bg-[#fafafa] p-4 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="border border-[#ddd] px-6 py-2 text-[10px] tracking-[2px] uppercase"
            >
              Cancel
            </button>

            <button className="bg-[#4b4b4b] text-white px-6 py-2 text-[10px] tracking-[2px] uppercase">
              Save Address
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default AddAddressModal