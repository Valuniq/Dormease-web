import type { Config } from 'tailwindcss';

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) } as any;
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) } as any;
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) } as any;
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) } as any;
const rem0_5 = { ...Array.from(Array(60)).map((_, i) => `${i / 10}rem`) } as any;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        llg: '1300px',
        xl: '1500px',
        xxl: '1800px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: px0_10,
      fontSize: px0_200,
      lineHeight: px0_100,
      width: px0_1000,
      height: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      minWidth: px0_1000,
      minHeight: px0_1000,
      spacing: px0_200,
      borderRadius: px0_100,
    },
    colors: {
      white: 'var(--colors-white)',
      black: 'var(--colors-black)',
      gray: {
        grayscale5: 'var(--colors-gray-grayscale-5)',
        grayscale10: 'var(--colors-gray-grayscale-10)',
        grayscale20: 'var(--colors-gray-grayscale-20)',
        grayscale30: 'var(--colors-gray-grayscale-30)',
        grayscale40: 'var(--colors-gray-grayscale-40)',
        grayscale50: 'var(--colors-gray-grayscale-50)',
      },
      blue: {
        blue10: 'var(--colors-blue-blue-10)',
        blue15: 'var(--colors-blue-blue-15)',
        blue20: 'var(--colors-blue-blue-20)',
        blue30: 'var(--colors-blue-blue-30)',
        blue40: 'var(--colors-blue-blue-40)',
        blue50: 'var(--colors-blue-blue-50)',
      },
      red: {
        red10: 'var(--colors-red-red-10)',
        red20: 'var(--colors-red-red-20)',
        red30: 'var(--colors-red-red-30)',
        red40: 'var(--colors-red-red-40)',
      },
      green: {
        green10: 'var(--colors-green-green-10)',
        green20: 'var(--colors-green-green-20)',
        green30: 'var(--colors-green-green-30)',
        green40: 'var(--colors-green-green-40)',
      },
      yellow: {
        memoyellow: 'var(--colors-yellow-memoyellow)',
      },
      orange: {
        orange: 'var(--colors-orange-orange)',
      },
    },
    fontSize: {
      h0: 'var(--h0)',
      h1: 'var(--h1)',
      h2: 'var(--h2)',
      h3: 'var(--h3)',
      h4: 'var(--h4)',
      h4Underline: 'var(--h4-underline)',
      h4Caption: 'var(--h4-caption)',
      btnCap: 'var(--btn-cap)',
      alertCap: 'var(--alert-cap)',
      caption1: 'var(--caption-1)',
      caption2: 'var(--caption-2)',
    },
    shadow1: 'var(--shadow-1)',
    shadow2: 'var(--shadow-2)',
    tokenSetOrder0: 'var(--token-set-order-0)',
    zIndex: {
      header: '100',
      backdrop: '110',
      joinSettingAddPeriodBtn: '10',
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
export default config;
