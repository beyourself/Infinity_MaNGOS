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

-- Dumping structure for table characters.character_tutorial
CREATE TABLE IF NOT EXISTS `character_tutorial` (
  `account` bigint(20) unsigned NOT NULL auto_increment COMMENT 'Account Identifier',
  `tut0` int(11) unsigned NOT NULL default '0',
  `tut1` int(11) unsigned NOT NULL default '0',
  `tut2` int(11) unsigned NOT NULL default '0',
  `tut3` int(11) unsigned NOT NULL default '0',
  `tut4` int(11) unsigned NOT NULL default '0',
  `tut5` int(11) unsigned NOT NULL default '0',
  `tut6` int(11) unsigned NOT NULL default '0',
  `tut7` int(11) unsigned NOT NULL default '0',
  PRIMARY KEY  (`account`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='Player System';

-- Dumping data for table characters.character_tutorial: 0 rows
DELETE FROM `character_tutorial`;
/*!40000 ALTER TABLE `character_tutorial` DISABLE KEYS */;
/*!40000 ALTER TABLE `character_tutorial` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
