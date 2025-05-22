const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const roleMiddleware = require('../middlewares/role');
const {
  createRequest,
  getMyRequests,
  getPendingRequests,
  updateRequestStatus,
} = require('../controllers/request.controller');

router
  .route('/')
  .post(protect, roleMiddleware(['Employee']), createRequest);

router
  .route('/myrequests')
  .get(protect, getMyRequests);

router
  .route('/pending')
  .get(protect, roleMiddleware(['Manager', 'Admin']), getPendingRequests);

router
  .route('/:id')
  .patch(protect, roleMiddleware(['Manager', 'Admin']), updateRequestStatus);

module.exports = router;