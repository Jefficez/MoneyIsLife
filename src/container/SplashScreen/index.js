import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Logo from '../../component/SplashScreen/logo';
import BackGround from '../../component/SplashScreen/background';

class SplashScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <BackGround>
                    <Logo />
                </BackGround>
                <Text style={{ color: '#ffffff', fontSize: 20 }}>Created by JefficeZ</Text>
            </View>
        );
    }
}

export default SplashScreen;
