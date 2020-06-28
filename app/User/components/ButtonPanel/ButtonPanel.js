import React, { Fragment } from 'react';
import { View } from 'react-native';

import styles from './styles'

import AuthButton from '../../../shared/UIElements/AuthButton/AuthButton'
import MyButton from '../../../shared/UIElements/MyButton/MyButton'
import { facebookLogin } from '../../../shared/utils/facebook-login'
import { googleLogin } from '../../../shared/utils/google-login'


const ButtonPanel = props => {


    const facebookLoginHandler = () => {
        facebookLogin(props.onLogin)
    }

    const googleLoginHandler = async (cb) => {
        googleLogin(props.onLogin)
    }

    return (
        <View style={styles.buttons}>
            {!props.logged &&
                <Fragment>
                    <AuthButton isGoogle={false} onPress={facebookLoginHandler} />
                    <AuthButton isGoogle={true} onPress={googleLoginHandler} />
                </Fragment>}
            {props.logged && <MyButton title='Enter movie list' onPress={props.toMovies} />}
        </View>
    )
}

export default ButtonPanel