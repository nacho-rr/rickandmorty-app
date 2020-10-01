import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CardText = props => {
  
  const { navigation, location, episode } = props;

  return (
    <View>
      {location && (
        <TouchableOpacity style={styles.containerList} onPress={() => 
          navigation.navigate('DetailScreen', { location: location })
        }>
          <Text style={styles.title} numberOfLines={2}>{location.name}</Text>
          <Text style={styles.text} numberOfLines={2}>{location.dimension}</Text>
        </TouchableOpacity>
      )}
      {episode && (
        <TouchableOpacity style={styles.containerList} onPress={() => 
          navigation.navigate('DetailScreen', { episode: episode })
        }>
          <Text style={styles.title} numberOfLines={2}>{episode.name}</Text>
          <Text style={styles.text} numberOfLines={2}>{episode.episode}</Text>
        </TouchableOpacity>
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  containerList: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    flex: 1,
    fontSize: 15
  }
});

export default CardText;