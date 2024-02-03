import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist/react-sample'
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    server: {
      port: Number(env.VITE_PORT),
    },
  }
})
