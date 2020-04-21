// use if/else function to verify user login
// Will Link to a Random Photo-Grid
import React, { Component } from 'react'
import Photos from '../components/Photos'
import '../components/User.css';


export class User extends Component {
    render() {
        return (

            <div className='Photo-container'>
                <h1>Welcome to the User Page</h1>
                {/* Photos are hard coded, should be selected from an array*/}
                <div className="Photo-image">
					<Photos />
					<Photos />
					<Photos />
					<Photos />
					<Photos />
					<Photos />
					<Photos />
					<Photos />
					<Photos />
					<Photos />
					<Photos />
					<Photos />
					<Photos />
					<Photos />
                </div>
            </div>
        )
    }
}

export default User;
