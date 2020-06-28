import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { IMAGE_DOMAIN_URL } from '../../../shared/constants/DB'

import styles from './styles'
import FavouriteBar from '../../components/FavouriteBar/FavouriteBar';



const MovieDetails = props => {

    const item = props.route.params.item

    return (
        <View style={[styles.container, styles.centered]}>
            <FavouriteBar style={styles.favourites} item={item}/>
            <Text style={[styles.titleText, styles.title]}>
                {item.title}
            </Text>
            <Image
                style={styles.image}
                source={{ uri: IMAGE_DOMAIN_URL + item.backdrop_path }}
            />
            <View style={styles.overview}>
                <ScrollView>
                    <Text style={[styles.overviewText]}>
                        {item.overview}
                    </Text>
                </ScrollView>
            </View>
            <View style={styles.score}>
                <Text style={styles.scoreText}>
                    SCORE {item.popularity}
                </Text>
            </View>
        </View>
    )

}

export default MovieDetails