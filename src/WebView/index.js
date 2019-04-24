import React, { Component } from 'react';
import {StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

class Application extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showME: false
    }
  }

  render() {

    return (
      <WebView source={{ uri: 'https://suporters.com/systems/sigepe/' }}>
        <StatusBar backgroundColor="#FF8000" />
      </WebView>

    )

  }

}

export default Application