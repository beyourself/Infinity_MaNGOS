var armorSetTier5Raid = new armorSetObject("tier4raid");

armorSetTier5Raid.slotsArray = new Array();

t = 0;
armorSetTier5Raid.slotsArray[t] = "head"; t++;
armorSetTier5Raid.slotsArray[t] = "shoulder"; t++;
armorSetTier5Raid.slotsArray[t] = "chest"; t++;
armorSetTier5Raid.slotsArray[t] = "hands"; t++;
armorSetTier5Raid.slotsArray[t] = "legs"; t++;

armorSetTier5Raid.slotsNumber = armorSetTier5Raid.slotsArray.length;


//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

armorSetTier5Raid.setNamesArray = new Array();
t = 1;
armorSetTier5Raid.setNamesArray[t] = "Nordrassil Harness"; t++;//druid
armorSetTier5Raid.setNamesArray[t] = "Nordrassil Regalia";t++;
armorSetTier5Raid.setNamesArray[t] = "Nordrassil Raiment";t++;
armorSetTier5Raid.setNamesArray[t] = "Rift Stalker Armor";t++; //hunter
armorSetTier5Raid.setNamesArray[t] = "Tirisfal Regalia";t++; //Mage
armorSetTier5Raid.setNamesArray[t] = "Crystalforge Raiment"; t++;//Paladin
armorSetTier5Raid.setNamesArray[t] = "Crystalforge Armor";t++; 
armorSetTier5Raid.setNamesArray[t] = "Crystalforge Battlegear"; t++;
armorSetTier5Raid.setNamesArray[t] = "Avatar Regalia"; t++; //priest
armorSetTier5Raid.setNamesArray[t] = "Avatar Raiment";t++;
armorSetTier5Raid.setNamesArray[t] = "Deathmantle";t++; //rogue
armorSetTier5Raid.setNamesArray[t] = "Cataclysm Harness";t++; //shaman
armorSetTier5Raid.setNamesArray[t] = "Cataclysm Raiment"; t++;
armorSetTier5Raid.setNamesArray[t] = "Cataclysm Regalia"; t++;
armorSetTier5Raid.setNamesArray[t] = "Corruptor Raiment";t++; //warlock
armorSetTier5Raid.setNamesArray[t] = "Destroyer Battlegear";t++; //warrior
armorSetTier5Raid.setNamesArray[t] = "Destroyer Armor";t++;


armorSetTier5Raid.statsArray = new Array();

t = 0;

//Nordrassil Harness
var feraldruid = '<span class = "myYellow">\
Nordrassil Harness (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Nordrassil Chestplate<br>\
&nbsp;Nordrassil Handgrips<br>\
&nbsp;Nordrassil Headdress<br>\
&nbsp;Nordrassil Feral-Kilt<br>\
&nbsp;Nordrassil Feral-Mantle<br>\
</span><span class = "myGreen">\
(2) Set: When you shift out of Bear Form, Dire Bear Form, or Cat Form, your next Regrowth spell takes 2.0 fewer sec. to cast.<br>\
(4) Set: Your Shred ability deals an additional 75 damage, and your Lacerate ability does an additional 15 per application.<br>\
</span>';


armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Headdress</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
565 Armor<br>\
+46 Strength<br>\
+33 Agility<br>\
+43 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +6 Stamina</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<p>'+ feraldruid +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Feral-Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
468 Armor<br>\
+35 Strength<br>\
+34 Agility<br>\
+28 Stamina<br>\
+11 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Strength</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<p>'+ feraldruid +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Chestplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
727 Armor<br>\
+46 Strength<br>\
+30 Agility<br>\
+43 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Strength</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<p>'+ feraldruid +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Handgrips</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
514 Armor<br>\
+35 Strength<br>\
+27 Agility<br>\
+40 Stamina<br>\
+18 Intellect<br>\
Durability 40/40<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
</span>\
<p>'+ feraldruid +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Feral-Kilt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
703 Armor<br>\
+46 Strength<br>\
+37 Agility<br>\
+42 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +2 Agility</span><br>\
<span class="myTable">Durability 90/90<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 18.</span>\
<p>'+ feraldruid +'</span></td></tr></table>';
//Nordrassil Harness

