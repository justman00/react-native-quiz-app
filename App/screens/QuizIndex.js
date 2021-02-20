import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import spaceQuestions from '../data/space';
import computerQuestions from '../data/computers';

import { RowItem } from '../components/RowItem';

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Spatiu"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Spatiu',
          questions: spaceQuestions,
          color: '#36b1f0',
        })
      }
    />
    <RowItem
      name="Calculatoare"
      color="#49475B"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Calculatoare',
          questions: computerQuestions,
          color: '#49475B',
        })
      }
    />
  </ScrollView>
);
