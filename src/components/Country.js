import React from 'react';

class Country extends React.Component{
    constructor(props){
        super(props);
       // this.handleDisplay = this.handleDisplay.bind(this)
    }
 handleDisplay(){
    for(let i =0; i < this.props.cases.length; i++){
        if(this.props.cases[i].Country === this.props.country){
            const myCountry =this.props.cases[i]
            return(
                <div>
                <div>
                <h3 className = "container">Your Country: {this.props.country}</h3>
                </div>
                <div>
                <ol>
             <p className=" container cases_body ">
            <li className="cases_text" key = {myCountry.Country}>
            Country:  {myCountry.Country}<br /> 
            New Confirmed :  {myCountry.NewConfirmed}<br />
            New Deaths:   {myCountry.NewDeaths}<br />
            New Recovered:   {myCountry.NewRecovered}<br />
            Total Confirmed:  {myCountry.TotalConfirmed}<br />
            Total Deaths:  {myCountry.TotalDeaths}<br />
            Total Recovered:  {myCountry.TotalRecovered}
            </li></p>
            </ol>
                </div>
                <h3 className="container">Other Countries:</h3>
                </div>
            )
        } 
    
 }
}
 
    render(){
        return(
            <div>
            
            {this.handleDisplay()}
            </div>
        )

}
}

export default Country