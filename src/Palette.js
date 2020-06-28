import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500};
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level) {
        this.setState({level});
    }
    render() {
        const {colors} = this.props.palette;
        const {level} = this.state;
        const colorBoxes = colors[level].map(x => (
            <ColorBox background={x.hex} name={x.name}/>
        ));
        return (
            <div className='Palette'>
                {/* navbar */}
                <Navbar level={level} changeLevel={this.changeLevel}/>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        );
    }
}

export default Palette;