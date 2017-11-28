import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import WebViewPage from "../pages/WebViewPage";


class MainContainer extends Component {

    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({tintColor}) => (
            <Icon name="md-home" size={25} color={tintColor}/>
        )
    };

    render() {
        return (
            <WebViewPage/>
        );
    }
}

export default MainContainer;