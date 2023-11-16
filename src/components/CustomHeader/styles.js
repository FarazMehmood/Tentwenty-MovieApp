import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';

export const styles = {
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: 18,
    //fontWeight: 'bold',
    fontFamily: fonts.bold,
    color: Colors.lightBlack,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#EFEFEF',
    padding: 8,
    margin: 5,
    borderRadius: 20,
    flex: 1,
  },
};
