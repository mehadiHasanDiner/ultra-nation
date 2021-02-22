import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

var style = {
  color: "red",
  backgroundColor: "yellow"
}

function App() {

  const naikoys = ['Manna', 'Anwar Hossain', 'Siam', 'Jafor Iqbal']

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person name="Rubel" naiyaka = "Moushumi"></Person>
        <Person name="Manna" naiyaka = "Moushumi"></Person>
        <Person name="Eliash K" naiyaka = "Champa"></Person>
        <Person name="Arefin" naiyaka = "pori"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  } 
  console.log(props);
  return (
    <div style ={personStyle}>
      <h3>Name of the Nayok : {props.name}</h3>
      <p>Naiyka of : {props.naiyaka}</p>
    </div>
  )

}

export default App;
