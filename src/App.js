import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "./App.styles";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };

        this._handleHelloTap = this._handleHelloTap.bind(this);
    }

    _handleHelloTap() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.big} onPress={this._handleHelloTap}>Hello World!</Text>
                <Text style={styles.big} onPress={this._handleHelloTap}>Tap counter: {this.state.counter}</Text>
            </View>
        );
    }
}
