import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function ContactPage() {
  const whatsappNumber = "9846080226";

  return (
    <div className="bg-[#f8f7f4] min-h-screen">
      {/* Hero */}
      <section className="py-20 text-center border-b">
        <p className="uppercase tracking-[5px] text-sm text-gray-500">
          Contact Us
        </p>

        <h1 className="text-4xl md:text-5xl font-light mt-4">
          We'd Love to Hear From You
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 leading-8">
          Whether you have questions about our collections, appointments,
          orders, or collaborations, our team is here to help.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-12">

        {/* Contact Information */}
        <div className="space-y-8">

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Get in Touch
            </h2>
          </div>

          <div className="flex gap-5">
            <FiPhone className="text-2xl mt-1" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-600 mt-1">
                +91 9037810000
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <FiMail className="text-2xl mt-1" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-600 mt-1">
                zawaradesigns@gmail.com
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <FiMapPin className="text-2xl mt-1" />
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-gray-600 mt-1">
                Zawara Boutique, JTS Road,
                <br />
                Kodungallur, Thrissur district,
                <br />
                680664
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <FiClock className="text-2xl mt-1" />
            <div>
              <h3 className="font-medium">Business Hours</h3>
              <p className="text-gray-600 mt-1">
                Monday – Saturday
                <br />
                10:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="pt-6 border-t">

            <h3 className="font-medium mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 border rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 border rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaFacebookF />
              </a>

            </div>

          </div>

        </div>

        {/* Right Card */}
        <div className="bg-white shadow-sm border p-10">

          <h2 className="text-2xl font-semibold">
            Need Immediate Assistance?
          </h2>

          <p className="text-gray-600 mt-5 leading-8">
            Chat with our team directly on WhatsApp for product enquiries,
            appointments, order updates, sizing assistance, and more.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20Zawara,%20I%20need%20assistance.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-md transition"
          >
            <FaWhatsapp size={24} />
            Chat on WhatsApp
          </a>

          <div className="mt-10 border-t pt-8">

            <h3 className="font-medium mb-4">
              We Can Help With
            </h3>

            <ul className="space-y-3 text-gray-600 list-disc ml-5">
              <li>Book an Appointment</li>
              <li>Order Tracking</li>
              <li>Product Information</li>
              <li>Size Guidance</li>
              <li>Returns & Exchanges</li>
              <li>General Enquiries</li>
            </ul>

          </div>

        </div>

      </section>
    </div>
  );
}

export default ContactPage;