import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {connect} from 'react-redux';
import asset from '../../../asset';
import ButtonTab from '../../../components/ButtonTab';
import ImageShow from '../../../components/ImageShow';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';

class TabAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img1: this.props.imgOne,
      img2: this.props.imgTwo,
      img3: this.props.imgThree,
      img4: this.props.imgFour,
      img5: this.props.imgFive,
      img6: this.props.imgSix,
      img7: this.props.imgSeven,
      img8: this.props.imgEight,
    };
  }
  render() {
    const {img1, img2, img3, img4, img5, img6, img7, img8} = this.state;
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
            imgLeft={img1}
            imgRight={img2}
          />
          <ImageShow
            onPress1={() => this.props.navigation.navigate('TabThree')}
            onPress2={() => this.props.navigation.navigate('TabFour')}
            imgLeft={img3}
            imgRight={img4}
          />
          <ImageShow
            onPress1={() => this.props.navigation.navigate('TabFive')}
            onPress2={() => this.props.navigation.navigate('TabSix')}
            imgLeft={img5}
            imgRight={img6}
          />
          <ImageShow
            onPress1={() => this.props.navigation.navigate('TabSeven')}
            onPress2={() => this.props.navigation.navigate('TabEight')}
            imgLeft={img7}
            imgRight={img8}
          />
          <ButtonTab
            title="Next"
            onPress={() => this.props.navigation.navigate('Info')}
          />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({
  imgOne: state.imgOne,
  imgTwo: state.imgTwo,
  imgThree: state.imgThree,
  imgFour: state.imgFour,
  imgFive: state.imgFive,
  imgSix: state.imgSix,
  imgSeven: state.imgSeven,
  imgEight: state.imgEight,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TabAll);
