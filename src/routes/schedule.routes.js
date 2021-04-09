const express = require('express');
const router = express.Router();

const schedulesCtrl = require('../controllers/schedule.controller')

router.get('/', schedulesCtrl.getSchedules)
router.get('/:scheduleId', schedulesCtrl.getSchedule)
router.post('/', schedulesCtrl.createSchedule)
router.put('/:scheduleId', schedulesCtrl.updateSchedule)
router.delete('/:scheduleId', schedulesCtrl.deleteSchedule)

module.exports = router;
