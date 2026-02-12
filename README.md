# React Sample Project

A modern React application built with TypeScript, Vite, and a comprehensive architecture featuring authentication, routing, and state management.

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **UI Framework**: Ant Design 6 (antd)
- **Routing**: React Router 7
- **State Management**: Zustand 5
- **HTTP Client**: Axios
- **Code Splitting**: React.lazy + Suspense
- **Date Handling**: Day.js
- **Styling**: Tailwind CSS 4 + CSS
- **Linting**: ESLint 9 (flat config) with TypeScript rules

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Loadable.tsx     # Code splitting wrapper
│   ├── RootBoundary.tsx # Error boundary
│   ├── loading/         # Loading components
│   └── LoadingFullScreen/
├── configs/             # Configuration files
│   ├── app.config.ts    # App settings
│   └── auth.config.ts   # Authentication config
├── contexts/            # React contexts
│   └── LoadingContext.tsx
├── core/                # Core utilities
│   ├── cache.ts         # Local storage cache manager
│   ├── http.ts          # Axios HTTP client
│   ├── helper.ts        # Utility functions
│   └── models/          # Base models
├── enums/               # TypeScript enums
├── guards/              # Route guards
│   ├── PrivateGuard.tsx # Protected routes
│   └── PublicGuard.tsx  # Public routes
├── hooks/               # Custom React hooks
├── interfaces/          # TypeScript interfaces
├── layouts/             # Layout components
│   ├── auth-layout/     # Authentication layout
│   └── master-layout/   # Main app layout
├── modules/             # Feature modules
│   ├── auth/            # Authentication module
│   │   └── pages/       # Login, Register, etc.
│   └── home/            # Home module
├── providers/           # Context providers
├── routing/             # Routing configuration
├── store/               # Zustand stores
└── types/               # TypeScript type definitions
```

## ✨ Features

### 🔐 Authentication System
- JWT-based authentication with local storage
- Protected and public route guards
- Automatic token injection in HTTP requests
- Login/logout functionality with navigation

### 🛣️ Advanced Routing
- Nested routing with React Router 7
- Module-based route organization
- Lazy loading with React.lazy + Suspense
- Error boundaries for route protection

### 🎨 UI & UX
- Ant Design 6 component library
- Tailwind CSS 4 utility-first styling
- Responsive layouts (Auth & Master)
- Loading states and full-screen loaders
- Light/Dark theme support

### 🔧 State Management
- Zustand for global state
- React Context for loading states
- Local storage caching system
- HTTP interceptors for request/response handling

### 📦 Code Organization
- Modular architecture
- TypeScript interfaces and types
- Custom hooks for reusability
- Utility functions and helpers

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-sample
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
VITE_PORT=3000
VITE_PUBLIC_API_URL=your_api_url
BASE_API_URL=your_base_api_url
LOCAL_CACHE_KEY=your_cache_key
PUBLIC_URL=/
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔧 Configuration

### Path Aliases
The project uses Vite path aliases configured in `vite.config.ts`:
- `@app` - Points to `./src` directory

### HTTP Client
- Axios instance with base URL configuration
- Automatic Bearer token injection
- Request/response interceptors
- Error handling with 401 redirect

### Cache System
- Local storage-based caching
- Expiration time support
- Automatic cleanup
- Type-safe cache operations

## 🛡️ Authentication Flow

1. User navigates to protected route
2. `PrivateGuard` checks for valid token in cache
3. If no token, redirect to `/login`
4. After successful login, token is stored in cache
5. Subsequent API requests include Bearer token
6. Logout clears token and redirects to login

## 🎯 Development Guidelines

### Adding New Modules
1. Create folder in `src/modules/`
2. Add `index.tsx` with route configuration
3. Export `Router` and `MenuItems`
4. Add to modules array in `src/routing/index.tsx`

### State Management
- Use Zustand stores for global state
- React Context for component-tree state
- Local storage cache for persistence

### Styling
- Use Tailwind CSS 4 utility classes
- Leverage Ant Design 6 theme system with CSS variables
- Custom CSS overrides for antd components in `index.css`

## 🔍 Code Quality

- TypeScript for type safety
- ESLint for code linting
- Modular architecture
- Consistent file naming
- Interface-driven development

## 🚀 Production Build

The application builds to `dist/react-sample/` directory and is ready for deployment to any static hosting service.

```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📋 Changelog

### v2.0.0 — Major Dependencies Upgrade (2026-02-11)

**Dependencies (Major)**

| Package | Before | After | Notes |
|---------|--------|-------|-------|
| react | 18.2 | **19.x** | Functional components only, no breaking changes |
| react-dom | 18.2 | **19.x** | Already used `createRoot` |
| antd | 5.13 | **6.x** | CSS variables mode by default, React 19 native |
| zustand | 4.5 | **5.x** | Same `create` + `persist` API |
| react-router-dom | 6.20 | **react-router 7.x** | Package renamed, data router pattern preserved |

**Dependencies (Minor/Patch)**

| Package | Before | After |
|---------|--------|-------|
| axios | 1.6 | **1.x (latest)** |
| dayjs | 1.11.10 | **1.11.x (latest)** |

**DevDependencies (Major)**

| Package | Before | After | Notes |
|---------|--------|-------|-------|
| vite | 5.0 | **6.x** | Updated browser targets |
| tailwindcss | 3.4 | **4.x** | CSS-first config, `@tailwindcss/postcss` |
| eslint | 8.55 | **9.x** | Migrated to flat config (`eslint.config.js`) |
| typescript | 5.2 | **5.x (latest)** | |
| eslint-plugin-react-hooks | 4.6 | **5.x** | Flat config support |
| sass | 1.70 | **1.x (latest)** | |

**Packages Removed**

- `@loadable/component` — replaced with native `React.lazy` + `Suspense`
- `@types/loadable__component` — no longer needed
- `react-router-dom` — replaced by `react-router` (v7 unified package)
- `autoprefixer` — built into Tailwind CSS 4
- `@typescript-eslint/eslint-plugin` + `@typescript-eslint/parser` — replaced by `typescript-eslint`

**Packages Added**

- `@tailwindcss/postcss` — Tailwind CSS 4 PostCSS plugin
- `@eslint/js`, `globals`, `typescript-eslint` — ESLint 9 flat config

**Code Changes**

- Rewrote `src/components/Loadable.tsx` to use `React.lazy` + `Suspense`
- Changed all `react-router-dom` / `react-router` imports to `react-router` (15+ files)
- Replaced deprecated `RouterProvider.fallbackElement` with `Suspense` wrapper
- Migrated `@tailwind` directives to `@import "tailwindcss/"` (v4 CSS-first syntax)
- Disabled Tailwind preflight via granular imports to preserve antd styling
- Migrated `postcss.config.js` to use `@tailwindcss/postcss`
- Migrated `.eslintrc.cjs` to `eslint.config.js` (ESLint 9 flat config)
- Updated lint script (removed `--ext` flag, not needed in flat config)
- Added antd v6 focus ring overrides (`outline: none`) for all input types

## 📄 License

This project is public
## 👨‍💻 Author

**Hiep Nguyen Ngoc**
- Portfolio: https://hiepnn.com/
- LinkedIn: https://www.linkedin.com/in/hi%E1%BB%87p-nguy%E1%BB%85n-b89aa1189