//Nordrassil Regalia
var moonkindruid = '<span class = "myYellow">\
Nordrassil Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Nordrassil Chestpiece<br>\
&nbsp;Nordrassil Gauntlets<br>\
&nbsp;Nordrassil Headpiece<br>\
&nbsp;Nordrassil Wrath-Kilt<br>\
&nbsp;Nordrassil Wrath-Mantle<br>\
</span><span class = "myGreen">\
(2) Set: When you shift out of Moonkin Form, your next Regrowth spell costs 450 less mana.<br>\
(4) Set: Increases your Starfire damage against targets afflicted with Moonfire or Insect Swarm by 10%.<br>\
</span>';
t++;

armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Headpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
341 Armor<br>\
+35 Stamina<br>\
+28 Intellect<br>\
+24 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 10.<br>\
Equip: Improves spell critical strike rating by 25.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 54.</span>\
<p>'+ moonkindruid +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Wrath-Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
314 Armor<br>\
+26 Stamina<br>\
+27 Intellect<br>\
+16 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Damage</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 15.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 41.</span>\
</span>\
<p>'+ moonkindruid +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
419 Armor<br>\
+36 Stamina<br>\
+32 Intellect<br>\
+25 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Crit Rating</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 19.<br>\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 54.</span>\
<p>'+ moonkindruid +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
262 Armor<br>\
+26 Stamina<br>\
+27 Intellect<br>\
+23 Spirit<br>\
Durability 40/40<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 41.</span>\
<p>'+ moonkindruid +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Wrath-Kilt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
367 Armor<br>\
+37 Stamina<br>\
+36 Intellect<br>\
+26 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +2 Spell Damage</span><br>\
<span class="myTable">Durability 90/90<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 26.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 54.<br>\
Equip: Restores 7 mana per 5 sec.\
</span>\
<p>'+ moonkindruid +'</span></td></tr></table>';
//Nordrassil Regalia

//Nordrassil Raiment
var treedruid = '<span class = "myYellow">\
Nordrassil Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Nordrassil Chestguard<br>\
&nbsp;Nordrassil Gloves<br>\
&nbsp;Nordrassil Headguard<br>\
&nbsp;Nordrassil Life-Kilt<br>\
&nbsp;Nordrassil Life-Mantle<br>\
</span><span class = "myGreen">\
(2) Set: Increases the duration of your Regrowth spell by 6 sec.<br>\
(4) Set: Increases the final amount healed by your Lifebloom spell by 150.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Headguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
341 Armor<br>\
+40 Stamina<br>\
+28 Intellect<br>\
+31 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: 2 mana per 5 sec.</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 103.<br>\
Equip: Restores 8 mana per 5 sec.</span>\
<p>'+ treedruid +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Life-Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
314 Armor<br>\
+26 Stamina<br>\
+27 Intellect<br>\
+16 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +7 Healing</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 77.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>'+ treedruid +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
419 Armor<br>\
+36 Stamina<br>\
+33 Intellect<br>\
+31 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +9 Healing</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 103.\
</span>\
<p>'+ treedruid +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
262 Armor<br>\
+26 Stamina<br>\
+27 Intellect<br>\
+24 Spirit<br>\
Durability 40/40<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 77.<br>\
Equip: Restores 9 mana per 5 sec.</span>\
<p>'+ treedruid +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nordrassil Life-Kilt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
367 Armor<br>\
+37 Stamina<br>\
+36 Intellect<br>\
+27 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Healing</span><br>\
<span class="myTable">\
Durability 90/90<br>\
Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 101.<br>\
Equip: Restores 11 mana per 5 sec.\
</span>\
<p>'+ treedruid +'</span></td></tr></table>';

//Nordrassil Raiment

