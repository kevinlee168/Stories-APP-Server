import express from 'express';
import { getPosts, createPost, updatePost, deletePost, updateLikeCount } from '../controllers/posts.js';

const router = express.Router();

// localhost:5001/posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likeCount', updateLikeCount);

export default router;