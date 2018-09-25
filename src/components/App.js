import React from 'react';
import Me from './Me.js';
import Movie from './Movie.js';
import Person from './Person.js';

const film = [{id:1, name:"Family Stone",year:2005}, {id:2, name:"The Matrix", year:1995}, {id:3, name:"American Beauty", year:1999}];

class App extends React.Component{
  render(){
    return (
      <div>
        <h1 className="main-heading">Hello, world!</h1>
        <p>Welcome to our first React component</p>
        <Me />
        <Movie movies={film}/>
        <Person />
      </div>
    );
  }
}

export default App;

