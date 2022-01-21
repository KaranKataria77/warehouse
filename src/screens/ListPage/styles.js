/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    page:{
        padding:15,
        flex: 1,
        position:'relative'
    },
    scrollPage:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        position:'relative'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:20,
    },
    title:{
        fontSize:RFPercentage(4),
        fontWeight:'800',
        color:'black'
    },
    filter:{
        fontSize:RFPercentage(3.5),
        color:'black'
    },

    // 


    centeredView: {
        display:'flex',
        flexDirection:'row',
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: hp('6%'),
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})