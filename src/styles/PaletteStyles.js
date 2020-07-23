export default {
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // overflow: 'hidden',
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