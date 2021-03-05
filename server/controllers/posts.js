// getting access to our model
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

// extracting all the logics from routes/posts.js
// always have a req and a res
// each will have try and catch block, async await to make sure theres no blocking going on
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        // status 200 means everythings okay
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

// create post controller
export const createPost = async (req, res) => {
    // with post requests you have access to a request.body
    const post = req.body;

    const newPost = new PostMessage(post)

    try {
        await newPost.save();

        // 201 = succesful creation
        res.status(201).json(newPost);
    } catch (error) {
        // 409 
        res.status(409).json({ message: error.message })
    }
}

// update post controller
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body; // { title, name, message, tag, etc...}
    
    
    // checking if the id is valid in the mongoose db, if it's not valid just return a status saying nothings returned
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    // first param is the id, the second is the new idea, and we need to set the third to true 
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    // checking if the id is valid in the mongoose db
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id)

    res.json({ message: 'Post deleted.' })
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, {new: true})
    res.json(updatedPost)
}


export const dislikePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { dislikeCount: post.dislikeCount + 1 }, { new: true })
    res.json(updatedPost)
}