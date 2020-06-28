import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles'

import ButtonPanel from '../../components/ButtonPanel/ButtonPanel'
import defaultAccountImage from '../../../assets/images/auth/baseline_account_circle_black.png'

const Auth = props => {

    const [user, setUser] = useState({ id: '', name: '', avatar: '', isSet: false })

    const onLoginHandler = (id, name, avatar) => {
        console.log(id)
        console.log(name)
        console.log(avatar)
        setUser({
            id: id,
            name: name,
            avatar: avatar,
            isSet: true
        })
    }

    const movieButtonHandler = () => {
        props.navigation.navigate('PopularMovies')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Welcome {user.isSet ? user.name : 'Stranger'}!
                    </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={user.isSet && user.avatar ? { uri: user.avatar } : defaultAccountImage}
                    style={styles.image}
                />
            </View>
            <View style={styles.instructions}>
                <Text style={styles.instructionsText}>
                    {!user.isSet && 'Please log in to continue\nto the awesomeness'}
                    </Text>
            </View>
            <ButtonPanel toMovies={movieButtonHandler} onLogin={onLoginHandler} logged={user.isSet} />
        </View>
    )
}

export default Auth