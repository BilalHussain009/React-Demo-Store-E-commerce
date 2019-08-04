const defaultItems=[];
export default(state=defaultItems,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return[
                ...state,
                action.item
            ]
        case 'REMOVE_ITEM':
            return state.filter(({id})=>id!==action.id);
        case 'SET_ITEMS':
            return action.Items;
        default:
            return state;
    }
};
