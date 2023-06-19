const express = require('express');

const app = express();

app.use(express.json())

// GET - Buscar inf dentro do servidor
// POST - Inserir uma inf no servidor
// PUT - Alterar uma inf no servidor
// PATCH - Alterar uma inf especifica
// DELETE - Deletar uma inf no servidor


// Tipos de parâmetros ------
// Route Params => Enviados na rota p/ identificar um recurso p/ editar/deletar/buscar
// Query Params => Paginação / Filtro
// Body Params => Objetos enviaos para inserção/alteração (JSON)

app.get("/courses",(request,response)=>{
    const query = request.query;
    console.log(query)
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response)=> {
    const body = request.body;
    console.log(body)
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response)=>{
    const params = request.params;
    console.log(params)
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id",(request, response)=>{
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id",(request, response)=>{
    return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3333);