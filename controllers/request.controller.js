const asyncHandler = require('express-async-handler');
const Request = require('../models/Request');
const Software = require('../models/Software');

// @desc    Create new access request
// @route   POST /api/requests
// @access  Employee
const createRequest = asyncHandler(async (req, res) => {
  const { softwareId, accessType, reason } = req.body;

  const software = await Software.findById(softwareId);

  if (!software) {
    res.status(404);
    throw new Error('Software not found');
  }

  if (!software.accessLevels.includes(accessType)) {
    res.status(400);
    throw new Error('Invalid access type for this software');
  }

  const request = await Request.create({
    user: req.user._id,
    software: softwareId,
    accessType,
    reason,
  });

  res.status(201).json(request);
});

// @desc    Get all requests for a user
// @route   GET /api/requests/myrequests
// @access  Private
const getMyRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({ user: req.user._id })
    .populate('software', 'name description')
    .sort({ createdAt: -1 });
  res.json(requests);
});

// @desc    Get all pending requests (for managers)
// @route   GET /api/requests/pending
// @access  Manager/Admin
const getPendingRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({ status: 'Pending' })
    .populate('user', 'username')
    .populate('software', 'name description')
    .sort({ createdAt: -1 });
  res.json(requests);
});

// @desc    Update request status
// @route   PATCH /api/requests/:id
// @access  Manager/Admin
const updateRequestStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const request = await Request.findById(req.params.id);

  if (!request) {
    res.status(404);
    throw new Error('Request not found');
  }

  request.status = status;
  await request.save();

  res.json(request);
});



module.exports = {
  createRequest,
  getMyRequests,
  getPendingRequests,
  updateRequestStatus,
  getMyRequests
};