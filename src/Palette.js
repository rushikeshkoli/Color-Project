import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(x => (
            <ColorBox background={x.color} name={x.name}/>
        ));
        return (
            <div className='Palette'>
                {/* navbar */}
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        );
    }
}

export default Palette;