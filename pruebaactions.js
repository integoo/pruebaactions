// app.js
//eugalde
const express = require('express');
const app = express();
const PORT = 3100;

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta GET principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación con Express!');
});

// Ruta GET para obtener un mensaje de bienvenida con un nombre
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}!`);
});

// Ruta POST para crear un recurso (por ejemplo, un usuario)
app.post('/usuario', (req, res) => {
  const usuario = req.body;
  res.status(201).json({
    mensaje: 'Usuario creado con éxito',
    usuario
  });
});

// Ruta PUT para actualizar un recurso (por ejemplo, un usuario)
app.put('/usuario/:id', (req, res) => {
  const { id } = req.params;
  const nuevosDatos = req.body;
  res.json({
    mensaje: `Usuario con ID ${id} actualizado`,
    nuevosDatos
  });
});

// Ruta DELETE para eliminar un recurso (por ejemplo, un usuario)
app.delete('/usuario/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    mensaje: `Usuario con ID ${id} eliminado`
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
