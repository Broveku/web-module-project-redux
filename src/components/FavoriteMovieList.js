import React from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { delFavorite } from '../actions/favActions';

const FavoriteMovieList = (props) => {
    const favorites = props.favorites;

const handleDelFav = (id)=>{
    props.delFavorite(id)
}
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={()=>handleDelFav(movie.id)} >remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps=(state)=>{
    return{
        favorites: state.favReducer.favorites, 
        displayFavorites: state.favReducer.displayFavorites
    }
}

export default connect(mapStateToProps, {delFavorite})(FavoriteMovieList);