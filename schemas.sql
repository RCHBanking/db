DROP TABLE IF EXISTS customers;

CREATE TABLE IF NOT EXISTS customers(
    id serial NOT NULL PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    date_became_customer date DEFAULT CURRENT_DATE,
    address1 VARCHAR(50) NOT NULL,
    address2 VARCHAR(20) NOT NULL,
    city VARCHAR(30) NOT NULL,
    state VARCHAR(2) NOT NULL,
    zipcode VARCHAR(5) NOT NULL,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS accounts;

CREATE TABLE IF NOT EXISTS accounts(
    id serial NOT NULL PRIMARY KEY,
    account_type VARCHAR(20) NOT NULL,
    balance numeric NOT NULL,
    customer_id int4 NOT NULL
);

DROP TABLE IF EXISTS transactions;

CREATE TABLE IF NOT EXISTS transactions(
    id serial NOT NULL PRIMARY KEY,
    description VARCHAR(100),
    amount numeric NOT NULL,
    transaction_type VARCHAR(20) NOT NULL,
    account_id int4 NOT NULL
);

