import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';

export const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
    height: hp(5),
    marginHorizontal: 5,
    backgroundColor: '#A6A6A61A',
  },
  selectedDateItem: {
    backgroundColor: '#23AAEB45',
  },
  dateText: {
    color: 'black',
    fontFamily: fonts.bold,
  },
  timeText: {
    color: 'black',
    fontFamily: fonts.medium,
  },
  selectedDateText: {
    color: 'white',
    fontFamily: fonts.bold,
  },

  seatCard: {
    width: wp(70),
    height: hp(30),
    borderColor: '#F5F5F5',
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
    elevation: 5,
  },
  backButton: {
    color: 'blue',
    fontSize: 16,
  },
  movieDetails: {
    alignItems: 'center',
  },
  movieName: {
    fontSize: 18,
    color: Colors.lightBlack,
    fontFamily: fonts.regular,
  },
  releaseDate: {
    fontSize: 14,
    color: Colors.skyBlue,
    fontFamily: fonts.regular,
  },
  selectSeatButton: {
    backgroundColor: Colors.skyBlue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 20,
    marginHorizontal: 10,
    bottom: 95,
  },
  selectSeatText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
};
