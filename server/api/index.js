import { Router } from 'express';

const router = Router();

router.use('/authentication', require('./authentication'));
router.use('/user', require('./user'));

module.exports = router;