import React, { useState, useContext, useCallback } from 'react';
import { View } from 'react-native';
import MovieList from '../../components/MovieList/MovieList';
import { FavouriteContext } from '../../../shared/context/favourite-context'
import { useFocusEffect } from '@react-navigation/native';


const FavouriteMovies = props => {

    const [movies, setMovies] = useState([])
    const fav = useContext(FavouriteContext)


    useFocusEffect(
        useCallback(() => {
            setMovies({ results: fav.favourites })

        }, [])
    );

    return (
        <MovieList movies={movies} isFavorites={true} />
    )
}

export default FavouriteMovies