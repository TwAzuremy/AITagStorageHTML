-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tags
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `arms`
--

DROP TABLE IF EXISTS `arms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `arms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arms`
--

LOCK TABLES `arms` WRITE;
/*!40000 ALTER TABLE `arms` DISABLE KEYS */;
/*!40000 ALTER TABLE `arms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attributes`
--

DROP TABLE IF EXISTS `attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attributes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attributes`
--

LOCK TABLES `attributes` WRITE;
/*!40000 ALTER TABLE `attributes` DISABLE KEYS */;
INSERT INTO `attributes` VALUES (2,'恶魔','devil','','',NULL),(3,'单人','solo','','',NULL),(4,'百合','yuri','','',NULL),(5,'天使','angel','','',NULL);
/*!40000 ALTER TABLE `attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `background`
--

DROP TABLE IF EXISTS `background`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `background` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `background`
--

LOCK TABLES `background` WRITE;
/*!40000 ALTER TABLE `background` DISABLE KEYS */;
INSERT INTO `background` VALUES (1,'樱花','Cherry blossoms','','',NULL),(2,'天空','beautiful detailed sky','','',NULL),(3,'花田','flower field','','',NULL),(4,'日出','sunrise','','',NULL),(5,'日落','sunset','','',NULL);
/*!40000 ALTER TABLE `background` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `building`
--

DROP TABLE IF EXISTS `building`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `building` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `building`
--

LOCK TABLES `building` WRITE;
/*!40000 ALTER TABLE `building` DISABLE KEYS */;
/*!40000 ALTER TABLE `building` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chest`
--

DROP TABLE IF EXISTS `chest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chest`
--

LOCK TABLES `chest` WRITE;
/*!40000 ALTER TABLE `chest` DISABLE KEYS */;
/*!40000 ALTER TABLE `chest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `config` (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` text NOT NULL,
  `value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,'appearance','0'),(2,'language','zh_cn');
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dresses`
--

DROP TABLE IF EXISTS `dresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dresses`
--

LOCK TABLES `dresses` WRITE;
/*!40000 ALTER TABLE `dresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `dresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expression`
--

DROP TABLE IF EXISTS `expression`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expression` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expression`
--

LOCK TABLES `expression` WRITE;
/*!40000 ALTER TABLE `expression` DISABLE KEYS */;
INSERT INTO `expression` VALUES (1,'脸红','blush','','',NULL),(2,'害羞','shy','','',NULL),(3,'生气','angry','','',NULL),(4,'🙂微笑','smile','','',NULL);
/*!40000 ALTER TABLE `expression` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eyes`
--

DROP TABLE IF EXISTS `eyes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eyes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eyes`
--

LOCK TABLES `eyes` WRITE;
/*!40000 ALTER TABLE `eyes` DISABLE KEYS */;
INSERT INTO `eyes` VALUES (1,'异色瞳','heterochromia','','可使用 heterochromia, [color] eye, [another color] eye 来定义异色瞳的颜色',NULL);
/*!40000 ALTER TABLE `eyes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `face`
--

DROP TABLE IF EXISTS `face`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `face` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `face`
--

LOCK TABLES `face` WRITE;
/*!40000 ALTER TABLE `face` DISABLE KEYS */;
/*!40000 ALTER TABLE `face` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `front`
--

DROP TABLE IF EXISTS `front`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `front` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `front`
--

LOCK TABLES `front` WRITE;
/*!40000 ALTER TABLE `front` DISABLE KEYS */;
INSERT INTO `front` VALUES (1,'高质量','{{masterpiece}}, best quality, illustration, HD wallpaper, cinematic lighting','','',NULL),(2,'光影','cinematic lighting, volume lighting, bloom effect, light particles','','',NULL);
/*!40000 ALTER TABLE `front` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hair`
--

DROP TABLE IF EXISTS `hair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hair` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hair`
--

LOCK TABLES `hair` WRITE;
/*!40000 ALTER TABLE `hair` DISABLE KEYS */;
INSERT INTO `hair` VALUES (1,'长头发','long_hair','','',NULL),(2,'短头发','short_hair','','',NULL),(3,'刘海','bangs','','',NULL);
/*!40000 ALTER TABLE `hair` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `handwear`
--

DROP TABLE IF EXISTS `handwear`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `handwear` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `handwear`
--

LOCK TABLES `handwear` WRITE;
/*!40000 ALTER TABLE `handwear` DISABLE KEYS */;
INSERT INTO `handwear` VALUES (1,'手套','gloves','','',NULL);
/*!40000 ALTER TABLE `handwear` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `head`
--

DROP TABLE IF EXISTS `head`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `head` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `head`
--

LOCK TABLES `head` WRITE;
/*!40000 ALTER TABLE `head` DISABLE KEYS */;
INSERT INTO `head` VALUES (1,'猫耳','cat_ears','','',NULL);
/*!40000 ALTER TABLE `head` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headwear`
--

DROP TABLE IF EXISTS `headwear`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `headwear` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `headwear`
--

LOCK TABLES `headwear` WRITE;
/*!40000 ALTER TABLE `headwear` DISABLE KEYS */;
INSERT INTO `headwear` VALUES (1,'发卡','hairband','','',NULL),(2,'发夹','hairclip','','',NULL);
/*!40000 ALTER TABLE `headwear` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `legs`
--

DROP TABLE IF EXISTS `legs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `legs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `legs`
--

LOCK TABLES `legs` WRITE;
/*!40000 ALTER TABLE `legs` DISABLE KEYS */;
INSERT INTO `legs` VALUES (1,'裸足','bare legs','','',NULL);
/*!40000 ALTER TABLE `legs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `other`
--

DROP TABLE IF EXISTS `other`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `other` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `other`
--

LOCK TABLES `other` WRITE;
/*!40000 ALTER TABLE `other` DISABLE KEYS */;
/*!40000 ALTER TABLE `other` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pants`
--

DROP TABLE IF EXISTS `pants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pants`
--

LOCK TABLES `pants` WRITE;
/*!40000 ALTER TABLE `pants` DISABLE KEYS */;
/*!40000 ALTER TABLE `pants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poses`
--

DROP TABLE IF EXISTS `poses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poses`
--

LOCK TABLES `poses` WRITE;
/*!40000 ALTER TABLE `poses` DISABLE KEYS */;
INSERT INTO `poses` VALUES (1,'拉头发','hair pull','','',NULL),(2,'伸懒腰','stretch','','',NULL),(3,'坐','sitting','','',NULL),(4,'躺','lying','','',NULL),(5,'趴','on stomach','','',NULL);
/*!40000 ALTER TABLE `poses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reverse`
--

DROP TABLE IF EXISTS `reverse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reverse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reverse`
--

LOCK TABLES `reverse` WRITE;
/*!40000 ALTER TABLE `reverse` DISABLE KEYS */;
INSERT INTO `reverse` VALUES (1,'反向 (默认)','','lowres, bad anatomy,bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet','',NULL),(2,'多余的手 / 身体','','polar lowres, bad anatomy, bad hands, bad body, bad proportions, gross proportions, text,error, missing fingers, missing arms, missing legs, extra digit','',NULL),(3,'多余的肢体','','extra fingers, fewer digits, extra limbs, extra arms, extra legs, malformed limbs, fused fingers, too many fingers, long neck, cross-eyed, mutated hands','',NULL);
/*!40000 ALTER TABLE `reverse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoes`
--

DROP TABLE IF EXISTS `shoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoes`
--

LOCK TABLES `shoes` WRITE;
/*!40000 ALTER TABLE `shoes` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skirt`
--

DROP TABLE IF EXISTS `skirt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skirt` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skirt`
--

LOCK TABLES `skirt` WRITE;
/*!40000 ALTER TABLE `skirt` DISABLE KEYS */;
/*!40000 ALTER TABLE `skirt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `socks`
--

DROP TABLE IF EXISTS `socks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `socks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `socks`
--

LOCK TABLES `socks` WRITE;
/*!40000 ALTER TABLE `socks` DISABLE KEYS */;
INSERT INTO `socks` VALUES (1,'裤袜','leggings','','',NULL),(2,'丝袜','stockings','','',NULL);
/*!40000 ALTER TABLE `socks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `style`
--

DROP TABLE IF EXISTS `style`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `style` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `style`
--

LOCK TABLES `style` WRITE;
/*!40000 ALTER TABLE `style` DISABLE KEYS */;
/*!40000 ALTER TABLE `style` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `templates`
--

DROP TABLE IF EXISTS `templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `templates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `front` text,
  `reverse` text,
  `remark` text,
  `preImg` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templates`
--

LOCK TABLES `templates` WRITE;
/*!40000 ALTER TABLE `templates` DISABLE KEYS */;
INSERT INTO `templates` VALUES (1,'香风智乃','kafuu chino, solo, loli, petite, {best quality}, {{masterpiece}}, {highres}, original, extremely detailed 8K wallpaper, 1girl, {an extremely delicate and beautiful}, looking through legs, blue eyes','','',NULL),(2,'初音未来','{{{masterpiece}}}, {extremely detailed CG unity 8k wallpaper}, best quality, Amazing, beautiful detailed eyes, finely detail, solo, 1girl, turquoise hair, bright pupils, turquoise eyes, twintail, hatsune_miku, {{full body}}, medium breasts, black detached sleeves, white collared shirt, shoulder cutout, black pleated skirt, black thigh boots, sidelocks, {{floating hair}}, {{Sakura}}, outdoors, sky, {{wind}}, detailed background, detailed clothes, dynamic pose, dynamic angle, looking at viewer, close-up, cinematic lighting','','',NULL),(3,'默认模板','{{masterpiece}}, best quality, illustration, HD wallpaper, cinematic lighting','lowres, bad anatomy,bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet','',NULL);
/*!40000 ALTER TABLE `templates` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 17:50:18
