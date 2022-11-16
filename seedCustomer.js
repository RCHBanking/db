const axois = require("axios");
const { query } = require("./db.js");
const { faker } = require('@faker-js/faker');

for (let i = 0; i < 15; i++) {
    const sql = {
        text: 'INSERT INTO customers(firstname, surname, address1, address2, state, email, username, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
        values: [
            faker.name.firstName(),
            faker.name.lastName(),
            faker.address.streetAddress(),
            faker.address.secondaryAddress(),
            faker.address.stateAbbr(),
            faker.internet.email(),
            faker.internet.userName(),
            "password"]
    };
    query(sql).then(() => console.log(sql.values));
}



