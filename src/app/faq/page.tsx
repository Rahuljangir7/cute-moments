import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Cute Moments",
  description: "Have questions about Cute Moments? Find answers about our virtual hugs, love letters, scrapbook features, and more.",
  keywords: "faq, help, romantic app questions, virtual hug help, cute moments guide",
};

const faqs = [
  {
    question: "What is Cute Moments? 🤔",
    answer: "Cute Moments is a digital space designed for couples to celebrate their relationship. We offer interactive features like virtual hugs, digital scrapbooks, and love letters to help you cherish every memory."
  },
  {
    question: "How do I send a Virtual Hug? 🤗",
    answer: "Simply navigate to the 'Virtual Hug' section, choose your partner's name or a sweet message, and click 'Send'. It's a perfect way to show you care when you're apart."
  },
  {
    question: "Is my data safe? 🔒",
    answer: "Yes! We prioritize your privacy. Your personal messages and photos are stored securely and are only accessible through your unique link or account."
  },
  {
    question: "Can I use Cute Moments for long-distance relationships? ✈️",
    answer: "Absolutely! Cute Moments was built with long-distance couples in mind. Our features like the Countdown and Map help bridge the distance."
  },
  {
    question: "Is Cute Moments free to use? 💖",
    answer: "Yes, the core features of Cute Moments are free to use. We want everyone to be able to share love and joy."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#d63384] mb-4 text-center">Frequently Asked Questions 💖</h1>
      <p className="text-center text-gray-600 mb-12">Everything you need to know about your romantic journey with us.</p>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-pink-100 overflow-hidden transition-all duration-300">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="text-lg font-semibold text-gray-800 group-open:text-[#d63384] transition-colors">{faq.question}</span>
              <span className="text-[#d63384] transform group-open:rotate-180 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
      
      <div className="mt-16 text-center bg-pink-50 p-8 rounded-3xl border border-pink-100">
        <h3 className="text-xl font-bold text-[#d63384] mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-6">We&apos;re here to help you make your relationship even more special.</p>
        <a href="/contact" className="inline-block bg-[#d63384] text-white px-8 py-3 rounded-full font-bold hover:bg-[#ff4d94] transition-all shadow-lg hover:shadow-pink-200">
          Contact Support 💌
        </a>
      </div>
    </main>
  );
}