//Rift Stalker Armor
var riftstalker = '<span class = "myYellow">\
Rift Stalker Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Rift Stalker Hauberk<br>\
&nbsp;Rift Stalker Gauntlets<br>\
&nbsp;Rift Stalker Helm<br>\
&nbsp;Rift Stalker Leggings<br>\
&nbsp;Rift Stalker Mantle<br>\
</span><span class = "myGreen">\
(2) Set: Your pet\'s attacks have a chance to heal your pet for 172 to 198.<br>\
(4) Set: Your Steady Shot ability has 5% increased critical strike chance.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Rift Stalker Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
759 Armor<br>\
+40 Agility<br>\
+36 Stamina<br>\
+25 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +6 Stamina</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases attack power by 82.<br>\
Equip: Restores 10 mana per 5 sec.</span>\
<p>'+ riftstalker +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Rift Stalker Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
700 Armor<br>\
+26 Agility<br>\
+26 Stamina<br>\
+24 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Stamina</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 13.<br>\
Equip: Increases attack power by 52.\
</span>\
<p>'+ riftstalker +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Rift Stalker Hauberk</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
934 Armor<br>\
+40 Agility<br>\
+40 Stamina<br>\
+19 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Agility</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 19.<br>\
Equip: Increases attack power by 80.<br>\
Equip: Restores 7 mana per 5 sec.</span>\
<p>'+ riftstalker +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Rift Stalker Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
538 Armor<br>\
+34 Agility<br>\
+29 Stamina<br>\
+20 Intellect<br>\
Durability 50/50<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 19.<br>\
Equip: Increases attack power by 68.</span>\
<p>'+ riftstalker +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Rift Stalker Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
817 Armor<br>\
+40 Agility<br>\
+39 Stamina<br>\
+26 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Crit Rating</span><br>\
<span class="myTable">\
Durability 105/105<br>\
Classes: Hunter<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves hit rating by 18.<br>\
Equip: Increases attack power by 92.<br>\
Equip: Restores 7 mana per 5 sec.\
</span>\
<p>'+ riftstalker +'</span></td></tr></table>';
//Rift Stalker Armor

//Tirisfal Regalia
var tirisfal = '<span class = "myYellow">\
Tirisfal Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Cowl of Tirisfal<br>\
&nbsp;Gloves of Tirisfal<br>\
&nbsp;Leggings of Tirisfal<br>\
&nbsp;Mantle of Tirisfal<br>\
&nbsp;Robes of Tirisfal<br>\
</span><span class = "myGreen">\
(2) Set: Increases the damage and mana cost of Arcane Blast by 20%.<br>\
(4) Set: Your spell critical strikes grant you up to 70 spell damage for 6 sec.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cowl of Tirisfal</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
181 Armor<br>\
+30 Stamina<br>\
+36 Intellect<br>\
+24 Spirit<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Hit Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 55.</span>\
<p>'+ tirisfal +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Mantle of Tirisfal</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
168 Armor<br>\
+22 Stamina<br>\
+24 Intellect<br>\
+24 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Damage</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 40.\
</span>\
<p>'+ tirisfal +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Robes of Tirisfal</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
223 Armor<br>\
+30 Stamina<br>\
+35 Intellect<br>\
+20 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 55.</span>\
<p>'+ tirisfal +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gloves of Tirisfal</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
140 Armor<br>\
+26 Stamina<br>\
+27 Intellect<br>\
+18 Spirit<br>\
Durability 35/35<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 27.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 41.</span>\
<p>'+ tirisfal +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Leggings of Tirisfal</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
195 Armor<br>\
+37 Stamina<br>\
+36 Intellect<br>\
+26 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Spell Hit Rating</span><br>\
<span class="myTable">Durability 75/75<br>\
Classes: Mage<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 26.<br>\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 54.\
</span>\
<p>'+ tirisfal +'</span></td></tr></table>';
//Tirisfal Regalia

//Crystalforge Raiment
var holypaladin = '<span class = "myYellow">\
Crystalforge Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Crystalforge Chestpiece<br>\
&nbsp;Crystalforge Gloves<br>\
&nbsp;Crystalforge Greathelm<br>\
&nbsp;Crystalforge Leggings<br>\
&nbsp;Crystalforge Pauldrons<br>\
</span><span class = "myGreen">\
(2) Set: Increases the armor granted by your Devotion Aura ability by 350.<br>\
(4) Set: Reduces the casting time of your Holy Light spell by -0.25 sec.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Greathelm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1355 Armor<br>\
+37 Stamina<br>\
+28 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: 2 mana per 5 sec</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 103.<br>\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Restores 10 mana per 5 sec.</span>\
<p>'+ holypaladin +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Pauldrons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1251 Armor<br>\
+34 Stamina<br>\
+26 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Stamina</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 16.<br>\
Equip: Increases healing done by spells and effects by up to 77.\
</span>\
<p>'+ holypaladin +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1668 Armor<br>\
+30 Stamina<br>\
+36 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +9 Healing</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 103.<br>\
Equip: Improves spell critical strike rating by 31.</span>\
<p>'+ holypaladin +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1042 Armor<br>\
+31 Stamina<br>\
+25 Intellect<br>\
Durability 55/55<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Increases healing done by spells and effects by up to 77.<br>\
Equip: Restores 9 mana per 5 sec.</span>\
<p>'+ holypaladin +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1459 Armor<br>\
+37 Stamina<br>\
+36 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +2 Spell Crit Rating</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 32.<br>\
Equip: Increases healing done by spells and effects by up to 101.<br>\
Equip: Restores 10 mana per 5 sec.\
</span>\
<p>'+ holypaladin +'</span></td></tr></table>';
//Crystalforge Raiment

