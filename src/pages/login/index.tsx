import {View, Button, Input} from 'react-native';
import React from 'react';

function Login(): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <h1>login: chatgpt key </h1>
      </View>
      <View>
        <Input placeholder="please input chatgpt key" />
        <Button title="Submit" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}

export default Login;
