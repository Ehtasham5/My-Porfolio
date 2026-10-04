import express from 'express';
import { authAdmin, logoutAdmin, getAdminProfile } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', authAdmin);
router.post('/logout', logoutAdmin);
router.route('/profile').get(protect, getAdminProfile);

export default router;
