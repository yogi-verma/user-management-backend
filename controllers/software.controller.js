const asyncHandler = require('express-async-handler');
const Software = require('../models/Software');
const User = require('../models/User')

// @desc    Create new software
// @route   POST /api/software
// @access  Admin
const createSoftware = asyncHandler(async (req, res) => {
  const { name, description, accessLevels } = req.body;

  const software = await Software.create({
    name,
    description,
    accessLevels,
  });

  res.status(201).json(software);
});

// @desc    Get all software
// @route   GET /api/software
// @access  Public
const getSoftware = asyncHandler(async (req, res) => {
  const software = await Software.find({});
  res.json(software);
});





module.exports = {
  createSoftware,
  getSoftware
};