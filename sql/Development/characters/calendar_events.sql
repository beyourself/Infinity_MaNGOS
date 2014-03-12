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

-- Dumping structure for table characters.calendar_events
CREATE TABLE IF NOT EXISTS `calendar_events` (
  `eventId` int(11) unsigned NOT NULL default '0',
  `creatorGuid` int(11) unsigned NOT NULL default '0',
  `guildId` int(11) unsigned NOT NULL default '0',
  `type` tinyint(3) unsigned NOT NULL default '4',
  `flags` int(11) unsigned NOT NULL default '0',
  `dungeonId` int(11) NOT NULL default '-1',
  `eventTime` int(11) unsigned NOT NULL default '0',
  `title` varchar(256) NOT NULL default '',
  `description` varchar(1024) NOT NULL default '',
  PRIMARY KEY  (`eventId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table characters.calendar_events: 0 rows
DELETE FROM `calendar_events`;
/*!40000 ALTER TABLE `calendar_events` DISABLE KEYS */;
/*!40000 ALTER TABLE `calendar_events` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
