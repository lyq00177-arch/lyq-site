import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <Link
        href="/blog"
        className="text-sm text-accent hover:text-accent-light transition-colors mb-8 inline-block"
      >
        &larr; 返回博客列表
      </Link>

      <article>
        <header className="mb-10">
          <time className="text-sm text-t-muted">{post.date}</time>
          <h1 className="text-3xl sm:text-4xl font-bold text-t-primary mt-2 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose-dark max-w-none leading-relaxed space-y-4 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-3 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>li]:mb-1 [&>blockquote]:border-l-4 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-4 [&>pre]:p-4 [&>pre]:my-4 [&>pre]:overflow-x-auto">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
