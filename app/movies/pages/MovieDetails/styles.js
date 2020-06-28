import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        marginTop: 10
    },
    image: {
        flex: 3,
        width: '90%',
        resizeMode: 'contain',
        borderRadius: 10
    },
    overview: {
        flex: 4
    },
    overviewText: {
        textAlign: 'center',
        paddingTop: 20,
        paddingHorizontal: 15,
        fontSize: 15,
        letterSpacing: 2,
        lineHeight: 22
    },
    score: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    scoreText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    title: {
        flex: 1.5,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    favourites: {
        flex: 1,
        width: '80%',
        alignItems: 'flex-end'
    }

})

export default styles