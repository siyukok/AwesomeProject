import React, {Component} from 'react'
import {Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class StoreContainer extends Component {
    static navigationOptions = {
        title: '门店',
        tabBarIcon: ({tintColor}) => (
            <Icon name="store" size={25} color={tintColor}/>
        )
    };

    render() {
        return(
            <View>
                <Text>
                    门店
                </Text>
            </View>
        );
    }
}

export default StoreContainer;