import React,{useContext, useState} from 'react';
import axios from 'axios';
import AppContext from "./AppContext";
import './Styles.css';

function Characters() {
    const context = useContext(AppContext);
    return (
      <div className='characters'>
          {context.data.get.results.map(elem=>{return <Character key={elem.id} photo={elem.image} name={elem.name} status={elem.status} species={elem.species} gender={elem.gender} url={elem.location.url}/>})}
      </div>
    );
}

function Character(props){
    const {photo, name, status, species, gender, url} = props;
    const [planet, setPlanet] = useState({name:null,dimension:null});

    const getPlanet = (url) => {
        axios.get(url)
        .then(response => {
            console.log(Error);
            const results = response.data;
            setPlanet({name:results.name, dimension:results.dimension});
        });
    }

    return (
      <div className='character'>
       <img className='photo' src={photo} alt="Error"/>
       <h3>{name}</h3>
       <p>{status}</p>
       <p>{species}</p>
       <p>{gender}</p>
       <p  className='location' onClick={()=>planet.name&&planet.dimension?setPlanet({name:null,dimension:null}):getPlanet(url)}>Location</p>
       {planet.name&&planet.dimension?<div className='info-planet'>
            <p>{planet.name}</p>
            <p>{planet.dimension}</p> 
       </div>:null}
      </div>
    );
}

export default Characters;
