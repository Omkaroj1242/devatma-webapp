export default function PracticePage() {
  const rules = [
    { title: "Consistency", desc: "A minimum of 1 hour daily practice is required for progress." },
    { title: "Asana", desc: "Maintain a straight spine, neck, and head to allow the flow of Tattva." },
    { title: "Internal Focus", desc: "Gently close the eyes to withdraw from the external world (Antarmukh)." },
    { title: "Surrender", desc: "The highest stage is 'Doing Nothing' and surrendering to the Self." }
  ];

  return (
    <main className="min-h-screen bg-cream/30">
      {/* Header Section */}
      <section className="bg-saffron py-16 px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Devatma Abhyas</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          "The soul's bliss is independent of external factors. It is absolute and emerges from within."
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-12">
        
        {/* Left Column: Posture & Technique */}
        <div className="md:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-deep-blue mb-6">1. The Science of Asana</h2>
            <p className="text-gray-700 text-lg mb-6">
              To enter the state of <strong>Atmarati</strong>, physical stability is the first step. When the body is still, the mind follows.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-saffron/20">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-saffron font-bold">●</span>
                  <span><strong>The Spine:</strong> Keep the head, neck, and back in a perfectly straight line.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-saffron font-bold">●</span>
                  <span><strong>Sukhasana:</strong> Sit in any comfortable posture where you can remain motionless (Sthira).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-saffron font-bold">●</span>
                  <span><strong>Breath:</strong> Observe the natural flow. As the breath slows, the mind stabilizes.</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-deep-blue mb-6">2. Ananya Sharanagati (Doing Nothing)</h2>
            <div className="bg-deep-blue text-white p-8 rounded-2xl">
              <p className="font-marathi text-2xl mb-6 leading-relaxed">
                "काही न करता हलक्या स्वरूपात आत मध्ये राहायचे आहे."
              </p>
              <p className="italic opacity-80 mb-6">
                "Simply stay within in a light, effortless form without doing anything."
              </p>
              <p className="leading-relaxed">
                The highest secret of the Gita and the Siddhas is total surrender. When the individual 'doer' (Aham) disappears, the Divine takes over. Like a drop of salt merging into the ocean, the seeker merges into the Self.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Rules & Discipline */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-saffron">
            <h3 className="text-xl font-bold text-deep-blue mb-6">Rules for Seekers</h3>
            <div className="space-y-6">
              {rules.map((rule, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <h4 className="font-bold text-saffron mb-1">{rule.title}</h4>
                  <p className="text-sm text-gray-600">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-saffron/10 rounded-2xl border border-saffron/30">
            <h4 className="font-bold text-deep-blue mb-2">Tattvic Shravan</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Listening to the projections of Dr. Gorakhnath Devre is essential to calibrate your internal state with the ancient Himalayan vibration.
            </p>
          </div>
        </div>

      </section>

      {/* Quote Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center border-t border-saffron/20">
        <p className="font-marathi text-3xl text-deep-blue mb-4">
          "ब्रम्हानंदी लागली टाळी। कोण देहाते सांभाळी॥"
        </p>
        <p className="text-gray-500 italic">— Sant Tukaram Maharaj</p>
      </section>
    </main>
  );
}