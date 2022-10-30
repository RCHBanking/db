const { Pool } = require("pg");
const config = require("./dbConfig");

const pool = new Pool(config);

pool.connect((err) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  return console.log("conneted to psql");
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
