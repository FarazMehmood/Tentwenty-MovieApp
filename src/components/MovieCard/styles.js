import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';

export const styles = {
  thumbnail: {
    width: wp(90),
    alignSelf: 'center',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: hp(1),
  },
  titleContainer: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 16,

    fontFamily: fonts.regular,
    color: Colors.white,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    paddingBottom: 300,
  },
  noResultsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  noResultsText: {
    fontSize: 18,
    color: 'red', // Adjust the color as needed
    fontWeight: 'bold',
  },
};
