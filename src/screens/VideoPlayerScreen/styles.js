import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Background color of the screen
  },
  videoPlayer: {
    width: '100%',
    aspectRatio: 16 / 9, // Aspect ratio of the video
  },
  doneButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000', // Color of the button text
    fontWeight: 'bold',
  },
};
