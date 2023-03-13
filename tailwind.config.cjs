module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        'minus-1': '-1',
      },
      fontSize: {
        'xxs': ['10px', '14px'],
      },
      height: {
        '18': '72px',
      },
      width: {
        '18': '72px',
      },
    }
  }
}
