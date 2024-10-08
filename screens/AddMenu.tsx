import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';
import { Picker } from '@react-native-picker/picker';

type AddMenuScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AddMenu'>;
  route: any; // add this line to avoid type errors
  addMenuItem: (newItem: { id: string; name: string; description: string; course: string; price: number }) => void;
};

const AddMenuScreen: React.FC<AddMenuScreenProps> = ({ navigation, addMenuItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(''); // Default to an empty string
  const [price, setPrice] = useState('');

  const handleAddMenuItem = () => {
    const newItem = {
      id: Math.random().toString(), // Unique ID generation
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
      <Text style={styles.header}>Add Menu Item</Text>
      <TextInput
        placeholder="Name Of Dish"
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
      
      {/* dropdown for course selection*/}
      <Text style={styles.label}>Course:</Text>
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
      {/* Input price for*/}
      <TextInput
        placeholder="Price Of Dish"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add Item" onPress={handleAddMenuItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 15 },
  label: { fontSize: 18, marginBottom: 10 },
  picker: { borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginBottom: 15 },
});

export default AddMenuScreen;
