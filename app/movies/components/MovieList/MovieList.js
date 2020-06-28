import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import MovieListItem from '../MovieListItem/MovieListItem'

import styles from './styles'


const MovieList = props => {

    const { movies, isFavorites } = props

    const MyList = () => {

        if (movies && movies.results) {
            if (movies.results.length > 0) {
                return (
                    <FlatList
                        data={movies.results}
                        renderItem={({ item }) =>
                            <MovieListItem item={item} />
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                )
            }
            else {
                if (isFavorites) {
                    return (
                        <Text style={styles.error}>
                            Favourite list is empty
                        </Text>
                    )
                }
                return (
                    <ActivityIndicator size="large" color="#0000ff" />
                )
            }
        }

        return (
            <Text style={styles.error}>
                Network issue. please check connection
            </Text>
        )


    }

    return (
        <View style={styles.container}>
            <MyList />
        </View>
    )

}

export default MovieList