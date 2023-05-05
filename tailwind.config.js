/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      NunitoSansRegular: ['NunitoSansRegular'],
      NunitoSansSemiBold: ['NunitoSansSemiBold'],
      NunitoSansBold: ['NunitoSansBold'],
      NunitoSansExtraBold: ['NunitoSansExtraBold'],
    },
    maxWidth: {
      xs: '450px',
      xl: '1200px',
      xxl: "1376px"
    },
    fontSize: {
      'xxs-regular': ['12px', '185%'],
      'sm-regular': ['14px', '150%'],
      'base-regular': ['16px', '135%'],
      'md-regular': ['16px', '185%'],
      'lg-regular': ['18px', '140%'],

      'sm-medium': ['14px', '135%'],
      'base-medium': ['16px', '135%'],
      'lg-medium': ['18px', '135%'],

      'sm-semibold': ['14px', '135%'],
      'lg-semibold': ['18px', '135%'],
      '3lg-semibold': ['36px', '135%'],

      'base-bold': ['16px', '135%'],
      'lg-bold': ['20px', '135%'],
      '2lg-bold': ['24px', '120%'],
      '3xl-bold': ['36px', '135%'],
      '4xl-bold': ['40px', '135%'],
      '5xl-bold': ['42px', '135%'],
      '6xl-bold': ['48px', '135%'],
      '7xl-bold': ['64px', '135%'],
    },
    borderRadius: {
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '15px',
      30: '30px',
    },
    extend: {
      colors: {
        "#1D1929": "#1D1929",
        "#A5A3A9": "#A5A3A9",
        "#E8E8EA": "#E8E8EA",
        "#4C1D95": "#4C1D95",
        "#5B21B6": "#5B21B6",
        "#F8FAFC": "#F8FAFC",
        "#0F172A": "#0F172A",
        "#CBD5E1": "#CBD5E1",
        "#475569": "#475569",
        "#94A3B8": "#94A3B8",
        "#F97316": "#F97316"
      },
      boxShadow: {
        'shadow-1': '0px 3.22197px 20.5411px rgba(94, 95, 96, 0.14)',
        'shadow-2': '0px 3.4508px 22px rgba(148, 148, 148, 0.14)',
        'hero-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'shadow-button': '0px 0px 1px 3px rgba(20, 140, 236, 1)',
      },
    },
  },
  plugins: [],
}
