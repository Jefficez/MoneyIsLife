import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Provider } from 'react-redux';

import AppNavigation from './router/AppNavigation';
import store from './redux/store';

export default class MoneyIsLife extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <AppNavigation />
                </View>
            </Provider>
        );
    }
}
