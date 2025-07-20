# HomieOS.com Website

This repository contains the official website for [homieos.com](https://homieos.com) - the open source Homie Ai project that enables you to host large language models privately and securely on your own hardware. Available as open-source software or complete plug-and-play hardware solution with NVIDIA Jetson Nano dev kit.

## About HomieOS

HomieOS is a comprehensive open-source project that transforms your home into a production-grade AI powerhouse with zero DevOps complexity. The project consists of several integrated components:

### 🤖 Core Components

- **Homie AI Stack** - Complete Ollama-based AI platform with multiple web interfaces
- **Homie Orchestrator** - Production-grade container orchestration inspired by enterprise supervisor architectures  
- **Homie OS** - The underlying operating system optimized for Homie Ai infrastructure
- **This Website** - Marketing and documentation site for the entire ecosystem

### ✨ Key Features

- **100% Private** - Your data never leaves your network with end-to-end encryption
- **Unlimited Usage** - No API limits, no usage caps, no subscription fees
- **Open Source** - Fully transparent, community-driven development
- **Plug-and-Play Hardware** - Complete NVIDIA Jetson Nano solution with pre-installed software
- **Developer API** - Complete REST API with comprehensive documentation
- **Advanced AI Agents** - Deploy sophisticated AI that can reason, plan, and execute
- **Multiple LLMs** - Support for Llama, Mistral, CodeLlama, and more
- **Self-Healing Infrastructure** - Automatic restarts, health monitoring, and failure recovery
- **Zero-Downtime Updates** - A/B update system inspired by modern mobile OS updates

## Website Development

This website is built with modern web technologies:

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Lucide Icons** for beautiful iconography

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   # or
   bun run build
   ```

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing page hero section
│   ├── Features.tsx    # Features showcase
│   ├── Navigation.tsx  # Site navigation
│   ├── Footer.tsx      # Site footer
│   └── Pricing.tsx     # Pricing information
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Contributing

We welcome contributions to improve the website! Please see our [main repository](https://github.com/juano2310/homie-os) for contribution guidelines.

## Related Projects

- **[Homie AI](../homie_ai/)** - Complete Ollama AI platform with Docker containerization
- **[Homie Orchestrator](../homie_orchestrator/)** - Container orchestration for Homie Ai infrastructure
- **[Homie OS](../homie_os/)** - The underlying operating system

## License

This project is open source and available under the [MIT License](LICENSE).

## Links

- **Website:** [homieos.com](https://homieos.com)
- **Documentation:** [docs.homieos.com](https://docs.homieos.com)
- **GitHub:** [github.com/juano2310/homie-os](https://github.com/juano2310/homie-os)
- **Community:** [Join our Discord for support and discussions](https://discord.gg/k64erSMgcX) 
