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
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              // @ts-ignore
              navigation.navigate('Player', {data: item})
            }
            activeOpacity={0.7}
            style={styles.itemContent}
            key={item.id}>
            <Text style={styles.text}>{item.title}</Text>

            <View style={styles.imageContent}>
              <Image source={item.image} style={styles.image} />
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
    width: 100,
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
});

export default HomeScreen;
