import React from 'react';
import YouTube from 'react-youtube';
import { useParams, useNavigate } from 'react-router-dom';
import { moviesData } from '../Data';

const Trailer = ({movies}) => {
    const navigate = useNavigate();
const {id} = useParams();
console.log(id);

const movie = moviesData.find((movie)=>movie.id === +id)
console.log(movie)
console.log(movie.rating)

    // const opts = {
    //     height: '390',
    //     width: '640',
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 1,
    //     },
    //   };
    //   const onReady =(event)=> {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    //   }
  return (
    <div>
      <YouTube videoId={movie.trailerID} />;
      <p> {movie.description} </p>
      <button onClick={()=>navigate(-1)} > Back to movieList </button>
    </div>
  )
}

export default Trailer