const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

// Get all companies for autocomplete
router.get('/', async (req, res) => {
    try {
        const companies = await Company.find().sort({ name: 1 });
        res.json(companies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get company by name
router.get('/:name', async (req, res) => {
    try {
        const company = await Company.findOne({
            name: { $regex: `^${req.params.name}$`, $options: 'i' }
        });

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        res.json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Search companies (for autocomplete)
router.get('/search/:query', async (req, res) => {
    try {
        const companies = await Company.find({
            name: { $regex: req.params.query, $options: 'i' }
        }).limit(10);

        res.json(companies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
