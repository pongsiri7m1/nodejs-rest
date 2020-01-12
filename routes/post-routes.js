const express = require('express');
const router = express.Router();

const postsControllers = require('../controlers/post-controlers')

router.get('/', postsControllers.getAllPosts);
router.get('/:postId', postsControllers.getPostById);
router.post('/', postsControllers.createPost);
router.put('/:postId', postsControllers.updatePostById);
router.delete('/:postId', postsControllers.deletePostById);

module.exports = router;