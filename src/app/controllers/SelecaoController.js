import conexao from "../database/conexao.js"

class SelecaoController {
    index(req, res) {
        //res.status(200).send(selecoes)
        const sql = "SELECT * FROM selecoes;"
        conexao.query(sql, (error, result) => {
            if(error) {
                console.log(error)
                res.status(404).json({'error': `${error}`})
            }
            else{
                res.status(200).json(result)
            }
        })
    }

    show(req, res) {
        const id = req.params.id
        const sql = "SELECT * FROM selecoes WHERE id=?"
        conexao.query(sql, id ,(error, result) => {
            const row = result[0]
            if(error) {
                console.log(error)
                res.status(404).json({'error': `${error}`})
            }
            else{
                res.status(200).json(row)
            }
        })
    }

    store(req, res) {
        const selecao = req.body;
        const sql = "INSERT INTO selecoes SET ?;"
        conexao.query(sql, selecao ,(error, result) => {
            if(error) {
                console.log(error)
                res.status(400).json({'error': `${error}`})
            }
            else{
                res.status(201).json(result)
            }
        })
    }
    update(req, res) {
        const id = req.params.id;
        const selecao = req.body;
        const sql = "UPDATE selecoes SET ? WHERE id=?;";
        conexao.query(sql, [selecao, id], (error, result) => {
            if(error){
                res.status(404).json({'error': error})
            }
            else{
                res.status(200).json(result)
            }
        })
    
    }

    delete(req, res) {
        const id = req.params.id;
        const sql = "DELETE FROM selecoes WHERE id=?;";
        conexao.query(sql, id, (error, result ) => {
            if (error){
                res.status(404).json({'error': error})
            }
            else{
                res.status(200).json(result)
            }
        })
    }

}

//padrao singleton
export default new SelecaoController()