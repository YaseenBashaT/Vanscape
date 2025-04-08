const UserModel = require('../models/User');

exports.getAllUsers = async () => {
    return await UserModel.find();
};

exports.createUser = async (user) => {
    return await UserModel.create(user);
};

exports.getUserById = async (id) => {
    return await UserModel.findById(id);
};

exports.updateUser = async (id, user) => {
    return await UserModel.findByIdAndUpdate(id, user, { new: true });
};

exports.deleteUser = async (id) => {
    return await UserModel.findByIdAndDelete(id);
};
exports.getUserByEmail = async (email) => {
    return await UserModel.findOne({ email });
};