import React, { Component } from 'react'
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.colorId);
        console.log(this._shades);
    }
    gatherShades(id) {
        let shades = [];
        let allColors = this.props.palette.colors;
        for (let i in allColors) {
            shades = shades.concat(allColors[i].filter(color => color.id === id));
        }
        // this.props.palette
        return shades.slice(1);
    }
    render() {
        const colorBoxes = this._shades.map(x => (
            <ColorBox background={x.hex} name={x.name} key={x.name} showLink={false}/>
        ));
        return(
            <div className='Palette'>
                <h1>Single Color Palette Here</h1>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default SingleColorPalette;