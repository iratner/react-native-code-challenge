import React from 'react';
import { ComicsWrapper} from './';
import { REQUESTS, comicsFetch, formatDate} from '../util/';

import { ActivityIndicator } from 'react-native';
// import { ThemeContext } from '../../App';
import { styles } from '../style/ComicsStyle';

class Comics extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         requestFromId: 1000,
         requestQuantity: 20,
         comics : [],
         requested: false
      }
   }

   componentDidMount() {
      const {requestFromId, requestQuantity} = this.state;

      comicsFetch(REQUESTS.GET_COMICS, {start: requestFromId, end: requestFromId + requestQuantity})
         .then( comics => {
            this.setState({ 
               comics: [...this.state.comics, ...this.processDate(comics)],
               requested: true
            })
         }).catch( err => {
            this.setState({ 
               requested: true
            })
         });
      
   }

   /**
    * Adds milliseconds to the comic for sorting, and adds a human readable, formatted date
    */
   processDate = (comics) => {
      comics.forEach( comic => {
         const date = new Date(comic.year, comic.month -1, comic.day);
         comic.milliseconds = date.getTime();
         comic.date = formatDate(date);


      });      

      return comics;
   }

   renderComics = () => {
      return <ComicsWrapper comics={this.state.comics} />
   }

   render() {
      const { requested } = this.state;

      if (requested) {
         return this.renderComics();
      } else {
         return <ActivityIndicator 
                     size="large" 
                     color="rgb(240,50,85)" 
                     style={[styles.fullHeightAndWidth, styles.flexCenter]}
                  />;
      }
      
   }
}
   
// Comics.contextType = ThemeContext;
export default Comics;