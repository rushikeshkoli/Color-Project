import React from 'react';
import {withStyles} from '@material-ui/styles';

const styles = {
    root: {
        height: '25%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
    }
}

function DragableColorBox(props) {
    return (
        <li className={props.classes.root} style={{backgroundColor: props.color}}>{props.name}</li>
    )
}

export default withStyles(styles)(DragableColorBox);