import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { withStyle } from '../contexts/StyleContext';
import { ComicFull } from './ComicFull';

// Just a fallback comic stored locally if nothing comes back from the API call
const FALLBACK = {
   alt: "Don't we all.",
   day: "1",
   img: "/img/xkcd_1.jpg",
   milliseconds: 1,
   date: "No one really knows",
   link: "",
   month: "1",
   news: "",
   num: 1,
   safe_title: "Barrel - Part 1",
   title: "Barrel - Part 1",
   transcript: "[[A boy sits in a barrel which is floating in an ocean.]]↵Boy: I wonder where I'll float next?↵[[The barrel drifts into the distance. Nothing else can be seen.]]↵{{Alt: Don't we all.}}",
   year: 2006
}

class ComicThumbnail extends React.PureComponent {

   constructor(props) {
      super(props);
   }   

  render() {
      const {img, year, title, alt, date, useFallback, rhoveStyle, onPress} = this.props;

      if (useFallback) {
         return null;
      } else {

         return (
            <TouchableHighlight onPress={onPress}>
               <View style={[rhoveStyle.flexRow, rhoveStyle.padding10, rhoveStyle.borderBottom]}>
                  <View>
                     <Image source={{uri: img}} accessibilityLabel={alt} 
                        style={rhoveStyle.comicThumbnail} 
                        resizeMode={"contain"}/>
                  </View>
                  <View styles={[rhoveStyle.flexColumn]}>
                     <Text style={[rhoveStyle.textSize18, rhoveStyle.paddingLeft10]} >{title}</Text>
                     <Text style={[rhoveStyle.textSize18, rhoveStyle.paddingLeft10]} >published: {date}</Text>
                  </View>
               </View>
            </TouchableHighlight>
         );
      }
   }
}

export default withStyle(ComicThumbnail);