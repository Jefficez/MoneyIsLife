import React, { Component } from 'react';
import {
    View
} from 'react-native';

import RootNavigation from './router';

export default class MoneyIsLife extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <RootNavigation />
            </View>
        );
    }
}
