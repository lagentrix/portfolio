import { experiences, skills } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="parcours"
      className="py-20 px-6 max-w-5xl mx-auto border-t border-stone-200"
    >
      <h2 className="font-display text-3xl text-stone-900 mb-12">Parcours</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Timeline */}
        <div>
          <h3 className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-6">
            Expériences
          </h3>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="grid grid-cols-[88px_1fr] gap-6 py-5 border-b border-stone-100 last:border-0"
              >
                <span className="text-xs font-mono text-stone-400 pt-0.5">
                  {exp.period}
                </span>
                <div>
                  <p className="text-sm font-medium text-stone-900 mb-0.5">
                    {exp.role}
                  </p>
                  <p className="text-xs text-stone-500 mb-2">{exp.company}</p>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    {exp.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-6">
            Compétences
          </h3>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-stone-400 mb-3 font-light">
                Stack principal
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-3 py-1.5 bg-stone-900 text-stone-100 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-stone-400 mb-3 font-light">Outils</p>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-stone-400 mb-3 font-light">
                Transversal
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Atout différenciant */}
          <div className="mt-8 p-4 bg-stone-100 rounded border-l-2 border-stone-400">
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              <span className="font-medium text-stone-700">Profil rare :</span>{" "}
              combinaison design × développement. Je comprends autant les
              contraintes d'un développeur que les attentes d'un client sur
              l'expérience utilisateur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
