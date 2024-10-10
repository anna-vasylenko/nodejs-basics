import { Router } from 'express';
import * as studentsControllers from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';


const router = Router();

router.get('/', ctrlWrapper(studentsControllers.getStudentsController) );

router.get('/:studentId', ctrlWrapper(studentsControllers.getStudentByIdController));

router.post('/', ctrlWrapper(studentsControllers.createStudentController));

router.delete('/:studentId', ctrlWrapper(studentsControllers.deleteStudentController));

router.put('/:studentId', ctrlWrapper(studentsControllers.upsertStudentController));

router.patch('/:studentId', ctrlWrapper(studentsControllers.patchStudentController));

export default router;
