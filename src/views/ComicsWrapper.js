import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { ComicThumbnail } from '../components';
import { withStyle } from '../contexts/StyleContext';
import { ComicFull } from '../components/ComicFull';

class ComicsWrapper extends React.PureComponent {
   state = {
      sort: false,
      selectedComic: null
   }

   showFullComic = num => {
      const selectedComic = this.props.comics.find( comic => comic.num === num);
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
            <View style={rhoveStyle.fullHeightAndWidth}>               
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
                        <ComicThumbnail key={comic.num} {...comic} onPress={() => this.showFullComic(comic.num)}/>
                     )
                     : <ComicThumbnail useFallback={true}/>
               }
               </ScrollView>
               <TouchableOpacity 
                  onPress={() => this.setState({ sort: !sort})}
                  style={[rhoveStyle.actionButton, rhoveStyle.flexCenter]}
               >
                  <Text style={rhoveStyle.actionButtonText}>Toggle Sort Order</Text>
               </TouchableOpacity>               
            </View>
         )
      }
   }
}

export default withStyle(ComicsWrapper);