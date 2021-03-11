import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import asset from '../../asset';
import {scale} from '../ScaleSheet';

export default class Top extends Component {
  
  render() {
    const {onPress}= this.props;
    return (
      <View style={styles.view}>
        <View style={{justifyContent:"center"}}>
          <TouchableOpacity onPress={onPress}>
          <Image
            resizeMode="center"
            style={{width: scale(55), height: scale(55), alignItems:"center"}}
            source={asset.icongoBack}
          />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.logo}>ClearAligner</Text>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View>
        </View>
        <View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    fontSize: scale(30),
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: scale(20),
    color: 'white',
    textAlign: 'center',
  },
  view: {
    width: '100%',
    height: "15%",
    backgroundColor: 'blue',
    borderBottomLeftRadius:scale(30),
    flexDirection: 'row',
    justifyContent:"space-around"
  },
});
