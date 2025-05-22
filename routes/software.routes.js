const express = require('express');
const router = express.Router();
const { protect, roleAuth } = require('../middlewares/auth');
const roleMiddleware = require('../middlewares/role');
const {
  createSoftware,
  getSoftware
} = require('../controllers/software.controller');

router
  .route('/')
  .post(protect, roleMiddleware(['Admin']), createSoftware)
  .get(getSoftware);



module.exports = router;