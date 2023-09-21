import express from 'express';

import { db } from '../config/database.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
  const todos = await db.todos.find().toArray();
  return res.json(todos);
});
router.get('/:id', (req, res) => {});
router.post('/', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

export default router;