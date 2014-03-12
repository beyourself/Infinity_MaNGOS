var armorSetTier4Raid = new armorSetObject("tier4raid");

armorSetTier4Raid.slotsArray = new Array();

t = 0;
armorSetTier4Raid.slotsArray[t] = "head"; t++;
armorSetTier4Raid.slotsArray[t] = "shoulder"; t++;
armorSetTier4Raid.slotsArray[t] = "chest"; t++;
armorSetTier4Raid.slotsArray[t] = "hands"; t++;
armorSetTier4Raid.slotsArray[t] = "legs"; t++;

armorSetTier4Raid.slotsNumber = armorSetTier4Raid.slotsArray.length;


//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

armorSetTier4Raid.setNamesArray = new Array();
t = 1;
armorSetTier4Raid.setNamesArray[t] = "Malorne Harness"; t++;//druid
armorSetTier4Raid.setNamesArray[t] = "Malorne Regalia";t++;
armorSetTier4Raid.setNamesArray[t] = "Malorne Raiment";t++;
armorSetTier4Raid.setNamesArray[t] = "Demon Stalker Armor";t++; //hunter
armorSetTier4Raid.setNamesArray[t] = "Aldor Regalia";t++; //Mage
armorSetTier4Raid.setNamesArray[t] = "Justicar Raiment"; t++;//Paladin
armorSetTier4Raid.setNamesArray[t] = "Justicar Armor";t++; //Paladin
armorSetTier4Raid.setNamesArray[t] = "Justicar Battlegear"; t++;
armorSetTier4Raid.setNamesArray[t] = "Incarnate Regalia"; t++; //priest
armorSetTier4Raid.setNamesArray[t] = "Incarnate Raiment";t++;
armorSetTier4Raid.setNamesArray[t] = "Netherblade";t++; //rogue
armorSetTier4Raid.setNamesArray[t] = "Cyclone Harness";t++; //shaman
armorSetTier4Raid.setNamesArray[t] = "Cyclone Raiment"; t++;
armorSetTier4Raid.setNamesArray[t] = "Cyclone Regalia"; t++;
armorSetTier4Raid.setNamesArray[t] = "Voidheart Raiment";t++; //warlock
armorSetTier4Raid.setNamesArray[t] = "Warbringer Armor";t++; //warrior
armorSetTier4Raid.setNamesArray[t] = "Warbringer Battlegear";t++;


armorSetTier4Raid.statsArray = new Array();

t = 0;

//Malorne Harness


var bearcatdruid = '<span class = "myYellow">\
Malorne Harness (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Breastplate of Malorne<br>\
&nbsp;Gauntlets of Malorne<br>\
&nbsp;Greaves of Malorne<br>\
&nbsp;Mantle of Malorne<br>\
&nbsp;Stag-Helm of Malorne<br>\
</span><span class = "myGreen">\
(2) Set: Your melee attacks in Bear Form and Dire Bear Form have a chance to generate 10 additional rage.<br>\
(2) Set: Your melee attacks in Cat Form have a chance to generate 20 additional energy.<br>\
(4) Set: Increases your armor by 1400 in Bear Form and Dire Bear Form.<br>\
(4) Set: Increases your strength by 30 in Cat Form.\
</span>';


armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Stag-Helm of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
490 Armor<br>\
+41 Strength<br>\
+33 Agility<br>\
+30 Stamina<br>\
+19 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Agility</span><br>\
<span class= "myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
</span>\
<p>'+ bearcatdruid +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Mantle of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
410 Armor<br>\
+33 Strength<br>\
+27 Agility<br>\
+25 Stamina<br>\
+9 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Crit Rating</span><br>\
<span class= "myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<p>'+ bearcatdruid +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Breastplate of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
659 Armor<br>\
+33 Strength<br>\
+34 Agility<br>\
+36 Stamina<br>\
+13 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Hit Rating</span><br>\
<span class= "myTable">Durability 120/120<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<p>'+ bearcatdruid +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gauntlets of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
475 Armor<br>\
+32 Strength<br>\
+28 Stamina<br>\
+12 Intellect<br>\
Durability 40/40<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 24.</span>\
<p>'+ bearcatdruid +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Greaves of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
640 Armor<br>\
+42 Strength<br>\
+32 Agility<br>\
+39 Stamina<br>\
+26 Intellect<br>\
Durability 90/90<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<p>'+ bearcatdruid +'</span></td></tr></table>';


