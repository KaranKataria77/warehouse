/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {showCardDetail, editCardDetail} from '../../../redux/dispatchAction';
import {connect} from 'react-redux';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import axios from 'axios';

function EditPage(props) {
  const [open, setOpen] = useState(false);
  const [lopen, setLopen] = useState(false);
  const [value, setValue] = useState(false);
  const [lvalue, setLvalue] = useState(false);
  const [reg, setReg] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [space, setSpace] = useState();
  const [live, setLive] = useState();
  const [cluster, setCluster] = useState();
  const [editId, setEditID] = useState();
  const [items, setItems] = useState([
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ]);
  const [litems, setLitems] = useState([
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ]);

  const {navigation, route, detail} = props;

  useEffect(() => {
    props.showCardDetail(route?.params?.id)
    setEditID(route?.params?.id)
    setName(detail?.name);
    setCity(detail?.city);
    setCluster(detail?.cluster);
    setSpace(detail?.space_available);
    if(detail?.is_registered){
      setReg("Yes");
    }else{
      setReg("No")
    }
    if(detail?.is_live){
      setLive("Yes");
    }else{
      setLive("No")
    }
  },[])

  function onSubmit(){
    setValue(!value)
    const profile = {
      name,
      city,
      cluster,
      space_available:space,
      is_registered:reg == 'Yes' ? true : false,
      is_live: live == 'Yes' ? true : false
    }
    props.editCardDetail(editId, profile);
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <MaterialIcon style={styles.clear} name="clear"></MaterialIcon>
        </TouchableOpacity>
        <Text style={styles.code}>{detail && detail !== undefined ? detail?.code : ''}</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.name}>Name:</Text>
        <TextInput
          underlineColorAndroid="black"
          style={styles.textinput}
          onChangeText={(e) => {
            setName(e)
          }}
          value={name && name !== undefined ? name : ''}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.name}>City:</Text>
        <TextInput underlineColorAndroid="black" onChangeText={(e) => setCity(e)} value={city && city !== undefined ? city : ''} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.name}>Cluster:</Text>
        <TextInput underlineColorAndroid="black" onChangeText={(e) => setCluster(e)} value={cluster && cluster !== undefined ? cluster : ''} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.name}>Space Available:</Text>
        <TextInput keyboardType='numeric' underlineColorAndroid="black" value={space && space !== undefined ? space.toString() : ''} onChangeText={(e) => setSpace(e)} maxLength={10} />
      </View>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <View style={styles.inputView}>
        <Text style={styles.name}>Registered:</Text>
        <DropDownPicker
        containerStyle={{
            width:wp('30%'),
        }}
        style={styles.drop}
          open={open}
          value={reg && reg !== undefined ? reg : ''}
          items={items}
          setOpen={setOpen}
          setValue={setReg}
          setItems={setItems}
          onChangeValue={val => {
            console.log(val, 'val');
            setReg(val)
          }}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.name}>Live:</Text>
        <DropDownPicker
        containerStyle={{
            width:wp('30%'),
        }}
        style={styles.drop}
          open={lopen}
          value={live && live !== undefined ? live : ''}
          items={litems}
          setOpen={setLopen}
          setValue={setLive}
          setItems={setLitems}
          onChangeValue={val => {
            console.log(val, 'val');
            setLive(val)
          }}
        />
      </View>
      </View>
      <TouchableOpacity style={styles.submit} onPress={() => {
        onSubmit()
        navigation.navigate('List')
      }}>
          <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return {
    detail: state.cardReducer,
    editDetail: state.editReducer
  };
}

export default connect(mapStateToProps, {
  showCardDetail, editCardDetail
})(EditPage);
