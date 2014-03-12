-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.0.45-community-nt - MySQL Community Edition (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table characters.ai_playerbot_random_bots
CREATE TABLE IF NOT EXISTS `ai_playerbot_random_bots` (
  `id` bigint(20) NOT NULL auto_increment,
  `owner` bigint(20) NOT NULL,
  `bot` bigint(20) NOT NULL,
  `time` bigint(20) NOT NULL,
  `validIn` bigint(20) default NULL,
  `event` varchar(45) default NULL,
  `value` bigint(20) default NULL,
  `data` varchar(255) default NULL,
  PRIMARY KEY  (`id`),
  KEY `owner` (`owner`),
  KEY `bot` (`bot`),
  KEY `event` (`event`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table characters.ai_playerbot_random_bots: 0 rows
DELETE FROM `ai_playerbot_random_bots`;
/*!40000 ALTER TABLE `ai_playerbot_random_bots` DISABLE KEYS */;
/*!40000 ALTER TABLE `ai_playerbot_random_bots` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
