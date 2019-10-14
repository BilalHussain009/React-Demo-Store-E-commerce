export default (state ='', action) => {
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
