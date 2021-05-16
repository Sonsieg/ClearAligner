import { StyleSheet } from "react-native";
import { scale } from "./ScaleSheet";

export default StyleSheet.create({
    touch: {
        width: '100%',
        height: scale(50),
        backgroundColor: 'blue',
        borderRadius: scale(25),
        justifyContent: 'center',
        marginBottom: scale(15),
      },
      text: {textAlign: 'center', fontSize: scale(20), color: 'white'},
      imgshowView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      imgTouch:{
        width: '47%',
        height: scale(100),
        borderRadius: scale(10),
        borderWidth: 1,
      },
      imgImg:{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: scale(10),
      },
      textinputView:{width: '100%', height: scale(70),marginVertical: scale(18)},
      textinput:{
        width: '100%',
        height: scale(50),
        color: 'blue',
        backgroundColor:"white",
        borderRadius: 5,
      },
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
      img:{
        width: scale(55),
        height: scale(55),
        alignItems: 'center',
      }

})