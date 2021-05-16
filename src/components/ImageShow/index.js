import React, {Component} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import asset from '../../asset';
import styles from '../styles';
export default class ImageShow extends Component {
  render() {
    const {imgLeft, imgRight} = this.props;
    return (
      <View style={styles.imgshowView}>
        <TouchableOpacity onPress={this.props.onPress1} style={styles.imgTouch}>
          <Image
            style={styles.imgImg}
            resizeMode="contain"
            source={imgLeft ? imgLeft : asset.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onPress2} style={styles.imgTouch}>
          <Image
            style={styles.imgImg}
            resizeMode="contain"
            source={imgRight ? imgRight : asset.logo}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
