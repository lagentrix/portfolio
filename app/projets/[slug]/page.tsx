import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 py-12">

        <Link
          href="/#projets"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors mb-10 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
          Retour aux projets
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
            {project.title}
          </h1>
          <p className="text-base text-stone-500 font-light leading-relaxed max-w-2xl">
            {project.longDescription}
          </p>
        </div>

        <div className="flex gap-4 mb-12">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-stone-900 text-stone-50 text-sm font-medium rounded hover:bg-stone-700 transition-colors"
          >
            Voir le code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-stone-300 text-stone-700 text-sm font-medium rounded hover:bg-stone-100 transition-colors"
          >
            Voir la demo
          </a>
        </div>

        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden border border-stone-200 mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-4">
              Fonctionnalités
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-600 font-light">
                  <span className="text-stone-300 mt-0.5 shrink-0">&#x25AA;</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-4">
              Captures d&apos;écran
            </h2>
            <div className="space-y-4">
              {project.screenshots.map((src, i) => (
                <div
                  key={i}
                  className="relative w-full h-40 rounded-lg overflow-hidden border border-stone-200"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
