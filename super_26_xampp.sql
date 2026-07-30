CREATE DATABASE IF NOT EXISTS super_26;
USE super_26;

DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS categoria;

CREATE TABLE categoria (
  CodCategoria INT NOT NULL AUTO_INCREMENT,
  Descricao CHAR(30),
  PRIMARY KEY (CodCategoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO categoria VALUES
(1,'Alimentos'),
(2,'Limpeza'),
(3,'Carnes');

CREATE TABLE clientes (
  CodCliente INT NOT NULL AUTO_INCREMENT,
  Nome VARCHAR(50),
  Cidade VARCHAR(50),
  Estado CHAR(2),
  Email VARCHAR(50),
  Login VARCHAR(20),
  Senha VARCHAR(20),
  Validado TINYINT(1),
  PRIMARY KEY (CodCliente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO clientes SELECT * FROM (
SELECT 1,'Eloa','Pato Branco','PR','eloa@gmail.com','admin','123',1
UNION ALL SELECT 2,'Leonardo','Pato Branco','PR','leonardo@gmail.com','leoleo','22042008',1
UNION ALL SELECT 3,'Bianca','Pato Branco','PR','bia@gmail.com','bibi','13042009',0
UNION ALL SELECT 4,'Jullia','Pato Branco','PR','Julia@gmail.com','juju','24022009',0
UNION ALL SELECT 5,'Guilherme Borges','Xique-Xique','BA','pinduca@gmail.com.br','pinduca','17112009',0
) t;

ALTER TABLE clientes AUTO_INCREMENT=61;

CREATE TABLE produtos(
 CodProdutos INT NOT NULL AUTO_INCREMENT,
 Categoria INT,
 Nome CHAR(50),
 Valor DECIMAL(6,2),
 PRIMARY KEY(CodProdutos),
 KEY(Categoria),
 CONSTRAINT fk_prod_cat FOREIGN KEY (Categoria) REFERENCES categoria(CodCategoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO produtos VALUES
(1,2,'Qboa',4.00),
(2,1,'Arroz',35.99);
