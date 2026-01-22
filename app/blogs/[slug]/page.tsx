import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

// This function tells Next.js which slugs exist (for faster loading)
export async function generateStaticParams() {
    const query = `*[_type == "blog"]{ "slug": slug.current }`;
    const slugs = await client.fetch(query);
    return slugs.map((blog: { slug: string }) => ({ slug: blog.slug }));
}

// 1. Notice the type change: params is now a Promise
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {

    // 2. You must 'await' the params to get the actual slug
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    // 3. Now the query will have the correct value for $slug
    const post = await client.fetch(`
    *[_type == "blog" && slug.current == $slug][0]{
      title,
      marathiTitle,
      summaryEnglish,
      contentMarathi,
      _createdAt,
      "imageUrl": mainImage.asset->url
    }
  `, { slug }); // This is where the $slug is provided to the query

    if (!post) return <div className="p-20 text-center">Discourse not found.</div>;

    return (
        <article className="min-h-screen bg-white">
            {/* Navigation Back */}
            <div className="max-w-3xl mx-auto pt-10 px-4">
                <Link href="/blogs" className="text-saffron font-bold text-sm hover:underline">
                    ← Back to All Teachings
                </Link>
            </div>

            {/* Title Header */}
            <header className="max-w-3xl mx-auto py-12 px-4 border-b border-cream">
                <h1 className="text-4xl md:text-5xl font-bold text-deep-blue leading-tight">
                    {post.title}
                </h1>
                <p className="font-marathi text-2xl text-gray-500 mt-4 leading-relaxed">
                    {post.marathiTitle}
                </p>
                <div className="mt-6 text-sm text-gray-400">
                    Published on {new Date(post._createdAt).toLocaleDateString()}
                </div>
            </header>

            {/* Main Content Body */}
            <div className="max-w-3xl mx-auto py-12 px-4">
                {/* English Summary Box */}
                <div className="bg-cream/50 p-6 rounded-2xl border-l-4 border-saffron mb-10 italic text-gray-700 leading-relaxed">
                    {post.summaryEnglish}
                </div>

                {/* Marathi/Hindi Content - The "Projection" */}
                <div className="font-marathi text-2xl md:text-3xl text-gray-800 leading-[1.8] space-y-8">
                    <PortableText value={post.contentMarathi} />
                </div>
            </div>

            {/* Footer Branding */}
            <footer className="max-w-3xl mx-auto py-20 px-4 text-center">
                <div className="h-px bg-cream w-full mb-10" />
                <p className="text-saffron font-bold tracking-widest uppercase text-sm">
                    Atma Malik Guru Om
                </p>
            </footer>
        </article>
    );
}