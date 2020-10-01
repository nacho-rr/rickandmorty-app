import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const DetailCharacter = props => {
  
  const { character } = props;

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image source={{uri: character.image}} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>{character.name}</Text>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text} numberOfLines={2}>Type: {character.type}</Text>
        <Text style={styles.text} numberOfLines={2}>Genre: {character.gender}</Text>
        <Text style={styles.text} numberOfLines={2}>Specie: {character.species}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
screen: {
  flex: 1,
  flexDirection: 'column'
},
container: {
  alignItems: 'center',
  margin: 5
},
image: {
  width: 300,
  height: 275,
  borderRadius: 20
},
title: {
  flex: 1,
  fontSize: 20,
  marginTop: 5,
  fontWeight: 'bold',
  textAlign: 'center'
},
containerText: {
  marginHorizontal: 20
},
text: {
  flex: 1,
  fontSize: 15,
  marginVertical: 5
}});

export default DetailCharacter;