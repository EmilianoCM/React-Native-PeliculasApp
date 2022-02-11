import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";

interface MovieState {
    nowPlaying:Movie[];
    popular:Movie[];
    topRated:Movie[];
    upcoming:Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    
    const [movieState, setMovieState] = useState<MovieState>({
        nowPlaying:[],
        popular:[],
        topRated:[],
        upcoming:[],
    });
   

    const getMovies = async () => {
    
       const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
       const popularPromise    = movieDB.get<MovieDBMoviesResponse>('/popular');
       const topRatedPromise   = movieDB.get<MovieDBMoviesResponse>('/top_rated');
       const upcomingPromise   = movieDB.get<MovieDBMoviesResponse>('/upcoming');
 
        const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise])
        setMovieState({
            nowPlaying:response[0].data.results,
            popular:response[1].data.results,
            topRated:response[2].data.results,
            upcoming:response[3].data.results,
        })
        setIsLoading(false);
    }  

    useEffect(() => {
       //Now Playing
        getMovies();
      }, []);
  
    return{
        ...movieState,
        isLoading
    };
};


export interface MovieFull {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: BelongsToCollection;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          string;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface BelongsToCollection {
    id:            number;
    name:          string;
    poster_path:   string;
    backdrop_path: string;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}
