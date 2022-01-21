/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { showDATA, regFilterCard, spaceFilterCard } from '../../../redux/dispatchAction';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import WareCard from '../../components/WareCard/WareCard';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function ListPage(props) {
  const {navigation, value, detail} = props;

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    props.showDATA();
  }, []);

  function spaceFilter(){
    setModalVisible(!modalVisible)
    props.spaceFilterCard()
  }

  function registerFilter(){
    setModalVisible(!modalVisible)
    props.regFilterCard()
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Warehouses</Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <MaterialIcon name="filter-alt" style={styles.filter}></MaterialIcon>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => spaceFilter()}>
              <Text style={styles.modalText}>Space available</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => registerFilter()}>
              <Text style={styles.modalText}>Registered</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView
        contentContainerStyle={styles.scrollPage}
        showsVerticalScrollIndicator={false}>
        {value && value !== undefined && value.length > 0 ?
        value.map((data, index) => {
          return (
            <WareCard
              city={data.city}
              cluster={data.cluster}
              name={data.name}
              id={data?.id}
              space_available={data.space_available}
              type={data.type}
              is_live={data.is_live}
              navigation={navigation}
              is_registered={data.is_registered}
              code={data.code}
              key={index}
            />
          );
        })
        :
        null
      }
      </ScrollView>
    </SafeAreaView>
  );
}

function mapStateToProps(state){
  return {
    value: state.warehouses,
  }
}



export default connect(mapStateToProps, {
  showDATA,
  spaceFilterCard,
  regFilterCard,
})(ListPage);
