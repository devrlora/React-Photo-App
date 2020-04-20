import React, { Component } from 'react'
import '../components/Photos.css';

const RandPic = 'https://picsum.photos/200';

export class Photos extends Component {
    render() {
        let imgSrc = `${RandPic}`;
        return (
            <div>
                <div className="Photo-image">
					<img src={imgSrc} alt= 'random-pic'/>
				</div>
            </div>
        )
    }
}

export default Photos