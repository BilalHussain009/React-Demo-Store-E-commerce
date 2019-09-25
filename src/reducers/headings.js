const defaultHeading=[];
export default(state=defaultHeading,action)=>{
    switch(action.type){
        case 'SET_SOCKS':
            return ['GET socks','Go crazy and put your feet up with these custom socks Made for You.','Camo Socks','Cat Socks','Passion Socks','love Socks'];
        case 'SET_HOODIES':
            return ['HOOIDES', "The Best of the best right here available now !!. Enter Code PewDiePie to get 30% off",'Full Sleeves','Half Sleeves','Winter Coats','Jackets']
        case 'SET_MUGS':
            return ['MUGS',"Shop for Mugs shirts, hoodies and gifts. Find Mugs designs printed with care on top quality garments.",'Mugs for Moms','Halloween Mugs','Animal Mugs','American Pride']
        case 'SET_PHONECASE':
            return ['Designer Phone Cases','Find a custom phone case made for you. Select your favorite style and pick your phone model.','Funny Phone Case','Camo Phone Case','Digital Art Phone Cases','Texture Phone Cases']
        default:
            return state;
    }
};