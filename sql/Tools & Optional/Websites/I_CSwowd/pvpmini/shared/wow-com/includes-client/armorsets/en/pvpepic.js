var armorSetPvPEpic = new armorSetObject("pvpepic");

armorSetPvPEpic.slotsArray = new Array();

t = 0;
armorSetPvPEpic.slotsArray[t] = "head"; t++;
armorSetPvPEpic.slotsArray[t] = "shoulder"; t++;
armorSetPvPEpic.slotsArray[t] = "chest"; t++;
armorSetPvPEpic.slotsArray[t] = "hands"; t++;
armorSetPvPEpic.slotsArray[t] = "legs"; t++;
armorSetPvPEpic.slotsArray[t] = "feet"; t++;

armorSetPvPEpic.slotsNumber = armorSetPvPEpic.slotsArray.length;


armorSetPvPEpic.statsArray = new Array();
armorSetPvPEpic.itemNameArray = new Array();
armorSetPvPEpic.setNameArray = new Array();
t = 0;

armorSetPvPEpic.setNamesArray = new Array();
x = 0;
armorSetPvPEpic.setNamesArray[x] = "Sanctuary"; x++;
armorSetPvPEpic.setNamesArray[x] = "Pursuit"; x++;
armorSetPvPEpic.setNamesArray[x] = "Regalia"; x++;
armorSetPvPEpic.setNamesArray[x] = "Aegis"; x++;
armorSetPvPEpic.setNamesArray[x] = "Raiment"; x++;
armorSetPvPEpic.setNamesArray[x] = "Vestments"; x++;
armorSetPvPEpic.setNamesArray[x] = "Earthshaker"; x++;
armorSetPvPEpic.setNamesArray[x] = "Threads"; x++;
armorSetPvPEpic.setNamesArray[x] = "Battlegear"; x++;

classCounter = 0;
//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

//druid begin

var sanctuaryPurple = '<span class = "myGreen">\
(2) Set: +20 Stamina.<br>\
(3) Set: Increases your movement speed by 15% while in Bear, Cat, or Travel Form.  Only active outdoors.<br>\
(6) Set: +40 Attack Power.\
</span>';

armorSetPvPEpic.setNameArray[classCounter] = ['<span class = "myYellow">\
Field Marshal\'s Sanctuary (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Field Marshal\'s Dragonhide Spaulders<br>\
&nbsp;Field Marshal\'s Dragonhide Helmet<br>\
&nbsp;Marshal\'s Dragonhide Legguards<br>\
&nbsp;Field Marshal\'s Dragonhide Breastplate<br>\
&nbsp;Marshal\'s Dragonhide Boots<br>\
&nbsp;Marshal\'s Dragonhide Gauntlets<br>\
</span>'+ sanctuaryPurple, '<span class = "myYellow">\
Warlord\'s Sanctuary (0/6)<br>\
</span><span class = "myGray">\
&nbsp;General\'s Dragonhide Boots<br>\
&nbsp;General\'s Dragonhide Gloves<br>\
&nbsp;Warlord\'s Dragonhide Hauberk<br>\
&nbsp;General\'s Dragonhide Leggings<br>\
&nbsp;Warlord\'s Dragonhide Helmet<br>\
&nbsp;Warlord\'s Dragonhide Epaulets<br>\
</span>'+ sanctuaryPurple];

armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Dragonhide Helmet', '<span class = "myPurple">\
Warlord\'s Dragonhide Helmet'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
209 Armor<br>\
+19 Strength<br>\
+18 Agility<br>\
+19 Stamina<br>\
+18 Intellect<br>\
+7 Spirit<br>\
Classes: Druid<br>\
Durability 70/70<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Dragonhide Spaulders', '<span class = "myPurple">\
Warlord\'s Dragonhide Epaulets'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
165 Armor<br>\
+14 Strength<br>\
+14 Agility<br>\
+14 Stamina<br>\
+14 Intellect<br>\
+13 Spirit<br>\
Classes: Druid<br>\
Durability 70/70<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 18.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Dragonhide Breastplate', '<span class = "myPurple">\
Warlord\'s Dragonhide Hauberk'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
220 Armor<br>\
+19 Strength<br>\
+10 Agility<br>\
+19 Stamina<br>\
+18 Intellect<br>\
+6 Spirit<br>\
Classes: Druid<br>\
Durability 120/120<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Dragonhide Gauntlets', '<span class = "myPurple">\
General\'s Dragonhide Gloves'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
173 Armor<br>\
+18 Strength<br>\
+17 Agility<br>\
+17 Stamina<br>\
Classes: Druid<br>\
Durability 40/40<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Slightly increases your stealth detection.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 12.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Dragonhide Legguards', '<span class = "myPurple">\
General\'s Dragonhide Leggings'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
216 Armor<br>\
+19 Strength<br>\
+18 Agility<br>\
+18 Stamina<br>\
+18 Intellect<br>\
+17 Spirit<br>\
Classes: Druid<br>\
Durability 90/90<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Dragonhide Boots', '<span class = "myPurple">\
General\'s Dragonhide Boots'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
176 Armor<br>\
+14 Strength<br>\
+14 Agility<br>\
+14 Stamina<br>\
+14 Intellect<br>\
+13 Spirit<br>\
Classes: Druid<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 16.</span>\
<p>';

//druid end

classCounter++;

//hunter begin



var pursuitPurple = '<span class = "myGreen">\
(2) Set: +20 Stamina.<br>\
(3) Set: Reduces the cooldown of your Concussive Shot by 1 sec.<br>\
(6) Set: +20 Agility.\
</span>';

armorSetPvPEpic.setNameArray[classCounter] = ['<span class = "myYellow">\
Field Marshal\'s Pursuit (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Field Marshal\'s Chain Spaulders<br>\
&nbsp;Field Marshal\'s Chain Helm<br>\
&nbsp;Marshal\'s Chain Legguards<br>\
&nbsp;Field Marshal\'s Chain Breastplate<br>\
&nbsp;Marshal\'s Chain Boots<br>\
&nbsp;Marshal\'s Chain Grips<br>\
</span>'+ pursuitPurple, '<span class = "myYellow">\
Warlord\'s Pursuit (0/6)<br>\
</span><span class = "myGray">\
&nbsp;General\'s Chain Boots<br>\
&nbsp;General\'s Chain Gloves<br>\
&nbsp;Warlord\'s Chain Chestpiece<br>\
&nbsp;General\'s Chain Legguards<br>\
&nbsp;Warlord\'s Chain Helmet<br>\
&nbsp;Warlord\'s Chain Shoulders<br>\
</span>'+ pursuitPurple];

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Chain Helm', '<span class = "myPurple">\
Warlord\'s Chain Helmet'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
432 Armor<br>\
+34 Agility<br>\
+28 Stamina<br>\
+12 Intellect<br>\
Classes: Hunter<br>\
Durability 85/85<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Chain Spaulders', '<span class = "myPurple">\
Warlord\'s Chain Shoulders'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
403 Armor<br>\
+26 Agility<br>\
+21 Stamina<br>\
+10 Intellect<br>\
Classes: Hunter<br>\
Durability 85/85<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Chain Breastplate', '<span class = "myPurple">\
Warlord\'s Chain Chestpiece'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
520 Armor<br>\
+34 Agility<br>\
+28 Stamina<br>\
+12 Intellect<br>\
Classes: Hunter<br>\
Durability 140/140<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Chain Grips', '<span class = "myPurple">\
General\'s Chain Gloves'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
323 Armor<br>\
+21 Agility<br>\
+20 Stamina<br>\
+4 Intellect<br>\
Classes: Hunter<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases the damage done by your Multi-Shot by 4%.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Chain Legguards', '<span class = "myPurple">\
General\'s Chain Legguards'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
446 Armor<br>\
+34 Agility<br>\
+27 Stamina<br>\
+12 Intellect<br>\
Classes: Hunter<br>\
Durability 105/105<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Chain Boots', '<span class = "myPurple">\
General\'s Chain Boots'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
361 Armor<br>\
+26 Agility<br>\
+20 Stamina<br>\
+9 Intellect<br>\
Classes: Hunter<br>\
Durability 70/70<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>';

