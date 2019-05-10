import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome5'

class Disconnected extends Component {

    render() {
        return (
            <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
                <StatusBar backgroundColor="darkorange" />
                <Icon style={{fontSize: 40, color:'orange'}} name="globe-americas" />
                <Text style={{fontSize: 20}}>Você esta desconectado...</Text>
            </View>
        );
    }
}
export default Disconnected