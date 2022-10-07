// CORE
import React from 'react';
// PARTS
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=7e1c4674&s=marvel')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  searchMovies = (src) => {
    fetch(`http://www.omdbapi.com/?apikey=7e1c4674&s=${src}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main >
    )
  }
}

export default Main;