//hunter end

classCounter++;

//mage begin

var regaliaPurple = '<span class = "myGreen">\
(2) Set: +20 Stamina.<br>\
(3) Set: Reduces the cooldown of your Blink spell by 1.5 sec.<br>\
(6) Set: Increases damage and healing done by magical spells and effects by up to 23.\
</span>';

armorSetPvPEpic.setNameArray[classCounter] = ['<span class = "myYellow">\
Field Marshal\'s Regalia (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Field Marshal\'s Silk Spaulders<br>\
&nbsp;Field Marshal\'s Coronet<br>\
&nbsp;Marshal\'s Silk Leggings<br>\
&nbsp;Field Marshal\'s Silk Vestments<br>\
&nbsp;Marshal\'s Silk Footwraps<br>\
&nbsp;Marshal\'s Silk Gloves<br>\
</span>'+ regaliaPurple, '<span class = "myYellow">\
Warlord\'s Regalia (0/6)<br>\
</span><span class = "myGray">\
&nbsp;General\'s Silk Boots<br>\
&nbsp;General\'s Silk Handguards<br>\
&nbsp;Warlord\'s Silk Raiment<br>\
&nbsp;General\'s Silk Trousers<br>\
&nbsp;Warlord\'s Silk Cowl<br>\
&nbsp;Warlord\'s Silk Amice<br>\
</span>'+ regaliaPurple];

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Coronet', '<span class = "myPurple">\
Warlord\'s Silk Cowl'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
162 Armor<br>\
+28 Stamina<br>\
+17 Intellect<br>\
+6 Spirit<br>\
Classes: Mage<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 33.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Silk Spaulders', '<span class = "myPurple">\
Warlord\'s Silk Amice'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
135 Armor<br>\
+21 Stamina<br>\
+15 Intellect<br>\
+5 Spirit<br>\
Classes: Mage<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 25.<br>\
Equip: Decreases the magical resistances of your spell targets by 10.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Silk Vestments', '<span class = "myPurple">\
Warlord\'s Silk Raiment'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
183 Armor<br>\
+28 Stamina<br>\
+17 Intellect<br>\
+6 Spirit<br>\
Classes: Mage<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 33.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Silk Gloves', '<span class = "myPurple">\
General\'s Silk Handguards'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
108 Armor<br>\
+22 Stamina<br>\
+12 Intellect<br>\
+5 Spirit<br>\
Classes: Mage<br>\
Durability 35/35<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases the damage absorbed by your Mana Shield by 285.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 27.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Silk Leggings', '<span class = "myPurple">\
General\'s Silk Trousers'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
155 Armor<br>\
+26 Stamina<br>\
+20 Intellect<br>\
+10 Spirit<br>\
Classes: Mage<br>\
Durability 75/75<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 30.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Silk Footwraps', '<span class = "myPurple">\
General\'s Silk Boots'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
115 Armor<br>\
+23 Stamina<br>\
+14 Intellect<br>\
+6 Spirit<br>\
Classes: Mage<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Improves your chance to hit with spells by 1%.</span>\
<p>';

//mage end

classCounter++;

//paladin begin

var aegisPurple = '<span class = "myGreen">\
(2) Set: +20 Stamina.<br>\
(3) Set: Reduces the cooldown of your Hammer of Justice by 10 sec.<br>\
(6) Set: Increases damage and healing done by magical spells and effects by up to 23.\
</span>';

