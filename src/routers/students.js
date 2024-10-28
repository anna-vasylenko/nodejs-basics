import { Router } from 'express';
import * as studentsControllers from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/students.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

const router = Router();

router.use(authenticate);

router.get(
  '/',
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(studentsControllers.getStudentsController),
);

router.get(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isValidId,
  ctrlWrapper(studentsControllers.getStudentByIdController),
);

router.post(
  '/',
  checkRoles(ROLES.TEACHER),
  validateBody(createStudentSchema),
  ctrlWrapper(studentsControllers.createStudentController),
);

router.delete(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  isValidId,
  ctrlWrapper(studentsControllers.deleteStudentController),
);

router.put(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  isValidId,
  validateBody(createStudentSchema),
  ctrlWrapper(studentsControllers.upsertStudentController),
);

router.patch(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isValidId,
  validateBody(updateStudentSchema),
  ctrlWrapper(studentsControllers.patchStudentController),
);

export default router;
