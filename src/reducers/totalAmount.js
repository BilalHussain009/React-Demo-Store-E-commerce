const defaultAmount=0;
export default(state=defaultAmount,action)=>{
    switch(action.type){
        case 'ADD_AMOUNT':
            console.log(action.amount);
            return (
                state+action.amount);
        case 'SUBTRACT_AMOUNT':
            return(
                action.amount
            );
        default:
            return state;
    }
}