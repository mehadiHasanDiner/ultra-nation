import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

var style = {
  color: "red",
  backgroundColor: "yellow"
}

function App() {

  const products = [
    {name:'Photoshop', price: '$90.99'},
    {name:'Illustrator', price: '$60.99'},
    {name:'PDF Reader', price: '$6.99'},
    {name:'Adobe Primier', price: '$250.99'}
  ]
const nayoks = ['Razzak', 'Bappi', 'Bappi', 'Shuvo', 'Sakib', 'Omor'];

  const productName = products.map(product => product.name);
  console.log(productName);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        {/* <Product name ={products[0].name} Price={products[0].Price}></Product>         */}
        <ul>{
              nayoks.map(nayok => <li>{nayok}</li>)
              // nayoks.map(nayok => <li></li>)
          }

          {
              products.map(product=> <li>{product.name}</li>)
          }

        
            {/* <li>{nayoks[0].toUpperCase()}</li>
            <li>{nayoks[1].toUpperCase()}</li>
            <li>{nayoks[2].toUpperCase()}</li>
            <li>{nayoks[3].toUpperCase()}</li> */}
        </ul>

         {
            products.map(product=> <Product product={product}></Product>)
          }
        {/* <Product product = {products[0]}></Product>        
        <Product product = {products[1]}></Product>         */}
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightpink',
    height: '220px',
    width:'250px',
    float: 'left'
  }
  // const {name, price} = props.product;
  // const {name, price} = {name:'Photoshop', Price: '$90.99'};
  const {name, price} = props.product;
  console.log(props);
  return(
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h5> Price: {price}</h5>
      <button>Buy now</button>
    </div>
  )
}



export default App;
