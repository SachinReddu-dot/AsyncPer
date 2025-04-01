import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is our community about?',
      answer:
        'Our community is a space where people from various backgrounds come together to share ideas, collaborate on projects, and support each other’s growth.',
    },
    {
      question: 'How can I join the community?',
      answer:
        'You can join our community by clicking on the "Join Us" button on the homepage and filling out the registration form.',
    },
    {
      question: 'Is there any membership fee?',
      answer: 'No, our community is completely free to join for everyone.',
    },
    {
      question: 'What benefits do I get as a member?',
      answer:
        'As a member, you get access to exclusive resources, events, and networking opportunities with like-minded individuals.',
    },
    {
      question: 'Can I contribute to the community?',
      answer:
        'Absolutely! We encourage all members to contribute by sharing knowledge, collaborating on projects, or helping organize events.',
    },
  ];

  return (
    <div className="bg-zinc-900 text-white py-12 px-5">
      <h2 className="text-4xl font-semibold text-center  mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4 transition-all duration-500">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-zinc-800 transition-all duration-500 rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full transition-all duration-500 text-left px-6 py-4 text-xl font-semibold focus:outline-none hover:bg-zinc-700"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="bg-zinc-700 transition-all duration-500 text-gray-300 px-6 py-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
