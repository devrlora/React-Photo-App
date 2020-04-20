// Will Link to a Random Photo-Grid
import React, { Component } from 'react'
const UnsplashAPI = 'https://picsum.photos/200';


export class Home extends Component {
    render() {
        let imgSrc = `${UnsplashAPI}`;
        return (
            <div>
                <h1>Welcome to the Home Page</h1>
                <div className="Photo-image">
					<img src={imgSrc} alt= 'random-pic'/>
				</div>
            </div>
        )
    }
}

export default Home
