import { useState } from 'react';
import './Country.css'
const Country = ({country ,handleVisitedCountry}) => {
    console.log(country)
    const {name,flags,population,capital,fifa,area,cca3} = country;

    const [visited,setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}> 
            <h3 style={{color : visited ? 'red' : 'white'}}>Name :{name?.official}</h3>
            <p>Common : {name.common}</p>
           <img src={flags.png} alt="" />
           <p>Population : {population}</p>
           <h5>Capital : {capital}</h5>
           <p>Fifa :{fifa}</p>
           <p>Area : {area}</p>
           <p>Code : {cca3}</p>
           <button onClick={()=>handleVisitedCountry(country)}> Mark Visited</button>
           <button onClick={handleVisited}>{visited ?'Visited' : 'Going'}</button>
           {visited ?  ' I have visited ' : 'I Want A Visit' }
        </div>
    );
};

export default Country;