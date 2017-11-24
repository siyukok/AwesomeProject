import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

/*在组件的style中指定alignItems可以决定其子元素沿着次轴
（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
子元素是应该靠近次轴的起始端还是末尾段分布呢？
亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end以及stretch。
注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。*/
class AlignItemsBasics extends Component {
    render() {
        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};

AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);