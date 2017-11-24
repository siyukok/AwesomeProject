import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class TextInputDemo extends Component{
    /*TextInput是一个允许用户输入文本的基础组件。
    它有一个名为onChangeText的属性，此属性接受一个函数，而此函数会在文本变化时被调用。
    另外还有一个名为onSubmitEditing的属性，会在文本被提交后（用户按下软键盘上的提交键）调用。*/
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {text:''};
      }

      render(){
          return(
              <View style={{padding:10}}>
                <TextInput
                    style={{height:40}}
                    placeholder="type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                  <Text style={{padding:10,fontsize:42}}>
                      {this.state.text.split(' ').map((word)=>word && 'pizza').join(' ')}
                  </Text>
              </View>
          )
      }
}

AppRegistry.registerComponent('TextInputDemo',()=>TextInputDemo)