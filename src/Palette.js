import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteStyles';


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500, format: "hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({level});
    }
    changeFormat(val) {
        this.setState({format: val});
    }
    render() {
        const { classes } = this.props;
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(x => (
            <ColorBox background={x[format]} name={x.name} key={x.id} moreUrl={`/palette/${id}/${x.id}`} showingFullPalette={true}/>
        ));
        return (
            <div className={classes.Palette}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} allColorsShowing={true}/>
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        );
    }
}

export default withStyles(styles)(Palette);