# SGTI · E-commerce de soluciones gráficas

React 19 + TypeScript + Tailwind CSS v4 + Vite 6 + React Router 7.
Arquitectura modular MVVM, igual que `S4BTabantaj-frontend`.

## Arranque

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc + build de producción
npm run lint
```

Modo demo: sin `VITE_API_URL` todos los servicios usan datos mock y persisten en `localStorage`.
Cualquier correo inicia sesión; los que empiezan con `admin@` entran al panel `/admin`.

## Landing corporativa (`/`)

La raíz del sitio es la landing de SGTI (diseño *SGTI Precision Technical System*).
La tienda en línea vive ahora en `/tienda`.

```
src/
├─ shared/config/contact.config.ts   ← teléfono, WhatsApp, correos, horario, dirección (único lugar)
├─ index.css                         ← tokens del diseño en @theme (colores, tipografía, espaciado,
│                                      animaciones) + scope .theme-sgti, Material Symbols, scrollbar
└─ modules/landing/
   ├─ model/landing.types.ts          Service, ServiceSpecs, Substrate, GalleryItem, Client, Sector…
   ├─ data/                           (Model) contenido listo para venir de una API
   │  ├─ services.data.ts             catálogo de 6 servicios: tarjeta + ficha técnica del modal
   │  ├─ content.data.ts              hero, sustratos, galería, clientes, sectores, beneficios
   │  ├─ navigation.data.ts           SECTION_IDS, menú, columnas del footer, enlaces legales
   │  ├─ images.data.ts               URLs de imágenes en un solo lugar
   │  └─ landing.service.ts           getContent() / getService(id): mock local o API (VITE_API_URL)
   ├─ vm/                             (ViewModel) estado y lógica
   │  ├─ useLandingVM.ts              carga contenido + expone el modal
   │  ├─ useSpecModalVM.ts            abrir/cerrar, servicio seleccionado, Esc/←/→, bloqueo de scroll
   │  ├─ useCarousel.ts               índice circular, next/prev/goTo
   │  ├─ useNavBarVM.ts               enlaces + sección activa (scroll-spy) + menú móvil
   │  ├─ useMobileMenu.ts             estado del menú hamburguesa
   │  ├─ useLandingLayoutVM.ts        datos de TopBar, Footer y botón flotante
   │  └─ contact-links.ts             buildWhatsAppUrl / buildTelUrl / buildMailtoUrl
   └─ view/                           (View) presentación pura
      ├─ components/                  Icon, Logo, Button, Pill, SectionHeader/Eyebrow, Container,
      │                               TopBar, NavBar, MobileMenu, ServiceCard, FeatureCard/SubstrateCard,
      │                               GalleryCard, ClientMarquee, SectorBadge, Footer,
      │                               FloatingWhatsApp, SpecModal, Carousel
      ├─ sections/                    Hero, Services, CtaBanner, Technology, Gallery,
      │                               Trajectory, Quote, Sectors (composición de componentes)
      ├─ layout/LandingLayout.tsx     aplica .theme-sgti + TopBar/NavBar/Footer/WhatsApp
      └─ LandingPage.tsx
