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

-- Dumping structure for table characters.ahbot_history
CREATE TABLE IF NOT EXISTS `ahbot_history` (
  `id` bigint(20) NOT NULL auto_increment,
  `buytime` bigint(20) NOT NULL,
  `item` bigint(20) NOT NULL,
  `bid` bigint(20) NOT NULL,
  `buyout` bigint(20) NOT NULL,
  `won` bigint(20) NOT NULL,
  `category` varchar(45) default NULL,
  `auction_house` bigint(20) NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `won` (`won`),
  KEY `category` (`category`),
  KEY `auction_house` (`auction_house`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table characters.ahbot_history: 0 rows
DELETE FROM `ahbot_history`;
/*!40000 ALTER TABLE `ahbot_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `ahbot_history` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
