create schema baritas;
use baritas;

create table users (
user_id int(11) NOT NULL auto_increment,
Firstname varchar(20) NOT NULL,
lastname varchar(20) NOT NULL,
Pass varchar(100) NOT NULL,
user_role varchar (2) NOT NULL,
stats varchar(2) NOT NULL,
username varchar(25) NOT NULL,
primary key (user_id) 
);

create table login(
user_id int(11) NOT NULL auto_increment,
log datetime NOT NULL,
primary key(user_id)
);

create table Menu(
menu_id int(11) NOT NULL auto_increment,
name_of_food varchar(100) NOT NULL,
category varchar(100) NOT NULL,
price varchar(20) NOT NULL,
img varchar(50) NOT NULL,
size varchar(2),
restaurant int(11) NOT NULL,
primary key (menu_id) 
);

create table inventory(
product_id int(11) NOT NULL auto_increment,
product_name varchar(100) NOT NULL,
category varchar(100) NOT NULL,
Unit_price varchar(50) NOT NULL,
in_stock int(11) NOT NULL,
Measurement varchar(10) NOT NULL,
restaurant int(11) NOT NULL,
in_stock_limit int(11) NOT NULL,
primary key(product_id)
);

create table orders(
order_id int(11) NOT NULL auto_increment,
`date` date NOT NULL,
payment_method varchar(50) NOT NULL,
waiter varchar(50) NOT NULL,
total_cost varchar(50) NOT NULL,
stats varchar(2) NOT NULL,
primary key(order_id)
);

create table restaurant(
restaurant_id int(11) NOT NULL auto_increment,
restaurant_name varchar(50) NOT NULL,
Rest_token varchar(50) NOT NULL,
primary key(restaurant_id)
);

