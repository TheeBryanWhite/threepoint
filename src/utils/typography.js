import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1,
  googleFonts: [
      {
          name: 'Raleway',
          styles: [
            300,
            400,
            500,
            600,
            700,
            800,
            900
          ],
      },
  ],
  headerFontFamily: [
    "Raleway",
  ],
  bodyFontFamily: [
    "Raleway",
  ],
})
export default typography