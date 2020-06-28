import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        margin: 5 ,
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderColor: 'lightyellow',
        borderWidth: 2,
        borderRadius: 10
    },
    image: { 
        height: 100, 
        width: 100,
        borderRadius: 5,
        margin: 3,
        borderColor: 'lightyellow',
        borderWidth: 1,
    },
    title: { 
        flex: 1,
        marginLeft: 10,
        textAlign: 'center',
    }
})

export default styles