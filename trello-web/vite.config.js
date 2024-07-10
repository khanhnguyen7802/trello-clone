import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

   // base: './' to fix relative import issues
   resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
})
