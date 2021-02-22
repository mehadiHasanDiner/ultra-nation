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
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person() {
  // const personStyle = {
  //   border: '2px solid red',
  //   margin: '10px'
  // } 
  return (
    <div style = {{border:'2px solid red', margin:'5px', padding:'5px'}}>
      <h1>Name: Shakib al Hasan</h1>
      <h3>Title: Hero</h3>
    </div>
  )

}

export default App;
