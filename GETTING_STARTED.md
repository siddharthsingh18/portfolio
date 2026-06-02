# 🚀 Getting Started with This Portfolio

Welcome! This guide will help you get the portfolio up and running on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** — [Download here](https://git-scm.com/)

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/siddharthsingh18/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

## 🏃 Running Locally

### Development Mode

To start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

### Production Build

To create an optimized production build:

```bash
npm run build
npm start
```

## 🔍 Code Quality

### Linting

Check for code style issues:

```bash
npm run lint
```

This runs ESLint to ensure code quality and consistency.

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   ├── main/                    # Major page sections
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── contact.tsx
│   │   └── ...
│   └── sub/                     # Sub-components
│       └── ...
├── constants/                   # Configuration & constants
│   └── index.ts                # Projects, skills, experience data
├── lib/                         # Utility functions
│   ├── motion.ts               # Animation utilities
│   └── utils.ts                # Helper functions
├── public/                      # Static assets
│   ├── projects/               # Project images
│   ├── skills/                 # Skill icons
│   ├── certificates/           # Certificate PDFs
│   └── videos/                 # Background videos
├── package.json                # Project dependencies
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## 🛠️ Customizing Your Portfolio

### Update Your Information

Edit `constants/index.ts` to customize:
- **Personal Details:** Name, email, phone
- **Experience:** Work history and roles
- **Skills:** Programming languages and tools
- **Projects:** Featured projects and descriptions
- **Certifications:** Your certificates and achievements

### Modify Colors & Styling

- **Tailwind CSS:** Edit `tailwind.config.ts` for custom color schemes
- **Global Styles:** Modify `app/globals.css` for global CSS variables

### Add New Sections

1. Create a new component in `components/main/`
2. Import and add it to `app/page.tsx`
3. Style using Tailwind CSS classes

## 📸 Adding Assets

### Project Images
Place images in `public/projects/` and reference them in `constants/index.ts`

### Skill Icons
Add PNG icons to `public/skills/` (80x80px recommended)

### Videos
Add WebM videos to `public/videos/` for background animations

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel is the official Next.js hosting platform:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure the build
5. Click "Deploy"

**Your site will be live in seconds!**

### Deploy to Netlify

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder, or
4. Connect your GitHub repo for continuous deployment

### Deploy to Other Platforms

- **AWS Amplify**
- **Azure App Service**
- **DigitalOcean App Platform**
- **Railway**
- **Heroku**

## 🔧 Environment Variables

Create a `.env.local` file in the root directory (if needed):

```bash
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
```

## ⚠️ Troubleshooting

### Port 3000 Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Node Modules Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clean build cache
rm -rf .next
npm run build
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📞 Need Help?

- Check existing [GitHub Issues](https://github.com/siddharthsingh18/portfolio/issues)
- Create a [new issue](https://github.com/siddharthsingh18/portfolio/issues/new)
- Email: [siddharthsingh23122005@gmail.com](mailto:siddharthsingh23122005@gmail.com)

---

Happy coding! 🎉
