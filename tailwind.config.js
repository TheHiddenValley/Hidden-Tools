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
     <div class="bg-cover bg-center ..." style="background-image: url('https://cdn.discordapp.com/attachments/947332664799674438/956615908170792980/cyberfighter2.png')"></div>
      backgroundImage: {
        'hero-pattern': "url('https://cdn.discordapp.com/attachments/947332664799674438/956615908170792980/cyberfighter2.png')",
        'footer-texture': "url('https://cdn.discordapp.com/attachments/947332664799674438/956615908170792980/cyberfighter2.png')",
      }
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
      // first one will be the default theme
      // uncomment to enable
      // "light (default)",
      // "dark",
      // "cupcake",
      // "bumblebee",
      // "emerald",
      // "corporate",
      // "synthwave",
      // "retro",
      // "cyberpunk",
      // "valentine",
      // "halloween",
      // "garden",
      // "forest",
      // "aqua",
      // "lofi",
      // "pastel",
      // "fantasy",
      // "wireframe",
      // "black",
      "luxury",
      // "dracula",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
