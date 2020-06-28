import React, { useState, useContext, useCallback, useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import MyButton from '../../../shared/UIElements/MyButton/MyButton'
import { FavouriteContext } from '../../../shared/context/favourite-context'
import { useNavigation, useFocusEffect, useIsFocused } from '@react-navigation/native';

import styles from './styles';

import emptyStar from '../../../assets/images/movies/baseline_star_border_black.png'
import fullStar from '../../../assets/images/movies/baseline_star_black.png'


const FavouriteBar = props => {

    const [isFavourite, setFavourite] = useState(false)
    const fav = useContext(FavouriteContext)
    const nav = useNavigation()
    const isFocused = useIsFocused()
    const item = props.item || 0

    const favouritesOnPressHandler = () => {
        nav.navigate('FavouriteMovies')
    }

    useFocusEffect(
        useCallback(() => {
            const isAlreadyFavourite = fav.favourites.find(m => m.id === item.id)
            if (isAlreadyFavourite) {
                setFavourite(true)
            }

        }, [isFocused])
    );


    const starOnPressHandler = () => {

        if (!isFavourite) {
            fav.favourites.push(item)
        }
        else {
            const newList = fav.favourites.filter(m => m.id !== item.id)
            fav.favourites = newList
        }

        setFavourite(!isFavourite)
    }

    const importStarImage = () => {
        return isFavourite ? fullStar : emptyStar
    }

    return (
        <View style={props.style}>
            {props.isFromList ?
                <MyButton
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.button}
                    title={'Favourites'}
                    badge={fav.favourites.length}
                    onPress={favouritesOnPressHandler}
                />
                : <TouchableOpacity
                    onPress={starOnPressHandler}
                    style={styles.imageContainer}>
                    <Image
                        source={importStarImage()}
                        style={styles.image}
                    />
                </TouchableOpacity>
            }

        </View>
    )
}

export default FavouriteBar