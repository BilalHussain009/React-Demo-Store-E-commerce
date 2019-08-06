const defaultCart=[];
export default(state=defaultCart,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
                return[
                    ...state,
                    action.item
                ]
            case 'REMOVE_FROM_CART':
                return state.filter(({id})=>id!==action.id);
            case 'SET_CART':
                return action.cart

            default:
                return state;
    }
}