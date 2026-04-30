type LinkItem = {
  label: string;
  value: string;
  href: string;
};

const links: LinkItem[] = [
  { label: "Email", value: "eric@exemple.fr", href: "mailto:eric@exemple.fr" },
  { label: "LinkedIn", value: "linkedin.com/in/eric", href: "https://linkedin.com/in/eric" },
  { label: "GitHub", value: "github.com/lagentrix", href: "https://github.com/lagentrix" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto border-t border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-display text-3xl text-stone-900 mb-4">Travaillons ensemble</h2>
          <p className="text-sm text-stone-500 font-light leading-relaxed max-w-sm">
            Je suis disponible pour des missions en ESN ou des opportunités front-end sur Nantes et environs.
          </p>
        </div>
        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-colors group"
            >
              <div>
                <p className="text-xs text-stone-400 font-mono mb-0.5">{link.label}</p>
                <p className="text-sm font-medium text-stone-800">{link.value}</p>
              </div>
              <span className="ml-auto text-stone-300 group-hover:text-stone-600 text-sm">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
