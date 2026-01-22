export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - The Origin */}
      <section className="bg-deep-blue text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The Siddha Tradition</h1>
          <p className="text-xl text-saffron font-medium tracking-wide uppercase">
            Ancient Himalayan Science of Devatma Abhyas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-16 px-4 space-y-20">
        
        {/* Sage Agastya Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-deep-blue mb-6 border-l-4 border-saffron pl-4">
              The Lineage of Sage Agastya
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                The Devatma Abhyas is not a modern creation but an ancient science preserved through the <strong>Siddha Tradition</strong>. It traces its roots back to Sage Agastya, the great Himalayan master of the Siddhanath lineage.
              </p>
              <p>
                This tradition has been carried forward by masters like Lao Tzu, Vyas Maharishi, and Mahavatar Babaji, focusing on the <strong>Tattva Abhyas</strong> (The Study of Elements) rather than mere ritualism.
              </p>
            </div>
          </div>
          <div className="bg-cream p-8 rounded-2xl border border-saffron/20 italic text-deep-blue">
            <p className="font-marathi text-2xl mb-4 text-center">
              "आत्मा मालिक गुरु ॐ गुरु ओम्"
            </p>
            <p className="text-sm text-center">
              The central mantra representing the mastery of the self and the universe.
            </p>
          </div>
        </div>

        {/* The Mission Section */}
        <div className="bg-slate-50 p-10 rounded-3xl">
          <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">The Devatma Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-saffron text-4xl mb-4">🕉️</div>
              <h3 className="font-bold mb-2">Preservation</h3>
              <p className="text-sm text-gray-600">Protecting the purity of the Siddha teachings for the next 1,000 years.</p>
            </div>
            <div className="text-center">
              <div className="text-saffron text-4xl mb-4">🧘</div>
              <h3 className="font-bold mb-2">Projection</h3>
              <p className="text-sm text-gray-600">Making the rare spiritual 'projections' of Dr. Devre accessible to global seekers.</p>
            </div>
            <div className="text-center">
              <div className="text-saffron text-4xl mb-4">🌍</div>
              <h3 className="font-bold mb-2">Tattva Abhyas</h3>
              <p className="text-sm text-gray-600">Shifting focus from external personalities to the internal study of the soul.</p>
            </div>
          </div>
        </div>

        {/* Marathi Philosophy Quote Section */}
        <div className="border-y border-saffron/30 py-12">
          <h3 className="text-center text-gray-500 uppercase tracking-widest text-sm mb-8">Scriptural Foundation</h3>
          <p className="font-marathi text-3xl text-center text-deep-blue leading-relaxed">
            "द्रष्टा-दर्शन-दृश्य ही त्रिपुटी एकरुप होणे म्हणजे आत्म्यात रममाण होणे."
          </p>
          <p className="text-center text-gray-600 mt-4 italic">
            — Merging the Seer, the Seeing, and the Seen into one is the essence of Atmarati.
          </p>
        </div>
      </section>
    </main>
  );
}