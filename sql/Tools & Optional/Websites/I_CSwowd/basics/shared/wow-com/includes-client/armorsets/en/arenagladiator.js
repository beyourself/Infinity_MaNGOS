var armorSetArenaGladiator = new armorSetObject("arenagladiator");

armorSetArenaGladiator.slotsArray = new Array();

t = 0;
armorSetArenaGladiator.slotsArray[t] = "head"; t++;
armorSetArenaGladiator.slotsArray[t] = "shoulder"; t++;
armorSetArenaGladiator.slotsArray[t] = "chest"; t++;
armorSetArenaGladiator.slotsArray[t] = "hands"; t++;
armorSetArenaGladiator.slotsArray[t] = "legs"; t++;

armorSetArenaGladiator.slotsNumber = armorSetArenaGladiator.slotsArray.length;


//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

armorSetArenaGladiator.setNamesArray = new Array();
t = 1;
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Sanctuary"; t++;//druid
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Refuge";t++;
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Wildhide";t++;
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Pursuit";t++; //hunter
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Regalia";t++; //Mage
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Aegis"; t++;//Paladin
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Redemption";t++; 
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Vindication"; t++;
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Investiture"; t++; //priest
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Raiment";t++;
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Vestments";t++; //rogue
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Earthshaker";t++; //shaman
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Thunderfist"; t++;
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Wartide"; t++;
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Dreadgear";t++; //warlock
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Felshroud";t++; 
armorSetArenaGladiator.setNamesArray[t] = "Gladiator's Battlegear";t++;//warrior


armorSetArenaGladiator.statsArray = new Array();

t = 0;

//Gladiator's Sanctuary
var sanctuary = '<span class = "myYellow">\
Gladiator\'s Sanctuary (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Dragonhide Gloves<br>\
&nbsp;Gladiator\'s Dragonhide Helm<br>\
&nbsp;Gladiator\'s Dragonhide Legguards<br>\
&nbsp;Gladiator\'s Dragonhide Spaulders<br>\
&nbsp;Gladiator\'s Dragonhide Tunic<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Increases your movement speed by 15% while in Bear, Cat, or Travel Form. Only active outdoors.<br>\
</span>';


armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Dragonhide Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
356 Armor<br>\
+33 Strength<br>\
+20 Agility<br>\
+45 Stamina<br>\
+19 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class="myGreen">\
Equip: Improves your resilience rating by 24.<br>\
Equip: Increases healing done by spells and effects by up to 46.</span>\
<p>'+ sanctuary +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Dragonhide Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
331 Armor<br>\
+28 Strength<br>\
+17 Agility<br>\
+33 Stamina<br>\
+12 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class="myGreen">\
Equip: Improves your resilience rating by 18.<br>\
Equip: Increases healing done by spells and effects by up to 29.</span>\
<p>'+ sanctuary +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Dragonhide Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
429 Armor<br>\
+32 Strength<br>\
+20 Agility<br>\
+42 Stamina<br>\
+18 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class="myGreen">\
Equip: Improves your resilience rating by 26.<br>\
Equip: Increases healing done by spells and effects by up to 29.</span>\
<p>'+ sanctuary +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Dragonhide Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
283 Armor<br>\
+30 Strength<br>\
+19 Agility<br>\
+33 Stamina<br>\
+18 Intellect<br>\
Durability 40/40<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 20.<br>\
Equip: Increases healing done by spells and effects by up to 13.<br>\
Equip: Reduces the cast time of your Cyclone spell by 0.1 sec.</span>\
<p>'+ sanctuary +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Dragonhide Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
400 Armor<br>\
+40 Strength<br>\
+29 Agility<br>\
+45 Stamina<br>\
+25 Intellect<br>\
Durability 90/90<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 28.<br>\
Equip: Increases healing done by spells and effects by up to 22.</span>\
<p>'+ sanctuary +'</span></td></tr></table>';
//Gladiator's Sanctuary

