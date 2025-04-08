const express = require('express');
const router = express.Router();
const { 
    getAllVans,
    createVan,
    getVanById,
    updateVan,
    deleteVan
} = require('../controllers/VanControllers');

router.route('/').get(getAllVans).post(createVan);
router.route('/:id').get(getVanById).put(updateVan).delete(deleteVan);

router.get('/search', (req, res) => {
    res.json({ 'msg': 'search vans' });
});

module.exports = router;    