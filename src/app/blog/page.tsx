import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romantic Blog | Cute Moments",
  description:
    "Explore expert tips for long-distance relationships, date night ideas, romantic gestures, love letters, Valentine's Day plans, couple goals, digital gifts, and cute couple challenges.",
  keywords: [
    "long distance relationship ideas",
    "date night ideas for couples",
    "romantic things to do for your partner",
    "how to write a love letter",
    "valentine's day ideas for couples",
    "couple goals relationship",
    "long distance relationship gifts",
    "couple challenges",
  ],
  alternates: {
    canonical: "https://cute-moments.vercel.app/blog",
  },
};

const blogPosts = [
  {
    id: 1,
    slug: "long-distance-relationship-ideas",
    title: "Long Distance Relationship Ideas That Keep Love Close ❤️",
    excerpt:
      "Discover long distance relationship ideas to help you stay emotionally connected and feel closer even when miles apart.",
    date: "May 5, 2026",
    category: "Long Distance",
    emoji: "✈️",
  },
  {
    id: 2,
    slug: "date-night-ideas-for-couples-at-home",
    title: "Date Night Ideas for Couples at Home",
    excerpt:
      "Create a cozy night in with date night ideas for couples that turn ordinary evenings into unforgettable memories.",
    date: "May 2, 2026",
    category: "Date Night",
    emoji: "🍷",
  },
  {
    id: 3,
    slug: "romantic-things-to-do-for-your-partner",
    title: "Romantic Things to Do for Your Partner",
    excerpt:
      "Surprise your boyfriend or girlfriend with romantic gestures that show how much you care.",
    date: "April 28, 2026",
    category: "Romance",
    emoji: "💝",
  },
  {
    id: 4,
    slug: "how-to-write-a-love-letter",
    title: "How to Write a Love Letter That Truly Matters",
    excerpt:
      "Learn how to write a love letter with heartfelt words and personal details that your partner will treasure.",
    date: "April 22, 2026",
    category: "Love Letters",
    emoji: "💌",
  },
  {
    id: 5,
    slug: "valentines-day-ideas-for-couples",
    title: "Valentine's Day Ideas for Couples",
    excerpt:
      "Plan a romantic Valentine's Day with thoughtful ideas designed for couples who want to celebrate love together.",
    date: "April 18, 2026",
    category: "Valentine's Day",
    emoji: "🌹",
  },
  {
    id: 6,
    slug: "couple-goals-relationship",
    title: "Couple Goals Relationship Ideas to Grow Together",
    excerpt:
      "Set meaningful couple goals relationship plans that help you build a stronger, more connected partnership.",
    date: "April 12, 2026",
    category: "Goals",
    emoji: "🎯",
  },
  {
    id: 7,
    slug: "long-distance-relationship-gifts",
    title: "Long Distance Relationship Gifts Your Partner Will Love",
    excerpt:
      "Find digital gifts for long distance relationships and choose heartfelt presents that bridge the miles.",
    date: "April 6, 2026",
    category: "Gifts",
    emoji: "🎁",
  },
  {
    id: 8,
    slug: "couple-challenges",
    title: "Cute Couple Challenges to Try Together",
    excerpt:
      "Boost your bond with fun couple challenges that bring out the best in your relationship.",
    date: "April 1, 2026",
    category: "Challenges",
    emoji: "💪",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#d63384] mb-4">
          The Heartbeat Blog 💓
        </h1>
        <p className="text-xl text-gray-600">
          Insights, stories, and tips for your beautiful journey together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-pink-50 hover:shadow-2xl transition-all duration-300 flex flex-col group"
          >
            <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
              {post.emoji}
            </div>
            <div className="p-6 flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-[#d63384] uppercase tracking-wider bg-pink-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#d63384] transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto inline-flex items-center text-[#d63384] font-bold hover:gap-2 transition-all"
              >
                Read More <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 bg-[#d63384] rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <h2 className="text-3xl font-bold mb-4 relative z-10">
          Subscribe to our Love Letter 💌
        </h2>
        <p className="text-pink-100 mb-8 max-w-md mx-auto relative z-10">
          Get weekly tips on romance, gift ideas, and new feature updates
          delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
          <input
            type="email"
            placeholder="Your sweet email..."
            className="flex-grow px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-pink-300"
          />
          <button className="bg-white text-[#d63384] px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-colors shadow-lg">
            Join Now ✨
          </button>
        </div>
      </div>
    </main>
  );
}
