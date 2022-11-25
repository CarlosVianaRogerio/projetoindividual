create database bodybuild;
use bodybuild;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkhabilidade int,
    foreign key (fkhabilidade) references habilidade (idhabilidade));


    
select tipo, count(fkhabilidade) from usuario join habilidade on fkhabilidade = idhabilidade group by tipo;
    
    

create table quiz (
	idquiz int primary key auto_increment,
    pratica int,
    autoestima int,
    sono int,
    costas int,
    estresse int,
    concentracao int,
    fkusuario int, 
    foreign key (fkusuario) references usuario (id));
    
create table habilidade (
	idhabilidade int primary key auto_increment,
    tipo varchar(10));
    
    insert into habilidade (tipo) values
    ('Saude'),
    ('Autoestima'),
    ('Disposição');
    select * from habilidade;
    
    
    