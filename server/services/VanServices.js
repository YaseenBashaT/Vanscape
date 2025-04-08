const VanModel = require("../models/Van");

exports.getAllVans = async () => {
    console.log("Fetching all vans...: Service");
  return await VanModel.find();
};

exports.createVan = async (van) => {
  return await VanModel.create(van);
};
exports.getVanById = async (id) => {
  return await VanModel.findById(id);
};

exports.updateVan = async (id, van) => {
  return await VanModel.findByIdAndUpdate(id, van);
};

exports.deleteVan = async (id) => {
  return await VanModel.findByIdAndDelete(id);
};

