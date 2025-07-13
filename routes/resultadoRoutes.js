import express from 'express';
import { guardarResultado, obtenerResultados, calcularRanking } from '../controllers/resultadoController.js';

const router = express.Router();

router.post('/', guardarResultado);
router.get('/', obtenerResultados);
router.post('/ranking', calcularRanking); // ← ¡Esta es la nueva ruta!

export default router;
