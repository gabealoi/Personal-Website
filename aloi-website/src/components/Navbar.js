import { Component } from "react"
import { NavLink } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div class="top-bar-nav">

                <nav className="navbar">
                    <NavLink
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/profile"
                    >
                        About
                    </NavLink>
                </nav>

            </div>
        )
    }
}