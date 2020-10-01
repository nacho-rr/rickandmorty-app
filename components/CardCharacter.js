import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'

const CardCharacter = props => {
  
  const { character, navigation } = props;

  return (
    <View>
      {(character && character.name && character.image) && (
      <TouchableOpacity style={styles.containerList} onPress={ navigation && (() => 
        navigation.push('DetailScreen', { character: character })
      )}>
        <Image
          source={{uri: character.image}}
          style={styles.image}/>
        <Text style={styles.text} numberOfLines={2}>{character.name}</Text>
      </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default CardCharacter;