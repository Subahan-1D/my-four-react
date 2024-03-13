import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries,setCountries] = useState([])
    const [visitedCountries,setVisitedCountries] = useState([])
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country =>{
        console.log('add this your visited country ')
       const newVisitedCountry = [...visitedCountries,country]
       setVisitedCountries(newVisitedCountry);
    }

    return (
        <div >
            <h3>Countries : {countries.length} </h3>
            <div>
                <h5>Visited Countries :{visitedCountries.length} </h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}> {country.name.common}</li>)
                    }

                </ul>
            </div>
            <div className="display">
            {
                countries.map(country => <Country handleVisitedCountry ={handleVisitedCountry} key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;