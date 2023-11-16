import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {hp, wp} from '../../utils/Dimensions';
import {styles} from './styles';

const VideoPlayerScreen = ({route, navigation}) => {
  const {trailerUrl} = route.params;
  const handleVideoCompletion = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <YoutubePlayer
          play={true}
          height={hp(100)}
          width={wp(100)}
          playList={[`${trailerUrl}`]}
          initialPlayerParams={{
            controls: true,
            loop: true,
            rel: false,
            iv_load_policy: 3,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={handleVideoCompletion}
        style={styles.doneButton}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoPlayerScreen;
