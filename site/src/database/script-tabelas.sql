create database bodybuild;
use bodybuild;


-- criando a tabela habilidade;    
CREATE TABLE habilidade (
	idhabilidade INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(10));

-- Criando tabela usuario;
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkhabilidade int,
    foreign key (fkhabilidade) references habilidade (idhabilidade));
    
select * from usuario;

-- criando a table quiz;
CREATE TABLE quiz (
	idquiz INT PRIMARY KEY AUTO_INCREMENT,
    pratica INT,
    autoestima INT,
    sono INT,
    costas INT,
    estresse INT,
    concentracao INT,
    fkusuario INT, 
    foreign key (fkusuario) REFERENCES usuario (id));
    
SELECT count(*) FROM quiz;
    

-- inserindo habilidades no banco;
INSERT INTO habilidade (tipo) VALUES
    ('Saude'),
    ('Autoestima'),
    ('Disposição');
    
SELECT * FROM habilidade;

-- inserindo usuarios no site;
INSERT INTO usuario (nome, email, senha, fkhabilidade) VALUES
	('Joao','joao@gmail','dede',1),
	('Cleber','cleber@gmail','dede',1),
	('Alex','alex@gmail','dede',2),
	('Juninho','juninho@gmail','dede',2),
	('Bruno','bruno@gmail','dede',3),
	('Kaio','kaio@gmail','dede',3),
	('Lucas','lucasgmail','dede',3),
	('Kaka','kakagmail','dede',3),
	('Tais','taisgmail','dede',3),
	('Carlos','cagmail','dede',3),
	('Lucas','lucasgmail','dede',3),
	('Kaka','kakagmail','dede',3),
	('Tais','taisgmail','dede',3),
	('Alberto','albertogmail','dede',1), 
	('Kratos','kratosgmail','dede',2), 
	('Carol','carolgmail','dede',3), 
	('bia','biagmail','dede',1), 
	('giu','giugmail','dede',2), 
	('kaique','kaiquegmail','dede',3), 
	('ale','alegmail','dede',1), 
	('fabricio','fabriciogmail','dede',2), 
	('ferdinando','ferdigmail','dede',3), 
	('figurinha','fofogmail','dede',1), 
	('Falcao','falcaogmail','dede',1), 
	('Diego','diegogmail','dede',3);
    
-- inserindo resultados do quiz;
INSERT INTO quiz (pratica, autoestima, sono, costas, estresse, concentracao, fkusuario) VALUES
	(1,0,1,1,1,1,1),
	(1,0,0,0,0,0,2),
	(1,1,0,1,0,1,3),
	(1,0,0,0,0,0,4),
	(1,1,0,0,0,0,5),
	(1,0,0,0,0,1,6),
	(1,0,0,0,0,0,7),
	(1,0,0,1,0,0,8),
	(1,0,0,1,0,1,9),
	(1,1,0,1,0,1,10),
	(1,0,0,0,1,1,11),
	(1,0,0,1,0,1,12),
	(0,1,1,1,1,1,13),
	(0,1,1,1,0,1,14),
	(0,0,1,1,0,1,15),
	(0,1,1,1,0,1,16),
	(0,1,1,0,1,1,17),
	(0,1,1,1,1,1,18),
	(0,1,1,1,0,1,19),
	(0,1,1,1,1,1,20),
	(0,1,1,1,0,0,21),
	(0,0,1,1,1,1,22),
	(0,1,1,0,1,1,23),
	(0,1,1,1,1,1,24),
	(0,1,0,1,1,1,25),
	(0,1,0,1,1,1,25),
	(0,1,0,1,1,1,25),
	(0,1,0,1,1,1,25),
	(0,1,1,1,1,1,25),
	(0,1,1,1,1,1,25),
	(0,1,1,1,1,1,25),
	(0,1,1,1,1,1,25),
	(0,1,0,1,1,1,25),
	(0,1,1,1,1,1,25),
	(0,1,1,1,1,1,25),
	(0,1,1,1,1,1,25),
	(0,1,1,1,1,1,25),
	(0,1,1,1,1,1,25),
	(1,0,1,1,0,1,25),
	(1,1,1,0,0,1,25),
	(1,0,0,0,0,1,25),
	(1,0,0,0,1,1,25),
	(1,0,1,1,0,0,25),
	(1,1,1,0,1,0,25),
	(1,1,1,1,0,1,25),
	(1,1,1,1,0,1,25),
	(1,1,1,1,0,1,25),
	(1,1,1,0,1,1,25),
	(1,1,1,1,1,1,25),
	(1,1,1,1,1,1,25);
    
    truncate quiz;
    
    
-- select para mostrar resultado dos beneficios;
SELECT tipo, count(fkhabilidade) FROM usuario JOIN habilidade ON fkhabilidade = idhabilidade GROUP BY tipo;
    
-- select para conferir dados quiz;
SELECT count(pratica) AS pratica, count(autoestima) AS autoestima, count(sono) AS sono, count(costas) AS costas, count(estresse) AS estresse, count(concentracao) AS concentracao, count(fkusuario)AS qtd FROM quiz;

-- select para mostrar os dados do quiz;
SELECT pratica, autoestima, sono, costas, estresse, concentracao, fkusuario FROM quiz ORDER BY idquiz DESC;

    
    