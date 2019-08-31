import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "./App.styles";

/**
 * App main component. This description is added for documentation generating demo.
 */
class App extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };

        this._handleHelloTap = this._handleHelloTap.bind(this);
    }

    /**
     * Tap event handler, increases counter
     *
     * @param {Object} event - event info
     * @private
     */
    _handleHelloTap(event) {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }));
    }

    /**
     * Renders component.
     *
     * @returns {React.Element}
     */
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.big} onPress={this._handleHelloTap}>Hello World!</Text>
                <Text style={styles.big} onPress={this._handleHelloTap}>
                    Taps counter: {this.state.counter}
                </Text>
            </View>
        );
    }
}

export default App;
