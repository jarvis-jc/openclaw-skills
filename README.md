# OpenClaw Skills Directory

A comprehensive directory website showcasing 700+ skills for OpenClaw AI agents. Built for discoverability, SEO, and Generative Engine Optimization (GEO).

## 🦞 Overview

The OpenClaw Skills Directory helps developers and AI enthusiasts discover, install, and contribute skills that extend OpenClaw agent capabilities. Skills are community-built extensions that teach AI agents how to interact with tools, services, and workflows.

## 📁 Structure

```
openclaw-skills/
├── index.html      # Main directory page
├── sitemap.xml     # XML sitemap for search engines
├── robots.txt      # Crawler directives
└── README.md       # This file
```

## ✨ Features

### SEO Optimization
- Semantic HTML5 structure
- Meta tags (title, description, Open Graph, Twitter Cards)
- JSON-LD schema markup (CollectionPage, ItemList)
- Canonical URLs
- Mobile-responsive design

### GEO Optimization (Generative Engine Optimization)
- Clear, natural language descriptions
- Structured data for AI understanding
- Installation instructions inline
- Use cases for each skill
- Category-based organization

### Functionality
- **Search**: Filter skills by name, description, or category
- **Categories**: Browse by Productivity, Development, Research, Communication, Automation, Data
- **One-click install**: Copy `npx clawdhub install <skill>` commands
- **GitHub links**: Direct access to source code
- **Newsletter signup**: Stay updated on new skills
- **Submit/Sponsor CTAs**: Community contribution pathways

## 🛠️ Skills Categories

| Category | Count | Examples |
|----------|-------|----------|
| Productivity | 42 | Apple Reminders, Linear, Deepwork Tracker |
| Development | 65 | GitHub, Vercel, Coding Agent, Conventional Commits |
| Research | 23 | Brave Search, Exa, Tavily, ArXiv Watcher |
| Communication | 26 | Slack, Discord, Tweet Writer |
| Automation | 52 | Agent Browser, Playwright, Cloudflare Workers |
| Data | 29 | Supabase, Bright Data, Fal.ai |

## 🚀 Installation Methods

### Via ClawdHub CLI (Recommended)
```bash
npx clawdhub@latest install <skill-slug>
```

### Manual Installation
Copy the skill folder to:
- **Global**: `~/.openclaw/skills/`
- **Workspace**: `<project>/skills/`

Priority: Workspace > Local > Bundled

## 📚 Resources

- **OpenClaw Docs**: https://docs.openclaw.ai/tools/skills
- **ClawdHub Registry**: https://clawdhub.com
- **GitHub Organization**: https://github.com/openclaw
- **Awesome List**: https://github.com/VoltAgent/awesome-openclaw-skills

## 🔧 Development

The directory is a static HTML site optimized for fast loading and easy deployment. No build step required.

### Local Preview
```bash
cd directories/openclaw-skills
python -m http.server 8080
# or
npx serve .
```

### Deploy
Deploy to any static hosting:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## 📝 Adding Skills

To add a skill to the directory:

1. Ensure the skill is published to ClawdHub
2. Edit `index.html`
3. Add a new skill card in the appropriate category section
4. Include: name, description, author, install command, GitHub link

### Skill Card Template
```html
<div class="skill-card" data-category="category-name">
    <div class="skill-header">
        <div class="skill-name">Skill Name</div>
        <span class="skill-category">Category</span>
    </div>
    <p class="skill-description">Description of what the skill does.</p>
    <div class="skill-meta">
        <span>👤 author</span>
        <span>⭐ Popular</span>
    </div>
    <div class="skill-install">
        <code>npx clawdhub install skill-slug</code>
        <button class="copy-btn" onclick="copyToClipboard('npx clawdhub install skill-slug')">📋</button>
    </div>
    <div class="skill-links">
        <a href="https://github.com/openclaw/skills/tree/main/skills/author/skill-slug" target="_blank">📂 Source</a>
    </div>
</div>
```

## 🤝 Contributing

- **Submit a skill**: https://github.com/openclaw/clawhub
- **Report issues**: Open an issue in this repository
- **Suggest improvements**: PRs welcome!

## 📄 License

MIT License - feel free to use, modify, and distribute.

---

Built with 🦞 for the OpenClaw community.
