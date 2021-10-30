create schema baritas;
use baristas;

create table users (
user_id int(11) NOT NULL auto_increment,
Firstname varchar(20) NOT NULL,
lastname varchar(20) NOT NULL,
Pass varchar(100) NOT NULL,
user_role varchar (2) NOT NULL,
stats varchar(2) NOT NULL,
username varchar(20) NOT NULL,
primary key (user_id) 
);

create table login(
user_id int(11) NOT NULL auto_increment,
log datetime NOT NULL,
primary key(user_id)
);

