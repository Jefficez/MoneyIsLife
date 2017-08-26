import React, { Component } from 'react';
import { NetInfo, Alert, BackHandler } from 'react-native';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import RootNavigation from './RootNavigation';

let flag = 0;
class AppNavigation extends Component {

    componentWillMount() {
        NetInfo.isConnected.addEventListener('change',
            (isConnected) => this.navigateScreen(isConnected));

        BackHandler.addEventListener('hardwareBackPress',
            () => this.onBackHandler());
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('change',
            (isConnected) => this.navigateScreen(isConnected));
    }

    onBackHandler() {
        const { dispatch, nav } = this.props;
        if (nav.routes.length === 1
            &&
            (nav.routes[0].routeName === 'SplashScreen'
                ||
            nav.routes[0].routeName === 'Home')) {
            Alert.alert(
                'Thông Báo',
                'Thoát khỏi ứng dụng?',
                [
                    { text: 'Hủy', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'Đồng Ý', onPress: () => BackHandler.exitApp() },
                ],
                { cancelable: false }
            );
            return true;
        }
        dispatch({ type: 'Navigation/BACK' });
        return true;
    }

    navigateScreen(isConnected) {
        flag += 1;
        if (!isConnected) {
            const navigateAction = NavigationActions.navigate({
                routeName: 'NetWork',
            });
            this.props.dispatch(navigateAction);
        } else if (flag >= 2 && isConnected) {
            const navigateAction = NavigationActions.navigate({
                routeName: 'SplashScreen',
            });
            this.props.dispatch(navigateAction);
        }
    }

    render() {
        return (
            <RootNavigation
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppNavigation);
