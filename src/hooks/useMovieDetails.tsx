import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from './useMovies';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading:boolean,
    movieFull?:MovieFull,
    cast:Cast[]
}

export const useMovieDetails = ( movieId:number ) => {
  const[state, setState] = useState<MovieDetails>({
    //Estado Inicial 
      isLoading:true,
      movieFull:undefined,
      cast:[]
  });

  const getMovieDetails = async () => {

      const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
      const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);
      //Desestructuracion de las promesas
      const [ movieDetailsResp, castPrimiseResp ] = await Promise.all([ movieDetailsPromise, castPromise ]);

      setState({
          isLoading:false,
          movieFull:movieDetailsResp.data,
          cast:castPrimiseResp.data.cast
      })
  }

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state
  };
  
}
