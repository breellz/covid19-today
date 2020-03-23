import React from "react";
import '../css/cases.css';
class Cases extends React.Component{
     constructor(props){
         super(props)
         //state
         this.state ={
             cases : []
         }
     }
     componentDidMount(){
          fetch('https://api.covid19api.com/summary').then(response =>response.json())
         .then(response => this.setState(()=>({
             cases: response.Countries
         })))
     }


     render(){
         return(
             <div>
             <ol>
             {this.state.cases.map((value)=> <p className=" container cases_body "><li className="cases_text" key = {value.Country}>
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
         )
     }
 } 

export default Cases