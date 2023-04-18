import React, {useState, useRef} from 'react';
import VideoPlayer from 'react-native-video-player';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Orientation from 'react-native-orientation-locker';

export const Player2 = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef<VideoPlayer>(null);
  const [time, setTime] = useState({
    currentTime: 0,
    playableDuration: 0,
    seekableDuration: 0,
  });

  const skipBackward = () => {
    videoRef.current?.seek(time.currentTime - 15);
  };

  const skipForward = () => {
    videoRef.current?.seek(time.currentTime + 15);
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      Orientation.lockToPortrait();
      setIsFullScreen(false);
      return;
    }

    Orientation.lockToLandscape();
    setIsFullScreen(true);
  };

  const renderControls = () => {
    return (
      <View
        style={[
          styles.controlsContainer,
          isFullScreen ? styles.contentRightIcon : {},
        ]}>
        {isFullScreen ? null : (
          <View style={styles.controlContent}>
            <TouchableOpacity onPress={skipBackward}>
              <Icon name="play-back-outline" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={skipForward}>
              <Icon name="play-forward-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity onPress={toggleFullScreen}>
          {isFullScreen ? (
            <Icon name="ios-contract" size={23} color="white" />
          ) : (
            <Icon name="ios-expand" size={23} color="white" />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <VideoPlayer
        ref={videoRef}
        video={require('../assets/video/video.mp4')}
        style={isFullScreen ? styles.video : styles.defaultContainer}
        resizeMode="cover"
        onProgress={data => setTime(data)}
        showDuration
        controlsTimeout={2000}
        pauseOnPress={true}
        fullscreenOrientation={isFullScreen ? 'landscape' : 'portrait'}
        fullscreen={isFullScreen}
      />

      {renderControls()}
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '98%',
  },
  fullScreenVideo: {
    width: height,
    height: width,
  },
  defaultContainer: {
    height: 600,
  },
  playButton: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    bottom: -35,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
  },
  controlContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
  },
  contentRightIcon: {
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
    bottom: 8,
  },
});
