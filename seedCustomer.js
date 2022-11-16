const axois = require("axios");
const { faker } = require('@faker-js/faker');

for (let i = 0; i < 10; i++) {
    let user = {
        firstname: faker.name.firstName(),
        surname: faker.name.lastName(),
        address1: faker.address.streetAddress(),
        address2: faker.address.secondaryAddress(),
        state: faker.address.stateAbbr(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: "password",
    }
    axios.post("http://localhost:8080/api/customer/register", user);
}
