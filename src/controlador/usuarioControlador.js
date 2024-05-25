const controlador={};


controlador.listarUsuarios=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM usuario',(err,usuarios)=>{
           if(err){
              res.json(err);
           }
           console.log(usuarios);
           res.render('registroUsuarios.ejs',{
            data:usuarios
           });
        })
    });
}

controlador.guardarUsuarios=(req,res)=>{
    const datos=req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO usuario set ?',[datos],(err,respuesta)=>{
            console.log(req.body);
            res.render('registro.ejs');
        });
    });
}

controlador.eliminarUsuarios=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM usuario WHERE id = ?',[id],(err,filas)=>{
            req.getConnection((err,conn)=>{
                conn.query('SELECT * FROM usuario',(err,usuarios)=>{
                   if(err){
                      res.json(err);
                   }
                   console.log(usuarios);
                   res.render('registroUsuarios.ejs',{
                    data:usuarios
                   });
                })
            });
        })
    });
}

controlador.buscar=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM usuario WHERE id=?',[id],(err,persona)=>{
           res.render('actualizar.ejs',{
            data:persona
           });
        })
    });
}

controlador.actualizar=(req,res)=>{
    const {id}=req.params;
    const nuevosDatos=req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE usuario set ? WHERE id=?',[nuevosDatos,id],(err,filas)=>{
            res.render('inicio.ejs');
        });
    });
}

controlador.inicio=(req,res)=>{
    res.render('inicio.ejs');
}

controlador.gastos=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM gastos',(err,gasto)=>{
           if(err){
              res.json(err);
           }
           res.render('registroGastos.ejs',{
            data:gasto
           });
        })
    });
}

controlador.formulario=(req,res)=>{
    res.render('registro.ejs');
}

//******************************************************************************* */
controlador.ingreso=(req,res)=>{
    res.render('ingregarGastos.ejs');
}

controlador.saveGastos=(req,res)=>{
    const datos=req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO gastos set ?',[datos],(err,respuesta)=>{
            console.log(req.body);
            res.render('ingregarGastos.ejs');
        });
    });
}

controlador.listarGastos=(req,res)=>{

}

controlador.eliminarGasto=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM gastos WHERE id = ?',[id],(err,filas)=>{
            req.getConnection((err,conn)=>{
                conn.query('SELECT * FROM gastos',(err,gastos)=>{
                   if(err){
                      res.json(err);
                   }
                   console.log(gastos);
                   res.render('registroGastos.ejs',{
                    data:gastos
                   });
                })
            });
        })
    });
}

controlador.buscarGastos=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM gastos WHERE id=?',[id],(err,gasto)=>{
           res.render('modificarGastos.ejs',{
            data:gasto
           });
        })
    });
}

controlador.actualizarGastos=(req,res)=>{
    const {id}=req.params;
    const nuevosDatos=req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE gastos set ? WHERE id=?',[nuevosDatos,id],(err,filas)=>{
            res.render('inicio.ejs');
        });
    });
}



module.exports=controlador;