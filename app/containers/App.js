import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import MainContainer from "./MainContainer";
import CategoryContainer from "./CategoryContainer";
import StoreContainer from "./StoreContainer";
import ShopcartContainer from "./ShopcartContainer";
import MineContainer from "./MineContainer";
import WebViewPage from '../pages/WebViewPage'


const TabContainer = TabNavigator(
    {
        Main: {screen: MainContainer},
        Category: {screen: CategoryContainer},
        Store: {screen: StoreContainer},
        Shopcart: {screen: ShopcartContainer},
        Mine: {screen: MineContainer}
    }, {
        lazy: true,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: '#ff565c',
            inactiveTintColor: '#999999',
            showIcon: true,
            style: {
                backgroundColor: '#fff'
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                padding: 0
            }
        }
    }
)

const App = StackNavigator(
    {
        Home: {
            screen: TabContainer,
            navigationOptions:{
                header:null
            }
        }
    }
)

export default App;


