const connection = require('../config/db');

async function listPosts(request, response) {
    const query = "SELECT * FROM posts WHERE `id` = ?";

    connection.query(query, (err, results) => {        
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de posts.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

async function storePost(request, response) {    
    const params = Array(
        request.body.data_post,
        request.body.img_post,
        request.body.tipo_exame,
        request.body.id  
    );
    
    const query = 'INSERT INTO posts(data_post, img_post, tipo_exame, id) values(?,?,?,?);';
    console.log(params)
    connection.query(query, params, (err, results) => {        
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: `Sucesso! Post cadastrado.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a ação. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }        
    })
}


module.exports = {
    listPosts,
    storePost
}