```

**Mobile-first.** Las clases base describen el teléfono y los prefijos de Tailwind amplían
hacia arriba: `sm` (≥640px), `md` (≥768px), `lg` (≥1024px, navegación completa), `xl` (≥1280px).
Ejemplo: `px-4 sm:px-6 lg:px-12`, `grid-cols-2 lg:grid-cols-4`. Por debajo de `lg` el header
muestra el botón hamburguesa, que abre `MobileMenu` (panel lateral). Su estado vive en
`vm/useMobileMenu.ts`: abrir/cerrar, Esc, bloqueo de scroll y cierre automático al pasar a `lg`.

**Tokens.** Los nombres del diseño (`bg-primary-container`, `text-on-surface`, `text-headline-xl`,
`font-label-tech`, `p-gutter`, `animate-marquee`…) se usan como cualquier utilidad de Tailwind.
Los que chocan con el tema del e-commerce (`surface`, radios `lg`/`xl`) sólo cambian dentro de
`.theme-sgti`, así que la tienda no se ve afectada.

### Agregar un servicio nuevo

1. En `src/modules/landing/data/services.data.ts` añade un objeto a `SERVICES`:
   ```ts
   {
     id: 'sublimacion',                 // único; se usa para abrir el modal
     icon: 'palette',                   // nombre de Material Symbols
     name: 'Sublimación',               // tarjeta
     summary: 'Descripción corta…',
     ctaLabel: 'Consultar especificaciones',
     featured: false,                   // true = borde menta + badge "Destacado"
     detail: {
       title: 'Sublimación Textil',     // modal
       category: 'Textil & Promocionales',
       whatsappMessage: 'Hola SGTI, deseo cotizar Sublimación',
       images: [{ url: IMAGES.workshop, caption: '…' }],   // 1+ imágenes para el carrusel
       specs: { substrates: '…', tech: '…', tolerances: '…', durability: '…' },
       variants: [{ title: '…', description: '…' }],
     },
   }
   ```
2. Listo: la tarjeta aparece en el catálogo y el modal, el carrusel y el enlace de WhatsApp se
   generan solos. (Opcional) agrega su enlace en `FOOTER_COLUMNS` de `navigation.data.ts`.

Para cambiar teléfono, WhatsApp o correos edita sólo `src/shared/config/contact.config.ts`.

## Estructura

```
src/
├─ app/
│  ├─ bootstrap/        App, AppProviders, ErrorBoundary
│  ├─ layouts/          StoreLayout · AuthLayout · AdminLayout
│  │  ├─ components/    Header, Footer, Logo, SearchBar, MobileMenu, AdminSidebar…
│  │  ├─ config/        navegación (tienda / admin)
│  │  ├─ data/          contenido estático del layout (footer, promo)
│  │  ├─ model/         tipos (NavItem, FooterColumn)
│  │  ├─ view/          layouts que montan <Outlet/>
│  │  └─ vm/            useStoreHeaderVM, useAdminLayoutVM
│  ├─ router/
│  │  ├─ lazy-components.tsx  páginas con code-splitting
│  │  ├─ lazy-helpers.ts      lazyNamed, retryImport
│  │  ├─ route-registry.tsx   rutas por módulo (layout + guard + título)
│  │  ├─ route-types.ts       AppRoute, PATHS tipados
│  │  ├─ route-guards.tsx     guest / auth / admin
│  │  └─ routes.tsx           createBrowserRouter
│  └─ tenant/           white-label: data, model, store, view, vm, tenant-resolver.ts
├─ lib/                 analytics, appInsights-ready errors, http, safeUrl, format, validators, createStore
├─ shared/
│  ├─ ui/               librería de componentes (ver abajo)
│  └─ hooks/            useForm, useDisclosure, useDebounce, useDocumentTitle…
└─ modules/
   ├─ home/  catalog/  cart/  checkout/  orders/  quotes/  auth/  admin/  system/
   │  └─ (cada uno) data/ · model/ · view/ · vm/ · index.ts (API pública)
