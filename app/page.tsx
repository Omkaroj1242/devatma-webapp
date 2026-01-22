'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-4">
      {/* Spiritual Mantra Section */}
      <div className="text-center space-y-6">
        <h2 className="text-saffron text-xl md:text-2xl font-medium tracking-widest uppercase animate-pulse">
          Atma Malik Guru Om Guru Om
        </h2>
        
        <h1 className="text-deep-blue text-4xl md:text-7xl font-bold max-w-4xl">
          Experience the Ancient Himalayan Science
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Preserving the spiritual legacy of <span className="text-saffron font-semibold">Sage Agastya</span> through the power of internal projection and Tattva Abhyas.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link href="/practice" className="bg-saffron text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg inline-block text-center">
            Start Practice
          </Link>
          

          <Link href="/blogs" className="border-2 border-deep-blue text-deep-blue px-8 py-3 rounded-full font-semibold hover:bg-deep-blue hover:text-white transition-all inline-block text-center">
            Read Teachings
          </Link>
        </div>
      </div>

      {/* Language Indicator Hint (Temporary) */}
      <div className="absolute bottom-10 text-gray-400 text-sm italic">
        Language: English / मराठी / हिंदी
      </div>
    </main>
  );
}