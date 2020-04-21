// Login path will lead to one of three user accounts
import React, { Component } from 'react'
// import Navbar from './Navbar';
import '../components/Login.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            username: '',
            password: '',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    // function will target any input the user types in real time 
    // and render the page with each keystroke.
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }
    // function will pass the input info.
    handleSubmit(evt){
        // prevent page refreshing.
        // will refactor to hide password text.
        evt.preventDefault();
        // const {username,password} =this.state;
        this.setState({username: '',password:''});
    }
    render() {
        return (
            <div className='login-container'>
                <h1>Login Form</h1>
                {/* <form onSubmit= {this.handleSubmit}> */}
                <form>
                <input className ='login-box'
                    type='text' 
                    name= 'username'
                    value= {this.state.username}
                    placeholder='Username' 
                    onChange={this.handleChange}
                /> 
                <input className ='login-box'
                    type='text' 
                    name='password'
                    value= {this.state.password}
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
