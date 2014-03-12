var armorSetPvPLevel70 = new armorSetObject("pvplevel70");

armorSetPvPLevel70.slotsArray = new Array();

t = 0;
armorSetPvPLevel70.slotsArray[t] = "head"; t++;
armorSetPvPLevel70.slotsArray[t] = "shoulder"; t++;
armorSetPvPLevel70.slotsArray[t] = "chest"; t++;
armorSetPvPLevel70.slotsArray[t] = "hands"; t++;
armorSetPvPLevel70.slotsArray[t] = "legs"; t++;

armorSetPvPLevel70.slotsNumber = armorSetPvPLevel70.slotsArray.length;

armorSetPvPLevel70.statsArray = new Array();
armorSetPvPLevel70.itemNameArray = new Array();
armorSetPvPLevel70.setNameArray = new Array();
t = 0;

//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

armorSetPvPLevel70.setNamesArray = new Array();
t = 1;
armorSetPvPLevel70.setNamesArray[t] = "Refuge"; t++;//druid
armorSetPvPLevel70.setNamesArray[t] = "Sanctuary";t++;
armorSetPvPLevel70.setNamesArray[t] = "Wildhide";t++;
armorSetPvPLevel70.setNamesArray[t] = "Pursuit";t++; //hunter
armorSetPvPLevel70.setNamesArray[t] = "Regalia";t++; //Mage
armorSetPvPLevel70.setNamesArray[t] = "Aegis"; t++;//Paladin
armorSetPvPLevel70.setNamesArray[t] = "Redemption";t++; 
armorSetPvPLevel70.setNamesArray[t] = "Vindication"; t++;
armorSetPvPLevel70.setNamesArray[t] = "Investiture"; t++; //priest
armorSetPvPLevel70.setNamesArray[t] = "Raiment";t++;
armorSetPvPLevel70.setNamesArray[t] = "Vestments";t++; //rogue
armorSetPvPLevel70.setNamesArray[t] = "Earthshaker";t++; //shaman
armorSetPvPLevel70.setNamesArray[t] = "Thunderfist"; t++;
armorSetPvPLevel70.setNamesArray[t] = "Wartide"; t++;
armorSetPvPLevel70.setNamesArray[t] = "Dreadgear";t++; //warlock
armorSetPvPLevel70.setNamesArray[t] = "Battlegear";t++; //warrior


armorSetPvPLevel70.statsArray = new Array();

t = 0;

classCounter = 0;
//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

//druid begin

var Kodohide = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Increases your movement speed by 15% while in Bear, Cat, or Travel Form. Only active outdoors.\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Refuge (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Kodohide Gloves<br>\
&nbsp;Grand Marshal\'s Kodohide Helm<br>\
&nbsp;Grand Marshal\'s Kodohide Legguards<br>\
&nbsp;Grand Marshal\'s Kodohide Spaulders<br>\
&nbsp;Grand Marshal\'s Kodohide Tunic<br>\
</span>'+ Kodohide, '<span class = "myYellow">\
High Warlord\'s Refuge (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Kodohide Gloves<br>\
&nbsp;High Warlord\'s Kodohide Helm<br>\
&nbsp;High Warlord\'s Kodohide Legguards<br>\
&nbsp;High Warlord\'s Kodohide Spaulders<br>\
&nbsp;High Warlord\'s Kodohide Tunic<br>\
</span>'+ Kodohide];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">Grand Marshal\'s Kodohide Helm', '<span class = "myBlue">\
High Warlord\'s Kodohide Helm'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
267 Armor<br>\
+30 Stamina<br>\
+18 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 19.<br>\
Equip: Increases healing done by spells and effects by up to 44.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Kodohide Spaulders', '<span class = "myBlue">\
High Warlord\'s Kodohide Spaulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
249 Armor<br>\
+33 Stamina<br>\
+16 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 17.<br>\
Equip: Increases healing done by spells and effects by up to 26.<br>\
Equip: Restores 2 mana per 5 sec.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Kodohide Tunic', '<span class = "myBlue">\
High Warlord\'s Kodohide Tunic'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
322 Armor<br>\
+33 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience</span><br>\
<span class="myTable">Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 18.<br>\
Equip: Increases healing done by spells and effects by up to 42.<br>\
Equip: Restores 5 mana per 5 sec.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Kodohide Gloves', '<span class = "myBlue">\
High Warlord\'s Kodohide Gloves'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
213 Armor<br>\
+22 Stamina<br>\
+22 Intellect<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases healing done by spells and effects by up to 51.<br>\
Equip: Reduces the cast time of your Cyclone spell by 0.1 sec.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Kodohide Legguards', '<span class = "myBlue">\
High Warlord\'s Kodohide Legguards'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
306 Armor<br>\
+33 Stamina<br>\
+28 Intellect<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 20.<br>\
Equip: Increases healing done by spells and effects by up to 64.<br>\
Equip: Restores 8 mana per 5 sec.\
</span>\
<p></span>';
t++;
//druid end

classCounter++;

//druid begin

