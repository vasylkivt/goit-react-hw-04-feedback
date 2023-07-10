export const theme = {
  colors: {
    hover: '#00897c',
    accent: '#F87719',
    black: '#000000',
    white: '#ffffff',
    green: '#00871e',
    yellow: '#fecb00',
    red: '#e60000',
    titleColor: '#282828',
    textColor: '#838383',
    backgroundColor: '#F8F8F8',
    backgroundColorBtn: '#d5d2d2',
    linearGradient:
      'radial-gradient(circle at 50% 50%, #F8F8F8 0%, #d5d2d2 100%)',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
};
