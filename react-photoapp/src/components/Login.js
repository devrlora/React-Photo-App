// Login path will lead to one of three user accounts
import React, { Component } from 'react'
import Navbar from './Navbar';


export class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            userName: '',
            passWord: ''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
this.setState({userName: evt.target.value});
    }
    render() {
        return (
            <div>
                <form>
                <input type='text' 
                    value= {this.state.userName} 
                    onChange={this.handleChange}
                />
                </form>
                
            </div>
        )
    }
}

export default Login
