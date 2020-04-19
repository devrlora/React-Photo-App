import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import User from './User';
// import Bookmarks from './Bookmarks';
// import Logout from './Logout';


export class Navbar extends Component {
    render() {
        return (
            <div className ='Menu'>
                <Route path ='/home' component={Home} />
                <Route path ='/user' component={User} />
                {/* <Route path ='/bookmarks' component={Bookmarks} />
                <Route path ='/' component={Logout} /> */}
            </div>
        )
    }
}

export default Navbar
