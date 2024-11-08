// Creates navigation links for each page 
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="Navigation-link">
            <p className="Home-link"><Link to="/">Home</Link></p>
            <p className="Add-song"><Link to= "/add-song">Add Song</Link></p>
            <p className="Library"><Link to='/library'>Library</Link></p>
        </nav>
    );
}
export default Navigation;