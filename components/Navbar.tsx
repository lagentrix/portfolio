"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg text-stone-900 hover:text-stone-600 transition-colors"
        >
          Eric L.
        </Link>
        <div className="flex items-center gap-8">
          <a href="#projets" className="nav-link text-sm font-light">
            projets
          </a>
          <a href="#parcours" className="nav-link text-sm font-light">
            parcours
          </a>
          <a href="#contact" className="nav-link text-sm font-light">
            contact
          </a>
          <a
            href="/cv-eric-l.pdf"
            download
            className="text-xs font-medium px-4 py-2 border border-stone-300 rounded text-stone-700 hover:bg-stone-100 transition-colors"
          >
            CV ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
