import React,{useState,useEffect} from 'react';
import './App.css';
import rickIcon from '../Assets/rickmorty.png'
import AppContext from "../Components/AppContext";
import Search from '../Components/Search'
import Characters from '../Components/Characters'
import Pages from '../Components/Pages'
import axios from 'axios';


function App() {
  const [name, setName] = useState(null);
  const [status, setStatus] = useState('All');
  const [page, setPage] = useState(1);
  const [data, setData] = useState({info:{pages:null,prev:null,next:null},results:[]});

  const store = {
    name: {get: name, set: setName},
    status: {get: status, set: setStatus},
    page: {get: page, set: setPage},
    data: {get: data, set: setData}
  }

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/',{
      params:{
        name: name,
        ...(status!=='All'?{status: status}:null),
        page: page
      }
    })
    .then(response => {
      console.log(Error);
      const results = response.data;
      setData({info:{pages:results.info.pages,prev:results.info.prev,next:results.info.next},results:results.results});
    })
    .catch(function (error) {
      console.log('No existe')
    });
  }, [name,status,page]);

  return (
    <AppContext.Provider value={store}>
    <div className="App">
      <img className='rickIcon' src={rickIcon} alt="Error"/>
        <Search/>
      <div className='results'>
        <Characters/>
        <Pages/>
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
