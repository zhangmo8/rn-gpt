import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface MessageItemProps {
  type?: 'send' | 'reply';
  msg?: string;
}

const MessageItem = (props: MessageItemProps) => {
  return (
    <View style={styles.message}>
      <Text>阿丝儿纪</Text>
    </View>
  );
};

export default MessageItem;
