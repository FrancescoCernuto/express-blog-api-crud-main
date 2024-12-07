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

function show(req, res) {
    id = parseInt(req.params.id);
    if (isNaN(id)) {
        const err = new Error("Invalid ID");
        err.status = 400;
        throw err;
    }

    const selectedPost = posts.find((post) => post.id === id);
    if (!selectedPost) {
        const err = new Error("Post Not Found");
        err.status = 404;
        throw err;
    }
    res.json(selectedPost);
}
