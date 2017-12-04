import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Item = (({result}) => (
    <TouchableOpacity>
        <View style={styles.containerItem}>
            <Image style={styles.itemImg} source={{uri: result.item.cover}}/>
            <View style={styles.itemRightContent}>
                <Text style={styles.title}>{result.item.title}</Text>
                <Text style={styles.desc}>{result.item.content}</Text>
            </View>
        </View>
    </TouchableOpacity>
))

const styles = StyleSheet.create(
    {
        containerItem: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fcfcfc',
            padding: 10,
            borderBottomColor: '#ddd',
            borderBottomWidth: 1
        },
        itemImg: {
            width: 88,
            height: 66,
            marginRight: 10
        },
        itemRightContent: {
            flex: 1,
            flexDirection: 'column'
        },
        title: {
            fontSize: 12,
            textAlign: 'left',
            color: 'black'
        },
        desc: {
            fontSize: 10,
            textAlign: 'left',
            color: 'black'
        }
    }
)

export default Item;