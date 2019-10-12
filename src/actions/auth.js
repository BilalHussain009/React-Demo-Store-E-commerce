import { firebase, googleAuthProvider,facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
    return;

  };
};
export const startFaceBookLogin=()=>{
  return ()=>{
    console.log('fb');
    firebase.auth().signInWithPopup(facebookAuthProvider);
  }
}
export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {

    return firebase.auth().signOut();
  };
};
