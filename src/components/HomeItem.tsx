import React from 'react';
import {View, Text} from 'react-native';

interface IProps {
  text: string;
}

const HomeItem = ({text}: IProps) => {
  <View>
    <Text>{text}</Text>
  </View>;
};

export default HomeItem;
