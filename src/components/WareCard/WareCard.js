/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';

function WareCard(props) {

const {navigation, name, cluster, city, space_available} = props;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail',{
      id: props?.id
    })} style={styles.card}>
      <View style={styles.cardView}>
        <Text style={styles.name}>{name && name !== undefined ? name : ''}</Text>
        <Text style={styles.city}>{city && city !== undefined ? city : ''}</Text>
        <Text style={styles.space}>{space_available && space_available !== undefined ? space_available : ''}</Text>
        <Text style={styles.spaceName}>{cluster && cluster !== undefined ? cluster : ''}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default WareCard;
