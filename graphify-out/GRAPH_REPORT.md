# Graph Report - SGTI  (2026-11-14)

## Corpus Check
- 180 files · ~23,805 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .dev 1, .conf 1)

## Summary
- 669 nodes · 2084 edges · 19 communities (16 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- useCheckoutVM.ts
- ui/index.ts
- catalog/index.ts
- package.json
- Toast.tsx
- react-router-dom
- useQuoteVM.ts
- route-types.ts
- cart/index.ts
- lazy-components.tsx
- web-dev
- compilerOptions
- useTenant
- steps
- compilerOptions
- SGTI · E-commerce de soluciones gráficas
- safeUrl.ts
- vite-env.d.ts
- tsconfig.json

## God Nodes (most connected - your core abstractions)
1. `cn()` - 70 edges
2. `react` - 47 edges
3. `react-router-dom` - 34 edges
4. `Container()` - 32 edges
5. `PATHS` - 30 edges
6. `lucide-react` - 29 edges
7. `ButtonLink()` - 25 edges
8. `Button` - 22 edges
9. `formatCurrency()` - 20 edges
10. `EmptyState()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `Conectar backend` --references--> `http()`  [INFERRED]
  README.md → src/lib/http.ts
- `AppProviders()` --calls--> `TenantProvider()`  [EXTRACTED]
  src/app/bootstrap/AppProviders.tsx → src/app/tenant/view/TenantProvider.tsx
- `AdminSidebar()` --calls--> `cn()`  [EXTRACTED]
  src/app/layouts/components/AdminSidebar.tsx → src/lib/cn.ts
- `CategoryNav()` --calls--> `cn()`  [EXTRACTED]
  src/app/layouts/components/CategoryNav.tsx → src/lib/cn.ts
- `Logo()` --calls--> `useTenant()`  [EXTRACTED]
  src/app/layouts/components/Logo.tsx → src/app/tenant/vm/useTenant.ts

## Import Cycles
- None detected.

## Communities (19 total, 3 thin omitted)

### Community 0 - "useCheckoutVM.ts"
Cohesion: 0.07
Nodes (60): formatDate(), postalCodeMx(), adminService, nextStatus(), Kpi, AdminDashboardPage(), AdminOrdersPage(), AdvanceButton() (+52 more)

### Community 1 - "ui/index.ts"
Cohesion: 0.06
Nodes (53): lucide-react, react, react-dom, SearchBarProps, cn(), CatalogFilters(), useEscapeKey(), useLockBodyScroll() (+45 more)

### Community 2 - "catalog/index.ts"
Cohesion: 0.09
Nodes (46): AdminProductsPage(), useAdminProductsVM(), catalogService, CATEGORIES, getCategory(), defaultSelection(), describeSelection(), optionsFactor() (+38 more)

### Community 3 - "package.json"
Cohesion: 0.05
Nodes (53): dependencies, clsx@^2.1.1, lucide-react@^0.460.0, react@^19.0.0, react-dom@^19.0.0, react-router-dom@^7.1.0, tailwind-merge@^2.5.5, devDependencies (+45 more)

### Community 4 - "Toast.tsx"
Cohesion: 0.07
Nodes (30): App(), AppProviders(), ErrorBoundary, State, router, createStore(), Listener, Options (+22 more)

### Community 5 - "react-router-dom"
Cohesion: 0.12
Nodes (22): react-router-dom, AdminSidebar(), CategoryNav(), Logo(), MobileMenu(), PromoBar(), SearchBar(), StoreFooter() (+14 more)

### Community 6 - "useQuoteVM.ts"
Cohesion: 0.13
Nodes (28): MobileMenuProps, analytics, EventName, EventPayload, email(), minLength(), phoneMx(), required() (+20 more)

### Community 7 - "route-types.ts"
Cohesion: 0.15
Nodes (22): PATHS, CatalogPage(), CheckoutSuccessPage(), FILE_TIPS, PROCESS_STEPS, ProcessStep, HomePage(), CategoriesSection() (+14 more)

### Community 8 - "cart/index.ts"
Cohesion: 0.14
Nodes (28): useStoreHeaderVM(), currency, date, formatCurrency(), formatNumber(), number, pluralize(), useCartStore (+20 more)

### Community 9 - "lazy-components.tsx"
Cohesion: 0.09
Nodes (32): AdminDashboardPage, AdminOrdersPage, AdminProductsPage, CartPage, CatalogPage, CheckoutPage, CheckoutSuccessPage, HomePage (+24 more)

### Community 10 - "web-dev"
Cohesion: 0.08
Nodes (27): VITE_API_URL, VITE_DEFAULT_TENANT, args, context, dockerfile, CHOKIDAR_USEPOLLING, VITE_API_URL, VITE_DEFAULT_TENANT (+19 more)

### Community 11 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+13 more)

### Community 12 - "useTenant"
Cohesion: 0.23
Nodes (11): DEFAULT_TENANT_ID, TENANTS, Tenant, TenantContact, TenantTheme, useTenantStore, resolveTenant(), resolveTenantId() (+3 more)

### Community 13 - "steps"
Cohesion: 0.13
Nodes (14): runs-on, steps, jobs, build, name, on, pull_request, push (+6 more)

### Community 14 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+6 more)

### Community 15 - "SGTI · E-commerce de soluciones gráficas"
Cohesion: 0.20
Nodes (9): Agregar un módulo, Arranque, Conectar backend, Docker, Estructura, Reglas del patrón, SGTI · E-commerce de soluciones gráficas, Sistema visual (+1 more)

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `ui/index.ts` to `useCheckoutVM.ts`, `catalog/index.ts`, `package.json`, `Toast.tsx`, `react-router-dom`, `useQuoteVM.ts`, `route-types.ts`, `cart/index.ts`, `lazy-components.tsx`, `useTenant`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **Should `useCheckoutVM.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06593406593406594 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `react-router-dom` to `useCheckoutVM.ts`, `ui/index.ts`, `catalog/index.ts`, `package.json`, `Toast.tsx`, `useQuoteVM.ts`, `route-types.ts`, `cart/index.ts`, `lazy-components.tsx`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Should `ui/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05847781369379959 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `ui/index.ts` to `useCheckoutVM.ts`, `catalog/index.ts`, `Toast.tsx`, `react-router-dom`, `useQuoteVM.ts`, `route-types.ts`, `cart/index.ts`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Should `catalog/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08846153846153847 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05012531328320802 - nodes in this community are weakly interconnected._