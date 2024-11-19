

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from './RootStackParams';



// Define the type for a category item
interface Category {
  id: number;
  title: string;
  image: any; // Use `ImageSourcePropType` if you want stricter typing
}


type SearchScreenProps = {
  navigation: any; // Adjust the type as necessary for navigation
  addMenuItem: (newItem: MenuItem) => void;
};



const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sample data for menu categories with unique IDs
  const categories: Category[] = [
    { id: 1, title: 'Starters', image: require('../img/starter.jpg') },
    { id: 2, title: 'Starters', image: require('../img/starter1.jpg') },
    { id: 3, title: 'Starters', image: require('../img/starter3.jpg') },
    { id: 4, title: 'Starters', image: require('../img/starters5.jpg') },
    { id: 5, title: 'Main Course', image: require('../img/main.jpg') },
    { id: 6, title: 'Main Course', image: require('../img/supper2.jpg') },
    { id: 7, title: 'Main Course', image: require('../img/supper3.jpg') },
    { id: 8, title: 'Main Course', image: require('../img/supper4.jpg') },
    { id: 9, title: 'Main Course', image: require('../img/supper5.jpg') },
    { id: 10, title: 'Dessert', image: require('../img/dessert.jpg') },
    { id: 11, title: 'Dessert', image: require('../img/dessert1.jpg') },
    { id: 12, title: 'Dessert', image: require('../img/dessert2.jpg') },
    { id: 13, title: 'Dessert', image: require('../img/dessert3.jpg') },
  ];

  // Filter categories based on the search query
  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Placeholder function for adding menu items
  const handleAddItem = () => {
    console.log('Add Menu Item button clicked!');
    // Implement functionality as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Menu Items</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a category..."
        value={searchQuery}
        onChangeText={(text: string) => setSearchQuery(text)}
      />
      <ScrollView contentContainerStyle={styles.categoryContainer}>
        {filteredCategories.map(category => (
          <View key={category.id} style={styles.category}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.categoryTitle}>{category.title}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.buttonText}>Add Menu Item</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  categoryContainer: {
    alignItems: 'center',
  },
  category: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  categoryTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SearchScreen;
