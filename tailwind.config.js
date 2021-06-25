module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        wisesight: "#C71D20",
      },  
      fontFamily: {
        headline: "Poppins, sans-serif" //font-headline
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      padding: ['hover'],
      maxHeight: ['focus']
    },
  },
  plugins: [],
}
