
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITE'
export const ADD_FAVORITES = 'ADD_FAVORITES'
export const DEL_FAVORITES = 'DEL_FAVORITES'


export const addFavorite = (movie)=>{
    return({type:ADD_FAVORITES, payload:movie})
}

export const delFavorite = (id) =>{
    return({type:DEL_FAVORITES, payload:id})

}

export const toggleFavorite = (boolean)=>{
    return({type:TOGGLE_FAVORITES, payload:boolean})
}