import { firebase, googleAuthProvider,facebookAuthProvider } from '../firebase/firebase';

export const login = () => ({
  type: 'LOGIN'
  
});

export const startLogin = () => {
  return (dispatch) => {
    dispatch(login());
    firebase.auth().signInWithPopup(googleAuthProvider);
    
    
    

  };
};
export const startFaceBookLogin=()=>{
  return ()=>{
    
    firebase.auth().signInWithPopup(facebookAuthProvider)
  }
}
export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return (dispatch) => {
      
     firebase.auth().signOut();
     dispatch(logout());
     

    
     return;

  };
};
