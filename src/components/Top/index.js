import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import asset from '../../asset';
import {scale} from '../ScaleSheet';
import styles from '../styles';

export default class Top extends Component {
  render() {
    const {onPress} = this.props;
    return (
      <View style={styles.view}>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity onPress={onPress}>
            <Image
              resizeMode="center"
              style={styles.img}
              source={asset.icongoBack}
            />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.logo}>ClearAligner</Text>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View />
        <View />
      </View>
    );
  }
}
