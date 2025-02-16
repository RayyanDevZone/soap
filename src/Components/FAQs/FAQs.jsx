import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import MovingButton from "../MovingButton/MovingButton";

const FAQs = () => {
  const faqs = [
    {
      id: 1,
      question: "How long is the workshop?",
      answer: "The workshop is 2 hours long.",
    },
    {
      id: 2,
      question: "What is the workshop about?",
      answer:
        "It focuses on cost-saving methods, high-profit formulations, and scaling strategies for soap and detergent businesses.",
    },
    {
      id: 3,
      question: "Who is the workshop for?",
      answer:
        "It is ideal for business owners, manufacturers, entrepreneurs, and marketing professionals in the soap and detergent industry.",
    },
    {
      id: 4,
      question: "How can I benefit from this workshop?",
      answer:
        "You’ll gain practical skills, expert guidance, and actionable strategies to grow your business.",
    },
    {
      id: 5,
      question: "Is there any prerequisite knowledge required?",
      answer:
        "No, the workshop is designed for both beginners and experienced professionals.",
    },
    {
      id: 6,
      question: "Can I ask questions during the workshop?",
      answer: "Yes, there will be a live Q&A session to address your specific queries.",
    },
    {
      id: 7,
      question: "Will there be a recording of the workshop?",
      answer:
        "Yes, registered participants will receive a recording of the session.",
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen h-auto w-full mb-[80px] bg-zinc-900 flex flex-col items-center font-lexend">
      <h1 className="sm:text-4xl text-center text-2xl mt-10 text-white font-bold">
        FREQUENTLY ASKED{" "}
        <span className="text-[#01A264] font-bold">QUESTIONS</span>
      </h1>
      <div className="w-full sm:px-24 px-4 mt-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`bg-[#0A1417] rounded-xl border-2 w-full border-black p-4 mb-4 transition-all duration-300 ${
              expandedId === faq.id ? "bg-[#021118]" : ""
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h2
                className={`text-2xl font-semibold transition-colors duration-300 ${
                  expandedId === faq.id ? "text-[#01A264]" : "text-white"
                }`}
              >
                {faq.question}
              </h2>
              <span
                className={`text-xl transition-colors duration-300 ${
                  expandedId === faq.id ? "text-[#01A264]" : "text-white"
                }`}
              >
                {expandedId === faq.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                expandedId === faq.id ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="text-white text-xl mt-6">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <MovingButton textColor="text-white" />
    </div>
  );
};

export default FAQs;
