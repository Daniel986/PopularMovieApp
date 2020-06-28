import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

export const googleLogin = async (cb) => {

    GoogleSignin.configure();

    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        cb(userInfo.user.id, userInfo.user.name, userInfo.user.picture)
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('user cancelled the login flow')
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('operation (e.g. sign in) is in progress already')
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('play services not available or outdated')
        } else {
            console.log('some other error happened', error)
        }
    }
}