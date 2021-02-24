import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

var style = {
  color: "red",
  backgroundColor: "yellow"
}

function App() {
  const naikoys = ['Manna', 'Anwar Hossain', 'Siam', 'Jafor Iqbal'];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name ={naikoys[0]} age = "56"></Nayok>
      <Nayok name ={naikoys[1]}></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <p>I am a react person</p>

      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count+1);
  console.log(handleClick);
  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of Movie : {count} </h3>
      <MovieDisplay movies = {count}></MovieDisplay>
      <MovieDisplay movies = {count+3}></MovieDisplay>
      <MovieDisplay movies = {count+7}></MovieDisplay>
      <MovieDisplay movies = {count+5}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return(
    <div>
      <h4>Movies I have acted : {props.movies} </h4>
    </div>
  )
}

function Nayok(props){
  const nayokStyle ={
    border:'2px solid gray',
    borderRadius: '10px',
    margin: '10px'
  }
  return(
    <div style={nayokStyle}>
      <h1>Ami Nayok Hobo: {props.name}</h1>
      <h3>I have done 5 movie : {props.age}</h3>
    </div>

  )
}

export default App;
