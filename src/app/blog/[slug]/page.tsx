import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "../data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post | Cute Moments",
      description: "Read romantic blog posts from Cute Moments.",
    };
  }

  return {
    title: `${post.title} | Cute Moments`,
    description: post.excerpt,
    keywords: [
      "couple blog",
      post.category.toLowerCase(),
      "relationship advice",
      "romantic ideas",
    ],
    alternates: {
      canonical: `https://cute-moments.vercel.app/blog/${post.slug}`,
    },
  };
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-12 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#d63384] mb-4">
          {post?.title}
        </h1>
        <p className="text-gray-600">{post?.excerpt}</p>
      </div>
      <div className="bg-white/90 rounded-3xl shadow-xl border border-pink-50 p-10">
        <div className="flex gap-3 items-center mb-8">
          <span className="text-4xl">{post?.emoji}</span>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d63384] font-bold">
              {post?.category}
            </p>
            <p className="text-sm text-gray-500">{post?.date}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg">{post?.content}</p>
        <div className="mt-10">
          <Link
            href="/blog"
            className="text-[#d63384] font-bold hover:underline"
          >
            ← Back to blog
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;
