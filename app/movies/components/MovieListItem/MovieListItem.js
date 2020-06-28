import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { IMAGE_DOMAIN_URL } from '../../../shared/constants/DB'


const MovieListItem = props => {

    const item = props.item

    const nav = useNavigation();

    const onPressHandler = () => {
        nav.navigate('MovieDetails', { item })
    }

    return (
        <TouchableOpacity onPress={onPressHandler}>
            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={{ uri: IMAGE_DOMAIN_URL + item.backdrop_path }}
                />
                <Text style={styles.title}>{item.title}</Text>

            </View>
        </TouchableOpacity>
    )

}

export default MovieListItem