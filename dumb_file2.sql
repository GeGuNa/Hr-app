-- MySQL dump 10.19  Distrib 10.3.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: HRG
-- ------------------------------------------------------
-- Server version	10.3.34-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `cid` bigint(32) NOT NULL AUTO_INCREMENT,
  `namd` text DEFAULT NULL,
  `title` text DEFAULT NULL,
  `description` bigint(32) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Accounting/Finance',NULL,NULL),(2,'Administration',NULL,NULL),(3,'Agriculture',NULL,NULL),(4,'Art and Media',NULL,NULL),(5,'Automotive service',NULL,NULL),(6,'Aviation/Airport',NULL,NULL),(7,'Banking',NULL,NULL),(8,'Beauty/Aesthetic Medicine',NULL,NULL),(9,'Casino/gambling',NULL,NULL),(10,'Cleaning',NULL,NULL),(11,'Energy',NULL,NULL),(12,'Engineering',NULL,NULL),(13,'Hotels, restaurants, service',NULL,NULL),(14,'Human resources',NULL,NULL),(15,'Information technology',NULL,NULL),(16,'Installation / Maintenance / Repair',NULL,NULL),(17,'Insurance',NULL,NULL),(18,'Legal',NULL,NULL),(19,'Logistics/transportation',NULL,NULL),(20,'Maritime/port',NULL,NULL),(21,'Production/operations',NULL,NULL),(22,'Quality control, environment, safety',NULL,NULL),(23,'Medical',NULL,NULL),(24,'Real estate, construction',NULL,NULL),(25,'Science/education/trainings',NULL,NULL),(26,'Non-profit/non-governmental organization',NULL,NULL),(27,'Top management',NULL,NULL),(28,'Tourism/entertainment industry',NULL,NULL),(29,'Other',NULL,NULL),(30,'Training courses/Educational programmes',NULL,NULL),(31,'Procurement',NULL,NULL),(32,'Tender/Competition',NULL,NULL),(33,'Security',NULL,NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `cid` bigint(32) NOT NULL AUTO_INCREMENT,
  `time` bigint(32) DEFAULT NULL,
  `name` text DEFAULT NULL,
  `mail` text DEFAULT NULL,
  `number` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `country` text DEFAULT NULL,
  `user` bigint(32) DEFAULT NULL,
  `picurl` text DEFAULT '',
  PRIMARY KEY (`cid`),
  KEY `user` (`user`),
  CONSTRAINT `company_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (22,1669923218,'abaa','georgiana@top.ge',NULL,'qweqweqweqweqwe','georgia',1,'3974_1669923218119_2918581.png'),(23,1669923256,'qweqwe','qweqwe@wqeqw.ge',NULL,'qqqqqqqqq','qweqweqwe',1,'7989_1669923256059_user-vector.webp'),(24,1670024117,'wwww','weqweqw@fqweq.ge',NULL,'11111111','wwwwwwwwwwww',1,'877_1670024117345_8402_1669921927241_11607991960.jpg'),(25,1670027631,'qqqqqq','qwqwe@dqweq.ge',NULL,'wwwwwwwwww','qqqqqqqqq',1,'9947_1670027631814_9004_1669922236043_eye.webp');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact` (
  `post_id` bigint(32) NOT NULL AUTO_INCREMENT,
  `time` text DEFAULT current_timestamp(),
  `name` text DEFAULT NULL,
  `mail` text DEFAULT NULL,
  `number` text DEFAULT NULL,
  `subject` text DEFAULT NULL,
  `desc` text DEFAULT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'2022-11-28 21:03:33','zzz','qweqwe@mail.ge',NULL,NULL,NULL),(2,'2022-11-28 21:03:33','zzz','qweqwe@mail.ge',NULL,NULL,NULL),(3,'2022-11-28 21:03:34','zzz','qweqwe@mail.ge',NULL,NULL,NULL),(4,'2022-11-29 18:17:22','qweqwe','qweqwe@wqeqw.ge','12412412','qweqwe','3123123'),(5,'2022-11-29 18:18:03','qweqwe','qweqwe@wqeqw.ge','12412412','qweqwe','3123123'),(6,'2022-11-29 18:18:53','qweqwe','cqwecq@dqwe.ru','124123123','123123','1231231231'),(7,'2022-11-29 18:19:24','cqwecqwe','asda@mail.ru','124124','cqwecqwe','12312312'),(8,'2022-11-29 18:29:53','c123c123','c123c123@dqwd.ge','124123123','c123c123','123123123123'),(9,'2022-11-29 18:30:40','11111111111','11111111111111@dqwd.rqqq','111111111111111','111111111111111','1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'),(10,'2022-11-29 18:31:07','nukri','qwe@ge.ge','1252151241','beridze','წწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწ'),(11,'2022-12-13 02:01:47','cqweqwe','asda@mail.ru','+124123','qwwe','qqqqqqq'),(12,'2022-12-13 02:02:15','qweqwe','asda@mail.ru','+124123','qweqwe','qweqweqcweqwceqwe');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `friends`
