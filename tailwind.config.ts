import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    lineHeight: {
      'fluid-xs': 'min(1,1.2)',
      'fluid-ms': 'min(1,1.4)',
      'fluid-base': 'min(1,1.6)',
      'fluid-xl': 'min(1,1.8)'
    },
    fontSize: {
      'fluid-xs': 'min(5vw, 21px)',
      'fluid-ms': 'min(5.2vw, 23px)',
      'fluid-base': 'min(5.6vw, 28px)',
      'fluid-lg': 'min(6.5vw, 30px)',
      'fluid-xl': 'min(10vw, 62px)',
      'fluid-xl-2': 'min(7.5vw, 52px)',
      'fluid-2xl': 'min(12vw, 94px)'
    }
  },
  plugins: []
}
export default config