var Dragonhide = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Increases your movement speed by 15% while in Bear, Cat, or Travel Form. Only active outdoors.\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Sanctuary (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Dragonhide Gloves<br>\
&nbsp;Grand Marshal\'s Dragonhide Helm<br>\
&nbsp;Grand Marshal\'s Dragonhide Legguards<br>\
&nbsp;Grand Marshal\'s Dragonhide Spaulders<br>\
&nbsp;Grand Marshal\'s Dragonhide Tunic<br>\
</span>'+ Dragonhide, '<span class = "myYellow">\
High Warlord\'s Sanctuary (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Dragonhide Gloves<br>\
&nbsp;High Warlord\'s Dragonhide Helm<br>\
&nbsp;High Warlord\'s Dragonhide Legguards<br>\
&nbsp;High Warlord\'s Dragonhide Spaulders<br>\
&nbsp;High Warlord\'s Dragonhide Tunic<br>\
</span>'+ Dragonhide];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Dragonhide Helm', '<span class = "myBlue">\
High Warlord\'s Dragonhide Helm'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
267 Armor<br>\
+22 Strength<br>\
+22 Agility<br>\
+21 Stamina<br>\
+14 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 21.<br>\
Equip: Increases healing done by spells and effects by up to 31.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Dragonhide Spaulders', '<span class = "myBlue">\
High Warlord\'s Dragonhide Spaulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
249 Armor<br>\
+17 Strength<br>\
+17 Agility<br>\
+24 Stamina<br>\
+13 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 13.<br>\
Equip: Increases healing done by spells and effects by up to 18.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Dragonhide Tunic', '<span class = "myBlue">\
High Warlord\'s Dragonhide Tunic'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
322 Armor<br>\
+18 Strength<br>\
+18 Agility<br>\
+31 Stamina<br>\
+18 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 18.<br>\
Equip: Increases healing done by spells and effects by up to 31.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Dragonhide Gloves', '<span class = "myBlue">\
High Warlord\'s Dragonhide Gloves'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
213 Armor<br>\
+17 Strength<br>\
+17 Agility<br>\
+24 Stamina<br>\
+11 Intellect<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 16.<br>\
Equip: Increases healing done by spells and effects by up to 35.<br>\
Equip: Reduces the cast time of your Cyclone spell by 0.1 sec.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Dragonhide Legguards', '<span class = "myBlue">\
High Warlord\'s Dragonhide Legguards'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
306 Armor<br>\
+23 Strength<br>\
+22 Agility<br>\
+30 Stamina<br>\
+22 Intellect<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 22.<br>\
Equip: Increases healing done by spells and effects by up to 48.\
</span>\
<p></span>';
t++;
//druid end
classCounter++;

//druid begin

var Wildhide = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the mana cost of your Moonfire spell by 10% of its base cost.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Wildhide (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Wyrmhide Gloves<br>\
&nbsp;Grand Marshal\'s Wyrmhide Helm<br>\
&nbsp;Grand Marshal\'s Wyrmhide Legguards<br>\
&nbsp;Grand Marshal\'s Wyrmhide Spaulders<br>\
&nbsp;Grand Marshal\'s Wyrmhide Tunic<br>\
</span>'+ Wildhide, '<span class = "myYellow">\
High Warlord\'s Wildhide (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Wyrmhide Gloves<br>\
&nbsp;High Warlord\'s Wyrmhide Helm<br>\
&nbsp;High Warlord\'s Wyrmhide Legguards<br>\
&nbsp;High Warlord\'s Wyrmhide Spaulders<br>\
&nbsp;High Warlord\'s Wyrmhide Tunic<br>\
</span>'+ Wildhide];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Wyrmhide Helm', '<span class = "myBlue">\
High Warlord\'s Wyrmhide Helm'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
267 Armor<br>\
+21 Stamina<br>\
+18 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 34.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Wyrmhide Spaulders', '<span class = "myBlue">\
High Warlord\'s Wyrmhide Spaulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
249 Armor<br>\
+33 Stamina<br>\
+16 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 14.<br>\
Equip: Restores 2 mana per 5 sec.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Wyrmhide Tunic', '<span class = "myBlue">\
High Warlord\'s Wyrmhide Tunic'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
322 Armor<br>\
+33 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience Rating</span><br>\
<span class="myTable">Classes: Druid<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 18.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 22.<br>\
Equip: Restores 5 mana per 5 sec.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Wyrmhide Gloves', '<span class = "myBlue">\
High Warlord\'s Wyrmhide Gloves'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
213 Armor<br>\
+22 Stamina<br>\
+15 Intellect<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.<br>\
Equip: Reduces the cast time of your Cyclone spell by 0.1 sec.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Wyrmhide Legguards', '<span class = "myBlue">\
High Warlord\'s Wyrmhide Legguards'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
306 Armor<br>\
+33 Stamina<br>\
+22 Intellect<br>\
Classes: Druid<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 20.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 39.<br>\
Equip: Restores 8 mana per 5 sec.\
</span>\
<p></span>';

t++;


//druid end
classCounter++;

//hunter begin

