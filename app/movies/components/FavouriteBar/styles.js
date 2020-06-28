import { StyleSheet, ImageComponent } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: 'lightpink',
        marginTop: 10,
        borderColor: 'lightyellow',
        borderWidth: 2
    },
    buttonContainer: {
        alignItems: 'flex-end',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    imageContainer: {
        flex: 1,
        width: '30%',
    }
})

export default styles