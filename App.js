/**
 * Rhove React Native Code Challenge
 */

import React from 'react';
import {SafeAreaView, Image} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Image
          source={require('./so-it-begins.jpg')}
          style={{width: '100%'}}
          resizeMode={'contain'}
        />
      </SafeAreaView>
    );
  }
}

export default App;
