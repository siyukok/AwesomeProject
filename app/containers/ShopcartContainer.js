import React, {Component} from 'react'
import {Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ShopcartContainer extends Component {
    static navigationOptions = {
        title: '购物车',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-cart" size={25} color={tintColor}/>
        )
    };

    render() {
        return(
            <View>
                <Text>
                    购物车
                </Text>
            </View>
        );
    }
}

export default ShopcartContainer;