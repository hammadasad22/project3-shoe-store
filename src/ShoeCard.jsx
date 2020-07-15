import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import { IconButton, CardMedia } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
const useStyles = makeStyles({
    root: {
        height: 350,
        marginTop: 70,
        
    },

    buttonStyle: {
        color: 'red',
        
    },
    
});

const ShoeCard = ({name, img, price }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.titleStyle}
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={name}
                
                subheader={price}
            />
            <CardMedia style={{height: '150px', position: 'relative', marginBottom: '20px'}} image={img}/>
            <CardContent>
                
                
            </CardContent>
            <CardActions>
                <Button size="small" className={classes.buttonStyle}>Buy Now</Button>
            </CardActions>
        </Card>
    )
}

export default ShoeCard