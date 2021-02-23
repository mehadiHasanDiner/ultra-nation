import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

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
        <Users></Users>

      </header>
    </div>
  );
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic User : {users.length}</h3>
      <ul>
        {
          users.map(postId =><li style ={{textAlign:'left'}}>{postId.email}</li>)
        }
      </ul>
    </div>
  )
}

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
