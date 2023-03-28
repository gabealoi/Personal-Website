import { Component } from "react"
import { NavLink } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        // some js to add to modify the navbar for when it moves
        window.addEventListener('scroll', () => {
            const currScrollPos = document.documentElement.scrollTop;
            const winHeight = window.innerHeight;
            const trans = (winHeight - currScrollPos) / winHeight;

            const nav = document.querySelector('[class*="top-bar-nav"]');
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.backgroundColor = `rgba(61, 90, 128, ${trans})`;

            if ((currScrollPos / winHeight) >= .61) {
                nav.id = 'hidden';
            } else {
                nav.id = 'visible';
            }
        });

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