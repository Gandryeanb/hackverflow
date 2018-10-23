const route = require('express').Router()
const PostController = require('../controllers/PostController')
const isLogin = require('../middlewares/isLogin')

route
  .post('/', isLogin, PostController.createPost)
  .delete('/:id', isLogin, PostController.removePost)
  .get('/:id', PostController.getPostDetail)
  .get('/', PostController.getAllPost)
  .get('/up/:id', isLogin, PostController.upvote)
  .get('/down/:id', isLogin, PostController.downvote)

module.exports = route