//Gladiator's Refuge
var refuge = '<span class = "myYellow">\
Gladiator\'s Refuge (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Kodohide Gloves<br>\
&nbsp;Gladiator\'s Kodohide Helm<br>\
&nbsp;Gladiator\'s Kodohide Legguards<br>\
&nbsp;Gladiator\'s Kodohide Spaulders<br>\
&nbsp;Gladiator\'s Kodohide Tunic<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Increases your movement speed by 15% while in Bear, Cat, or Travel Form. Only active outdoors.<br>\
</span>';
t++;

armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Kodohide Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
356 Armor<br>\
+46 Stamina<br>\
+33 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 28.<br>\
Equip: Increases healing done by spells and effects by up to 75.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ refuge +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Kodohide Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
331 Armor<br>\
+33 Stamina<br>\
+21 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 20.<br>\
Equip: Increases healing done by spells and effects by up to 46.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
</span>\
<p>'+ refuge +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Kodohide Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
429 Armor<br>\
+42 Stamina<br>\
+30 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 26.<br>\
Equip: Increases healing done by spells and effects by up to 75.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ refuge +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Kodohide Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
283 Armor<br>\
+33 Stamina<br>\
+27 Intellect<br>\
Durability 40/40<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 22.<br>\
Equip: Increases healing done by spells and effects by up to 62.<br>\
Equip: Reduces the cast time of your Cyclone spell by 0.1 sec.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ refuge +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Kodohide Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
400 Armor<br>\
+45 Stamina<br>\
+37 Intellect<br>\
Durability 90/90<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 29.<br>\
Equip: Increases healing done by spells and effects by up to 84.<br>\
Equip: Restores 10 mana per 5 sec.</span>\
</span>\
<p>'+ refuge +'</span></td></tr></table>';
//Gladiator's Refuge

//Gladiator's Wildhide
var wildhide = '<span class = "myYellow">\
Gladiator\'s Wildhide (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Wyrmhide Gloves<br>\
&nbsp;Gladiator\'s Wyrmhide Helm<br>\
&nbsp;Gladiator\'s Wyrmhide Legguards<br>\
&nbsp;Gladiator\'s Wyrmhide Spaulders<br>\
&nbsp;Gladiator\'s Wyrmhide Tunic<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the mana cost of your Moonfire spell by 10% of its base cost.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Wyrmhide Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
356 Armor<br>\
+45 Stamina<br>\
+25 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating.</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 27.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 43.<br>\
Equip: Restores 7 mana per 5 sec.</span>\
<p>'+ wildhide +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Wyrmhide Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
331 Armor<br>\
+33 Stamina<br>\
+14 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 20.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 28.<br>\
Equip: Restores 4 mana per 5 sec.\
</span>\
<p>'+ wildhide +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Wyrmhide Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
429 Armor<br>\
+42 Stamina<br>\
+22 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 26.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 46.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ wildhide +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Wyrmhide Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
283 Armor<br>\
+33 Stamina<br>\
+21 Intellect<br>\
Durability 40/40<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 22.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 37.<br>\
Equip: Reduces the cast time of your Cyclone spell by 0.1 sec.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ wildhide +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Wrymhide Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
400 Armor<br>\
+45 Stamina<br>\
+29 Intellect<br>\
Durability 90/90<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 29.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 50.<br>\
Equip: Restores 10 mana per 5 sec.\
</span>\
<p>'+ wildhide +'</span></td></tr></table>';
//Gladiator's Wildhide

