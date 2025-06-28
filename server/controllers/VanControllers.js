const VanService = require("../services/VanServices");

exports.getAllVans = async (req, res) => {
    try {
        console.log("Getting all vans - Controller");
        const vans = await VanService.getAllVans();
        console.log("Vans from service:", vans);
        
        // Ensure we always return a consistent response format
        res.status(200).json({ 
            success: true,
            data: vans,
            count: vans.length 
        });
    } catch (err) {
        console.error("Error in getAllVans controller:", err);
        res.status(500).json({ 
            success: false,
            error: "Internal server error",
            message: err.message 
        });
    }
};

exports.createVan = async (req, res) => {
    try {
        console.log("Creating van with data:", req.body);
        const vanData = req.body;
        const createdVan = await VanService.createVan(vanData);
        res.status(201).json({
            success: true,
            data: createdVan
        });
    } catch (err) {
        console.error("Error creating van:", err);
        res.status(500).json({ 
            success: false,
            error: "Internal server error",
            message: err.message 
        });
    }
};

exports.getVanById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Getting van by ID:", id);
        
        const van = await VanService.getVanById(id);
        if (!van) {
            return res.status(404).json({ 
                success: false,
                error: "Van not found" 
            });
        }
        
        res.status(200).json({
            success: true,
            data: van
        });
    } catch (err) {
        console.error("Error fetching van by ID:", err);
        res.status(500).json({ 
            success: false,
            error: "Internal server error",
            message: err.message 
        });
    }
};

exports.updateVan = async (req, res) => {
    try {
        const { id } = req.params;
        const vanData = req.body;
        console.log("Updating van:", id, "with data:", vanData);
        
        const updatedVan = await VanService.updateVan(id, vanData);
        if (!updatedVan) {
            return res.status(404).json({ 
                success: false,
                error: "Van not found" 
            });
        }
        
        res.status(200).json({
            success: true,
            data: updatedVan
        });
    } catch (err) {
        console.error("Error updating van:", err);
        res.status(500).json({ 
            success: false,
            error: "Internal server error",
            message: err.message 
        });
    }
};

exports.deleteVan = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Deleting van:", id);
        
        const deletedVan = await VanService.deleteVan(id);
        if (!deletedVan) {
            return res.status(404).json({ 
                success: false,
                error: "Van not found" 
            });
        }
        
        res.status(200).json({
            success: true,
            data: deletedVan,
            message: "Van deleted successfully"
        });
    } catch (err) {
        console.error("Error deleting van:", err);
        res.status(500).json({ 
            success: false,
            error: "Internal server error",
            message: err.message 
        });
    }
};