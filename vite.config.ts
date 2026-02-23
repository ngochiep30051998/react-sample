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
        '@atoms': path.resolve(__dirname, './src/components/atoms'),
        '@molecules': path.resolve(__dirname, './src/components/molecules'),
        '@organisms': path.resolve(__dirname, './src/components/organisms'),
        '@templates': path.resolve(__dirname, './src/components/templates'),
        '@utils': path.resolve(__dirname, './src/components/utils'),
        '@configs': path.resolve(__dirname, './src/configs'),
        '@contexts': path.resolve(__dirname, './src/contexts'),
        '@core': path.resolve(__dirname, './src/core'),
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
