import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import List from './src/screens/List';
import Form from './src/screens/Form';
import Product from './src/screens/Product';
import ProductsContextProvider from './src/contexts/ProductsContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ProductsContextProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='List' 
          screenOptions={{headerStyle: {backgroundColor: '#86A922'}, headerTintColor: '#FFF'}}
        >
          <Stack.Screen name="List" component={List} options={{title: 'Kitchen Timer'}}/>
          <Stack.Screen name='Form' component={Form} options={{title: 'Add new item'}}/>
          <Stack.Screen name='Product' component={Product}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsContextProvider>
  );
}

export default App;
