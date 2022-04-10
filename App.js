import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import List from './src/screens/List';
import Form from './src/screens/Form';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen name="List" component={List} options={{title: 'Kitchen Timer'}}/>
        <Stack.Screen name='Form' component={Form} options={{title: 'Add new item'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
