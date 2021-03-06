import React from 'react';
import { ActivityIndicator, Dimensions, Text, View, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';



const {width:windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  
  const { nowPlaying,popular,topRated,upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  
  if (isLoading) {
      return (
        <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
          <ActivityIndicator color="red" size={100} />
        </View>
      )
  }
  
  return (
    <ScrollView>
       <View style={{marginTop: top + 20 }}>
          {/* Carrusel Principal */}
          <View style={{height:440}}>
            <Carousel
              data={nowPlaying!}
              renderItem={ ( { item }: any) => <MovieCard movie = { item }/>}
              sliderWidth={ windowWidth }
              itemWidth={300}
              inactiveSlideOpacity={0.9}
            />
          </View>
          {/* Peliculas populares */}

          <HorizontalSlider title="Populares" movies={popular!}/>
          <HorizontalSlider title="Mejores Peliculas" movies={topRated!}/>
          <HorizontalSlider title="Proximamente" movies={upcoming!}/>
      </View>
    </ScrollView> 
    );
};
