create database if not exists AcademiaSlow;
drop database academiaslow;
use AcademiaSlow;

create table usuario(
IdCadastro int primary key auto_increment,
NomeUser varchar(45) not null,
EmailUser varchar(45) not null,
SenhaUser varchar(45) not null,
BiotipoUser varchar(20) not null, 
check(BiotipoUser = "Mesomorfo" or BiotipoUser = "Ectomorfo" or BiotipoUser = "Endomorfo")
);

select * from usuario;

insert into usuario values 
(null,'Wesley', 'lele@gmail.com', '1234', 'Mesomorfo'),
(null,'Kayky', 'ky@gmail.com', '1234', 'Ectomorfo'),
(null,'Vinicius', 'vini@gmail.com', '1234', 'Endomorfo'),
(null,'Almir', 'al@gmail.com', '1234', 'Mesomorfo'),
(null,'Marcos', 'ma@gmail.com', '1234', 'Mesomorfo'),
(null,'Pedro', 'pe@gmail.com', '1234', 'Mesomorfo'),
(null,'Matheus', 'th@gmail.com', '1234', 'Mesomorfo'),
(null,'Claudio', 'dio@gmail.com', '1234', 'Mesomorfo'),
(null,'Will', 'll@gmail.com', '1234', 'Mesomorfo'),
(null,'Brandão', 'ao@gmail.com', '1234', 'Endomorfo'),
(null,'Paula', 'papa@gmail.com', '1234', 'Endomorfo'),
(null,'Kaiani', 'kai@gmail.com', '1234', 'Endomorfo'),
(null,'Marise', 'mar@gmail.com', '1234', 'Ectomorfo'),
(null,'Marlon', 'mars@gmail.com', '1234', 'Ectomorfo'),
(null,'Samira', 'lele@gmail.com', '1234', 'Ectomorfo'),
(null,'Salas', 'sala@gmail.com', '1234', 'Ectomorfo');

select count(BiotipoUser) from usuario where BiotipoUser = 'Ectomorfo';


create table caracteristica(
AlturaUser decimal(4,2),
IdadeUser int,
CorUser varchar(45),
GeneroUser varchar(45),
DataNascUser varchar(40),
fk_usuario int,
foreign key(fk_usuario) references usuario(IdCadastro)
);

select * from caracteristica;

