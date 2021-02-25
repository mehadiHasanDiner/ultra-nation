import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
const hero = [
  {name:'Salman', age: 50, MovieAct: 110},
  {name:'Sharukh', age: 55, MovieAct: 120},
  {name:'Amir', age: 60, MovieAct: 150},
  {name:'Ritick', age: 45, MovieAct: 90},
]

  return (
    <div className="App">
      <Movie></Movie>
      {
      hero.map(heroName => <Hero name = {heroName.name} age = {heroName.age} act={heroName.MovieAct}></Hero>)
      }
      <header className="App-header">
        <p>I am a react person</p>

      </header>
    </div>
  );
}

function MovieDisplay(props){
  return <h3>Movie I have acted: {props.movie}</h3>
}


function Movie(){
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count+1);
  return(
    <div>
      <button onClick={handleClick}> Movie Count</button>
      <h3>Movie Acted: {count}</h3>
      <MovieDisplay movie={count+3}></MovieDisplay>

    </div>
  )
}

function Hero(props) {
  const nayokStyle = {
    border: '2px solid gray',
    borderRadius: '10px',
    margin: '10px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Hero Name: {props.name}</h1>
      <h3>Hero Age : {props.age}</h3>
      <p>Movie Acted Before : {props.act}</p>
    </div>

  )
}

export default App;
