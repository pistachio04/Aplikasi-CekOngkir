const mainColors = {
  dark1: '#243A73',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  red1: '#D61C4E',
  grey1: '#73777B',
};
export const colors = {
  primary: mainColors.red1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  white: '#FFFFFF',
  black: '#000000',
  disable: mainColors.grey3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    // disable: {
    //   background: mainColors.grey3,
    //   text: mainColors.grey4,
    // },
  },
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};
