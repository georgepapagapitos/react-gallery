const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const imageId = req.params.id;
    const queryText = `UPDATE images SET likes=likes+1 WHERE id=$1`
    pool.query(queryText, [imageId]).then(result => {
      res.sendStatus(200)
    }).catch(error => {
      console.log('error in PUT', error);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const queryText = ` SELECT * FROM "images" ORDER BY id ASC`
  pool.query(queryText).then(result => {
    res.send(result.rows);
  }).catch(error => {
    console.log('error in GET', error);
    res.sendStatus(500);
  })
    
}); // END GET Route

module.exports = router;