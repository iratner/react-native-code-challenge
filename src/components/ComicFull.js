import React from 'react';
import { View, Text, Image } from 'react-native';
import { withStyle } from '../contexts/StyleContext';

export const ComicFull = ({img, year, title, alt, date, useFallback, rhoveStyle}) => {
 
   return (
      
         <View style={[rhoveStyle.flexRow, rhoveStyle.padding10, rhoveStyle.borderBottom]}>
            <View styles={[rhoveStyle.flexColumn]}>
               <Text style={[rhoveStyle.textSize18, rhoveStyle.paddingLeft10]} >{title}</Text>
               <Text style={[rhoveStyle.textSize18, rhoveStyle.paddingLeft10]} >published: {date}</Text>
            </View>
            <View>
               <Image source={{uri: img}} accessibilityLabel={alt} 
                  style={rhoveStyle.comicThumbnail} 
                  resizeMode={"contain"}/>
            </View>            
         </View>      
   );
}