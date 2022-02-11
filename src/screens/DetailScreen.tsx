import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigator';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
;


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route, navigation }:Props) => {
  
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  
  const {isLoading, movieFull, cast} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{uri}}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.title}</Text>
        <Text style={styles.title}>{movie.original_title}</Text>
      </View>
      
        {
          isLoading
            ? <ActivityIndicator size={35} color="grey" style={{marginTop:20}}/>
            : <MovieDetails movieFull={movieFull!} cast={cast}/>
        }

        {/* Boton Regresar */}
        
        <View style={styles.backButton}>  
        <TouchableOpacity
          onPress={ () => navigation.pop() }
        >
          <Icon
            name='arrow-back-outline'
            size={60}
            color="white"
          />
        </TouchableOpacity>
        
        
        </View>

        
      
    </ScrollView>
    
    );
};


const styles = StyleSheet.create({
  imageContainer:{
    width:'100%',
    height: screenHeight * 0.65,
    // overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
  },
  imageBorder:{
    flex:1,
    overflow:'hidden',
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
  },
  posterImage:{
      flex:1
    },
  marginContainer:{
    marginHorizontal:20,
    marginTop:20
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  },
  subtitle:{
    fontSize:16,
    opacity:0.8
  },

  backButton:{
    position:'absolute',
    zIndex:999,
    elevation:9,
    top:10,
    left:10
  }

})