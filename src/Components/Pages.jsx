import React,{useContext} from 'react';
import AppContext from "./AppContext";
import './Styles.css';

function Pages() {
    const context = useContext(AppContext);
    return (
      <div className='pages'>
          {context.data.get.info.prev?<h1 className='page' onClick={()=>context.page.set(context.page.get-1)}>Prev</h1>:null}
          {context.data.get.info.pages?<h1 className='page'>{`${context.page.get}/${context.data.get.info.pages}`}</h1>:null}
          {context.data.get.info.next?<h1 className='page' onClick={()=>context.page.set(context.page.get+1)}>Next</h1>:null}
      </div>
    );
}

export default Pages;
