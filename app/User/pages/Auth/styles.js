import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10
    },
    headerText: {
        fontSize:20,
        fontWeight: 'bold'
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 50,
    },
    instructions: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10
    },
    instructionsText: {
        fontSize:12,
        textAlign:'center'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
    }

})
