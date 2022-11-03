DROP TABLE IF EXISTS customers;

CREATE TABLE IF NOT EXISTS customers(
    customer_id serial NOT NULL PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    date_became_customer date DEFAULT CURRENT_DATE,
    address1 VARCHAR(50) NOT NULL,
    address2 VARCHAR(20) NOT NULL,
    state VARCHAR(2) NOT NULL,
    country VARCHAR(20) NOT NULL DEFAULT 'United States',
    email VARCHAR(50) NOT NULL,
    login VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
);