//Gladiator's Pursuit
var pursuit = '<span class = "myYellow">\
Gladiator\'s Pursuit (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Chain Armor<br>\
&nbsp;Gladiator\'s Chain Gauntlets<br>\
&nbsp;Gladiator\'s Chain Helm<br>\
&nbsp;Gladiator\'s Chain Leggings<br>\
&nbsp;Gladiator\'s Chain Spaulders<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Concussive Shot by 1 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Chain Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
703 Armor<br>\
+34 Agility<br>\
+49 Stamina<br>\
+18 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 20.<br>\
Equip: Improves your resilience rating by 20.<br>\
Equip: Increases attack power by 36.</span>\
<p>'+ pursuit +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Chain Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
649 Armor<br>\
+27 Agility<br>\
+39 Stamina<br>\
+8 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 11.<br>\
Equip: Improves your resilience rating by 18.<br>\
Equip: Increases attack power by 18.\
</span>\
<p>'+ pursuit +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Chain Armor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
866 Armor<br>\
+27 Agility<br>\
+51 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating.</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 18.<br>\
Equip: Improves your resilience rating by 20.<br>\
Equip: Increases attack power by 26.</span>\
<p>'+ pursuit +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Chain Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
541 Armor<br>\
+26 Agility<br>\
+41 Stamina<br>\
+10 Intellect<br>\
Durability 50/50<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 14.<br>\
Equip: Improves your resilience rating by 18.<br>\
Equip: Increases attack power by 26.<br>\
Equip: Increases the damage done by your Multi-Shot by 4%.</span>\
<p>'+ pursuit +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Chain Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
758 Armor<br>\
+35 Agility<br>\
+53 Stamina<br>\
+14 Intellect<br>\
Durability 105/105<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 19.<br>\
Equip: Improves your resilience rating by 31.<br>\
Equip: Increases attack power by 38.</span>\
<p>'+ pursuit +'</span></td></tr></table>';
//Gladiator's Pursuit

//Gladiator's Regalia
var regalia = '<span class = "myYellow">\
Gladiator\'s Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Silk Amice<br>\
&nbsp;Gladiator\'s Silk Cowl<br>\
&nbsp;Gladiator\'s Silk Handguards<br>\
&nbsp;Gladiator\'s Silk Raiment<br>\
&nbsp;Gladiator\'s Silk Trousers<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Blink spell by 2 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Silk Cowl</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
168 Armor<br>\
+54 Stamina<br>\
+15 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 18.<br>\
Equip: Improves your resilience rating by 30.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 37.</span>\
<p>'+ regalia +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Silk Amice</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
155 Armor<br>\
+42 Stamina<br>\
+13 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 13.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ regalia +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Silk Raiment</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
207 Armor<br>\
+51 Stamina<br>\
+18 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 25.<br>\
Equip: Improves your resilience rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ regalia +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Silk Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
129 Armor<br>\
+39 Stamina<br>\
+14 Intellect<br>\
Durability 35/35<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 21.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Improves the range of your Fire Blast spell by 5 yards.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ regalia +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Silk Trousers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
181 Armor<br>\
+54 Stamina<br>\
+25 Intellect<br>\
Durability 75/75<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 28.<br>\
Equip: Improves your resilience rating by 30.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 42.\
</span>\
<p>'+ regalia +'</span></td></tr></table>';
//Gladiator's Regalia

//Gladiator's Aegis
var aegis = '<span class = "myYellow">\
Gladiator\'s Aegis (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Lamellar Chestpiece<br>\
&nbsp;Gladiator\'s Lamellar Gauntlets<br>\
&nbsp;Gladiator\'s Lamellar Helm<br>\
&nbsp;Gladiator\'s Lamellar Legguards<br>\
&nbsp;Gladiator\'s Lamellar Shoulders<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Hammer of Justice by 10 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Lamellar Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1257 Armor<br>\
+57 Stamina<br>\
+21 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 22.<br>\
Equip: Improves your resilience rating by 32<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 33.</span>\
<p>'+ aegis +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Lamellar Shoulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1160 Armor<br>\
+34 Stamina<br>\
+18 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 19.\
</span>\
<p>'+ aegis +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Lamellar Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1547 Armor<br>\
+51 Stamina<br>\
+25 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 30.<br>\
Equip: Improves your resilience rating by 27.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 20.</span>\
<p>'+ aegis +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Lamellar Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
967 Armor<br>\
+34 Stamina<br>\
+24 Intellect<br>\
Durability 55/55<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 28.<br>\
Equip: Increases the critical effect chance of your Flash of Light by 2%.</span>\
<p>'+ aegis +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Lamellar Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1353 Armor<br>\
+57 Stamina<br>\
+21 Intellect<br>\
Durability 120/120<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 32.<br>\
Equip: Improves your resilience rating by 32.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 37.</span>\
<p>'+ aegis +'</span></td></tr></table>';
//Gladiator's Aegis

