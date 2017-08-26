import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NetWork extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Không tìm thấy kết nối Internet</Text>
                <Text>Vui lòng kiểm tra lại đường truyền</Text>
            </View>
        );
    }
}

export default NetWork;
