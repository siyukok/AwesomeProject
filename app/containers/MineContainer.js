import React, {Component} from 'react'
import {Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class MineContainer extends Component {
    static navigationOptions = {
        title: '我',
        tabBarIcon: ({tintColor}) => (
            <Icon name="person" size={25} color={tintColor}/>
        )
    };

    render() {
        return(
            <View>
                <Text>
                    我
                </Text>
            </View>
        );
    }
}

export default MineContainer;