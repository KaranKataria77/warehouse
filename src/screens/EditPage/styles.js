/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// eslint-disable-next-line quotes
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
    page:{
        flex:1,
        padding:15,
        backgroundColor:'#fff',
        position:'relative'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
    },
    clear:{
        fontSize:RFPercentage(3.5),
        color:'black',
        marginRight:25
    },
    code:{
        fontSize:RFPercentage(3),
        fontWeight:'800',
        color:'black'
    },
    inputView:{
        marginTop:15,
    },
    name:{
        fontSize:RFPercentage(2.5)
    },
    textinput:{
        // borderBottomColor:'red',
        // borderBottomWidth:1
    },
    drop:{
        borderColor:'#fff',
        width:wp('30%')
    },
    submit:{
        backgroundColor:'black',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        position:'absolute',
        bottom:20,
        left:15
    },
    submitText:{
        fontSize:RFPercentage(2),
        color:'#fff',
        paddingVertical:10,
        fontWeight:'700'
    }
})