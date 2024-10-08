import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../screens/RootStackParams'; // Adjust the path if necessary

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
type WelcomeScreenProps = {
  navigation: WelcomeScreenNavigationProp;
  route: RouteProp<RootStackParamList, 'Welcome'>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/cover.jpg')} // Ensure this image path is correct
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>Welcome to the Chef's Menu App!</Text>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Main', { menuItems: [], addMenuItem: () => {} })} // Provide dummy params
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1, resizeMode: 'cover', justifyContent: 'space-between' },
  overlay: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 },
  welcomeText: { fontSize: 40, color: 'white', textAlign: 'center', fontWeight: 'bold', fontStyle: 'italic' },
  bottomContainer: { justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30 },
  button: { backgroundColor: '#138086', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 17, fontStyle: 'normal' },
});

export default WelcomeScreen;
