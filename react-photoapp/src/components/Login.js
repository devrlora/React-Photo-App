// Login path will lead to one of three user accounts
import React, { Component } from 'react'
// import Navbar from './Navbar';
import '../components/Login.css'



class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            userName: '',
            passWord: ''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    // function will target any input the user types in real time 
    // and render the page with each keystroke.

    handleChange(evt){
this.setState({userName: evt.target.value});
    }
    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form>
                <input className ='login-box'
                    type='text' 
                    value= {this.state.userName} 
                    onChange={this.handleChange}
                /> 
                </form>
                
            </div>
        )
    }
}

export default Login
