const express=require('express');
const rutas=express.Router();

const controlador = require('../controlador/usuarioControlador');

rutas.get('/listar',controlador.listarUsuarios);
rutas.get('/inicio',controlador.inicio);
rutas.get('/gastos',controlador.gastos);
rutas.get('/formulario',controlador.formulario);
rutas.post('/guardarUsuarios',controlador.guardarUsuarios)
rutas.get('/eliminarUsuario/:id',controlador.eliminarUsuarios);
rutas.get('/buscarUsuario/:id',controlador.buscar);
rutas.post('/buscarUsuario/:id',controlador.actualizar);
rutas.get('/gastos1',controlador.ingreso);
rutas.post('/guardarGastos',controlador.saveGastos);
rutas.get('/listarGastos',controlador.listarGastos);
rutas.get('/borrar/:id',controlador.eliminarGasto);
rutas.get('/buscarGasto/:id',controlador.buscarGastos);
rutas.post('/buscarGasto/:id',controlador.actualizarGastos);

module.exports=rutas;