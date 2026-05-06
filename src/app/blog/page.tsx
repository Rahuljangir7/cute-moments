import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romantic Blog | Cute Moments",
  description: "Read our latest articles on maintaining a healthy relationship, long-distance love tips, and creative ways to say 'I Love You'.",
  keywords: "romantic blog, relationship tips, long distance love advice, cute dating ideas, love letters inspiration",
};

const blogPosts = [
  {
    id: 1,
    title: "5 Creative Ways to Say 'I Love You' Every Day ❤️",
    excerpt: "Love is in the small things. Discover how little gestures can make a big difference in your relationship.",
    date: "May 5, 2026",
    category: "Relationship Tips",
    emoji: "✨"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Long-Distance Love ✈️",
    excerpt: "Distance is just a test of how far love can travel. Learn the best ways to stay connected across miles.",
    date: "May 2, 2026",
    category: "Long Distance",
    emoji: "💖"
  },
  {
    id: 3,
    title: "Why Digital Scrapbooking is the New Love Letter 📸",
    excerpt: "Cherish your digital memories in a modern way. See why couples are moving towards digital memory keeping.",
    date: "April 28, 2026",
    category: "Memories",
    emoji: "📝"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#d63384] mb-4">The Heartbeat Blog 💓</h1>
        <p className="text-xl text-gray-600">Insights, stories, and tips for your beautiful journey together.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-pink-50 hover:shadow-2xl transition-all duration-300 flex flex-col group">
            <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
              {post.emoji}
            </div>
            <div className="p-6 flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-[#d63384] uppercase tracking-wider bg-pink-50 px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#d63384] transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.id}`} className="mt-auto inline-flex items-center text-[#d63384] font-bold hover:gap-2 transition-all">
                Read More <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 bg-[#d63384] rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <h2 className="text-3xl font-bold mb-4 relative z-10">Subscribe to our Love Letter 💌</h2>
        <p className="text-pink-100 mb-8 max-w-md mx-auto relative z-10">Get weekly tips on romance, gift ideas, and new feature updates delivered straight to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
          <input type="email" placeholder="Your sweet email..." className="flex-grow px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-pink-300" />
          <button className="bg-white text-[#d63384] px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-colors shadow-lg">
            Join Now ✨
          </button>
        </div>
      </div>
    </main>
  );
}