var Pursuit = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Concussive Shot by 1 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Pursuit (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Chain Armor<br>\
&nbsp;Grand Marshal\'s Chain Gauntlets<br>\
&nbsp;Grand Marshal\'s Chain Helm<br>\
&nbsp;Grand Marshal\'s Chain Leggings<br>\
&nbsp;Grand Marshal\'s Chain Spaulders<br>\
</span>'+ Pursuit, '<span class = "myYellow">\
High Warlord\'s Pursuit (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Chain Armor<br>\
&nbsp;High Warlord\'s Chain Gauntlets<br>\
&nbsp;High Warlord\'s Chain Helm<br>\
&nbsp;High Warlord\'s Chain Leggings<br>\
&nbsp;High Warlord\'s Chain Spaulders<br>\
</span>'+ Pursuit];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Chain Helm', '<span class = "myBlue">\
High Warlord\'s Chain Helm'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
530 Armor<br>\
+20 Agility<br>\
+30 Stamina<br>\
+14 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Hunter<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 14.<br>\
Equip: Improves your resilience rating by 15.<br>\
Equip: Increases attack power by 28.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Chain Spaulders', '<span class = "myBlue">\
High Warlord\'s Chain Spaulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
489 Armor<br>\
+14 Agility<br>\
+31 Stamina<br>\
+4 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Hunter<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 17.<br>\
Equip: Improves your resilience rating by 16.<br>\
Equip: Increases attack power by 22.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Chain Armor', '<span class = "myBlue">\
High Warlord\'s Chain Armor'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
652 Armor<br>\
+20 Agility<br>\
+42 Stamina<br>\
+15 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Classes: Hunter<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 12.<br>\
Equip: Improves your resilience rating by 16.<br>\
Equip: Increases attack power by 12.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Chain Gauntlets', '<span class = "myBlue">\
High Warlord\'s Chain Gauntlets'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
407 Armor<br>\
+21 Agility<br>\
+31 Stamina<br>\
+6 Intellect<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 11.<br>\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases attack power by 20.<br>\
Equip: Increases the damage done by your Multi-Shot by 4%.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Chain Leggings', '<span class = "myBlue">\
High Warlord\'s Chain Leggings'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
570 Armor<br>\
+28 Agility<br>\
+42 Stamina<br>\
+8 Intellect<br>\
Classes: Hunter<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 14.<br>\
Equip: Improves your resilience rating by 25.<br>\
Equip: Increases attack power by 28.\
</span>\
<p></span>';

t++;


//hunter end
classCounter++;
//mage begin

var Regalia = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Blink spell by 2 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Silk Amice<br>\
&nbsp;Grand Marshal\'s Silk Cowl<br>\
&nbsp;Grand Marshal\'s Silk Handguards<br>\
&nbsp;Grand Marshal\'s Silk Raiment<br>\
&nbsp;Grand Marshal\'s Silk Trousers<br>\
</span>'+ Regalia, '<span class = "myYellow">\
High Warlord\'s Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Silk Amice<br>\
&nbsp;High Warlord\'s Silk Cowl<br>\
&nbsp;High Warlord\'s Silk Handguards<br>\
&nbsp;High Warlord\'s Silk Raiment<br>\
&nbsp;High Warlord\'s Silk Trousers<br>\
</span>'+ Regalia];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Silk Cowl', '<span class = "myBlue">\
High Warlord\'s Silk Cowl'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
127 Armor<br>\
+39 Stamina<br>\
+16 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Mage<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Improves your resilience rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 23.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Silk Amice', '<span class = "myBlue">\
High Warlord\'s Silk Amice'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
117 Armor<br>\
+21 Stamina<br>\
+16 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Mage<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 8.<br>\
Equip: Improves your resilience rating by 15.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 25.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Silk Raiment', '<span class = "myBlue">\
High Warlord\'s Silk Raiment'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
156 Armor<br>\
+42 Stamina<br>\
+15 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Classes: Mage<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Improves your resilience rating by 18.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 23.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Silk Handguards', '<span class = "myBlue">\
High Warlord\'s Silk Handguards'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+33 Stamina<br>\
+12 Intellect<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Improves your resilience rating by 17.<br>\
Equip: Improves the range of your Fire Blast spell by 5 yards.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 19.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Silk Trousers', '<span class = "myBlue">\
High Warlord\'s Silk Trousers'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
136 Armor<br>\
+42 Stamina<br>\
+22 Intellect<br>\
Classes: Mage<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 22.<br>\
Equip: Improves your resilience rating by 22.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 33.\
</span>\
<p></span>';

t++;


//mage end
classCounter++;
//paladin begin

