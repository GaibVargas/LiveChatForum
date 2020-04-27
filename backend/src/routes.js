const route = require('express').Router();

const authMiddleware = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');

route.post('/register', UserController.create);
route.post('/authenticate', UserController.login);

route.get('/all_users', UserController.show);

route.use(authMiddleware);

route.get('/users', UserController.index);
route.put('/users', UserController.update);

route.post('/posts', PostController.create);
route.get('/posts', PostController.show);

module.exports = route;
