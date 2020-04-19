import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className ='Menu'>
                <div>Home</div>
                <div>User Profile</div>
                <div>Bookmarks</div>
                <div>Logout</div>
            </div>
        )
    }
}

export default Navbar
