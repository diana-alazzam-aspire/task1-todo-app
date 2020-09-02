import React from 'react';


function Footer(props) {
    return (
        <footer>
            <p>&copy; Copyright {Date().split(' ')[3]}</p>
        </footer>
    )
}

export default Footer;