var Aegis = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Hammer of Justice by 10 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Aegis (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Lamellar Chestpiece<br>\
&nbsp;Grand Marshal\'s Lamellar Gauntlets<br>\
&nbsp;Grand Marshal\'s Lamellar Helm<br>\
&nbsp;Grand Marshal\'s Lamellar Legguards<br>\
&nbsp;Grand Marshal\'s Lamellar Shoulders<br>\
</span>'+ Aegis, '<span class = "myYellow">\
High Warlord\'s Aegis (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Lamellar Chestpiece<br>\
&nbsp;High Warlord\'s Lamellar Gauntlets<br>\
&nbsp;High Warlord\'s Lamellar Helm<br>\
&nbsp;High Warlord\'s Lamellar Legguards<br>\
&nbsp;High Warlord\'s Lamellar Shoulders<br>\
</span>'+ Aegis];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Lamellar Helm', '<span class = "myBlue">\
High Warlord\'s Lamellar Helm'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
946 Armor<br>\
+44 Stamina<br>\
+11 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 20.<br>\
Equip: Improves your resilience rating by 20.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 19.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Lamellar Shoulders', '<span class = "myBlue">\
High Warlord\'s Lamellar Shoulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
873 Armor<br>\
+36 Stamina<br>\
+12 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 15.<br>\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 12.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Lamellar Chestpiece', '<span class = "myBlue">\
High Warlord\'s Lamellar Chestpiece'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1164 Armor<br>\
+48 Stamina<br>\
+12 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 21.<br>\
Equip: Improves your resilience rating by 22.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 9.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Lamellar Gauntlets', '<span class = "myBlue">\
High Warlord\'s Lamellar Gauntlets'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
728 Armor<br>\
+36 Stamina<br>\
+13 Intellect<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 19.<br>\
Equip: Improves your resilience rating by 12.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Increases the Holy damage bonus of your Judgement of the Crusader by 20.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Lamellar Legguards', '<span class = "myBlue">\
High Warlord\'s Lamellar Legguards'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1019 Armor<br>\
+48 Stamina<br>\
+15 Intellect<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Improves your resilience rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 28.\
</span>\
<p></span>';

t++;


//paladin end
classCounter++;
//paladin begin

var Redemption = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Hammer of Justice by 10 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Redemption (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Ornamented Chestplate<br>\
&nbsp;Grand Marshal\'s Ornamented Gloves<br>\
&nbsp;Grand Marshal\'s Ornamented Headguard<br>\
&nbsp;Grand Marshal\'s Ornamented Leggings<br>\
&nbsp;Grand Marshal\'s Ornamented Spaulders<br>\
</span>'+ Redemption, '<span class = "myYellow">\
High Warlord\'s Redemption (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Ornamented Chestplate<br>\
&nbsp;High Warlord\'s Ornamented Gloves<br>\
&nbsp;High Warlord\'s Ornamented Headguard<br>\
&nbsp;High Warlord\'s Ornamented Leggings<br>\
&nbsp;High Warlord\'s Ornamented Spaulders<br>\
</span>'+ Redemption];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Ornamented Headguard', '<span class = "myBlue">\
High Warlord\'s Ornamented Headguard'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
946 Armor<br>\
+34 Stamina<br>\
+22 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 20.<br>\
Equip: Improves your resilience rating by 20.<br>\
Equip: Increases healing done by spells and effects by up to 35.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Ornamented Spaulders', '<span class = "myBlue">\
High Warlord\'s Ornamented Spaulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
873 Armor<br>\
+30 Stamina<br>\
+19 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 15.<br>\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases healing done by spells and effects by up to 22.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Ornamented Chestplate', '<span class = "myBlue">\
High Warlord\'s Ornamented Chestplate'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1164 Armor<br>\
+37 Stamina<br>\
+24 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 21.<br>\
Equip: Improves your resilience rating by 22.<br>\
Equip: Increases healing done by spells and effects by up to 18.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Ornamented Gloves', '<span class = "myBlue">\
High Warlord\'s Ornamented Gloves'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
728 Armor<br>\
+30 Stamina<br>\
+20 Intellect<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 19.<br>\
Equip: Improves your resilience rating by 12.<br>\
Equip: Increases healing done by spells and effects by up to 40.<br>\
Equip: Increases the Holy damage bonus of your Judgement of the Crusader by 20.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Ornamented Leggings', '<span class = "myBlue">\
High Warlord\'s Ornamented Leggings'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1019 Armor<br>\
+39 Stamina<br>\
+26 Intellect<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 24.<br>\
Equip: Improves your resilience rating by 24.<br>\
Equip: Increases healing done by spells and effects by up to 53.\
</span>\
<p></span>';

t++;


//paladin end
classCounter++;
//paladin begin

var Vindication = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Hammer of Justice by 10 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Vindication (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Scaled Chestpiece<br>\
&nbsp;Grand Marshal\'s Scaled Gauntlets<br>\
&nbsp;Grand Marshal\'s Scaled Helm<br>\
&nbsp;Grand Marshal\'s Scaled Legguards<br>\
&nbsp;Grand Marshal\'s Scaled Shoulders<br>\
</span>'+ Vindication, '<span class = "myYellow">\
High Warlord\'s Vindication (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Scaled Chestpiece<br>\
&nbsp;High Warlord\'s Scaled Gauntlets<br>\
&nbsp;High Warlord\'s Scaled Helm<br>\
&nbsp;High Warlord\'s Scaled Legguards<br>\
&nbsp;High Warlord\'s Scaled Shoulders<br>\
</span>'+ Vindication];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Scaled Helm', '<span class = "myBlue">\
High Warlord\'s Scaled Helm'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
946 Armor<br>\
+20 Strength<br>\
+30 Stamina<br>\
+16 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 20.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 19.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Scaled Shoulders', '<span class = "myBlue">\
High Warlord\'s Scaled Shoulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
873 Armor<br>\
+19 Strength<br>\
+33 Stamina<br>\
+8 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 14.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 14.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Scaled Chestpiece', '<span class = "myBlue">\
High Warlord\'s Scaled Chestpiece'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1164 Armor<br>\
+24 Strength<br>\
+42 Stamina<br>\
+12 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Classes: Paladin<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 20.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 9.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Scaled Gauntlets', '<span class = "myBlue">\
High Warlord\'s Scaled Gauntlets'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
728 Armor<br>\
+19 Strength<br>\
+25 Stamina<br>\
+12 Intellect<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 18.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Increases the Holy damage bonus of your Judgement of the Crusader by 20.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Scaled Legguards', '<span class = "myBlue">\
High Warlord\'s Scaled Legguards'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1019 Armor<br>\
+24 Strength<br>\
+42 Stamina<br>\
+16 Intellect<br>\
Classes: Paladin<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 24.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 28.\
</span>\
<p></span>';

