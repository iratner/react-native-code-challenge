/**
 * Rhove React Native Code Challenge
 */

import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import { styles } from './src/style/ComicsStyle';
import { ComicsWrapper, Comics } from './src/views';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.fullHeightAndWidth]}>
        {/* <ThemeContext.Provider value={styles}> */}
          <Comics/>
        {/* </ThemeContext.Provider> */}
      </SafeAreaView>
    );
  }
}

export default App;
