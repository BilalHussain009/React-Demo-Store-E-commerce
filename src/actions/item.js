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
    const uid=getState().auth.uid;
    const {
      company='',
      name='',
      price=0,
      image='',
      description=''
    } = itemData;
    const item = {company,name,price,image,description};
    return database.ref(`users/${uid}/cart`).push({...item}).then((ref) => {
      dispatch(addItem({
        id:ref.key,
        ...item
      }));
    });
  };
};
export const Totalsum=(amount)=>({
  type:'ADD_AMOUNT',
  amount:amount
});
  
export const startTotalSum=(price=0)=>{
  return(dispatch,getState)=>{
    const uid =getState().auth.uid;
    
    return database.ref(`users/${uid}/total`).once('value').then((snapshot)=>{
      const amount=snapshot.val();
      dispatch(Totalsum(price));
      database.ref(`users/${uid}/total`).set(amount+price);
     });
  }
} 
export const setSum=(price)=>({
  type:"SET_AMOUNT",
  price
});
export const startSetSum=()=>{
  return (dispatch,getState) => {
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/total`).once('value').then((snapshot)=>{
     const price=snapshot.val()
     
     dispatch(setSum(price));
    });
  }
}
export const subtractAmount=(amount)=>({
  type:"SUBTRACT_AMOUNT",
  amount:amount
})
export const startSubtractAmount=(price=0)=>{
  return(dispatch,getState)=>{
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/total`).once('value').then((snapshot)=>{
      const amount=snapshot.val();
      dispatch(subtractAmount(price));
      database.ref(`users/${uid}/total`).set(amount-price);
     });
    
  }
}
