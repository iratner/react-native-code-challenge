import React, { useState } from 'react';
import { ScrollView, Text, Image, TouchableOpacity, View } from 'react-native';
import { withStyle } from '../contexts/StyleContext';

export const ComicFull = ({img, title, alt, date, transcript, rhoveStyle, onClose}) => {
 
   const [width, setWidth] = useState('100%');
   const [height, setHeight] = useState(500);
   
   return (
      
      <View style={rhoveStyle.fullHeightAndWidth}>         
         <ScrollView style={[rhoveStyle.padding1Horizontal0, {flexGrow: 1}]}>
               <Text style={[rhoveStyle.textSize18, rhoveStyle.paddingLeft10]} >
                  <Text style={rhoveStyle.fontWeightBold}>title:  </Text>{title}
               </Text>
               <Text style={[rhoveStyle.textSize18, rhoveStyle.paddingLeft10]}> 
                  <Text style={rhoveStyle.fontWeightBold}>published:  </Text>{date}
               </Text>         
               <View style={rhoveStyle.padding10}>
                  <Image source={{uri: img}} accessibilityLabel={alt} 
                     style={[{ width, height}, rhoveStyle.comicFull]} 
                     resizeMode={"contain"}
                     onLayout={() => {
                        Image.getSize(img, (width, height) => {
                           setWidth(width);
                           setHeight(height);
                        })
                     }}/>
               </View>
               <Text style={[rhoveStyle.textSize18, rhoveStyle.paddingLeft10]}> 
                  <Text style={rhoveStyle.fontWeightBold}>transcript:  </Text>{transcript}
               </Text>
         </ScrollView>     

         <View style={[rhoveStyle.closeButton, rhoveStyle.flexCenter]}>
            <TouchableOpacity onPress={(onClose)}>
               <Text style={rhoveStyle.closeButtonText}>Go Back</Text>
            </TouchableOpacity>
         </View> 
      </View>
   );
}