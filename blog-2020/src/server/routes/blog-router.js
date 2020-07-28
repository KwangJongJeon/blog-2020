const express = require('express');

const BlogCtrl = require('../controllers/blog-ctrl');

const router = express.Router();

router.post('/content', BlogCtrl.createContent);
router.put('/content/:id', BlogCtrl.updateContent); 
router.delete('/content/:id', BlogCtrl.deleteContent);
router.get('/content/:id', BlogCtrl.getContentById)
router.get('/contents', BlogCtrl.getContents)

module.exports = router;