import React, { Component } from 'react';

import logo from '../static/logo.png';

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <div className = "brand">
                    <img src={logo} className="logo" alt="logo"  />
                    <div>
                        <h2 className="title">Rodgers M Gitau</h2>
                        <span className="subtitle">Web Apps Developer</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;