//Gladiator's Redemption
var redepmtion = '<span class = "myYellow">\
Gladiator\'s Redepmtion (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Ornamented Chestguard<br>\
&nbsp;Gladiator\'s Ornamented Gloves<br>\
&nbsp;Gladiator\'s Ornamented Headcover<br>\
&nbsp;Gladiator\'s Ornamented Legplates<br>\
&nbsp;Gladiator\'s Ornamented Spaulders<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Hammer of Justice by 10 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Ornamented Headcover</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1257 Armor<br>\
+52 Stamina<br>\
+30 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating.</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 21.<br>\
Equip: Improves your resilience rating by 32.<br>\
Equip: Increases healing done by spells and effects by up to 57.</span>\
<p>'+ redepmtion +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Ornamented Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1160 Armor<br>\
+30 Stamina<br>\
+24 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 23.<br>\
Equip: Improves your resilience rating by 20.<br>\
Equip: Increases healing done by spells and effects by up to 35.</span>\
<p>'+ redepmtion +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Ornamented Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1547 Armor<br>\
+45 Stamina<br>\
+31 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 30.<br>\
Equip: Improves your resilience rating by 27.<br>\
Equip: Increases healing done by spells and effects by up to 42.</span>\
<p>'+ redepmtion +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Ornamented Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
967 Armor<br>\
+34 Stamina<br>\
+24 Intellect<br>\
Durability 55/55<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases healing done by spells and effects by up to 53.<br>\
Equip: Increases the critical effect chance of your Flash of Light by 2%</span>\
<p>'+ redepmtion +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Ornamented Legplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1353 Armor<br>\
+48 Stamina<br>\
+32 Intellect<br>\
Durability 120/120<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 32.<br>\
Equip: Improves your resilience rating by 31.<br>\
Equip: Increases healing done by spells and effects by up to 70.\
</span>\
<p>'+ redepmtion +'</span></td></tr></table>';
//Gladiator's Redemption

//Gladiator's Vindication
var vindication = '<span class = "myYellow">\
Gladiator\'s Vindication (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Scaled Chestpiece<br>\
&nbsp;Gladiator\'s Scaled Gauntlets<br>\
&nbsp;Gladiator\'s Scaled Helm<br>\
&nbsp;Gladiator\'s Scaled Legguards<br>\
&nbsp;Gladiator\'s Scaled Shoulders<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Hammer of Justice by 10 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Scaled Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1257 Armor<br>\
+34 Strength<br>\
+48 Stamina<br>\
+21 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 28.</span>\
<p>'+ vindication +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Scaled Shoulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1160 Armor<br>\
+24 Strength<br>\
+34 Stamina<br>\
+15 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 19.\
</span>\
<p>'+ vindication +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Scaled Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1547 Armor<br>\
+31 Strength<br>\
+45 Stamina<br>\
+23 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 30.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 18.</span>\
<p>'+ vindication +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Scaled Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
967 Armor<br>\
+24 Strength<br>\
+34 Stamina<br>\
+14 Intellect<br>\
Durability 55/55<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 28.<br>\
Equip: Increases the Holy damage bonus of your Judgement of the Crusader by 20.</span>\
<p>'+ vindication +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Scaled Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1353 Armor<br>\
+32 Strength<br>\
+54 Stamina<br>\
+21 Intellect<br>\
Durability 120/120<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 32.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 37.\
</span>\
<p>'+ vindication +'</span></td></tr></table>';
//Gladiator's Vindication

