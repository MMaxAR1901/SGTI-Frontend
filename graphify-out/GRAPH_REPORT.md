# Graph Report - SGTI  (2026-11-13)

## Corpus Check
- 225 files · ~33,838 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .dev 1, .conf 1)

## Summary
- 904 nodes · 2803 edges · 41 communities (35 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c1277313`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useCheckoutVM.ts
- ui/index.ts
- catalog.types.ts
- package.json
- Toast.tsx
- react-router-dom
- useQuoteVM.ts
- route-types.ts
- cart/index.ts
- lazy-components.tsx
- web-dev
- compilerOptions
- routes.tsx
- steps
- compilerOptions
- SGTI · E-commerce de soluciones gráficas
- safeUrl.ts
- vite-env.d.ts
- tsconfig.json
- landing/view/components/index.ts
- landing/index.ts
- LandingPage.tsx
- ProductDetailPage.tsx
- landing.types.ts
- cn
- devDependencies
- useProductDetailVM.ts
- catalog.service.ts
- catalog/index.ts
- landing.service.ts
- Button
- quotes.service.ts
- dependencies
- scripts
- TrajectorySection.tsx
- vite.config.ts
- ProductArt.tsx
- FileDrop.tsx
- PriceTag.tsx
- AGENTS.md
- CLAUDE.md

## God Nodes (most connected - your core abstractions)
1. `cn()` - 99 edges
2. `react` - 55 edges
3. `react-router-dom` - 34 edges
4. `Container()` - 32 edges
5. `PATHS` - 30 edges
6. `Icon()` - 30 edges
7. `lucide-react` - 28 edges
8. `ButtonLink()` - 25 edges
9. `Button` - 22 edges
10. `formatCurrency()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Conectar backend` --references--> `http()`  [INFERRED]
  README.md → src/lib/http.ts
- `Sistema visual` --references--> `CropMarks()`  [INFERRED]
  README.md → src/shared/ui/CropMarks.tsx
- `Qué se agregó` --references--> `cn()`  [INFERRED]
  README.md → src/lib/cn.ts
- `Qué se agregó` --references--> `formatCurrency()`  [INFERRED]
  README.md → src/lib/format.ts
- `Qué se agregó` --references--> `EmptyState()`  [INFERRED]
  README.md → src/shared/ui/EmptyState.tsx

## Import Cycles
- None detected.

## Communities (41 total, 6 thin omitted)

### Community 0 - "useCheckoutVM.ts"
Cohesion: 0.07
Nodes (36): formatDate(), adminService, nextStatus(), AdvanceButtonProps, StatusFilter, AddressForm, CHECKOUT_STEPS, CheckoutState (+28 more)

### Community 1 - "ui/index.ts"
Cohesion: 0.07
Nodes (31): react, useLockBodyScroll(), BadgeProps, BadgeTone, tones, Breadcrumbs(), Crumb, CardProps (+23 more)

### Community 2 - "catalog.types.ts"
Cohesion: 0.15
Nodes (13): CATEGORIES, CatalogFilters, Category, CategoryId, OptionChoice, PriceQuote, PriceTier, ProductSpec (+5 more)

### Community 3 - "package.json"
Cohesion: 0.11
Nodes (19): name, private, type, version, clsx, eslint, @eslint/js, eslint-plugin-react-hooks (+11 more)

### Community 4 - "Toast.tsx"
Cohesion: 0.08
Nodes (22): react-dom, App(), AppProviders(), ErrorBoundary, State, router, createStore(), Listener (+14 more)

### Community 5 - "react-router-dom"
Cohesion: 0.08
Nodes (30): lucide-react, CategoryNav(), Logo(), MobileMenu(), MobileMenuProps, PromoBar(), SearchBar(), SearchBarProps (+22 more)

### Community 6 - "useQuoteVM.ts"
Cohesion: 0.09
Nodes (40): react-router-dom, AdminSidebar(), UserMenu(), AdminLayout(), useAdminLayoutVM(), useStoreHeaderVM(), PATHS, RouteGuard (+32 more)

### Community 7 - "route-types.ts"
Cohesion: 0.11
Nodes (16): CheckoutSuccessPage(), FILE_TIPS, PROCESS_STEPS, ProcessStep, HomePage(), CategoriesSection(), TINTS, FeaturedSection() (+8 more)

### Community 8 - "cart/index.ts"
Cohesion: 0.16
Nodes (26): formatCurrency(), useCartStore, useCartUIStore, computeTotals(), round2(), STANDARD_SHIPPING, withQuantity(), CartItem (+18 more)

### Community 9 - "lazy-components.tsx"
Cohesion: 0.08
Nodes (44): AdminDashboardPage, AdminOrdersPage, AdminProductsPage, CartPage, CatalogPage, CheckoutPage, CheckoutSuccessPage, HomePage (+36 more)

### Community 10 - "web-dev"
Cohesion: 0.08
Nodes (27): VITE_API_URL, VITE_DEFAULT_TENANT, args, context, dockerfile, CHOKIDAR_USEPOLLING, VITE_API_URL, VITE_DEFAULT_TENANT (+19 more)

### Community 11 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+13 more)

### Community 12 - "routes.tsx"
Cohesion: 0.09
Nodes (27): NotFoundPage, RouteGuardGate(), accountRoutes, adminRoutes, authRoutes, checkoutRoutes, landingRoutes, routeRegistry (+19 more)

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
Cohesion: 0.13
Nodes (28): IconName, ServiceImage, ButtonProps, ButtonSize, ButtonVariant, sizes, variants, Carousel() (+20 more)

### Community 20 - "landing/index.ts"
Cohesion: 0.13
Nodes (21): IMAGES, FOOTER_COLUMNS, LEGAL_LINKS, MAIN_NAV, SECTION_IDS, SERVICE_SPEC_FIELDS, SERVICES, ServiceSpecField (+13 more)

### Community 21 - "LandingPage.tsx"
Cohesion: 0.22
Nodes (20): anchor(), GalleryItem, Substrate, Container(), SubstrateCard, GalleryCard(), Eyebrow(), SectionHeader() (+12 more)

### Community 22 - "ProductDetailPage.tsx"
Cohesion: 0.16
Nodes (10): ProductArt(), ProductCard(), ProductCardSkeleton(), ProductGrid(), turnaroundLabel(), ProductDetailPage(), Badge(), Checkbox (+2 more)

### Community 23 - "landing.types.ts"
Cohesion: 0.17
Nodes (16): FooterColumn, FooterLink, ImageAsset, NavLink, Service, ServiceId, ServiceSpecKey, ServiceSpecs (+8 more)

### Community 24 - "cn"
Cohesion: 0.16
Nodes (10): cn(), FONT_SIZE_TOKENS, twMerge, Sector, ContainerProps, PillProps, EyebrowProps, SectionHeaderProps (+2 more)

### Community 25 - "devDependencies"
Cohesion: 0.12
Nodes (17): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, prettier, prettier-plugin-tailwindcss (+9 more)

### Community 26 - "useProductDetailVM.ts"
Cohesion: 0.30
Nodes (11): defaultSelection(), describeSelection(), optionsFactor(), quotePrice(), round2(), startingPrice(), tierFor(), OptionSelection (+3 more)

### Community 27 - "catalog.service.ts"
Cohesion: 0.24
Nodes (8): delay(), hasApi, http(), HttpError, normalize(), PRODUCTS, sides, ProductOption

### Community 28 - "catalog/index.ts"
Cohesion: 0.32
Nodes (6): Kpi, useAdminDashboardVM(), useAdminOrdersVM(), catalogService, useAsync(), useHomeVM()

### Community 29 - "landing.service.ts"
Cohesion: 0.30
Nodes (9): CLIENTS, GALLERY, HERO, QUOTE_HIGHLIGHTS, SECTORS, SUBSTRATES, LANDING_CONTENT, landingService (+1 more)

### Community 30 - "Button"
Cohesion: 0.31
Nodes (9): Qué se agregó, HeroContent, QuoteHighlight, Button(), Pill(), HeroSection(), HeroSectionProps, QuoteSection() (+1 more)

### Community 31 - "quotes.service.ts"
Cohesion: 0.47
Nodes (5): quotesService, useQuotesStore, QuoteInput, QuoteRequest, QuoteStatus

### Community 32 - "dependencies"
Cohesion: 0.29
Nodes (7): dependencies, clsx, lucide-react, react, react-dom, react-router-dom, tailwind-merge

### Community 33 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, lint, preview, typecheck

### Community 34 - "TrajectorySection.tsx"
Cohesion: 0.48
Nodes (5): Client, ClientChip(), ClientMarquee(), ClientMarqueeProps, TrajectorySectionProps

### Community 35 - "vite.config.ts"
Cohesion: 0.40
Nodes (3): @tailwindcss/vite, vite, @vitejs/plugin-react

### Community 36 - "ProductArt.tsx"
Cohesion: 0.50
Nodes (4): ArtVariant, ART, ArtFn, ProductArtProps

### Community 37 - "FileDrop.tsx"
Cohesion: 0.67
Nodes (3): FileDrop(), FileDropProps, sizeLabel()

## Knowledge Gaps
- **8 isolated node(s):** `@types/node`, `@types/react`, `@types/react-dom`, `eslint`, `prettier` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 249 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `ui/index.ts` to `useCheckoutVM.ts`, `catalog.types.ts`, `package.json`, `Toast.tsx`, `react-router-dom`, `useQuoteVM.ts`, `FileDrop.tsx`, `cart/index.ts`, `lazy-components.tsx`, `routes.tsx`, `landing/view/components/index.ts`, `landing/index.ts`, `ProductDetailPage.tsx`, `cn`, `useProductDetailVM.ts`, `catalog/index.ts`, `landing.service.ts`?**
  _High betweenness centrality (0.168) - this node is a cross-community bridge._
- **What connects `@types/node`, `@types/react`, `@types/react-dom` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useCheckoutVM.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06596491228070175 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `useCheckoutVM.ts`, `ui/index.ts`, `catalog.types.ts`, `Toast.tsx`, `react-router-dom`, `useQuoteVM.ts`, `route-types.ts`, `cart/index.ts`, `lazy-components.tsx`, `routes.tsx`, `landing/view/components/index.ts`, `landing/index.ts`, `LandingPage.tsx`, `ProductDetailPage.tsx`, `landing.types.ts`, `Button`, `ProductArt.tsx`, `FileDrop.tsx`, `PriceTag.tsx`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._
- **Should `ui/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06823529411764706 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `useQuoteVM.ts` to `useCheckoutVM.ts`, `ui/index.ts`, `catalog.types.ts`, `package.json`, `Toast.tsx`, `react-router-dom`, `route-types.ts`, `cart/index.ts`, `routes.tsx`, `landing/view/components/index.ts`, `ProductDetailPage.tsx`, `useProductDetailVM.ts`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Should `catalog.types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._