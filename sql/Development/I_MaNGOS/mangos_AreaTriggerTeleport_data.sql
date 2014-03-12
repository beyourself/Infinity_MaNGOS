-- ------------------------------------
-- Areatrigger additional data        -
-- Areatrigger table format change    -
-- ------------------------------------

ALTER TABLE `areatrigger_teleport`
    CHANGE `required_quest_done` `required_quest_done_A` int(11) UNSIGNED NOT NULL DEFAULT "0" COMMENT "Alliance quest",
    CHANGE `required_quest_done_heroic` `required_quest_done_heroic_A` int(11) UNSIGNED NOT NULL DEFAULT "0" COMMENT "Alliance heroic quest",
    ADD COLUMN `required_quest_done_H` int(11) UNSIGNED NOT NULL DEFAULT "0" COMMENT "Horde quest" AFTER `required_quest_done_A`,
    ADD COLUMN `required_quest_done_heroic_H` int(11) UNSIGNED NOT NULL DEFAULT "0" COMMENT "Horde heroic quest" AFTER `required_quest_done_heroic_A`,
    ADD COLUMN `minGS` int(11) UNSIGNED NOT NULL DEFAULT "0" COMMENT "Min player gear score",
    ADD COLUMN `maxGS` int(11) UNSIGNED NOT NULL DEFAULT "0" COMMENT "Max player gear score",
    ADD COLUMN `achiev_id_0` int(11) UNSIGNED NOT NULL DEFAULT "0" COMMENT "Required achievement to enter in heroic difficulty",
    ADD COLUMN `achiev_id_1` int(11) UNSIGNED NOT NULL DEFAULT "0" COMMENT "Required achievement to enter in extra difficulty",
    ADD COLUMN `combat_mode` int(11) UNSIGNED NOT NULL DEFAULT "0" COMMENT "Possibility for enter while zone in combat";

UPDATE `areatrigger_teleport` SET `required_quest_done_H`=`required_quest_done_A` WHERE `required_quest_done_A` > 0;
UPDATE `areatrigger_teleport` SET `required_quest_done_heroic_H`=`required_quest_done_heroic_A` WHERE `required_quest_done_heroic_A` > 0;

-- ------------------
-- Area trigger Data-
-- ------------------

UPDATE `areatrigger_teleport` SET `achiev_id_0` = 4530, `achiev_id_1` = 4597 WHERE `target_map` = 631;

-- UPDATE `areatrigger_teleport` SET `combat_mode` = 1 WHERE `target_map` = 631;

UPDATE `areatrigger_teleport` SET `minGS` = 192 WHERE `target_map` > 600;

UPDATE areatrigger_teleport SET combat_mode = 1 WHERE id IN
-- ICC IceCrown Citadel
(5670, 
-- Trial of the Crusader
5503,
-- Trial of the Champion
5505,
-- Vault of Archavon
5258,
-- Ulduar Raid
5379,
-- Naxxramas
5191, 5192, 5193, 5194,
-- Sunwell Plateau 
4889,
-- Zul'Aman
4738,
-- Black Temple
4598,
-- Gruul\'s Lair 
4535, 
-- The Eye
4470,
-- Serpentshrine Cavern
4416,
-- Karazhan
4131, 4135,
-- Zul'Gurub 
3928);

-- ------------------------------------------------------------------------------------
-- Template for creating custom rules for transfer to absent in AreaTrigger.dbc maps. -
-- ------------------------------------------------------------------------------------

DELETE FROM `areatrigger_teleport` WHERE `id` BETWEEN 100000 AND 101000;
INSERT INTO `areatrigger_teleport` (`id`, `name`, `required_level`, `required_item`, `required_item2`, `heroic_key`, `heroic_key2`, `required_quest_done_A`, `required_quest_done_H`, `required_quest_done_heroic_A`, `required_quest_done_heroic_H`, `target_map`, `target_position_x`, `target_position_y`, `target_position_z`, `target_orientation`, `minGS`, `maxGS`, `achiev_id_0`, `achiev_id_1`, `combat_mode`) VALUES
(100013, 'Map 13', 1, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(100025, 'Map 25', 1, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(100037, 'Map 37', 1, 0, 0, 0, 0, 0, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(100042, 'Map 42', 1, 0, 0, 0, 0, 0, 0, 0, 0, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(100169, 'Map 169', 1, 0, 0, 0, 0, 0, 0, 0, 0, 169, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(100451, 'Map 451', 1, 0, 0, 0, 0, 0, 0, 0, 0, 451, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(100573, 'Map 573', 1, 0, 0, 0, 0, 0, 0, 0, 0, 573, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(100597, 'Map 597', 1, 0, 0, 0, 0, 0, 0, 0, 0, 597, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(100605, 'Map 605', 1, 0, 0, 0, 0, 0, 0, 0, 0, 605, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(100606, 'Map 606', 1, 0, 0, 0, 0, 0, 0, 0, 0, 606, 0, 0, 0, 0, 0, 0, 0, 0, 0);
