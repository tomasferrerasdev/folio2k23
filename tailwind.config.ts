import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      grey: '#696868;',
      transparent: 'transparent',
    },
    fontFamily: {
      roobert: ['var(--font-roobert)'],
    },
  },
  plugins: [],
};
export default config;
