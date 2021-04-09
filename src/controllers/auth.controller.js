const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { config } = require('../config/index');

exports.logIn = async (req, res) => {
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist)
        return res.status(400).json({
            message: 'User not exists'
        })
    const token = jwt.sign({ id: userExist._id }, config.SECRET, {
        expiresIn: 86400
    })
    return res.json({
        _id: userExist._id,
        email: userExist.email,
        message: 'Auth Succesful',
        token: token
    })
};