//Malorne Harness
//Malorne Regalia

var moonkindruid = '<span class = "myYellow">\
Malorne Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Antlers of Malorne<br>\
&nbsp;Britches of Malorne<br>\
&nbsp;Chestpiece of Malorne<br>\
&nbsp;Gloves of Malorne<br>\
&nbsp;Pauldrons of Malorne<br>\
</span><span class = "myGreen">\
(2) Set: Your harmful spells have a chance to restore up to 120 mana.<br>\
(4) Set: Reduces the cooldown on your Innervate ability by 48 sec.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Antlers of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
308 Armor<br>\
+28 Stamina<br>\
+29 Intellect<br>\
+22 Spirit<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Hit Rating</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 36.</span>\
<p>'+ moonkindruid +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Pauldrons of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
284 Armor<br>\
+21 Stamina<br>\
+24 Intellect<br>\
+17 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Damage</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 36.<br>\
Equip: Restores 5 mana per 5 sec.\
</span>\
<p>'+ moonkindruid +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Chestpiece of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
379 Armor<br>\
+28 Stamina<br>\
+27 Intellect<br>\
+19 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Hit Rating</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 46.\
</span>\
<p>'+ moonkindruid +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gloves of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
237 Armor<br>\
+24 Stamina<br>\
+27 Intellect<br>\
+21 Spirit<br>\
Durability 40/40<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 18.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 33.</span>\
<p>'+ moonkindruid +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Britches of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
332 Armor<br>\
+32 Stamina<br>\
+35 Intellect<br>\
+18 Spirit<br>\
Durability 90/90<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 25.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 44.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>'+ moonkindruid +'</span></td></tr></table>';

//Malorne Regalia
//Malorne Raiment
var treedruid = '<span class = "myYellow">\
Malorne Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Chestguard of Malorne<br>\
&nbsp;Crown of Malorne<br>\
&nbsp;Handguards of Malorne<br>\
&nbsp;Legguards of Malorne<br>\
&nbsp;Shoulderguards of Malorne<br>\
</span><span class = "myGreen">\
(2) Set: Your helpful spells have a chance to restore up to 120 mana.<br>\
(4) Set: Reduces the cooldown on your Nature\'s Swiftness ability by 24 sec.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Crown of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
308 Armor<br>\
+28 Stamina<br>\
+27 Intellect<br>\
+25 Spirit<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Intellect</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 68.<br>\
Equip: Restores 10 mana per 5 sec.</span>\
<p>'+ treedruid +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Shoulderguards of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
284 Armor<br>\
+19 Stamina<br>\
+23 Intellect<br>\
+19 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Spirit</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 68.<br>\
Equip: Restores 5 mana per 5 sec.\
</span>\
<p>'+ treedruid +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Chestguard of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
379 Armor<br>\
+28 Stamina<br>\
+29 Intellect<br>\
+25 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +9 Healing</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Druid<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 88.\
<p>'+ treedruid +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Handguards of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
237 Armor<br>\
+22 Stamina<br>\
+25 Intellect<br>\
+24 Spirit<br>\
Durability 40/40<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 62.<br>\
Equip: Restores 7 mana per 5 sec.</span>\
<p>'+ treedruid +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Legguards of Malorne</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
332 Armor<br>\
+30 Stamina<br>\
+38 Intellect<br>\
+26 Spirit<br>\
Durability 90/90<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 84.<br>\
Equip: Restores 10 mana per 5 sec.\
</span>\
<p>'+ treedruid +'</span></td></tr></table>';

//Malorne Raiment

