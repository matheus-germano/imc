import React from 'react';
import { Text, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/pages/Home';
import Results from './src/pages/Results';
import About from './src/pages/About';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator initialRouteName='home' tabBarOptions={{activeTintColor: '#114B5F'}}>
          <Tab.Screen 
            name='home' 
            component={Home}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={'#114B5F'} size={32} />
              ),
            }}
          />
          <Tab.Screen 
            name='results' 
            component={Results}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Icon name="assignment" color={'#114B5F'} size={32} />
              ),
            }}
          />
          <Tab.Screen 
            name='about' 
            component={About}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Icon name="help-outline" color={'#114B5F'} size={32} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
