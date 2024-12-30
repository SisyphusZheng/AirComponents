const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // 包含所有可能的 HTML 和组件文件
    './src/components/**/*.{ts,tsx}',  // 特别是 Stencil 的组件文件路径
  ],
  theme: {
    fontFamily: {
      mono: [...defaultTheme.fontFamily.mono],
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      title: ['Dongle', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      height: {
        hero: '4.5rem'
      },
      padding: {
        hero: '4.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
