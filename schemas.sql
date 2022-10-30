DROP SCHEMA IF EXISTS api;
CREATE SCHEMA IF NOT EXISTS api;
CREATE EXTENSION uuid-ossp;

CREATE TABLE IF NOT EXISTS api.customers(
    customer_id bigint NOT NULL PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    date_became_customer date DEFAULT CURRENT_DATE,
    addr1 VARCHAR(50) NOT NULL,
    addr2 VARCHAR(20) NOT NULL,
    state VARCHAR(2) NOT NULL,
    country VARCHAR(20) NOT NULL DEFAULT 'United States',
    email VARCHAR(50) NOT NULL,
    login VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
);

