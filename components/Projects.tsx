import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projets" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-display text-3xl text-stone-900">Projets</h2>
        <a
          href="https://github.com/lagentrix"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-stone-400 hover:text-stone-700 transition-colors"
        >
          github.com/lagentrix
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projets/${project.slug}`}
            className="card-hover group bg-white rounded-lg border border-stone-200 overflow-hidden block"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
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
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <span className="text-xs font-mono text-stone-400 group-hover:text-stone-700 transition-colors">
                Voir le projet &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
