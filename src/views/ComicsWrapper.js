import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Comic } from '../components';

export default class ComicsWrapper extends React.PureComponent {
   state = {
      sort: false
   }

   render() {
      const { comics } = this.props;
      const { sort } = this.state;

      const sortedComics = comics.sort( (a, b) => { 
         return sort ? a.milliseconds - b.milliseconds : b.milliseconds - a.milliseconds;
      });

      return (
         <View >
            <Text>XKCD Comics</Text>
            {/* <div className="sort-comics">
               <label htmlFor="sort-comics-checkbox">sort in ascending order: 
                  <input 
                     onClick={() => this.setState({sort: !sort})} 
                     name="sort-comics-checkbox" type="checkbox">
                  </input>
               </label> 
            </div>*/}
            <ScrollView className="comics-grid">
            {
               sortedComics.length 
                  ? sortedComics.map( comic => <Comic key={comic.num} {...comic} />)
                  : <Comic useFallback={true}/>
            }
            </ScrollView>
         </View>
      )
   }
}