export const isPresentInFavourites = (favourites, restaurant)=>{
    for(let item of favourites){
        if(item._id === restaurant._id){
            return true
        }
        return false
    }
}