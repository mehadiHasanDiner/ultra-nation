import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

var style = {
  color: "red",
  backgroundColor:"yellow"
}

function App() {
  var person1 ={
    name: "আমার নাম মেহেদী",
    age: "আমার বয়স ৩২",
    salary: 500
  }
  var person2 ={
    name: "আমার নাম লিমা",
    age: "আমার বয়স 20",
    salary: 100
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1>My heading</h1>
        <p>My first React Paragraph</p>
        <h4 className="" style={style}>{person1.name +". "+ person1.age + ". Salary: " + person1.salary}</h4>
        <p style ={{color:'green', background:'yellow', fontWeight:'bold'}}>{person2.name +". "+ person2.age + ". Salary: " + person2.salary}</p>
      </header>
    </div>
  );
}

export default App;
