const { faker } = require('@faker-js/faker');

let user = {
    firstname: faker.name.firstName(),
    surname: faker.name.lastName(),
    address1: faker.address.streetAddress(),
    address2: faker.address.secondaryAddress(),
    city: faker.address.cityName(),
    state: faker.address.stateAbbr(),
    zipcode: faker.address.zipCode('#####'),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: "password",
}
console.log(user);

