const { query } = require('./db.js');
const { faker } = require('@faker-js/faker');


//creates checking and saving account for each customer. 
//checking from $5000 to $10000 w/ 2 decimals. change as needed.
//savings from $5000 to $100000 w/ 2 decimals. 

query('SELECT id FROM customers')
    .then(res => {
        for (let row of res.rows) {
            const sql = {
                text: 'INSERT INTO accounts(name, account_type, balance, customer_id) VALUES($1, $2, $3, $4) RETURNING *',
                values: ['checking','CHECKING',faker.finance.amount(5000, 10000, 2), row.id]
            }
            
            query(sql);
            const sql2 = {
                text: 'INSERT INTO accounts(name,account_type, balance, customer_id) VALUES($1, $2, $3, $4) RETURNING *',
                values: ['savings','SAVINGS',faker.finance.amount(5000, 100000, 2), row.id]
            }
            query(sql2);
        }
    })
    .then(() => console.log('accounts seeded'))
    .catch(e => console.error(e.stack));
