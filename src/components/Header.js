import React from 'react';
import '../css/Header.css';
import '../css/container.css'

const Header =(props)=>{
        return(
            <div className="header container">
             <h1 className="header__title">{props.title}</h1>
             <h2 className="header__subtitle">{props.subtitle}</h2><br />
             <p>API provided by <a href="https://twitter.com/ksredelinghuys">Kyle Rdelinghuys</a></p>
             <p>Data from <a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins CSSE</a></p>
             <p>Built by <a href="https://twitter.com/breellz">Bassit Owolabi</a></p>

            </div>
        )
}


export default Header