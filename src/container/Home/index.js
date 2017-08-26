import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={styles.containerWeather} >
                        <Text>dasdsad</Text>
                    </View>
                    <View style={styles.containerWeather} >
                        <Text>dasdsad</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    logginInfo: state.rdLogin
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerWeather: {
        width: width / 2.1,
        margin: 10,
        backgroundColor: '#ffffff',
        elevation: 1,
        padding: 10
    }
});

export default connect()(HomeScreen);
