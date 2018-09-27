import React from 'react';
import cx from 'classnames';

class CreditCardInput extends React.Component {
    constructor() {
        super();
        this.state = {number: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            number: event.target.value
        });
    }

    render() { 
        // Figure out what state we're in
        const longerThanSixteen = (this.state.number).length > 16;
        const textContainsLetters = isNaN(this.state.number);
        const sixteenNumbers = (this.state.number).length === 16;


        // Figure out what classnames to apply
        const classes = cx('border', {
            'border--green': sixteenNumbers && !textContainsLetters,
            'border--red': longerThanSixteen || textContainsLetters
            
        })
    
         // Render it


        return (
            <div>
                <input className={classes} onChange={this.handleChange}  name="input" type="text" value={this.state.number} />
            </div>
        )
    }
}

export default CreditCardInput;