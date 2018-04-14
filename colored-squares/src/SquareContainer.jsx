import React, { Component } from 'react';
import choice from './helpers';

class SquareContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [choice(this.props.allColors)]
        }
    }
    
    render() {
        return (
            <div className='square'>
                <h1>Hello</h1>
            </div>
        )
    }
}

SquareContainer.defaultProps = {
    allColors: [
        "Bisque",
        "BlanchedAlmond",
        "BurlyWood",
        "CornflowerBlue",
        "DarkMagenta",
        "DarkSalmon",
        "Gainsboro",
        "HoneyDew",
        "HotPink",
        "Khaki",
        "LawnGreen",
        "LightCoral",
        "LemonChiffon",
        "LightSeaGreen",
        "LimeGreen",
        "Maroon",
        "MistyRose",
        "OliveDrab",
        "OrangeRed"
      ]
}

export default SquareContainer;