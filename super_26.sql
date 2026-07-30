# Host: localhost  (Version 8.0.41)
# Date: 2026-04-20 12:36:34
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#
# Data for table "clientes"
#

INSERT INTO `clientes` VALUES (1,'Eloa','Pato Branco','PR','eloa@gmail.com','admin','123',1),(2,'Leonardo','Pato Branco','PR','leonardo@gmail.com','leoleo','22042008',1),(3,'Bianca','Pato Branco','PR','bia@gmail.com','bibi','13042009',0),(4,'Jullia','Pato Branco','PR','Julia@gmail.com','juju','24022009',0),(5,'Guilherme Borges','Xique-Xique','BA','pinduca@gmail.com.br','pinduca','17112009',0),(6,'Livia','Londrina','PR','Livia@gmail.com',NULL,'1133134',NULL),(7,'Fernanda ','Florianpolis','SC','Fernanda@gmail.com',NULL,'44441241414',NULL),(8,'Gabriela','Belo Horizonte','BH','Gabriela@gmail.com',NULL,'421414',NULL),(9,'Lucinda','Bahia','BA','Lucinda@gmail.com',NULL,'6564567',NULL),(10,'Fernando','Londrina','PR','Fernando@gmail.com',NULL,'8786788',NULL),(11,'Ricardo','Londrina','PR','Ricardo@gmail.com',NULL,'677567878',NULL),(12,'Nicolas','Florianopolis','SC','Nicola@gmail.com',NULL,'363463636',NULL),(13,'Felipe','Florianpolis','SC','Felipe@gmail.com',NULL,'4353453',NULL),(14,'Alexandre','Londrina','PR','Alexandre@gmail.com',NULL,'6363646',NULL),(15,'Marcos','Florianpolis','SC','Marcos@gmail.com',NULL,'4645646',NULL),(16,'Michael','Londrina','PR','Micheal@gmail.com',NULL,'63636366',NULL),(17,'Michele','Florianpolis','SC','Michelle@gmail.com',NULL,'66634636',NULL),(18,'Alessandra','Londrina','PR','Alessandra@gmail.com',NULL,'63636436',NULL),(19,'Alexa','Londrina','PR','Alexa@gmail.com',NULL,'6747',NULL),(20,'Cecilia','Florianpolis','SC','Ceciclia@gmail.com',NULL,'6634635345',NULL),(21,'Juliana','Londrina','PR','Juliana@gmail.com',NULL,'574577477',NULL),(22,'Mariana','Florianpolis','SC','Mariana@gmail.com',NULL,'47457457',NULL),(23,'Mariane','Belo Horizonte','BH','Mariane@gmail.com',NULL,'4747457457',NULL),(24,'Diana','Bahia','BA','Diana@gmail.com',NULL,'63634',NULL),(25,'Daiane','Bahia','BA','Daiane@gmail.com',NULL,'63634636',NULL),(26,'Dariano','Belo Horizonte','BH','Dariano@gmail.com',NULL,'3636346',NULL),(27,'Juliano','Belo Horizonte','BH','Juliano@gmail.com',NULL,'366346346',NULL),(28,'William','Bahia','BA','William@gmail.com',NULL,'363645646',NULL),(29,'Elizabeth','Belo Horizonte','BH','Elizabeth@gmail.com',NULL,'363463636',NULL),(30,'Lucas','Belo Horizonte','BH','Lucas@gmail.com',NULL,'57457457',NULL),(31,'Lili','Bahia','BA','Lili@gmail.com',NULL,'234525352',NULL),(32,'Alina','Bahia','BA','Alina@gmail.com',NULL,'5675776',NULL),(33,'Laura','Belo Horizonte','BH','Laura@gmail.com',NULL,'43634643636',NULL),(34,'Gael','Bahia','BA','Gael@gmail.com',NULL,'35464346',NULL),(35,'Bernardo','Belo Horizonte','BH','Bernardo@gmail.com',NULL,'63634636',NULL),(36,'Bruno','Bahia','BA','Bruno@gmail.com',NULL,'36346363',NULL),(37,'Roberto','Bahia','BA','Roberto@gmail.com',NULL,'643634643',NULL),(38,'Roberta','Belo Horizonte','BH','Roberta@gmail.com',NULL,'36346363',NULL),(39,'Emanuel','Bahia','BA','Emanuel@gmail.com',NULL,'634636',NULL),(40,'Manuel','Bahia','BA','Manuel@gmail.com',NULL,'63634636',NULL),(41,'Manuela','Belo Horizonte','BH','Manuela@gmail.com',NULL,'36346364',NULL),(42,'Emanuela','Bahia','BA','Emanuela@gmail.com',NULL,'5656776',NULL),(43,'Carla','Bahia','BA','Carla@gmail.com',NULL,'78678678',NULL),(44,'Karen','Santa Catarina','SC','Karen@gmail.com',NULL,'36346436',NULL),(45,'Yuri','Minas Gerais','MG','Yuri@gmail.com',NULL,'646456456',NULL),(46,'Carolina','Minas Gerais','MG','Carolina@gmail.com',NULL,'745747457',NULL),(47,'Caroline','Santa Catarina','SC','Caroline@gmail.com',NULL,'34635252',NULL),(48,'Jessica','Minas Gerais','MG','Jessica@gmail.com',NULL,'2523525',NULL),(49,'Alana','Santa Catarina','SC','Alana@gmail.com',NULL,'3523525',NULL),(50,'Veronica','Minas Gerais','MG','Veronica@gmail.com',NULL,'366774645',NULL),(51,'Viviane','Minas Gerais','MG','Viviane@gmail.com',NULL,'634636',NULL),(52,'Salete','Santa Catarina','SC','Salete@gmail.com',NULL,'6456456',NULL),(53,'Suzana','Minas Gerais','MG','Suzana@gmail.com',NULL,'987979',NULL),(54,'Eliza','Santa Catarina','SC','Eliza@gmail.com',NULL,'2434',NULL),(55,'Marcela','Santa Catarina','SC','marcela@gmail.com',NULL,'645666',NULL),(56,'Marta','Minas Gerais','MG','Marta@gmail.com',NULL,'253525',NULL),(57,'Diego','Santa Catarina','SC','Diego@gmail.com',NULL,'646456',NULL),(58,'David','Santa Catarina','SC','David@gmail.com',NULL,'4566456',NULL),(59,'Oracio','Minas Gerais','MG','Oracio@gmail.com',NULL,'456456456',NULL),(60,'Iris','Bahia',NULL,NULL,NULL,NULL,NULL);

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
