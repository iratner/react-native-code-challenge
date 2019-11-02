/**
 * Rhove React Native Code Challenge
 */

import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import { rhoveStyle } from './src/style/Styles';
import { ComicsWrapper, Comics } from './src/views';
import { StyleContext } from './src/contexts/StyleContext';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, flexGrow: 1}}>
        <StyleContext.Provider value={{rhoveStyle}}>
          <Comics/>
        </StyleContext.Provider>
      </SafeAreaView>
    );
  }
}

export default App;
