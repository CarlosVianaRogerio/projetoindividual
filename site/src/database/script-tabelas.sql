create database bodybuild;
use bodybuild;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkhabilidade int,
    foreign key (fkhabilidade) references habilidade (idhabilidade));

select * from usuario;

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
    saude int,
    autoestima int,
    disposicao int);
    
    
    alter table habilidade drop column disposicao;
    alter table habilidade add column saude int;
    alter table habilidade add column autoestima int;
    alter table habilidade add column disposicao int;
    select * from habilidade;
    
    
    