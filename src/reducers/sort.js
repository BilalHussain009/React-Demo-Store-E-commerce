const defaultSort='all';
export default(state=defaultSort,action)=>{
    
    switch(action.type){
        case 'camo':
            return 'camo';
        case 'cat':
            return 'cat';
        case 'love':
            return 'love';
        case 'passion':
            return 'passion';
        case 'hoodies':
            return 'hoodies';
        case 'jackets':
            return 'jackets';
        case 'all':
            return 'all';
        case 'animal':
            return 'animal';
        case 'american':
            return 'american';
        case 'mom':
            return 'mom';
        case 'Halloween':
            return 'Halloween';
        case 'camo-phone':
            return 'camo-phone';
        case 'digital-phone':
            return 'digital-phone';
        case 'texture-phone':
            return 'texture-phone';
        case 'funny-phone':
            return 'funny-phone';
        default:
            
            return state;
    }
};