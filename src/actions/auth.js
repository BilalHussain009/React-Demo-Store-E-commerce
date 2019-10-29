import { firebase, googleAuthProvider,facebookAuthProvider } from '../firebase/firebase';
import { history } from '../routers/AppRouter';
export const login = () => ({
  type: 'LOGIN'
  
});
const redirectUser=()=>{
  history.push('./')
}
export const startLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then(()=>{dispatch(login());history.push('/userprofile')
      });
  };
};
export const startFaceBookLogin=()=>{
  return ()=>{
    
    firebase.auth().signInWithPopup(facebookAuthProvider).then((props)=>{dispatch(login());redirectUser()});
  }
}
export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return (dispatch) => {
     firebase.auth().signOut().then(()=>dispatch(logout()));
     return;
  };
};
