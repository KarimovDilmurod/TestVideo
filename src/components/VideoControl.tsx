import React, {useState, useRef} from 'react';
import VideoPlayer from 'react-native-video-player';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Orientation from 'react-native-orientation-locker';
import useSmartNavigation from '../hook/useSmartNavigation';

interface IProps {
  url: string;
}

export const Player = ({url}: IProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef<VideoPlayer>(null);
  const navigation = useSmartNavigation();
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
              <Icon name="play-back-outline" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={skipForward}>
              <Icon name="play-forward-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity onPress={toggleFullScreen}>
          {isFullScreen ? (
            <Icon name="ios-contract" size={23} color="white" />
          ) : (
            <Icon name="ios-expand" size={23} color="black" />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View>
        {isFullScreen ? null : (
          <TouchableOpacity
            style={styles.iconContent}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={30} color="white" />
          </TouchableOpacity>
        )}
      </View>

      <VideoPlayer
        ref={videoRef}
        video={typeof url === 'string' ? {uri: url} : url}
        style={isFullScreen ? styles.video : styles.defaultContainer}
        resizeMode="contain"
        onProgress={data => setTime(data)}
        showDuration
        controlsTimeout={2000}
        pauseOnPress={true}
        fullscreenOrientation={isFullScreen ? 'landscape' : 'portrait'}
        fullscreen={isFullScreen}
        disableFullscreen
      />

      {renderControls()}
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '97.5%',
  },
  defaultContainer: {
    height: 400,
  },
  controlsContainer: {
    bottom: -33,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    backgroundColor: '#F2F3F4',
    borderWidth: 1,
    borderTopWidth: 0,
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    zIndex: 999,
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
    bottom: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  iconContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
