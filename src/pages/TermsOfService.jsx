import { useEffect } from "react";

const TermsOfService = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    
    },[])
  return (
    <div className="bg-[#1C1917] text-white min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Terms of Service
        </h1>

        <p className="text-white-100 mb-8">
          Last Updated: June 20, 2026
        </p>

        <div className="bg-[#151110] p-10  rounded-4xl text-white space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using our website, you agree to comply with
              and be bound by these Terms of Service. If you do not agree
              with any part of these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years old or have the consent of a
              parent or legal guardian to use our services and purchase
              products from our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. Account Registration
            </h2>
            <p>
              To access certain features, you may be required to create an
              account. You are responsible for maintaining the
              confidentiality of your account credentials and for all
              activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. Products and Pricing
            </h2>
            <p>
              We strive to ensure that all product descriptions, images,
              and pricing information are accurate. However, we reserve the
              right to correct errors, inaccuracies, or omissions at any
              time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. Orders and Payments
            </h2>
            <p>
              All orders are subject to acceptance and availability. We
              reserve the right to cancel or refuse any order for any
              reason. Payment must be completed before products are
              shipped.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              6. Shipping and Delivery
            </h2>
            <p>
              Delivery times are estimates and may vary depending on
              location, carrier services, and other factors beyond our
              control. We are not responsible for delays caused by shipping
              providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              7. Returns and Refunds
            </h2>
            <p>
              Customers may request returns or refunds in accordance with
              our Return Policy. Returned items must be unused and in their
              original packaging unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              8. Intellectual Property
            </h2>
            <p>
              All content on this website, including logos, text, graphics,
              images, and software, is the property of the company and is
              protected by applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              9. Prohibited Activities
            </h2>
            <p>
              Users agree not to misuse the website, attempt unauthorized
              access, distribute harmful software, engage in fraudulent
              activities, or violate any applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              10. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, we shall not be
              liable for any indirect, incidental, special, or
              consequential damages arising from your use of the website or
              purchase of products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              11. Privacy
            </h2>
            <p>
              Your use of our website is also governed by our Privacy
              Policy, which explains how we collect, use, and protect your
              personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              12. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any
              time. Changes will become effective immediately upon posting
              on the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              13. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and interpreted in
              accordance with the laws of the applicable jurisdiction,
              without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              14. Contact Us
            </h2>
            <p>
              If you have any questions regarding these Terms of Service,
              please contact us:
            </p>

            <div className="mt-3">
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

export default TermsOfService;