armorSetPvPEpic.setNameArray[classCounter] = ['<span class = "myYellow">\
Field Marshal\'s Aegis (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Field Marshal\'s Lamellar Pauldrons<br>\
&nbsp;Field Marshal\'s Lamellar Faceguard<br>\
&nbsp;Marshal\'s Lamellar Legplates<br>\
&nbsp;Field Marshal\'s Lamellar Chestplate<br>\
&nbsp;Marshal\'s Lamellar Boots<br>\
&nbsp;Marshal\'s Lamellar Gloves<br>\
</span>'+ aegisPurple, ''];

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Lamellar Faceguard', ''];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
679 Armor<br>\
+21 Strength<br>\
+21 Stamina<br>\
+20 Intellect<br>\
Classes: Paladin<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 25.<br>\
Equip: Restores 5 mana per 5 sec.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Lamellar Pauldrons', ''];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
626 Armor<br>\
+16 Strength<br>\
+16 Stamina<br>\
+15 Intellect<br>\
Classes: Paladin<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 19.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Lamellar Chestplate', ''];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
835 Armor<br>\
+21 Strength<br>\
+21 Stamina<br>\
+20 Intellect<br>\
Classes: Paladin<br>\
Durability 165/165<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 25.<br>\
Equip: Restores 5 mana per 5 sec.\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Lamellar Gloves', ''];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
502 Armor<br>\
+18 Strength<br>\
+17 Stamina<br>\
+16 Intellect<br>\
Classes: Paladin<br>\
Durability 55/55<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases the Holy damage bonus of your Judgement of the Crusader by 20.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Lamellar Legplates', ''];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
703 Armor<br>\
+20 Strength<br>\
+20 Stamina<br>\
+17 Intellect<br>\
Classes: Paladin<br>\
Durability 120/120<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 27.<br>\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Lamellar Boots', ''];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
552 Armor<br>\
+15 Strength<br>\
+16 Stamina<br>\
+15 Intellect<br>\
Classes: Paladin<br>\
Durability 75/75<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 18.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>';

//Paladin end

classCounter++;

//priest begin

var raimentPurple = '<span class = "myGreen">\
(2) Set: +20 Stamina.<br>\
(3) Set: Increases the duration of your Psychic Scream spell by 1 sec.<br>\
(6) Set: Increases damage and healing done by magical spells and effects by up to 23.\
</span>';

armorSetPvPEpic.setNameArray[classCounter] = ['<span class = "myYellow">\
Field Marshal\'s Raiment (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Field Marshal\'s Satin Mantle<br>\
&nbsp;Field Marshal\'s Headdress<br>\
&nbsp;Marshal\'s Satin Pants<br>\
&nbsp;Field Marshal\'s Satin Vestments<br>\
&nbsp;Marshal\'s Satin Sandals<br>\
&nbsp;Marshal\'s Satin Gloves<br>\
</span>'+ raimentPurple, '<span class = "myYellow">\
Warlord\'s Raiment (0/6)<br>\
</span><span class = "myGray">\
&nbsp;General\'s Satin Boots<br>\
&nbsp;General\'s Satin Gloves<br>\
&nbsp;Warlord\'s Satin Robes<br>\
&nbsp;General\'s Satin Leggings<br>\
&nbsp;Warlord\'s Satin Cowl<br>\
&nbsp;Warlord\'s Satin Mantle<br>\
</span>'+ raimentPurple];

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Headdress', '<span class = "myPurple">\
Warlord\'s Satin Cowl'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
162 Armor<br>\
+30 Stamina<br>\
+28 Intellect<br>\
Classes: Priest<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 33.<br>\
Equip: Restores 4 mana per 5 sec.\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Satin Mantle', '<span class = "myPurple">\
Warlord\'s Satin Mantle'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
145 Armor<br>\
+22 Stamina<br>\
+20 Intellect<br>\
Classes: Priest<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 25.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Satin Vestments', '<span class = "myPurple">\
Warlord\'s Satin Robes'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
183 Armor<br>\
+30 Stamina<br>\
+28 Intellect<br>\
Classes: Priest<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 33.<br>\
Equip: Restores 4 mana per 5 sec.\
<p>';



t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Satin Gloves', '<span class = "myPurple">\
General\'s Satin Gloves'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
118 Armor<br>\
+21 Stamina<br>\
+13 Intellect<br>\
Classes: Priest<br>\
Durability 35/35<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Gives you a 50% chance to avoid interruption caused by damage while casting Mind Blast.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 23.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Satin Pants', '<span class = "myPurple">\
General\'s Satin Leggings'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
165 Armor<br>\
+30 Stamina<br>\
+21 Intellect<br>\
Classes: Priest<br>\
Durability 75/75<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by spells and effects by up to 32.<br>\
Equip: Restores 4 mana per 5 sec.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Satin Sandals', '<span class = "myPurple">\
General\'s Satin Boots'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
125 Armor<br>\
+21 Stamina<br>\
+18 Intellect<br>\
Classes: Priest<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by spells and effects by up to 23.</span>\
<p>';

