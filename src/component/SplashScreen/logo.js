import React, { Component } from 'react';
import {
    View,
    Animated,
    Dimensions,
    StyleSheet,
    Easing
} from 'react-native';

import * as logo from '../../../source/logo';

const { width, height } = Dimensions.get('window');
class Logo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            marginTopM: new Animated.Value(-height - 1),
            marginTopO: new Animated.Value(-height - 1),
            marginTopN: new Animated.Value(-height - 1),
            marginTopE: new Animated.Value(-height - 1),
            marginTopY: new Animated.Value(-height - 1),

            marginTopI: new Animated.Value(height + 1),
            marginTopS: new Animated.Value(height + 1),

            marginTopL: new Animated.Value(-height - 1),
            marginTopI2: new Animated.Value(-height - 1),
            marginTopE2: new Animated.Value(-height - 1),
            marginTopF: new Animated.Value(-height - 1)
        };
    }

    componentDidMount() {
        setTimeout(() => this.renderLogo(), 1000);
    }

    renderLogo() {
        Animated.stagger(3000, [
            Animated.parallel([
                Animated.stagger(300, [
                    Animated.timing(
                        this.state.marginTopM,
                        {
                            duration: 2000,
                            toValue: 0,
                            easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                        }
                    ),
                    Animated.timing(
                        this.state.marginTopO,
                        {
                            duration: 2000,
                            toValue: 0,
                            easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                        }
                    ),
                    Animated.timing(
                        this.state.marginTopN,
                        {
                            duration: 2000,
                            toValue: 0,
                            easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                        }
                    ),
                    Animated.timing(
                        this.state.marginTopE,
                        {
                            duration: 2000,
                            toValue: 0,
                            easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                        }
                    ),
                    Animated.timing(
                        this.state.marginTopY,
                        {
                            duration: 2000,
                            toValue: 0,
                            easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                        }
                    )
                ]),
                Animated.stagger(300, [
                    Animated.timing(
                        this.state.marginTopL,
                        {
                            duration: 2000,
                            toValue: 0,
                            easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                        }
                    ),
                    Animated.timing(
                        this.state.marginTopI2,
                        {
                            duration: 2000,
                            toValue: 0,
                            easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                        }
                    ),
                    Animated.timing(
                        this.state.marginTopE2,
                        {
                            duration: 2000,
                            toValue: 0,
                            easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                        }
                    ),
                    Animated.timing(
                        this.state.marginTopF,
                        {
                            duration: 2000,
                            toValue: 0,
                            easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                        }
                    )
                ])
            ]),
            Animated.parallel([
                Animated.timing(
                    this.state.marginTopI,
                    {
                        duration: 2000,
                        toValue: 0,
                        easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                    }
                ),
                Animated.timing(
                    this.state.marginTopS,
                    {
                        duration: 2000,
                        toValue: 0,
                        easing: Easing.bezier(0.075, 0.82, 0.165, 1)
                    }
                ),
            ])
        ]).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.money}>
                    <Animated.Image source={logo.M} style={{ marginTop: this.state.marginTopM }} />
                    <Animated.Image source={logo.O} style={{ marginTop: this.state.marginTopO }} />
                    <Animated.Image source={logo.N} style={{ marginTop: this.state.marginTopN }} />
                    <Animated.Image source={logo.E} style={{ marginTop: this.state.marginTopE }} />
                    <Animated.Image source={logo.Y} style={{ marginTop: this.state.marginTopY }} />
                </View>
                <View style={styles.is}>
                    <Animated.Image source={logo.II} style={{ marginLeft: this.state.marginTopI }} />
                    <Animated.Image source={logo.SS} style={{ marginRight: this.state.marginTopS }} />
                </View>
                <View style={styles.life}>
                    <Animated.Image source={logo.L} style={{ marginTop: this.state.marginTopL }} />
                    <Animated.Image source={logo.I} style={{ marginTop: this.state.marginTopI2 }} />
                    <Animated.Image source={logo.F} style={{ marginTop: this.state.marginTopE2 }} />
                    <Animated.Image source={logo.E2} style={{ marginTop: this.state.marginTopF }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    money: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width / 2
    },
    is: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width / 4,
        margin: 30
    },
    life: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width / 2
    }
});

export default Logo;
