import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';



/*
* 在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。
* 子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？
* 对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。*/
class JustifyContentBasics extends Component {
    render() {
        return (
            // 尝试把`justifyContent`改为`center`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};

AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);