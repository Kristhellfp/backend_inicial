import express from 'express';
import cors from 'cors';
import resultadoRoutes from './routes/resultadoRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/resultados', resultadoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
