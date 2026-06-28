
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
              Shipping Details
            </h2>

            <p className="mb-4">
              We provide shipping and delivery of our Products all across India and most of the countries across the world. We aim to provide the best customer experience for you by tying-up and partnering with leading logistics service providers to handle your order in the best possible way and to ensure that you have a hassle-free experience in receiving the Product that you have ordered from our online store. We make all commercially reasonable endeavours to ensure that the Products are delivered to you in a timely fashion.
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-4 text-[#c5c5c5]">
              <li>Ready products will be dispatched within 24 hours.</li>
              <li>For any alteration / customisation you can communicate with our designer: <strong>9047810000</strong>.</li>
              <li>Our team will get in touch with you as soon as the order is placed.</li>
              <li>All India shipping available.</li>
              <li>For our customers in Kerala, delivery will be within 5-10 working days.</li>
              <li>Shipping time depends on the delivery address you provide.</li>
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