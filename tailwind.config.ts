import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkHover: '#2A004A',
        lightHover: '#FCF4FF',
        darkTheme: '#11001F',
        // background: 'var(--background)',
        // foreground: 'var(--foreground)',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif'],
      },
      zIndex: {
        navbar: '20',
        drawerMobile: '90',
        modal: '50',
        toast: '90',
        loader: '100',
      },
    },
  },
  plugins: [],
} satisfies Config
