import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

var style = {
  color: "red",
  backgroundColor: "yellow"
}

function App() {


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
  // const personStyle = {
  //   border: '2px solid red',
  //   margin: '10px'
  // } 
  console.log(props);
  return (
    <div style = {{border:'2px solid red', margin:'5px', padding:'5px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Title: Hero of {props.naiyaka}</h3>
    </div>
  )

}

export default App;
