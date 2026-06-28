import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#1C1917] text-white min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif tracking-[4px] text-center mb-8 uppercase">
          Privacy Policy
        </h1>

        <div className="space-y-8 bg-[#151110] p-6 md:p-10 rounded-2xl text-[#dcdcdc] leading-relaxed text-sm">
          <section className="space-y-4">
            <p>
              This website/ online platform facilitates the sale of apparels, accessories and other products under the brand name <strong>“Zawara”</strong> and is not associated with any sub brands or other brands.
            </p>
            <p>
              This privacy policy governs your use of this Platform.
            </p>
            <p>
              By using, browsing, accessing, or purchasing from the Zawara Boutique Platform you agree to be bound by the terms of this Privacy Policy and consent to the collection, storage, possession, dealing, handling, sharing, disclosure or transfer of your information in accordance with the terms of this Policy. We shall not use the User’s information in any manner except as provided under this Privacy Policy. Capitalised terms used herein if not defined shall have the same meaning as ascribed to them under the Terms.
            </p>
            <p>
              This Privacy Policy sets out the type of information collected from the Users, including the nature of the Sensitive Personal Data or Information (defined hereinafter), the purpose, means and modes of usage of such information and how and to whom we shall disclose or transfer such information.
            </p>
            <p>
              You may at any time withdraw your consent for collection and use of your information including Personal Information.
            </p>
            <p>
              However, please note that if you withdraw your consent, we may no longer be able to provide you with the corresponding service for which you have withdrawn your consent.
            </p>
            <p>
              Please take a moment to familiarize yourself with our Privacy Policy. If you do not agree with any provisions of the Terms or this Privacy Policy, we advise you to not use or access this Platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif uppercase tracking-[2px] text-white mb-4 border-b border-[#333] pb-2">
              Use of Information Collected
            </h2>
            <p className="mb-4">
              We may collect, use or process your information including Personal Information and Sensitive Personal Data or Information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[#c5c5c5]">
              <li>For creating and giving you access to your registered account on the Ritu Kumar Platform.</li>
              <li>To develop, deliver, process and improve our Products, services, content in order to personalize and improve your experience.</li>
              <li>To inform you about our Products, services, offers, updates, upcoming events, including providing you information in relation to order confirmations, invoices, technical notices, security alerts.</li>
              <li>For internal analytical and research purposes such as auditing, data analysis and research to improve Our Products, services and customer communications.</li>
              <li>To meet any legal or regulatory requirement or comply with a request from any governmental or judicial authority.</li>
              <li>To resolve any request, dispute, grievance or complaint raised by you in relation to your use of the Zawara Boutique online Platform.</li>
              <li>To detect or monitor any fraudulent or illegal activity on the Zawara Boutique online Platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif uppercase tracking-[2px] text-white mb-4 border-b border-[#333] pb-2">
              Contact Details
            </h2>
            <p className="mb-4">
              In case, you have any questions, grievance or complaints about this Privacy Policy, or the Zawara Boutique online Platform, you may contact us on the below mentioned details:
            </p>
            <div className="bg-[#1C1917] p-5 rounded-lg border border-[#2d2d2d] space-y-2 font-mono text-xs text-[#d8b98a] tracking-wide">
              <p>Email: <a href="mailto:zawaradesigns@gmail.com" className="hover:underline">zawaradesigns@gmail.com</a></p>
              <p>Mobile: <a href="tel:+919037810000" className="hover:underline">9037810000</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;