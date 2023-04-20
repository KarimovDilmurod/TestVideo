import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import useSmartNavigation from '../../hook/useSmartNavigation';
import videoList from '../../api/VideoPlayerData';

const HomeScreen = () => {
  const navigation = useSmartNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={videoList}
        keyExtractor={(item, index) => item.toString() + index}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              // @ts-ignore
              navigation.navigate('Player', {data: item})
            }
            activeOpacity={0.7}
            style={styles.itemContent}
            key={index}>
            <Text style={styles.text}>{item.title}</Text>

            <View style={styles.imageContent}>
              <Image
                source={{
                  uri:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/' +
                    item.thumb,
                }}
                style={styles.image}
              />
            </View>

            <View style={styles.subTitleContent}>
              <Text style={styles.subTitle}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFEFE',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: '400',
    borderRadius: 8,
    backgroundColor: 'white',
    zIndex: 9999,
    marginBottom: 10,
  },
  itemContent: {
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#F2F3F4',
    borderRadius: 12,
    shadowColor: 'rgba(42, 53, 61, 0.12)',
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 3,
  },
  imageContent: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  subTitle: {
    color: 'black',
  },
  subTitleContent: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default HomeScreen;
