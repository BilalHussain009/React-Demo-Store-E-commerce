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
        default:
            
            return state;
    }
};