//Hunter Demon Stalker Armor
var demonstalkerhunter = '<span class = "myYellow">\
Demon Stalker Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Demon Stalker Gauntlets<br>\
&nbsp;Demon Stalker Greathelm<br>\
&nbsp;Demon Stalker Greaves<br>\
&nbsp;Demon Stalker Harness<br>\
&nbsp;Demon Stalker Shoulderguards<br>\
</span><span class = "myGreen">\
(2) Set: Reduces the chance your Feign Death ability will be resisted by 5%.<br>\
(4) Set: Reduces the mana cost of your Multi-Shot ability by 10%.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Demon Stalker Greathelm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
687 Armor<br>\
+35 Agility<br>\
+28 Stamina<br>\
+27 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Agility</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases attack power by 66.</span>\
<p>'+ demonstalkerhunter +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Demon Stalker Shoulderguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
634 Armor<br>\
+23 Stamina<br>\
+23 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Intellect</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves critical strike rating by 19.<br>\
Equip: Increases attack power by 44.<br>\
Equip: Restores 5 mana per 5 sec.\
</span>\
<p>'+ demonstalkerhunter +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Demon Stalker Harness</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
846 Armor<br>\
+26 Agility<br>\
+24 Stamina<br>\
+35 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +8 Attack Power</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases attack power by 70.<br>\
Equip: Restores 6 mana per 5 sec.\
<p>'+ demonstalkerhunter +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Demon Stalker Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
528 Armor<br>\
+28 Agility<br>\
+24 Stamina<br>\
+24 Intellect<br>\
Durability 50/50<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases attack power by 58.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ demonstalkerhunter +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Demon Stalker Greaves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
740 Armor<br>\
+40 Agility<br>\
+30 Stamina<br>\
+30 Intellect<br>\
Durability 105/105<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 15.<br>\
Equip: Increases attack power by 82.\
</span>\
<p>'+ demonstalkerhunter +'</span></td></tr></table>';

//Hunter Demon Stalker Armor

//Mage Aldor Regalia
var aldormage = '<span class = "myYellow">\
Aldor Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Collar of the Aldor<br>\
&nbsp;Gloves of the Aldor<br>\
&nbsp;Legwraps of the Aldor<br>\
&nbsp;Pauldrons of the Aldor<br>\
&nbsp;Vestments of the Aldor<br>\
</span><span class = "myGreen">\
(2) Set: Gives you a 100% chance to avoid interruption caused by damage while casting Fireball or Frostbolt.<br>\
(4) Set: Reduces the cooldown on Presence of Mind by 24 sec, on Blast Wave by 4 sec, and on Ice Block by 40 sec.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Collar of the Aldor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
164 Armor<br>\
+24 Stamina<br>\
+35 Intellect<br>\
+17 Spirit<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Mage<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves spell critical strike rating by 27.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 41.</span>\
<p>'+ aldormage +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Pauldrons of the Aldor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
152 Armor<br>\
+25 Stamina<br>\
+26 Intellect<br>\
+16 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Damage</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Mage<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves spell critical strike rating by 15.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 27.\
</span>\
<p>'+ aldormage +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Vestments of the Aldor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
202 Armor<br>\
+34 Stamina<br>\
+32 Intellect<br>\
+14 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Mage<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 49.<br>\
Equip: Increases your spell penetration by 20.\
<p>'+ aldormage +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gloves of the Aldor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
126 Armor<br>\
+19 Stamina<br>\
+22 Intellect<br>\
+19 Spirit<br>\
Durability 35/35<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 17.<br>\
Equip: Improves spell critical strike rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 35.</span>\
<p>'+ aldormage +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Legwraps of the Aldor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
177 Armor<br>\
+31 Stamina<br>\
+40 Intellect<br>\
+23 Spirit<br>\
Durability 75/75<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 49.\
</span>\
<p>'+ aldormage +'</span></td></tr></table>';

//Mage Aldor Regalia

//Paladin
//Justicar Raiment
var holypaladin = '<span class = "myYellow">\
Justicar Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Justicar Chestpiece<br>\
&nbsp;Justicar Diadem<br>\
&nbsp;Justicar Gloves<br>\
&nbsp;Justicar Leggings<br>\
&nbsp;Justicar Pauldrons<br>\
</span><span class = "myGreen">\
(2) Set: Increases the amount healed by your Judgement of Light by 20.<br>\
(4) Set: Reduces the cooldown on your Divine Favor ability by -15 sec.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Diadem</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1227 Armor<br>\
+32 Stamina<br>\
+33 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: 2 mana per 5 sec.</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves spell critical strike rating by 28.<br>\
Equip: Increases healing done by spells and effects by up to 75.</span>\
<p>'+ holypaladin +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Pauldrons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1133 Armor<br>\
+31 Stamina<br>\
+24 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Intellect</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 68.<br>\
Equip: Restores 5 mana per 5 sec.\
</span>\
<p>'+ holypaladin +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1510 Armor<br>\
+28 Stamina<br>\
+35 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +6 Stamina</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Increases healing done by spells and effects by up to 90.<br>\
Equip: Restores 6 mana per 5 sec.\
<p>'+ holypaladin +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
944 Armor<br>\
+29 Stamina<br>\
+30 Intellect<br>\
Durability 55/55<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 22.<br>\
Equip: Increases healing done by spells and effects by up to 75.</span>\
<p>'+ holypaladin +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1322 Armor<br>\
+43 Stamina<br>\
+42 Intellect<br>\
Durability 120/120<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 88.<br>\
Equip: Restores 11 mana per 5 sec.\
</span>\
<p>'+ holypaladin +'</span></td></tr></table>';

