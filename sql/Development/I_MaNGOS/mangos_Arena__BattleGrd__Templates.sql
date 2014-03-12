-- Alterac Valley
UPDATE battleground_template SET AllianceStartO = 3.6, HordeStartO = 1.24 WHERE id = 1;
-- Warsong Gulch
UPDATE battleground_template SET HordeStartO = 0 WHERE id = 2;
-- Nagrand Arena
UPDATE battleground_template SET AllianceStartO = 5.21, HordeStartO = 2.06 WHERE id = 4;
-- Blade's Edge Arena
UPDATE battleground_template SET AllianceStartO = 4, HordeStartO = 0.903205 WHERE id = 5;
-- Ruins of Lordaeron
UPDATE battleground_template SET AllianceStartO = 4.83, HordeStartO = 1.7 WHERE id = 8;
-- Dalaran Sewers
UPDATE battleground_template SET HordeStartO = 3.14 WHERE id = 10;
-- The Ring of Valor
UPDATE battleground_template SET AllianceStartO = 4.72, HordeStartO = 1.6 WHERE id = 11;
-- Isle of Conquest
UPDATE battleground_template SET AllianceStartO = 0, HordeStartO = 3.14159 WHERE id = 30;

-- ---------
-- mr01330 -
-- ---------

-- set 1 day respawn time to every game object in BGs/arenas
UPDATE gameobject SET spawntimesecs = 86400 WHERE map IN (30, 489, 529, 559, 562, 566, 572, 607, 617, 618, 628);
-- set 10 seconds respawn time to:
UPDATE gameobject SET spawntimesecs = 10 WHERE id IN (
-- SotA Seaforium Charges
190753, 194086);

-- set 1 day respawn time to every creature in BGs/arenas
UPDATE creature SET spawntimesecs = 86400 WHERE map IN (30, 489, 529, 559, 562, 566, 572, 607, 617, 618, 628);
-- set 10 seconds respawn time to:
UPDATE creature SET spawntimesecs = 10 WHERE id IN (
-- Spirit Guides
13116, 13117,
-- SotA demolishers
28781);

-- -------
-- mr02391
-- -------

-- Sql to create buff object pool for some BG
-- -------------
-- Arathi bassin
-- -------------

-- Stable
REPLACE INTO `gameobject` VALUES (150500, 179871, 529, 1, 1, 1185.71, 1185.24, -56.36, 2.56, 0, 0, 0.022338351, 0.999750467, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150501, 179904, 529, 1, 1, 1185.71, 1185.24, -56.36, 2.56, 0, 0, 0.022338351, 0.999750467, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150502, 179905, 529, 1, 1, 1185.71, 1185.24, -56.36, 2.56, 0, 0, 0.022338351, 0.999750467, 180, 100, 1);

-- Blacksmith
REPLACE INTO `gameobject` VALUES (150503, 179871, 529, 1, 1, 990.75, 1008.18, -42.60, 2.43, 0, 0, 0.021204161, 0.999775166, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150504, 179904, 529, 1, 1, 990.75, 1008.18, -42.60, 2.43, 0, 0, 0.021204161, 0.999775166, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150505, 179905, 529, 1, 1, 990.75, 1008.18, -42.60, 2.43, 0, 0, 0.021204161, 0.999775166, 180, 100, 1);

-- Farm
REPLACE INTO `gameobject` VALUES (150506, 179871, 529, 1, 1, 817.66, 843.34, -56.54, 3.01, 0, 0, 0.026264184, 0.999655036, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150507, 179904, 529, 1, 1, 817.66, 843.34, -56.54, 3.01, 0, 0, 0.026264184, 0.999655036, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150508, 179905, 529, 1, 1, 817.66, 843.34, -56.54, 3.01, 0, 0, 0.026264184, 0.999655036, 180, 100, 1);

