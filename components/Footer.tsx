export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 max-w-5xl mx-auto border-t border-stone-200">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-stone-400">
          © {year} Eric L. — Développeur Front-End · Nantes
        </p>
        <p className="text-xs font-mono text-stone-300">
          Construit avec Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
