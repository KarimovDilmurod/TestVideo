import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {IVideoData} from '../../api/VideoPlayerData';
import {Player} from '../../components/VideoControl';

interface IProps {
  route: {
    params: {
      data: IVideoData;
    };
  };
}

const PlayerScreen = ({route}: IProps) => {
  const {data} = route.params || {};

  console.log('item', data);

  return (
    <SafeAreaView style={styles.container}>
      <Player url={data.sources} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default PlayerScreen;
