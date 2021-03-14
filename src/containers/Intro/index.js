import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import asset from '../../asset';
import ButtonTab from '../../components/ButtonTab';
import {scale} from '../../components/ScaleSheet';
export default class Intro extends Component {
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            // marginHorizontal: scale(20),
            flex: 1,
          }}>
          <View style={styles.viewTab}>
            <Image
              style={{width: scale(250), height: scale(250)}}
              resizeMode="contain"
              source={asset.logo}
            />
          </View>
          <View style={styles.viewBottom}>
            <View
              style={{
                marginHorizontal: scale(20),
                justifyContent: 'space-around',
                height: '85%',
                marginTop:scale(30)
              }}>
              <Text
                style={{
                  //   marginHorizontal: scale(20),
                  fontSize: scale(30),
                  color: 'blue',
                }}>
                Welcome
              </Text>
              <Text
                style={{
                  //   marginHorizontal: scale(20),
                  fontSize: scale(20),
                  color: 'grey',
                }}>
                ClearAligner Check will allow you to perfrom a preliminary
                assessment to check if it is possible to align your teeth and
                select the best aligner treatment for you.
              </Text>
              <ButtonTab
                title="Create your first enquiry"
                onPress={() => this.props.navigation.navigate('TabOne')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    fontSize: scale(50),
    color: 'black',
    textAlign: 'center',
  },
  viewTab: {
    width: '100%',
    height: '45%',
    backgroundColor: '#C5E6EF',
    marginBottom: 0,
    justifyContent: 'center',
    alignItems:"center"
    // marginHorizontal: scale(20),
  },
  viewBottom: {
    // width: '100%',
    height: '55%',
    backgroundColor: 'white',
    borderRadius: scale(30),
    flex: 1,
    // marginHorizontal: scale(20),
  },
});
