import movies from "../data"

const initialState ={
    favorites: movies,
    displayFavorites: null

}

const favReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state
    }
}


export default favReducer