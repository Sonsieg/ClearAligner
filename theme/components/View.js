// @flow

import { scale, vScale } from 'components/ScaleSheet';
import variable from './../variables/platform';
import colors from 'colors';
export default (variables /* : * */ = variable) => {
  const viewTheme = {
    '.padder': {
      padding: variables.contentPadding
    },
    '.flexStart': {
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    '.flexEnd': {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    '.row': {
      flexDirection: 'row',
      alignItems: 'center'
    },


    '.alignSpace': {
      alignItems: 'space-between',
    },
    '.center': {
      justifyContent: 'center',
      alignItems: 'center'
    },

    // justify
    '.justify': {
      justifyContent: 'center'
    },
    '.justifyStart': {
      justifyContent: 'flex-start'
    },
    '.justifyEnd': {
      justifyContent: 'flex-end'
    },
    '.space': {
      justifyContent: 'space-between',
    },
    '.full': {
      justifyContent: 'space-between',
      width: '100%'
    },

    // Align
    '.align': {
      alignItems: 'center'
    },
    '.alignStart': {
      alignItems: 'flex-start'
    },
    '.alignEnd': {
      alignItems: 'flex-end'
    },

    // background
    '.white': {
      backgroundColor: colors.white
    },
    '.white1': {
      backgroundColor: colors.white1
    },
    '.white2': {
      backgroundColor: colors.white2
    },
    '.white3': {
      backgroundColor: colors.white3
    },
    '.black': {
      backgroundColor: colors.black
    },
    '.blue3': {
      backgroundColor: colors.blue3
    },



    // Dimension
    '.flex': {
      flex: 1
    },

    '.fullScreen': {
      height: '100%',
      width: '100%'
    },
    '.height': {
      height: '100%'
    },
    '.width': {
      width: '100%'
    },

    // overview
    '.hidden': {
      overflow: 'hidden'
    },
    '.borderRadius': {
      borderRadius: 10,
    },
    '.wrap': {
      flex: 1,
      flexWrap: 'wrap'
    },

    // Margin
    '.mgT10': { marginTop: vScale(10) },
    '.mgB10': { marginBottom: vScale(10) },
    '.mgT16': { marginTop: vScale(16) },
    '.mgB16': { marginBottom: vScale(16) },
    '.mgH16': { marginHorizontal: scale(16) },
    '.mgH10': { marginHorizontal: scale(10) },
    '.mgV16': { marginVertical: vScale(16) },
    '.mgV10': { marginVertical: vScale(10) },

    '.pdT10': { paddingTop: vScale(10) },
    '.pdB10': { paddingBottom: vScale(10) },
    '.pdT16': { paddingTop: vScale(16) },
    '.pdB16': { paddingBottom: vScale(16) },
    '.pdH16': { paddingHorizontal: scale(16) },
    '.pdH10': { paddingHorizontal: scale(10) },
    '.pdV16': { paddingVertical: vScale(16) },
    '.pdV10': { paddingVertical: vScale(10) },
  };

  return viewTheme;
};
