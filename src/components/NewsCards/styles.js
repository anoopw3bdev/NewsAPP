import {makeStyles} from '@material-ui/core';

export default  makeStyles({
    container:{
        padding: '0 5%',
        margin: '0',
        width: '100%'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50vh',
        width: '100%',
        padding: '10%',
        borderRadius: '10px',
        color: 'white',
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    }
});
