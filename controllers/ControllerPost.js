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

function create(req, res) {
    const newPost = {
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags,
    };

    if (!newPost.titolo) {
        const err = new Error("Invalid Title");
        err.status = 400;
        throw err;
    }
    if (!newPost.contenuto) {
        const err = new Error("Invalid Content");
        err.status = 400;
        throw err;
    }
    if (!newPost.immagine) {
        const err = new Error("Invalid Image");
        err.status = 400;
        throw err;
    }
    if (!newPost.tags?.length) {
        const err = new Error("Invalid Tags");
        err.status = 400;
        throw err;
    }

    posts.push(newPost);
    res.sendStatus(201);
}

function update(req, res) {
    const newPost = {
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags,
    };