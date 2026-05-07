export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  emoji: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "long-distance-relationship-ideas",
    title: "Long Distance Relationship Ideas That Keep Love Close",
    excerpt:
      "Discover long distance relationship ideas to help you stay emotionally connected even when miles apart.",
    date: "May 5, 2026",
    category: "Long Distance",
    emoji: "✈️",
    content:
      "Stay connected with meaningful rituals, surprise digital gifts, and shared moments even when you’re apart.",
  },
  {
    id: 2,
    slug: "date-night-ideas-for-couples-at-home",
    title: "Date Night Ideas for Couples at Home",
    excerpt:
      "Turn ordinary evenings into unforgettable memories with cozy date night ideas for couples at home.",
    date: "May 2, 2026",
    category: "Date Night",
    emoji: "🍷",
    content:
      "Build a romantic playlist, cook together, and create a movie night with a personalized couple theme.",
  },
  {
    id: 3,
    slug: "romantic-things-to-do-for-your-partner",
    title: "Romantic Things to Do for Your Partner",
    excerpt:
      "Show your love with thoughtful romantic gestures designed especially for your boyfriend or girlfriend.",
    date: "April 28, 2026",
    category: "Romance",
    emoji: "💝",
    content:
      "Small surprises, love notes, and shared experiences make your relationship stronger every day.",
  },
  {
    id: 4,
    slug: "how-to-write-a-love-letter",
    title: "How to Write a Love Letter That Truly Matters",
    excerpt:
      "Learn how to write a love letter with heartfelt words and personal touches your partner will treasure.",
    date: "April 22, 2026",
    category: "Love Letters",
    emoji: "💌",
    content:
      "Start with a memory, speak from the heart, and finish with a promise for your future together.",
  },
  {
    id: 5,
    slug: "valentines-day-ideas-for-couples",
    title: "Valentine's Day Ideas for Couples",
    excerpt:
      "Plan a romantic Valentine's Day with celebration ideas that help you create lasting couple memories.",
    date: "April 18, 2026",
    category: "Valentine's Day",
    emoji: "🌹",
    content:
      "Combine sweet surprises, cozy plans, and a little creativity for a truly memorable holiday together.",
  },
  {
    id: 6,
    slug: "couple-goals-relationship",
    title: "Couple Goals Relationship Ideas to Grow Together",
    excerpt:
      "Set meaningful couple goals relationship plans that bring you closer and help your love thrive.",
    date: "April 12, 2026",
    category: "Goals",
    emoji: "🎯",
    content:
      "From communication promises to shared adventures, these goals strengthen your bond every day.",
  },
  {
    id: 7,
    slug: "long-distance-relationship-gifts",
    title: "Long Distance Relationship Gifts Your Partner Will Love",
    excerpt:
      "Find thoughtful digital gifts for long distance relationships that feel personal across the miles.",
    date: "April 6, 2026",
    category: "Gifts",
    emoji: "🎁",
    content:
      "Choose heartfelt surprises, personal playlists, and digital love keepsakes to stay connected.",
  },
  {
    id: 8,
    slug: "couple-challenges",
    title: "Cute Couple Challenges to Try Together",
    excerpt:
      "Boost your connection with fun couple challenges that spark joy, laughter, and deeper closeness.",
    date: "April 1, 2026",
    category: "Challenges",
    emoji: "💪",
    content:
      "Take on creative tasks, daily prompts, and playful challenges that make your relationship feel fresh.",
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
