const VanService = require("../services/VanServices");

exports.getAllVans = async (req, res) => {
    try{
        console.log('Fetching all vans...: Contrlr')
        const vans = await VanService.getAllVans()
        if(!vans){
            return res.status(404).json({error: 'No vans found'})
        }
        console.log(vans)
        res.status(200).json({'data': vans})
    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

exports.createVan = async (req, res) => {
    try{
        const { name, type, price, location, image, sleeps, available, description, features, specifications, images } = req.body;
        const newVan = { name, type, price, location, image, sleeps, available, description, features, specifications, images }
        const createdVan = await VanService.createVan(newVan)
        res.status(201).json({'data': createdVan})
    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

exports.getVanById = async (req, res) => {
    try{
        const { id } = req.params;
        const van = await VanService.getVanById(id)
        if(!van){
            return res.status(404).json({error: 'Van not found'})
        }
        res.status(200).json({'data': van})
    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

exports.updateVan = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, type, price, location, image, sleeps, available, description, features, specifications, images } = req.body;
        const updatedVan = { name, type, price, location, image, sleeps, available, description, features, specifications, images }
        const van = await VanService.updateVan(id, updatedVan)
        if(!van){
            return res.status(404).json({error: 'Van not found'})
        }
        res.status(200).json({'data': van})
    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

exports.deleteVan = async (req, res) => {
    try{
        const { id } = req.params;
        const van = await VanService.deleteVan(id)
        if(!van){
            return res.status(404).json({error: 'Van not found'})
        }
        res.status(200).json({'data': van})
    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

