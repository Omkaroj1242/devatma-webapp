import { client } from '@/sanity/lib/client';

export default async function MediaPage() {
    const mediaItems = await client.fetch(`*[_type == "media"] | order(_createdAt desc){
    _id,
    title,
    type,
    description,
    videoUrl,
    "audioUrl": audioFile.asset->url 
  }`);

    const videos = mediaItems.filter((item: any) => item.type === 'video');
    const audios = mediaItems.filter((item: any) => item.type === 'audio');

    const latestVideo = videos[0];
    const archivedVideos = videos.slice(1);

    return (
        <main className="min-h-screen bg-[#050B18] text-white">
            {/* Header Section */}
            <section className="py-20 px-4 text-center border-b border-white/10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Siddha Vani & Shravan</h1>
                <p className="text-saffron tracking-widest uppercase font-medium">
                    The Living Vibration of the Himalayas
                </p>
            </section>

            <section className="max-w-7xl mx-auto py-16 px-4 space-y-20">

                {/* PREVIOUS UI: Featured Video Slot */}
                {latestVideo && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-end">
                            <h2 className="text-2xl font-bold border-l-4 border-saffron pl-4">Latest Projection</h2>
                            <span className="flex items-center gap-2 text-red-500 animate-pulse text-sm font-bold">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span> LIVE STATUS: READY
                            </span>
                        </div>
                        <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <iframe
                                className="w-full h-full"
                                src={
                                    latestVideo.videoUrl?.includes("shorts/")
                                        ? latestVideo.videoUrl.replace("shorts/", "embed/")
                                        : latestVideo.videoUrl?.replace("watch?v=", "embed/")
                                }
                                title={latestVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-12">

                    {/* CURRENT UI: Long Audio Players */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold border-l-4 border-saffron pl-4">Tattvic Shravan</h2>
                        <div className="space-y-4">
                            {audios.map((aud: any) => (
                                <div key={aud._id} className="bg-white/5 p-6 rounded-2xl flex flex-col gap-4 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center text-xs text-white">♫</div>
                                        <div>
                                            <h4 className="font-bold text-sm">{aud.title}</h4>
                                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Siddha Vani • Audio Projection</p>
                                        </div>
                                    </div>

                                    {/* Long, Wide Player */}
                                    {aud.audioUrl && (
                                        <audio controls className="w-full h-8 opacity-80 hover:opacity-100 transition-opacity">
                                            <source src={aud.audioUrl} type="audio/mpeg" />
                                        </audio>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PREVIOUS UI: Video Archive with Watch Overlays */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold border-l-4 border-saffron pl-4">Video Archive</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {archivedVideos.length > 0 ? archivedVideos.map((v: any) => (
                                <a
                                    key={v._id}
                                    href={v.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <div className="w-32 h-20 bg-slate-800 rounded-lg flex-shrink-0 relative overflow-hidden flex items-center justify-center border border-white/5">
                                        <span className="text-[10px] text-gray-600 uppercase tracking-tighter">Preview</span>
                                        {/* The Watch Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-xs text-saffron font-bold">Watch</div>
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-sm group-hover:text-saffron transition-colors truncate">{v.title}</h4>
                                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">{v.description}</p>
                                    </div>
                                </a>
                            )) : (
                                <p className="text-gray-600 italic text-sm">More archival footage coming soon...</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Branding Note */}
            <footer className="max-w-3xl mx-auto py-20 px-4 text-center">
                <div className="p-8 border border-saffron/30 rounded-3xl bg-saffron/5">
                    <h3 className="text-saffron font-bold mb-4 italic font-marathi text-xl">"शब्द हेच ब्रह्म आहे"</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        These recordings are not just information; they are projections of energy.
                        We recommend listening with high-quality headphones in a quiet space.
                    </p>
                </div>
            </footer>
        </main>
    );
}