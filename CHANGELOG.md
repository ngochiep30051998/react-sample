## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [1.0.0] - 2026-02-11

#### Added
- First public release of the React application using TypeScript & Vite.
- Modular architecture with clear folders for `components`, `modules`, `layouts`, `routing`, `store`, `core`, `configs`, `hooks`, `interfaces`, `types`, etc.
- Ant Design integration for UI, SCSS for styling, and responsive layouts for Auth & Master sections.
- Routing setup with `react-router-dom@6`:
  - Using `createBrowserRouter` with nested route structure.
  - Separated `AuthLayout` and `MasterLayout` for public and private areas.
  - Automatic route loading from feature modules (`home`, `auth`).
- Basic authentication flow:
  - Token stored in local storage via `cache` and `LOCAL_USER_KEY`.
  - `PrivateGuard` and `PublicGuard` for protecting routes.
  - Demo `Login` page with sign-in flow and redirect to `/`.
- Feature modules & pages:
  - `auth` module with `Login`, `Register`, and `Forgot Password` pages (skeletons for extension).
  - `home` module with `Home` page as the main private area after login.
- State management setup:
  - Zustand-based global stores (`global.store`, `client.store`, `useThemeStore`).
  - `LoadingContext` and `LoadingProvider` for loading state management.
  - Local storage cache system with configurable keys.
- Axios-based HTTP client:
  - Base URL configured through environment variables.
  - Automatic Bearer token injection.
  - Interceptors for error handling (including 401) and redirect flow.
- Core utilities:
  - Helpers for searching, promises, sleep, dayjs wrapper, base models, enums, interfaces, and types.
- Scripts & code quality configuration:
  - `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`.
  - ESLint configuration for TypeScript/React.
  - `@app` path alias configured in `vite.config.ts`.