//Paladin Justicar Raiment

//Justicar Armor
var protpaladin = '<span class = "myYellow">\
Justicar Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Justicar Chestguard<br>\
&nbsp;Justicar Faceguard<br>\
&nbsp;Justicar Handguards<br>\
&nbsp;Justicar Legguards<br>\
&nbsp;Justicar Shoulderguards<br>\
</span><span class = "myGreen">\
(2) Set: Increases the damage dealt by your Seal of Righteousness, Seal of Vengeance, or Seal of Blood by 10%.<br>\
(4) Set: Increases the damage dealt by your Holy Shield by 15%.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Faceguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1227 Armor<br>\
+43 Stamina<br>\
+24 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Dodge Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves defense rating by 29.<br>\
Equip: Increases your dodge rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 27.</span>\
<p>'+ protpaladin +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Shoulderguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1133 Armor<br>\
+37 Stamina<br>\
+14 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Stamina</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases defense rating by 15.<br>\
Equip: Increase your shield block rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 26.<br>\
Equip: Increases the block value of your shield by 27.\
</span>\
<p>'+ protpaladin +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1510 Armor<br>\
+48 Stamina<br>\
+30 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Defense Rating</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases defense rating by 23.<br>\
Equip: Increases your shield block rating by 23.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 27.\
<p>'+ protpaladin +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
944 Armor<br>\
+34 Stamina<br>\
+24 Intellect<br>\
Durability 55/55<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 23.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 27.<br>\
Equip: Increases the block value of your shield by 35.</span>\
<p>'+ protpaladin +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1322 Armor<br>\
+46 Stamina<br>\
+31 Intellect<br>\
Durability 120/120<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 31.<br>\
Equip: Increases your parry rating by 31.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 36.\
</span>\
<p>'+ protpaladin +'</span></td></tr></table>';

//Paladin Justicar Armor

//Justicar Battlegear
var retribpaladin = '<span class = "myYellow">\
Justicar Battlegear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Justicar Breastplate<br>\
&nbsp;Justicar Crown<br>\
&nbsp;Justicar Gauntlets<br>\
&nbsp;Justicar Greaves<br>\
&nbsp;Justicar Shoulderplates<br>\
</span><span class = "myGreen">\
(2) Set: Increases the damage bonus of your Judgement of the Crusader by 15%.<br>\
(4) Set: Increases the damage dealt by your Judgement of Command by 10%.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1227 Armor<br>\
+25 Strength<br>\
+22 Agility<br>\
+33 Stamina<br>\
+31 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Hit Rating.</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 36.</span>\
<p>'+ retribpaladin +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Shoulderplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1133 Armor<br>\
+25 Strength<br>\
+13 Agility<br>\
+24 Stamina<br>\
+15 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +3 Hit Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases hit rating by 16.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 27.<br>\
</span>\
<p>'+ retribpaladin +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1510 Armor<br>\
+29 Strength<br>\
+24 Stamina<br>\
+33 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +6 Stamina</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases critical strike rating by 25.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 30.<br>\
<p>'+ retribpaladin +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
944 Armor<br>\
+27 Strength<br>\
+29 Stamina<br>\
+24 Intellect<br>\
Durability 55/55<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 26.<br>\
<p>'+ retribpaladin +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Justicar Greaves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1322 Armor<br>\
+35 Strength<br>\
+24 Agility<br>\
+34 Stamina<br>\
+24 Intellect<br>\
Durability 120/120<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 41.<br>\
Equip: Restores 9 mana per 5 sec.\
</span>\
<p>'+ retribpaladin +'</span></td></tr></table>';

