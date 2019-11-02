import { StyleSheet } from 'react-native';
import { ComicsStyle } from './component-styles/ComicsStyle';

const colorNegate = 'rgb(240,50,85)';
const colorAction = 'rgb(40,150,85)';

const colorNegateBg = 'rgba(240,50,85,.25)';
const colorActionBg = 'rgba(40,150,85,.25)';

export const rhoveStyle = StyleSheet.create({
   ...ComicsStyle,

   flexCenter: {
      alignItems: 'center',
      justifyContent: 'center'
   },
   fullHeightAndWidth: {
      flex: 1,
      flexGrow: 1
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
      borderBottomColor:  colorNegate,
      borderBottomWidth: StyleSheet.hairlineWidth
   },

   // BUTTONS
   closeButton: {
      height: 50,
      backgroundColor: colorNegateBg
   },
   actionButton: {
      height: 50,
      backgroundColor: colorActionBg
   },
   closeButtonText: {
      color: colorNegate,
      fontSize: 20,
      textAlign: 'center'
   },
   actionButtonText: {
      color: colorAction,
      fontSize: 20,
      textAlign: 'center'
   }
});