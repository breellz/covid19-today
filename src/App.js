import React from 'react';
import Header from './components/Header';
import './css/base.css';
import './css/cases.css'
import SearchCase from './components/SearchCase';

class App extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    //state
    this.state ={
        cases : []
    }
}
handleSubmit(e){
  e.preventDefault();
  const NewCountry = e.target.elements.option.value;
  this.setState((prevState)=>({cases: prevState.cases.filter((searched)=>{
    return NewCountry === searched.Country
  })}))
  

  
}
componentDidMount(){
     fetch('https://api.covid19api.com/summary').then(response =>response.json())
    .then(response => this.setState(()=>({
        cases: response.Countries
    })))
}


render(){
  const title = "COVID-19 TODAY"
    const subtitle ="Helping data get where it's needed"
    return(
      <div>
      <div>
         <Header  title = {title} subtitle = {subtitle}/>
         <SearchCase handleSubmit ={this.handleSubmit} />
      </div>
        <div>
        <ol>
        {this.state.cases.map((value)=> <p className=" container cases_body ">
        <li className="cases_text" key = {value.Country}>
        Country:  {value.Country}<br /> 
        New Confirmed :  {value.NewConfirmed}<br />
        New Deaths:   {value.NewDeaths}<br />
        New Recovered:   {value.NewRecovered}<br />
        Total Confirmed:  {value.TotalConfirmed}<br />
        Total Deaths:  {value.TotalDeaths}<br />
        Total Recovered:  {value.TotalRecovered}
        </li></p>)}
        </ol>
        </div>
        </div>
    )
}

}

export default App;
