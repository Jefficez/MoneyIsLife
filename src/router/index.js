import React from 'react';
import { StackNavigator } from 'react-navigation';

import SplashScreen from '../container/SplashScreen';
import Login from '../container/Login';
import Home from '../container/Home';

const RootNavigation = StackNavigator(
    {
        SplashScreen: {
            screen: SplashScreen, navigationOptions: { header: false }
        },
        Login: {
            screen: Login, navigationOptions: { header: false }
        },
        Home: {
            screen: Home, navigationOptions: { header: false }
        },
    },
    {
        headerMode: 'screen',
        initialRouteName: 'SplashScreen',
        transitionConfig: () => ({
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [layout.initWidth, 0, 0]
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                    outputRange: [0, 1, 1, 0.3, 0]
                });
                return { opacity, transform: [{ translateX }] };
            }
        })
    }
);

export default RootNavigation;
