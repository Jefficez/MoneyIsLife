import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LoginScreen extends Component {

    render() {
        return (
            <View>
                <Text onPress={() => this.props.navigation.goBack()}> Login Screen </Text>
            </View>
        );
    }
}

export default LoginScreen;
