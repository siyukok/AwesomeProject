import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';


const imageStyle = StyleSheet.create({
    imageMeas: {
        width: 22,
        height: 22
    }
})

class HomePageIcon extends Component {
    // 构造
    constructor(props) {
        super(props);
        console.log("被初始化了");
        // 初始状态
        this.state = {};
    }

    render() {
        if (this.props.loc === '1') {
            return (
                <View>
                    <Image
                        style={imageStyle.imageMeas}
                        source={require('../img/tab_home_unselect.png')}/>
                </View>
            );
        } else if (this.props.loc === '2') {
            return (
                <View>
                    <Image
                        style={imageStyle.imageMeas}
                        source={require('../img/tab_classify_unselect.png')}/>
                </View>
            );
        } else if (this.props.loc === '3') {
            return (
                <View>
                    <Image
                        style={imageStyle.imageMeas}
                        source={require('../img/tab_store_unselect.png')}/>
                </View>
            );
        }else if (this.props.loc === '4') {
            return (
                <View>
                    <Image
                        style={imageStyle.imageMeas}
                        source={require('../img/tab_shopcart_unselect.png')}/>
                </View>
            );
        }else if (this.props.loc === '5') {
            return (
                <View>
                    <Image
                        style={imageStyle.imageMeas}
                        source={require('../img/tab_mine_unselect.png')}/>
                </View>
            );
        }
    }


}


export default (HomePageIcon)