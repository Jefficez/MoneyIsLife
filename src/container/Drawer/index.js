import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'native-base';
import { NavigationActions } from 'react-navigation';

import { LoginManager } from 'react-native-fbsdk';
import { removeToken } from '../../asynStore';

const { width } = Dimensions.get('window');
class DrawerMenu extends Component {

    async onLogOut() {
        await removeToken();
        LoginManager.logOut();
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'SplashScreen' })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        const { logginInfo } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.userInfo}>
                    <Image
                        source={{ uri: `https://graph.facebook.com/${logginInfo.id}/picture?type=large` }}
                        style={styles.avatar}
                    />
                    <Text style={styles.userName}>{logginInfo.name}</Text>
                </View>
                <View style={styles.menuContainer}>
                    <ScrollView>
                        <List>
                            <ListItem style={styles.listItem}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('DrawerClose');
                                        this.props.navigation.navigate('Login');
                                    }}
                                >
                                    <Text>Simon Mignolet</Text>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem style={styles.listItem}>
                                <TouchableOpacity>
                                    <Text>Nathaniel Clyne</Text>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem style={styles.listItem}>
                                <TouchableOpacity>
                                    <Text>Dejan Lovren</Text>
                                </TouchableOpacity>
                            </ListItem>
                        </List>
                    </ScrollView>
                    <TouchableOpacity
                        style={styles.containerBtnLogout}
                        onPress={this.onLogOut.bind(this)}
                    >
                        <Text>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userInfo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: (width / 2.5),
        height: (width / 2.5),
        borderRadius: (width / 2.5)
    },
    userName: {
        marginTop: 20,
        fontSize: 15,
        fontFamily: 'Times New Roman',
        color: '#000'
    },
    menuContainer: {
        flex: 3,
    },
    listItem: {
        justifyContent: 'center'
    },
    containerBtnLogout: {
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 15,
    },
    btnLogout: {
        justifyContent: 'center',
    }
});

const mapStateToProps = (state) => ({
    logginInfo: state.rdLogin
});

export default connect(mapStateToProps)(DrawerMenu);
