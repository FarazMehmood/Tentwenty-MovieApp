import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
    elevation: 5,
    backgroundColor: 'white',
    height: hp(10),
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    alignSelf: 'center',
    // marginVertical: 15,
  },
  movieDetails: {
    alignItems: 'center',
    color: Colors.skyBlue,
    fontFamily: fonts.light,
  },
  movieName: {
    fontSize: 18,
    color: Colors.lightBlack,
    fontFamily: fonts.bold,
    alignSelf: 'center',
  },
  seat: {
    borderWidth: 1,
    borderColor: 'yellow',
    padding: 2,
    width: '2%',
    height: '1%',

    margin: 2,
    backgroundColor: Colors.skyBlue,
  },
  width: {
    width: '50%',
  },
  selectedSeat: {
    backgroundColor: '#CD9D0F',
  },
  bookedSeat: {
    backgroundColor: '#61C3F2',
  },
  VIPSeat: {
    backgroundColor: Colors.purple,
  },
  modalView: {
    marginTop: 140,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '100%',
    height: '30%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  upperSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  lowerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButton: {
    backgroundColor: '#A6A6A61A',
    padding: 10,
    borderRadius: 5,
  },
  rightButton: {
    backgroundColor: Colors.skyBlue,
    width: wp(50),
    height: hp(7),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  bottomSheetButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
  },
  ProceedText: {
    color: Colors.white,
    fontFamily: fonts.bold,
    fontSize: FontSize.tiny,
    alignSelf: 'center',
  },
  total: {
    color: Colors.black,
    width: wp(20),
    fontFamily: fonts.medium,
    fontSize: FontSize.tiny,
    alignSelf: 'center',
  },
  btnView: {
    flexDirection: 'row',
    width: wp(17),
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginHorizontal: wp(4),
    top: 120,
  },
};