t++;


//paladin end
classCounter++;
//priest begin

var Investiture = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the duration of the Weakened Soul effect caused by Power Word: Shield by 2 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Investiture (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Mooncloth Cowl<br>\
&nbsp;Grand Marshal\'s Mooncloth Legguards<br>\
&nbsp;Grand Marshal\'s Mooncloth Mitts<br>\
&nbsp;Grand Marshal\'s Mooncloth Shoulderpads<br>\
&nbsp;Grand Marshal\'s Mooncloth Vestments<br>\
</span>'+ Investiture, '<span class = "myYellow">\
High Warlord\'s Investiture (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Mooncloth Cowl<br>\
&nbsp;High Warlord\'s Mooncloth Legguards<br>\
&nbsp;High Warlord\'s Mooncloth Mitts<br>\
&nbsp;High Warlord\'s Mooncloth Shoulderpads<br>\
&nbsp;High Warlord\'s Mooncloth Vestments<br>\
</span>'+ Investiture];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Mooncloth Cowl', '<span class = "myBlue">\
High Warlord\'s Mooncloth Cowl'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
127 Armor<br>\
+40 Stamina<br>\
+26 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Priest<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 19.<br>\
Equip: Increases healing done by spells and effects by up to 33.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Mooncloth Shoulderpads', '<span class = "myBlue">\
High Warlord\'s Mooncloth Shoulderpads'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
117 Armor<br>\
+30 Stamina<br>\
+20 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Priest<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 17.<br>\
Equip: Increases healing done by spells and effects by up to 29.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Mooncloth Vestments', '<span class = "myBlue">\
High Warlord\'s Mooncloth Vestments'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
156 Armor<br>\
+39 Stamina<br>\
+25 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience</span><br>\
<span class="myTable">Classes: Priest<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 15.<br>\
Equip: Increases healing done by spells and effects by up to 51.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Mooncloth Mitts', '<span class = "myBlue">\
High Warlord\'s Mooncloth Mitts'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+33 Stamina<br>\
+15 Intellect<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases the duration of your Psychic Scream spell by 1 sec.<br>\
Equip: Increases healing done by spells and effects by up to 46.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Mooncloth Legguards', '<span class = "myBlue">\
High Warlord\'s Mooncloth Legguards'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
136 Armor<br>\
+42 Stamina<br>\
+28 Intellect<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 23.<br>\
Equip: Increases healing done by spells and effects by up to 68.\
</span>\
<p></span>';

t++;


//priest end
classCounter++;
//priest begin

var Raiment = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the duration of the Weakened Soul effect caused by Power Word: Shield by 2 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Satin Gloves<br>\
&nbsp;Grand Marshal\'s Satin Hood<br>\
&nbsp;Grand Marshal\'s Satin Leggings<br>\
&nbsp;Grand Marshal\'s Satin Mantle<br>\
&nbsp;Grand Marshal\'s Satin Robe<br>\
</span>'+ Raiment, '<span class = "myYellow">\
High Warlord\'s Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Satin Gloves<br>\
&nbsp;High Warlord\'s Satin Hood<br>\
&nbsp;High Warlord\'s Satin Leggings<br>\
&nbsp;High Warlord\'s Satin Mantle<br>\
&nbsp;High Warlord\'s Satin Robe<br>\
</span>'+ Raiment];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Satin Hood', '<span class = "myBlue">\
High Warlord\'s Satin Hood'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
127 Armor<br>\
+46 Stamina<br>\
+19 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Priest<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 18.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Satin Mantle', '<span class = "myBlue">\
High Warlord\'s Satin Mantle'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
117 Armor<br>\
+33 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Priest<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 15.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Satin Robe', '<span class = "myBlue">\
High Warlord\'s Satin Robe'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
156 Armor<br>\
+46 Stamina<br>\
+15 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience</span><br>\
<span class="myTable">Classes: Priest<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 15.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 27.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Satin Gloves', '<span class = "myBlue">\
High Warlord\'s Satin Gloves'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+33 Stamina<br>\
+15 Intellect<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases the duration of your Psychic Scream spell by 1 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 25.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Satin Leggings', '<span class = "myBlue">\
High Warlord\'s Satin Leggings'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
136 Armor<br>\
+46 Stamina<br>\
+23 Intellect<br>\
Classes: Priest<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 23.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 36.\
</span>\
<p></span>';

