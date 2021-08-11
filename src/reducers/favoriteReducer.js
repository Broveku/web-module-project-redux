import { ADD_FAVORITES,  DEL_FAVORITES, TOGGLE_FAVORITES } from "../actions/favActions"
import movies from "../data"

const initialState ={
    favorites: [],
    displayFavorites: true

}

const favReducer = (state = initialState, action) =>{
    switch(action.type){
       
        case ADD_FAVORITES:
            return{
                ...state, favorites: [...state.favorites, action.payload]
            }
        case DEL_FAVORITES:
            return{
                favorites: state.favorites.filter((item) =>action.payload !==item.id)
            }
        case TOGGLE_FAVORITES:
            return{
                ...state, displayFavorites: action.payload
            }
        default:
            return state
    }
}


export default favReducer