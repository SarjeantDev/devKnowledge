import React from 'react';
import moment from 'moment';
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, dislikePost } from '../../../actions/posts'


const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let totalLikes = post.likeCount - post.dislikeCount;
    if (totalLikes <= 0) {
        totalLikes = 0;
    }
    return (
        <Card className={classes.card}>

                <Typography style={{ color: 'black' }} variant="h6">{post.creator}</Typography>
                <Typography style={{ color: 'black' }} variant="body2">{moment(post.createdAt).fromNow()}</Typography>
    

            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'black'}} 
                    size="small" 
                    onClick={() => setCurrentId(post._id)}> {/* updating current id to the post id, changing in post.js, in form.js, and in app.js */}
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>

            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>

            <CardContent>
                <Typography className={classes.title} variant="body2" gutterBottom>{post.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {dispatch(likePost(post._id))}}>
                    <ThumbUpAltIcon fontSize="small"/>
                    {totalLikes}
                </Button>   
                <Button size="small" color="primary" onClick={() => { dispatch(dislikePost(post._id)) }}>
                    <ThumbDownAltIcon fontSize="small" />
                    
                </Button>   
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                </Button>   
            </CardActions>
        </Card>
    );
}

export default Post;