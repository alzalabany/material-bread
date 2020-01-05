import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  containerStyle: {
    position: 'relative',
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(250,250,250,.5)',
  },
});

export default styles;
