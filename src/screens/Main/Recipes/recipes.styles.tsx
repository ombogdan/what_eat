import { Dimensions, StyleSheet } from 'react-native';
import { createStyles } from 'shared/theme/createStyles';

export const useStyles = createStyles(({ scale }: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: scale(20),
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: scale(20),
      marginVertical: scale(8),
      marginHorizontal: scale(16),
      position: 'absolute',
      flex: 1,
      height: Dimensions.get('window').height*0.75,
      width: '90%',
      alignItems: 'center',
      borderRadius: scale(10)
    },
    title: {
      fontSize: scale(32),
    },
  }),
);
