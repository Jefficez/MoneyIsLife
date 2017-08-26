import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Logo from '../../component/SplashScreen/logo';
import BackGround from '../../component/SplashScreen/background';

import { getToken } from '../../asynStore';

import actionLoginFb from './action/actionLogFB';

class SplashScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            faceAnim: new Animated.Value(0),
            fadeLoading: new Animated.Value(0),
            loading: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            setTimeout(async () => {
                Animated.timing(
                    this.state.fadeLoading,
                    {
                        duration: 2000,
                        toValue: 0,
                    }
                ).start();
                const token = await getToken();
                if (token) {
                    this.props.dispatch({ type: 'Logged', payload: token });
                    const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                          NavigationActions.navigate({ routeName: 'Home' })
                        ]
                      });
                      this.props.navigation.dispatch(resetAction);
                    this.props.navigation.navigate('Home');
                } else {
                    this.setState({ loggined: false });
                    Animated.timing(
                        this.state.faceAnim,
                        {
                            duration: 2000,
                            toValue: 1,
                        }
                    ).start();
                }
            }, 4000);
            Animated.timing(
                this.state.fadeLoading,
                {
                    duration: 2000,
                    toValue: 1,
                }
            ).start();
        }, 1000);
    }

    async handleLogin() {
        actionLoginFb(this.props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <BackGround>
                        <Logo />
                    </BackGround>
                </View>
                <Animated.View style={{ opacity: this.state.faceAnim, flex: 1 }}>
                    <TouchableOpacity style={styles.containerButton} onPress={() => this.handleLogin()}>
                        <Icon name='logo-facebook' style={styles.iconButton} />
                        <Text style={styles.txtButton}>
                            Đăng nhập bằng Facebook
                    </Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{ opacity: this.state.fadeLoading, flex: 1 }}>
                    <ActivityIndicator size={40} color='#c0392b' />
                </Animated.View>
                <Text style={{ color: '#ffffff', fontSize: 20 }}>Created by JefficeZ</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerButton: {
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#4267b2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconButton: {
        color: 'white'
    },
    txtButton: {
        color: '#ffffff',
        marginLeft: 5
    }
});

export default connect()(SplashScreen);
