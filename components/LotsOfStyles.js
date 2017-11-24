import React, {Component} from 'react';
import {AppRegistry, Stylesheet, Text, View} from 'react-native';


class LotsOfStyles extends Component {//样式
    render() {
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue,then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

const styles = Stylesheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontsize: 30
    },
    red: {
        color: 'red'
    },
});
AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles)
