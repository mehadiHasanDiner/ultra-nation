import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useState } from 'react';

var style = {
  color: "red",
  backgroundColor: "yellow"
}

function App() {

  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Adobe Primier', price: '$250.99' }
  ]
  const nayoks = ['Razzak', 'Bappi', 'Bappi', 'Shuvo', 'Sakib', 'Omor'];

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Count></Count>

      </header>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}



// function Count() {
//   const [count, setCount] = useState(10);
//   const handleIncrease = () => {
//     const newCount = count + 1;
//     setCount(newCount);
//   };
  
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   )
// }

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightpink',
    height: '220px',
    width: '250px',
    float: 'left'
  }
  // const {name, price} = props.product;
  // const {name, price} = {name:'Photoshop', Price: '$90.99'};
  const { name, price } = props.product;
  console.log(props);
  return (
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h5> Price: {price}</h5>
      <button>Buy now</button>
    </div>
  )
}



export default App;
