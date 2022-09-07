import { Component } from "react"
import { NavLink } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div class="top-bar-nav">

                <nav className="navbar">
                    <NavLink
                        exact
                        // activeClassName="navbar__link--active"
                        // className="navbar__link"
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        // activeClassName="navbar__link--active"
                        // className="navbar__link"
                        to="/profile"
                    >
                        About
                    </NavLink>


                    {/* <ul>
                        <li class="home-nav">
                            <Link style={ this.state.active === 'Home' ? {'background-color': 'rgba(255, 250, 250, 0.75)', color: '#3d5a80'} : {}} onClick={this._handleClick} to='/'>Home</Link>
                        </li>

                        <li class="profile-nav">
                            <Link style={ this.state.active === 'About' ? {'background-color': 'rgba(255, 250, 250, 0.75)', color: '#3d5a80'} : {}} onClick={this._handleClick} to='/profile'>About</Link>
                        </li>       
                    </ul> */}
                </nav>

            </div>
        )
    }
}