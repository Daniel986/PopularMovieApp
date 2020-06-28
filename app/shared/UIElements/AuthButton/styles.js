import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '90%',
        borderRadius: 10,
    },
    google: {
        backgroundColor: '#de5246',
    },
    facebook: {
        backgroundColor: '#3b5998',
    },
    innerButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    logo: {
        flex: 1,
        resizeMode: 'contain',
        height: '70%'
    },
    text: {
        flex: 4,
        color: 'white',
        textAlign: 'center'
    }
})


export default styles