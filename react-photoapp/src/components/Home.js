// Will Link to a Random Photo-Grid
import React, { Component } from 'react'
import Photos from '../components/Photos'
import '../components/Home.css';


export class Home extends Component {
    render() {
        return (

            <div className='Photo-container'>
                <h1>Welcome to the Home Page</h1>
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

export default Home
