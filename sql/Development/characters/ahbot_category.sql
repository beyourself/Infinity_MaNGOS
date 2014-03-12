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

-- Dumping structure for table characters.ahbot_category
CREATE TABLE IF NOT EXISTS `ahbot_category` (
  `id` bigint(20) NOT NULL auto_increment,
  `category` varchar(45) default NULL,
  `multiplier` decimal(20,2) NOT NULL,
  `max_auction_count` bigint(20) NOT NULL,
  `expire_time` bigint(20) NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `helper` (`category`,`multiplier`,`expire_time`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table characters.ahbot_category: 0 rows
DELETE FROM `ahbot_category`;
/*!40000 ALTER TABLE `ahbot_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `ahbot_category` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
