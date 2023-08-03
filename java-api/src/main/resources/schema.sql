
DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
    dog_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    age INT NOT NULL
);
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    email varchar(50) PRIMARY KEY NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS books(
    book_number VARCHAR(100) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS book_users (
    book_user_id INT AUTO_INCREMENT PRIMARY KEY,
    book VARCHAR(100),
    user_email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS bond(
    isin VARCHAR(12) PRIMARY KEY,
    cusip VARCHAR(30),
    unit_price FLOAT NOT NULL ,
    coupon_percent FLOAT NOT NULL,
    bond_currency ENUM('USD','GBP') NOT NULL,
    issuer_name VARCHAR(200) NOT NULL,
    face_value INT NOT NULL,
    bond_maturity_date VARCHAR(50) NOT NULL,
    bond_status ENUM('active', 'inactive') NOT NULL,
    bond_type ENUM('CORP','GOVN','SOVN') NOT NULL
);

--CREATE TABLE IF NOT EXISTS bond_holder(
--    bond_holder_name VARCHAR(100) PRIMARY KEY
--) AS SELECT DISTINCT("BOND_HOLDER") FROM CSVREAD('C:\working\arrakis_v3\java-api\src\main\\resources\db-bonds-data.csv');
----
--
--CREATE TABLE IF NOT EXISTS trade (
--    trade_type ENUM('sell', 'buy') NOT NULL,
--    trade_currency ENUM('USD','GBP') NOT NULL,
--    quantity INT NOT NULL,
--    trade_settlement_date VARCHAR(50) NOT NULL,
--    trade_status ENUM('open' , 'closed') NOT NULL,
--    trade_date VARCHAR(50) NOT NULL,
--    bond_holder VARCHAR(50) NOT NULL,
--    bond_reference VARCHAR(12),
--    book_reference VARCHAR(100),
--    FOREIGN KEY (bond_holder) REFERENCES bond_holder(bond_holder_name),
----    FOREIGN KEY (book_reference) REFERENCES books(book_number)
--) AS SELECT "TRADE_TYPE", "TRADE_CURRENCY","QUANTITY", "TRADE_SETTLEMENT_DATE", "TRADE_STATUS", "TRADE_DATE", "BOND_HOLDER", "ISIN", lower("BOOK_NAME") FROM CSVREAD('C:\working\arrakis_v3\java-api\src\main\\resources\db-bonds-data.csv');
--
--ALTER TABLE trade ADD trade_id INT AUTO_INCREMENT;
--ALTER TABLE trade ADD PRIMARY KEY (trade_id);
