import React, {Component} from 'react';
import {
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import asset from '../../asset';
import ButtonTab from '../../components/ButtonTab';
import InputText from '../../components/InputText';
import {scale} from '../../components/ScaleSheet';
import Top from '../../components/Top';
import {setSaveInfoOneAction} from '../../store/action/index';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birth: 'DD-MM-YYYY',
      gender: 'MALE',
      case: 'UPPER',
      isDateTimePickerVisible: false,
    };
  }
  validateFied = (name, birth) => {
    if (name === '' || birth === 'DD-MM-YYYY') {
      Alert.alert(
        'Thông báo',
        `Vui lòng điền đầy đủ thông tin`,
        [{text: 'Đồng ý'}],
        {cancelable: false},
      );
      return false;
    } else return true;
  };
  goSend = (values) => {
    const infoInput = {};
    if (this.validateFied(values.name, values.birth)) {
      infoInput.name = values.name;
      infoInput.birth = values.birth;
      infoInput.gender = values.gender;
      infoInput.case = values.case;
      this.props.navigation.navigate('InfoTwo');
      this.props.setSaveInfoOneAction(infoInput);
    }
  };
  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false});
  };

  handleDatePicked = (date) => {
    this.hideDateTimePicker();
    this.setState({
      birth: moment(date).format('DD-MM-YYYY'),
    });
  };
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <Top
          title="Patient information 1/2"
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView
          style={{marginHorizontal: scale(20)}}
          showsVerticalScrollIndicator={false}>
          <InputText
            title="YOUR NAME"
            secureTextEntry={false}
            value={this.state.name}
            onChangeText={(value) => {
              this.setState({name: value});
            }}
          />
          <Text
            style={{
              fontSize: scale(16),
              marginBottom: scale(10),
            }}>
            DATE OF BIRTH
          </Text>
          <TouchableOpacity
            style={styles.birth}
            onPress={this.showDateTimePicker}>
            <Text
              style={{
                fontSize: scale(14),
                marginLeft: scale(10),
              }}>
              {this.state.birth}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: scale(16),
              marginBottom: scale(10),
            }}>
            GENDER
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.touch,
                {
                  backgroundColor:
                    this.state.gender === 'MALE' ? 'tomato' : 'white',
                },
              ]}
              onPress={() => this.setState({gender: 'MALE'})}>
              <Text style={{textAlign: 'center'}}>MALE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touch,
                {
                  backgroundColor:
                    this.state.gender === 'FEMALE' ? 'tomato' : 'white',
                },
              ]}
              onPress={() => this.setState({gender: 'FEMALE'})}>
              <Text style={{textAlign: 'center'}}>FEMALE</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: scale(16),
              marginBottom: scale(10),
            }}>
            CASE TYPE
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.case,
                {
                  backgroundColor:
                    this.state.case === 'UPPER' ? 'tomato' : 'white',
                },
              ]}
              onPress={() => this.setState({case: 'UPPER'})}>
              <Text style={{textAlign: 'center'}}>UPPER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.case,
                {
                  backgroundColor:
                    this.state.case === 'LOWER' ? 'tomato' : 'white',
                },
              ]}
              onPress={() => this.setState({case: 'LOWER'})}>
              <Text style={{textAlign: 'center'}}>LOWER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.case,
                {
                  backgroundColor:
                    this.state.case === 'BOTH' ? 'tomato' : 'white',
                },
              ]}
              onPress={() => this.setState({case: 'BOTH'})}>
              <Text style={{textAlign: 'center'}}>BOTH</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: scale(14),
              fontWeight: 'bold',
              marginVertical: scale(12),
            }}>
            **This app is for visual assesssment only
          </Text>
          <ButtonTab
            title="Next"
            onPress={() =>
              this.goSend({
                name: this.state.name,
                birth: this.state.birth,
                gender: this.state.gender,
                case: this.state.case,
                treatmen: this.state.treatmen,
                require: this.state.require,
                crown: this.state.crown,
                comment: this.state.comment,
              })
            }
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  setSaveInfoOneAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
const styles = StyleSheet.create({
  birth: {
    width: '100%',
    height: scale(50),
    color: 'blue',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: scale(10),
    justifyContent: 'center',
  },
  touch: {
    width: '50%',
    height: scale(50),
    color: 'blue',
    borderRadius: 5,
    marginBottom: scale(10),
    justifyContent: 'center',
  },
  case: {
    width: '33%',
    height: scale(50),
    color: 'blue',
    borderRadius: 5,
    marginBottom: scale(10),
    justifyContent: 'center',
  },
});
