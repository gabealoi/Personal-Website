import { Component } from "react"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            active: 'Home'
        }
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(e) {
        this.setState({
            active: e.target.innerHTML
        });
    }

    render () {
        return (
            <div class="top-bar-nav">
                
                <nav>
                    <ul>
                        <li>
                            <Link style={ this.state.active === 'Home' ? {'background-color': '#ffffff', color: '#000080'} : {}} onClick={this._handleClick} to='/'>Home</Link>
                        </li>

                        <li>
                            <Link style={ this.state.active === 'About' ? {'background-color': '#ffffff', color: '#000080'} : {}} onClick={this._handleClick} to='/profile'>About</Link>
                        </li>       
                    </ul>
                </nav>

            </div>
        )
    }
}