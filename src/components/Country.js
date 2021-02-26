import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle ={height:'50px'}
    // console.log(props.country)
    return (
        <div>
            <h4>This is = {name}</h4>
            <img style ={flagStyle} src={flag} alt=""/>
            <p>Population = {population}</p>
            <p>Region = {region}</p>
            <hr/>
        </div>
    );
};

export default Country;