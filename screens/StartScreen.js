import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const StartScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.containerText}>  
        <Text style={styles.title}>REACT NATIVE CHALLENGE</Text>
        <Text style={styles.text}>José Ruiz</Text>
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/images/rick_and_morty_bg.png')} style={styles.image} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.replace('MainScreen')}>
          <Text style={styles.buttonText}>ENTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  containerText: {
    alignItems: 'center',
    marginTop: 20
  },
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20
  },
  image: {
    width: 350,
    height: 350,
  },
  button: {
    backgroundColor: '#38b2ac',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 5,
    overflow: 'hidden'
  },
  buttonText: {
    color: 'white',
    fontSize: 15
  }
});

export default StartScreen;