t++;


//priest end
classCounter++;
//rogue begin

var Vestments = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Gouge ability by 1 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Vestments (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Leather Gloves<br>\
&nbsp;Grand Marshal\'s Leather Helm<br>\
&nbsp;Grand Marshal\'s Leather Legguards<br>\
&nbsp;Grand Marshal\'s Leather Spaulders<br>\
&nbsp;Grand Marshal\'s Leather Tunic<br>\
</span>'+ Vestments, '<span class = "myYellow">\
High Warlord\'s Vestments (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Leather Gloves<br>\
&nbsp;High Warlord\'s Leather Helm<br>\
&nbsp;High Warlord\'s Leather Legguards<br>\
&nbsp;High Warlord\'s Leather Spaulders<br>\
&nbsp;High Warlord\'s Leather Tunic<br>\
</span>'+ Vestments];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Leather Helm', '<span class = "myBlue">\
High Warlord\'s Leather Helm'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
237 Armor<br>\
+20 Agility<br>\
+36 Stamina<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Rogue<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 10.<br>\
Equip: Improves your resilience rating by 24.<br>\
Equip: Increases attack power by 20.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Leather Spaulders', '<span class = "myBlue">\
High Warlord\'s Leather Spaulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
219 Armor<br>\
+13 Agility<br>\
+31 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Rogue<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 11.<br>\
Equip: Improves your resilience rating by 13.<br>\
Equip: Increases attack power by 22.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Leather Tunic', '<span class = "myBlue">\
High Warlord\'s Leather Tunic'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
292 Armor<br>\
+20 Agility<br>\
+42 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Classes: Rogue<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 10.<br>\
Equip: Improves your resilience rating by 24.<br>\
Equip: Increases attack power by 12.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Leather Gloves', '<span class = "myBlue">\
High Warlord\'s Leather Gloves'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
183 Armor<br>\
+21 Agility<br>\
+31 Stamina<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 11.<br>\
Equip: Improves your resilience rating by 16.<br>\
Equip: Increases attack power by 22.<br>\
Equip: Causes your Deadly Throw ability to interrupt spellcasting and prevent any spell in that school from being cast for 3 sec.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Leather Legguards', '<span class = "myBlue">\
High Warlord\'s Leather Legguards'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
256 Armor<br>\
+28 Agility<br>\
+42 Stamina<br>\
Classes: Rogue<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 14.<br>\
Equip: Improves your resilience rating by 28.<br>\
Equip: Increases attack power by 28.\
</span>\
<p></span>';

t++;


//rogue end
classCounter++;
//shaman begin

var Earthshaker = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Stormstrike ability by 1 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Earthshaker (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Linked Armor<br>\
&nbsp;Grand Marshal\'s Linked Gauntlets<br>\
&nbsp;Grand Marshal\'s Linked Helm<br>\
&nbsp;Grand Marshal\'s Linked Leggings<br>\
&nbsp;Grand Marshal\'s Linked Spaulders<br>\
</span>'+ Earthshaker, '<span class = "myYellow">\
High Warlord\'s Earthshaker (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Linked Armor<br>\
&nbsp;High Warlord\'s Linked Gauntlets<br>\
&nbsp;High Warlord\'s Linked Helm<br>\
&nbsp;High Warlord\'s Linked Leggings<br>\
&nbsp;High Warlord\'s Linked Spaulders<br>\
</span>'+ Earthshaker];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Linked Helm', '<span class = "myBlue">\
High Warlord\'s Linked Helm'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
530 Armor<br>\
+20 Strength<br>\
+30 Stamina<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 24.<br>\
Equip: Improves your resilience rating by 24.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Linked Spaulders', '<span class = "myBlue">\
High Warlord\'s Linked Spaulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
489 Armor<br>\
+13 Strength<br>\
+33 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 17.<br>\
Equip: Improves your resilience rating by 13.<br>\
Equip: Restores 3 mana per 5 sec.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Linked Armor', '<span class = "myBlue">\
High Warlord\'s Linked Armor'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
652 Armor<br>\
+12 Strength<br>\
+42 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 14.<br>\
Equip: Improves your resilience rating by 22.<br>\
Equip: Restores 9 mana per 5 sec.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Linked Gauntlets', '<span class = "myBlue">\
High Warlord\'s Linked Gauntlets'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
407 Armor<br>\
+21 Strength<br>\
+33 Stamina<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 18.<br>\
Equip: Improves your resilience rating by 17.<br>\
Equip: Increases the damage done by your Lightning Shield by 8%.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Linked Leggings', '<span class = "myBlue">\
High Warlord\'s Linked Leggings'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
570 Armor<br>\
+22 Strength<br>\
+42 Stamina<br>\
+22 Intellect<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 28.<br>\
Equip: Improves your resilience rating by 22.\
</span>\
<p></span>';

t++;


//shaman end
classCounter++;
//shaman begin

