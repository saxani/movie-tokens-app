import { useEffect, useContext } from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Provider, FilmsContext } from './context/Films';
import HomeScreen from './screens/HomeScreen';
import MyFilmsScreen from './screens/MyFilmsScreen';
import Logo from './components/Logo';
import Search from './components/Search';

const Tab = createBottomTabNavigator();

const TabScreens = () => {
  const { getFilmData } = useContext(FilmsContext);

  // Ignore all log notifications
  // Just for presentation purposes
  LogBox.ignoreAllLogs();

  useEffect(() => {
    getFilmData();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === 'Home') {
            return <AntDesign name='home' size={24} color={color} />;
          } else {
            return <Fontisto name='film' size={24} color={color} />;
          }
        },
        headerLeft: () => <Logo />,
        headerTitle: 'Movie Tokens',
        headerRight: () => <Search />,
        headerStyle: {
          backgroundColor: '#fff',
          height: 100,
        },
        tabBarActiveTintColor: '#A16AE8',
        tabBarInactiveTintColor: '#bbb',
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='MyFilms' component={MyFilmsScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <TabScreens />
      </NavigationContainer>
    </Provider>
  );
}