--

DROP TABLE IF EXISTS `friends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `friends` (
  `fid` bigint(32) NOT NULL AUTO_INCREMENT,
  `when` bigint(32) DEFAULT NULL,
  `text` text DEFAULT NULL,
  `user` bigint(32) DEFAULT NULL,
  `who` bigint(32) DEFAULT NULL,
  `post_status` text DEFAULT '',
  PRIMARY KEY (`fid`),
  KEY `user` (`user`),
  KEY `who` (`who`),
  CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`uid`),
  CONSTRAINT `friends_ibfk_2` FOREIGN KEY (`who`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friends`
--

LOCK TABLES `friends` WRITE;
/*!40000 ALTER TABLE `friends` DISABLE KEYS */;
INSERT INTO `friends` VALUES (1,NULL,NULL,1,9,''),(2,NULL,NULL,1,10,'');
/*!40000 ALTER TABLE `friends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job` (
  `jid` bigint(32) NOT NULL AUTO_INCREMENT,
  `user` bigint(32) DEFAULT NULL,
  `cid` bigint(32) DEFAULT NULL,
  `time` bigint(32) DEFAULT NULL,
  `expire_time` bigint(32) DEFAULT NULL,
  `name` text DEFAULT NULL,
  `mail` text DEFAULT NULL,
  `number` text DEFAULT NULL,
  `subject` text DEFAULT NULL,
  `desc` text DEFAULT NULL,
  `work_type` text DEFAULT '',
  `empl_type` text DEFAULT '',
  `experience_time` text DEFAULT '',
  `place` text DEFAULT '',
  `cat_id` bigint(32) DEFAULT NULL,
  PRIMARY KEY (`jid`),
  KEY `user` (`user`),
  KEY `cid` (`cid`),
  KEY `cat_id` (`cat_id`),
  CONSTRAINT `job_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`uid`),
  CONSTRAINT `job_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `company` (`cid`),
  CONSTRAINT `job_ibfk_3` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (1,9,22,1671751901309,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq','','','10-15 years','',1),(2,1,22,NULL,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qweqweqweqweqweqweqweqweqweqweqweqwe','','','','',1),(3,1,22,NULL,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qweqweqweqweqweqweqweqweqweqweqweqwe','','','','',1),(4,1,22,NULL,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qweqweqweqweqweqweqweqweqweqweqweqwe','','','','',1),(5,1,22,NULL,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qweqweqweqweqweqweqweqweqweqweqweqwe','','','','',1),(6,1,22,NULL,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qweqweqweqweqweqweqweqweqweqweqweqwe','','','','',1),(7,1,22,NULL,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qweqweqweqweqweqweqweqweqweqweqweqwe','','','','',1),(8,1,22,NULL,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qweqweqweqweqweqweqweqweqweqweqweqwe','','','','',1),(9,1,22,NULL,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qweqweqweqweqweqweqweqweqweqweqweqwe','','','','',1),(10,1,22,NULL,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qweqweqweqweqweqweqweqweqweqweqweqwe','','','','',1),(11,1,22,NULL,NULL,'From  zzVidea','asds@gmail.com','995555445522','buhahahah','qweqweqweqweqweqweqweqweqweqweqweqwe','','','','',1),(12,1,22,NULL,1,'ახახქწექწეეეეეე',NULL,NULL,NULL,'eeeeeeeeeeeeeeeeeeeeeeee','2','1','15 weli','',1),(13,1,24,NULL,1673223670844,'ახალი სამსახური',NULL,NULL,NULL,'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww','Onsite','contract','10 წელი','',1),(14,1,24,NULL,1671409362819,'ახალი სამსახური',NULL,NULL,NULL,'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww','Onsite','contract','10 წელი','',1),(15,1,23,NULL,1673830516218,'wwwwwwwww',NULL,NULL,NULL,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee','Onsite','contract','10 წელიe','',1),(16,1,24,NULL,1673300525286,'ახალიუიი',NULL,NULL,NULL,'ეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეეე','Onsite','part','10 წელიe','',1),(17,1,25,NULL,1674999999736,'ახალი ',NULL,NULL,NULL,'წწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწწ','Remote','contract','10 წელი','',1),(18,1,24,NULL,1672592881236,'with working place',NULL,NULL,NULL,'just testing ........\r\nblabla\r\n<b>qweqwe</b>','Remote','full','20 years','batumi',1),(19,1,24,NULL,1673198107650,'eeeeeee',NULL,NULL,NULL,'wwwwwwwwwwww','Hybrid','part','10 წელი','wwwwwwwwww',1),(20,1,22,1671988590805,1673198190805,'c123c123c123',NULL,NULL,NULL,'wwwwwww','Onsite','full','15 weli','qqqqqqqq',1),(21,1,22,1672334858184,1675358858184,'new job with category;   testing',NULL,NULL,NULL,'ტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწეტქწექწე','Remote','full','15 year ','ბათუმი',15),(22,1,23,1672336480861,1672941280861,'qqqqqqqqq',NULL,NULL,NULL,'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww','Hybrid','intern','10 წელი','batumi',3),(23,1,23,1672336487877,1672941287877,'qqqqqqqqq',NULL,NULL,NULL,'ააააააააააააა','Hybrid','intern','10 წელი','batumi',3),(24,1,22,1672336497987,1672941297987,'ახალიიიიიიიი',NULL,NULL,NULL,'ააააააააააააა','Hybrid','intern','10 წელი','batumi',3),(26,1,22,1672336644096,1673546244096,'1cccccccccccccccc',NULL,NULL,NULL,'2111111111211111111121111111112111111111211111111121111111112111111111211111111121111111112111111111211111111121111111112111111111211111111121111111112111111111211111111121111111112111111111211111111121111111112111111111','Onsite','part','20 years','22222222222222',2);
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `mid` bigint(32) NOT NULL AUTO_INCREMENT,
  `user` bigint(32) DEFAULT NULL,
  `whom` bigint(32) DEFAULT NULL,
  `text` text DEFAULT NULL,
  `deleted` bigint(32) DEFAULT NULL,
  `when` bigint(32) DEFAULT NULL,
  PRIMARY KEY (`mid`),
  KEY `user` (`user`),
  KEY `whom` (`whom`),
  CONSTRAINT `message_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`uid`),
  CONSTRAINT `message_ibfk_2` FOREIGN KEY (`whom`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (1,1,4,'qweqweqweqwe',NULL,1671394038248),(2,1,4,'ახალიუუუუ',NULL,1671394047258),(3,1,4,'goood',NULL,1671394054888),(4,4,1,'ახალუუუუუ',NULL,160000000),(5,4,1,'ახალუუუუ2უ',NULL,160000000),(6,4,1,'ახალუუუუ21უ',NULL,160000000),(7,4,1,'1111111',NULL,160000000);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message_contacts`
--

DROP TABLE IF EXISTS `message_contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message_contacts` (
  `cid` bigint(32) NOT NULL AUTO_INCREMENT,
  `me` bigint(32) DEFAULT NULL,
  `you` bigint(32) DEFAULT NULL,
  `type` text DEFAULT NULL,
  `deleted` bigint(32) DEFAULT NULL,
  `when` bigint(32) DEFAULT NULL,
  `post` bigint(32) DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `me` (`me`),
  KEY `you` (`you`),
  CONSTRAINT `message_contacts_ibfk_1` FOREIGN KEY (`me`) REFERENCES `user` (`uid`),
  CONSTRAINT `message_contacts_ibfk_2` FOREIGN KEY (`you`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message_contacts`
--

LOCK TABLES `message_contacts` WRITE;
/*!40000 ALTER TABLE `message_contacts` DISABLE KEYS */;
INSERT INTO `message_contacts` VALUES (1,1,4,NULL,NULL,1671237643199,NULL),(2,1,4,NULL,NULL,1671237543199,NULL),(3,1,4,NULL,NULL,1671226543199,NULL),(4,1,4,NULL,NULL,7278059730000,NULL),(5,1,4,NULL,NULL,16000000000,NULL),(6,1,4,NULL,NULL,16000000000,NULL),(7,1,4,NULL,NULL,16000000000,NULL),(8,1,8,NULL,NULL,16000000000,NULL);
/*!40000 ALTER TABLE `message_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `uid` bigint(32) NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  `surn` text DEFAULT NULL,
  `city` text DEFAULT NULL,
  `skype` text DEFAULT NULL,
  `telegram` text DEFAULT NULL,
  `twitter` text DEFAULT NULL,
  `mail` varchar(256) DEFAULT NULL,
  `usrid` text DEFAULT NULL,
  `country` text DEFAULT NULL,
  `number` text DEFAULT NULL,
  `gender` set('male','female') DEFAULT 'male',
  `acc_type` set('employer','seeker') DEFAULT 'seeker',
  `reg_time` bigint(32) DEFAULT 0,
  `last_visit` bigint(32) DEFAULT 0,
  `on_site` bigint(32) DEFAULT 0,
  `password` text DEFAULT '0',
  PRIMARY KEY (`uid`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'nukri','brdze',NULL,NULL,NULL,NULL,'asda@mail.ru',NULL,NULL,'+995568223344','female','seeker',0,1672775652290,0,'123456'),(4,'nukri','brdze',NULL,NULL,NULL,NULL,'asda@mail.r2u',NULL,NULL,'+995568223344','male','seeker',0,0,0,'0'),(8,'nukri','brdze',NULL,NULL,NULL,NULL,'asda@mail.r2u2',NULL,NULL,NULL,'male','seeker',0,0,0,'0'),(9,'dolly','jonson',NULL,NULL,NULL,NULL,'abracadabra@gmail.com',NULL,NULL,NULL,'female','seeker',0,0,0,'0'),(10,'john','hongmeng',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'male','seeker',0,0,0,'0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_posts`
--

DROP TABLE IF EXISTS `user_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_posts` (
  `pid` bigint(32) NOT NULL AUTO_INCREMENT,
  `when_posted` bigint(32) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `author` bigint(32) DEFAULT NULL,
  `post_type` text DEFAULT '',
  `post_status` text DEFAULT '',
  PRIMARY KEY (`pid`),
  KEY `author` (`author`),
  CONSTRAINT `user_posts_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_posts`
--

LOCK TABLES `user_posts` WRITE;
/*!40000 ALTER TABLE `user_posts` DISABLE KEYS */;
INSERT INTO `user_posts` VALUES (2,NULL,'qweqweqwe','qweqweqwe',1,'',''),(3,NULL,'qweqweqwe','qweqweqwe',1,'',''),(4,NULL,'qweqweqwe','qweqweqwe',1,'','');
/*!40000 ALTER TABLE `user_posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-03 23:54:56
