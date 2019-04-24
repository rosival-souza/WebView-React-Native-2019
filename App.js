/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, ToastAndroid, StatusBar, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import NetInfo from "@react-native-community/netinfo"
import Application from './src/WebView'
import Disconnected from './src/Disconnected'

export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isConnected: true
    }
    setInterval(() => {
      this.isWifi()
    }, 10000)
  }
  alertDisconnected = () => {

    if (Platform.OS === 'android') {
      ToastAndroid.show('Você esta desconectado!', ToastAndroid.LONG);
    } else {
      Alert.alert('Você esta desconectado!!');
    }

  }
  alertConnected = () => {

    if (Platform.OS === 'android') {
      ToastAndroid.show('Você esta conectado!!', ToastAndroid.LONG);
    } else {
      Alert.alert('Você esta conectado!!..');
    }

  }
  isWifi = () => {

    NetInfo.isConnected.fetch().then(conn => {

      if (conn) {

        this.alertConnected()
        this.setState({ isConnected: true })

      } else {

        this.alertDisconnected()
        this.setState({ isConnected: false })

      }
    })
  }

  render() {

    if (this.state.isConnected) {
      return <Application/>
    }else{
      return <Disconnected/>
    }

  }

}