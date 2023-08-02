DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
    dog_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    age INT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    email varchar(50) check (email like '%@%.%') NOT NULL PRIMARY KEY,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS books(
    book_number VARCHAR(100) PRIMARY KEY
) AS SELECT DISTINCT lower("BOOK_NAME") FROM CSVREAD('C:\work\arrakis_v3\java-api\src\main\\resources\db-bonds-data.csv');

CREATE TABLE IF NOT EXISTS book_users (
    book VARCHAR(100),
    users VARCHAR(100),
    FOREIGN KEY (book) REFERENCES books(book_number),
    FOREIGN KEY (users) REFERENCES users(email)
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
    bond_type ENUM('CORP','GOVN','SOVN') NOT NULL,
    bond_book_number VARCHAR(100),
    FOREIGN KEY (bond_book_number) REFERENCES books(book_number)
)AS SELECT "ISIN",max("CUSIP"), max("UNIT_PRICE"), max("COUPON_PERCENT"),max("BOND_CURRENCY"), max("ISSUER_NAME"), max("face_value (mn)"), max("BOND_MATURITY_DATE"), max("STATUS"), max("TYPE"), max(lower("BOOK_NAME")) FROM CSVREAD('C:\work\arrakis_v3\java-api\src\main\\resources\db-bonds-data.csv') GROUP BY "ISIN";

--
--CREATE TABLE IF NOT EXISTS trade (
--    trade_id INT PRIMARY KEY AUTO_INCREMENT,
--    trade_type ENUM('sell', 'buy') NOT NULL,
--    trade_currency ENUM('USD','GBP') NOT NULL,
--    quantity INT NOT NULL,
--    trade_settlement_date DATE NOT NULL,
--    trade_status ENUM('open', 'closed') NOT NULL,
--    trade_date DATE NOT NULL,
--    bond_holder INT FOREIGN KEY REFERENCES bond_holder(bond_holder_id)
--) AS SELECT ;
--
--CREATE TABLE IF NOT EXISTS bond_holder(
--    bond_holder_id INT AUTO_INCREMENT PRIMARY KEY,
--    bond_holder_name VARCHAR(100) NOT NULL
--);