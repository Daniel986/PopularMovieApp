import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from './app/User/pages/Auth/Auth'
import PopularMovies from './app/movies/pages/PopularMovies/PopularMovies'
import MovieDetails from './app/movies/pages/MovieDetails/MovieDetails';
import FavouriteMovies from './app/movies/pages/FavouriteMovies/FavouriteMovies';
import { FavouriteContext } from './app/shared/context/favourite-context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FavouriteContext.Provider value={{
      favourites: [],
    }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth' headerMode='none'>
        <Stack.Screen name='Auth' component={Auth}></Stack.Screen>
        <Stack.Screen name='PopularMovies' component={PopularMovies}></Stack.Screen>
        <Stack.Screen name='MovieDetails' component={MovieDetails}></Stack.Screen>
        <Stack.Screen name='FavouriteMovies' component={FavouriteMovies}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </FavouriteContext.Provider>
  )
}


export default App;