//Crystalforge Armor
var protpaladin = '<span class = "myYellow">\
Crystalforge Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Crystalforge Chestguard<br>\
&nbsp;Crystalforge Faceguard<br>\
&nbsp;Crystalforge Handguards<br>\
&nbsp;Crystalforge Legguards<br>\
&nbsp;Crystalforge Shoulderguards<br>\
</span><span class = "myGreen">\
(2) Set: Increases the damage from your Retribution Aura by 15.<br>\
(4) Set: Each time you use your Holy Shield ability, you gain 100 block value against a single attack in the next 6 sec.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Faceguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1355 Armor<br>\
+48 Stamina<br>\
+28 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +6 Stamina</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 28.<br>\
Equip: Increases your shield block rating by 19.<br>\
Equip: Increases the block value of your shield by 40.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 36.</span>\
<p>'+ protpaladin +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Shoulderguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1251 Armor<br>\
+38 Stamina<br>\
+26 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Stamina</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 26.<br>\
Equip: Increases parry rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 22.\
</span>\
<p>'+ protpaladin +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1668 Armor<br>\
+55 Stamina<br>\
+27 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Defense Rating</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 28.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.<br>\
Equip: Increases the block value of your shield by 51.</span>\
<p>'+ protpaladin +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1042 Armor<br>\
+40 Stamina<br>\
+21 Intellect<br>\
Durability 55/55<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 27.<br>\
Equip: Increases your shield block rating by 22.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 29.<br>\
Equip: Increases the block value of your shield by 30.</span>\
<p>'+ protpaladin +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1459 Armor<br>\
+54 Stamina<br>\
+27 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Stamina</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases defense rating by 35.<br>\
Equip: Increases your shield block rating by 25.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 41.<br>\
Equip: Increases the block value of your shield by 35.\
</span>\
<p>'+ protpaladin +'</span></td></tr></table>';
//Crystalforge Armor

//Crystalforge Battlegear
var retribpaladin = '<span class = "myYellow">\
Crystalforge Battlegear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Crystalforge Breastplate<br>\
&nbsp;Crystalforge Gauntlets<br>\
&nbsp;Crystalforge Greaves<br>\
&nbsp;Crystalforge Shoulderbraces<br>\
&nbsp;Crystalforge War-Helm<br>\
</span><span class = "myGreen">\
(2) Set: Reduces the cost of your Judgements by 35.<br>\
(4) Set: Each time you cast a Judgement, there is a chance it will heal all nearby party members for 244 to 256.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge War-Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1355 Armor<br>\
+33 Strength<br>\
+24 Agility<br>\
+46 Stamina<br>\
+23 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Agility</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 47.</span>\
<p>'+ retribpaladin +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Shoulderbraces</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1251 Armor<br>\
+30 Strength<br>\
+34 Stamina<br>\
+15 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Stamina</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 16.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 35.\
</span>\
<p>'+ retribpaladin +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1668 Armor<br>\
+33 Strength<br>\
+40 Stamina<br>\
+20 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Strength</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 23.<br>\
Equip: Improves critical strike rating by 21.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 47.\
</span>\
<p>'+ retribpaladin +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1042 Armor<br>\
+30 Strength<br>\
+25 Agility<br>\
+35 Stamina<br>\
+23 Intellect<br>\
Durability 55/55<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 34.<br>\
</span>\
<p>'+ retribpaladin +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crystalforge Greaves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1459 Armor<br>\
+40 Strength<br>\
+27 Agility<br>\
+42 Stamina<br>\
+23 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Strength</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 21.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 44.\
</span>\
<p>'+ retribpaladin +'</span></td></tr></table>';
//Crystalforge Battlegear

