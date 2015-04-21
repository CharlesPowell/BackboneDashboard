CREATE DATABASE cards_db;
\c cards_db;

CREATE TABLE card (id SERIAL PRIMARY KEY, title VARCHAR(255), message VARCHAR(255));
