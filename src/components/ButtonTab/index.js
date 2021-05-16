import React, {Component} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {scale} from '../ScaleSheet';

export class ButtonTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onPress, loading} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '100%',
          height: scale(50),
          backgroundColor: 'blue',
          borderRadius: scale(25),
          justifyContent: 'center',
          marginBottom: scale(15),
        }}>
        {!this.props.loading ? (
          <Text
            style={{textAlign: 'center', fontSize: scale(20), color: 'white'}}>
            {this.props.title}
          </Text>
        ) : (
          <ActivityIndicator size="small" color="white" />
        )}
      </TouchableOpacity>
    );
  }
}
export default ButtonTab;
