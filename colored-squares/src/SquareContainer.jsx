import React, { Component } from 'react';
import { choice } from './helpers';

class SquareContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: Array.from({length: 24}).map(() => choice(this.props.allColors))
        }
    }
    
    clickListenHandler(index) {
        this.setState(prevState => {
            let colors = prevState.colors;
            colors[index] = choice(this.props.allColors);
            return { colors };
        });
    }

    render() {
        return (
            <div className='square-cointainer'>
                <h1>Part 1</h1>
                {this.state.colors.map((color, idx) => <div key={idx} onClick={this.clickListenHandler.bind(this, idx)} className="square" style={{backgroundColor: color}}/>)}
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