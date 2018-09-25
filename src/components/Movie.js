import React from 'react';

class Movie extends React.Component{
  // constructor (){
  //   super();
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick(event, movie){
    // event.preventDefault();
    alert(movie.name);
  }

  render(){
      // const movieHTML = this.props.movies.map(movie=><li key={movie.id}>My favourite film is {movie.name} and it was released in {movie.year}.</li>);
    return (
      <ul>
        {this.props.movies.map(movie=>
        (<li key={movie.id}>My favourite film is {movie.name} and it was released in {movie.year}. <button onClick={event => this.handleClick(event, movie)}>Click me</button></li>))}
      </ul> 
      /* <div>{this.props.title}<button onClick={this.handleClick}>Click me</button></div> */
    );
  }
}

export default Movie;

      /* <ul>
        {this.props.movies.map(movie=>
        (<li key={movie.id}>My favourite film is {movie.name} and it was released in {movie.year}.
         
          </li>))}
      </ul> */