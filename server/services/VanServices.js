const VanModel = require("../models/Van");

exports.getAllVans = async () => {
    try {
        console.log("Fetching all vans from database...");
        const vans = await VanModel.find();
        console.log("Found vans:", vans.length);
        
        // If no vans found, create some sample data
        if (vans.length === 0) {
            console.log("No vans found, creating sample data...");
            const sampleVans = [
                {
                    id: 1,
                    name: "Wanderer Pro",
                    type: "Camper",
                    price: 149,
                    location: "Portland, OR",
                    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
                    sleeps: 2,
                    available: true
                },
                {
                    id: 2,
                    name: "Horizon Explorer",
                    type: "Luxury",
                    price: 199,
                    location: "Seattle, WA",
                    image: "https://images.unsplash.com/photo-1669665462848-b977ff198756?q=80&w=1600&auto=format&fit=crop",
                    sleeps: 4,
                    available: true
                },
                {
                    id: 3,
                    name: "Road Tripper",
                    type: "Budget",
                    price: 99,
                    location: "Denver, CO",
                    image: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=1600&auto=format&fit=crop",
                    sleeps: 2,
                    available: false
                },
                {
                    id: 4,
                    name: "Mountain Voyager",
                    type: "Camper",
                    price: 159,
                    location: "Boulder, CO",
                    image: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=1600&auto=format&fit=crop",
                    sleeps: 3,
                    available: true
                },
                {
                    id: 5,
                    name: "Sunset Cruiser",
                    type: "Luxury",
                    price: 229,
                    location: "San Diego, CA",
                    image: "https://images.unsplash.com/photo-1627664819211-d990168413ee?q=80&w=1600&auto=format&fit=crop",
                    sleeps: 4,
                    available: true
                },
                {
                    id: 6,
                    name: "Urban Nomad",
                    type: "Budget",
                    price: 119,
                    location: "Austin, TX",
                    image: "https://images.unsplash.com/photo-1695651461777-721e254e1a25?q=80&w=1600&auto=format&fit=crop",
                    sleeps: 2,
                    available: true
                }
            ];
            
            await VanModel.insertMany(sampleVans);
            console.log("Sample vans created");
            return await VanModel.find();
        }
        
        return vans;
    } catch (error) {
        console.error("Error in getAllVans service:", error);
        throw error;
    }
};

exports.createVan = async (van) => {
    try {
        console.log("Creating van in service:", van);
        return await VanModel.create(van);
    } catch (error) {
        console.error("Error in createVan service:", error);
        throw error;
    }
};

exports.getVanById = async (id) => {
    try {
        console.log("Getting van by ID in service:", id);
        
        // Try to find by MongoDB _id first, then by custom id field
        let van = await VanModel.findById(id).catch(() => null);
        if (!van) {
            van = await VanModel.findOne({ id: parseInt(id) });
        }
        
        console.log("Found van:", van);
        return van;
    } catch (error) {
        console.error("Error in getVanById service:", error);
        throw error;
    }
};

exports.updateVan = async (id, van) => {
    try {
        console.log("Updating van in service:", id, van);
        
        // Try to update by MongoDB _id first, then by custom id field
        let updatedVan = await VanModel.findByIdAndUpdate(id, van, { new: true }).catch(() => null);
        if (!updatedVan) {
            updatedVan = await VanModel.findOneAndUpdate({ id: parseInt(id) }, van, { new: true });
        }
        
        return updatedVan;
    } catch (error) {
        console.error("Error in updateVan service:", error);
        throw error;
    }
};

exports.deleteVan = async (id) => {
    try {
        console.log("Deleting van in service:", id);
        
        // Try to delete by MongoDB _id first, then by custom id field
        let deletedVan = await VanModel.findByIdAndDelete(id).catch(() => null);
        if (!deletedVan) {
            deletedVan = await VanModel.findOneAndDelete({ id: parseInt(id) });
        }
        
        return deletedVan;
    } catch (error) {
        console.error("Error in deleteVan service:", error);
        throw error;
    }
};