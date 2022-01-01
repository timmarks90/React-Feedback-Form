import React from 'react'

function Header({ text, textColor, bgColor }) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    };

    return (
        <header style={headerStyles}>
          <h2>{text}</h2>  
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,.4)',
    textColor: '#ff6a95'
}

export default Header
