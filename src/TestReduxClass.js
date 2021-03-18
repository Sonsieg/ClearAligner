import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {testReduxAction} from './containers/store/action';
class TestReduxClass extends Component {
  //Doi chut xem lai cach viet class

  /// class dai vcl
  render() {
    console.log('hello',this.props.list)
    return (
      <View>
        <Text>Test redux voi class : {this.props.testData}</Text>
        <TouchableOpacity
          style={{padding: 3, backgroundColor: 'tomato'}}
          // onPress={this.cong}
        >
          <Text>{this.props.list}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testData: state.testData,
    list: state.list,
  };
};
const mapDispatchToProps ={

};

export default connect(mapStateToProps, mapDispatchToProps)(TestReduxClass);
