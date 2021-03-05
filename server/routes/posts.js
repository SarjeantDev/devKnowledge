import express from 'express';

// importing posts 
import { getPosts, createPost, updatePost, deletePost, likePost, dislikePost } from '../controllers/posts.js';

// setting up the router
const router = express.Router();

// adding the routes
// callback function that exes when someone visits localhost:5000/posts --> it's posts because of the prefix we set up in the server/index.js
// localhost: 5000 / posts -- tested and is connected 
// having the controllers and routes separate makes this code look a lot cleaner
router.get('/', getPosts);
router.post('/', createPost);

// update route - patch is used for updating
router.patch('/:id', updatePost)

// delete router
router.delete('/:id', deletePost)

// liking router
router.patch('/:id/likePost', likePost)

// dislike router
router.patch('/:id/dislikePost', dislikePost)

export default router;