//priest end

classCounter++;

//rogue begin

var vestmentsPurple = '<span class = "myGreen">\
(2) Set: +20 Stamina.<br>\
(3) Set: Reduces the cooldown of your Gouge ability by 1 sec.<br>\
(6) Set: +40 Attack Power.\
</span>';

armorSetPvPEpic.setNameArray[classCounter] = ['<span class = "myYellow">\
Field Marshal\'s Vestments (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Field Marshal\'s Leather Mask<br>\
&nbsp;Field Marshal\'s Leather Epaulets<br>\
&nbsp;Marshal\'s Leather Leggings<br>\
&nbsp;Field Marshal\'s Leather Chestpiece<br>\
&nbsp;Marshal\'s Leather Footguards<br>\
&nbsp;Marshal\'s Leather Handgrips<br>\
</span>'+ vestmentsPurple, '<span class = "myYellow">\
Warlord\'s Vestments (0/6)<br>\
</span><span class = "myGray">\
&nbsp;General\'s Leather Treads<br>\
&nbsp;General\'s Leather Mitts<br>\
&nbsp;Warlord\'s Leather Breastplate<br>\
&nbsp;General\'s Leather Legguards<br>\
&nbsp;Warlord\'s Leather Helm<br>\
&nbsp;Warlord\'s Leather Spaulders<br>\
</span>'+ vestmentsPurple];

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Leather Mask', '<span class = "myPurple">\
Warlord\'s Leather Helm'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
229 Armor<br>\
+27 Agility<br>\
+31 Stamina<br>\
Classes: Rogue<br>\
Durability 70/70<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 1%.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Leather Epaulets', '<span class = "myPurple">\
Warlord\'s Leather Spaulders'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
215 Armor<br>\
+21 Agility<br>\
+27 Stamina<br>\
Classes: Rogue<br>\
Durability 70/70<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Leather Chestpiece', '<span class = "myPurple">\
Warlord\'s Leather Breastplate'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
260 Armor<br>\
+26 Agility<br>\
+31 Stamina<br>\
Classes: Rogue<br>\
Durability 120/120<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 1%.\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Leather Handgrips', '<span class = "myPurple">\
General\'s Leather Mitts'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
193 Armor<br>\
+20 Agility<br>\
+23 Stamina<br>\
Classes: Rogue<br>\
Durability 40/40<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Leather Leggings', '<span class = "myPurple">\
General\'s Leather Legguards'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
236 Armor<br>\
+27 Agility<br>\
+27 Stamina<br>\
Classes: Rogue<br>\
Durability 90/90<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 2%.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Leather Footguards', '<span class = "myPurple">\
General\'s Leather Treads'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
186 Armor<br>\
+22 Agility<br>\
+25 Stamina<br>\
Classes: Rogue<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases the duration of your Sprint ability by 3 sec.\
</span>\
<p>';

//Rogue end

classCounter++;

//shaman begin

var earthshakerPurple = '<span class = "myGreen">\
(2) Set: +20 Stamina.<br>\
(3) Set: Improves your chance to get a critical strike with all Shock spells by 2%.<br>\
(6) Set: +40 Attack Power.\
</span>';

armorSetPvPEpic.setNameArray[classCounter] = ['', '<span class = "myYellow">\
Warlord\'s Earthshaker (0/6)<br>\
</span><span class = "myGray">\
&nbsp;General\'s Mail Boots<br>\
&nbsp;General\'s Mail Gauntlets<br>\
&nbsp;Warlord\'s Mail Mail Armor<br>\
&nbsp;General\'s Mail Leggings<br>\
&nbsp;Warlord\'s Mail Helm<br>\
&nbsp;Warlord\'s Mail Spaulders<br>\
</span>'+ earthshakerPurple];