//Avatar Regalia
var damagepriest = '<span class = "myYellow">\
Avatar Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Handguards of the Avatar<br>\
&nbsp;Hood of the Avatar<br>\
&nbsp;Leggings of the Avatar<br>\
&nbsp;Shroud of the Avatar<br>\
&nbsp;Wings of the Avatar<br>\
</span><span class = "myGreen">\
(2) Set: Each time you cast an offensive spell, there is a chance your next spell will cost 150 less mana.<br>\
(4) Set: Each time your Shadow Word: Pain deals damage, it has a chance to grant you up to 100 damage and healing for 15 sec.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Hood of the Avatar</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
181 Armor<br>\
+30 Stamina<br>\
+36 Intellect<br>\
+24 Spirit<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 55.</span>\
<p>'+ damagepriest +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Wings of the Avatar</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
168 Armor<br>\
+22 Stamina<br>\
+24 Intellect<br>\
+24 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Damage</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 41.\
</span>\
<p>'+ damagepriest +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Shroud of the Avatar</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
223 Armor<br>\
+30 Stamina<br>\
+35 Intellect<br>\
+20 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 55.</span>\
<p>'+ damagepriest +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Handguards of the Avatar</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
140 Armor<br>\
+31 Stamina<br>\
+27 Intellect<br>\
+25 Spirit<br>\
Durability 35/35<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 18.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 41.</span>\
<p>'+ damagepriest +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Leggings of the Avatar</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
195 Armor<br>\
+37 Stamina<br>\
+36 Intellect<br>\
+26 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Spell Damage</span><br>\
<span class="myTable">Durability 75/75<br>\
Classes: Priest<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 25.<br>\
Equip: Improves spell critical strike rating by 18.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 54.\
</span>\
<p>'+ damagepriest +'</span></td></tr></table>';
//Avatar Regalia

//Avatar Raiment
var holypriest = '<span class = "myYellow">\
Avatar Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Breeches of the Avatar<br>\
&nbsp;Cowl of the Avatar<br>\
&nbsp;Gloves of the Avatar<br>\
&nbsp;Mantle of the Avatar<br>\
&nbsp;Vestments of the Avatar<br>\
</span><span class = "myGreen">\
(2) Set: If your Greater Heal brings the target to full health, you gain 100 mana.<br>\
(4) Set: Your Renew spell also increases all resistances by 15.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cowl of the Avatar</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
181 Armor<br>\
+40 Stamina<br>\
+28 Intellect<br>\
+31 Spirit<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: 2 mana per 5 sec</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Restores 8 mana per 5 sec.</span>\
<p>'+ holypriest +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Mantle of the Avatar</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
168 Armor<br>\
+26 Stamina<br>\
+26 Intellect<br>\
+20 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +7 Healing</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 77.<br>\
</span>\
<p>'+ holypriest +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Vestments of the Avatar</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
223 Armor<br>\
+36 Stamina<br>\
+25 Intellect<br>\
+39 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +9 Healing</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 103.\
</span>\
<p>'+ holypriest +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gloves of the Avatar</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
140 Armor<br>\
+26 Stamina<br>\
+27 Intellect<br>\
+29 Spirit<br>\
Durability 35/35<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 77.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ holypriest +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Breeches of the Avatar</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
195 Armor<br>\
+37 Stamina<br>\
+36 Intellect<br>\
+27 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Healing</span><br>\
<span class="myTable">Durability 75/75<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 101.<br>\
Equip: Restores 12 mana per 5 sec.\
</span>\
<p>'+ holypriest +'</span></td></tr></table>';
//Avatar Raiment