//Avatar Regalia
var investiture = '<span class = "myYellow">\
Gladiator\'s Investiture (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Mooncloth Gloves<br>\
&nbsp;Gladiator\'s Mooncloth Hood<br>\
&nbsp;Gladiator\'s Mooncloth Leggings<br>\
&nbsp;Gladiator\'s Mooncloth Mantle<br>\
&nbsp;Gladiator\'s Mooncloth Robe<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the duration of the Weakened Soul effect caused by your Power Word: Shield by 2 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Mooncloth Hood</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
168 Armor<br>\
+60 Stamina<br>\
+22 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves resilience rating by 30.<br>\
Equip: Increases healing done by spells and effects by up to 55.</span>\
<p>'+ investiture +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Mooncloth Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
155 Armor<br>\
+40 Stamina<br>\
+22 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 24.<br>\
Equip: Increases healing done by spells and effects by up to 42.\
</span>\
<p>'+ investiture +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Mooncloth Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
207 Armor<br>\
+51 Stamina<br>\
+28 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 25.<br>\
Equip: Increases healing done by spells and effects by up to 46.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ investiture +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Mooncloth Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
129 Armor<br>\
+40 Stamina<br>\
+20 Intellect<br>\
Durability 35/35<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 28.<br>\
Equip: Increases the duration of your Psychic Scream spell by 1 sec.<br>\
Equip: Increases healing done by spells and effects by up to 53.</span>\
<p>'+ investiture +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Mooncloth Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
181 Armor<br>\
+60 Stamina<br>\
+30 Intellect<br>\
Durability 75/75<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 30.<br>\
Equip: Increases healing done by spells and effects by up to 62.<br>\
Equip: Restores 11 mana per 5 sec.\
</span>\
<p>'+ investiture +'</span></td></tr></table>';
//Gladiator's Investiture

//Gladiator's Raiment
var raiment = '<span class = "myYellow">\
Gladiator\'s Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Satin Gloves<br>\
&nbsp;Gladiator\'s Satin Hood<br>\
&nbsp;Gladiator\'s Satin Leggings<br>\
&nbsp;Gladiator\'s Satin Mantle<br>\
&nbsp;Gladiator\'s Satin Robe<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the duration of the Weakened Soul effect caused by your Power Word: Shield by 2 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Satin Hood</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
168 Armor<br>\
+60 Stamina<br>\
+20 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 30.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ raiment +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Satin Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
155 Armor<br>\
+40 Stamina<br>\
+22 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 22.</span>\
<p>'+ raiment +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Satin Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
207 Armor<br>\
+51 Stamina<br>\
+26 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 28.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ raiment +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Satin Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
129 Armor<br>\
+40 Stamina<br>\
+20 Intellect<br>\
Durability 35/35<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 28.<br>\
Equip: Increases the duration of your Psychic Scream spell by 1 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 28.</span>\
<p>'+ raiment +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Satin Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
181 Armor<br>\
+60 Stamina<br>\
+30 Intellect<br>\
Durability 75/75<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 30.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 49.</span>\
<p>'+ raiment +'</span></td></tr></table>';
//Gladiator's Raiment

