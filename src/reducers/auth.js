export default (state ='LOGOUT', action) => {
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
