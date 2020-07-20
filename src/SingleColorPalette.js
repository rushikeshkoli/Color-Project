import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const styles = {
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    colors: {
        height: '90%'
    },
    goBack: {
        height:'50%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        backgroundColor: 'black',
        '& a': {
            color: 'white',
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginTop: '-15px',
            marginLeft: '-50px',
            outline: 'none',
            fontSize: '1rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            lineHeight: '30px',
            background: 'rgba(255, 255, 255, 0.3)',
            border: 'none',
            textDecoration: 'none',
        }
    }
}

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