//Paladin Justicar Battlegear

//Priest Incarnate Regalia
var damagepriest = '<span class = "myYellow">\
Incarnate Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gloves of the Incarnate<br>\
&nbsp;Leggings of the Incarnate<br>\
&nbsp;Shroud of the Incarnate<br>\
&nbsp;Soul-Collar of the Incarnate<br>\
&nbsp;Soul-Mantle of the Incarnate<br>\
</span><span class = "myGreen">\
(2) Set: Your Shadowfiend now has 75 more stamina and lasts 3 sec. longer.<br>\
(4) Set: Your Mind Flay and Smite spells deal 5% more damage.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Soul-Collar of the Incarnate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
164 Armor<br>\
+28 Stamina<br>\
+35 Intellect<br>\
+24 Spirit<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves spell hit rating by 16.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 39.</span>\
<p>'+ damagepriest +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Soul-Mantle of the Incarnate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
152 Armor<br>\
+22 Stamina<br>\
+28 Intellect<br>\
+18 Spirit<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Spell Hit Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 29.<br>\
</span>\
<p>'+ damagepriest +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Shroud of the Incarnate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
202 Armor<br>\
+28 Stamina<br>\
+25 Intellect<br>\
+21 Spirit<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Crit Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Priest<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases spell hit rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 46.<br>\
<p>'+ damagepriest +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gloves of the Incarnate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
126 Armor<br>\
+28 Stamina<br>\
+26 Intellect<br>\
+21 Spirit<br>\
Durability 35/35<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 30.<br>\
<p>'+ damagepriest +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Leggings of the Incarnate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
177 Armor<br>\
+37 Stamina<br>\
+38 Intellect<br>\
+27 Spirit<br>\
Durability 75/75<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 25.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 43.\
</span>\
<p>'+ damagepriest +'</span></td></tr></table>';

//Priest Incarnate Regalia

//Priest Incarnate Raiment
var healingpriest = '<span class = "myYellow">\
Incarnate Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Handwraps of the Incarnate<br>\
&nbsp;Light-Collar of the Incarnate<br>\
&nbsp;Light-Mantle of the Incarnate<br>\
&nbsp;Robes of the Incarnate<br>\
&nbsp;Trousers of the Incarnate<br>\
</span><span class = "myGreen">\
(2) Set: Your prayer of healing spell now also causes an additional 150 healing over 9 sec.<br>\
(4) Set: Each time you cast Flash Heal, your next Greater Heal cast within 15 sec has its casting time reduced by 0.1 stacking up to 5 times.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Light-Collar of the Incarnate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
164 Armor<br>\
+28 Stamina<br>\
+34 Intellect<br>\
+25 Spirit<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +9 Healing.</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 73.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ healingpriest +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Light-Mantle of the Incarnate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
152 Armor<br>\
+19 Stamina<br>\
+30 Intellect<br>\
+22 Spirit<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Stamina</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 53.<br>\
</span>\
<p>'+ healingpriest +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Robes of the Incarnate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
202 Armor<br>\
+30 Stamina<br>\
+32 Intellect<br>\
+20 Spirit<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Intellect</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Priest<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 88.<br>\
<p>'+ healingpriest +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Handwraps of the Incarnate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
126 Armor<br>\
+28 Stamina<br>\
+26 Intellect<br>\
+18 Spirit<br>\
Durability 35/35<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 57.<br>\
Equip: Restores 10 mana per 5 sec.</span>\
<p>'+ healingpriest +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Trousers of the Incarnate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
177 Armor<br>\
+39 Stamina<br>\
+37 Intellect<br>\
+36 Spirit<br>\
Durability 75/75<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 88.\
</span>\
<p>'+ healingpriest +'</span></td></tr></table>';

//Priest Incarnate Raiment

