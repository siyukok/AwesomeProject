/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {View} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import RNBridge from "./rnbridge/RNBridge";
import HomePageIcon from "./HomePageIcon";
import HomeView from "./HomeView";
import ClassifyView from "./ClassifyView";
import StoreView from "./StoreView";
import ShopcartView from "./ShopcartView";
import MyView from "./MyView";


class App extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {selectedTab: ''};
        RNBridge.showToast('成功了!');
    }

    render() {
        return (
            <View>
                <TabNavigator>
                    <TabNavigator.Item
                        loc="1"
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        renderIcon={HomePageIcon}
                        renderSelectedIcon={() => <Image source={require('../img/tab_home_select.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        {HomeView}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        loc="2"
                        selected={this.state.selectedTab === 'profile'}
                        title="分类"
                        renderIcon={HomePageIcon}
                        renderSelectedIcon={() => <Image source={require('../img/tab_classify_select.png')}/>}
                        // renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        {ClassifyView}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        loc="3"
                        selected={this.state.selectedTab === 'profile'}
                        title="门店"
                        renderIcon={HomePageIcon}
                        renderSelectedIcon={() => <Image source={require('../img/tab_store_select.png')}/>}
                        // renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        {StoreView}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        loc="4"
                        selected={this.state.selectedTab === 'profile'}
                        title="购物车"
                        renderIcon={HomePageIcon}
                        renderSelectedIcon={() => <Image source={require('../img/tab_shopcart_select.png')}/>}
                        // renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        {ShopcartView}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        loc="5"
                        selected={this.state.selectedTab === 'profile'}
                        title="我"
                        renderIcon={HomePageIcon}
                        renderSelectedIcon={() => <Image source={require('../img/tab_mine_select.png')}/>}
                        // renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        {MyView}
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

export default App;


