create database bodybuild;
use bodybuild;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkhabilidade int,
    foreign key (fkhabilidade) references habilidade (idhabilidade));

insert into usuario (nome, email, senha, fkhabilidade) values
	('Joao','joao@gmail','dede',1),
	('Cleber','cleber@gmail','dede',1),
	('Alex','alex@gmail','dede',2),
	('Juninho','juninho@gmail','dede',2),
	('Bruno','bruno@gmail','dede',3),
	('Kaio','kaio@gmail','dede',3),
	('Lucas','lucasgmail','dede',3),
	('Kaka','kakagmail','dede',3),
	('Tais','taisgmail','dede',3),
	('Carlos','cagmail','dede',3);
insert into usuario (nome, email, senha, fkhabilidade) values
	('Lucas','lucasgmail','dede',3),
	('Kaka','kakagmail','dede',3),
	('Tais','taisgmail','dede',3),
	('Carlos','cagmail','dede',3);
    
select * from usuario;
    
select tipo, count(fkhabilidade) from usuario join habilidade on fkhabilidade = idhabilidade group by tipo;
    
select count(pratica) as pratica, count(autoestima) as autoestima, count(sono) as sono, count(costas) as costas, count(estresse) as estresse, count(concentracao) as concentracao, count(fkusuario)as qtd from quiz;
select pratica, autoestima, sono, costas, estresse, concentracao, fkusuario from quiz where idquiz > 9;

select * from quiz;

delete from quiz where idquiz =1;
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
    
    select * from quiz;
    
create table habilidade (
	idhabilidade int primary key auto_increment,
    tipo varchar(10));
    
    insert into habilidade (tipo) values
    ('Saude'),
    ('Autoestima'),
    ('Disposição');
    select * from habilidade;
    
    
    