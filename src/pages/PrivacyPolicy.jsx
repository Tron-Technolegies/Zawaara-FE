import { useEffect } from "react";
const PrivacyPolicy = () => {
         useEffect(()=>{
            window.scrollTo(0, 0)
          }, [])
  return (
    <div className="bg-[#1C1917] text-white min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Privacy Policy
        </h1>

        <p className="text-white-100 mb-8">
          Last Updated: June 20, 2026
        </p>

        <div className="space-y-8 bg-[#151110] p-10  rounded-4xl text-white leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Introduction
            </h2>
            <p>
              At Zawara, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p>
              We may collect the following types of information:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Name and contact information.</li>
              <li>Email address and phone number.</li>
              <li>Shipping and billing addresses.</li>
              <li>Order and purchase history.</li>
              <li>Account login information.</li>
              <li>Device, browser, and usage information.</li>
              <li>Customer support communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use your information to:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Process and fulfill orders.</li>
              <li>Manage your account.</li>
              <li>Provide customer support.</li>
              <li>Improve our products and services.</li>
              <li>Send order updates and notifications.</li>
              <li>Prevent fraud and enhance security.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar technologies to improve user
              experience, analyze website traffic, remember preferences,
              and enhance website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Sharing of Information
            </h2>
            <p>
              We do not sell your personal information. We may share your
              information with:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Payment service providers.</li>
              <li>Shipping and logistics partners.</li>
              <li>Technology and hosting providers.</li>
              <li>Legal and regulatory authorities when required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and
              physical safeguards to protect your personal information
              against unauthorized access, disclosure, alteration, or
              destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Retention
            </h2>
            <p>
              We retain your information only for as long as necessary to
              provide our services, comply with legal obligations, resolve
              disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Your Rights
            </h2>
            <p>
              Depending on applicable laws, you may have the right to:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access your personal information.</li>
              <li>Correct inaccurate information.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent where applicable.</li>
              <li>Request a copy of your information.</li>
              <li>Object to certain data processing activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Third-Party Services
            </h2>
            <p>
              Our website may contain links to third-party websites or
              services. We are not responsible for the privacy practices
              of those third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Children's Privacy
            </h2>
            <p>
              Our services are not intended for children under the age of
              13. We do not knowingly collect personal information from
              children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any
              changes will be posted on this page with an updated revision
              date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Contact Us
            </h2>

            <p>
              If you have any questions about this Privacy Policy or our
              data practices, please contact us:
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

export default PrivacyPolicy;