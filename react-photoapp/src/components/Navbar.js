import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Bookmarks from './Bookmarks';
import Logout from './Logout';


export class Navbar extends Component {
    render() {
        return (
            <div className ='Menu'>
                <nav className = 'Nav-bar'>
                    
                    <NavLink to = '/home'>Home</NavLink>
                    <NavLink to = '/user'>User</NavLink>
                    <NavLink to = '/bookmarks'>Bookmarks</NavLink>
                    <NavLink to = '/logout'>Logout</NavLink>
                    {/* use 'exact' to prevent multiple pages loading */}
                <Route exact path ='/home' component={Home} />
                <Route exact path ='/user' component={User} />
                <Route exact path ='/bookmarks' component={Bookmarks} />
                {/* Logout should route back to login page */}
                <Route exact path ='/' component={Logout} />
                </nav>
            </div>
        )
    }
}

export default Navbar
