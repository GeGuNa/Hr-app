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
  PRIMARY KEY (`cid`),
  KEY `user` (`user`),
  CONSTRAINT `company_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (2,NULL,'qweqwe',NULL,NULL,NULL,NULL,1),(3,NULL,'qweqwe',NULL,NULL,NULL,NULL,1),(4,NULL,'qweqwe',NULL,NULL,NULL,NULL,1),(5,NULL,'qweqwe',NULL,NULL,NULL,NULL,1),(6,NULL,'qweqwe',NULL,NULL,NULL,NULL,1),(7,NULL,'qweqwe',NULL,NULL,NULL,NULL,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'2022-11-28 21:03:33','zzz','qweqwe@mail.ge',NULL,NULL,NULL),(2,'2022-11-28 21:03:33','zzz','qweqwe@mail.ge',NULL,NULL,NULL),(3,'2022-11-28 21:03:34','zzz','qweqwe@mail.ge',NULL,NULL,NULL);
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
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
  PRIMARY KEY (`jid`),
  KEY `user` (`user`),
  KEY `cid` (`cid`),
  CONSTRAINT `job_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`uid`),
  CONSTRAINT `job_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `company` (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (2,1,2,NULL,NULL,'qweqwe',NULL,NULL,NULL,NULL),(3,1,4,NULL,NULL,'qweqwe',NULL,NULL,NULL,NULL),(7,1,2,NULL,NULL,'qweqwe',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'nukri','brdze',NULL,NULL,NULL,NULL,'asda@mail.ru',NULL,NULL,NULL,'male','seeker',0,0,0,'123456'),(4,'nukri','brdze',NULL,NULL,NULL,NULL,'asda@mail.r2u',NULL,NULL,NULL,'male','seeker',0,0,0,'0'),(8,'nukri','brdze',NULL,NULL,NULL,NULL,'asda@mail.r2u2',NULL,NULL,NULL,'male','seeker',0,0,0,'0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-28 23:08:54
