import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from './screens/RootStackParams';
import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import AddMenuScreen from './screens/AddMenu';
import SearchScreen from './screens/Search';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  // Initial menu items state
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: '1', name: 'Grilled Chicken Salad', description: 'A healthy grilled chicken with fresh greens.', course: 'Starter', price: 20.99 },
    { id: '2', name: 'Beef Steak', description: 'Juicy grilled steak with garlic butter.', course: 'Main', price: 14.99 },
    { id: '3', name: 'Chocolate Lava Cake', description: 'Rich chocolate cake with molten center.', course: 'Dessert', price: 6.99 },
  ]);

  // Function to add a new menu item
  const addMenuItem = (newItem: MenuItem) => {
    setMenuItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main">
          {props => <HomeScreen {...props} menuItems={menuItems} addMenuItem={addMenuItem} />}
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