//Rogue Netherblade
var netherblade = '<span class = "myYellow">\
Netherblade (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Netherblade Breeches<br>\
&nbsp;Netherblade Chestpiece<br>\
&nbsp;Netherblade Facemask<br>\
&nbsp;Netherblade Gloves<br>\
&nbsp;Netherblade Shoulderpads<br>\
</span><span class = "myGreen">\
(2) Set: Increases the duration of your Slice and Dice ability by 3 sec.<br>\
(4) Set: Your finishing moves have a 15% chance to grant you a combo point.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherblade Facemask</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
308 Armor<br>\
+28 Agility<br>\
+39 Stamina<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Agility.</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves hit rating by 14.<br>\
Equip: Increases attack power by 78.</span>\
<p>'+ netherblade +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherblade Shoulderpads</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
284 Armor<br>\
+20 Agility<br>\
+38 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Stamina</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves hit rating by 13.<br>\
Equip: Increases attack power by 52.\
</span>\
<p>'+ netherblade +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherblade Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
379 Armor<br>\
+35 Agility<br>\
+39 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Agility</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves hit rating by 11.<br>\
Equip: Increases attack power by 74.<br>\
<p>'+ netherblade +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherblade Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
237 Armor<br>\
+34 Stamina<br>\
Durability 40/40<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 17.<br>\
Equip: Improves critical strike rating by 25.<br>\
Equip: Increases attack power by 72.</span>\
<p>'+ netherblade +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherblade Breeches</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
332 Armor<br>\
+43 Agility<br>\
+40 Stamina<br>\
Durability 90/90<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 26.<br>\
Equip: Increases attack power by 84.\
</span>\
<p>'+ netherblade +'</span></td></tr></table>';

//Rogue Netherblade

//Shaman Cyclone Harness
var cycloneharness = '<span class = "myYellow">\
Cyclone Harness (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Cyclone Breastplate<br>\
&nbsp;Cyclone Gauntlets<br>\
&nbsp;Cyclone Helm<br>\
&nbsp;Cyclone Shoulderplates<br>\
&nbsp;Cyclone War-Kilt<br>\
</span><span class = "myGreen">\
(2) Set: Your Strength of Earth Totem ability grants an additional 12 strength.<br>\
(4) Set: Your Stormstrike ability does an additional 30 damage per weapon.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
687 Armor<br>\
+36 Strength<br>\
+27 Agility<br>\
+40 Stamina<br>\
+27 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Hit Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
</span>\
<p>'+ cycloneharness +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Shoulderplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
634 Armor<br>\
+26 Strength<br>\
+18 Agility<br>\
+31 Stamina<br>\
+18 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Hit Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases your hit rating by 14.\
</span>\
<p>'+ cycloneharness +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
846 Armor<br>\
+33 Strength<br>\
+31 Stamina<br>\
+23 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Strength</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves critical strike rating by 25.<br>\
Equip: Restores 8 mana per 5 sec.\
<p>'+ cycloneharness +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
528 Armor<br>\
+27 Strength<br>\
+21 Agility<br>\
+26 Stamina<br>\
+24 Intellect<br>\
Durability 50/50<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 19.<br>\
Equip: Restores 5 mana per 5 sec.</span>\
<p>'+ cycloneharness +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone War-Kilt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
740 Armor<br>\
+35 Strength<br>\
+35 Agility<br>\
+52 Stamina<br>\
+24 Intellect<br>\
Durability 105/105<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Restores 10 mana per 5 sec.\
</span>\
<p>'+ cycloneharness +'</span></td></tr></table>';

//Shaman Cyclone Harness

//Shaman Cyclone Raiment
var cycloneraiment = '<span class = "myYellow">\
Cyclone Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Cyclone Gloves<br>\
&nbsp;Cyclone Hauberk<br>\
&nbsp;Cyclone Headdress<br>\
&nbsp;Cyclone Kilt<br>\
&nbsp;Cyclone Shoulderpads<br>\
</span><span class = "myGreen">\
(2) Set: Your Mana Spring Totem ability grants an additional 3 mana every 2 sec.<br>\
(4) Set: Reduces the cooldown on your Nature\'s Swiftness ability by 24 sec.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Headdress</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
687 Armor<br>\
+30 Stamina<br>\
+41 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +9 Healing</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 75.<br>\
Equip: Restores 8 mana per 5 sec.</span>\
<p>'+ cycloneraiment +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Shoulderpads</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
634 Armor<br>\
+33 Stamina<br>\
+32 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: 1 mana per 5 sec.</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 68.\
</span>\
<p>'+ cycloneraiment +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Hauberk</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
846 Armor<br>\
+36 Stamina<br>\
+30 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Intellect</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 68.<br>\
Equip: Restores 10 mana per 5 sec.</span>\
<p>'+ cycloneraiment +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
528 Armor<br>\
+28 Stamina<br>\
+28 Intellect<br>\
Durability 50/50<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 68.<br>\
Equip: Restores 10 mana per 5 sec.</span>\
<p>'+ cycloneraiment +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Kilt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
740 Armor<br>\
+42 Stamina<br>\
+40 Intellect<br>\
Durability 105/105<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 95.<br>\
Equip: Restores 11 mana per 5 sec.\
</span>\
<p>'+ cycloneraiment +'</span></td></tr></table>';

