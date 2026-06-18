import { useState } from "react";
import {
  FiUser,
  FiPackage,
  FiHeart,
  FiMapPin,
  FiCreditCard,
  FiLogOut,
} from "react-icons/fi";
import AccountDetails from "../components/profile/AccountDetails";
import OrdersReturns from "../components/profile/OrdersReturns";
import AddressBook from "../components/profile/AddressBook";
 
function MyAccountPage() {
  const [activeTab, setActiveTab] = useState(null);

  const menuItems = [
    {
      id: "account",
      label: "Account Details",
      icon: <FiUser />,
    },
    {
      id: "orders",
      label: "Orders & Returns",
      icon: <FiPackage />,
    },
    {
      id: "wishlist",
      label: "My Wishlist",
      icon: <FiHeart />,
    },
    {
      id: "address",
      label: "Address Book",
      icon: <FiMapPin />,
    },
    {
      id: "payment",
      label: "Payment Methods",
      icon: <FiCreditCard />,
    },
  ];

  return (
    <section className="bg-[#f8f7f4] min-h-screen py-16">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl tracking-[6px] uppercase">
            My Account
          </h1>

          <p className="uppercase text-[10px] tracking-[3px] mt-2">
            Profile
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Sidebar */}
          <div className="w-full lg:w-[280px] lg:min-w-[280px] lg:max-w-[280px] flex-shrink-0  bg-white border border-[#e8e8e8]">
            <div className="p-4">

              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-4 text-left uppercase text-[11px] tracking-[2px] transition
                    ${
                      activeTab === item.id
                        ? "border-l-2 border-black bg-[#fafafa]"
                        : ""
                    }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}

              <div className="border-t mt-4 pt-4">
                <button className="flex items-center gap-3 px-4 py-4 uppercase text-[11px] tracking-[2px]">
                  <FiLogOut />
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 min-w-0">
            {activeTab === "account" && <AccountDetails/>}
            {activeTab === "orders" && <OrdersReturns/>}
            {/* {activeTab === "wishlist" && } */}
            {activeTab === "address" && <AddressBook/>}
            {/* {activeTab === "payment" && <PaymentMethods />} */}
          </div>

        </div>
      </div>
    </section>
    
  )
}

export default MyAccountPage