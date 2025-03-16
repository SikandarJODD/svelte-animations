import SvelteSvg from "$lib/svg/web/svelte.svg";
import TailwindSvg from "$lib/svg/web/tailwindcss.svg";
import TsSvg from "$lib/svg/web/typescript.svg";
import ShadcnSvelteSvg from "$lib/svg/web/shadcn-ui_dark.svg";

// Template Images
import PortfolioImg from "$lib/svg/portfolio_template.png";
import StartupImg from "$lib/svg/startup_template.png";

// Markdown Text
let portfolio_markdown = `### Developer Portfolio Template
A minimalistic portfolio template to showcase your skills and experience.

### Why should i use this template?
- Save 10+ hours of development time
- Easy to **Customize**
- SEO friendly
- Responsive design
- Download | Edit | Publish
- Deploy to **Vercel** in seconds

### Usage
1. Click on **Download** button
2. Extract the zip file & open in your favorite code editor
3. Edit the **/src/lib/data/resume.ts** file with your details
4. Run \`npm install\` & \`npm run dev\` to start the development server on \`localhost:5173\`
5. Deploy to **Vercel** with a single click

`;

let startup_markdown = `### Startup Template
A complete landing page template to launch a new project or idea (frontend only). Uses the latest frontend technologies and best practices to unblock you and delight your customers.

### Why should i use this template?
- Save 10+ hours of development time
- Easy to **Configure** and **Change**
- High Quality Design & Responsive UI
- SEO friendly

### Features
- Header Section
- Hero Section
- Social Proof Section
- Pricing Section
- Call To Action Section
- Footer Section
- Mobile Reponsive Navbar

### Usage
1. Click on **Download** button
2. Extract the zip file & open in your favorite code editor
3. Run \`npm install\` & \`npm run dev\` to start the development server on \`localhost:5173\`
4. Edit the Sections Code as per your requirements
5. Deploy to **Vercel** with a single click
`;

export let allTemplates = [
  {
    id: "developer-portfolio",
    title: "Portfolio Template",
    desc: "A minimalistic portfolio template to showcase your work and experience.",
    tags: ["portfolio", "minimalistic"],
    img: PortfolioImg,
    markdown: portfolio_markdown,
    techstack: [
      "svelte",
      "tailwindCSS",
      "typescript",
      "shadcn-svelte",
      "svelte-animations",
    ],
    credits: "Magic UI",
    downloadLink:
      "https://github.com/SikandarJODD/portfolio-template/archive/refs/heads/master.zip",
    previewLink: "https://portfolio-sve.vercel.app",
  },
  {
    id: "startup-template",
    title: "Startup Template",
    desc: "The best landing page template for your startup.",
    tags: ["startup", "product"],
    img: StartupImg,
    markdown: startup_markdown,
    techstack: [
      "svelte",
      "tailwindCSS",
      "typescript",
      "shadcn-svelte",
      "svelte-animations",
    ],
    credits: "Magic UI",
    downloadLink:
      "https://github.com/SikandarJODD/startup-template/archive/refs/heads/master.zip",
    previewLink: "https://startup-sve.vercel.app",
  },
  {
    id: "sass-template",
    title: "SASS Template",
    desc: "The best landing page template for your startup.",
    tags: ["startup", "product", "sass"],
    img: StartupImg,
    markdown: startup_markdown,
    techstack: [
      "svelte",
      "tailwindCSS",
      "typescript",
      "shadcn-svelte",
      "svelte-animations",
    ],
    credits: "Magic UI",
    downloadLink:
      "https://github.com/SikandarJODD/startup-template/archive/refs/heads/master.zip",
    previewLink: "https://startup-sve.vercel.app",
  },
];

export let allIcons = {
  svelte: SvelteSvg,
  tailwindCSS: TailwindSvg,
  typescript: TsSvg,
  "shadcn-svelte": ShadcnSvelteSvg,
};
