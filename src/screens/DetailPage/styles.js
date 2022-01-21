/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// eslint-disable-next-line quotes
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  page: {
    padding: 15,
    flex: 1,
    position:'relative'
  },
  headerView:{
      display:'flex',
      flexDirection: 'row',
      alignItems:"center",
      marginTop:25
  },
  back:{
      fontSize: RFPercentage(4),
      color:'black',
      marginRight:25
  },
  detailHeader:{
    fontSize: RFPercentage(3),
    color:'black'
  },
  detailView:{
      marginTop:25
  },
  titleView:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:20
  },
  title:{
      fontSize:RFPercentage(4),
      color:'black',
      fontWeight:'800'
  },
  storage:{
      fontSize:RFPercentage(4),
      color:'black',
  },
  code:{
      fontSize:RFPercentage(3.3),
      color:'black',
      fontWeight:'800',
  },
  type:{
      fontSize:RFPercentage(3),
      color:'black',
      fontWeight:'800',
  },
  typeName:{
      fontSize:RFPercentage(2.5),
      fontWeight:'700'
  },
  available:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
  },
  correct:{
      fontSize:RFPercentage(3),
      fontWeight:'800',
      marginRight:20
  },
  clear:{
    fontSize:RFPercentage(3),
    fontWeight:'800',
    color:'black'
},
edit:{
    position:'absolute',
    zIndex:9,
    bottom:40,
    right:15,
    backgroundColor:'black',
    height:50,
    width:50,
    borderRadius:50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
},
editIcon:{
    fontSize:RFPercentage(4),
    color:'white'
}
});
