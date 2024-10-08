// screens/Home.tsx
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from './RootStackParams';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
  menuItems: MenuItem[];
  addMenuItem: (newItem: MenuItem) => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, menuItems, addMenuItem }) => {
  // Calculate the total number of menu items
  const totalMenuItems = menuItems.length;

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* Display total number of menu items */}
          <Text style={styles.totalMenuText}>Total Menu Items: {totalMenuItems}</Text>

          {/* Menu List */}
          <Text style={styles.header}>Menu</Text>
          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.menuItem}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>{item.course}</Text>
                <Text>R{item.price.toFixed(2)}</Text>
              </View>
            )}
          />
          
          {/* Button to navigate to the Add Menu screen */}
          <Button
            title="Add Menu Item"
            onPress={() => navigation.navigate('AddMenu', { addMenuItem })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  menuItem: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  totalMenuText: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }, // New style for total menu items
  safeView: { flex: 1 },
  scrollView: { marginHorizontal: 21 },
});

export default HomeScreen;
