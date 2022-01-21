/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {showCardDetail} from '../../../redux/dispatchAction';

function DetailPage(props) {
  const {navigation, route, detail} = props;

  useEffect(() => {
    props.showCardDetail(route?.params?.id);
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Edit',{
            id: route?.params?.id
          })}
        style={styles.edit}>
        <MaterialIcon style={styles.editIcon} name="edit"></MaterialIcon>
      </TouchableOpacity>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcon style={styles.back} name="arrow-back"></MaterialIcon>
        </TouchableOpacity>
        <Text style={styles.detailHeader}>Detail Page</Text>
      </View>

      <View style={styles.detailView}>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            {detail && detail !== undefined ? detail?.name : ''}
          </Text>
          <TouchableOpacity>
          <MaterialIcon
            style={styles.storage}
            name={
              detail && detail !== undefined
                ? detail.is_registered
                  ? 'event-available'
                  : 'event-busy'
                : ''
            }></MaterialIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.code}>
            {detail && detail !== undefined ? detail?.space_available : ''}
          </Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.type}>Type: </Text>
          <Text style={styles.typeName}>
            {detail && detail !== undefined ? detail?.type : ''}{' '}
          </Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.type}>City: </Text>
          <Text style={styles.typeName}>
            {detail && detail !== undefined ? detail?.city : ''}{' '}
          </Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.type}>Cluster: </Text>
          <Text style={styles.typeName}>
            {detail && detail !== undefined ? detail?.cluster : ''}{' '}
          </Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.type}>Available: </Text>
          <View style={styles.available}>
            {detail && detail !== undefined ? (
              detail?.is_registered ? (
                <>
                  <MaterialIcon
                    style={{...styles.correct, color: 'black'}}
                    name="check"></MaterialIcon>
                  <MaterialIcon
                    style={{...styles.clear, color: '#E6DAD7'}}
                    name="clear"></MaterialIcon>
                </>
              ) : (
                <>
                  <MaterialIcon
                    style={{...styles.correct, color: '#E6DAD7'}}
                    name="check"></MaterialIcon>
                  <MaterialIcon
                    style={{...styles.clear, color: 'black'}}
                    name="clear"></MaterialIcon>
                </>
              )
            ) : null}
          </View>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.type}>Live: </Text>
          <View style={styles.available}>
            {detail && detail !== undefined ? (
              detail?.is_live ? (
                <>
                  <MaterialIcon
                    style={{...styles.correct, color: 'black'}}
                    name="check"></MaterialIcon>
                  <MaterialIcon
                    style={{...styles.clear, color: '#E6DAD7'}}
                    name="clear"></MaterialIcon>
                </>
              ) : (
                <>
                  <MaterialIcon
                    style={{...styles.correct, color: '#E6DAD7'}}
                    name="check"></MaterialIcon>
                  <MaterialIcon
                    style={{...styles.clear, color: 'black'}}
                    name="clear"></MaterialIcon>
                </>
              )
            ) : null}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return {
    detail: state.cardReducer,
  };
}

export default connect(mapStateToProps, {
  showCardDetail,
})(DetailPage);
