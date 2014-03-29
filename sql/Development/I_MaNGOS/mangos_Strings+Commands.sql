-- -----------------------------------
-- WorldStateMgr commands/info mr02128
-- -----------------------------------

DELETE FROM `command` WHERE `name` IN ('ws','ws add', 'ws list', 'ws global', 'ws reload', 'ws update');

INSERT INTO `command`
    (`name`, `security`, `help`)
VALUES
    ('ws',2,'Syntax: .ws \r\n\r\nList settings of WorldState manager.'),
    ('ws list',2,'Syntax: .ws list\r\n\r\nList all current WorldStates for player.'),
    ('ws global',3,'Syntax: .ws global\r\n\r\nList all current WorldStates in world.'),
    ('ws update',3,'Syntax: .ws update Id Value\r\n\r\nUpdate WorldState [Id] value to [Value].'),
    ('ws add',3,'Syntax: .ws add Id \r\n\r\nAdd WorldState [Id] with default values to world.'),
    ('ws reload',3,'Syntax: .ws reload \r\n\r\nReload all WorldState/templates (same as .reload worldstate).');

-- State manager command line info
DELETE FROM `mangos_string` WHERE `entry` IN (1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559);
INSERT INTO `mangos_string` (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`) VALUES
(1550,' State: %u, Type: %u, Condition: %u, Instance: %u, Value: %u',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1551,' State: %u, %u, %u, %u, %u',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1552,' State: %u added, (instance %u) value: %u',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1553,' State: %u (instance %u) updated from value %u to %u',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1554,' State: %u (instance %u) added!',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1555,' World States reloaded, count of states %u, templates %u',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1556,' Error in WorldState operations!',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1557,' WorldState settings: %s',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

-- -----------------
-- GM Freeze Command
-- -----------------
 
DELETE FROM `command` WHERE `name` = 'freeze' or `name` = 'unfreeze' or name = 'listfreeze';
INSERT INTO `command` (`name`,`security`,`help`) VALUES 
('freeze','3','Syntax: .freeze (#player)\r\n\"Freezes\" #player. When using this without #name it will freeze your target.'),
('unfreeze','3','Syntax: .unfreeze (#player)\r\n\"Unfreezes\" #player. When using this without #name it will unfrezze your target.'),
('listfreeze','3','Syntax: .listfreeze\r\n\r\nSearch and output all frozen players.');

DELETE FROM mangos_string WHERE entry BETWEEN 11008 AND 11002;
INSERT INTO mangos_string VALUES
(11002,'You froze player %s.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(11003,'Can not freeze self',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(11004,'Invalid, input #name or target.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(11005,'You unfroze the player %s.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(11006,'No frozen players found.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(11007,'The following players are still freezing:',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(11008,'- %s',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

-- ---------
-- pvp token
-- ---------

DELETE FROM `mangos_string` WHERE `entry`='11050';
INSERT INTO `mangos_string` 
VALUES ('11050', 'You have been awarded a token for slaying another player.', null, null, null, null, null, null, null, null); 

-- ---------------------
-- mangos string mr01129
-- ---------------------

DELETE FROM `command` WHERE `name` IN ('cast','cast back','cast self','cast target');

INSERT INTO `command` (`name`,`security`,`help`) VALUES
('cast',3,'Syntax: .cast #spellid [triggered]\r\n  Cast #spellid to selected target. If no target selected cast to self. If \'triggered\' or part provided then spell casted with triggered flag.'),
('cast back',3,'Syntax: .cast back #spellid [triggered]\r\n  Selected target will cast #spellid to your character. If \'triggered\' or part provided then spell casted with triggered flag.'),
('cast self',3,'Syntax: .cast self #spellid [triggered]\r\nCast #spellid by target at target itself. If \'triggered\' or part provided then spell casted with triggered flag.'),
('cast target',3,'Syntax: .cast target #spellid [triggered]\r\n  Selected target will cast #spellid to his victim. If \'triggered\' or part provided then spell casted with triggered flag.');


DELETE IGNORE FROM `command` WHERE `name` = 'cast dist';
INSERT IGNORE INTO `command` (`name`,`security`,`help`) VALUES
('cast dist',3,'Syntax: .cast dist #spellid [#dist [triggered]]\r\n  You will cast spell to pint at distance #dist. If \'triggered\' or part provided then spell casted with triggered flag. Not all spells can be casted as area spells.');

-- ---------------------
-- name announce mr01640
-- ---------------------

DELETE FROM `command` WHERE name = 'nameannounce';
INSERT INTO `command` VALUES ('nameannounce', 1, 'Syntax: .nameannounce $MessageToBroadcast\r\n\r\nSend a global message to all players online in chat log with colored sender\'s name.');

DELETE FROM `mangos_string` WHERE entry IN (12000, 12001, 12002);
INSERT INTO `mangos_string` VALUES
(12000,'|c1f40af20 <Mod>|cffff0000[%s]|c1f40af20 announce:|cffffff00 %s|r',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(12001,'|c1f40af20 <GM>|cffff0000[%s]|c1f40af20 announce:|cffffff00 %s|r',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(12002,'|c1f40af20 <Admin>|cffff0000[%s]|c1f40af20 announce:|cffffff00 %s|r',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

-- ----------------------------
-- Transport rewrite mr02426_01
-- ----------------------------

DELETE FROM `command` WHERE `name` IN ('transport','transport go','transport list','transport current', 'transport path');

INSERT INTO `command`
    (`name`, `security`, `help`)
VALUES
    ('transport',3,'Syntax: .transport #transportEntry\r\nGive info by transport  entry.'),
    ('transport go',3,'Syntax: .transport #transportEntry\r\nTeleport to transport position.'),
    ('transport list',3,'Syntax: .transport list [#mapId]\r\nList transports on map mapId (or on current map).'),
    ('transport current',3,'Syntax: .transport current\r\nCurrent transport parameters.'),
    ('transport start',3,'Syntax: .transport start #transportEntry\r\nStart transport movement.'),
    ('transport stop',3,'Syntax: .transport stop #transportEntry\r\nStop transport movement'),
    ('transport path',3,'Syntax: .transport path [#transportEntry]\r\nList  Transport path for given entry (or current).');

-- -------------------
-- mass mail ex mr2702
-- -------------------

UPDATE `command`
SET `help` = 'Syntax: .send mass items #racemask|$racename|alliance|horde|all [male|female] "#subject" "#text" itemid1[:count1] itemid2[:count2] ... itemidN[:countN]\r\n\r\nSend a mail to players. Subject and mail text must be in "". Gender may be omitted. If for itemid not provided related count values then expected 1, if count > max items in stack then items will be send in required amount stacks. All stacks amount in mail limited to 12.'
WHERE `name` = 'send mass items';

UPDATE `command`
SET `help` = 'Syntax: .send mass mail #racemask|$racename|alliance|horde|all [male|female] "#subject" "#text"\r\n\r\nSend a mail to players. Subject and mail text must be in "". Gender may be omitted.'
WHERE `name` = 'send mass mail';

UPDATE `command`
SET `help` = 'Syntax: .send mass money #racemask|$racename|alliance|horde|all [male|female] "#subject" "#text" #money\r\n\r\nSend mail with money to players. Subject and mail text must be in "". Gender may be omitted.'
WHERE `name` = 'send mass money';

-- ------------------------------
-- Op codes DB storing mr02526_02
-- ------------------------------

DELETE FROM `command` WHERE `name` IN ('reload opcodes');

INSERT INTO `command`
    (`name`, `security`, `help`)
VALUES
    ('reload opcodes',3,'Syntax: .reload opcodes\r\nReload all opcodes for current client build from DB.');

-- -----------------
-- PlayerBot mr00022
-- -----------------

DELETE FROM `command` WHERE `name` = 'bot';
INSERT INTO `command`(`name`, `security`, `help`) VALUES
('bot',0,'Syntax:\r.bot add BOTNAME (add character to world)\r.bot remove BOTNAME (remove character from world)\r.bot co|combatorder BOTNAME COMBATORDER [TARGET]');

-- Implement spell_dbc reload command
DELETE FROM `command` WHERE `name` IN ('reload spell_dbc');
INSERT INTO `command`
    (`name`, `security`, `help`)
VALUES
    ('reload spell_dbc',3,'Syntax: .reload spell_dbc\r\n\r\nReload `spell_dbc` table (very UNSAFE operation + small memleak)');

-- -------------------
-- string typo mr00299
-- -------------------

DELETE FROM mangos_string WHERE entry BETWEEN 17890 AND 17896;

INSERT INTO mangos_string (entry, content_default) VALUES
(17890, 'Gamemaster %s banned account %s for %s. Reason: %s'),
(17891, 'Gamemaster %s banned account %s permanently. Reason: %s'),
(17892, 'Gamemaster %s banned character %s for %s. Reason: %s'),
(17893, 'Gamemaster %s banned character %s permanently. Reason: %s'),
(17894, 'Gamemaster %s banned IP address %s for %s. Reason: %s'),
(17895, 'Gamemaster %s banned IP address %s permanently. Reason: %s'),
(17896, 'Gamemaster %s disabled %s chat for %u minutes.');

DELETE FROM mangos_string WHERE entry IN (548, 549);

INSERT INTO mangos_string (entry, content_default, content_loc1, content_loc2, content_loc3, content_loc4, content_loc5, content_loc6, content_loc7, content_loc8) VALUES
(548, 'Player%s %s (guid: %u) Account: %s (id: %u) E-mail: %s GMLevel: %u Last IP: %s Last login: %s Latency: %ums', NULL, NULL, NULL, NULL, NULL, NULL, NULL,'?????%s %s (GUID: %u) ???????: %s (id: %u) ?-????: %s ??????? ???????: %u ????????? IP: %s ????????? ????: %s ????????: %ums'),
(549, 'Race: %s Class: %s Played time: %s Level: %u Money: %ug%us%uc', NULL, NULL, NULL, NULL, NULL, NULL, NULL,'????: %s ?????: %s ????????? ?????: %s ???????: %u ?????????? ?????: %ug%us');

-- -----------------
-- Anticheat mr00017
-- -----------------

DELETE FROM `mangos_string` WHERE `entry`='11000';
INSERT INTO `mangos_string`
    (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
    (11000, '|cffff0000[Anticheat]: Cheater detected. Nickname: %s. Cheat type: %s.|r', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '|cffff0000[???????]: ????? ?????????. ???: %s. ??? ????: %s.|r');

-- -----------------------
-- Arena Announcer mr00017
-- -----------------------

DELETE FROM `mangos_string` WHERE `entry`='17898';
INSERT INTO `mangos_string`
    (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
    (17898, '|cffff0000[Arena Queue Announcer]:|r %ux%u %s started!|r', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '|cffff0000[????? ?????]:|r %ux%u %s ??????????!|r');

-- ----------------------
-- Auto broadcast mr00017
-- ----------------------

DELETE FROM `mangos_string` WHERE `entry`='1300';
INSERT INTO `mangos_string`
    (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
    (1300, '|cffffcc00[Server]: |cff00ff00%s|r', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------
-- Refer a friend mr00019
-- ----------------------

DELETE FROM `command` WHERE `name` IN ('account friend add','account friend delete', 'account friend list');

INSERT INTO `command`
    (`name`, `security`, `help`)
VALUES
    ('account friend add',3,'Syntax: .account friend add [#accountId|$accountName] [#friendaccountId|$friendaccountName]\r\n\r\nSet friend account.'),
    ('account friend delete',3,'Syntax: .account friend delete [#accountId|$accountName] [#friendaccountId|$friendaccountName]\r\n\r\nDelete friend account.'),
    ('account friend list',3,'Syntax: .account friend list [#accountId|$accountName]\r\n\r\nList friends for account.');

DELETE FROM `mangos_string` WHERE `entry` IN (11133,11134);
INSERT INTO `mangos_string`
    (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
    (11133,'RAF system ok.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
    (11134,'RAF system error.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

-- ---------------------------------------
-- State manager command line info mr01793
-- ---------------------------------------

DELETE FROM `mangos_string` WHERE `entry` IN (526,527,528,529,530,531,532,533,534,535,536,537,538,1132,1133,1134,1192);
INSERT INTO `mangos_string` (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`) VALUES
(526,'%s states (movement generators) stack:',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(527,' Priority: %i State: %s',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(532,'        Targeted to %s',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(535,'        Home movement to (X:%f Y:%f Z:%f)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(536,'        Home movement used for player?!?',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(538,'        (non-standart state %s)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1132,'        Follow %s',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/* old (mangos default) values
INSERT INTO `mangos_string` (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`) VALUES
(526,'%s (lowguid: %u) movement generators stack:',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(527,'   Idle',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(528,'   Random',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(529,'   Waypoint',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(530,'   Animal random',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(531,'   Confused',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(532,'   Targeted to player %s (lowguid %u)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(533,'   Targeted to creature %s (lowguid %u)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(534,'   Targeted to <NULL>',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(535,'   Home movement to (X:%f Y:%f Z:%f)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(536,'   Home movement used for player?!?',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(537,'   Taxi flight',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1192,'  Effect movement',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(538,'   Unknown movement generator (%u)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1132,'   Follow player %s (lowguid %u)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1133,'   Follow creature %s (lowguid %u)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1134,'   Follow <NULL>',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
*/

-- -------------------
-- outdoor pvp mr01615
-- -------------------- 

-- DELETE FROM `mangos_string` WHERE `entry` BETWEEN 10001 AND 10055;

/* need refill text ID's by commit 12097
INSERT INTO `mangos_string` (`entry`, `content_default`, `content_loc6`, `content_loc7`, `content_loc8`) VALUES
 
-- all messages are sent in yellow text in SMSG_DEFENSE_MESSAGE (LocalDefense channel)
-- losing control of a capture point doesnt send a text (not yet confirmed for all)
-- TODO: Switch alliance and horde position (alliance before horde)
 
-- silithus
(10001,'The Horde has collected 200 silithyst!', '¡La Horda ha recolectado 200 silitistas!', '¡La Horda ha recolectado 200 silitistas!', '???? ??????? 200 ?????????!'),
(10002,'The Alliance has collected 200 silithyst!', '¡La Horda ha recolectado 200 silitistas!', '¡La Horda ha recolectado 200 silitistas!', '?????? ?????? 200 ?????????!'),
 
-- eastern plaguelands
(10003,'The Horde has taken the Northpass Tower!', '¡La Horda ha tomado la Torre del paso del norte!', '¡La Horda ha tomado la Torre del paso del norte!', '???? ????????? ????? ????????? ????????!'),
(10004,'The Alliance has taken the Northpass Tower!', '¡La Alianza ha tomado la Torre del paso del norte!', '¡La Alianza ha tomado la Torre del paso del norte!', '?????? ???????? ????? ????????? ????????!'),
(10005,'The Horde has taken the Eastwall Tower!', '¡La Horda ha tomado la Torre de la Muralla del Este!', '¡La Horda ha tomado la Torre de la Muralla del Este!', '???? ????????? ????????? ?????!'),
(10006,'The Alliance has taken the Eastwall Tower!', '¡La Alianza ha tomado la Torre de la Muralla del Este!', '¡La Alianza ha tomado la Torre de la Muralla del Este!', '?????? ???????? ????????? ?????!'),
(10007,'The Horde has taken the Crown Guard Tower!', '¡La Horda ha tomado la Torre de la Corona!', '¡La Horda ha tomado la Torre de la Corona!', '???? ????????? ????? ??????????? ??????!'),
(10008,'The Alliance has taken the Crown Guard Tower!', '¡La Alianza ha tomado la Torre de la Corona!', '¡La Alianza ha tomado la Torre de la Corona!', '?????? ???????? ????? ??????????? ??????!'),
(10009,'The Horde has taken the Plaguewood Tower!', '¡La Horda ha tomado la Torre del bosque de la peste!', '¡La Horda ha tomado la Torre del bosque de la peste!', '???? ????????? ????? ??????? ????!'),
(10010,'The Alliance has taken the Plaguewood Tower!', '¡La Alianza ha tomado la Torre del bosque de la peste!', '¡La Alianza ha tomado la Torre del bosque de la peste!', '?????? ???????? ????? ??????? ????!'),
(10011,'The Horde lost the Northpass Tower!', '¡La Horda ha perdido la Torre del paso del norte!', '¡La Horda ha perdido la Torre del paso del norte!', '???? ???????? ????? ????????? ????????!'),
(10012,'The Alliance lost the Northpass Tower!', '¡La Alianza ha perdido la Torre del paso del norte!', '¡La Alianza ha perdido la Torre del paso del norte!', '?????? ??????? ????? ????????? ????????!'),
(10013,'The Horde lost the Eastwall Tower!', '¡La Horda ha perdido la Torre de la Muralla del Este!', '¡La Horda ha perdido la Torre de la Muralla del Este!', '???? ???????? ????????? ?????!'),
(10014,'The Alliance lost the Eastwall Tower!', '¡La Alianza ha perdido la Torre de la Muralla del Este!', '¡La Alianza ha perdido la Torre de la Muralla del Este!', '?????? ??????? ????????? ?????!'),
(10015,'The Horde lost the Crown Guard Tower!', '¡La Horda ha perdido la Torre de la Corona!', '¡La Horda ha perdido la Torre de la Corona!', '???? ???????? ????? ??????????? ??????!'),
(10016,'The Alliance lost the Crown Guard Tower!', '¡La Alianza ha perdido la Torre de la Corona!', '¡La Alianza ha perdido la Torre de la Corona!', '?????? ??????? ????? ??????????? ??????!'),
(10017,'The Horde lost the Plaguewood Tower!', '¡La Horda ha perdido la Torre del bosque de la peste!', '¡La Horda ha perdido la Torre del bosque de la peste!', '???? ???????? ????? ??????? ????!'),
(10018,'The Alliance lost the Plaguewood Tower!', '¡La Alianza ha perdido la Torre del bosque de la peste!', '¡La Alianza ha p la Torre del bosque de la peste!', '?????? ??????? ????? ??????? ????!'),
 
-- hellfire peninsula
(10019,'|cffffff00The Overlook has been taken by the Horde!|r', '|cffffff00La Dominancia ha sido tomada por la Horda!|r', '|cffffff00La Dominancia ha sido tomada por la Horda!|r', '|cffffff00???? ????????? ???????? ??????????!|r'),
(10020,'|cffffff00The Overlook has been taken by the Alliance!|r', '|cffffff00La Dominancia ha sido tomada por la Alianza!|r', '|cffffff00La Dominancia ha sido tomada por la Alianza!|r', '|cffffff00?????? ???????? ???????? ??????????!|r'),
(10021,'|cffffff00The Stadium has been taken by the Horde!|r', '|cffffff00El Estadium ha sido tomado por la Horda!|r', '|cffffff00El Estadium ha sido tomado por la Horda!|r', '|cffffff00???? ????????? ?????????!|r'),
(10022,'|cffffff00The Stadium has been taken by the Alliance!|r', '|cffffff00El Estadium ha sido tomado por la Alianza!|r', '|cffffff00El Estadium ha sido tomado por la Alianza!|r', '|cffffff00?????? ???????? ?????????!|r'),
(10023,'|cffffff00Broken Hill has been taken by the Horde!|r', '|cffffff00Cerro Tábido ha sido tomado por la Horda!|r', '|cffffff00Cerro Tábido ha sido tomado por la Horda!|r', '|cffffff00???? ????????? ?????????? ????!|r'),
(10024,'|cffffff00Broken Hill has been taken by the Alliance!|r', '|cffffff00Cerro Tábido ha sido tomado por la Alianza!|r', '|cffffff00Cerro Tábido ha sido tomado por la Alianza!|r', '|cffffff00?????? ???????? ?????????? ????!|r'),
 
 -- following does not exist on retail (confirmed!)
(10025,'The Horde lost The Overlook!', '', '', ''),
(10026,'The Alliance lost The Overlook!', '', '', ''),
(10027,'The Horde lost The Stadium!', '', '', ''),
(10028,'The Alliance lost The Stadium!', '', '', ''),
(10029,'The Horde lost Broken Hill!', '', '', ''),
(10030,'The Alliance lost Broken Hill!', '', '', ''),
 
-- zangarmarsh
(10031,'|cffffff00The Horde has taken control of the West Beacon!|r', '|cffffff00¡La Horda ha tomado el control de la Baliza del Oeste!|r', '|cffffff00¡La Horda ha tomado el control de la Baliza del Oeste!|r', '|cffffff00???? ????????? ???????? ????!|r'),
(10032,'|cffffff00The Alliance has taken control of the West Beacon!|r', '|cffffff00¡La Alianza ha tomado el control de la Baliza del Oeste!|r', '|cffffff00¡La Alianza ha tomado el control de la Baliza del Oeste!|r', '|cffffff00???? ????????? ???????? ????!|r'),
(10033,'|cffffff00The Horde has taken control of the East Beacon!|r', '|cffffff00¡La Horda ha tomado el control de la Baliza del Este!|r', '|cffffff00¡La Horda ha tomado el control de la Baliza del Este!|r', '|cffffff00???? ????????? ????????? ????!|r'),
(10034,'|cffffff00The Alliance has control of taken the East Beacon!|r', '|cffffff00¡La Alianza ha tomado el control de la Baliza del Este!|r', '|cffffff00¡La Alianza ha tomado el control de la Baliza del Este!|r', '|cffffff00?????? ???????? ????????? ????!|r'),
-- '|cffffff00The Horde has taken control of both beacons!|r'
-- '|cffffff00The Alliance has taken control of both beacons!|r'
-- '|cffffff00The Horde Field Scout is now issuing battle standards.|r'
-- '|cffffff00The Alliance Field Scout is now issuing battle standards.|r'
(10035,'|cffffff00The Horde has taken control of Twin Spire Ruins!|r', '|cffffff00¡La Horda ha tomado el control del Cementerio de las Agujas Gemelas!|r', '|cffffff00¡La Horda ha tomado el control del Cementerio de las Agujas Gemelas!|r', '|cffffff00???? ????????? ???????? ???? ??????!|r'),
(10036,'|cffffff00The Alliance has taken control of Twin Spire Ruins!|r', '|cffffff00¡La Alianza ha tomado el control del Cementerio de las Agujas Gemelas!|r', '|cffffff00¡La Alianza ha tomado el control del Cementerio de las Agujas Gemelas!|r', '|cffffff00?????? ???????? ???????? ???? ??????!|r'), -- SMSG_PLAY_SOUND id 8173, from npc 15384 (npc id may be a parsing error, but unlikely)
(10037,'The Horde lost the West Beacon!', '¡La Horda ha perdido la Baliza del Oeste!', '¡La Horda ha perdido la Baliza del Oeste!', '???? ???????? ???????? ????!'),
(10038,'The Alliance lost the West Beacon!', '¡La Alianza ha perdido la Baliza del Oeste!', '¡La Alianza ha perdido la Baliza del Oeste!', '?????? ??????? ???????? ????!'),
(10039,'The Horde lost the East Beacon!', '¡La Horda ha perdido la Baliza del Este!', '¡La Horda ha perdido la Baliza del Este!', '???? ???????? ????????? ????!'),
(10040,'The Alliance lost the East Beacon!', '¡La Alianza ha perdido la Baliza del Este!', '¡La Alianza ha perdido la Baliza del Este!', '?????? ??????? ????????? ????!'),
(10041,'The Horde lost the Twin Spire Graveyard!', '¡La Horda ha perdido el Cementerio de las Agujas Gemelas!', '¡La Horda ha perdido el Cementerio de las Agujas Gemelas!', '???? ???????? ???????? ???? ??????!'),
(10042,'The Alliance lost the Twin Spire Graveyard!', '¡La Alianza ha perdido el Cementerio de las Agujas Gemelas!', '¡La Alianza ha perdido el Cementerio de las Agujas Gemelas!', '?????? ??????? ???????? ???? ??????!'),
 
-- nagrand
(10043,'The Horde has captured Halaa!', '¡La Alianza ha capturado Halaa!', '¡La Alianza ha capturado Halaa!', '???? ????????? ?????!'),
(10044,'The Alliance has captured Halaa!', '¡La Horda ha capturado Halaa!', '¡La Horda ha capturado Halaa!', '?????? ???????? ?????!'),
(10045,'The Horde lost Halaa!', '¡La Horda ha perdido el control de Halaa!', '¡La Horda ha perdido el control de Halaa!', '???? ???????? ?????!'),
(10046,'The Alliance lost Halaa!', '¡La Alianza ha perdido el control de Halaa!', '¡La Alianza ha perdido el control de Halaa!', '?????? ??????? ?????!'),
 
-- terokkar forest
(10047,'The Horde has taken a Spirit Tower!', '¡La Horda ha tomado una Torre del Espíritu!', '¡La Horda ha tomado una Torre del Espíritu!', '???? ????????? ????? ?????!'),
(10048,'The Alliance has taken a Spirit Tower!', '¡La Alianza ha tomado una Torre del Espíritu!', '¡La Alianza ha tomado una Torre del Espíritu!', '?????? ???????? ????? ?????!'),
(10049,'The Horde lost a Spirit Tower!', '¡La Horda ha perdido una Torre del Espíritu!', '¡La Horda ha perdido una Torre del Espíritu!', '???? ???????? ????? ?????!'),
(10050,'The Alliance lost a Spirit Tower!', '¡La Alianza ha perdido una Torre del Espíritu!', '¡La Alianza ha perdido una Torre del Espíritu!', '?????? ??????? ????? ?????!');
*/

-- --------
-- Chat spy
-- --------

DELETE FROM `mangos_string` WHERE `entry` IN (11600, 11601, 11602, 11603, 11604, 11605, 11606, 11607, 11608);
INSERT INTO `mangos_string` (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`) VALUES
(11600, 'ChatSpy appended to player |cffff0000%s|r(%u)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ChatSpy ??????????? ? ?????? |cffff0000%s|r(%u)'),
(11601, 'ChatSpy for player |cffff0000%s|r(%u) cancelled by massive ChatSpy cancel.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ChatSpy ??? ?????? |cffff0000%s|r(%u) ??????? ???????? ??????? ??????? ChatSpy.'),
(11602, 'All ChatSpys reset.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ChatSpy ??? ???? ??????? ???????.'),
(11603, 'Player %s(%u) has no ChatSpy.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '? ?????? %s(%u) ?? ?????????? ChatSpy.'),
(11604, 'You were ChatSpying player, cancelled.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ChatSpying ???? ? ??????.'),
(11605, '%s(%u) was ChatSpying player, cancelled.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '%s(%u) ????????? ChatSpy ?? ??????, ????????.'),
(11606, 'List of ChatSpys appended', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '?????? ????????????? ChatSpy'),
(11607, 'Total: %u', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '?????: %u'),
(11608, '%s(%u) spys |cffff0000%s|r(%u)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '%s(%u) ?????? ?? |cffff0000%s|r(%u)');

DELETE FROM `command` WHERE `name` IN ('chatspy set', 'chatspy reset', 'chatspy status', 'chatspy cancel');
INSERT INTO `command` VALUES
('chatspy set',    3, 'Syntax: .chatspy set $PlayerName\r\n  Append ChatSpy on $player.'),
('chatspy reset',  3, 'Syntax: .chatspy reset\r\n  Reset all ChatSpys.'),
('chatspy status', 3, 'Syntax: .chatspy status $PlayerName\r\n  Show ChatSpy status for $player.'),
('chatspy cancel', 3, 'Syntax: .chatspy cancel $PlayerName\r\n  Reset ChatSpy for $player.');

-- ---------------------
-- chat disable by level
-- ---------------------

DELETE FROM mangos_string WHERE `entry` IN (50000,50001,50002,50003,50004,50005,50006,50007);
INSERT INTO mangos_string
   (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
   (50000, 'You cannot say until you are level %u.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO mangos_string
   (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
   (50001, 'You cannot yell until you are level %u.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO mangos_string
   (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
   (50002, 'You cannot whisper until you are level %u.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO mangos_string
   (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
   (50003, 'You cannot party chat until you are level %u.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO mangos_string
   (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
   (50004, 'You cannot guild chat until you are level %u.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO mangos_string
   (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
   (50005, 'You cannot raid chat until you are level %u.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO mangos_string
   (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
   (50006, 'You cannot battleground chat until you are level %u.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

INSERT INTO mangos_string
   (`entry`, `content_default`, `content_loc1`, `content_loc2`, `content_loc3`, `content_loc4`, `content_loc5`, `content_loc6`, `content_loc7`, `content_loc8`)
VALUES
   (50007, 'You cannot chat in channel until you are level %u.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ------------
-- RFC commands
-- ------------

DELETE FROM `command` WHERE `name` IN ('character changefaction', 'character changerace');

INSERT INTO `command` (`name`, `security`, `help`) VALUES
('character changerace', 3,'Syntax: .character changerace [$name]\r\nMark selected in game or by $name in command character for change race at next login.'),
('character changefaction', 3,'Syntax: .character changefaction [$name]\r\nMark selected in game or by $name in command character for change faction at next login.');


