import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post'
import useStyles from './styles';


const Posts = ({ setCurrentId }) => {
    // posts - gaining access to global state/store
    // initializing as a hook
    const posts = useSelector((state) => state.posts);

    const classes = useStyles();

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    // make sure to remember normal parentheses - not curlys
                    posts.map((post) => (
                        // xs = mobile devices, how many spaces will it take up - 12 is total, small medium - sm
                        <Grid key={post._id} item xs={12} sm={6}>
                            {/* props drilling - continuously sending props to the most child component -- redux solves that*/}
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }

            </Grid>
        )
    );
}

export default Posts;