const express = require('express')
const app = express()
const port = 3001

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'administrador',
  host: 'dbspaceinvaders.postgres.database.azure.com',
  database: 'postgres',
  password: 'rubenalvaroPAP3',
  port: 5432,
});

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://dbspaceinvaders.postgres.database.azure.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Access-Control-Allow-Headers"
    );
    next();
  });

  const getMerchants = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        console.log("Hello, world!");
        pool.query("SELECT * FROM partidas", (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
        });
      });
    } catch (error_1) {
      console.error(error_1);
      throw new Error("Internal server error");
    }
  };

app.get('/', (req, res) => {
  getMerchants()
  .then(response => {
    res.status(200).send(response);
    console.log("ejecutado")
  })
  .catch(error => {
    res.status(500).send(error);
    console.log("error")
  })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })