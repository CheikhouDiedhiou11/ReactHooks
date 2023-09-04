import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'MR ROBOT',
      description: 'film de cybersécurité Lh istoire de "Mr. Robot" se concentre sur Elliot Alderson, un programmeur informatique talentueux, mais socialement déconnecté, qui travaille pour une entreprise de cybersécurit ',
      posterURL: 'https://i1.sndcdn.com/artworks-000120543683-u7i9ps-t500x500.jpg',
      rating: 4.5,
    },
    // Ajouter plus de films ici
    {
      title: 'Prison Break',
      description: '«L histoire de Prison Break  tourne autour de Michael Scofield interprété par Wentworth Miller, qui commet un braquage de banque afin dêtre emprisonné' ,
      posterURL: 'https://th.bing.com/th/id/R.3c2de9f09e57c73dbc1194c46d3dd142?rik=ONX4bpyCSOeCwg&riu=http%3a%2f%2fmovie-serials.yolasite.com%2fresources%2fprisonbreak.jpg&ehk=QxxwZsQDS1b%2fq7uD6QkvV5GSBjBLamsjIkGL1sH4Hto%3d&risl=&pid=ImgRaw&r=0',
      rating: 3,
    },
    {
      title: 'Territoire des loops',
      description: 'Le Territoire des loups est un film américain réalisé par Joe Carnahan et sorti en 2012. Le film raconte l’histoire de John Ottway, ' ,
      posterURL: 'https://th.bing.com/th/id/R.46479ab9180d088bbc4421c09dbce610?rik=zevasC6XqAbzCg&riu=http%3a%2f%2fwww.notrecinema.net%2fimages%2fcache%2fle-territoire-des-loups-wallpaper_374048_28182.jpg&ehk=AFwoMf6hXyTnc8B2QsOOBWnZOWFO75qwtaJdKr7tyJU%3d&risl=&pid=ImgRaw&r=0',
      rating:2.4,
    },
  ]);

  const [filters, setFilters] = useState({
    title: '',
    rating: '',
  });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (filters.rating === '' || movie.rating >= parseFloat(filters.rating))
    );
  });

  return (
    <div className="App">
      <h1>Bibliothèque des films</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          handleAddMovie({
            title: 'gridiron gang ',
            description: 'Gridiron Gang est un film américain sorti en 2006, réalisé par Phil Joanou. Il s agit d un drame sportif basé sur des événements .',
            posterURL: 'https://th.bing.com/th/id/OIP.-9LddL2LrjiW8IeEPc_DLAHaEK?pid=ImgDet&rs=1',
            rating: 5,
            
            
          })
        }
      >
        
         <h3>AJOUTER UN NOUVEAU FILM</h3>
      </button>
    </div>
  );
}

export default App;
