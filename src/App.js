import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const [albums, setAlbum] = useState([]);

 useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(res => res.json())
  .then(data => {
    let user = data.filter(x => x.userId > 9);
    console.log(user);
    setAlbum(user);
  })
 }, [])

  return (
    <div className="App">
      {
        albums.map(nayok =><Nayok name ={nayok.title} id = {nayok.id}></Nayok>)
      }

      <header className="App-header">
        <p>I am a react person</p>

      </header>
    </div>
  );
}



function Nayok(props) {
  const nayokStyle = {
    border: '2px solid gray',
    borderRadius: '10px',
    margin: '10px'
  }
  return (
    <div style={nayokStyle}>
      <h1>title: {props.name}</h1>
      <h3>completed : {props.id}</h3>
    </div>

  )
}

export default App;
