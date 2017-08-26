import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import SplashScreen from '../container/SplashScreen';
import Login from '../container/Login';
import Home from '../container/Home';
import NetWork from '../component/NetWork';
import DrawerMenu from '../container/Drawer';


const { width } = Dimensions.get('window');
const HomeNavigation = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'Save Money - Save Your Life',
            headerTitleStyle: {
                fontSize: 15,
                fontFamily: 'Times New Roman'
            },
            headerLeft: 
            <TouchableOpacity
                light style={{ width: 70, marginLeft: 23 }}
                onPress={() => navigation.navigate('DrawerOpen')}
            >
            <Icon name='menu' color='black' />
            </TouchableOpacity>,
        })
    }
});

const HomeDrawer = DrawerNavigator({
    Root: {
        screen: HomeNavigation,
    },
}, {
        drawerWidth: (width * 7) / 10,
        drawerPosition: 'left',
        contentComponent: props => <DrawerMenu {...props} />
}); 

const RootNavigation = StackNavigator(
    {
        SplashScreen: {
            screen: SplashScreen, navigationOptions: { header: false }
        },
        Login: {
            screen: Login, navigationOptions: { header: false }
        },
        Home: {
            screen: HomeDrawer, navigationOptions: { header: false }
        },
        NetWork: {
            screen: NetWork, navigationOptions: { header: false }
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
