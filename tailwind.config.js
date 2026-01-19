// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        mired: {
          blue: '#00ADEF',
          green: '#66BC46',
          red: '#E31B23',
          orange: '#F5A623',
          dark: '#1A1A1A',
          gray: '#666666',
          light: '#F2F2F2',
        },
      },
      borderRadius: {
        'mired': '40px', // Para replicar los bordes de las imágenes
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
}
