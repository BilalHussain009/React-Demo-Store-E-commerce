import React from 'react';
import uuid from 'uuid';
import database from '../firebase/firebase';
export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item
});
const setItems=(Items)=>({
  type:"SET_ITEMS",
  Items
});

export const startSetItems = () => {
  return (dispatch) => {
    
    return database.ref('Items').once('value').then((snapshot)=>{
      const items= [];
      snapshot.forEach((childSnapshot) => {
       items.push({
         
        ...childSnapshot.val()
       });
      });

      dispatch(setItems(items));
    });
  };
};
export const startAddItem = (itemData = {}) => {
  return (dispatch,getState) => {
    console.log(itemData);
    const uid=getState().auth.uid;
    const {
      id=0
    } = itemData;
    const item = {id};
    
    return database.ref(`users/${uid}/cart`).push(item).then((ref) => {
      dispatch(addItem({
        ...item
      }));
    });
  };
};

