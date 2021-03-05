import mongoose from 'mongoose';

// creating mongoose schema
const postSchema = mongoose.Schema({
    // each post will have a title, message, creator
    title: String,
    message: String,
    creator: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    dislikeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// now we have a schema we need to turn it into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

// exporting mongoose model from the postMessage file, on this model we'll be able to add CRUD commands
export default PostMessage;

