import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import '../components/Navbar.css';
import Home from './Home';
import User from './User';
import Bookmarks from './Bookmarks';
import Logout from './Logout';


export class Navbar extends Component {
    render() {
        return (
            <div className ='Menu'>
                <nav className = 'Nav-bar'>
                    {/*  add Navlink styling to showcase each active link */}
                    <NavLink activeClassName = 'active-tab' to = '/home'>Home</NavLink>
                    <NavLink activeClassName = 'active-tab' to = '/user'>User</NavLink>
                    <NavLink activeClassName = 'active-tab' to = '/bookmarks'>Bookmarks</NavLink>
                    <NavLink activeClassName = 'active-tab' to = '/logout'>Logout</NavLink>
                    </nav>
                <Switch>
                    {/* use 'exact' to prevent multiple pages loading */}
                    <Route exact path ='/home' component={Home} />
                    <Route exact path ='/user' component={User} />
                    <Route exact path ='/bookmarks' component={Bookmarks} />
                    {/* Logout should route back to login page */}
                    <Route exact path ='/' component={Logout} />
                </Switch> 
            </div>
        )
    }
}

export default Navbar
