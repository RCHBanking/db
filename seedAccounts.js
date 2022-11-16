const { query, pool } = require('./db.js');
const { faker } = require('@faker-js/faker');


//creates checking and saving account for each customer. 
//checking from $1000 to $10000 w/ 2 decimals. change as needed.
//savings from $3000 to $100000 w/ 2 decimals. 

query('SELECT id FROM customers')
    .then(res => {
        for (let row of res.rows) {
            const sql = {
                text: 'INSERT INTO accounts(name, balance, customer_id) VALUES($1, $2, $3) RETURNING *',
                values: ['checking',faker.finance.amount(1000, 10000, 2), row.id]
            }
            
            query(sql);
            const sql2 = {
                text: 'INSERT INTO accounts(name, balance, customer_id) VALUES($1, $2, $3) RETURNING *',
                values: ['savings',faker.finance.amount(3000, 100000, 2), row.id]
            }
            query(sql2);
        }
    })
    .then(() => console.log('accounts seeded'))
    .catch(e => console.error(e.stack));
