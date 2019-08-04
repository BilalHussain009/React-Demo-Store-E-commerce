const defaultItems=[];
export default(state=defaultItems,action)=>{
    switch(action.type){
        case 'SET_ITEMS':
            return action.Items;
        default:
            return state;
    }
};
