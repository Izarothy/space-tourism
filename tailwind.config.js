module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('/assets/home/background-home-mobile.jpg')",
        'destination-desktop':
          "url('/assets/destination/background-destination-desktop.jpg')",
        'destination-tablet':
          "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-mobile':
          "url('/assets/destination/background-destination-mobile.jpg')",
      },
      colors: {
        main: '#0B0D17',
        secondary: '#D0D6F9',
      },
    },
  },
  plugins: [],
};
