import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {Text,View} from 'react-native';

class CategoryContainer extends Component {
    static navigationOptions = {
        title: '分类',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-list" size={25} color={tintColor}/>
        )
    };

    render() {
        return(
            <View>
                <Text>
                    分类
                </Text>
            </View>
        );
    }
}

export default CategoryContainer;