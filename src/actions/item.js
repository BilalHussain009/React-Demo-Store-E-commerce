import React from 'react';
import uuid from 'uuid';
import database from '../firebase/firebase';
export const addItem=({
    name = '',
    price = 0,
    company=''
  } = {}
) => ({
  type: 'ADD_ITEM',
  item: {
    id: uuid(),
    name,
    price,
    company
  }
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

