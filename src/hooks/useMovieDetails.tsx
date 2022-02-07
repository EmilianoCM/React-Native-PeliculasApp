import { useState } from 'react';

interface MovieDetails {
    isLoading:boolean,
    // movieFull:
    cast:any[]
}

export const useMovieDetails = () => {
  const[state, setState] = useState<MovieDetails>();
};