t++;
armorSetPvPEpic.itemNameArray[t] = ['', '<span class = "myPurple">\
Warlord\'s Mail Helm'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
382 Armor<br>\
+11 Strength<br>\
+35 Stamina<br>\
+19 Intellect<br>\
Classes: Shaman<br>\
Durability 85/85<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 9.\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['', '<span class = "myPurple">\
Warlord\'s Mail Spaulders'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
353 Armor<br>\
+17 Strength<br>\
+9 Agility<br>\
+18 Stamina<br>\
+18 Intellect<br>\
Classes: Shaman<br>\
Durability 85/85<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 16.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['', '<span class = "myPurple">\
Warlord\'s Mail Armor'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
470 Armor<br>\
+9 Strength<br>\
+35 Stamina<br>\
+20 Intellect<br>\
Classes: Shaman<br>\
Durability 140/140<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 9.\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['', '<span class = "myPurple">\
General\'s Mail Gauntlets'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
353 Armor<br>\
+17 Strength<br>\
+18 Stamina<br>\
+17 Intellect<br>\
Classes: Shaman<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['', '<span class = "myPurple">\
General\'s Mail Leggings'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
396 Armor<br>\
+23 Stamina<br>\
+23 Intellect<br>\
Classes: Shaman<br>\
Durability 105/105<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 27.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['', '<span class = "myPurple">\
General\'s Mail Boots'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
311 Armor<br>\
+18 Stamina<br>\
+17 Intellect<br>\
Classes: Shaman<br>\
Durability 70/70<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Restores 5 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 20.<br>\
Equip: Increases the speed of your Ghost Wolf ability by 15%.</span>\
<p>';


//Shaman end

classCounter++;

//warlock begin

var threadsPurple = '<span class = "myGreen">\
(2) Set: +20 Stamina.<br>\
(3) Set: Reduces the casting time of your Immolate spell by 0.2 sec.<br>\
(6) Set: Increases damage and healing done by magical spells and effects by up to 23.\
</span>';

armorSetPvPEpic.setNameArray[classCounter] = ['<span class = "myYellow">\
Field Marshal\'s Threads (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Field Marshal\'s Dreadweave Shoulders<br>\
&nbsp;Field Marshal\'s Coronal<br>\
&nbsp;Marshal\'s Dreadweave Leggings<br>\
&nbsp;Field Marshal\'s Dreadweave Robe<br>\
&nbsp;Marshal\'s Dreadweave Boots<br>\
&nbsp;Marshal\'s Dreadweave Gloves<br>\
</span>'+ threadsPurple, '<span class = "myYellow">\
Warlord\'s Threads (0/6)<br>\
</span><span class = "myGray">\
&nbsp;General\'s Dreadweave Boots<br>\
&nbsp;General\'s Dreadweave Gloves<br>\
&nbsp;Warlord\'s Dreadweave Robe<br>\
&nbsp;General\'s Dreadweave Pants<br>\
&nbsp;Warlord\'s Dreadweave Hood<br>\
&nbsp;Warlord\'s Dreadweave Mantle<br>\
</span>'+ threadsPurple];

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Coronel', '<span class = "myPurple">\
Warlord\'s Dreadweave Hood'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
132 Armor<br>\
+30 Stamina<br>\
+24 Intellect<br>\
Classes: Warlock<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 32.<br>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Dreadweave Shoulders', '<span class = "myPurple">\
Warlord\'s Dreadweave Mantle'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
115 Armor<br>\
+24 Stamina<br>\
+17 Intellect<br>\
Classes: Warlock<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 25.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Dreadweave Robe', '<span class = "myPurple">\
Warlord\'s Dreadweave Robe'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
153 Armor<br>\
+30 Stamina<br>\
+24 Intellect<br>\
Classes: Warlock<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 32.\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Dreadweave Gloves', '<span class = "myPurple">\
General\'s Dreadweave Gloves'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
68 Armor<br>\
+20 Stamina<br>\
+6 Intellect<br>\
Classes: Warlock<br>\
Durability 35/35<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases the damage dealt and health regained by your Death Coil spell by 8%.</br>\
Equip: Increases damage and healing done by magical spells and effects by up to 30.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Dreadweave Leggings', '<span class = "myPurple">\
General\'s Dreadweave Pants'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
135 Armor<br>\
+28 Stamina<br>\
+19 Intellect<br>\
Classes: Warlock<br>\
Durability 75/75<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 37.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Dreadweave Boots', '<span class = "myPurple">\
General\'s Dreadweave Boots'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
135 Armor<br>\
+22 Stamina<br>\
+13 Intellect<br>\
Classes: Warlock<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 26.</span>\
<p>';

//Warlock end

classCounter++;

//warrior begin

var battlegearPurple = '<span class = "myGreen">\
(2) Set: +20 Stamina.<br>\
(3) Set: Reduces the cooldown of your Intercept ability by 5 sec.<br>\
(6) Set: +40 Attack Power.\
</span>';

armorSetPvPEpic.setNameArray[classCounter] = ['<span class = "myYellow">\
Field Marshal\'s Battlegear (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Field Marshal\'s Plate Shoulderguards<br>\
&nbsp;Field Marshal\'s Plate Helm<br>\
&nbsp;Marshal\'s Plate Legguards<br>\
&nbsp;Field Marshal\'s Plate Armor<br>\
&nbsp;Marshal\'s Plate Boots<br>\
&nbsp;Marshal\'s Plate Gauntlets<br>\
</span>'+ battlegearPurple, '<span class = "myYellow">\
Warlord\'s Battlegear (0/6)<br>\
</span><span class = "myGray">\
&nbsp;General\'s Plate Boots<br>\
&nbsp;General\'s Plate Gauntlets<br>\
&nbsp;Warlord\'s Plate Armor<br>\
&nbsp;General\'s Plate Leggings<br>\
&nbsp;Warlord\'s Plate Headpiece<br>\
&nbsp;Warlord\'s Plate Shoulders<br>\
</span>'+ battlegearPurple];

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Plate Helm', '<span class = "myPurple">\
Warlord\'s Plate Headpiece'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
719 Armor<br>\
+28 Strength<br>\
+34 Stamina<br>\
Classes: Warrior<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Plate Shoulderguards', '<span class = "myPurple">\
Warlord\'s Plate Shoulders'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
626 Armor<br>\
+18 Strength<br>\
+16 Agility<br>\
+23 Stamina<br>\
Classes: Warrior<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Field Marshal\'s Plate Armor', '<span class = "myPurple">\
Warlord\'s Plate Armor'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
875 Armor<br>\
+16 Strength<br>\
+14 Agiliy<br>\
+33 Stamina<br>\
Classes: Warrior<br>\
Durability 165/165<br>\
Requires Level 60<br>\
Requires Rank 13<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Plate Gauntlets', '<span class = "myPurple">\
General\'s Plate Gauntlets'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
532 Armor<br>\
+20 Strength<br>\
+23 Stamina<br>\
Classes: Warrior<br>\
Durability 55/55<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Hamstring Rage cost reduced by 3.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Plate Legguards', '<span class = "myPurple">\
General\'s Plate Leggings'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
743 Armor<br>\
+20 Strength<br>\
+28 Stamina<br>\
Classes: Warrior<br>\
Durability 120/120<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.<br>\
Equip: Increases your chance to get a critical strike by 2%.\
</span>\
<p>';

t++;
armorSetPvPEpic.itemNameArray[t] = ['<span class = "myPurple">\
Marshal\'s Plate Boots', '<span class = "myPurple">\
General\'s Plate Boots'];

armorSetPvPEpic.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
592 Armor<br>\
+18 Strength<br>\
+12 Agility<br>\
+24 Stamina<br>\
Classes: Warrior<br>\
Durability 75/75<br>\
Requires Level 60<br>\
Requires Rank 12<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>';

//Warrior end

armorSetsArray[theArmorSetCounter] = armorSetPvPEpic;
armorSetsValues[theArmorSetCounter] = "pvpepic";
theArmorSetCounter++;

