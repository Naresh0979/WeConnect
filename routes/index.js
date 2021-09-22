const express = require('express');
const router = express.Router();
const path = require('path');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/weconnect', ensureAuthenticated, (req, res) =>
  
  res.sendFile(path.resolve()+'/public', {
    user: req.user
  })
);

module.exports = router;
