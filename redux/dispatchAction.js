/* eslint-disable prettier/prettier */
import data from '../data.json';
import axios from 'axios';

export const showDATA = () => async dispatch => {
  await axios.get("https://datadb122.herokuapp.com/warehouses/")
  .then(result => {
    console.log('data', result.data);
    dispatch({type: 'SHOW_DATA', payload: result.data})
  })
  .catch(e => console.log(e, 'e'))
  
};

export const showCardDetail = id => async dispatch => {
  await axios.get(`https://datadb122.herokuapp.com/warehouses/${id}`)
  .then(result => dispatch({type: 'SHOW_CARD', payload: result.data}))
  .catch(e => e,'e')
};


export const editCardDetail = (idd, profile) => async dispatch => {
  console.log('idddddddddddddd ', idd, profile);
  await axios.patch(`https://datadb122.herokuapp.com/warehouses/${idd && idd !== undefined ? idd : ''}`, profile)
  .then(result => {
    console.log('edit profile ', profile);
    console.log('edit result ', result.data);
    dispatch({type: 'EDIT_CARD', payload: result.data})
  })
  .catch(e => e,'e')
};

export const spaceFilterCard = () => async dispatch => {
  await axios.get(`https://datadb122.herokuapp.com/warehouses/`)
  .then(result =>  {
    let arr = []
    result.data.map((d, i) => {
      if (d.is_live){
        arr.push(d);
      }
    })
    dispatch({type: 'SPACE_FILTER', payload: arr})
  })
  .catch(e => e,'e')
};

export const regFilterCard = () => async dispatch => {
  await axios.get(`https://datadb122.herokuapp.com/warehouses/`)
  .then(result =>  {
    let arr = []
    result.data.map((d, i) => {
      if (d.is_registered){
        arr.push(d);
      }
    })
    console.log('arrrrrrrrrrr', arr);
    dispatch({type: 'REG_FILTER', payload: arr})
  })
  .catch(e => e,'e')
};