//Deathmantle
var deathmantle = '<span class = "myYellow">\
Deathmantle (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Deathmantle Chestguard<br>\
&nbsp;Deathmantle Handguards<br>\
&nbsp;Deathmantle Helm<br>\
&nbsp;Deathmantle Legguards<br>\
&nbsp;Deathmantle Shoulderpads<br>\
</span><span class = "myGreen">\
(2) Set: Your Eviscerate and Envenom abilities cause 40 extra damage per combo point.<br>\
(4) Set: Your attacks have a chance to make your next finishing move cost no energy.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Deathmantle Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
341 Armor<br>\
+39 Agility<br>\
+48 Stamina<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +8 Attack Power</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 25.<br>\
Equip: Increases attack power by 78.</span>\
<p>'+ deathmantle +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Deathmantle Shoulderpads</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
314 Armor<br>\
+34 Agility<br>\
+37 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Crit Rating</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases your critical strike rating by 13.<br>\
Equip: Increases attack power by 54.\
</span>\
<p>'+ deathmantle +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Deathmantle Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
419 Armor<br>\
+33 Agility<br>\
+57 Stamina<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Agility</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 17.<br>\
Equip: Increases attack power by 94.</span>\
<p>'+ deathmantle +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Deathmantle Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
262 Armor<br>\
+36 Agility<br>\
+34 Stamina<br>\
Durability 40/40<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 24.<br>\
Equip: Increases attack power by 70.</span>\
<p>'+ deathmantle +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Deathmantle Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
367 Armor<br>\
+47 Agility<br>\
+49 Stamina<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Attack Power</span><br>\
<span class="myTable">Durability 90/90<br>\
Classes: Rogue<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 26.<br>\
Equip: Increases attack power by 86.\
</span>\
<p>'+ deathmantle +'</span></td></tr></table>';
//Deathmantle

//Cataclysm Harness
var cataclysm1 = '<span class = "myYellow">\
Cataclysm Harness (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Cataclysm Chestplate<br>\
&nbsp;Cataclysm Gauntlets<br>\
&nbsp;Cataclysm Helm<br>\
&nbsp;Cataclysm Legplates<br>\
&nbsp;Cataclysm Shoulderplates<br>\
</span><span class = "myGreen">\
(2) Set: Your melee attacks have a chance to reduce the cast time of your next Lesser Healing Wave by 1.5 sec.<br>\
(4) Set: You gain 5% additional haste from your Flurry ability.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
759 Armor<br>\
+41 Strength<br>\
+32 Agility<br>\
+46 Stamina<br>\
+23 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Agility</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 21.</span>\
<p>'+ cataclysm1 +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Shoulderplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
700 Armor<br>\
+30 Strength<br>\
+37 Agility<br>\
+21 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Crit Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases critical strike rating by 22.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>'+ cataclysm1 +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Chestplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
934 Armor<br>\
+41 Strength<br>\
+32 Agility<br>\
+46 Stamina<br>\
+28 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Crit Rating</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 19.\
</span>\
<p>'+ cataclysm1 +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
583 Armor<br>\
+35 Strength<br>\
+24 Agility<br>\
+34 Stamina<br>\
+23 Intellect<br>\
Durability 50/50<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 24.\
</span>\
<p>'+ cataclysm1 +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Legplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
817 Armor<br>\
+41 Strength<br>\
+32 Agility<br>\
+58 Stamina<br>\
+31 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Agility</span><br>\
<span class="myTable">Durability 105/105<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 21.\
</span>\
<p>'+ cataclysm1 +'</span></td></tr></table>';
//Cataclysm Harness

//Cataclysm Raiment
var cataclysm2 = '<span class = "myYellow">\
Cataclysm Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Cataclysm Chestguard<br>\
&nbsp;Cataclysm Gloves<br>\
&nbsp;Cataclysm Headguard<br>\
&nbsp;Cataclysm Legguards<br>\
&nbsp;Cataclysm Shoulderguards<br>\
</span><span class = "myGreen">\
(2) Set: Reduces the cost of your Lesser Healing Wave spell by 3%.<br>\
(4) Set: Reduces the casting time of your Healing Wave spell by 0.15 sec. In addition, your critical heals from Healing Wave, Lesser Healing Wave, and Chain Heal reduce the cast time of your next Healing Wave spell by 0.85 sec.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Headguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
759 Armor<br>\
+40 Stamina<br>\
+37 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: 2 mana per 5 sec.</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 103.<br>\
Equip: Increases your spell critical strike rating by 21.</span>\
<p>'+ cataclysm2 +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Shoulderguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
700 Armor<br>\
+28 Stamina<br>\
+28 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +7 Healing</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 79.<br>\
Equip: Restores 8 mana per 5 sec.\
</span>\
<p>'+ cataclysm2 +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
934 Armor<br>\
+36 Stamina<br>\
+33 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +9 Healing</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Increases healing done by spells and effects by up to 90.<br>\
Equip: Restores 12 mana per 5 sec.</span>\
<p>'+ cataclysm2 +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
583 Armor<br>\
+35 Stamina<br>\
+34 Intellect<br>\
Durability 50/50<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Increases healing done by spells and effects by up to 77.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ cataclysm2 +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
817 Armor<br>\
+48 Stamina<br>\
+47 Intellect<br>\
<span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Healing</span><br>\
<span class="myTable">Durability 105/105<br>\
Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 103.<br>\
Equip: Restores 10 mana per 5 sec.\
</span>\
<p>'+ cataclysm2 +'</span></td></tr></table>';
//Cataclysm Raiment

