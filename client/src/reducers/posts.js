import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

// reducer is a function, it is equal to a function that accepts the state (state will always be posts here) and the action
// not being used here, so you export it
export default (posts = [], action) => {
    // you often have a lot of these: so switch statements are preferrable
    // if (action.type === 'CREATE') {
    //     return
    // }
    switch (action.type) {
        case FETCH_ALL:
            // action.payload are the actual posts
            return action.payload;
        case CREATE:
            // spreading out past posts and adding new post (action.payload)
            return [...posts, action.payload];
        case UPDATE:
            // mapping over posts array, changing it and returning a new, updated array
            // terneray expression used - if id of post is equal to the action payload(updated post) THEN return the action.payload (it's the newly updated post ) else just send back the old post
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)

        case DELETE: 
        // keeping all the posts asides from the post that equals the payload (the post being deleted)
            return posts.filter((post) => post._id !== action.payload)
        default:
            return posts;
    }
}