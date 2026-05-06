import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cute Moments",
  description: "Learn how Cute Moments protects your data and privacy. We value the security of your romantic memories and personal information.",
  keywords: "privacy policy, data protection, cute moments privacy, secure memories",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#d63384] mb-8 text-center">Privacy Policy 🛡️</h1>
      
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-pink-100 space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-[#d63384] mb-3 border-b border-pink-100 pb-2">1. Introduction</h2>
          <p>Welcome to <strong>Cute Moments</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#d63384] mb-3 border-b border-pink-100 pb-2">2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li><strong>Identity Data:</strong> Includes first name, last name, or similar identifier.</li>
            <li><strong>Contact Data:</strong> Includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data:</strong> Includes information about how you use our website and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#d63384] mb-3 border-b border-pink-100 pb-2">3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>To provide the romantic interactive features of the site.</li>
            <li>To improve our website, products/services, marketing, and client relationships.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#d63384] mb-3 border-b border-pink-100 pb-2">4. Your Memories</h2>
          <p>At Cute Moments, we believe your memories are sacred. Any photos, letters, or messages you create within the app are stored securely. We do not sell your personal memories to third parties.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#d63384] mb-3 border-b border-pink-100 pb-2">5. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at <strong>support@cutemoments.com</strong>.</p>
        </section>
      </div>
    </main>
  );
}
