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
  deleteMenuItem: (id: string) => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, menuItems, addMenuItem, deleteMenuItem }) => {
  const totalMenuItems = menuItems.length;

  // Helper function to calculate average price
  const calculateAveragePrice = (course: string) => {
    const itemsByCourse = menuItems.filter(
      (item) => item.course.trim().toLowerCase() === course.trim().toLowerCase()
    );

    if (itemsByCourse.length === 0) {
      console.log(`No items found for course: ${course}`); // Debugging log
      return '0.00';
    }

    const totalCoursePrice = itemsByCourse.reduce((sum, item) => sum + item.price, 0);
    console.log(`Course: ${course}, Total Price: ${totalCoursePrice}, Items: ${itemsByCourse.length}`); // Debugging log
    return (totalCoursePrice / itemsByCourse.length).toFixed(2);
  };

  // Calculating average prices for different courses
  const averageStarterPrice = calculateAveragePrice('Starters');
  const averageMainCoursePrice = calculateAveragePrice('Main Course');
  const averageDessertPrice = calculateAveragePrice('Dessert');

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <ScrollView style={styles.scrollView}>

        <View style={styles.mainPicture}> 
                        <Image style={styles.BannerImage} source={require('../img/logo1.jpg')} resizeMode='contain'/> 
                    </View>

          <Text style={styles.totalMenuText}>Total Menu Items: {totalMenuItems}</Text>
          <Text style={styles.header}>Menu</Text>



          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.menuItem}>
                <Text style={styles.menuItemText}>{item.name}</Text>
                <Text style={styles.menuItemText}>{item.description}</Text>
                <Text style={styles.menuItemText}>{item.course}</Text>
                <Text style={styles.menuItemText}>R{item.price.toFixed(2)}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteMenuItem(item.id)}
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
            <Text style={styles.buttonText}>Add Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => navigation.navigate('Search')}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>

          <View style={styles.averagePriceContainer}>
            <Text style={styles.averagePriceText}>Average Prices by Course:</Text>
            <Text style={styles.averagePriceText}>Starters: R{averageStarterPrice}</Text>
            <Text style={styles.averagePriceText}>Main Course: R{averageMainCoursePrice}</Text>
            <Text style={styles.averagePriceText}>Dessert: R{averageDessertPrice}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  safeView: { flex: 1 },
  scrollView: { flexGrow: 1 },
  totalMenuText: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  menuItem: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  menuItemText: { fontSize: 16, marginBottom: 5 },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },


  buttonText: { color: '#ffffff', textAlign: 'center', fontWeight: 'bold'},
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    
    alignItems: 'center',
   
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  averagePriceContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 5,
  },
  averagePriceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },


  mainPicture: {
    alignItems: 'center', // Center the image horizontally
    marginBottom: 20, // Add spacing below the image
  },
  BannerImage: {
    width: '90%', // Adjust width as a percentage of the screen
    height: 150, // Set a fixed height for consistency
    borderRadius: 10, // Add rounded corners
    borderWidth: 2, // Optional border
    borderColor: '#007bff', // Border color to match buttons
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // Elevation for Android shadow
  },


});

export default HomeScreen;
