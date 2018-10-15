import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native'

import RouterComponent from './Router'

import store from '../redux/store'
import * as Color from './constants/colors'
import { Header, Button, Spinner } from './components/common';


import { Provider } from 'react-redux'


class App extends Component {


    render() {
        console.disableYellowBox = true;
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Header headerText="Mr Men Books" />
                    <RouterComponent />
                </View>
            </Provider>

        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ececec'
    },
    viewStyle: {
        backgroundColor: '#796eff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },

    textStyle: {
        fontSize: 20,
        color:'white'
    },

    subtext: {
        textAlign: 'center',
        marginBottom: 5,
        color: 'white',
    },
});

export default App;
