const express=require('express');
const app=express();
const path=require('path');
const morgan=require('morgan');
const mysql=require('mysql');
const myConnection=require('express-myconnection');

//Importando rutas

const rutasUsuario=require('./rutas/usuariosRutas');

//Configurar express

app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'vistas'));

//Middleware

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:3307,
    database:'proyectoNode'
},'single'));
app.use(express.urlencoded({extended:false}));

//Rutas

app.use('/',rutasUsuario);

//Archivos estáticos

app.use(express.static(path.join(__dirname,'publico')));

app.listen(app.get('port'),()=>{
    console.log('Servidor disponible en el puerto 3000')
});