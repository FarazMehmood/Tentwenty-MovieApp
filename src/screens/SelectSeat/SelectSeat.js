import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import {hp, wp} from '../../utils/Dimensions';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const SelectSeat = ({route}) => {
  const navigation = useNavigation();
  const {movieName, releaseDate} = route.params;
  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/images/backblack.png')}
          style={{width: 30, height: 30}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.movieName}>{movieName}</Text>
        <Text style={styles.movieDetails}>In Theaters {releaseDate}</Text>
      </View>
      <View style={{width: 15, height: 15}} />
    </View>
  );
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const upperSection = (
    <View>
      <View style={styles.upperSection}>
        <View style={styles.legendItem}>
          <View style={[styles.seat, styles.VIPSeat]} />
          <Text style={styles.width}>VIP (150$)</Text>
        </View>
        <View style={[styles.legendItem, styles.margin]}>
          <View style={[styles.seat, styles.selectedSeat]} />
          <Text style={styles.width}>Selected</Text>
        </View>
      </View>
      <View style={styles.upperSection}>
        <View style={styles.legendItem}>
          <View style={[styles.seat, styles.bookedSeat]} />
          <Text style={styles.width}>Not Available</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.seat]} />
          <Text style={styles.width}> Regular(50$)</Text>
        </View>
      </View>
    </View>
  );

  const middleSection = (
    <View style={styles.middleSection}>
      <Image
        source={require('../../assets/images/row.png')}
        style={{width: 100}}
        resizeMode="contain"
      />
    </View>
  );

  const lowerSection = (
    <View style={styles.lowerSection}>
      <TouchableHighlight
        style={styles.leftButton}
        onPress={() => alert('Total Price: $50')}>
        <Text style={styles.total}>Total price: $50</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.rightButton}
        onPress={() => alert('Proceed to Pay')}>
        <Text style={styles.ProceedText}>Proceed to Pay</Text>
      </TouchableHighlight>
    </View>
  );
  const rows = 10;
  const cols = 14;
  const seatData = Array.from({length: rows}, (_, rowIndex) =>
    Array.from({length: cols}, (_, colIndex) => ({
      row: rowIndex + 1,
      col: colIndex + 1,
      isBooked: Math.random() < 0.3, // Simulated booked seats
      isVIP: rowIndex === 0 && [2, 5, 7].includes(colIndex + 1), // Define VIP seats
    })),
  );

  const toggleSeat = (row, col) => {
    const seat = {row, col};
    const index = selectedSeats.findIndex(s => s.row === row && s.col === col);
    if (index > -1) {
      const updatedSeats = [
        ...selectedSeats.slice(0, index),
        ...selectedSeats.slice(index + 1),
      ];
      setSelectedSeats(updatedSeats);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <View style={styles.container}>
      {Header()}
      <Image
        source={require('../../assets/images/Screen.png')}
        resizeMode="contain"
        style={{width: wp(80), height: hp(4), alignSelf: 'center'}}
      />
      <Text style={{alignSelf: 'center', bottom: 25}}>Screen</Text>
      {seatData.map((row, rowIndex) => (
        <View key={`row_${rowIndex}`} style={styles.row}>
          {row.map((seat, colIndex) => (
            <TouchableOpacity
              key={`seat_${rowIndex}_${colIndex}`}
              style={[
                styles.seat,
                seat.isBooked && styles.bookedSeat,
                selectedSeats.find(
                  s => s.row === seat.row && s.col === seat.col,
                ) && styles.selectedSeat,
                seat.isVIP && styles.VIPSeat,
              ]}
              disabled={seat.isBooked}
              onPress={() => toggleSeat(seat.row, seat.col)}>
              <Text>{`${seat.row}${String.fromCharCode(65 + colIndex)}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <View style={styles.btnView}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/plusIcon.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/minusIcon.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.modalView}>
        {upperSection}
        {middleSection}
        {lowerSection}
      </View>
    </View>
  );
};

export default SelectSeat;
