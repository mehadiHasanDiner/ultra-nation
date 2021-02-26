import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => { 
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      // console.log(data);
      const names = data.map(country => country.name);
      // console.log(names);
    })
    .catch(error => console.log(console.error));
  }, [])

  return (
    <div className ="App">
      <h3>Country Loaded : {countries.length}</h3>
      {
        countries.map(country => <Country country ={country} key ={country.alpha3Code}></Country>)
        
      }

      <header>
        <p>I am a react person</p>

      </header>
    </div>
  );
}

export default App;
