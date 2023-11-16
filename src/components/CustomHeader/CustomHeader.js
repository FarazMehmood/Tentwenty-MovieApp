import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import fonts from '../../assets/fonts';
import {styles} from './styles';

const CustomHeader = ({searchText, handleSearch}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <View style={styles.headerContainer}>
      {!isSearchVisible && <Text style={styles.headerText}>Watch</Text>}

      {!isSearchVisible ? (
        <TouchableOpacity onPress={toggleSearch}>
          <Image
            source={require('../../assets/images/searchIcon.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={handleSearch}
          />
          <TouchableOpacity onPress={toggleSearch}>
            <Image
              source={require('../../assets/images/crossIcon.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CustomHeader;
