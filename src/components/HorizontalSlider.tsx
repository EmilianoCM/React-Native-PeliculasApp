import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MovieCard } from './MovieCard';

interface Props {
    title?:string;
    movies:Movie[]
}

export const HorizontalSlider = ({title, movies}:Props) => {
  return (
    <View style={{
        height:(title) ? 260 : 220
      }}>
        {
            title && <Text style={{fontSize:25, fontWeight:'bold', marginLeft:10, marginBottom:5}}>{ title }</Text>
        }
          <FlatList
            data={movies}
            renderItem={ ( { item }: any) => (
              <MovieCard movie = { item } width={140} height={200}/>
            )}
            keyExtractor={ (item) => item.id.toString() }
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

      </View>
  );
};
