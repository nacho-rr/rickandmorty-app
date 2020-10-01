import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { gql, useLazyQuery } from '@apollo/client';

import MainScreen from '../screens/MainScreen';
import { GET_CHARACTERS, GET_LOCATIONS, GET_EPISODES } from '../graphql/Query';

const Tab = createBottomTabNavigator();

const TabBotton = props => {

  const { navigation, route } = props;

  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('');
  const [dataCharacters, setDataCharacters] = useState(null);
  const [dataLocations, setDataLocations] = useState(null);
  const [dataEpisodes, setDataEpisodes] = useState(null);

  const [getCharacters, characterObject] = useLazyQuery(GET_CHARACTERS);
  const [getLocations, locationObject] = useLazyQuery(GET_LOCATIONS);
  const [getEpisodes, episodeObject] = useLazyQuery(GET_EPISODES);

  //update title on each header
  useEffect(() => {
    if(route.state){
      switch(route.state.index){
        case 0:
        navigation.setOptions({ title: 'Search Characters'});
          return;
        case 1:
          navigation.setOptions({ title: 'Search Locations'});
          return;
        case 2:
          navigation.setOptions({ title: 'Search Episodes'});
          return;
        default:
          return;
      }
    }
  }, [route]);

  //launches the search on each filter after typing at least 3 characters
  useEffect(() => {
    if(!route.state || route.state.index === 0){
      if((inputName.length >= 3) && (inputType.length >= 3)){
        getCharacters({
          variables: {
            filter: {
              name: inputName,
              type: inputType
            }
          }
        });
        return;
      };
  
      if(inputName.length >= 3){
        getCharacters({
          variables: {
            filter: {
              name: inputName
            }
          }
        });
        return;
      };
      
      if(inputType.length >= 3){
        getCharacters({
          variables: {
            filter: {
              type: inputType
            }
          }
        });
        return;
      }
      return;
    }

    if(route.state && route.state.index === 1){
      if((inputName.length >= 3) && (inputType.length >= 3)){
        getLocations({
          variables: {
            filter: {
              name: inputName,
              type: inputType
            }
          }
        });
        return;
      };
  
      if(inputName.length >= 3){
        getLocations({
          variables: {
            filter: {
              name: inputName
            }
          }
        });
        return;
      };
      
      if(inputType.length >= 3){
        getLocations({
          variables: {
            filter: {
              type: inputType
            }
          }
        });
        return;
      }
      return;
    }

    if(route.state && route.state.index === 2){
      if((inputName.length >= 3) && (inputType.length >= 3)){
        getEpisodes({
          variables: {
            filter: {
              name: inputName,
              episode: inputType
            }
          }
        });
        return;
      };
  
      if(inputName.length >= 3){
        getEpisodes({
          variables: {
            filter: {
              name: inputName
            }
          }
        });
        return;
      };
      
      if(inputType.length >= 3){
        getEpisodes({
          variables: {
            filter: {
              episode: inputType
            }
          }
        });
        return;
      }
      return;
    }
  }, [inputName, inputType]);

  //update state with the data from graphql
  useEffect(() => {
    setDataCharacters(characterObject)
  }, [characterObject]);

  useEffect(() => {
    setDataLocations(locationObject)
  }, [locationObject]);
  
  useEffect(() => {
    setDataEpisodes(episodeObject)
  }, [episodeObject]);

  const inputs = {
    name: inputName,
    setName: setInputName,
    type: inputType,
    setType: setInputType,
    setCharacters: setDataCharacters,
    setLocations: setDataLocations,
    setEpisodes: setDataEpisodes
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: '#38b2ac',
        activeBackgroundColor: '#2c7a7b',
        inactiveTintColor: '#fff',
        activeTintColor: '#fff',
        labelStyle: {
          fontSize: 18
        }
      }}
      initialRouteName="Characters"
      backBehavior="history"
    >
      <Tab.Screen name="Characters" >
        {props => <MainScreen {...props } inputs={inputs} characters={dataCharacters} />}
      </Tab.Screen>
      <Tab.Screen name="Locations" >
        {props => <MainScreen {...props} inputs={inputs} locations={dataLocations} />}
      </Tab.Screen>
      <Tab.Screen name="Episodes" >
        {props => <MainScreen {...props} inputs={inputs} episodes={dataEpisodes}  />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabBotton;