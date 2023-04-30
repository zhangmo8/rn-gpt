import React from 'react';
import { Alert, Animated, TouchableOpacity, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Chars from './pages/chars';
import Settings from './pages/settings';

function App(): JSX.Element {
  // const isDarkMode: boolean = useColorScheme() === 'dark';

  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };

  const renderTabBar = ({
    routeName,
    selectedTab,
    navigate,
  }: {
    routeName: string;
    selectedTab: string;
    navigate: (params: string) => void;
  }) => {
    return (
      <TouchableOpacity onPress={() => navigate(routeName)}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <CurvedBottomBar.Navigator
        type="DOWN"
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View>
            <TouchableOpacity onPress={() => Alert.alert('Click Action')}>
              <Ionicons name={'apps-sharp'} color="gray" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="title1"
          position="LEFT"
          component={Chars}
        />
        <CurvedBottomBar.Screen
          name="title2"
          component={Settings}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </NavigationContainer>
  );
}

export default App;
