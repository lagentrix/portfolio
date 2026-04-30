# Portfolio — Eric L. · Développeur Front-End

Portfolio personnel construit avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Fonts** : DM Serif Display + Sora + DM Mono (Google Fonts)

## Structure du projet

```
portfolio/
├── app/
│   ├── layout.tsx        # Layout global + métadonnées SEO
│   ├── page.tsx          # Page principale
│   └── globals.css       # Styles globaux + animations
├── components/
│   ├── Navbar.tsx        # Navigation fixe avec scroll
│   ├── Hero.tsx          # Section d'accroche
│   ├── Projects.tsx      # Grille de projets
│   ├── Experience.tsx    # Timeline parcours + compétences
│   ├── Contact.tsx       # Liens de contact
│   └── Footer.tsx        # Pied de page
└── lib/
    └── data.ts           # Données : projets, expériences, compétences
```

## Installation locale

```bash
# Cloner le projet
git clone https://github.com/eric/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Personnalisation

Tout le contenu est centralisé dans **`lib/data.ts`** :

- Ajouter / modifier des **projets** → tableau `projects`
- Mettre à jour le **parcours** → tableau `experiences`
- Modifier les **compétences** → objet `skills`

Pour les **informations de contact**, modifier directement `components/Contact.tsx`.

## Déploiement sur Vercel (recommandé)

1. Pousser le projet sur GitHub
2. Aller sur [vercel.com](https://vercel.com) → **New Project**
3. Sélectionner le dépôt GitHub
4. Cliquer **Deploy** — Vercel détecte automatiquement Next.js

Le déploiement prend moins de 2 minutes. Vercel génère une URL du type `portfolio-eric.vercel.app`.

### Domaine personnalisé

Dans le dashboard Vercel → **Settings → Domains** → ajouter votre domaine.

## Prochaines étapes

- [ ] Remplacer les projets placeholder par vos vrais projets
- [ ] Ajouter vos vraies captures d'écran dans `/public/projects/`
- [ ] Mettre à jour email, LinkedIn et GitHub dans les données
- [ ] Ajouter un vrai CV PDF dans `/public/cv-eric-l.pdf`
- [ ] Configurer un domaine personnalisé sur Vercel
