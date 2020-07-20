import React, { Component } from 'react';
import chroma from 'chroma-js';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import './ColorBox.css'

const styles = {
    ColorBox: {
        height: props => props.showingFullPalette ? '25%': '50%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover button': {
            opacity: '1'
        }
    },
    copyText: {
        color: props => 
            chroma(props.background).luminance() >= 0.7 ? 'black': 'white',
    },
    colorName: {
        color: props => 
            chroma(props.background).luminance() <= 0.08 ? 'white': 'black',
    },
    seeMore: {
        color: props =>
            chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)': 'white',
        background: 'rgba(255, 255, 255, 0.3)', 
        position: 'absolute',
        width: '60px',
        height: '30px',
        right: '0px',
        bottom: '0px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
    },
    copyButton: {
        color: props => 
            chroma(props.background).luminance() >= 0.7 ? 'black': 'white',
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
        opacity: '0'
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color:'black',
        letterSpacing: '1px',
        fontSize: '12px',
        textTransform: 'uppercase',
    },
    copyOverlay: {
        width: '100%',
        height: '100%',
        zIndex: '0',
        opacity: '0',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)'
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute'
    },
    copyMessage: {
        color: 'white',
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        transform: 'scale(0.1)',
        opacity: '0',
        '& h1': {
            fontWeight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, 0.3)',
            width: '100%',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: '0px',
            padding: '1rem',
        },
        '& p': {
            fontSize: '2rem',
            fontWeight: '100',
        }
    },
    showMessage: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '20',
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.3s'
    }
};

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {copied: false}
        this.changeCopyState = this.changeCopyState.bind(this);
    
    }
    changeCopyState() {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500);
        });
    }
    render() {
        const {background, name, moreUrl, showingFullPalette, classes} = this.props
        const {copied} = this.state;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background}} className={classes.ColorBox}>
                    <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
                    <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>   
                    </div>
                    {showingFullPalette && (
                        <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
                            <span className={classes.seeMore}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);