export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="animate-hero-1">
        <span className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 border border-stone-200 rounded px-3 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          Disponible · Nantes, France
        </span>
      </div>

      <h1 className="animate-hero-2 font-display text-5xl md:text-7xl text-stone-900 leading-tight mb-6">
        Développeur
        <br />
        <em className="not-italic text-stone-400">Front-End</em>
        <br />& UI
      </h1>

      <p className="animate-hero-3 text-base text-stone-500 font-light leading-relaxed max-w-xl mb-10">
        18 ans d'expérience en design et gestion de projet. Je construis des
        interfaces soignées, accessibles et performantes — avec React, Next.js
        et une vraie sensibilité visuelle.
      </p>

      <div className="animate-hero-4 flex flex-wrap gap-4">
        <a
          href="#projets"
          className="px-6 py-3 bg-stone-900 text-stone-50 text-sm font-medium rounded hover:bg-stone-700 transition-colors"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-stone-300 text-stone-700 text-sm font-medium rounded hover:bg-stone-100 transition-colors"
        >
          Me contacter
        </a>
      </div>

      {/* Séparateur décoratif */}
      <div className="mt-20 flex items-center gap-4">
        <div className="h-px flex-1 bg-stone-200" />
        <span className="text-xs font-mono text-stone-300">2025</span>
      </div>
    </section>
  );
}
