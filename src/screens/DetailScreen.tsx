import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigator';

import Icon from 'react-native-vector-icons/Ionicons';
;


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route }:Props) => {
  
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  
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
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.subtitle}>{movie.title}</Text>
      </View>
      <View style={styles.marginContainer}>
        <Icon
          name="star-outline"
          color="grey"
          size={20}
        />
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

})