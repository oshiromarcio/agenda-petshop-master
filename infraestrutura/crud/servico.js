const executaQuery = require('../database/queries')

class Servico {
  lista() {
    const sql = 'SELECT * FROM Servicos';

    return executaQuery(sql);
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Servicos WHERE id=${id}`;

    return executaQuery(sql)
      .then(dados => dados[0]);
  }

  adiciona(item) {
    const { nome, preco, descricao } = item;
    const sql = `INSERT INTO Servicos(nome, Preco, Descricao) VALUES('${nome}', ${preco}, '${descricao}')`;

    return executaQuery(sql)
      .then(resposta => {
        return ({
          id: resposta.insertId,
          ...item
        })
      });
  }

  atualiza(novoItem) {
    const { id, nome, preco, descricao } = novoItem;
    const sql = `UPDATE Servicos SET nome='${nome}', Preco=${preco}, Descricao='${descricao}' WHERE id=${id}`;

    return executaQuery(sql)
      .then(() => novoItem);
  }

  deleta(id) {
    const sql = `DELETE FROM Servicos WHERE id=${id}`;

    return executaQuery(sql)
      .then(() => id);
  }
}

module.exports = new Servico;
