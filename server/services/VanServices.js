const VanModel = require("../models/Van");

exports.getAllVans = async () => {
    console.log("Fetching all vans...: Service");
    return await VanModel.find();
};

exports.createVan = async (van) => {
    return await VanModel.create(van);
};

exports.getVanById = async (id) => {
    // Try to find by MongoDB _id first, then by custom id field
    let van = await VanModel.findById(id).catch(() => null);
    if (!van) {
        van = await VanModel.findOne({ id: parseInt(id) });
    }
    return van;
};

exports.updateVan = async (id, van) => {
    // Try to update by MongoDB _id first, then by custom id field
    let updatedVan = await VanModel.findByIdAndUpdate(id, van, { new: true }).catch(() => null);
    if (!updatedVan) {
        updatedVan = await VanModel.findOneAndUpdate({ id: parseInt(id) }, van, { new: true });
    }
    return updatedVan;
};

exports.deleteVan = async (id) => {
    // Try to delete by MongoDB _id first, then by custom id field
    let deletedVan = await VanModel.findByIdAndDelete(id).catch(() => null);
    if (!deletedVan) {
        deletedVan = await VanModel.findOneAndDelete({ id: parseInt(id) });
    }
    return deletedVan;
};