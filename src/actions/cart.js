import database from '../firebase/firebase';
const setCart=(cart)=>({
    type:"SET_CART",
    cart
  });
  
  export const startSetCart = () => {
    return (dispatch,getState) => {
        const uid=getState().auth.uid;
      return database.ref(`users/${uid}/cart`).once('value').then((snapshot)=>{
        const cart= [];
        snapshot.forEach((childSnapshot) => {
         cart.push({
           
          ...childSnapshot.val()
         });
        });
        dispatch(setCart(cart));
      });
    };
  };