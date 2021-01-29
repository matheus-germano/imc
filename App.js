import React from 'react';
import { Text, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './src/pages/Home';
import Results from './src/pages/Results';
import About from './src/pages/About';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#88D498' />
      <NavigationContainer>
        <Tab.Navigator initialRouteName='home' tabBarOptions={{
          activeTintColor: '#114B5F', 
          inactiveTintColor: '#999', 
          showLabel: false,
          keyboardHidesTabBar: true,
          style: {
            height: 80,
            borderRadius: 10,
            backgroundColor: '#f0f0f7',
          },
        }}>
          <Tab.Screen 
            name='home' 
            component={Home}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={32} />
              ),
            }}
          />
          <Tab.Screen 
            name='results' 
            component={Results}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Icon name="assignment" color={color} size={32} />
              ),
            }}
          />
          <Tab.Screen 
            name='about' 
            component={About}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Icon name="help-outline" color={color} size={32} style={{padding: 20}} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
