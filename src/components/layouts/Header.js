import React from 'react';


function Header() {
    return(
        <header style={headerStyle}>
            <h1><code>TODO List</code></h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '.4rem'
}

export default Header;

