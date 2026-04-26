# Smart City Website - AI Coding Instructions

## Project Overview
A **Next.js 15 research website** showcasing Smart City computer vision applications (surveillance, traffic management, waste management, parking). Marketing site with interactive UI components, zero backend APIs.

## Architecture Essentials

### Component Organization (Strict Pattern)
- **`components/common/`** - Layout wrappers: `header`, `footer`, `subscribe-form` (appear on all pages)
- **`components/sections/`** - Page content blocks: `hero`, `content`, `solution`, `team`, `timeline`, etc. (imported individually in `app/page.tsx`)
- **`components/ui/`** - Reusable atomic components: buttons, cards, dialogs, forms (from shadcn/ui pattern)
- **`components/magicui/`** - Premium animated components: `animated-beam`, `orbiting-circles`, `hero-video-dialog`
- **`components/providers/`** - React context: `theme-provider` wraps app for dark mode

**Pattern:** `app/page.tsx` composes sections in sequence → each section uses `ui/` atoms → atoms styled with Tailwind

### Styling Architecture
- **Tailwind CSS** with custom dark theme (see `dark:` prefix throughout)
- **CSS-in-JS for animations** - inline `<style>` tags in components (e.g., `@keyframes floatBg` in hero.tsx)
- **Utility function:** `cn()` from `lib/utils.ts` for conditional class merging (clsx + tailwind-merge)
- **Theme switching:** `next-themes` provider in layout; components accept dark: classes

### Build & Run
```bash
npm install
npm run dev          # Next.js with turbopack (--turbopack flag)
npm run build        # Production build
npm run lint         # ESLint
```

## Key Conventions

### Component Patterns
1. **Client vs Server:** Use `"use client"` only when needing interactivity (e.g., animations, form handlers)
2. **Form Handling:** `react-hook-form` + `zod` validation (see `components/common/subscribe-form.tsx`)
3. **Image Optimization:** Import from `next/image`; remote images configured in `next.config.ts` (unsplash, microlink, aceternity)
4. **Icons:** Use `lucide-react` (Coffee, Zap, TrendingUp, etc.) consistently across site

### TypeScript Strict Mode
- All files strict-typed (`"strict": true` in tsconfig.json)
- Component props use `React.FC<Props>` or functional signature
- CSS-in-JS animations must be in `<style>` blocks, not inline styles

### Dark Mode Pattern
Every colored element follows: `className="text-amber-800 dark:text-amber-300"`
The accent colors are **amber/orange** (coffee/smart city theme) — NOT blue or purple.

## Critical Dependencies & Integration

| Package | Purpose | Usage |
|---------|---------|-------|
| `@radix-ui/*` | Headless UI primitives | Wrapped by shadcn/ui components |
| `framer-motion` / `motion` | Advanced animations | Used in AnimatedBeam; prefer for complex orchestration |
| `@tsparticles/react` | Particle animations | Background visual effects |
| `embla-carousel` | Carousel management | Carousel.tsx component |
| `react-hook-form` | Form state | Used in subscribe-form.tsx |
| `zod` | Runtime validation | Form schema definitions |
| `next-themes` | Dark mode provider | Wraps layout; class-based toggle |
| `sonner` | Toast notifications | Imported in layout.tsx |
| `lucide-react` | Icon library | Coffee, Zap, TrendingUp, ArrowRight icons |

### Remote Image Configuration
Allowed hosts in [next.config.ts](../next.config.ts): `images.unsplash.com`, `sjc.microlink.io`, `assets.aceternity.com`

## Testing & Quality
- **No test files in repo** (not a requirement for this marketing site)
- **ESLint:** Run `npm run lint`; Next.js config rules applied
- **TypeScript:** Strict mode enabled; check types with `tsc --noEmit`

## Common Workflows

### Adding a New Section
1. Create component in `components/sections/new-section.tsx` (can be `"use client"` if interactive)
2. Use existing `ui/` components for structure
3. Import at top of [app/page.tsx](../../app/page.tsx)
4. Add to Home() component tree in desired order
5. Smooth scrolling: Use Header's `scrollToSection()` pattern → pass ID to element, prevents default, queries by ID
6. Example ref-based pattern: Magic UI components use containerRef, fromRef, toRef for ref-based animations

### Animation Best Practices
- **Decorative animations**: Define `@keyframes` in inline `<style>` tags (see [hero.tsx](components/sections/hero.tsx), [banner.tsx](components/sections/banner.tsx))
- **Interactive animations**: Use `motion` package from framer-motion (complex orchestration)
- **Common patterns**: `floatBg`, `slideInLeft`, `slideInRight`, `rotateCoffee`, `steamRise`, `floatSmooth` (defined per-component)
- **Particle effects**: Import `@tsparticles/react` for background visual effects

### Updating Branding/Colors
- Search for `amber-` and `orange-` Tailwind classes
- Dark variants use `dark:amber-` and `dark:orange-`
- Update consistently across header, footer, and all sections
- Do NOT use blue/purple; coffee/orange theme only

### Deploying
- Primary target: **Vercel** (Next.js native deployment)
- Git-based auto-deploy: push to GitHub → auto-build on Vercel dashboard
- Environment: Node.js 20+ required

## File Path Reference (Key Files)
- Layout root: [app/layout.tsx](app/layout.tsx) (ThemeProvider wraps entire app with dark mode support)
- Home page: [app/page.tsx](app/page.tsx) (stacks ~13 section components sequentially)
- Component utility: [lib/utils.ts](lib/utils.ts) (only `cn()` function)
- Config: [next.config.ts](next.config.ts), [tailwind.config.ts](tailwind.config.ts)
- Animations: Defined inline in section components (floatBg, slideIn patterns)
- Dark mode: Managed via [components/providers/theme-provider.tsx](components/providers/theme-provider.tsx)

---

**Generated for AI Coding Agents** | Last Updated: Feb 2026
