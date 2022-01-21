/* eslint-disable prettier/prettier */
import React from 'react';
import ListPage from './src/screens/ListPage/ListPage';
import DetailPage from './src/screens/DetailPage/DetailPage';
import EditPage from './src/screens/EditPage/EditPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store} from './redux/store';


function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* <ListPage /> */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="List" component={ListPage} />
          <Stack.Screen name="Detail" component={DetailPage} />
          <Stack.Screen name="Edit" component={EditPage} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
