import React, { Component } from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import "react-dates/initialize";
let now = moment()
export default class ExpenseForm extends Component {


    constructor(props) {
    
        console.log(props)
      super(props)

      this. state = {
            'descreption' : props.expense ? props.expense.description : '',
            'amount' : props.expense ? (props.expense.amount/100).toString(): '',
            'note' : props.expense ? props.expense.note :'',
            'createdAt' : props.expense ? moment(props.expense.createdAt) : moment(),
            focused : false,
            error : ''
        }

    }

   

    onDescreptionChange = (e) => {
        let descreption = e.target.value
         this.setState({
            descreption
         })
         console.log(this.state)
    }

    onAmountChange = (e) => {
        let amount = e.target.value
        // Use regular expression to check for decimal numbers
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({
                amount
            })
        }        
    }

    onNoteChange = (e) => {
        let note = e.target.value
        this.setState({
            note
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        if(!this.state.descreption || !this.state.amount) {
            // Display Error
            this.setState( { error : 'Enter valid values for descreption and amount'})
        } else {
            // Clear error
            this.setState( { error : ''})
            this.props.onSubmit({
                description : this.state.descreption,
                amount : parseFloat(this.state.amount) * 100,                
                createdAt : this.state.createdAt.valueOf(),
                note : this.state.note
            })
        }
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
                <input type = "text" 
                        value = {this.state.descreption}
                        autoFocus = {true}
                        placeholder = "Descreption"
                        onChange = {this.onDescreptionChange}></input>
                <br></br>
                <br></br>
                <input type = 'number'
                        value = {this.state.amount}
                         placeholder = 'Amount'
                         onChange = {this.onAmountChange}></input>
                <br></br>
                <br></br>
                <textarea value = {this.state.note}
                        placeholder = "Enter a note"
                        onChange = {this.onNoteChange}></textarea>
                <br></br>
                <br></br>
                <SingleDatePicker
                       date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={ date => this.setState({ createdAt : date })} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool                        
                        numberOfMonths = {1}
                        isOutsideRange = { () => false}
                        onFocusChange={({ focused }) => 
                                this.setState({ focused })
                            } // PropTypes.func.isRequired
                        
                        />

                <br></br>
                <br></br>
                        {this.state.error && <p>{this.state.error}</p> }
                <br></br>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}