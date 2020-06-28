import { TouchableOpacity, Text, View, Image } from 'react-native';
import React from 'react';

import styles from './styles'
import facebook_logo from '../../../assets/images/auth/f_logo_RGB-Blue.png'
import google_logo from '../../../assets/images/auth/g_logo.png'


const AuthButton = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, props.isGoogle ? styles.google : styles.facebook]}
                onPress={props.onPress}
            >
                <View style={styles.innerButtonContainer}>
                    <Image
                        source={props.isGoogle ? google_logo : facebook_logo}
                        style={styles.logo}
                    />
                    <Text style={styles.text} >
                        {props.isGoogle ? 'Or with Google' : 'Login with Facebook'}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AuthButton