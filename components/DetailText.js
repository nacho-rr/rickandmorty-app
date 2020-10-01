import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CardCharacter from './CardCharacter';

const DetailText = props => {
  
  const { location, episode, navigation } = props;

  return (
    <ScrollView style={styles.screen}>
      {location && (
        <View>
          <Text style={styles.title} numberOfLines={2}>{location.name}</Text>
          <Text style={styles.text} numberOfLines={2}>Type: {location.type}</Text>
          <Text style={styles.text} numberOfLines={2}>Dimension: {location.dimension}</Text>
          <Text style={{...styles.title, ...styles.subTitle}}>Characters:</Text>
          <View>
            {location.residents.map((character, index) => {
              if(index <= 4) 
              return <CardCharacter key={character.id} character={character} navigation={navigation} />
            })}
          </View>
        </View>
      )}
      {episode && (
        <View>
          <Text style={styles.title} numberOfLines={2}>{episode.name}</Text>
          <Text style={styles.text} numberOfLines={2}>Episode: {episode.episode}</Text>
          <Text style={styles.text} numberOfLines={2}>Release: {episode.air_date}:</Text>
          <Text style={{...styles.title, ...styles.subTitle}}>Characters:</Text>
          <View>
            {episode.characters.map((character, index) => {
              if(index <= 4) 
              return <CardCharacter key={character.id} character={character} navigation={navigation} />
            })}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center'
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 5
  },
  subTitle: {
    textAlign: 'left',
    marginHorizontal: 10,
    marginVertical: 5
  }
});

export default DetailText;