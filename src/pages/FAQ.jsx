import { useState,useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically delivered within 3-7 business days depending on your location.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes, you can return eligible products within 7 days of delivery, provided they are unused and in their original packaging.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email or SMS.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, Debit Cards, Credit Cards, Net Banking, and Cash on Delivery (where available).",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can be canceled before they are shipped. Once shipped, cancellation may not be possible.",
  },
  {
    question: "What should I do if I receive a damaged product?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item.",
  },
];

const FAQ = () => {
     useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    
  
    <section className="bg-[#1C1917]  py-16 px-4">
            <div className="max-w-4xl mx-auto bg-[#151110] rounded-[32px] p-8 md:p-12">
                <h1 className="text-4xl font-bold text-center text-white mb-3">
                Frequently Asked Questions
                </h1>

                <p className="text-center text-gray-300 mb-10">
                Find answers to common questions about orders, shipping, returns,
                and more.
                </p>

                <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div
                    key={index}
                    className="border border-gray-700 rounded-xl overflow-hidden"
                    >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center p-5 text-left bg-[#151110] text-white hover:bg-[#FFA100] hover:text-black transition-all duration-300"
                    >
                        <span className="font-medium">
                        {faq.question}
                        </span>

                        {activeIndex === index ? (
                        <FiChevronUp size={22} />
                        ) : (
                        <FiChevronDown size={22} />
                        )}
                    </button>

                    {activeIndex === index && (
                        <div className="px-5 pb-5 bg-[#151110] border-t border-gray-700">
                        <p className="pt-4 text-gray-300">
                            {faq.answer}
                        </p>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </div>
</section>
    
  );
};


export default FAQ;