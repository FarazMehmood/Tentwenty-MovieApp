import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {fetchUpcomingMovies} from '../../Services/Api';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import CustomHeader from '../CustomHeader/CustomHeader';

const MovieCard = ({title, thumbnailUrl, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <ImageBackground source={{uri: thumbnailUrl}} style={styles.thumbnail}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

const MovieList = ({}) => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchUpcomingMovies()
      .then(movieData => {
        setMovies(movieData);
        setFilteredMovies(movieData);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const navigateToMovieDetail = movieId => {
    navigation.navigate('MovieDetail', {movieId});
  };

  const handleSearch = text => {
    setSearchText(text);
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredMovies(filtered);
  };

  const renderMovieCard = ({item}) => (
    <MovieCard
      title={item.title}
      thumbnailUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
      onPress={() => navigateToMovieDetail(item.id)}
    />
  );
  const renderNoResults = () => {
    if (filteredMovies.length === 0 && searchText !== '') {
      return (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No Movie found</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <CustomHeader searchText={searchText} handleSearch={handleSearch} />
      {renderNoResults()}
      {filteredMovies.length > 0 ? (
        <FlatList
          data={filteredMovies}
          renderItem={renderMovieCard}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : null}
    </View>
  );
};

export default MovieList;
