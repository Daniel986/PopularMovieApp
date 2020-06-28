import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';

import { styles } from './styles'


const MyButton = props => {

    const buttonText = () => {
        let text = props.title
        if(props.badge >= 0) {
            text = text + ' (' + props.badge + ')'
        }
        return text
    }

    return (
        <View style={[styles.container, props.containerStyle]}>
            <TouchableOpacity
                style={[styles.button, props.buttonStyle]}
                onPress={props.onPress}
            >
                <Text style={styles.text} >
                    {buttonText()}
                </Text>

            </TouchableOpacity>
        </View>
    )
}

export default MyButton