//Shaman Cyclone Raiment

//Shaman Cyclone Regalia
var cycloneregalia = '<span class = "myYellow">\
Cyclone Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Cyclone Chestguard<br>\
&nbsp;Cyclone Faceguard<br>\
&nbsp;Cyclone Handguards<br>\
&nbsp;Cyclone Legguards<br>\
&nbsp;Cyclone Shoulderguards<br>\
</span><span class = "myGreen">\
(2) Set: Your Wrath of Air Totem ability grants an additional 20 spell damage.<br>\
(4) Set: Your offensive spell critical strikes have a chance to reduce the mana cost of your next spell by 270.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Faceguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
687 Armor<br>\
+30 Stamina<br>\
+31 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves spell critical strike rating by 25.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 39.<br>\
Equip: Restores 8 mana per 5 sec.</span>\
<p>'+ cycloneregalia +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Shoulderguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
634 Armor<br>\
+28 Stamina<br>\
+26 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Damage</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves spell critical strike rating by 12.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 36.\
</span>\
<p>'+ cycloneregalia +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
846 Armor<br>\
+33 Stamina<br>\
+32 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Hit Rating</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
</span><span class = "myGreen">\
Equip: Improves spell critical strike rating by 20.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 39.<br>\
Equip: Restores 8 mana per 5 sec.\
<p>'+ cycloneregalia +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
528 Armor<br>\
+26 Stamina<br>\
+29 Intellect<br>\
Durability 50/50<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 34.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ cycloneregalia +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cyclone Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
740 Armor<br>\
+40 Stamina<br>\
+40 Intellect<br>\
Durability 105/105<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 20.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 49.<br>\
Equip: Restores 8 mana per 5 sec.\
</span>\
<p>'+ cycloneregalia +'</span></td></tr></table>';

//Shaman Cyclone Regalia

//Voidheart
var voidheart = '<span class = "myYellow">\
Voidheart Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Voidheart Crown<br>\
&nbsp;Voidheart Gloves<br>\
&nbsp;Voidheart Leggings<br>\
&nbsp;Voidheart Mantle<br>\
&nbsp;Voidheart Robe<br>\
</span><span class = "myGreen">\
(2) Set: Your shadow damage spells have a chance to grant you 135 bonus shadow damage for 15 sec and your fire damage spells have a chance to grant you 135 bonus fire damage for 15 sec.<br>\
(4) Set: Increases the duration of your Corruption and Immolate abilities by 3 sec.\
</span>';
t++;

armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Voidheart Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
164 Armor<br>\
+39 Stamina<br>\
+36 Intellect<br>\
<span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Hit Rating</span><br>\
Durability 60/60<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 40.</span>\
<p>'+ voidheart +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Voidheart Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
152 Armor<br>\
+26 Stamina<br>\
+22 Intellect<br>\
<span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Damage</span><br>\
Durability 60/60<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 14.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 37.\
</span>\
<p>'+ voidheart +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Voidheart Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
202 Armor<br>\
+42 Stamina<br>\
+33 Intellect<br>\
<span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +6 Stamina</span><br>\
Durability 100/100<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 13.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 42.</span>\
<p>'+ voidheart +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Voidheart Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
126 Armor<br>\
+34 Stamina<br>\
+28 Intellect<br>\
Durability 35/35<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 22.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 35.</span>\
<p>'+ voidheart +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Voidheart Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
177 Armor<br>\
+42 Stamina<br>\
+38 Intellect<br>\
Durability 75/75<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 17.<br>\
Equip: Improves spell critical strike rating by 25.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 49.\
</span>\
<p>'+ voidheart +'</span></td></tr></table>';

//end voidheart