var Thunderfist = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Improves your chance to get a critical strike with all Shock spells by 2%.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Thunderfist (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Mail Armor<br>\
&nbsp;Grand Marshal\'s Mail Gauntlets<br>\
&nbsp;Grand Marshal\'s Mail Helm<br>\
&nbsp;Grand Marshal\'s Mail Leggings<br>\
&nbsp;Grand Marshal\'s Mail Spaulders<br>\
</span>'+ Thunderfist, '<span class = "myYellow">\
High Warlord\'s Thunderfist (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Mail Armor<br>\
&nbsp;High Warlord\'s Mail Gauntlets<br>\
&nbsp;High Warlord\'s Mail Helm<br>\
&nbsp;High Warlord\'s Mail Leggings<br>\
&nbsp;High Warlord\'s Mail Spaulders<br>\
</span>'+ Thunderfist];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Mail Helm', '<span class = "myBlue">\
High Warlord\'s Mail Helm'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
530 Armor<br>\
+36 Stamina<br>\
+16 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 16.<br>\
Equip: Improves your resilience rating by 16.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 23.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Mail Spaulders', '<span class = "myBlue">\
High Warlord\'s Mail Spaulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
489 Armor<br>\
+33 Stamina<br>\
+13 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 12.<br>\
Equip: Improves your resilience rating by 12.<br>\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 15.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Mail Armor', '<span class = "myBlue">\
High Warlord\'s Mail Armor'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
652 Armor<br>\
+42 Stamina<br>\
+14 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 18.<br>\
Equip: Improves your resilience rating by 18.<br>\
Equip: Restores 5 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 16.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Mail Gauntlets', '<span class = "myBlue">\
High Warlord\'s Mail Gauntlets'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
407 Armor<br>\
+33 Stamina<br>\
+13 Intellect<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 14.<br>\
Equip: Improves your resilience rating by 13.<br>\
Equip: Improves the range of all Shock spells by 5 yards.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 25.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Mail Leggings', '<span class = "myBlue">\
High Warlord\'s Mail Leggings'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
570 Armor<br>\
+42 Stamina<br>\
+18 Intellect<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 22.<br>\
Equip: Improves your resilience rating by 22.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 33.<br>\
Equip: Restores 4 mana per 5 sec.\
</span>\
<p></span>';

t++;


//shaman end
classCounter++;
//shaman begin

var Wartide = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown on your Nature\'s Swiftness ability by 24 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Wartide (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Ringmail Chestguard<br>\
&nbsp;Grand Marshal\'s Ringmail Gloves<br>\
&nbsp;Grand Marshal\'s Ringmail Headpiece<br>\
&nbsp;Grand Marshal\'s Ringmail Legguards<br>\
&nbsp;Grand Marshal\'s Ringmail Shoulderpads<br>\
</span>'+ Wartide, '<span class = "myYellow">\
High Warlord\'s Wartide (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Ringmail Chestguard<br>\
&nbsp;High Warlord\'s Ringmail Gloves<br>\
&nbsp;High Warlord\'s Ringmail Headpiece<br>\
&nbsp;High Warlord\'s Ringmail Legguards<br>\
&nbsp;High Warlord\'s Ringmail Shoulderpads<br>\
</span>'+ Wartide];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Ringmail Headpiece', '<span class = "myBlue">\
High Warlord\'s Ringmail Headpiece'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
530 Armor<br>\
+33 Stamina<br>\
+21 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 16.<br>\
Equip: Improves your resilience rating by 16.<br>\
Equip: Increases healing done by spells and effects by up to 44.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Ringmail Shoulderpads', '<span class = "myBlue">\
High Warlord\'s Ringmail Shoulderpads'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
489 Armor<br>\
+28 Stamina<br>\
+18 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 12.<br>\
Equip: Improves your resilience rating by 12.<br>\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 29.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Ringmail Chestguard', '<span class = "myBlue">\
High Warlord\'s Ringmail Chestguard'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
652 Armor<br>\
+34 Stamina<br>\
+22 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Critical Strike Rating</span><br>\
<span class="myTable">Classes: Shaman<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 18.<br>\
Equip: Improves your resilience rating by 18.<br>\
Equip: Restores 5 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 31.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Ringmail Gloves', '<span class = "myBlue">\
High Warlord\'s Ringmail Gloves'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
407 Armor<br>\
+28 Stamina<br>\
+18 Intellect<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 14.<br>\
Equip: Improves your resilience rating by 13.<br>\
Equip: Improves the range of all Shock spells by 5 yards.<br>\
Equip: Increases healing done by spells and effects by up to 46.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Ringmail Legguards', '<span class = "myBlue">\
High Warlord\'s Ringmail Legguards'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
570 Armor<br>\
+36 Stamina<br>\
+24 Intellect<br>\
Classes: Shaman<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 22.<br>\
Equip: Improves your resilience rating by 22.<br>\
Equip: Increases healing done by spells and effects by up to 62.<br>\
Equip: Restores 4 mana per 5 sec.\
</span>\
<p></span>';

t++;


//shaman end
classCounter++;
//warlock begin

