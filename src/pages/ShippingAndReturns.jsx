
import { useEffect } from "react";
const ShippingAndReturns = () => {
        useEffect(()=>{
          window.scrollTo(0,0)
        },[])

  return (
    <div className="bg-[#1C1917] text-white min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Shipping & Returns Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Last Updated: June 20, 2026
        </p>

        <div className="space-y-8 bg-[#151110] p-10  rounded-4xl text-white leading-relaxed">
          {/* Shipping Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Shipping Policy
            </h2>

            <p>
              We strive to process and deliver your orders as quickly as
              possible. Orders are typically processed within 1–3 business
              days after payment confirmation.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Orders are processed Monday through Saturday.</li>
              <li>Shipping times may vary depending on your location.</li>
              <li>Tracking information will be provided once your order ships.</li>
              <li>Delivery delays may occur during holidays or peak seasons.</li>
              <li>Shipping charges are calculated during checkout.</li>
            </ul>
          </section>

          {/* Delivery Times */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Estimated Delivery Times
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Kerala: 2–5 business days</li>
              <li>South India: 3–7 business days</li>
              <li>Rest of India: 5–10 business days</li>
              <li>Remote locations may require additional time.</li>
            </ul>
          </section>

          {/* Returns Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Return Policy
            </h2>

            <p>
              Customer satisfaction is important to us. If you are not
              completely satisfied with your purchase, you may request a
              return subject to the conditions below.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Returns must be requested within 7 days of delivery.</li>
              <li>Items must be unused and in original condition.</li>
              <li>Products must include original packaging and tags.</li>
              <li>Proof of purchase is required for all returns.</li>
            </ul>
          </section>

          {/* Non-Returnable Items */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Non-Returnable Items
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Used or damaged products caused by customer misuse.</li>
              <li>Customized or personalized items.</li>
              <li>Products marked as final sale.</li>
              <li>Gift cards and promotional items.</li>
            </ul>
          </section>

          {/* Refunds */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Refund Policy
            </h2>

            <p>
              Once your returned item is received and inspected, we will
              notify you regarding the approval or rejection of your refund.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Approved refunds are processed within 5–10 business days.</li>
              <li>Refunds are issued to the original payment method.</li>
              <li>Bank processing times may vary.</li>
            </ul>
          </section>

          {/* Damaged Products */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Damaged or Incorrect Products
            </h2>

            <p>
              If you receive a damaged, defective, or incorrect product,
              please contact us within 48 hours of delivery with photos of
              the item and packaging. We will arrange a replacement or
              refund where applicable.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Contact Us
            </h2>

            <p>
              If you have any questions regarding shipping, returns, or
              refunds, please contact us:
            </p>

            <div className="mt-4 space-y-1">
              <p>Email: support@zawara.com</p>
              <p>Phone: +91 XXXXX XXXXX</p>
              <p>Address: Kerala, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingAndReturns;