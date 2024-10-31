import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from './RootStackParams';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
  menuItems: MenuItem[];
  addMenuItem: (newItem: MenuItem) => void;
  deleteMenuItem: (id: string) => void; // Add this prop for deleting items
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, menuItems, addMenuItem, deleteMenuItem }) => {
  const totalMenuItems = menuItems.length;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.totalMenuText}>Total Menu Items: {totalMenuItems}</Text>
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
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteMenuItem(item.id)} // Call the delete function
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('AddMenu', { menuItems, addMenuItem })}
          >
            <Text style={styles.buttonText}>Add Menu Item</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  safeView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  totalMenuText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Red color for delete
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#007bff', // Blue color for add
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
});

export default HomeScreen;
