const express = require('express');

// compare this to the original code in the guided repo
// this is the "best practice" way to do it ... keep your db config out
// of your express router code.

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const fruits = await db('fruits');
    res.json(fruits);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve fruits'});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const fruit = await db('fruits').where({ id });

    res.json(fruit);
  } catch(err) {
    res.status(500).json({ message: 'Failed to retrieve fruit '});
  }
});

