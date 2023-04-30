import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
  Text,
  Button,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './styles';

import Input from 'components/Input';

function generateNumbers() {
  let numbers = [];
  for (let i = 0;i < 100;i++) {
    numbers.push(i);
  }
  return numbers;
}

export default () => {
  const isDarkMode = useColorScheme();
  const list = generateNumbers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <ScrollView
          style={styles.scrollView}
          contentInsetAdjustmentBehavior="automatic">
          {list.map(item => {
            return (
              <View style={styles.listItem} key={item}>
                <Text style={styles.listItemContent}>{item}</Text>
              </View>
            );
          })}
        </ScrollView>
        <View style={{ width: '100%', flexDirection: 'row' }}>
          <Input style={styles.chatInput} placeholder="this is a demo" />
          <Button title="Submit" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
