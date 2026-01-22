// import Link from 'next/link';

// export default function BlogsPage() {
//   const blogs = [
//     {
//       id: 1,
//       title: "Adhyatma Path Darshan - Part 1",
//       subtitle: "Modern Spirituality & Ancient Science",
//       excerpt: "Exploring the synthesis of modern evolution and the ancient Himalayan wisdom of Sage Agastya.",
//       date: "Jan 22, 2026",
//     },
//     // More blogs will go here
//   ];

//   return (
//     <main className="max-w-5xl mx-auto py-12 px-4">
//       <header className="mb-12 border-b border-saffron/30 pb-8">
//         <h1 className="text-4xl font-bold text-deep-blue">Teachings & Insights</h1>
//         <p className="text-gray-600 mt-2">Exploring the depths of Devatma Abhyas and Siddha Tradition.</p>
//       </header>

//       <div className="grid gap-8">
//         {blogs.map((blog) => (
//           <article key={blog.id} className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//               <div>
//                 <span className="text-saffron text-sm font-semibold uppercase tracking-wider">{blog.subtitle}</span>
//                 <h2 className="text-2xl font-bold text-gray-800 mt-1 group-hover:text-deep-blue transition-colors">
//                   {blog.title}
//                 </h2>
//                 <p className="text-gray-600 mt-3 line-clamp-2 italic">
//                   "{blog.excerpt}"
//                 </p>
//               </div>
//               <Link 
//                 href={`/blogs/${blog.id}`} 
//                 className="mt-4 md:mt-0 bg-deep-blue text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-saffron transition-colors"
//               >
//                 Read Full Discourse
//               </Link>
//             </div>
//             <div className="mt-4 text-xs text-gray-400 font-medium">
//               Published: {blog.date}
//             </div>
//           </article>
//         ))}
//       </div>
//     </main>
//   );
// }

import { client } from '@/sanity/lib/client';
import Link from 'next/link';

export default async function BlogsPage() {
  // This query fetches title, summary, and the unique slug
  const posts = await client.fetch(`*[_type == "blog"]{
    title,
    marathiTitle,
    "slug": slug.current,
    summaryEnglish,
    _createdAt
  } | order(_createdAt desc)`);

  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-deep-blue mb-8">Teachings & Insights</h1>
      <div className="grid gap-8">
        {posts.map((post: any) => (
          <article key={post.slug} className="p-6 bg-white rounded-xl shadow-sm border border-cream hover:border-saffron transition-all">
            <span className="text-saffron font-bold text-sm tracking-widest">NEW POST</span>
            <h2 className="text-2xl font-bold mt-2">{post.title}</h2>
            <p className="font-marathi text-xl text-gray-500 mt-1">{post.marathiTitle}</p>
            <p className="text-gray-600 mt-4 italic">{post.summaryEnglish}</p>
            <Link 
              href={`/blogs/${post.slug}`}
              className="inline-block mt-6 text-deep-blue font-bold border-b-2 border-saffron hover:text-saffron"
            >
              Read Discourse →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}