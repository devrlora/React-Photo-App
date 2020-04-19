import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Bookmarks from './Bookmarks';
import Logout from './Logout';


export class Navbar extends Component {
    render() {
        return (
            <div className ='Menu'>
                <nav className = 'Nav-bar'>
                    
                    <Link to = '/home'>Home</Link>
                    <Link to = '/user'>User</Link>
                    <Link to = '/bookmarks'>Bookmarks</Link>
                    <Link to = '/logout'>Logout</Link>
                    {/* use 'exact' to prevent multiple pages loading */}
                {/* <Route path ='/login' component={Login} /> */}
                <Route exact path ='/home' component={Home} />
                <Route exact path ='/user' component={User} />
                <Route exact path ='/bookmarks' component={Bookmarks} />
                <Route exact path ='/' component={Logout} />
                </nav>
            </div>
        )
    }
}

export default Navbar
