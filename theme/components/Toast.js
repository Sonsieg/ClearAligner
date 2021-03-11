// @flow

import variable from './../variables/platform';
import { PLATFORM } from './../variables/commonColor';
import { scale, vScale } from 'components/ScaleSheet';

export default (variables /* : * */ = variable) => {
  const platform = variables.platform;

  const toastTheme = {
    '.danger': {
      backgroundColor: variables.brandDanger
    },
    '.warning': {
      backgroundColor: variables.brandWarning
    },
    '.success': {
      backgroundColor: variables.brandSuccess
    },
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
    minHeight: vScale(40),
    'NativeBase.Text': {
      color: '#fff',
      flex: 1
    },
    'NativeBase.Button': {
      backgroundColor: 'transparent',
      height: 30,
      elevation: 0,
      'NativeBase.Text': {
        fontSize: 14
      }
    }
  };

  return toastTheme;
};
