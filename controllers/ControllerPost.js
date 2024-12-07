const posts = require("../db/posts");

function index(req, res) {
    const filter = req.query.filter ?? "";
    let validPosts = [];
    const filteredPosts = posts.filter((post) => {
        if (post.tags.includes(filter.toLowerCase())) validPosts.push(post);
        return validPosts;
    });
    validPosts.length > 0 ? res.json(validPosts) : res.json(posts);
} 
