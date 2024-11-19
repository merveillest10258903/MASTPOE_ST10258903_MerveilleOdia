import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { MenuItem } from './RootStackParams';
import { Picker } from '@react-native-picker/picker';

type AddMenuScreenProps = {
  navigation: any; // Adjust the type as necessary for navigation
  addMenuItem: (newItem: MenuItem) => void;
};

const AddMenuScreen: React.FC<AddMenuScreenProps> = ({ navigation, addMenuItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    const newItem: MenuItem = {
      id: Math.random().toString(), // Generate a unique ID
      name,
      description,
      course,
      price: parseFloat(price),
    };
    addMenuItem(newItem);
    navigation.goBack(); // Navigate back after adding
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Text style={styles.label}>Course:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a course" value="" />
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>

      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Add Menu Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  label: { fontSize: 18, marginBottom: 10 },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    overflow: 'hidden', // Ensure the picker fits well within the container
  },
  picker: {
    width: '100%',
  },
});

export default AddMenuScreen;
