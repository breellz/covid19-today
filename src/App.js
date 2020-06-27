import React from 'react';
import Header from './components/Header';
import './css/base.css';
import './css/cases.css'
import SearchCase from './components/SearchCase';
import Country from './components/Country';
import './css/loader.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    //state
    this.state ={
        cases : [],
        country : undefined,
        loading: false
    }
}


  
handleSubmit(e){
  e.preventDefault();
  const NewCountry = e.target.elements.option.value;
  this.setState((prevState)=>({cases: prevState.cases.filter((searched)=>{
    return searched.Country.toLowerCase().includes(NewCountry.toLowerCase())
  })}))
  
}


componentDidMount(){
    fetch('https://extreme-ip-lookup.com/json')
    .then(res => res.json())
    .then(resp => this.setState(()=>({
      country: resp.country
    })))
    .catch(err => console.log(err))

    this.setState(()=>({loading: true}))

     fetch('https://api.covid19api.com/summary').then(response =>response.json())
    .then(response => this.setState(()=>({
        cases: response.Countries,
        loading: false
    })))
}


render(){
  const title = "COVID-19 TODAY"
    const subtitle ="Helping data get where it's needed"
    return(
      <div>
      <div>
         <Header  title = {title} subtitle = {subtitle}/>
         
         <SearchCase handleSubmit ={this.handleSubmit} cases = {this.state.cases} />
         <Country country = {this.state.country} cases = {this.state.cases} />
      </div>

        <div>
        <ol>
        {!this.state.loading ? this.state.cases.map((value)=> <p className=" container cases_body ">
        <li className="cases_text" key = {value.Country}>
        Country:  {value.Country}<br /> 
        New Confirmed :  {value.NewConfirmed}<br />
        New Deaths:   {value.NewDeaths}<br />
        New Recovered:   {value.NewRecovered}<br />
        Total Confirmed:  {value.TotalConfirmed}<br />
        Total Deaths:  {value.TotalDeaths}<br />
        Total Recovered:  {value.TotalRecovered}
        </li></p>): <div className=" container loader"></div>}
        </ol>
        </div>
        </div>
    )
}

}


export default App
