const Post = require('../models/post');
const Review = require('../models/review');

module.exports = {
    //Review Create
    async reviewCreate(req, res, next) {
        // find the post by id
        let post = await Post.findById(req.params.id);
        // create the review
        // req.body.review.author = req.user._id;
        let review = await Review.create(req.body.review);
        // assign the review to post
        post.reviews.push(review);
        // save the post
        post.save();
        // redirect to the post
        req.session.success = 'Review created successfully!';
        res.redirect(`/posts/${post.id}`);
    },

    // Review Update
    async reviewUpdate(req, res, next) {

    },

    // Review Destroy
    async reviewDestroy(req, res, next) {

    }
};