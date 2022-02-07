import React from 'react';

import { CommonActions, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    movie:Movie;
    height?:number;
    width?:number;
}

export const MovieCard = ({ movie, height = 420, width = 300}:Props) => {
  
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  
  const navigation = useNavigation();

  
    return (
      <TouchableOpacity 
        onPress={ () => navigation.dispatch(CommonActions.navigate('DetailScreen', movie)) }
        activeOpacity={0.8}
        style={{
          width,
          height,
          marginHorizontal:2,
          paddingBottom:20,
          paddingHorizontal:7,
          
      }}>
          <View style={style.imageContainer}>
            <Image
              source={{
                  uri
              }}
              style={style.image}
            />
          </View>
          
      </TouchableOpacity>
  );
};


const style = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18,
    },
    imageContainer:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
});