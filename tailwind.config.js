// default settings can be found here
// https://unpkg.com/browse/tailwindcss@2.2.17/stubs/defaultConfig.stub.js

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'false' or 'class'
  theme: {
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      // spacing: {
      //   '128': '32rem',
      //   '144': '36rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
          mytheme: {
          
 "primary": "#FFFF00",
          
 "secondary": "#FFFF00",
          
 "accent": "#FFFF00",
          
 "neutral": "#FFFF00",
          
 "base-100": "#000000",
          
 "info": "#FFFF00",
          
 "success": "#008000",
          
 "warning": "#FFFF00",
          
 "error": "#FF0000",
          },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
