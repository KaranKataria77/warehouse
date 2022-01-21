/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    card:{
        width: wp('90%'),
        backgroundColor: 'red',
        borderRadius: 20,
        marginVertical:10,
    },
    cardView:{
        padding:15,
    },
    name:{
        fontSize: RFPercentage(4.5),
        fontWeight: '800',
        color:'#FFF'
    },
    city:{
        fontSize:RFPercentage(2),
        color:'#fff',
        fontWeight:"800",
        paddingVertical:5
    },
    space:{
        fontSize:RFPercentage(2),
        color:'#fff',
        fontWeight:"800",
        paddingVertical:5
    },
    spaceName:{
        fontSize:RFPercentage(2),
        color:'#fff',
        fontWeight:"800",
        paddingVertical:5
    }
})