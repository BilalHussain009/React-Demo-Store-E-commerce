const defaultSort='all';
export default(state=defaultSort,action)=>{
    
    switch(action.type){
        case 'all':
            return 'all';
        case 'shirt':
            return 'shirt';
        case 'hoodies':
            return 'hoodies';
        case 'longsleeves':
            return 'longsleeves';
        case 'hoodies':

            return 'hoodies';
        case 'jackets':
            return 'jackets';
        default:
            
            return state;
    }
};