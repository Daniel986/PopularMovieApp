import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

export const facebookLogin = (cb) => {
    if (Platform.OS === "android") {
        LoginManager.setLoginBehavior("web_only")
    }

    LoginManager.logInWithPermissions(['public_profile']).then(
        async function (result) {
            if (result.isCancelled) {
                console.log('Login cancelled')
            } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                    const { accessToken } = data
                    getInfoFromToken(data)
                })
            }
        },
        function (error) {
            console.log('Login failed: ' + error)
            //alert(error.toString())
        }
    )

    const getInfoFromToken = token => {
        const PROFILE_REQUEST_PARAMS = {
            fields: {
                string: 'id, name,  picture.type(large)',
            },
        };
        const profileRequest = new GraphRequest(
            '/me',
            { token, parameters: PROFILE_REQUEST_PARAMS },
            (error, result) => {
                if (error) {
                    console.log('login info has error: ' + error);
                    //alert(error.toString())
                } else {
                    cb(result.id, result.name, result.picture.data.url)
                }
            },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
    };
}