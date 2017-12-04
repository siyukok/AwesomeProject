import React, {Component} from 'react';
import {WebView, View, StyleSheet} from 'react-native';
import LoadingView from '../components/LoadingView';

const DEFAULT_URL = 'https://wap.mishiyy.com.cn/shopping/app/index.htm';

const style = StyleSheet.create({
    base: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF'
    },
})

class WebViewPage extends Component {

    state = {
        url: DEFAULT_URL,
    };

    renderLoading = () => <LoadingView />;

    render() {
        return (
            <View style={style.container}>
                <WebView
                    ref={(ref) => {
                        this.webview = ref;
                    }}
                    style={style.base}
                    source={{ uri: this.state.url }}
                    javaScriptEnabled
                    domStorageEnabled
                    startInLoadingState
                    scalesPageToFit
                    decelerationRate="normal"
                    onShouldStartLoadWithRequest={() => {
                        return false;
                    }}
                    onNavigationStateChange={(event) => {
                        console.log('拦截到了'+event.title+':'+event.url)
                        if (event.url.contains('goods')){
                            console.log('商品')
                        }
                    }}
                    renderLoading={this.renderLoading}
                />
            </View>
        );
    }
}

export default WebViewPage;