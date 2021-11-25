create database if not exists AcademiaSlow;
use AcademiaSlow;

create table usuario(
IdCadastro int primary key auto_increment,
NomeUser varchar(45) not null,
EmailUser varchar(45) not null,
SenhaUser varchar(45) not null
);



select * from usuario;

insert into usuario values 
(null,'Wesley','wesley@gmail.com','1234');

create table caracteristica(
IdCarac int primary key auto_increment,
AlturaUser decimal(4,2),
IdadeUser int,
CorUser varchar(45),
GeneroUser varchar(45),
DataNascUser date,
fk_usuario int,
foreign key (fk_usuario) references usuario(IdCadastro)
)auto_increment = 100;

select * from caracteristica;

insert into caracteristica values 
(null,1.85,18,'Preto','Neutro',20200909,1);

select * from usuario us
join caracteristica cara 
on cara.fk_usuario = us.IdCadastro;


/*create table objetivo(
Idobjetivo int primary key auto_increment,
fk_cadastroobjetivo int,
fk_caracteristica int,
foreign key (fk_cadastroobjetivo) references usuario (IdCadastro), 
foreign key (fk_caracteristica) references caracteristica (Idcarac),
objetivoUser varchar(60),
dataobjetivo date
) auto_increment = 1000;
 
insert into objetivo values
(null,1,100,"Ganhar massa",20200909);

select * from objetivo;
select * from usuario;
select * from caracteristica;

select NomeUser, AlturaUser, GeneroUser, objetivoUser
from objetivo
join caracteristica on Idcarac = fk_cadastro
join usuario on fk_cadastroobjetivo = Idcarac;*/