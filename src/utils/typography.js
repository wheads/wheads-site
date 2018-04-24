import Typography from "typography";

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.63,
  headerFontFamily: ["Source Sans Pro", "sans-serif"],
  bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: [
        '400',
        '900'
      ]
    },
    {
      name: 'Tangerine',
      styles: [
        '400'
      ]
    }
  ]
});

export default typography;