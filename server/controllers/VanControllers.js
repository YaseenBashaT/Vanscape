const VanService = require("../services/VanServices");

exports.getAllVans = async (req, res) => {
    try {
        const vans = await VanService.getAllVans();
        res.status(200).json({ data: vans });
    } catch (err) {
        console.error("Error fetching vans:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.createVan = async (req, res) => {
    try {
        const vanData = req.body;
        const createdVan = await VanService.createVan(vanData);
        res.status(201).json(createdVan);
    } catch (err) {
        console.error("Error creating van:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getVanById = async (req, res) => {
    try {
        const { id } = req.params;
        const van = await VanService.getVanById(id);
        if (!van) return res.status(404).json({ error: "Van not found" });
        res.status(200).json(van);
    } catch (err) {
        console.error("Error fetching van by ID:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.updateVan = async (req, res) => {
    try {
        const { id } = req.params;
        const vanData = req.body;
        const updatedVan = await VanService.updateVan(id, vanData);
        if (!updatedVan) return res.status(404).json({ error: "Van not found" });
        res.status(200).json(updatedVan);
    } catch (err) {
        console.error("Error updating van:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteVan = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedVan = await VanService.deleteVan(id);
        if (!deletedVan) return res.status(404).json({ error: "Van not found" });
        res.status(200).json(deletedVan);
    } catch (err) {
        console.error("Error deleting van:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};