//Warbringer Armor
var tankwarrior = '<span class = "myYellow">\
Warbringer Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Warbringer Chestguard<br>\
&nbsp;Warbringer Greathelm<br>\
&nbsp;Warbringer Handguards<br>\
&nbsp;Warbringer Legguards<br>\
&nbsp;Warbringer Shoulderguards<br>\
</span><span class = "myGreen">\
(2) Set: You have a chance each time you parry to gain Blade Turning, absorbing 200 damage for 15 sec.<br>\
(4) Set: Your Revenge ability causes your next damaging ability to do 10% more damage.\
</span>';
t++;

armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Warbringer Greathelm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1227 Armor<br>\
+15 Strength<br>\
+17 Agility<br>\
+53 Stamina<br>\
<span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Block Rating</span><br>\
Durability 100/100<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 24.<br>\
Equip: Increases your shield block rating by 19.<br>\
Equip: Increases the block value of your shield by 39.</span>\
<p>'+ tankwarrior +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Warbringer Shoulderguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1133 Armor<br>\
+14 Strength<br>\
+15 Agility<br>\
+38 Stamina<br>\
<span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Defense Rating</span><br>\
Durability 100/100<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 17.<br>\
Equip: Increases your dodge rating by 26.\
</span>\
<p>'+ tankwarrior +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Warbringer Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1510 Armor<br>\
+16 Strength<br>\
+17 Agility<br>\
+48 Stamina<br>\
<span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Dodge Rating</span><br>\
Durability 165/165<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 22.<br>\
Equip: Increases your shield block rating by 23.<br>\
Equip: Increases the block value of your shield by 45.</span>\
<p>'+ tankwarrior +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Warbringer Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
944 Armor<br>\
+17 Strength<br>\
+20 Agility<br>\
+38 Stamina<br>\
Durability 55/55<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 23.<br>\
Equip: Increases your parry rating by 29.</span>\
<p>'+ tankwarrior +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Warbringer Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1322 Armor<br>\
+24 Strength<br>\
+24 Agility<br>\
+55 Stamina<br>\
Durability 120/120<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 33.<br>\
Equip: Increases your dodge rating by 35.</span>\
<p>'+ tankwarrior +'</span></td></tr></table>';
//end Warbringer Armor

//Warbringer Battlegear

var dpswarrior = '<span class = "myYellow">\
Warbringer Battlegear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Warbringer Battle-Helm<br>\
&nbsp;Warbringer Breastplate<br>\
&nbsp;Warbringer Gauntlets<br>\
&nbsp;Warbringer Greaves<br>\
&nbsp;Warbringer Shoulderplates<br>\
</span><span class = "myGreen">\
(2) Set: Your Whirlwind ability costs 5 less rage.<br>\
(4) Set: You gain an additional 2 rage each time one of your attacks is parried or dodged.\
</span>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Warbringer Battle-Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1227 Armor<br>\
+45 Strength<br>\
+45 Stamina<br>\
<span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience Rating</span><br>\
Durability 100/100<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 14.<br>\
Equip: Improves critical strike rating by 24.</span>\
<p>'+ dpswarrior +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Warbringer Shoulderplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1133 Armor<br>\
+32 Strength<br>\
+22 Agility<br>\
+33 Stamina<br>\
<span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Strength</span><br>\
Durability 100/100<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 13.\
</span>\
<p>'+ dpswarrior +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Warbringer Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1510 Armor<br>\
+44 Strength<br>\
+39 Stamina<br>\
<span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Crit Rating</span><br>\
Durability 165/165<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 26.</span>\
<p>'+ dpswarrior +'</span></td></tr></table>';

t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Warbringer Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
944 Armor<br>\
+34 Strength<br>\
+23 Agility<br>\
+33 Stamina<br>\
Durability 55/55<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 18.</span>\
<p>'+ dpswarrior +'</span></td></tr></table>';


t++;
armorSetTier4Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Warbringer Greaves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1322 Armor<br>\
+51 Strength<br>\
+54 Stamina<br>\
Durability 120/120<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 37.</span>\
<p>'+ dpswarrior +'</span></td></tr></table>';
// end Warbringer Battlegear

armorSetsArray[theArmorSetCounter] = armorSetTier4Raid;
armorSetsValues[theArmorSetCounter] = "tier4raid";
theArmorSetCounter++;

