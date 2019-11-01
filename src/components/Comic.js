import React from 'react';
import { View, Text, Image } from 'react-native';

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

export class Comic extends React.PureComponent {

   measureContents = (params) => {
      this.setState({ contentsHeight: params.nativeEvent.layout.height });
  }

  render() {
      const {img, year, title, alt, date, useFallback} = this.props;

      if (useFallback) {
         return null;
      } else {

         return (
            <View styles={{ flex: 1}}>
               <Text>{title}</Text>
               <Text>published: {date}</Text>
               <Image source={{uri: img}} accessibilityLabel={alt} 
                  style={{flex:1, width: '100%', height: 500}} 
                  resizeMode={"contain"}/>
            </View>
         );
      }
   }
}