//Gladiator's Vestments
var vestments = '<span class = "myYellow">\
Gladiator\'s Vestments (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Leather Gloves<br>\
&nbsp;Gladiator\'s Leather Legguards<br>\
&nbsp;Gladiator\'s Leather Helm<br>\
&nbsp;Gladiator\'s Leather Spaulders<br>\
&nbsp;Gladiator\'s Leather Tunic<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Gouge ability by 1 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Leather Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
316 Armor<br>\
+34 Agility<br>\
+53 Stamina<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience Rating</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 13.<br>\
Equip: Improves your resilience rating by 23.<br>\
Equip: Increases attack power by 36.</span>\
<p>'+ vestments +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Leather Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
291 Armor<br>\
+29 Agility<br>\
+39 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 70/70<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 21.<br>\
Equip: Improves your resilience rating by 23.<br>\
Equip: Increases attack power by 18.\
</span>\
<p>'+ vestments +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Leather Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
389 Armor<br>\
+33 Agility<br>\
+50 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Durability 120/120<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 12.<br>\
Equip: Improves your resilience rating by 23.<br>\
Equip: Increases attack power by 30.</span>\
<p>'+ vestments +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Leather Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
243 Armor<br>\
+27 Agility<br>\
+39 Stamina<br>\
Durability 40/40<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 14.<br>\
Equip: Improves your resilience rating by 23.<br>\
Equip: Increases attack power by 30.<br>\
Equip: Causes your Deadly Throw ability to interrupt spellcasting and prevent any spell in that school from being cast for 3 sec.</span>\
<p>'+ vestments +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Leather Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
340 Armor<br>\
+36 Agility<br>\
+54 Stamina<br>\
Durability 90/90<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 19.<br>\
Equip: Improves your resilience rating by 36.<br>\
Equip: Increases attack power by 42.\
</span>\
<p>'+ vestments +'</span></td></tr></table>';
//Gladiator's Vestments

//Gladiator's Earthshaker
var earthshaker = '<span class = "myYellow">\
Gladiator\'s Earthshaker (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Linked Armor<br>\
&nbsp;Gladiator\'s Linked Gauntlets<br>\
&nbsp;Gladiator\'s Linked Helm<br>\
&nbsp;Gladiator\'s Linked Leggings<br>\
&nbsp;Gladiator\'s Linked Spaulders<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Stormstrike ability by 1 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Linked Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
703 Armor<br>\
+34 Strength<br>\
+51 Stamina<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 26.<br>\
Equip: Improves your resilience rating by 30.</span>\
<p>'+ earthshaker +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Linked Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
649 Armor<br>\
+19 Strength<br>\
+42 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases critical strike rating by 22.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Restores 5 mana per 5 sec.\
</span>\
<p>'+ earthshaker +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Linked Armor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
866 Armor<br>\
+29 Strength<br>\
+51 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 28.<br>\
Equip: Improves your resilience rating by 26.<br>\
Equip: Restores 8 mana per 5 sec.</span>\
<p>'+ earthshaker +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Linked Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
541 Armor<br>\
+25 Strength<br>\
+40 Stamina<br>\
Durability 50/50<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 27.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Increases the damage done by your Lightning Shield by 8%.</span>\
<p>'+ earthshaker +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Linked Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
758 Armor<br>\
+30 Strength<br>\
+54 Stamina<br>\
+25 Intellect<br>\
</span>\
<span class="myTable">Durability 105/105<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 36.<br>\
Equip: Improves your resilience rating by 28.\
</span>\
<p>'+ earthshaker +'</span></td></tr></table>';
//Gladiator's Earthshaker

//Gladiator's Thunderfist
var thunderfist = '<span class = "myYellow">\
Gladiator\'s Thunderfist (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Mail Armor<br>\
&nbsp;Gladiator\'s Mail Gauntlets<br>\
&nbsp;Gladiator\'s Mail Helm<br>\
&nbsp;Gladiator\'s Mail Leggings<br>\
&nbsp;Gladiator\'s Mail Spaulders<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Improves your chance to get a critical strike with all Shock spells by 2%.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Mail Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
703 Armor<br>\
+54 Stamina<br>\
+15 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 18.<br>\
Equip: Improves your resilience rating by 30.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 37.</span>\
<p>'+ thunderfist +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Mail Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
649 Armor<br>\
+33 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 20.<br>\
Equip: Improves your resilience rating by 20.<br>\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 22.<br>\
</span>\
<p>'+ thunderfist +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Mail Armor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
866 Armor<br>\
+42 Stamina<br>\
+23 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 23.<br>\
Equip: Improves your resilience rating by 25.<br>\
Equip: Restores 7 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ thunderfist +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Mail Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
541 Armor<br>\
+36 Stamina<br>\
+18 Intellect<br>\
Durability 50/50<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 21.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Improves the range of all Shock spells by 5 yards.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ thunderfist +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Mail Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
758 Armor<br>\
+54 Stamina<br>\
+25 Intellect<br>\
Durability 105/105<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 22.<br>\
Equip: Improves your resilience rating by 29.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 42.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>'+ thunderfist +'</span></td></tr></table>';
//Gladiator's Thunderfist

