import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';


class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {format: 'hex'};
        this._shades = this.gatherShades(this.props.colorId);
        this.changeFormat = this.changeFormat.bind(this);
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
    changeFormat(val) {
        this.setState({format: val});
    }
    render() {
        const {format} = this.state;
        const { classes } = this.props;
        const {paletteName, emoji, id} = this.props.palette;
        const colorBoxes = this._shades.map(x => (
            <ColorBox background={x[format]} name={x.name} key={x.name} showingFullPalette={false}/>
        ));
        return(
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} allColorsShowing={false}/>
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette);