import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ActivityIndicator, FlatList } from 'react-native';

import CardCharacter from '../components/CardCharacter';
import CardText from '../components/CardText';

const MainScreen = props => {

  const { characters, locations, episodes, inputs, navigation, route } = props;

  const handleReset = () => {
    inputs.setName('');
    inputs.setType('');
    
    if(route.name === 'Characters'){
      inputs.setCharacters(null);
      return
    };
    
    if(route.name === 'Locations'){
      inputs.setLocations(null);
      return
    };
    
    if(route.name === 'Episodes'){
      inputs.setEpisodes(null);
      return
    };
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search by name"
          style={styles.input}
          value={inputs.name}
          onChangeText={e => inputs.setName(e)}
        />
        <TextInput
          placeholder="Search by type/episode"
          style={styles.input}
          value={inputs.type}
          onChangeText={e => inputs.setType(e)}
        />
        <TouchableOpacity style={styles.containerButton} onPress={handleReset}>
          <Text style={styles.text}>RESET SEARCH</Text>
        </TouchableOpacity>
      </View>
        
      {(characters && characters.data) && <FlatList
        data={characters.data.characters.results}
        renderItem={({ item }) => <CardCharacter character={item} navigation={navigation} />}
        keyExtractor={item => item.id}
        onEndReachedThreshold={5}
        onEndReached={() => {
          if(!characters.data.characters.info.next) return;
          characters.fetchMore({
            variables: {
              filter: characters.variables.filter,
              page: characters.data.characters.info.next
            },  
            updateQuery: (prev, { fetchMoreResult }) => {
              if(!fetchMoreResult) return prev;
              return {
                characters: {
                  __typename: fetchMoreResult.characters.__typename,
                  info: fetchMoreResult.characters.info,
                  results: [ ...prev.characters.results, ...fetchMoreResult.characters.results ]
                }
              }
            }
          })
        }}
      />}

      {(locations && locations.data) && <FlatList
        data={locations.data.locations.results}
        renderItem={({ item }) => <CardText location={item} navigation={navigation} />}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if(!locations.data.locations.info.next) return;
          locations.fetchMore({
            variables: {
              filter: locations.variables.filter,
              page: locations.data.locations.info.next
            },  
            updateQuery: (prev, { fetchMoreResult, ...rest }) => {
              if(!fetchMoreResult) return prev;
              return {
                locations: {
                  __typename: fetchMoreResult.locations.__typename,
                  info: fetchMoreResult.locations.info,
                  results: [ ...prev.locations.results, ...fetchMoreResult.locations.results ]
                }
              }
            }
          })
        }}
      />}

      {(episodes && episodes.data) && <FlatList
        data={episodes.data.episodes.results}
        renderItem={({ item }) => <CardText episode={item} navigation={navigation} />}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if(!episodes.data.episodes.info.next) return;
          episodes.fetchMore({
            variables: {
              filter: episodes.variables.filter,
              page: episodes.data.episodes.info.next
            },  
            updateQuery: (prev, { fetchMoreResult, ...rest }) => {
              if(!fetchMoreResult) return prev;
              return {
                episodes: {
                  __typename: fetchMoreResult.episodes.__typename,
                  info: fetchMoreResult.episodes.info,
                  results: [ ...prev.episodes.results, ...fetchMoreResult.episodes.results ]
                }
              }
            }
          })
        }}
      />}

      {((characters && characters.loading) || (locations && locations.loading) || (episodes && episodes.loading)) && (<View style={styles.center}><ActivityIndicator size="large" color='#555'/></View>)}
      
      {((characters && characters.error) || (locations && locations.error) || (episodes && episodes.error)) && (<View style={styles.center}><Text style={styles.error}>There are no results, try again</Text></View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7fafc'
  },
  container: {
    marginVertical: 1
  },
  input: {
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    fontSize: 16
  },
  containerButton: {
    backgroundColor: '#38b2ac',
    marginHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  center: {
    justifyContent: 'center',
    paddingVertical: 20
  },
  error: {
    marginHorizontal: 20,
    fontSize: 16
  }
});

export default MainScreen;