import { StyleSheet } from 'react-native';
import { createStyles } from 'shared/theme/createStyles';

export const useStyles = createStyles(({ scale }: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      resizeMode: 'cover',
    },
    welcomeText: {
      fontSize: scale(24),
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: scale(20),
    },
    infoText: {
      fontSize: scale(18),
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: scale(20),
    },
  }),
);
