import React, { useState, useEffect } from 'react';
import useStyles from './styles';

// importing style components to be used
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

// need to get current post that we are on

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: ''
    });

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if(post) setPostData(post)
    }, [post]) // dependency array, when the post value changes, from nothing to the post then run the callback function

    const classes = useStyles();

    const dispatch = useDispatch();

    // handler function
    const handleSubmit = (e) => {
        e.preventDefault();

        // if there IS a current id, update post otherwise create a post
        if(currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData));
        }    
        
        clear();
    }

    // clear form function
    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: ''
        });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Submit your tip!</Typography>

                <TextField  name="creator" variant="outlined" label="Creator" fullWidth /* value will be stored in the state */  value={postData.creator}/* need to spread the post data first*/
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>

                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />  

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;