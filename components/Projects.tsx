import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projets" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-display text-3xl text-stone-900">Projets</h2>
        <a
          href="https://github.com/eric"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-stone-400 hover:text-stone-700 transition-colors"
        >
          github.com/eric →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="card-hover group bg-white rounded-lg border border-stone-200 overflow-hidden"
          >
            {/* Placeholder thumbnail */}
            <div
              className="h-40 flex items-center justify-center border-b border-stone-100"
              style={{ backgroundColor: project.accent }}
            >
              <div className="w-10 h-10 rounded-full bg-white/60 border border-stone-300" />
            </div>

            <div className="p-5">
              <h3 className="font-medium text-stone-900 mb-2 text-sm">
                {project.title}
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-stone-500 hover:text-stone-900 transition-colors font-mono"
                >
                  Code →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-stone-500 hover:text-stone-900 transition-colors font-mono"
                >
                  Demo →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
