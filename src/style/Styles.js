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
   padding1Horizontal0: {
      paddingHorizontal: 10
   },
   paddingLeft10: {
      paddingLeft: 10
   },

   // TEXT STYLES
   textSize18: {
      fontSize: 18
   },
   fontWeightBold: {
      fontWeight: "700"
   },

   // BORDER STYLES
   borderBottom: {
      borderBottomColor:  'rgb(240,50,85)',
      borderBottomWidth: StyleSheet.hairlineWidth
   },

   closeButton: {
      color: 'rgb(240,50,85)',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20
   },
   actionButton: {
      color: 'rgb(40,150,85)',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20
   }
});