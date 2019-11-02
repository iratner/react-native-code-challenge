import React from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';

import { ComicThumbnail } from '../components';
import { withStyle } from '../contexts/StyleContext';
import { ComicFull } from '../components/ComicFull';

class ComicsWrapper extends React.PureComponent {
   state = {
      sort: false,
      selectedComic: null
   }

   showFullComic = id => {
      const selectedComic = this.props.comics.find( comic => comic.id === id);
      this.setState({ selectedComic });
   }

   closeComic = () => {
      this.setState({ selectedComic: null });
   }

   render() {
      const { comics, rhoveStyle } = this.props;
      const { sort, selectedComic } = this.state;

      const sortedComics = comics.sort( (a, b) => { 
         return sort ? a.milliseconds - b.milliseconds : b.milliseconds - a.milliseconds;
      });

      if (selectedComic) 
         return <ComicFull {...selectedComic} rhoveStyle={rhoveStyle} onClose={() => this.closeComic()}/>;

      else {

         return (
            <View >
               <TouchableHighlight onPress={() => this.setState({ sort: !sort})}>
                  <Text style={rhoveStyle.actionButton}>Toggle Sort Order</Text>
               </TouchableHighlight>
               {/* <div className="sort-comics">
                  <label htmlFor="sort-comics-checkbox">sort in ascending order: 
                     <input 
                        onClick={() => this.setState({sort: !sort})} 
                        name="sort-comics-checkbox" type="checkbox">
                     </input>
                  </label> 
               </div>*/}
               <ScrollView>
               {
                  sortedComics.length 
                     ? sortedComics.map( comic => 
                        <ComicThumbnail key={comic.num} {...comic} onPress={() => this.showFullComic(comic.id)}/>
                     )
                     : <ComicThumbnail useFallback={true}/>
               }
               </ScrollView>
            </View>
         )
      }
   }
}

export default withStyle(ComicsWrapper);