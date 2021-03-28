import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import vari from '../../../theme/variables/platform';
import asset from '../../asset';
import {scale} from '../ScaleSheet';
export default class ImageShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {imgLeft, imgRight} = this.props;
    console.log('imgeleft', imgLeft);
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={this.props.onPress1}
          style={{
            width: '47%',
            height: scale(100),
            borderRadius: scale(10),
            borderWidth: 1,
          }}>
          <Image
            style={{
              alignItems: 'center',
              width: '100%',
              height: '100%',
              borderRadius: scale(10),
            }}
            resizeMode="contain"
            source={imgLeft ? imgLeft : asset.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.onPress2}
          style={{
            width: '47%',
            height: scale(100),
            // backgroundColor: 'blue',
            borderRadius: scale(10),
            borderWidth: 1,
          }}>
          <Image
            style={{
              alignItems: 'center',
              width: '100%',
              height: '100%',
              borderRadius: scale(10),
            }}
            resizeMode="contain"
            source={imgRight ? imgRight : asset.logo}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
