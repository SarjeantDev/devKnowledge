import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'black',
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('md')]: { // a breakpoint in theme is essentially media queries, 'sm' = small 
        mainContainer: {
            flexDirection: "column-reverse"
        }
    }
}));