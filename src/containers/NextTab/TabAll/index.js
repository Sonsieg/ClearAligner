import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import asset from '../../../asset';
import ButtonTab from '../../../components/ButtonTab';
import ImageShow from '../../../components/ImageShow';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';

class TabAll extends Component {
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <Top
          title="Add a new enquiry"
          onPress={() => this.props.navigation.goBack()}
        />
        <View
          style={{
            marginHorizontal: scale(20),
            justifyContent: 'space-around',
            marginVertical: scale(20),
            height: '80%',
          }}>
          <Text style={{fontSize: scale(20)}}>Click on any photo retry</Text>
          <ImageShow
            onPress1={() => this.props.navigation.navigate('TabOne')}
            onPress2={() => this.props.navigation.navigate('TabTwo')}
          />
          <ImageShow 
          onPress1={() => this.props.navigation.navigate('TabThree')}
          onPress2={() => this.props.navigation.navigate('TabFour')}/>
          <ImageShow 
          onPress1={() => this.props.navigation.navigate('TabFive')}
          onPress2={() => this.props.navigation.navigate('TabSix')}/>
          <ImageShow 
          onPress1={() => this.props.navigation.navigate('TabSeven')}
          onPress2={() => this.props.navigation.navigate('TabEight')}/>
          <ButtonTab title="Next" onPress={()=>this.props.navigation.navigate('Info')}/>
        </View>
      </ImageBackground>
    );
  }
}
export default TabAll;
