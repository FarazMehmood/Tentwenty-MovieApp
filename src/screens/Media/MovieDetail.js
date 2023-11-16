import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {fetchMovieDetails, fetchMovieVideos} from '../../Services/Api';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import Space from '../../components/Space';
import {styles} from './styles';

const MovieDetail = ({route, navigation}) => {
  const {movieId} = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => setMovieDetails(data))
      .catch(error => console.error('Error fetching movie details:', error));

    fetchMovieVideos(movieId)
      .then(data => {
        console.log('data', data);
        const trailer = data.results.find(video => video.type === 'Trailer');
        if (trailer) {
          setTrailerUrl(trailer.key);
        }
      })
      .catch(error => console.error('Error fetching movie videos:', error));
  }, [movieId]);
  const handleGetTicket = () => {
    navigation.navigate('GetTicketScreen', {
      movieName: movieDetails.title,
      releaseDate: movieDetails.release_date,
    });
  };

  const handleWatchTrailer = () => {
    navigation.navigate('VideoPlayerScreen', {trailerUrl});
  };

  if (!movieDetails) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../assets/images/backIcon.png')}
            style={{
              width: 15,
              height: 15,
              alignSelf: 'center',
            }}
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
          }}
          style={styles.imageBackground}>
          <View style={styles.overlay}>
            <Text style={styles.movieTitle}>{movieDetails.title}</Text>
            <Text style={styles.releaseDate}>
              In Theaters: {movieDetails.release_date}
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.buttonTic}
                onPress={handleGetTicket}>
                <Text style={styles.buttonText}>Get Ticket</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.buttonTra}
                onPress={handleWatchTrailer}>
                <Image
                  source={require('../../assets/images/playIcon.png')}
                  style={{width: 15, height: 15, right: 15}}
                  resizeMode="contain"
                />
                <Text style={styles.buttonText}>Watch Trailer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Genres:</Text>
          <View style={styles.genreList}>
            {movieDetails.genres.map((genre, index) => (
              <Text
                key={genre.id}
                style={[
                  styles.genre,
                  {
                    backgroundColor:
                      index % 2 === 0 ? Colors.pink : Colors.orange,
                  },
                ]}>
                {genre.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text>Overview:</Text>
          <Text>{movieDetails.overview}</Text>
        </View>
      </View>
      <Space height={hp(20)} />
    </ScrollView>
  );
};

export default MovieDetail;
