import type { Config } from 'tailwindcss'
import primeui from 'tailwindcss-primeui'

export default <Partial<Config>>{
  darkMode: ['class', '.dark-mode'], // This is the key change
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px',
      '2xl': '1920px',
    },
  },
  plugins: [primeui],
}
