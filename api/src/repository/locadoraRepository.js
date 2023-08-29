import connection from "./connection.js";


export async function listarTodos() {
  let comando = `
    select id_cliente     as id,
           nm_cliente     as cliente,
           ds_email       as email,
           ds_numero      as  numero ,
           ds_cpf         as cpf,
           ds_cnh         as cnh 
      from tb_cliente
  `

  let [dados] = await connection.query(comando);
  return dados;
}


export async function listarPorNome(nome) {
  let comando = `
    select id_cliente      as id,
            nm_cliente     as cliente,
            ds_email       as email,
            ds_numero      as numero,
            ds_cpf         as cpf,
            ds_cnh         as cnh
      from tb_cliente where nm_cliente like ?
  `

  let [dados] = await connection.query(comando, ['%'+nome+'%']);
  return dados;
}



export async function inserir(locadora) {
  let comando = 
  `insert into tb_cliente (nm_cliente, ds_email, ds_numero, ds_cpf, ds_cnh)
                            values (?, ?, ?, ?, ?)`

  let [info] = await connection.query(comando,
    [
      locadora.cliente,    
      locadora.email,
      locadora.numero,
      locadora.cpf,
      locadora.cnh
    ]);
  
  locadora.id = info.insertId;
  return locadora;
}



export async function alterar(id, locadora) {
  let comando = `
    update tb_locadora 
      set nm_cliente = ?,      
          ds_email = ?, 
          ds_numero = ?, 
          ds_cpf = ?, 
          ds_cnh = ?
    where id_cliente = ?
  `

  let [info] = await connection.query(comando,
    [
      locadora.cliente,
      locadora.email,
      locadora.numero,
      locadora.cpf,
      locadora.cnh,
      id
    ]);
  
  let linhasAfetadas = info.affectedRows;
  return linhasAfetadas;
}



export async function deletar(id) {
  let comando = `
    delete from tb_cliente where id_cliente = ?
  `

  let [info] = await connection.query(comando, [id]);
  let linhasAfetadas = info.affectedRows;
  return linhasAfetadas;
}

