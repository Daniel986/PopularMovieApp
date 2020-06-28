import { LoginManager, AccessToken } from 'react-native-fbsdk';

export const facebookLogin = (cb) => {
    LoginManager.logInWithPermissions(['public_profile']).then(
        async function (result) {
            if (result.isCancelled) {
                console.log('Login cancelled')
            } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                    const { accessToken } = data
                    fetch('https://graph.facebook.com/v2.5/me?fields=name,picture.type(large)&access_token=' + accessToken)
                        .then((response) => response.json())
                        .then((json) => {
                            cb(json.id, json.name, json.picture.data.url)
                        })
                        .catch((err) => {
                            console.log(err)
                            alert('Whoops, something went wrong\nPlease check network connection')
                        })
                })
            }
        },
        function (error) {
            console.log('Login failed: ' + error)
        }
    )
}