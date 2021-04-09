const User = require('../models/user');

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

exports.getUser = async (req, res) => {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user)
}

exports.createUser = async(req, res) => {
    const { email } = req.body
    const newUser = new User({ email });
    const userSaved = await newUser.save()
    res.status(201).json(userSaved)
}

exports.updateUser = async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true
    })
    res.status(200).json(updateUser)
}

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.userId)
    res.status(204).json()
}