-- Lumber Mill
REPLACE INTO `gameobject` VALUES (150509, 179871, 529, 1, 1, 807.46, 1189.16, 11.92, 5.44, 0, 0, 0.047455126, 0.998873370, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150510, 179904, 529, 1, 1, 807.46, 1189.16, 11.92, 5.44, 0, 0, 0.047455126, 0.998873370, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150511, 179905, 529, 1, 1, 807.46, 1189.16, 11.92, 5.44, 0, 0, 0.047455126, 0.998873370, 180, 100, 1);

-- Gold Mine
REPLACE INTO `gameobject` VALUES (150512, 179871, 529, 1, 1, 1146.62, 816.94, -98.49, 6.0, 0, 0, 0.053555973, 0.998564849, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150513, 179904, 529, 1, 1, 1146.62, 816.94, -98.49, 6.0, 0, 0, 0.053555973, 0.998564849, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150514, 179905, 529, 1, 1, 1146.62, 816.94, -98.49, 6.0, 0, 0, 0.053555973, 0.998564849, 180, 100, 1);

-- Add pool id
REPLACE INTO `pool_template` VALUES (15000, 1, "Stable power up buff");
REPLACE INTO `pool_template` VALUES (15001, 1, "Blacksmith power up buff");
REPLACE INTO `pool_template` VALUES (15002, 1, "Farm power up buff");
REPLACE INTO `pool_template` VALUES (15003, 1, "Lumber Mill power up buff");
REPLACE INTO `pool_template` VALUES (15004, 1, "Gold Mine power up buff");

-- Add Stable pool
REPLACE INTO `pool_gameobject` VALUES (150500, 15000, 0, "Stable : Speed buff");
REPLACE INTO `pool_gameobject` VALUES (150501, 15000, 0, "Stable : Regen buff");
REPLACE INTO `pool_gameobject` VALUES (150502, 15000, 0, "Stable : Berserker buff");

-- Add Blacksmith pool
REPLACE INTO `pool_gameobject` VALUES (150503, 15001, 0, "Blacksmith : Speed buff");
REPLACE INTO `pool_gameobject` VALUES (150504, 15001, 0, "Blacksmith : Regen buff");
REPLACE INTO `pool_gameobject` VALUES (150505, 15001, 0, "Blacksmith : Berserker buff");

-- Add Farm pool
REPLACE INTO `pool_gameobject` VALUES (150506, 15002, 0, "Farm : Speed buff");
REPLACE INTO `pool_gameobject` VALUES (150507, 15002, 0, "Farm : Regen buff");
REPLACE INTO `pool_gameobject` VALUES (150508, 15002, 0, "Farm : Berserker buff");

-- Add Lumber Mill pool
REPLACE INTO `pool_gameobject` VALUES (150509, 15003, 0, "Lumber Mill : Speed buff");
REPLACE INTO `pool_gameobject` VALUES (150510, 15003, 0, "Lumber Mill : Regen buff");
REPLACE INTO `pool_gameobject` VALUES (150511, 15003, 0, "Lumber Mill : Berserker buff");

-- Add Gold Mine pool
REPLACE INTO `pool_gameobject` VALUES (150512, 15004, 0, "Gold Mine : Speed buff");
REPLACE INTO `pool_gameobject` VALUES (150513, 15004, 0, "Gold Mine : Regen buff");
REPLACE INTO `pool_gameobject` VALUES (150514, 15004, 0, "Gold Mine : Berserker buff");

-- Eye of Storm
-- ------------

-- Blood Elf Tower
REPLACE INTO `gameobject` VALUES (150550, 179871, 566, 1, 1, 2050.4599609375, 1372.26000976563, 1194.56005859375, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150551, 179904, 566, 1, 1, 2050.4599609375, 1372.26000976563, 1194.56005859375, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150552, 179905, 566, 1, 1, 2050.4599609375, 1372.26000976563, 1194.56005859375, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);

