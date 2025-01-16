
import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const faqs = [
    {
      icon: "💻",
      question: "What services does CraftifySite.id offer?",
      answer: "We provide professional website design, custom development, and maintenance services tailored to your business needs. Whether you need an e-commerce platform, portfolio website, or company profile, we've got you covered.",
    },
    {
      icon: "⏱️",
      question: "How long does it take to complete a project?",
      answer: "The timeline depends on the project's complexity. Typically, small projects take 2-4 weeks, while larger, more complex websites can take 6-8 weeks or more.",
    },
    {
      icon: "🔄",
      question: "Can I request revisions after the project is delivered?",
      answer: "Absolutely! We offer a revision period to ensure you're fully satisfied. Beyond that, we also offer maintenance packages for ongoing updates and improvements.",
    },
    {
      icon: "🌐",
      question: "Do you provide hosting and domain registration?",
      answer: "Yes, we provide hosting and domain registration as part of our comprehensive web services, ensuring a seamless experience for you.",
    },
    {
      icon: "📊",
      question: "How can I track the progress of my project?",
      answer: "You'll have access to our project management platform where you can monitor progress, provide feedback, and communicate directly with your project team.",
    },
  ];

  const toggleFAQ = (index: number) => {    
     setActiveIndex(index === activeIndex ? null : index);   }; 

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about our services. Can't find your answer?
            Feel free to reach out to our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transform transition-all duration-300 ease-in-out
                ${hoveredIndex === index ? 'scale-[1.02]' : 'scale-100'}
                ${activeIndex === index ? 'ring-2 ring-blue-400' : ''}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                  ${activeIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'}
                `}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <h3 className="flex-1 text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <span
                      className={`transform transition-transform duration-300 text-blue-600
                        ${activeIndex === index ? 'rotate-180' : 'rotate-0'}
                      `}
                    >
                      ↓
                    </span>
                  </div>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden
                      ${activeIndex === index ? 'mt-4 max-h-48' : 'max-h-0'}
                    `}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Our support team is just a click away.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;