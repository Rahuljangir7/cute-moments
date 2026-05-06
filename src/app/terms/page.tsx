import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Cute Moments",
  description: "Read the Terms of Service for using Cute Moments. We outline the rules and guidelines for our romantic digital experience.",
  keywords: "terms of service, legal terms, cute moments rules, user agreement",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#d63384] mb-8 text-center">Terms of Service 📜</h1>
      
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-pink-100 space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-[#d63384] mb-3 border-b border-pink-100 pb-2">1. Agreement to Terms</h2>
          <p>By accessing our website at <strong>Cute Moments</strong>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#d63384] mb-3 border-b border-pink-100 pb-2">2. Use License</h2>
          <p>Permission is granted to temporarily use the materials (information or software) on Cute Moments' website for personal, non-commercial transitory viewing only.</p>
          <p className="mt-2">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Modify or copy the materials.</li>
            <li>Use the materials for any commercial purpose.</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#d63384] mb-3 border-b border-pink-100 pb-2">3. Disclaimer</h2>
          <p>The materials on Cute Moments' website are provided on an 'as is' basis. Cute Moments makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#d63384] mb-3 border-b border-pink-100 pb-2">4. Limitations</h2>
          <p>In no event shall Cute Moments or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cute Moments' website.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#d63384] mb-3 border-b border-pink-100 pb-2">5. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </section>
      </div>
    </main>
  );
}
