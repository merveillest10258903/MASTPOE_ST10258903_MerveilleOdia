import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for menu categories with images
  const categories = [
    {
      id: 1,
      title: 'Starters',
      image: require('../img/starter.jpg'), // Replace with your image path
    },
    {
      id: 2,
      title: 'Main Course',
      image: require('../img/main.jpg'), // Replace with your image path
    },
    {
      id: 3,
      title: 'Dessert',
      image: require('../img/dessert.jpg'), // Replace with your image path
    },
  ];

  // Filter categories based on the search query
  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Menu Items</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for Starters, Main Course, Dessert..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <ScrollView contentContainerStyle={styles.categoryContainer}>
        {filteredCategories.map(category => (
          <View key={category.id} style={styles.category}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.categoryTitle}>{category.title}</Text>
          </View>
        ))}
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
});

export default SearchScreen;
