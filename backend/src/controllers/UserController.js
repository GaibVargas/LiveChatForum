const bcrypt = require('bcryptjs');

const User = require('../models/User');

module.exports = {
  async show(req, res) {
    try {
      const users = await User.find();

      return res.json(users);
    } catch (error) {
      return res.status(400).json({ message: 'Internal error' });
    }
  },

  async index(req, res) {
    const { userId } = req;

    try {
      const user = await User.findById(userId);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ message: 'Cannot get user information' });
    }
  },

  async create(req, res){
    const { name, login, password } = req.body;

    try {
      if(await User.exists({ login })){
        return res.status(400).json({ message: 'User already exists' });
      }

      const user = await User.create({
        name, login, password
      });

      return res.json({
        user,
        token: user.generateToken(),
      });
    } catch(error) {
      return res.status(400).json({ message: 'Registration failed' });
    }
  },

  async update(req, res) {
    const { userId } = req;

    if(!(req.body.password)) {
      await save(req.body);
    } else {
      const newHash = await bcrypt.hash(req.body.password, 10);
      await save({ password: newHash });
    }
    
    async function save(data) {
      try {
        const user = await User.findOneAndUpdate(
          { _id: userId }, data
        );

        return res.json(user);
      } catch(error) {
        return res.status(400).json({ message: 'Internal error' });
      }
    }
  },

  async login(req, res) {
    const { login, password } = req.body;

    try {
      const user = await User.findOne({ login }).select('+password');

      if(!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      if(!(await user.compareHash(password))) {
        return res.status(400).json({ message: 'Invalid password' });
      }

      return res.json({
        user,
        token: user.generateToken(),
      });
    } catch(error) {
      return res.status(400).json({ message: 'User login failed' });
    }
  },
 
};