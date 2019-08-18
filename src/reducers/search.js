const defaultSearch='';
export default(state=defaultSearch,action)=>{
    switch(action.type){
        case 'SET_SEARCH':
            return action.search
        default:
            return state;
    }
};