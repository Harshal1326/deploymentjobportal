import { Router } from 'express';
import { validateJobInput } from '../middleware/validationMiddleware.js';
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from '../controllers/jobController.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

// ✅ Place this BEFORE /:id route
router.route('/stats').get(showStats);

router.route('/')
  .get(getAllJobs)
  .post(validateJobInput, checkForTestUser, createJob);

router.route('/:id')
  .get(getJob)
  .patch(validateJobInput, checkForTestUser, updateJob)
  .delete(checkForTestUser, deleteJob);

export default router;







// import { Router } from 'express';
// import { validateJobInput } from '../middleware/validationMiddleware.js';
// const router = Router();

// import {
//   getAllJobs,
//   getJob,
//   createJob,
//   updateJob,
//   deleteJob,
//   showStats,
// } from '../controllers/jobController.js';
// import { checkForTestUser } from '../middleware/authMiddleware.js';

// router.route('/').get(getAllJobs).post(validateJobInput, checkForTestUser, createJob);
// router
//   .route('/:id')
//   .get(getJob)
//   .patch(validateJobInput,checkForTestUser, updateJob)
//   .delete(checkForTestUser, deleteJob);
// router.route('/stats').get(showStats);

// export default router;