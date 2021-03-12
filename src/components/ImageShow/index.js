import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import vari from '../../../theme/variables/platform';
import asset from '../../asset';
import {scale} from '../ScaleSheet';
export default class ImageShow extends Component {
  render() {
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
            backgroundColor: 'red',
            borderRadius: scale(10),
          }}>
          <Image
            style={{
              alignItems: 'center',
              width: '100%',
              height: '100%',
              borderRadius: scale(10),
            }}
            resizeMode="center"
            source={asset.icongoBack}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.onPress2}
          style={{
            width: '47%',
            height: scale(100),
            backgroundColor: 'blue',
            borderRadius: scale(10),
          }}>
          <Image
            style={{
              alignItems: 'center',
              width: '100%',
              height: '100%',
              borderRadius: scale(10),
            }}
            resizeMode="center"
            source={asset.icongoBack}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