var Dreadgear = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the casting time of your Immolate spell by 0.2 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Dreadgear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Dreadweave Gloves<br>\
&nbsp;Grand Marshal\'s Dreadweave Hood<br>\
&nbsp;Grand Marshal\'s Dreadweave Leggings<br>\
&nbsp;Grand Marshal\'s Dreadweave Mantle<br>\
&nbsp;Grand Marshal\'s Dreadweave Robe<br>\
</span>'+ Dreadgear, '<span class = "myYellow">\
High Warlord\'s Dreadgear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Dreadweave Gloves<br>\
&nbsp;High Warlord\'s Dreadweave Hood<br>\
&nbsp;High Warlord\'s Dreadweave Leggings<br>\
&nbsp;High Warlord\'s Dreadweave Mantle<br>\
&nbsp;High Warlord\'s Dreadweave Robe<br>\
</span>'+ Dreadgear];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Dreadweave Hood', '<span class = "myBlue">\
High Warlord\'s Dreadweave Hood'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
127 Armor<br>\
+49 Stamina<br>\
+14 Intellect<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Warlock<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 29.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Dreadweave Mantle', '<span class = "myBlue">\
High Warlord\'s Dreadweave Mantle'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
117 Armor<br>\
+19 Stamina<br>\
+15 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Warlock<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 6.<br>\
Equip: Improves your resilience rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 26.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Dreadweave Robe', '<span class = "myBlue">\
High Warlord\'s Dreadweave Robe'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
156 Armor<br>\
+49 Stamina<br>\
+14 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience</span><br>\
<span class="myTable">Classes: Warlock<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 14.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 29.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Dreadweave Gloves', '<span class = "myBlue">\
High Warlord\'s Dreadweave Gloves'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+31 Stamina<br>\
+21 Intellect<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 12.<br>\
Equip: Gives you a 50% chance to avoid interruption caused by damage while casting Fear.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 26.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Dreadweave Leggings', '<span class = "myBlue">\
High Warlord\'s Dreadweave Leggings'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
136 Armor<br>\
+49 Stamina<br>\
+22 Intellect<br>\
Classes: Warlock<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves your resilience rating by 22.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 39.\
</span>\
<p></span>';

t++;


//warlock end
classCounter++;
//Warrior begin

var Battlegear = '<span class = "myGreen">\
(2) Set: +35 Resilience.<br>\
(4) Set: Reduces the cooldown of your Intercept ability by 5 sec.<br>\
</span>';

armorSetPvPLevel70.setNameArray[classCounter] = ['<span class = "myYellow">\
Grand Marshal\'s Battlegear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Grand Marshal\'s Plate Chestpiece<br>\
&nbsp;Grand Marshal\'s Plate Gauntlets<br>\
&nbsp;Grand Marshal\'s Plate Helm<br>\
&nbsp;Grand Marshal\'s Plate Legguards<br>\
&nbsp;Grand Marshal\'s Plate Shoulders<br>\
</span>'+ Battlegear, '<span class = "myYellow">\
High Warlord\'s Battlegear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;High Warlord\'s Plate Chestpiece<br>\
&nbsp;High Warlord\'s Plate Gauntlets<br>\
&nbsp;High Warlord\'s Plate Helm<br>\
&nbsp;High Warlord\'s Plate Legguards<br>\
&nbsp;High Warlord\'s Plate Shoulders<br>\
</span>'+ Battlegear];

armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Plate Helm', '<span class = "myBlue">\
High Warlord\'s Plate Helm'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
946 Armor<br>\
+20 Strength<br>\
+34 Stamina<br>\
</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +2 Resilience Rating</span><br>\
<span class="myTable">Classes: Warrior<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 24.<br>\
Equip: Improves your resilience rating by 19.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Plate Shoulders', '<span class = "myBlue">\
High Warlord\'s Plate Shoulders'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
873 Armor<br>\
+14 Strength<br>\
+36 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Classes: Warrior<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 17.<br>\
Equip: Improves your resilience rating by 13.\
</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Plate Chestpiece', '<span class = "myBlue">\
High Warlord\'s Plate Chestpiece'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1164 Armor<br>\
+12 Strength<br>\
+46 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Classes: Warrior<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 24.<br>\
Equip: Improves your resilience rating by 19.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Plate Gauntlets', '<span class = "myBlue">\
High Warlord\'s Plate Gauntlets'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
728 Armor<br>\
+22 Strength<br>\
+30 Stamina<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 21.<br>\
Equip: Improves your resilience rating by 17.<br>\
Equip: Hamstring Rage cost reduced by 3.</span>\
<p></span>';

t++;
armorSetPvPLevel70.itemNameArray[t] = ['<span class = "myBlue">\
Grand Marshal\'s Plate Legguards', '<span class = "myBlue">\
High Warlord\'s Plate Legguards'];

armorSetPvPLevel70.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1019 Armor<br>\
+28 Strength<br>\
+46 Stamina<br>\
Classes: Warrior<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 28.<br>\
Equip: Improves your resilience rating by 23.\
</span>\
<p></span>';

t++;


//warior end


armorSetsArray[theArmorSetCounter] = armorSetPvPLevel70;
armorSetsValues[theArmorSetCounter] = "pvplevel70";
theArmorSetCounter++;

