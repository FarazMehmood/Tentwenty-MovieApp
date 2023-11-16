import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  main: {flex: 1, backgroundColor: Colors.white},
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerLoading: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: hp(60),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },

  buttonTic: {
    backgroundColor: Colors.skyBlue,
    height: hp(7),
    width: wp(60),
    marginBottom: hp(1),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTra: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderColor: Colors.skyBlue,
    borderWidth: 2,
    height: hp(7),
    width: wp(60),
    marginBottom: hp(1),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: FontSize.regular,
  },
  section: {
    margin: 20,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.bold,
    marginBottom: 10,
    color: Colors.white,
  },
  releaseDate: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: Colors.lightBlack,
    marginBottom: 10,
  },
  genreList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonsContainer: {
    flexDirection: 'column',

    marginBottom: 20,
  },
  column: {
    alignItems: 'center',
  },
  genre: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
    color: Colors.white,
    fontFamily: fonts.medium,
  },
  overview: {
    lineHeight: 22,
  },
  backButton: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: Colors.white,
    fontFamily: fonts.medium,
    fontSize: 16,
    left: 30,
  },
};
