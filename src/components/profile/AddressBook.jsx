import { FiPlus } from "react-icons/fi";
import { useState,useEffect  } from "react";
import api from "../../api/api";
import AddAddressModal from "./AddAddressModal";


function AddressBook() {
    const [showModal, setShowModal] = useState(false);  
    const [addresses, setAddresses] = useState([]);


    const fetchAddresses = async () => {
        try {
          const token = localStorage.getItem("access");

          const response = await api.get(
            "api/user/address/",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setAddresses(response.data);
        } catch (error) {
          console.log(error);
        }
      };
        useEffect(() => {
          fetchAddresses();
        }, []);



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
                {address.full_name}
              </h3>

              {address.is_default && (
                <span className="border border-[#d9d9d9] px-2 py-1 text-[9px] uppercase tracking-[1px]">
                  Default
                </span>
              )}
            </div>

            <div className="mt-5 text-[#777] text-sm leading-7">
              <p>{address.address_line_1}</p>

              {address.address_line_2 && (
                <p>{address.address_line_2}</p>
              )}

              <p>
                {address.city}, {address.state} {address.postal_code}
              </p>

              <p>{address.country}</p>

              <p className="mt-3">
                <span className="text-[#444]">T:</span> {address.phone}
              </p>
            </div>

            <hr className="my-5" />

            <div className="flex gap-6">
              <button className="uppercase text-[10px] tracking-[2px]">
                Edit
              </button>

              <button className="uppercase text-[10px] tracking-[2px] text-red-500">
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
        onSuccess={fetchAddresses}
        />
    </div>
  )
}

export default AddressBook