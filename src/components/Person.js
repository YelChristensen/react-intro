import React from 'react';

class Person extends React.Component{

constructor(){
    super();
    this.state = {name:""};
    this.handleChange = this.handleChange.bind(this);
}

handleChange(event){
    event.preventDefault();
    this.setState({
        name: event.target.value
    })
}

render(){
    return (
        <div>
            <p>{this.state.name}</p>
            <input onChange={this.handleChange} type="text"></input> 
      
        </div>
    )
}

}

export default Person;