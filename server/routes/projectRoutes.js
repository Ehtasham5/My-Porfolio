import express from 'express';
import {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getProjects).post(protect, createProject);
router.route('/slug/:slug').get(getProjectBySlug);
router.route('/:id').put(protect, updateProject).delete(protect, deleteProject);

export default router;
