import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const img = require('../../../source/background.jpg');

class BackGround extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={img} style={styles.backgroundImage} >
                    {this.props.children}
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: null,
      height: null,
    }
  });

export default BackGround;
