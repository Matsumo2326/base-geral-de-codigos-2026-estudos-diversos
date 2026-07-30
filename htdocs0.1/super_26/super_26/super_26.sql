# Host: localhost  (Version 8.0.41)
# Date: 2026-04-02 15:51:43
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "categoria"
#

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE `categoria` (
  `CodCategoria` int NOT NULL AUTO_INCREMENT,
  `Descricao` char(30) DEFAULT NULL,
  PRIMARY KEY (`CodCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#
# Data for table "categoria"
#

INSERT INTO `categoria` VALUES (1,'Alimentos'),(2,'Limpeza'),(3,'Carnes');

#
# Structure for table "clientes"
#

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE `clientes` (
  `CodCliente` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(50) DEFAULT NULL,
  `Cidade` varchar(50) DEFAULT NULL,
  `Estado` char(2) DEFAULT NULL,
  `Email` varchar(20) DEFAULT NULL,
  `Login` varchar(20) DEFAULT NULL,
  `Senha` varchar(20) DEFAULT NULL,
  `Validado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`CodCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#
# Data for table "clientes"
#

INSERT INTO `clientes` VALUES (1,'Eloa','Pato Branco','PR','eloa@gmail.com','admin','123',1),(2,'Leonardo','Pato Branco','PR','leonardo@gmail.com','leoleo','22042008',1),(3,'Bianca','Pato Branco','PR','bia@gmail.com','bibi','13042009',1),(4,'Jullia','Pato Branco','PR','Julia@gmail.com','juju','24022009',1),(5,'Guilherme Borges','Xique-Xique','BA','pinduca@gmail.com.br','pinduca','17112009',1);

#
# Structure for table "produtos"
#

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE `produtos` (
  `CodProdutos` int NOT NULL AUTO_INCREMENT,
  `Categoria` int DEFAULT NULL,
  `Nome` char(50) DEFAULT NULL,
  `Valor` float(4,2) DEFAULT NULL,
  PRIMARY KEY (`CodProdutos`),
  KEY `Categoria` (`Categoria`),
  CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`Categoria`) REFERENCES `categoria` (`CodCategoria`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#
# Data for table "produtos"
#

INSERT INTO `produtos` VALUES (1,2,'Qboa',4.00),(2,1,'Arroz',35.99);
