import React,{useContext} from 'react';
import AppContext from "./AppContext";
import './Styles.css';

function Search() {
    const context = useContext(AppContext);
    return (
      <div className='search'>
        <input className='searchInput' onChange={event=>{context.name.set(event.target.value);context.page.set(1)}} placeholder='Search'/>
        <span className='status' onClick={()=>{context.status.set(context.status.get==='All'?'Alive':context.status.get==='Alive'?'Dead':'All');context.page.set(1)}}>
            {context.status.get}
        </span>
      </div>
    );
}

export default Search;
