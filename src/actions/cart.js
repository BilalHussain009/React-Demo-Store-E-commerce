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
          id: childSnapshot.key, 
        ...childSnapshot.val()
        });
      });
      dispatch(setCart(cart));
    });
  };
};
export const removeFromCart = ({ id } = {}) => ({
  type: 'REMOVE_FROM_CART',
  id
});
export const startRemoveFromCart = (id) => {
  return (dispatch,getState) => {
    const uid=getState().auth.uid;
    console.log(id);
    return database.ref(`users/${uid}/cart/${id}`).remove().then(() => {
      dispatch(removeFromCart({ id }));
    });
  };
};