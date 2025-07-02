# React Sample Project

A modern React application built with TypeScript, Vite, and a comprehensive architecture featuring authentication, routing, and state management.

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **UI Framework**: Ant Design (antd)
- **Routing**: React Router DOM 6
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Code Splitting**: Loadable Components
- **Date Handling**: Day.js
- **Styling**: SCSS/CSS
- **Linting**: ESLint with TypeScript rules

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
- Nested routing with React Router DOM
- Module-based route organization
- Lazy loading with code splitting
- Error boundaries for route protection

### 🎨 UI & UX
- Ant Design component library
- Responsive layouts (Auth & Master)
- Loading states and full-screen loaders
- SCSS styling support

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
- Use SCSS files alongside components
- Follow BEM naming convention
- Leverage Ant Design theme system

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

## 📄 License

This project is private and confidential.
