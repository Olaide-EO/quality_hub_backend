const router = require('express').Router();

const appointmentsController = require('./appointments-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/:id', appointmentsController.appointments);
router.post('/', checkAuth, appointmentsController.addAppointment);
router.put('/:id', appointmentsController.updateAppointment);
router.post(
  '/email',
  checkAuth,
  appointmentsController.sendAppointmentEmail,
);
module.exports = router;
