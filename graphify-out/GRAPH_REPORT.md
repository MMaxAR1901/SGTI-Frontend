# Graph Report - SGTI  (2026-11-14)

## Corpus Check
- 227 files · ~34,896 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .dev 1, .conf 1)

## Summary
- 911 nodes · 2839 edges · 29 communities (24 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `38cadfa0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useCheckoutVM.ts
- ui/index.ts
- catalog/index.ts
- package.json
- Toast.tsx
- react-router-dom
- useQuoteVM.ts
- ProductDetailPage.tsx
- cart/index.ts
- web-dev
- compilerOptions
- CheckoutPage.tsx
- steps
- compilerOptions
- SGTI · E-commerce de soluciones gráficas
- safeUrl.ts
- vite-env.d.ts
- tsconfig.json
- landing/view/components/index.ts
- landing/index.ts
- LandingPage.tsx
- landing.types.ts
- cn
- devDependencies
- dependencies
- scripts
- vite.config.ts
- AGENTS.md
- CLAUDE.md

## God Nodes (most connected - your core abstractions)
1. `cn()` - 101 edges
2. `react` - 58 edges
3. `react-router-dom` - 34 edges
4. `Icon()` - 32 edges
5. `Container()` - 32 edges
6. `PATHS` - 30 edges
7. `lucide-react` - 28 edges
8. `ButtonLink()` - 25 edges
9. `Button` - 22 edges
10. `formatCurrency()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Conectar backend` --references--> `http()`  [INFERRED]
  README.md → src/lib/http.ts
- `Sistema visual` --references--> `CropMarks()`  [INFERRED]
  README.md → src/shared/ui/CropMarks.tsx
- `Qué se agregó` --references--> `formatCurrency()`  [INFERRED]
  README.md → src/lib/format.ts
- `Qué se agregó` --references--> `EmptyState()`  [INFERRED]
  README.md → src/shared/ui/EmptyState.tsx
- `Qué se agregó` --references--> `cn()`  [INFERRED]
  README.md → src/lib/cn.ts

## Import Cycles
- None detected.

## Communities (29 total, 5 thin omitted)

### Community 0 - "useCheckoutVM.ts"
Cohesion: 0.06
Nodes (49): formatDate(), adminService, nextStatus(), Kpi, AdminDashboardPage(), AdminOrdersPage(), AdminProductsPage(), AdvanceButton() (+41 more)

### Community 1 - "ui/index.ts"
Cohesion: 0.06
Nodes (34): react, MobileMenuVM, useMobileMenu(), useEscapeKey(), useLockBodyScroll(), BadgeProps, BadgeTone, tones (+26 more)

### Community 2 - "catalog/index.ts"
Cohesion: 0.07
Nodes (44): delay(), hasApi, http(), HttpError, catalogService, normalize(), CATEGORIES, defaultSelection() (+36 more)

### Community 3 - "package.json"
Cohesion: 0.11
Nodes (19): name, private, type, version, clsx, eslint, @eslint/js, eslint-plugin-react-hooks (+11 more)

### Community 4 - "Toast.tsx"
Cohesion: 0.07
Nodes (27): react-dom, App(), AppProviders(), ErrorBoundary, State, router, createStore(), Listener (+19 more)

### Community 5 - "react-router-dom"
Cohesion: 0.07
Nodes (34): lucide-react, AdminSidebar(), CategoryNav(), Logo(), MobileMenu(), PromoBar(), SearchBar(), SearchBarProps (+26 more)

### Community 6 - "useQuoteVM.ts"
Cohesion: 0.08
Nodes (44): react-router-dom, MobileMenuProps, NotFoundPage, RouteGuardGate(), accountRoutes, adminRoutes, authRoutes, checkoutRoutes (+36 more)

### Community 7 - "ProductDetailPage.tsx"
Cohesion: 0.06
Nodes (49): AdminDashboardPage, AdminOrdersPage, AdminProductsPage, CartPage, CatalogPage, CheckoutPage, CheckoutSuccessPage, HomePage (+41 more)

### Community 8 - "cart/index.ts"
Cohesion: 0.13
Nodes (31): useStoreHeaderVM(), currency, date, formatCurrency(), formatNumber(), number, pluralize(), useCartStore (+23 more)

### Community 10 - "web-dev"
Cohesion: 0.08
Nodes (27): VITE_API_URL, VITE_DEFAULT_TENANT, args, context, dockerfile, CHOKIDAR_USEPOLLING, VITE_API_URL, VITE_DEFAULT_TENANT (+19 more)

### Community 11 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+13 more)

### Community 12 - "CheckoutPage.tsx"
Cohesion: 0.08
Nodes (22): CheckoutPage(), DeliveryStep(), VM, MEXICAN_STATES, PaymentStep(), VM, ReviewStep(), buttonClasses() (+14 more)

### Community 13 - "steps"
Cohesion: 0.13
Nodes (14): runs-on, steps, jobs, build, name, on, pull_request, push (+6 more)

### Community 14 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+6 more)

### Community 15 - "SGTI · E-commerce de soluciones gráficas"
Cohesion: 0.12
Nodes (16): Agregar un módulo, Agregar un servicio nuevo, Arranque, Conectar backend, Docker, Estructura, Graphify (grafo de conocimiento del código), Instalación en tu máquina (una vez) (+8 more)

### Community 19 - "landing/view/components/index.ts"
Cohesion: 0.12
Nodes (27): IconName, ServiceImage, ButtonProps, ButtonSize, ButtonVariant, sizes, variants, Carousel() (+19 more)

### Community 20 - "landing/index.ts"
Cohesion: 0.21
Nodes (15): FOOTER_COLUMNS, LEGAL_LINKS, MAIN_NAV, SECTION_IDS, LandingLayout(), buildMailtoUrl(), buildTelUrl(), CONTACT_LINKS (+7 more)

### Community 21 - "LandingPage.tsx"
Cohesion: 0.19
Nodes (23): anchor(), GalleryItem, HeroContent, Substrate, Container(), GalleryCard(), Pill(), Eyebrow() (+15 more)

### Community 23 - "landing.types.ts"
Cohesion: 0.09
Nodes (35): CLIENTS, GALLERY, HERO, QUOTE_HIGHLIGHTS, SECTORS, SUBSTRATES, LANDING_CONTENT, landingService (+27 more)

### Community 24 - "cn"
Cohesion: 0.11
Nodes (23): Qué se agregó, cn(), FONT_SIZE_TOKENS, twMerge, IMAGES, FooterColumn, FooterLink, NavLink (+15 more)

### Community 25 - "devDependencies"
Cohesion: 0.12
Nodes (17): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, prettier, prettier-plugin-tailwindcss (+9 more)

### Community 32 - "dependencies"
Cohesion: 0.29
Nodes (7): dependencies, clsx, lucide-react, react, react-dom, react-router-dom, tailwind-merge

### Community 33 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, lint, preview, typecheck

### Community 35 - "vite.config.ts"
Cohesion: 0.40
Nodes (3): @tailwindcss/vite, vite, @vitejs/plugin-react

## Knowledge Gaps
- **8 isolated node(s):** `@types/node`, `@types/react`, `@types/react-dom`, `eslint`, `prettier` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 251 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `ui/index.ts` to `useCheckoutVM.ts`, `catalog/index.ts`, `package.json`, `Toast.tsx`, `react-router-dom`, `useQuoteVM.ts`, `ProductDetailPage.tsx`, `cart/index.ts`, `CheckoutPage.tsx`, `landing/view/components/index.ts`, `landing/index.ts`, `landing.types.ts`, `cn`?**
  _High betweenness centrality (0.178) - this node is a cross-community bridge._
- **What connects `@types/node`, `@types/react`, `@types/react-dom` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useCheckoutVM.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06007480130902291 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `useCheckoutVM.ts`, `ui/index.ts`, `catalog/index.ts`, `Toast.tsx`, `react-router-dom`, `ProductDetailPage.tsx`, `cart/index.ts`, `CheckoutPage.tsx`, `landing/view/components/index.ts`, `LandingPage.tsx`, `landing.types.ts`?**
  _High betweenness centrality (0.136) - this node is a cross-community bridge._
- **Should `ui/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06453634085213032 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `useQuoteVM.ts` to `useCheckoutVM.ts`, `ui/index.ts`, `catalog/index.ts`, `package.json`, `Toast.tsx`, `react-router-dom`, `ProductDetailPage.tsx`, `cart/index.ts`, `CheckoutPage.tsx`, `landing/index.ts`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Should `catalog/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0676056338028169 - nodes in this community are weakly interconnected._