-- Fel REaver Ruins Tower
REPLACE INTO `gameobject` VALUES (150553, 179871, 566, 1, 1, 2046.32995605469, 1748.81005859375, 1190.03002929688, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150554, 179904, 566, 1, 1, 2046.32995605469, 1748.81005859375, 1190.03002929688, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150555, 179905, 566, 1, 1, 2046.32995605469, 1748.81005859375, 1190.03002929688, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);

-- Mage Tower
REPLACE INTO `gameobject` VALUES (150556, 179871, 566, 1, 1, 2283.3798828125, 1748.81005859375, 1189.7099609375, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150557, 179904, 566, 1, 1, 2283.3798828125, 1748.81005859375, 1189.7099609375, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150558, 179905, 566, 1, 1, 2283.3798828125, 1748.81005859375, 1189.7099609375, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);

-- Draenei Ruins Tower
REPLACE INTO `gameobject` VALUES (150559, 179871, 566, 1, 1, 2302.68994140625, 1391.27001953125, 1197.77001953125, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150560, 179904, 566, 1, 1, 2302.68994140625, 1391.27001953125, 1197.77001953125, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);
REPLACE INTO `gameobject` VALUES (150561, 179905, 566, 1, 1, 2302.68994140625, 1391.27001953125, 1197.77001953125, 0.907571, 0, 0, 0.438371, 0.898794, 180, 100, 1);

-- Add pool id
REPLACE INTO `pool_template` VALUES (15010, 1, "Blood Elf Tower power up buff");
REPLACE INTO `pool_template` VALUES (15011, 1, "Fel Reaver Ruins Tower power up buff");
REPLACE INTO `pool_template` VALUES (15012, 1, "Mage Tower power up buff");
REPLACE INTO `pool_template` VALUES (15013, 1, "Dreanei Ruins Tower power up buff");

-- Add Blood Elf Tower pool
REPLACE INTO `pool_gameobject` VALUES (150550, 15010, 0, "Blood Elf Tower : Speed buff");
REPLACE INTO `pool_gameobject` VALUES (150551, 15010, 0, "Blood Elf Tower : Regen buff");
REPLACE INTO `pool_gameobject` VALUES (150552, 15010, 0, "Blood Elf Tower : Berserker buff");

-- Add Fel Reaver Ruins Tower pool
REPLACE INTO `pool_gameobject` VALUES (150553, 15011, 0, "Fel Reaver Ruins Tower : Speed buff");
REPLACE INTO `pool_gameobject` VALUES (150554, 15011, 0, "Fel Reaver Ruins Tower : Regen buff");
REPLACE INTO `pool_gameobject` VALUES (150555, 15011, 0, "Fel Reaver Ruins Tower : Berserker buff");

-- Add Mage Tower pool
REPLACE INTO `pool_gameobject` VALUES (150556, 15012, 0, "Mage Tower : Speed buff");
REPLACE INTO `pool_gameobject` VALUES (150557, 15012, 0, "Mage Tower : Regen buff");
REPLACE INTO `pool_gameobject` VALUES (150558, 15012, 0, "Mage Tower : Berserker buff");

-- Add Dreanei Ruins Tower pool
REPLACE INTO `pool_gameobject` VALUES (150559, 15013, 0, "Dreanei Ruins Tower : Speed buff");
REPLACE INTO `pool_gameobject` VALUES (150560, 15013, 0, "Dreanei Ruins Tower : Regen buff");
REPLACE INTO `pool_gameobject` VALUES (150561, 15013, 0, "Dreanei Ruins Tower : Berserker buff");

-- -------
-- mr01817
-- -------

DELETE FROM creature_template_addon WHERE entry IN (
35379, -- eye of storm alliance
35380, -- eye of storm horde
36349, -- arathi basin alliance
36350); -- arathi basin horde
INSERT INTO creature_template_addon (entry, auras)
VALUES
(35379, 66157 ),
(35380, 66157 ),
(36349, 68652 ),
(36350, 68652 );

