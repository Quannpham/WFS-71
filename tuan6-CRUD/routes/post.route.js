import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let posts = [
  {
    id: '1',
    title: 'Master ReactJS in 4 hours',
    description: "It's free",
    author: 'Harry',
  },
  {
    id: '2',
    title: 'Rap Viet mua 3',
    description: 'Vong chung ket Rap Viet 3',
    author: 'vieon',
  },
  {
    id: '3',
    title: 'Rap Viet mua 4',
    description: 'Vong chung ket Rap Viet 4',
    author: 'VTV',
  },
  {
    id: '4',
    title: 'Master ReactJS in 4 hours',
    description: "It's free",
    author: 'Harry',
  },
  {
    id: '5',
    title: 'Rap Viet mua 3',
    description: 'Vong chung ket Rap Viet 3',
    author: 'vieon',
  },
  {
    id: '6',
    title: 'Rap Viet mua 4',
    description: 'Vong chung ket Rap Viet 4',
    author: 'VTV',
  },
];

router.get('/', (req, res) => {
  const { page, per_page } = req.query;

  try {
    res.json({
      data: posts,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error);
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const existingPost = posts.find((post) => post.id === id);

  if (!existingPost) {
    return res.json({
      message: 'Post not found',
    });
  }

  res.json({ data: existingPost });
});

router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({
      message: 'Missing required keys',
    });
  }

  posts.push({
    id: uuidv4(),
    title,
    description,
  });

  res.json({
    data: posts,
  });
});

router.put('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;

  const existingPostIndex = posts.findIndex((post) => post.id === id);

  if (existingPostIndex === -1) {
    return res.status(400).json({
      message: 'Post not found',
    });
  }

  posts[existingPostIndex] = {
    ...posts[existingPostIndex],
    ...body,
  };

  return res.json({ data: posts });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const existingPostIndex = posts.findIndex((post) => post.id === id);

  if (existingPostIndex === -1) {
    return res.status(400).json({
      message: 'Post not found',
    });
  }

  posts.splice(existingPostIndex, 1);
  return res.json({ data: 'Delete successfully' });
});

export default router;