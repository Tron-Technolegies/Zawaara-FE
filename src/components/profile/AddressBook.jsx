import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import AddAddressModal from "./AddAddressModal";

function AddressBook() {
    const [showModal, setShowModal] = useState(false);  
    const addresses = [
    {
      id: 1,
      name: "Aanya Sharma",
      address:
        "142, Palm Grove Villas, Phase 2, Bandra West",
      city: "Mumbai, Maharashtra 400050",
      phone: "+91 98765 43210",
      default: true,
    },
    {
      id: 2,
      name: "Rohan Sharma",
      address:
        "Tech Park Tower B, 4th Floor, Electronic City Phase 1",
      city: "Bengaluru, Karnataka 560100",
      phone: "+91 91234 56780",
      default: false,
    },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        
        {/* Existing Addresses */}
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-white border border-[#e5e5e5] p-6 min-h-[220px]"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-[28px] font-serif text-[#222]">
                {address.name}
              </h3>

              {address.default && (
                <span className="border border-[#d9d9d9] px-2 py-1 text-[9px] uppercase tracking-[1px]">
                  Default
                </span>
              )}
            </div>

            <div className="mt-5 text-[#777] text-sm leading-7">
              <p>{address.address}</p>
              <p>{address.city}</p>

              <p className="mt-3">
                <span className="text-[#444]">T:</span>{" "}
                {address.phone}
              </p>
            </div>

            <hr className="my-5" />

            <div className="flex gap-6">
              <button className="uppercase text-[10px] tracking-[2px] text-[#333] hover:text-black">
                Edit
              </button>

              <button className="uppercase text-[10px] tracking-[2px] text-red-500 hover:text-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Add Address Card */}
        <button
        onClick={() => setShowModal(true)}
          className="
            border border-dashed border-[#d8d8d8]
            bg-white
            min-h-[220px]
            flex flex-col
            items-center
            justify-center
            text-center
            hover:bg-[#fafafa]
            transition
          "
        >
          <div className="w-12 h-12 rounded-full bg-[#f3f3f3] flex items-center justify-center mb-5">
            <FiPlus className="text-[#666] text-xl" />
          </div>

          <h3 className="font-serif text-xl text-[#222]">
            Add a New Address
          </h3>

          <p className="mt-3 text-sm text-[#8a8a8a] max-w-[220px]">
            Add another address for faster checkout.
          </p>
        </button>
      
       

      </div>
       <AddAddressModal
          open={showModal}
          onClose={() => setShowModal(false)}
        />
    </div>
  )
}

export default AddressBook