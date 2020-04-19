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
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    // function will target any input the user types in real time 
    // and render the page with each keystroke.
    handleChange(evt){
this.setState({userName: evt.target.value});
    }
    // function will pass the input info 
    handleSubmit(evt){
        // prevent page refreshing 
        evt.preventDefault();
        alert(`You typed: ${this.state.userName}` )
        this.setState({userName: ''});
    }
    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit= {this.handleSubmit}>
                <input className ='login-box'
                    type='text' 
                    value= {this.state.userName}
                    placeholder='Username' 
                    onChange={this.handleChange}
                /> 
                <input className ='login-box'
                    type='text' 
                    value= {this.state.userName}
                    placeholder='Password' 
                    onChange={this.handleChange}
                /> 
                <button className ='login-btn' onClick={this.handleSubmit}>Enter</button>
                </form>
                
            </div>
        )
    }
}

export default Login
