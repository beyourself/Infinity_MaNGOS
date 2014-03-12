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

-- Dumping structure for table characters.chat_log_party
CREATE TABLE IF NOT EXISTS `chat_log_party` (
  `guid` bigint(20) unsigned NOT NULL auto_increment,
  `date_time` datetime NOT NULL,
  `pname` varchar(12) NOT NULL default '',
  `members` text,
  `msg` text,
  `level` tinyint(3) unsigned NOT NULL default '0',
  `account_id` int(11) unsigned NOT NULL default '0',
  `status` set('hidden','marked','banned') NOT NULL default '',
  PRIMARY KEY  (`guid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table characters.chat_log_party: 0 rows
DELETE FROM `chat_log_party`;
/*!40000 ALTER TABLE `chat_log_party` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat_log_party` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
