const UserServices = require('../services/UserServices');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserServices.getAllUsers();
        res.status(200).json({ data: users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        const newUser = { name, username, email, password };
        const createdUser = await UserServices.createUser(newUser);
        res.status(201).json({ data: createdUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserServices.getUserById(id);
        res.status(200).json({ data: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserServices.updateUser(id, req.body);
        res.status(200).json({ data: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await UserServices.deleteUser(id);
        res.status(200).json({ data: deletedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
