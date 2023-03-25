
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#00004f',
        'lightBlue': '#327dae',
        'lighterBlue': '#a3d3f3',
        'midBlue': '#3498db'
      },
      boxShadow: {
        myShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [require("daisyui")],
}
