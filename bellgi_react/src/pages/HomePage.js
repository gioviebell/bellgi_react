import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <p><Link to='/library'>Library</Link></p>
            <h1>Music World</h1>
            <h2>Welcome to Music World! Here you can create a musical safe space. You can add, edit, and delete
                songs in a library.
            </h2>

        </div>
    );
}
export default HomePage;