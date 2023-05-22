import SQLite from "react-native-sqlite-storage"; 
SQLite.DEBUG(true); 
SQLite.enablePromise(true);

const database_name = "Almoco.db"; 
const database_version = "1.0"; 
const database_displayname = "Almoco";
const database_size = 400000;
                              
export default class AlmocoDatabase
{
    Conectar() 
    {  
        let db;
        return new Promise((resolve) => 
        {    
            console.log("Checando a integridade do plugin ...");    
            SQLite.echoTest().then(() => 
            {        
                console.log("Integridade Ok ...");        
                console.log("Abrindo Banco de Dados ...");        
                SQLite.openDatabase(database_name, database_version, database_displayname, database_size).then(DB => {
                        db = DB;            
                        console.log("Banco de dados Aberto");            
                        db.executeSql('SELECT 1 FROM Almoco LIMIT 1').then(() => {
                            console.log("O banco de dados está pronto ... Executando Consulta SQL ...");
                        }).catch((error) =>{
                            console.log("Erro Recebido: ", error);
                            console.log("O Banco de dados não está pronto ... Criando Dados");
                            db.transaction((tx) => {
                                tx.executeSql('CREATE TABLE IF NOT EXISTS Almoco (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(100), calorias varchar(100), imagem text)');
                            }).then(() => {
                                console.log("Tabela criada com Sucesso");                
                            }).catch(error => {                    
                                console.log(error);                
                            });            
                        });            
                    resolve(db);          
                }).catch(error => {           
                    console.log(error);          
                });      
            }).catch(error => {        
                console.log("echoTest Falhou - plugin não funcional");      
            });    
        }); 
    }

    Desconectar(db) {  
        if (db) {    
            console.log("Fechando Banco de Dados");    
            db.close().then(status => {        
                console.log("Banco de dados Desconectado!!");      
            }).catch(error => {        
                this.errorCB(error);      
            });  
        } else {    
            console.log("A conexão com o banco não está aberta");  
        } 
    };
         
    Listar() {  
        return new Promise((resolve) => {    
            const lista = [];    
            this.Conectar().then((db) => {      
                db.transaction((tx) => {      
                    tx.executeSql('SELECT * FROM Almoco', []).then(([tx,results]) => {          
                    console.log("Consulta completa");          
                    var len = results.rows.length;          
                    for (let i = 0; i < len; i++) {            
                        let row = results.rows.item(i);            
                        const { id, nome, calorias, imagem } = row;
                        lista.push({id, nome, calorias, imagem});
                    }
                    resolve(lista);
                });
            }).then((result) => {
                this.Desconectar(db);
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    });
    }
              
    Inserir(almoco) {  
        return new Promise((resolve) => {    
            this.Conectar().then((db) => {      
                db.transaction((tx) => {     
                    tx.executeSql('INSERT INTO Almoco(nome, calorias, imagem) VALUES (?, ?, ?)', [almoco.nome, almoco.calorias, almoco.imagem]).then(([tx, results]) => { 
                        resolve(results);        
                    });      
                }).then((result) => {        
                    this.Desconectar(db);      
                }).catch((err) => {        
                    console.log(err);      
                });    
            }).catch((err) => {      
                console.log(err);    
            });  
        });  
    }

    Remover(id) {  
        return new Promise((resolve) => {    
            this.Conectar().then((db) => {      
                db.transaction((tx) => {      
                    tx.executeSql('DELETE FROM Almoco WHERE id = ?', [id]).then(([tx, results]) => {          
                        console.log(results);          
                        resolve(results);        
                    });      
                }).then((result) => {        
                    this.Desconectar(db);      
                }).catch((err) => {        
                    console.log(err);      
                });    
            }).catch((err) => {      
                console.log(err);    
            });  
        });  
    }
}