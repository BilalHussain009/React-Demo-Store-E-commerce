import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';
//imoorting firebase and loging functions from firebase
import { history } from '../routers/AppRouter';
//hsiory is used to push user to another route forecefully
export const login = () => ({
  type: 'LOGIN'

});

export const startLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
      dispatch(login()); history.push('/userprofile')
    });
  };
};
export const startFaceBookLogin = () => {
  return () => {

    firebase.auth().signInWithPopup(facebookAuthProvider)
  }
}
export const logout = () => ({
  type: 'LOGOUT'
});
export const signupWithEmail = (email, password) => {
  email,
    password
}
export const startSignupWithEmail = (email, password) => {
  // createUserWithEmailAndPassword(email, password)
  return (dispatch) => {

    firebase.auth().createUserWithEmailAndPassword(email, password).
      then(() => { dispatch(login()); history.push('/userprofile') })
      .catch((error) => alert(error.message));

    // dispatch (signupWithEmail(email,password));
  }
}
export const startSigninWithEmail = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => { dispatch(login()); history.push('/userprofile') })
      .catch((error) => alert(error.message));
  }
}


export const startLogout = () => {
  return (dispatch) => {

    firebase.auth().signOut().then(() => dispatch(logout()));




    return;

  };
};
