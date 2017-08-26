import FBSDK, {
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager
} from 'react-native-fbsdk';
import { NavigationActions } from 'react-navigation';
import { setToken } from '../../../asynStore';

const actionLoginFB = async (props) => {
    LoginManager.logInWithPublishPermissions(['publish_actions'])
        .then((result) => {
            if (result.isCancelled) {
                console.log('Cancel Login');
            } else {
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        const { accessToken } = data;
                        console.log(accessToken.toString());

                        const responseInfoCallback = (error, result) => {
                            if (error) {
                                console.log(error);
                                console.log(`Error fetching data: ${error}`);
                                return 'Login Error';
                            }
                            console.log(result);
                            setToken(JSON.stringify(result));
                            props.dispatch({ type: 'Logged', payload: result });
                            const resetAction = NavigationActions.reset({
                                index: 0,
                                actions: [
                                  NavigationActions.navigate({ routeName: 'Home' })
                                ]
                              });
                              props.navigation.dispatch(resetAction);
                            return result;
                        };

                        const infoRequest = new GraphRequest(
                            '/me',
                            {
                                accessToken,
                                parameters: {
                                    fields: {
                                        string: 'email,name,first_name,middle_name,last_name'
                                    }
                                }
                            },
                             responseInfoCallback
                        );
                        // Start the graph request.
                        new GraphRequestManager().addRequest(infoRequest).start();
                    }
                );
            }
        });
};

export default actionLoginFB;
