const defaultCart=[];
export default(state=defaultCart,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
                return[
                    ...state,
                    action.item
                ]
            case 'REMOVE_ITEM':
                return state.filter(({id})=>id!==action.id);
            default:
                return state;
    }
}