import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import DetailCharacter from '../components/DetailCharacter';
import DetailText from '../components/DetailText';

const DetailScreen = props => {
  
  const { navigation, route: { params: { character, location, episode }} } = props;
  
  useEffect(() => {
    if(character){
      navigation.setOptions({title: character.name});
      return;
    };

    if(location){
      navigation.setOptions({title: location.name});
      return;
    };

    if(episode){
      navigation.setOptions({title: episode.name});
      return;
    };
  },[])

  return (
    <ScrollView>
      {character && <DetailCharacter character={character} />}
      {location && <DetailText location={location} navigation={navigation} />}
      {episode && <DetailText episode={episode} navigation={navigation} />}
    </ScrollView>
  );
};

export default DetailScreen;