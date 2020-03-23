import React from 'react';
import Header from './components/Header';
import './css/base.css';
import Cases from './components/Cases';

class App extends React.Component{

  render(){
    const title = "COVID-19 TODAY"
    const subtitle ="Helping data get where it's needed"

    return(
      <div>
         <Header  title = {title} subtitle = {subtitle}/>
         <Cases />
      </div>
    )
  }
}

export default App;