//Gladiator's Wartide
var wartide = '<span class = "myYellow">\
Gladiator\'s Wartide (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Ringmail Armor<br>\
&nbsp;Gladiator\'s Ringmail Gauntlets<br>\
&nbsp;Gladiator\'s Ringmail Helm<br>\
&nbsp;Gladiator\'s Ringmail Leggings<br>\
&nbsp;Gladiator\'s Ringmail Spaulders<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown on your Nature\'s Swiftness ability by 24 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Ringmail Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
703 Armor<br>\
+54 Stamina<br>\
+20 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Improves your resilience by 30.<br>\
Equip: Increases healing done by spells and effects by up to 62.</span>\
<p>'+ wartide +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Ringmail Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
649 Armor<br>\
+33 Stamina<br>\
+19 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 85/85<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 18.<br>\
Equip: Improves your resilience rating by 20.<br>\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 42.\
</span>\
<p>'+ wartide +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Ringmail Armor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
866 Armor<br>\
+42 Stamina<br>\
+23 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Durability 140/140<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 23.<br>\
Equip: Improves your resilience rating by 25.<br>\
Equip: Restores 7 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 59.</span>\
<p>'+ wartide +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Ringmail Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
541 Armor<br>\
+36 Stamina<br>\
+18 Intellect<br>\
Durability 50/50<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 21.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Increases the critical effect chance of your Lesser Healing Wave by 2%.<br>\
Equip: Increases healing done by spells and effects by up to 59.</span>\
<p>'+ wartide +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Ringmail Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
758 Armor<br>\
+54 Stamina<br>\
+26 Intellect<br>\
Durability 105/105<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 21.<br>\
Equip: Improves your resilience rating by 29.<br>\
Equip: Increases healing done by spells and effects by up to 79.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>'+ wartide +'</span></td></tr></table>';
//Gladiator's Wartide

//Gladiator's Dreadgear
var dreadgear = '<span class = "myYellow">\
Gladiator\'s Dreadgear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Dreadweave Gloves<br>\
&nbsp;Gladiator\'s Dreadweave Hood<br>\
&nbsp;Gladiator\'s Dreadweave Leggings<br>\
&nbsp;Gladiator\'s Dreadweave Mantle<br>\
&nbsp;Gladiator\'s Dreadweave Robe<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the casting time of your Immolate spell by 0.2 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Dreadweave Hood</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
168 Armor<br>\
+60 Stamina<br>\
+20 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 30.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ dreadgear +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Dreadweave Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
155 Armor<br>\
+42 Stamina<br>\
+14 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 12.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.\
</span>\
<p>'+ dreadgear +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Dreadweave Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
207 Armor<br>\
+57 Stamina<br>\
+19 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 36.</span>\
<p>'+ dreadgear +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Dreadweave Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
129 Armor<br>\
+39 Stamina<br>\
+25 Intellect<br>\
Durability 35/35<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 21.<br>\
Equip: Gives you a 50% chance to avoid interruption caused by damage while casting Fear.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ dreadgear +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Dreadweave Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
181 Armor<br>\
+60 Stamina<br>\
+30 Intellect<br>\
Durability 75/75<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 30.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 49.\
</span>\
<p>'+ dreadgear +'</span></td></tr></table>';
//Gladiator's Dreadgear