//Cataclysm Regalia
var cataclysm3 = '<span class = "myYellow">\
Cataclysm Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Cataclysm Chestpiece<br>\
&nbsp;Cataclysm Handgrips<br>\
&nbsp;Cataclysm Headpiece<br>\
&nbsp;Cataclysm Leggings<br>\
&nbsp;Cataclysm Shoulderpads<br>\
</span><span class = "myGreen">\
(2) Set: Each time you cast an offensive spell, there is a chance your next Lesser Healing Wave will cost 380 less mana.<br>\
(4) Set: Your Lightning Bolt critical strikes have a chance to grant you 120 mana.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Headpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
759 Armor<br>\
+35 Stamina<br>\
+28 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Hit Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 18.<br>\
Equip: Improves spell critical strike rating by 26.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 54.<br>\
Equip: Restores 7 mana per 5 sec.</span>\
<p>'+ cataclysm3 +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Shoulderpads</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
700 Armor<br>\
+26 Stamina<br>\
+19 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Spell Crit Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 41.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>'+ cataclysm3 +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
934 Armor<br>\
+37 Stamina<br>\
+28 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 55.<br>\
Equip: Restores 10 mana per 5 sec.</span>\
<p>'+ cataclysm3 +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Handgrips</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
583 Armor<br>\
+25 Stamina<br>\
+27 Intellect<br>\
Durability 50/50<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 19.<br>\
Equip: Improves spell critical strike rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 41.<br>\
Equip: Restores 7 mana per 5 sec.</span>\
<p>'+ cataclysm3 +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cataclysm Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
817 Armor<br>\
+48 Stamina<br>\
+46 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Spell Damage</span><br>\
<span class="myTable">Durability 105/105<br>\
Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 14.<br>\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 54.\
</span>\
<p>'+ cataclysm3 +'</span></td></tr></table>';
//Cataclysm Regalia

//Corruptor Raiment
var corruptor = '<span class = "myYellow">\
Corruptor Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gloves of the Corruptor<br>\
&nbsp;Hood of the Corruptor<br>\
&nbsp;Leggings of the Corruptor<br>\
&nbsp;Mantle of the Corruptor<br>\
&nbsp;Robe of the Corruptor<br>\
</span><span class = "myGreen">\
(2) Set: Healing spells heal your pet for 30% of the amount that they healed you.<br>\
(4) Set: Your Shadowbolt spell hits increase the damage of Corruption by 3% and your Incinerate spell hits increase the damage of Immolate by 3%.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Hood of the Corruptor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
181 Armor<br>\
+57 Stamina<br>\
+33 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 31.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 55.</span>\
<p>'+ corruptor +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Mantle of the Corruptor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
168 Armor<br>\
+37 Stamina<br>\
+24 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Damage</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 18.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 41.\
</span>\
<p>'+ corruptor +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Robe of the Corruptor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
223 Armor<br>\
+48 Stamina<br>\
+33 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 23.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 55.</span>\
<p>'+ corruptor +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gloves of the Corruptor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
140 Armor<br>\
+50 Stamina<br>\
+24 Intellect<br>\
Durability 35/35<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 25.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 42.</span>\
<p>'+ corruptor +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Leggings of the Corruptor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
195 Armor<br>\
+48 Stamina<br>\
+32 Intellect<br>\
<span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Stamina</span><br>\
<span class="myTable">Durability 75/75<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 24.<br>\
Equip: Improves spell critical strike rating by 32.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 55.\
</span>\
<p>'+ corruptor +'</span></td></tr></table>';
//Corruptor Raiment

