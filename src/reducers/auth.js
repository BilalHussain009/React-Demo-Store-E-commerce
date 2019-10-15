import {firebase} from '../firebase/firebase';
let defaultAction=firebase.auth().currentUser?'LOGIN':'LOGOUT'
export default (state ={defaultAction}, action) => {
  console.log(action);
  switch (action.type) {
    case 'LOGIN':
      return action.type;
    case 'LOGOUT':
      return action.type;
    default:
      return state;
  }
};
