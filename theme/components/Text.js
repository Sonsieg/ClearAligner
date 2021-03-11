// @flow

import variable from './../variables/platform';
import { vScale } from 'components/ScaleSheet';
import colors from 'colors';

export default (variables /* : * */ = variable) => {
  const textTheme = {

    // default
    fontSize: variables.DefaultFontSize,
    // fontFamily: 'SourceSansPro-Regular',
    '.align': { textAlign: "center" },
    '.wrap': { flex: 1, flexWrap: 'wrap' },
    '.left': { textAlign: "left" },
    '.right': { textAlign: "right" },

    '.marginT5': { marginTop: vScale(5) },
    '.marginB5': { marginBottom: vScale(5) },

    '.marginT7': { marginTop: vScale(7) },
    '.marginB7': { marginBottom: vScale(7) },

    '.marginT10': { marginTop: vScale(10) },
    '.marginB10': { marginBottom: vScale(10) },

    // color
    ".orange": { color: colors.orange },
    ".orange1": { color: colors.orange1 },
    ".purple": { color: colors.purple },
    ".white": { color: colors.white },
    ".white1": { color: colors.white1 },
    ".white2": { color: colors.white2 },
    ".white3": { color: colors.white3 },

    ".black": { color: colors.black },
    ".black1": { color: colors.black1 },
    ".green": { color: colors.green },
    ".green1": { color: colors.green1 },

    ".blue1": { color: colors.blue1 },
    ".blue2": { color: colors.blue2 },
    ".blue3": { color: colors.blue3 },

    ".grey1": { color: colors.grey1 },
    ".grey2": { color: colors.grey2 },
    ".grey3": { color: colors.grey3 },
    ".grey4": { color: colors.grey4 },
    ".grey5": { color: colors.grey5 },

    ".aqua1": { color: colors.aqua1 },
    ".aqua2": { color: colors.aqua2 },
    ".red": { color: colors.red },
    ".red1": { color: colors.red1 },
    ".red2": { color: colors.red2 },

    // fontSize
    ".size6": { fontSize: 6 + 1 },
    ".size7": { fontSize: 7 + 1 },
    ".size8": { fontSize: 8 + 1 },
    ".size9": { fontSize: 9 + 1 },
    ".size10": { fontSize: 10 + 1 },
    ".size11": { fontSize: 11 + 1 },
    ".size12": { fontSize: 12 + 1 },
    ".size13": { fontSize: 13 + 1 },
    ".size14": { fontSize: 14 + 1 },
    ".size15": { fontSize: 15 + 1 },
    ".size16": { fontSize: 16 + 1 },
    ".size17": { fontSize: 17 + 1 },
    ".size18": { fontSize: 18 + 1 },
    ".size19": { fontSize: 19 + 1 },
    ".size20": { fontSize: 20 + 1 },
    ".size21": { fontSize: 21 + 1 },
    ".size22": { fontSize: 22 + 1 },
    ".size24": { fontSize: 24 + 1 },
    ".size28": { fontSize: 28 + 1 },
    ".size30": { fontSize: 30 + 1 },
    ".size32": { fontSize: 32 + 1 },
    ".size40": { fontSize: 40 + 1 },
    ".size52": { fontSize: 52 + 1 },

  };

  return textTheme;
};
