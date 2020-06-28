import React, { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { API_URL, API_KEY, API_PATH } from '../../../shared/constants/DB'
import { View } from 'react-native';
import FavouriteBar from '../../components/FavouriteBar/FavouriteBar';

import styles from './styles';

const PopularMovies = props => {

    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        fetch(API_URL + API_PATH + '?api_key=' + API_KEY)
            .then((response) => response.json())
            .then((responseJson) => {
                setMovies(responseJson);
            }).catch((error) => {
                console.log('Data fetching failed: ', error);
            });
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <View style={styles.container}>
            <FavouriteBar style={styles.favourites} isFromList={true} />
            <MovieList movies={movies} isFavorites={false} />
        </View>
    )
}

export default PopularMovies