//Gladiator's Felshroud
var felshroud = '<span class = "myYellow">\
Gladiator\'s Felshroud (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Felweave Amice<br>\
&nbsp;Gladiator\'s Felweave Cowl<br>\
&nbsp;Gladiator\'s Felweave Handguards<br>\
&nbsp;Gladiator\'s Felweave Raiment<br>\
&nbsp;Gladiator\'s Felweave Trousers<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the casting time of your Immolate spell by 0.2 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Felweave Cowl</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
168 Armor<br>\
+54 Stamina<br>\
+15 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class="myGreen">\
Equip: Improves spell critical strike rating by 18.<br>\
Equip: Improves your resilience rating by 30.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 37.</span>\
<p>'+ felshroud +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Felweave Amice</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
155 Armor<br>\
+42 Stamina<br>\
+14 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 12.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.\
</span>\
<p>'+ felshroud +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Felweave Raiment</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
207 Armor<br>\
+51 Stamina<br>\
+16 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 27.<br>\
Equip: Improves your resilience rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ felshroud +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Felweave Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
129 Armor<br>\
+39 Stamina<br>\
+14 Intellect<br>\
Durability 35/35<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 21.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Gives you a 50% chance to avoid interruption caused by damage while casting Searing Pain.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.</span>\
<p>'+ felshroud +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Felweave Trousers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
181 Armor<br>\
+54 Stamina<br>\
+25 Intellect<br>\
Durability 75/75<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class="myGreen">\
Equip: Improves spell critical strike rating by 28.<br>\
Equip: Improves your resilience rating by 30.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 42.</span>\
<p>'+ felshroud +'</span></td></tr></table>';
//Gladiator's Felshroud

//Gladiator's Battlegear
var battlegear = '<span class = "myYellow">\
Gladiator\'s Battlegear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gladiator\'s Plate Chestpiece<br>\
&nbsp;Gladiator\'s Plate Gauntlets<br>\
&nbsp;Gladiator\'s Plate Helm<br>\
&nbsp;Gladiator\'s Plate Legguards<br>\
&nbsp;Gladiator\'s Plate Shoulders<br>\
</span><span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Intercept ability by 5 sec.<br>\
</span>';
t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Plate Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1257 Armor<br>\
+30 Strength<br>\
+52 Stamina<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Strength</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
</span><span class="myGreen">\
Equip: Improves critical strike rating by 28.<br>\
Equip: Improves your resilience rating by 25.</span>\
<p>'+ battlegear +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Plate Shoulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1160 Armor<br>\
+22 Strength<br>\
+45 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Strength</span><br>\
<span class="myTable">Durability 100/100<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 23.<br>\
Equip: Improves your resilience rating by 19.\
</span>\
<p>'+ battlegear +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Plate Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1547 Armor<br>\
+23 Strength<br>\
+49 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Durability 165/165<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 12.<br>\
Equip: Improves critical strike rating by 30.<br>\
Equip: Improves resilience rating by 23.</span>\
<p>'+ battlegear +'</span></td></tr></table>';

t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Plate Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
967 Armor<br>\
+28 Strength<br>\
+42 Stamina<br>\
Durability 55/55<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 26.<br>\
Equip: Improves your resilience rating by 21.<br>\
Equip: Hamstring Rage cost reduced by 3.</span>\
<p>'+ battlegear +'</span></td></tr></table>';


t++;
armorSetArenaGladiator.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gladiator\'s Plate Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1353 Armor<br>\
+40 Strength<br>\
+55 Stamina<br>\
Durability 120/120<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
</span><span class="myGreen">\
Equip: Improves hit rating by 12.<br>\
Equip: Improves critical strike rating by 36.<br>\
Equip: Improves your resilience rating by 21.</span>\
<p>'+ battlegear +'</span></td></tr></table>';
//Gladiator's Battlegear

armorSetsArray[theArmorSetCounter] = armorSetArenaGladiator;
armorSetsValues[theArmorSetCounter] = "arenagladiator";
theArmorSetCounter++;

