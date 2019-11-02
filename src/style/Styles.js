import { StyleSheet } from 'react-native';
import { ComicsStyle } from './component-styles/ComicsStyle';

export const rhoveStyle = StyleSheet.create({
   ...ComicsStyle,

   flexCenter: {
      alignItems: 'center',
      justifyContent: 'center'
   },
   fullHeightAndWidth: {
      height: '100%',
      width: '100%',
      flex: 1
   },
   flexRow: {
      flexDirection: 'row'
   },
   flexColumn: {
      flexDirection: 'column'
   },

   // PADDING STYLES
   padding10: {
      padding: 10
   },
   paddingLeft10: {
      paddingLeft: 10
   },

   // TEXT STYLES
   textSize18: {
      fontSize: 18
   },

   // BORDER STYLES
   borderBottom: {
      borderBottomColor:  'rgb(240,50,85)',
      borderBottomWidth: StyleSheet.hairlineWidth
   }
});