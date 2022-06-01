import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div class="top-bar-nav">
            
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/profile'>About</Link>
                    </li>       
                </ul>
            </nav>

        </div>
    )
}