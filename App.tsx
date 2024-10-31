import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from './screens/RootStackParams';
import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import AddMenuScreen from './screens/AddMenu';
import SearchScreen from './screens/Search';

const Stack = createStackNavigator<RootStackParamList>(); // Use your RootStackParamList type

const App = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    // Your initial menu items...
  ]);

  // Function to add a new menu item
  const addMenuItem = (newItem: MenuItem) => {
    setMenuItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to delete a menu item
  const deleteMenuItem = (id: string) => {
    setMenuItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main">
          {props => <HomeScreen {...props} menuItems={menuItems} addMenuItem={addMenuItem} deleteMenuItem={deleteMenuItem} />}
        </Stack.Screen>
        <Stack.Screen name="AddMenu">
          {props => <AddMenuScreen {...props} addMenuItem={addMenuItem} />}
        </Stack.Screen>
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
