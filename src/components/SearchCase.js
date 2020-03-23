import React from 'react';
import '../css/container.css';
import '../css/SearchCase.css';

const SearchCase =(props)=>{
    return(
        <div>
       
        <form  className="container search" onSubmit = {props.handleSubmit}>
        
        <input className="search_input" type ="text" name ="option">
        </input><button className="button">Search</button>
        </form>
        </div>
    )

}

export default SearchCase