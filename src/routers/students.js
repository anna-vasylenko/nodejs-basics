import { Router } from 'express';
import * as studentsControllers from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/students.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(studentsControllers.getStudentsController));

router.get(
  '/:studentId',
  isValidId,
  ctrlWrapper(studentsControllers.getStudentByIdController),
);

router.post(
  '/',
  validateBody(createStudentSchema),
  ctrlWrapper(studentsControllers.createStudentController),
);

router.delete(
  '/:studentId',
  isValidId,
  ctrlWrapper(studentsControllers.deleteStudentController),
);

router.put(
  '/:studentId',
  isValidId,
  validateBody(createStudentSchema),
  ctrlWrapper(studentsControllers.upsertStudentController),
);

router.patch(
  '/:studentId',
  isValidId,
  validateBody(updateStudentSchema),
  ctrlWrapper(studentsControllers.patchStudentController),
);

export default router;