UPDATE creature_template SET faction_A = 534, faction_H = 534, unit_flags = 0x2000202 WHERE entry IN (35379, 36349); -- ally
UPDATE creature_template SET faction_A = 714, faction_H = 714, unit_flags = 0x2000202 WHERE entry IN (35380, 36350); -- horde

DELETE FROM creature WHERE id IN (35379, 35380, 36349, 36350);
-- new positions in arathi basin
INSERT INTO creature (guid, id, map, spawnMask, phaseMask, position_x, position_y, position_z, spawntimesecs, spawndist)
VALUES
(152000, 36349, 529, 1, 1, 1166.79, 1200.13, -56.7086, 10, 0 ),-- stable
(152001, 36349, 529, 1, 1, 977.016, 1046.62, -44.8092, 10, 0 ),-- forge
(152002, 36349, 529, 1, 1, 806.182, 874.272, -55.9937, 10, 0 ),-- farm
(152003, 36349, 529, 1, 1, 856.142, 1148.9, 11.1847, 10, 0 ),-- lumber mill
(152004, 36349, 529, 1, 1, 1146.92, 848.178, -110.917, 10, 0 ),-- mine

(152005, 36350, 529, 1, 1, 1166.79, 1200.13, -56.7086, 10, 0 ),-- stable
(152006, 36350, 529, 1, 1, 977.016, 1046.62, -44.8092, 10, 0 ),-- forge
(152007, 36350, 529, 1, 1, 806.182, 874.272, -55.9937, 10, 0 ),-- farm
(152008, 36350, 529, 1, 1, 856.142, 1148.9, 11.1847, 10, 0 ),-- lumber mill
(152009, 36350, 529, 1, 1, 1146.92, 848.178, -110.917, 10, 0 );-- mine

INSERT INTO creature (guid, id, map, spawnMask, phaseMask, position_x, position_y, position_z, spawntimesecs, spawndist)
VALUES
(152010, 35379, 566, 1, 1, 2286.382568, 1402.460205,1197.108521 , 10, 0 ), -- draenei ruins
(152011, 35379, 566, 1, 1, 2284.859619, 1731.055786,1189.883057 , 10, 0 ), -- mage tower
(152012, 35379, 566, 1, 1, 2043.890747, 1729.769897,1189.863037 , 10, 0 ), -- fel reaver ruins
(152013, 35379, 566, 1, 1, 2048.877930, 1393.445435,1194.356934 , 10, 0 ), -- blood elf tower

(152014, 35380, 566, 1, 1, 2286.382568, 1402.460205,1197.108521 , 10, 0 ), -- draenei ruins
(152015, 35380, 566, 1, 1, 2284.859619, 1731.055786,1189.883057 , 10, 0 ), -- mage tower
(152016, 35380, 566, 1, 1, 2043.890747, 1729.769897,1189.863037 , 10, 0 ), -- fel reaver ruins
(152017, 35380, 566, 1, 1, 2048.877930, 1393.445435,1194.356934 , 10, 0 ); -- blood elf tower

DELETE FROM creature_battleground WHERE guid BETWEEN 152000 AND 152017;

INSERT INTO creature_battleground (guid, event1, event2)
VALUES
-- arathi basin
(152000, 0, 3 ),
(152001, 1, 3 ),
(152002, 2, 3  ),
(152003, 3, 3 ),
(152004, 4, 3 ),
(152005, 0, 4 ),
(152006, 1, 4 ),
(152007, 2, 4 ),
(152008, 3, 4 ),
(152009, 4, 4 ),
-- eye of storm
(152010, 2, 0 ),
(152011, 3, 0 ),
(152012, 0, 0 ),
(152013, 1, 0 ),
(152014, 2, 1 ),
(152015, 3, 1 ),
(152016, 0, 1 ),
(152017, 1, 1 );

