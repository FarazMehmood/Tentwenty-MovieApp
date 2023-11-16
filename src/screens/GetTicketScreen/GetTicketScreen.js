import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {hp, wp} from '../../utils/Dimensions';
import {styles} from './styles';

const GetTicketScreen = ({route}) => {
  const navigation = useNavigation();
  const {movieName, releaseDate} = route.params;
  const [selectedDate, setSelectedDate] = useState(null);
  const [seatsData, setSeatsData] = useState([
    {id: 1, time: '09:00 AM', hallType: 'Cinetech + Hall 1', price: '$50'},
    {id: 2, time: '12:00 PM', hallType: 'Premium', price: '$75'},
    {id: 3, time: '03:00 PM', hallType: 'VIP', price: '$100'},
  ]);

  const dates = ['Nov 15', 'Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20']; // Sample dates

  const handleDateSelection = date => {
    setSelectedDate(date);
  };
  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/images/backblack.png')}
          style={{width: 30, height: 30}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.movieDetails}>
        <Text style={styles.movieName}>{movieName}</Text>
        <Text style={styles.releaseDate}>In Theaters {releaseDate}</Text>
      </View>
      <View style={{width: 15, height: 15}} />
    </View>
  );
  const renderDateItem = date => {
    const isSelected = selectedDate === date;
    return (
      <TouchableOpacity
        key={date}
        onPress={() => handleDateSelection(date)}
        style={[styles.dateItem, isSelected && styles.selectedDateItem]}>
        <Text style={isSelected ? styles.selectedDateText : styles.dateText}>
          {date}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSeatCard = ({item}) => (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.timeText}>{item.time} </Text>
        {''}
        <Text> {item.hallType}</Text>
      </View>
      <View style={styles.seatCard}>
        <Image
          source={require('../../assets/images/hall.png')}
          style={{width: wp(50), alignSelf: 'center'}}
          resizeMode="contain"
        />
        <Text>
          From <Text style={styles.dateText}> {item.price} </Text>
          <Text>or</Text> <Text style={styles.dateText}> 2500 bonus </Text>
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={[styles.timeText, {top: hp(7), left: 12}]}>Date</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateContainer}>
        {dates.map(date => renderDateItem(date))}
      </ScrollView>
      <FlatList
        data={seatsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderSeatCard}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.seatCardsContainer}
      />
      <TouchableOpacity
        style={styles.selectSeatButton}
        onPress={() => {
          navigation.navigate('SelectSeat', {
            movieName: movieName,
            releaseDate: releaseDate,
          });
        }}>
        <Text style={styles.selectSeatText}>Select Seat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetTicketScreen;
