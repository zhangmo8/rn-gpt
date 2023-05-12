import React, { useEffect, useRef, useState } from 'react';
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
import { gptDemo } from 'servers/chat';

// function generateNumbers() {
//   let numbers = [];
//   for (let i = 0;i < 100;i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }

export default () => {
  const [msgIndex, setMsgIndex] = useState<number>(0);
  const [message, setMessage] = useState<string>();
  const isDarkMode = useColorScheme();
  const messageListRecord = useRef<string[]>([]);

  const timer = useRef<number>();

  useEffect(() => {
    gptDemo()
      .then(res => res.text())
      .then(res => {
        const messageList = res.split('data:');
        for (let i = 0;i < messageList.length;i++) {
          if (i === 0) {
            continue;
          }

          if (i === messageList.length - 1) {
            setMessage(messageListRecord.current.join(''));
            delayRender(messageListRecord.current.join('').length);
            break;
          }

          const resultFragment = JSON.parse(messageList[i]).choices[0].delta.content || '';

          messageListRecord.current.push(resultFragment);
        }
      })
      .catch(err => {
        console.log('error', err);
      });

    return () => {
      timer.current && clearInterval(timer.current)
      timer.current = undefined;
    };
  }, []);

  function delayRender(length: number) {
    timer.current = setInterval(() => {
      if (msgIndex >= (length || 0)) {
        timer.current && clearInterval(timer.current);
      }

      setMsgIndex(current => current + 1);
    }, 100);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <ScrollView
          style={styles.scrollView}
          contentInsetAdjustmentBehavior="automatic">
          <Text style={styles.listItemContent}>
            {message?.slice(0, msgIndex)}
          </Text>
          {/* {list.map(item => {
            return (
              <View style={styles.listItem} key={item}>
              </View>
            );
          })} */}
        </ScrollView>
        <View style={{ width: '100%', flexDirection: 'row' }}>
          <Input style={styles.chatInput} placeholder="this is a demo" />
          <Button title="Submit" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
