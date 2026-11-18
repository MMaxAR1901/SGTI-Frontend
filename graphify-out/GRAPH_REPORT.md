# Graph Report - SGTI  (2026-11-17)

## Corpus Check
- 232 files · ~35,400 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 5, .dev 1, .conf 1)

## Summary
- 926 nodes · 2877 edges · 45 communities (40 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9e0bdfcf`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useAdminOrdersVM.ts
- cn
- catalog/index.ts
- package.json
- AppProviders.tsx
- useTenant
- useQuoteVM.ts
- Container
- cart/index.ts
- ui/index.ts
- web-dev
- compilerOptions
- useCheckoutVM.ts
- steps
- compilerOptions
- SGTI · E-commerce de soluciones gráficas
- safeUrl.ts
- vite-env.d.ts
- tsconfig.json
- landing/view/components/index.ts
- landing.service.ts
- LandingPage.tsx
- ProductDetailPage.tsx
- landing.types.ts
- landing/view/components/index.ts
- devDependencies
- routes.tsx
- route-types.ts
- hooks/index.ts
- lazy-components.tsx
- Eyebrow
- react-router-dom
- dependencies
- scripts
- StoreHeader.tsx
- CatalogPage.tsx
- AdminProductsPage.tsx
- ui/Button.tsx
- ServiceCard.tsx
- AGENTS.md
- CLAUDE.md
- ClientMarquee.tsx
- Toast.tsx
- AdminLayout.tsx
- layout.data.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 103 edges
2. `react` - 58 edges
3. `react-router-dom` - 34 edges
4. `Icon()` - 34 edges
5. `Container()` - 32 edges
6. `PATHS` - 30 edges
7. `lucide-react` - 28 edges
8. `ButtonLink()` - 25 edges
9. `Button` - 22 edges
10. `formatCurrency()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Conectar backend` --references--> `http()`  [INFERRED]
  README.md → src/lib/http.ts
- `Qué se agregó` --references--> `formatCurrency()`  [INFERRED]
  README.md → src/lib/format.ts
- `Qué se agregó` --references--> `Button()`  [INFERRED]
  README.md → src/modules/landing/view/components/Button.tsx
- `Qué se agregó` --references--> `EmptyState()`  [INFERRED]
  README.md → src/shared/ui/EmptyState.tsx
- `Qué se agregó` --references--> `cn()`  [INFERRED]
  README.md → src/lib/cn.ts

## Import Cycles
- None detected.

## Communities (45 total, 5 thin omitted)

### Community 0 - "useAdminOrdersVM.ts"
Cohesion: 0.07
Nodes (30): createStore(), Listener, Options, SetState, Store, storage, adminService, nextStatus() (+22 more)

### Community 1 - "cn"
Cohesion: 0.08
Nodes (24): Qué se agregó, react, SearchBarProps, cn(), FONT_SIZE_TOKENS, twMerge, ContainerProps, CORNERS (+16 more)

### Community 2 - "catalog/index.ts"
Cohesion: 0.07
Nodes (39): delay(), hasApi, http(), HttpError, catalogService, normalize(), CATEGORIES, defaultSelection() (+31 more)

### Community 3 - "package.json"
Cohesion: 0.10
Nodes (22): name, private, type, version, clsx, eslint, @eslint/js, eslint-plugin-react-hooks (+14 more)

### Community 4 - "AppProviders.tsx"
Cohesion: 0.17
Nodes (8): react-dom, App(), AppProviders(), ErrorBoundary, State, router, initGlobalErrorTracking(), reportError()

### Community 5 - "useTenant"
Cohesion: 0.23
Nodes (11): DEFAULT_TENANT_ID, TENANTS, Tenant, TenantContact, TenantTheme, useTenantStore, resolveTenant(), resolveTenantId() (+3 more)

### Community 6 - "useQuoteVM.ts"
Cohesion: 0.13
Nodes (24): MobileMenuProps, analytics, EventName, EventPayload, email(), minLength(), phoneMx(), required() (+16 more)

### Community 7 - "Container"
Cohesion: 0.14
Nodes (11): FILE_TIPS, PROCESS_STEPS, ProcessStep, HomePage(), CategoriesSection(), TINTS, FeaturedSection(), FileTipsSection() (+3 more)

### Community 8 - "cart/index.ts"
Cohesion: 0.12
Nodes (29): useStoreHeaderVM(), currency, date, formatCurrency(), formatNumber(), number, pluralize(), useCartStore (+21 more)

### Community 9 - "ui/index.ts"
Cohesion: 0.15
Nodes (17): formatDate(), AdminDashboardPage(), AdminOrdersPage(), AdvanceButton(), KpiRow(), orderColumns, OrderStatusBadge(), OrderDetailPage() (+9 more)

### Community 10 - "web-dev"
Cohesion: 0.08
Nodes (27): VITE_API_URL, VITE_DEFAULT_TENANT, args, context, dockerfile, CHOKIDAR_USEPOLLING, VITE_API_URL, VITE_DEFAULT_TENANT (+19 more)

### Community 11 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+13 more)

### Community 12 - "useCheckoutVM.ts"
Cohesion: 0.08
Nodes (34): postalCodeMx(), AddressForm, CHECKOUT_STEPS, CheckoutState, CheckoutPage(), DeliveryStep(), VM, MEXICAN_STATES (+26 more)

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
Cohesion: 0.18
Nodes (16): IconName, ServiceImage, Carousel(), CarouselProps, FeatureCard(), FeatureCardProps, FloatingWhatsApp(), FloatingWhatsAppProps (+8 more)

### Community 20 - "landing.service.ts"
Cohesion: 0.09
Nodes (33): CLIENTS, GALLERY, HERO, PROCESS_STEPS, QUOTE_HIGHLIGHTS, SECTORS, SUBSTRATES, IMAGES (+25 more)

### Community 21 - "LandingPage.tsx"
Cohesion: 0.18
Nodes (22): anchor(), HeroContent, QuoteHighlight, Substrate, Button(), Container(), SubstrateCard, Pill() (+14 more)

### Community 22 - "ProductDetailPage.tsx"
Cohesion: 0.20
Nodes (10): getCategory(), startingPrice(), ProductArt(), ProductCard(), ProductCardSkeleton(), ProductGrid(), turnaroundLabel(), ProductDetailPage() (+2 more)

### Community 23 - "landing.types.ts"
Cohesion: 0.17
Nodes (13): FooterColumn, FooterLink, ImageAsset, NavLink, ProcessStep, ServiceSpecKey, ServiceSpecs, ServiceVariant (+5 more)

### Community 24 - "landing/view/components/index.ts"
Cohesion: 0.23
Nodes (13): ButtonProps, ButtonSize, ButtonVariant, sizes, variants, Footer(), FooterHeading(), InkStrip() (+5 more)

### Community 25 - "devDependencies"
Cohesion: 0.12
Nodes (17): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, prettier, prettier-plugin-tailwindcss (+9 more)

### Community 26 - "routes.tsx"
Cohesion: 0.14
Nodes (17): NotFoundPage, RouteGuardGate(), accountRoutes, adminRoutes, authRoutes, checkoutRoutes, landingRoutes, routeRegistry (+9 more)

### Community 27 - "route-types.ts"
Cohesion: 0.31
Nodes (9): PATHS, CheckoutSuccessPage(), HeroSection(), QuotePage(), NotFoundPage(), ButtonLink(), CropMarks(), FileDrop() (+1 more)

### Community 28 - "hooks/index.ts"
Cohesion: 0.17
Nodes (8): MobileMenuVM, useMobileMenu(), useEscapeKey(), useLockBodyScroll(), DrawerProps, Modal(), ModalProps, sizes

### Community 29 - "lazy-components.tsx"
Cohesion: 0.19
Nodes (17): AdminDashboardPage, AdminOrdersPage, AdminProductsPage, CartPage, CatalogPage, CheckoutPage, CheckoutSuccessPage, HomePage (+9 more)

### Community 30 - "Eyebrow"
Cohesion: 0.21
Nodes (13): GalleryItem, Sector, GalleryCard(), Eyebrow(), EyebrowProps, SectionHeader(), SectionHeaderProps, SectorBadge() (+5 more)

### Community 31 - "react-router-dom"
Cohesion: 0.30
Nodes (5): react-router-dom, Logo(), StoreFooter(), AuthLayout(), StoreLayout()

### Community 32 - "dependencies"
Cohesion: 0.29
Nodes (7): dependencies, clsx, lucide-react, react, react-dom, react-router-dom, tailwind-merge

### Community 33 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, lint, preview, typecheck

### Community 34 - "StoreHeader.tsx"
Cohesion: 0.29
Nodes (11): CategoryNav(), MobileMenu(), PromoBar(), SearchBar(), StoreHeader(), UserMenu(), adminNav, categoryNav (+3 more)

### Community 35 - "CatalogPage.tsx"
Cohesion: 0.22
Nodes (8): lucide-react, CatalogPage(), CatalogFilters(), Breadcrumbs(), Crumb, Checkbox, PageHeader(), PageHeaderProps

### Community 36 - "AdminProductsPage.tsx"
Cohesion: 0.36
Nodes (7): AdminProductsPage(), useAdminProductsVM(), LoginPage(), RegisterPage(), Button, buttonClasses(), Input

### Community 37 - "ui/Button.tsx"
Cohesion: 0.24
Nodes (9): ButtonLinkProps, ButtonProps, ButtonSize, ButtonVariant, CommonProps, sizes, variants, sizes (+1 more)

### Community 38 - "ServiceCard.tsx"
Cohesion: 0.47
Nodes (7): Service, ServiceId, ServiceCard(), ServiceCardProps, ServiceMarquee(), ServiceMarqueeProps, ServicesSectionProps

### Community 41 - "ClientMarquee.tsx"
Cohesion: 0.39
Nodes (6): Client, ClientChip(), ClientMarquee(), ClientMarqueeProps, MarqueeFades(), TrajectorySectionProps

### Community 42 - "Toast.tsx"
Cohesion: 0.31
Nodes (8): dismiss(), icons, push(), Toaster(), ToastItem, ToastTone, tones, useToasts

### Community 43 - "AdminLayout.tsx"
Cohesion: 0.39
Nodes (4): AdminSidebar(), AdminLayout(), useAdminLayoutVM(), useDisclosure()

### Community 44 - "layout.data.ts"
Cohesion: 0.38
Nodes (4): footerColumns, promoMessages, FooterColumn, NavItem

## Knowledge Gaps
- **8 isolated node(s):** `@types/node`, `@types/react`, `@types/react-dom`, `eslint`, `prettier` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 253 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `cn` to `useAdminOrdersVM.ts`, `catalog/index.ts`, `package.json`, `AppProviders.tsx`, `useTenant`, `useQuoteVM.ts`, `ui/Button.tsx`, `cart/index.ts`, `CatalogPage.tsx`, `useCheckoutVM.ts`, `landing/view/components/index.ts`, `landing.service.ts`, `landing/view/components/index.ts`, `routes.tsx`, `route-types.ts`, `hooks/index.ts`, `lazy-components.tsx`, `Eyebrow`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **What connects `@types/node`, `@types/react`, `@types/react-dom` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useAdminOrdersVM.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07320024198427103 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `catalog/index.ts`, `Container`, `cart/index.ts`, `ui/index.ts`, `useCheckoutVM.ts`, `landing/view/components/index.ts`, `LandingPage.tsx`, `ProductDetailPage.tsx`, `landing/view/components/index.ts`, `route-types.ts`, `hooks/index.ts`, `Eyebrow`, `react-router-dom`, `StoreHeader.tsx`, `CatalogPage.tsx`, `AdminProductsPage.tsx`, `ui/Button.tsx`, `ServiceCard.tsx`, `ClientMarquee.tsx`, `Toast.tsx`, `AdminLayout.tsx`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.08130081300813008 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `react-router-dom` to `useAdminOrdersVM.ts`, `StoreHeader.tsx`, `package.json`, `AppProviders.tsx`, `AdminProductsPage.tsx`, `useQuoteVM.ts`, `catalog/index.ts`, `cart/index.ts`, `Container`, `CatalogPage.tsx`, `AdminLayout.tsx`, `useCheckoutVM.ts`, `ui/Button.tsx`, `landing.service.ts`, `ProductDetailPage.tsx`, `routes.tsx`, `route-types.ts`, `hooks/index.ts`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Should `catalog/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06766917293233082 - nodes in this community are weakly interconnected._