import React from 'react';
import { ScrollView, Text, Image, TouchableHighlight, View } from 'react-native';
import { withStyle } from '../contexts/StyleContext';

export const ComicFull = ({img, title, alt, date, transcript, rhoveStyle, onClose}) => {
 
   return (
      
      <View>
         <View>
            <TouchableHighlight onPress={(onClose)}>
               <Text style={rhoveStyle.closeButton}>Go Back</Text>
            </TouchableHighlight>
         </View>
         <ScrollView style={rhoveStyle.padding1Horizontal0}>
               <Text style={[rhoveStyle.textSize18, rhoveStyle.paddingLeft10]} >
                  <Text style={rhoveStyle.fontWeightBold}>title:  </Text>{title}
               </Text>
               <Text style={[rhoveStyle.textSize18, rhoveStyle.paddingLeft10]}> 
                  <Text style={rhoveStyle.fontWeightBold}>published:  </Text>{date}
               </Text>               
               <Image source={{uri: img}} accessibilityLabel={alt} 
                  style={rhoveStyle.comicFull} 
                  resizeMode={"contain"}/>
               <Text style={[rhoveStyle.textSize18, rhoveStyle.paddingLeft10]}> 
                  <Text style={rhoveStyle.fontWeightBold}>transcript:  </Text>{transcript}
               </Text>
         </ScrollView>      
      </View>
   );
}