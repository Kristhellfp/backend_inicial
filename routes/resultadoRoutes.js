import express from 'express';
import { guardarResultado, obtenerResultados } from '../controllers/resultadoController.js';

const router = express.Router();

router.post('/', guardarResultado);
router.get('/', obtenerResultados);

export default router;