//Destroyer Battlegear
var dpswarrior = '<span class = "myYellow">\
Destroyer Battlegear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Destroyer Battle-Helm<br>\
&nbsp;Destroyer Breastplate<br>\
&nbsp;Destroyer Gauntlets<br>\
&nbsp;Destroyer Greaves<br>\
&nbsp;Destroyer Shoulderblades<br>\
</span><span class = "myGreen">\
(2) Set: Your Overpower ability now grants you 100 attack power for 5 sec.<br>\
(4) Set: Your Bloodthirst and Mortal Strike abilities cost -5 less rage.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Destroyer Battle-Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1355 Armor<br>\
+47 Strength<br>\
+45 Stamina<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Strength</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class="myGreen">\
Equip: Improves hit rating by 21.<br>\
Equip: Improves critical strike rating by 36.</span>\
<p>'+ dpswarrior +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Destroyer Shoulderblades</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1251 Armor<br>\
+36 Strength<br>\
+38 Stamina<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Strength</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 18.\
Equip: Improves critical strike rating by 20.\
</span>\
<p>'+ dpswarrior +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Destroyer Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1668 Armor<br>\
+50 Strength<br>\
+48 Stamina<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Strength</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 15.<br>\
Equip: Improves critical strike rating by 33.</span>\
<p>'+ dpswarrior +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Destroyer Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1042 Armor<br>\
+44 Strength<br>\
+46 Stamina<br>\
Durability 55/55<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 30.</span>\
<p>'+ dpswarrior +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Destroyer Greaves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1459 Armor<br>\
+52 Strength<br>\
+57 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Crit Rating</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class="myGreen">\
Equip: Improves hit rating by 22.<br>\
Equip: Improves critical strike rating by 32.</span>\
<p>'+ dpswarrior +'</span></td></tr></table>';
//Destoryer Battlegear

//Destroyer Armor
var tankwarrior = '<span class = "myYellow">\
Destroyer Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Destroyer Chestguard<br>\
&nbsp;Destroyer Greathelm<br>\
&nbsp;Destroyer Handguards<br>\
&nbsp;Destroyer Legguards<br>\
&nbsp;Destroyer Shoulderguards<br>\
</span><span class = "myGreen">\
(2) Set: Each time you use your Shield Block ability, you gain 100 block value against a single attack in the next 6 sec.<br>\
(4) Set: You have a chance each time you are hit to gain 200 haste rating for 10 sec.<br>\
</span>';
t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Destroyer Greathelm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1355 Armor<br>\
+28 Strength<br>\
+28 Agility<br>\
+48 Stamina<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Dodge Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
</span><span class="myGreen">\
Equip: Increases defense rating by 30.<br>\
Equip: Increases your dodge rating by 33.</span>\
<p>'+ tankwarrior +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Destroyer Shoulderguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1251 Armor<br>\
+13 Strength<br>\
+21 Agility<br>\
+44 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Block Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 29.<br>\
Equip: Increases the block value of your shield by 32.\
</span>\
<p>'+ tankwarrior +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Destroyer Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1668 Armor<br>\
+25 Strength<br>\
+26 Agility<br>\
+57 Stamina<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +6 Stamina</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 27.<br>\
Equip: Increases your dodge rating by 24.<br>\
Equip: Improves hit rating by 24.</span>\
<p>'+ tankwarrior +'</span></td></tr></table>';

t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Destroyer Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1042 Armor<br>\
+16 Strength<br>\
+16 Agility<br>\
+44 Stamina<br>\
Durability 55/55<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 25.<br>\
Equip: Increases your shield block rating by 23.<br>\
Equip: Increases the block value of your shield by 44.</span>\
<p>'+ tankwarrior +'</span></td></tr></table>';


t++;
armorSetTier5Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Destroyer Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1459 Armor<br>\
+18 Strength<br>\
+28 Agility<br>\
+60 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +3 Stamina</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
</span><span class="myGreen">\
Equip: Increases defense rating by 39.<br>\
Equip: Increases your shield block rating by 32.<br>\
Equip: Increases the block value of your shield by 33.</span>\
<p>'+ tankwarrior +'</span></td></tr></table>';
//Destoryer Armor

armorSetsArray[theArmorSetCounter] = armorSetTier5Raid;
armorSetsValues[theArmorSetCounter] = "tier5raid";
theArmorSetCounter++;

