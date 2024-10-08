import { Router } from 'express';
import * as studentsControllers from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';


const router = Router();

router.get('/', ctrlWrapper(studentsControllers.getStudentsController) );

router.get('/:studentId', ctrlWrapper(studentsControllers.getStudentByIdController));

export default router;
