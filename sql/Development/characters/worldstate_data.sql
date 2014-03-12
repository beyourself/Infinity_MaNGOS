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

-- Dumping structure for table characters.worldstate_data
CREATE TABLE IF NOT EXISTS `worldstate_data` (
  `state_id` int(10) unsigned NOT NULL COMMENT 'WorldState ID (may be 0)',
  `instance` int(10) unsigned NOT NULL default '0' COMMENT 'WorldState instance',
  `type` int(10) unsigned NOT NULL default '0' COMMENT 'WorldState type',
  `condition` int(10) unsigned NOT NULL default '0' COMMENT 'Condition (dependent from type)',
  `flags` int(10) unsigned NOT NULL default '0' COMMENT 'Current flags of WorldState',
  `value` int(10) unsigned NOT NULL default '0' COMMENT 'Current value of WorldState',
  `renewtime` bigint(11) unsigned NOT NULL default '0' COMMENT 'Time of last renew of WorldState',
  PRIMARY KEY  (`state_id`,`instance`,`type`,`condition`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 PACK_KEYS=0 COMMENT='WorldState data storage';

-- Dumping data for table characters.worldstate_data: 0 rows
DELETE FROM `worldstate_data`;
/*!40000 ALTER TABLE `worldstate_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `worldstate_data` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
