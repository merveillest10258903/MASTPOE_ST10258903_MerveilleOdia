import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { MenuItem } from './RootStackParams';

type AddMenuScreenProps = {
  navigation: any; // adjust the type as necessary
  addMenuItem: (newItem: MenuItem) => void;
};

const AddMenuScreen: React.FC<AddMenuScreenProps> = ({ navigation, addMenuItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    const newItem: MenuItem = {
      id: Math.random().toString(), // generate a unique ID
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
      <TextInput
        placeholder="Course"
        value={course}
        onChangeText={setCourse}
        style={styles.input}
      />
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
  },
});

export default AddMenuScreen;
