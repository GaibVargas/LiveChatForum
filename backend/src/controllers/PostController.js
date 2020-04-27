const Post = require('../models/Post');
const User = require('../models/User');

module.exports = {
  async create(req, res) {
    const { userId } = req;
    const { content } = req.body;

    const author = userId;

    try {
      const post = await Post.create({ content, author });
      const user = await User.findById(author);

      req.io.emit('newPost', {
        post,
        author: user
      });

      return res.json({
        post,
        author: user
      });
    } catch(error) {
      return res.status(400).json({ error });
    }
  },

  async show(req, res) {
    try {
      const posts = await Post.find().select('content').populate('author');

      return res.json(posts);
    } catch(error) {
      return res.status(400).json({ message: 'Internal error' });
    }
  }
}