```

### Reglas del patrón

| Capa    | Responsabilidad                                                    |
|---------|--------------------------------------------------------------------|
| `model` | Tipos e interfaces del dominio. Sin lógica.                        |
| `data`  | Servicios (API o mock), stores y lógica pura (p. ej. `pricing.ts`). |
| `vm`    | Hooks que orquestan estado y acciones para una vista.              |
| `view`  | Componentes de presentación; sólo consumen su VM.                  |
| `index.ts` | Lo único que otros módulos pueden importar.                     |

### Agregar un módulo

1. `src/modules/<nombre>/{model,data,vm,view}` + `index.ts`.
2. Registra la página en `app/router/lazy-components.tsx`.
3. Añade su bloque en `route-registry.tsx` con `layout` y `guard`.
4. (Opcional) enlace en `app/layouts/config/navigation.ts`.

## UI compartida (`@/shared/ui`)

Button / ButtonLink · IconButton · Input · Textarea · Select · Checkbox · OptionGroup ·
Field · FileDrop · QuantityStepper · PriceTag · Badge · Card · Container · PageHeader ·
Breadcrumbs · Tabs · Stepper · DataTable · Modal · Drawer · EmptyState · Skeleton ·
Spinner · Toast (`toast.success()`) · CropMarks · InkStrip

## Sistema visual

Tokens en `src/index.css` (`@theme`): papel frío, tinta (`ink`) y tintas de proceso CMYK
(`cyan`, `magenta` = acción, `yellow`). Tipografías: Familjen Grotesk (títulos) e
Instrument Sans (texto). Las marcas de corte (`CropMarks`) son el único recurso decorativo.
Los tenants pueden sobrescribir el acento en `app/tenant/data/tenant.data.ts`.

## Conectar backend

Define `VITE_API_URL` en `.env`. Cada `*.service.ts` ya tiene la llamada `http()` real
junto al mock; los endpoints esperados están en esos archivos.

## Graphify (grafo de conocimiento del código)

El proyecto está inicializado con [graphify](https://github.com/Graphify-Labs/graphify):
un grafo de módulos, componentes, hooks e imports que los asistentes de IA (OpenCode,
Claude Code…) consultan **antes** de hacer grep o leer archivos completos. Menos tokens y
respuestas basadas en relaciones reales del código.

### Qué se agregó

| Archivo / carpeta                 | Para qué sirve                                                        |
|-----------------------------------|-----------------------------------------------------------------------|
| `graphify-out/graph.json`         | El grafo completo; lo leen todos los comandos `graphify`.            |
| `graphify-out/GRAPH_REPORT.md`    | Resumen: nodos centrales ("god nodes"), comunidades y conexiones.    |
| `graphify-out/graph.html`         | Visualización interactiva: ábrelo en el navegador.                   |
| `.graphifyignore`                 | Exclusiones (sintaxis `.gitignore`): `node_modules`, `dist`, etc.    |
| `AGENTS.md`                       | Reglas para OpenCode / Codex: consultar el grafo primero.            |
| `.opencode/plugins/graphify.js`   | Plugin de OpenCode que recuerda usar el grafo.                        |
| `CLAUDE.md` + `.claude/settings.json` | Reglas y hooks equivalentes para Claude Code.                    |

Estado inicial: **180 archivos, 669 nodos, 2,084 relaciones, 19 comunidades**, extraídos
por AST (sin LLM, costo $0). Nodos centrales: `cn()`, `Container`, `PATHS`, `Button`,
`formatCurrency()`, `EmptyState`: la librería `shared/ui` y el router tipado son la
columna vertebral.

### Instalación en tu máquina (una vez)

Los hooks de OpenCode/Claude ejecutan `graphify`, así que debe estar en tu PATH:

```bash
uv tool install graphifyy      # o: pipx install graphifyy  /  pip install graphifyy
graphify --version
```

Opcional, para tener el comando `/graphify` dentro del asistente:

```bash
graphify install --platform opencode    # o: claude, cursor, codex, gemini…
```

### Uso diario

```bash
# Preguntar al grafo (subgrafo acotado, mucho más chico que leer archivos)
graphify query "flujo de checkout y creación de pedido" --budget 1500

# Relación entre dos piezas
graphify path "useCheckoutVM()" "ordersService"

# Explicar un concepto y sus vecinos
graphify explain "PATHS"

# Componentes más conectados
graphify god-nodes --top 10

# Después de cambiar código: re-extrae sólo lo modificado (AST, sin costo)
graphify update .

# Reconstruir automáticamente mientras desarrollas
graphify watch .
```

### Mantenerlo al día con git

Cuando inicialices el repositorio:

```bash
git init
graphify hook install    # post-commit/checkout/merge + merge driver para graph.json
```

Se versionan `graph.json`, `GRAPH_REPORT.md` y `graph.html` (el equipo y los agentes
comparten el mismo grafo); la caché y los temporales de `graphify-out/` ya están en
`.gitignore`. Un diff grande en `graph.json` dentro de un PR es normal: se reescribe completo.

### Nombres de comunidades con IA (opcional)

Las comunidades aparecen como `Community N` o con el nombre de su archivo principal.
Para nombrarlas con un LLM:

```bash
export ANTHROPIC_API_KEY=...       # o GEMINI_API_KEY, OPENAI_API_KEY, ollama…
graphify label .
```

## Docker

```bash
cp .env.example .env

# Desarrollo con hot reload → http://localhost:5173
docker compose --profile dev up --build

# Producción local (nginx) → http://localhost:8080
docker compose --profile prod up --build -d

docker compose --profile prod down
```

- `web-dev` monta el código como volumen y usa un volumen propio para `node_modules`
  (binarios de Linux). Si agregas dependencias: `docker compose --profile dev up --build -V`.
- `web` construye el bundle con las `VITE_*` del `.env` (se incrustan en build time:
  si cambias `VITE_API_URL`, vuelve a construir) y lo sirve con nginx con gzip, caché de
  assets, fallback de SPA y `/healthz` para el healthcheck.
