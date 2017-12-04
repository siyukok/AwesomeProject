import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList, Text, View} from 'react-native';
import RequestUtil from "../utils/RequestUtil";
import * as api from '../constants/API'
import Item from "../pages/CategoryPage/Item";

var list;

const data = RequestUtil.request(api.COMIC_API, 'get')
    .then((responseData) => {
        list = responseData.showapi_res_body.result;
        console.log(list)
    }, (responseData) => {

    }).catch((error) => {
        console.log('logger' + error)
    })


class CategoryContainer extends Component {
    static navigationOptions = {
        title: '分类',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-list" size={25} color={tintColor}/>
        )
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    renderItemContent = (result) => {
        return <Item result={result}/>
    }

    render() {
        return (
            <View>
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => 'key-${index}'}
                    renderItem={(item) => this.renderItemContent(item)}
                />
            </View>
        );
    }
}

export default CategoryContainer;