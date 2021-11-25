create database if not exists AcademiaSlow;
use AcademiaSlow;

create table usuario(
IdCadastro int primary key auto_increment,
NomeUser varchar(45) not null,
EmailUser varchar(45) not null,
SenhaUser varchar(45) not null,
BiotipoUser varchar(20) not null,
AlturaUser decimal(4,2),
IdadeUser int,
CorUser varchar(45),
GeneroUser varchar(45),
DataNascUser varchar(40)
);

