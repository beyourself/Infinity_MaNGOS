var armorSetPvPSuperior = new armorSetObject("pvpsuperior");

armorSetPvPSuperior.slotsArray = new Array();

t = 0;
armorSetPvPSuperior.slotsArray[t] = "head"; t++;
armorSetPvPSuperior.slotsArray[t] = "shoulder"; t++;
armorSetPvPSuperior.slotsArray[t] = "chest"; t++;
armorSetPvPSuperior.slotsArray[t] = "hands"; t++;
armorSetPvPSuperior.slotsArray[t] = "legs"; t++;
armorSetPvPSuperior.slotsArray[t] = "feet"; t++;

armorSetPvPSuperior.slotsNumber = armorSetPvPSuperior.slotsArray.length;

armorSetPvPSuperior.statsArray = new Array();
armorSetPvPSuperior.itemNameArray = new Array();
armorSetPvPSuperior.setNameArray = new Array();
t = 0;

armorSetPvPSuperior.setNamesArray = new Array();
x = 0;
armorSetPvPSuperior.setNamesArray[x] = "Refuge"; x++;
armorSetPvPSuperior.setNamesArray[x] = "Pursuance"; x++;
armorSetPvPSuperior.setNamesArray[x] = "Arcanum"; x++;
armorSetPvPSuperior.setNamesArray[x] = "Redoubt"; x++;
armorSetPvPSuperior.setNamesArray[x] = "Investiture"; x++;
armorSetPvPSuperior.setNamesArray[x] = "Guard"; x++;
armorSetPvPSuperior.setNamesArray[x] = "Stormcaller"; x++;
armorSetPvPSuperior.setNamesArray[x] = "Dreadgear"; x++;
armorSetPvPSuperior.setNamesArray[x] = "Battlearmor"; x++;

classCounter = 0;
//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

//druid begin

var sanctuaryBlue = '<span class = "myGreen">\
(2) Set: +40 Attack Power<br>\
(4) Set: Increases your movement speed by 15% while in Bear, Cat, or Travel Form. Only active outdoors.<br>\
(6) Set: +20 Stamina\
</span>';

armorSetPvPSuperior.setNameArray[classCounter] = ['<span class = "myYellow">\
Lieutenant Commander\'s Refuge (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Lieutenant Commander\'s Dragonhide Shoulders<br>\
&nbsp;Lieutenant Commander\'s Dragonhide Headguard<br>\
&nbsp;Knight-Captain\'s Dragonhide Leggings<br>\
&nbsp;Knight-Captain\'s Dragonhide Chestpiece<br>\
&nbsp;Knight-Lieutenant\'s Dragonhide Treads<br>\
&nbsp;Knight-Lieutenant\'s Dragonhide Grips<br>\
</span>'+ sanctuaryBlue, '<span class = "myYellow">\
Champion\'s Refuge (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Blood Guard\'s Dragonhide Treads<br>\
&nbsp;Blood Guard\'s Dragonhide Grips<br>\
&nbsp;Legionnaire\'s Dragonhide Chestpiece<br>\
&nbsp;Legionnaire\'s Dragonhide Leggings<br>\
&nbsp;Champion\'s Dragonhide Headguard<br>\
&nbsp;Champion\'s Dragonhide Shoulders<br>\
</span>'+ sanctuaryBlue];

armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Dragonhide Headguard', '<span class = "myBlue">\
Champion\'s Dragonhide Headguard'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
198 Armor<br>\
+16 Strength<br>\
+12 Agility<br>\
+16 Stamina<br>\
+16 Intellect<br>\
+8 Spirit<br>\
Classes: Druid<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 18.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Dragonhide Shoulders', '<span class = "myBlue">\
Champion\'s Dragonhide Shoulders'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
206 Armor<br>\
+12 Strength<br>\
+6 Agility<br>\
+12 Stamina<br>\
+12 Intellect<br>\
+6 Spirit<br>\
Classes: Druid<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 14.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Dragonhide Chestpiece', '<span class = "myBlue">\
Legionnaire\'s Dragonhide Chestpiece'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
218 Armor<br>\
+13 Strength<br>\
+12 Agility<br>\
+13 Stamina<br>\
+12 Intellect<br>\
Classes: Druid<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 15.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Dragonhide Grips', '<span class = "myBlue">\
Blood Guard\'s Dragonhide Grips'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
115 Armor<br>\
+13 Strength<br>\
+10 Agility<br>\
+12 Stamina<br>\
+9 Intellect<br>\
Classes: Druid<br>\
Durability 35/35<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Slightly increases your stealth detection.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Dragonhide Leggings', '<span class = "myBlue">\
Legionnaire\'s Dragonhide Leggings'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
215 Armor<br>\
+12 Strength<br>\
+12 Agility<br>\
+12 Stamina<br>\
+12 Intellect<br>\
+5 Spirit<br>\
Classes: Druid<br>\
Durability 75/75<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 14.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Dragonhide Treads', '<span class = "myBlue">\
Blood Guard\'s Dragonhide Treads'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
126 Armor<br>\
+13 Strength<br>\
+6 Agility<br>\
+13 Stamina<br>\
+6 Intellect<br>\
+6 Spirit<br>\
Classes: Druid<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 14.</span>\
<p>';

//druid end

classCounter++;

//hunter begin



var pursuitBlue = '<span class = "myGreen">\
(2) Set: +20 Agility.<br>\
(4) Set: Reduces the cooldown of your Concussive Shot by 1 sec.<br>\
(6) Set: +20 Stamina.\
</span>';

armorSetPvPSuperior.setNameArray[classCounter] = ['<span class = "myYellow">\
Lieutenant Commander\'s Pursuance (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Lieutenant Commander\'s Chain Shoulders<br>\
&nbsp;Lieutenant Commander\'s Chain Helm<br>\
&nbsp;Knight-Captain\'s Chain Legguards<br>\
&nbsp;Knight-Captain\'s Chain Hauberk<br>\
&nbsp;Knight-Lieutenant\'s Chain Greaves<br>\
&nbsp;Knight-Lieutenant\'s Chain Vices<br>\
</span>'+ pursuitBlue, '<span class = "myYellow">\
Champion\'s Pursuance (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Blood Guard\'s Chain Greaves<br>\
&nbsp;Blood Guard\'s Chain Vices<br>\
&nbsp;Legionnaire\'s Chain Hauberk<br>\
&nbsp;Legionnaire\'s Chain Legguards<br>\
&nbsp;Champion\'s Chain Helm<br>\
&nbsp;Champion\'s Chain Shoulders<br>\
</span>'+ pursuitBlue];

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Chain Helm', '<span class = "myBlue">\
Champion\'s Chain Helm'];


armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
337 Armor<br>\
+18 Agility<br>\
+14 Stamina<br>\
+9 Intellect<br>\
Classes: Hunter<br>\
Durability 70/70<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 2%.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Chain Shoulders', '<span class = "myBlue">\
Champion\'s Chain Shoulders'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
311 Armor<br>\
+18 Agility<br>\
+13 Stamina<br>\
Classes: Hunter<br>\
Durability 70/70<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Chain Hauberk', '<span class = "myBlue">\
Legionnaire\'s Chain Hauberk'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
398 Armor<br>\
+16 Agility<br>\
+13 Stamina<br>\
+6 Intellect<br>\
Classes: Hunter<br>\
Durability 120/120<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 2%.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Chain Vices', '<span class = "myBlue">\
Blood Guard\'s Chain Vices'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
242 Armor<br>\
+18 Agility<br>\
+16 Stamina<br>\
Classes: Hunter<br>\
Durability 40/40<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases the damage done by your Multi-Shot by 4%.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Chain Legguards', '<span class = "myBlue">\
Legionnaire\'s Chain Legguards'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
348 Armor<br>\
+16 Agility<br>\
+13 Stamina<br>\
+6 Intellect<br>\
Classes: Hunter<br>\
Durability 90/90<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 2%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Chain Greaves', '<span class = "myBlue">\
Blood Guard\'s Chain Greaves'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
266 Armor<br>\
+20 Agility<br>\
+19 Stamina<br>\
Classes: Hunter<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 7\
<span class = "myGreen">\
</span>\
<p>';

//hunter end

classCounter++;

//mage begin

var regaliaBlue = '<span class = "myGreen">\
(2) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(4) Set: Reduces the cooldown of your Blink spell by 1.5 sec.<br>\
(6) Set:  +20 Stamina.\
</span>';

armorSetPvPSuperior.setNameArray[classCounter] = ['<span class = "myYellow">\
Lieutenant Commander\'s Arcanum (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Lieutenant Commander\'s Silk Mantle<br>\
&nbsp;Lieutenant Commander\'s Silk Cowl<br>\
&nbsp;Knight-Captain\'s Silk Legguards<br>\
&nbsp;Knight-Captain\'s Silk Tunic<br>\
&nbsp;Knight-Lieutenant\'s Silk Walkers<br>\
&nbsp;Knight-Lieutenant\'s Silk Handwraps<br>\
</span>'+ regaliaBlue, '<span class = "myYellow">\
Champion\'s Arcanum (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Blood Guard\'s Silk Walkers<br>\
&nbsp;Blood Guard\'s Silk Handwraps<br>\
&nbsp;Legionnaire\'s Silk Tunic<br>\
&nbsp;Legionnaire\'s Silk Legguards<br>\
&nbsp;Champion\'s Silk Cowl<br>\
&nbsp;Champion\'s Silk Mantle<br>\
</span>'+ regaliaBlue];

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Silk Cowl', '<span class = "myBlue">\
Champion\'s Silk Cowl'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
141 Armor<br>\
+19 Stamina<br>\
+18 Intellect<br>\
+6 Spirit<br>\
Classes: Mage<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 21.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Silk Mantle', '<span class = "myBlue">\
Champion\'s Silk Mantle'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
135 Armor<br>\
+14 Stamina<br>\
+11 Intellect<br>\
+4 Spirit<br>\
Classes: Mage<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 15.<br>\
Equp: Improves your chance to get a critical strike with spells by 1%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Silk Tunic', '<span class = "myBlue">\
Legionnaires\'s Silk Tunic'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
156 Armor<br>\
+18 Stamina<br>\
+17 Intellect<br>\
+5 Spirit<br>\
Classes: Mage<br>\
Durability 80/80<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 21.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Silk Handwraps', '<span class = "myBlue">\
Blood Guard\'s Silk Handwraps'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
98 Armor<br>\
+12 Stamina<br>\
+10 Intellect<br>\
Classes: Mage<br>\
Durability 30/30<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases the damage absorbed by your Mana Shield by 285.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 18.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Silk Legguards', '<span class = "myBlue">\
Legionnaire\'s Silk Legguards'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
144 Armor<br>\
+18 Stamina<br>\
+17 Intellect<br>\
+5 Spirit<br>\
Classes: Mage<br>\
Durability 65/65<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Silk Walkers', '<span class = "myBlue">\
Blood Guard\'s Silk Walkers'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
104 Armor<br>\
+15 Stamina<br>\
+10 Intellect<br>\
Classes: Mage<br>\
Durability 40/40<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 15.<br>\
Equip: Improves your chance to hit with spells by 1%.</span>\
<p>';

//mage end

classCounter++;

//paladin begin

var aegisBlue = '<span class = "myGreen">\
(2) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(4) Set: Reduces the cooldown of your Hammer of Justice by 10 sec.<br>\
(6) Set: +20 Stamina.\
</span>';

armorSetPvPSuperior.setNameArray[classCounter] = ['<span class = "myYellow">\
Lieutenant Commander\'s Redoubt (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Lieutenant Commander\'s Lamellar Shoulders<br>\
&nbsp;Lieutenant Commander\'s Lamellar Headguard<br>\
&nbsp;Knight-Captain\'s Lamellar Leggings<br>\
&nbsp;Knight-Captain\'s Lamellar Breastplate<br>\
&nbsp;Knight-Lieutenant\'s Lamellar Sabatons<br>\
&nbsp;Knight-Lieutenant\'s Lamellar Gauntlets<br>\
</span>'+ aegisBlue, ''];

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Lamellar Headguard', ''];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
598 Armor<br>\
+18 Strength<br>\
+19 Stamina<br>\
+12 Intellect<br>\
Classes: Paladin<br>\
Durability 80/80<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Increases damage and healing done by magical spells and effects by up to 26.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Lamellar Shoulders', ''];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
552 Armor<br>\
+14 Strength<br>\
+14 Stamina<br>\
+8 Intellect<br>\
Classes: Paladin<br>\
Durability 80/80<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 20.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Lamellar Breastplate', ''];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
706 Armor<br>\
+17 Strength<br>\
+18 Stamina<br>\
+12 Intellect<br>\
Classes: Paladin<br>\
Durability 135/135<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 25.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Lamellar Gauntlets', ''];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
429 Armor<br>\
+12 Strength<br>\
+13 Stamina<br>\
Classes: Paladin<br>\
Durability 45/45<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases the Holy damage bonus of your Judgement of the Crusader by 10.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Lamellar Leggings', ''];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
618 Armor<br>\
+18 Strength<br>\
+17 Stamina<br>\
+12 Intellect<br>\
Classes: Paladin<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 25.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Lamellar Sabatons', ''];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
472 Armor<br>\
+12 Strength<br>\
+12 Stamina<br>\
+12 Intellect<br>\
Classes: Paladin<br>\
Durability 65/65<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 15.\
</span>\
<p>';

//Paladin end

classCounter++;

//priest begin

var raimentBlue = '<span class = "myGreen">\
(2) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(4) Set: Increases the duration of your Psychic Scream spell by 1 sec.<br>\
(6) Set: +20 Stamina.\
</span>';

armorSetPvPSuperior.setNameArray[classCounter] = ['<span class = "myYellow">\
Lieutenant Commander\'s Investiture (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Lieutenant Commander\'s Satin Mantle<br>\
&nbsp;Lieutenant Commander\'s Satin Hood<br>\
&nbsp;Knight-Captain\'s Satin Legguards<br>\
&nbsp;Knight-Captain\'s Satin Tunic<br>\
&nbsp;Knight-Lieutenant\'s Satin Walkers<br>\
&nbsp;Knight-Lieutenant\'s Satin Handwraps<br>\
</span>'+ raimentBlue, '<span class = "myYellow">\
Champion\'s Investiture (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Blood Guard\'s Satin Walkers<br>\
&nbsp;Blood Guard\'s Satin Handwraps<br>\
&nbsp;Legionnaire\'s Satin Tunic<br>\
&nbsp;Legionnaire\'s Satin Legguards<br>\
&nbsp;Champion\'s Satin Hood<br>\
&nbsp;Champion\'s Satin Mantle<br>\
</span>'+ raimentBlue];

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Satin Hood', '<span class = "myBlue">\
Champion\'s Satin Hood'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
131 Armor<br>\
+20 Stamina<br>\
+18 Intellect<br>\
Classes: Priest<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Restores 6 mana per 5 sec.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Satin Mantle', '<span class = "myBlue">\
Champion\'s Satin Mantle'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
115 Armor<br>\
+14 Stamina<br>\
+12 Intellect<br>\
Classes: Priest<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 16.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Satin Tunic', '<span class = "myBlue">\
Legionnaire\'s Satin Tunic'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
156 Armor<br>\
+19 Stamina<br>\
+15 Intellect<br>\
Classes: Priest<br>\
Durability 80/80<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Restores 6 mana per 5 sec.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Satin Handwraps', '<span class = "myBlue">\
Blood Guard\'s Satin Handwraps'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
98 Armor<br>\
+12 Stamina<br>\
+5 Intellect<br>\
Classes: Priest<br>\
Durability 30/30<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Gives you a 50% chance to avoid interruption caused by damage while casting Mind Blast.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 21.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Satin Legguards', '<span class = "myBlue">\
Legionnaire\'s Satin Legguards'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
144 Armor<br>\
+19 Stamina<br>\
+15 Intellect<br>\
Classes: Priest<br>\
Durability 65/65<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Satin Walkers', '<span class = "myBlue">\
Blood Guard\'s Satin Walkers'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
64 Armor<br>\
+17 Stamina<br>\
+15 Intellect<br>\
Classes: Priest<br>\
Durability 40/40<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 14.</span>\
<p>';

//priest end

classCounter++;

//rogue begin

var vestmentsBlue = '<span class = "myGreen">\
(2) Set: +40 Attack Power.<br>\
(4) Set: Reduces the cooldown of your Gouge ability by 1 sec.<br>\
(6) Set: +20 Stamina.\
</span>';

armorSetPvPSuperior.setNameArray[classCounter] = ['<span class = "myYellow">\
Lieutenant Commander\'s Guard (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Lieutenant Commander\'s Leather Helm<br>\
&nbsp;Lieutenant Commander\'s Leather Shoulders<br>\
&nbsp;Knight-Captain\'s Leather Legguards<br>\
&nbsp;Knight-Captain\'s Leather Chestpiece<br>\
&nbsp;Knight-Lieutenant\'s Leather Walkers<br>\
&nbsp;Knight-Lieutenant\'s Leather Grips<br>\
</span>'+ vestmentsBlue, '<span class = "myYellow">\
Champion\'s Guard (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Blood Guard\'s Leather Walkers<br>\
&nbsp;Blood Guard\'s Leather Grips<br>\
&nbsp;Legionnaire\'s Leather Chestpiece<br>\
&nbsp;Legionnaire\'s Leather Legguards<br>\
&nbsp;Champion\'s Leather Helm<br>\
&nbsp;Champion\'s Leather Shoulders<br>\
</span>'+ vestmentsBlue];

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Leather Helm', '<span class = "myBlue">\
Champion\'s Leather Helm'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
238 Armor<br>\
+23 Stamina<br>\
Classes: Rogue<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: +36 Attack Power.<br>\
Equip: Improves your chance to hit by 1%.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Leather Shoulders', '<span class = "myBlue">\
Champion\'s Leather Shoulders'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
196 Armor<br>\
+17 Stamina<br>\
Classes: Rogue<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: +22 Attack Power.<br>\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Leather Chestpiece', '<span class = "myBlue">\
Legionnaire\'s Leather Chestpiece'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
248 Armor<br>\
+22 Stamina<br>\
Classes: Rogue<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 1%.<br>\
Equip: +34 Attack Power.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Leather Grips', '<span class = "myBlue">\
Blood Guard\'s Leather Grips'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
155 Armor<br>\
+18 Stamina<br>\
Classes: Rogue<br>\
Durability 35/35<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: +20 Attack Power.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Leather Legguards', '<span class = "myBlue">\
Legionnaire\'s Leather Legguards'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
225 Armor<br>\
+22 Stamina<br>\
Classes: Rogue<br>\
Durability 75/75<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 1%.<br>\
Equip: +34 Attack Power.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Leather Walkers', '<span class = "myBlue">\
Blood Guard\'s Leather Walkers'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
166 Armor<br>\
+18 Stamina<br>\
Classes: Rogue<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases the duration of your Sprint ability by 3 sec.<br>\
Equip: +28 Attack Power.\
</span>\
<p>';

//Rogue end

classCounter++;

//shaman begin

var earthshakerBlue = '<span class = "myGreen">\
(2) Set: +40 Attack Power.<br>\
(4) Set: Improves your chance to get a critical strike with all Shock spells by 2%.<br>\
(6) Set: +20 Stamina.\
</span>';

armorSetPvPSuperior.setNameArray[classCounter] = ['', '<span class = "myYellow">\
Champion\'s Stormcaller (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Blood Guard\'s Mail Greaves<br>\
&nbsp;Blood Guard\'s Mail Vices<br>\
&nbsp;Legionnaire\'s Mail Hauberk<br>\
&nbsp;Legionnaire\'s Mail Legguards<br>\
&nbsp;Champion\'s Mail Headguard<br>\
&nbsp;Champion\'s Mail Pauldrons<br>\
</span>'+ earthshakerBlue];

t++;
armorSetPvPSuperior.itemNameArray[t] = ['', '<span class = "myBlue">\
Champion\'s Mail Headguard'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
337 Armor<br>\
+6 Strength<br>\
+24 Stamina<br>\
+16 Intellect<br>\
Classes: Shaman<br>\
Durability 70/70<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['', '<span class = "myBlue">\
Champion\'s Mail Pauldrons'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
311 Armor<br>\
+5 Strength<br>\
+16 Stamina<br>\
+10 Intellect<br>\
Classes: Shaman<br>\
Durability 70/70<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 15.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['', '<span class = "myBlue">\
Legionnaire\'s Mail Hauberk'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
398 Armor<br>\
+17 Strength<br>\
+18 Stamina<br>\
+18 Intellect<br>\
Classes: Shaman<br>\
Durability 120/120<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['', '<span class = "myBlue">\
Blood Guard\'s Mail Vices'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
242 Armor<br>\
+15 Stamina<br>\
+9 Intellect<br>\
Classes: Shaman<br>\
Durability 40/40<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 13.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['', '<span class = "myBlue">\
Legionnaire\'s Mail Legguards'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
348 Armor<br>\
+18 Stamina<br>\
+17 Intellect<br>\
Classes: Shaman<br>\
Durability 90/90<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['', '<span class = "myBlue">\
Blood Guard\'s Mail Greaves'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
266 Armor<br>\
+13 Strength<br>\
+14 Stamina<br>\
+12 Intellect<br>\
Classes: Shaman<br>\
Durability 60/60<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases the speed of your Ghost Wolf ability by 15%.</span>\
<p>';


//Shaman end

classCounter++;

//warlock begin

var threadsBlue = '<span class = "myGreen">\
(2) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(4) Set: Reduces the casting time of your Immolate spell by 0.2  sec.<br>\
(6) Set: +20 Stamina.\
</span>';

armorSetPvPSuperior.setNameArray[classCounter] = ['<span class = "myYellow">\
Lieutenant Commander\'s Dreadgear (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Lieutenant Commander\'s Dreadweave Spaulders<br>\
&nbsp;Lieutenant Commander\'s Dreadweave Cowl<br>\
&nbsp;Knight-Captain\'s Dreadweave Legguards<br>\
&nbsp;Knight-Captain\'s Dreadweave Tunic<br>\
&nbsp;Knight-Lieutenant\'s Dreadweave Walkers<br>\
&nbsp;Knight-Lieutenant\'s Dreadweave Handwraps<br>\
</span>'+ threadsBlue, '<span class = "myYellow">\
Champion\'s Dreadgear (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Blood Guard\'s Dreadweave Walkers<br>\
&nbsp;Blood Guard\'s Dreadweave Handwraps<br>\
&nbsp;Legionnaire\'s Dreadweave Tunic<br>\
&nbsp;Legionnaire\'s Dreadweave Legguards<br>\
&nbsp;Champion\'s Dreadweave Cowl<br>\
&nbsp;Champion\'s Dreadweave Spaulders<br>\
</span>'+ threadsBlue];

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Dreadweave Cowl', '<span class = "myBlue">\
Champion\'s Dreadweave Cowl'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
81 Armor<br>\
+21 Stamina<br>\
+18 Intellect<br>\
Classes: Warlock<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Dreadweave Spaulders', '<span class = "myBlue">\
Champion\'s Dreadweave Spaulders'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
75 Armor<br>\
+17 Stamina<br>\
+13 Intellect<br>\
Classes: Warlock<br>\
Durability 50/50<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Dreadweave Tunic', '<span class = "myBlue">\
Legionnaire\'s Dreadweave Tunic'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
96 Armor<br>\
+20 Stamina<br>\
+20 Intellect<br>\
Classes: Warlock<br>\
Durability 80/80<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 25.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Dreadweave Handwraps', '<span class = "myBlue">\
Blood Guard\'s Dreadweave Handwraps'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
58 Armor<br>\
+14 Stamina<br>\
+4 Intellect<br>\
Classes: Warlock<br>\
Durability 30/30<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases the damage dealt and health regained by your Death Coil spell by 8%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 21.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Dreadweave Legguards', '<span class = "myBlue">\
Legionnaire\'s Dreadweave Legguards'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
84 Armor<br>\
+21 Stamina<br>\
+13 Intellect<br>\
Classes: Warlock<br>\
Durability 65/65<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 28.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Dreadweave Walkers', '<span class = "myBlue">\
Blood Guard\'s Dreadweave Walkers'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
64 Armor<br>\
+17 Stamina<br>\
+13 Intellect<br>\
Classes: Warlock<br>\
Durability 40/40<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 18.</span>\
<p>';

//Warlock end

classCounter++;

//warrior begin

var battlegearBlue = '<span class = "myGreen">\
(2) Set: +40 Attack Power.<br>\
(4) Set: Reduces the cooldown of your Intercept ability by 5 sec.<br>\
(6) Set: +20 Stamina.\
</span>';

armorSetPvPSuperior.setNameArray[classCounter] = ['<span class = "myYellow">\
Lieutenant Commander\'s Battlearmor (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Lieutenant Commander\'s Plate Shoulders<br>\
&nbsp;Lieutenant Commander\'s Plate Helm<br>\
&nbsp;Knight-Captain\'s Plate Leggings<br>\
&nbsp;Knight-Captain\'s Plate Hauberk<br>\
&nbsp;Knight-Lieutenant\'s Plate Greaves<br>\
&nbsp;Knight-Lieutenant\'s Plate Gauntlets<br>\
</span>'+ battlegearBlue, '<span class = "myYellow">\
Champion\'s Battlearmor (0/6)<br>\
</span><span class = "myGray">\
&nbsp;Blood Guard\'s Plate Greaves<br>\
&nbsp;Blood Guard\'s Plate Gauntlets<br>\
&nbsp;Legionnaire\'s Plate Hauberk<br>\
&nbsp;Legionnaire\'s Plate Leggings<br>\
&nbsp;Champion\'s Plate Helm<br>\
&nbsp;Champion\'s Plate Shoulders<br>\
</span>'+ battlegearBlue];

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Plate Helm', '<span class = "myBlue">\
Champion\'s Plate Helm'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
598 Armor<br>\
+21 Strength<br>\
+24 Stamina<br>\
Classes: Warrior<br>\
Durability 80/80<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Lieutenant Commander\'s Plate Shoulders', '<span class = "myBlue">\
Champion\'s Plate Shoulders'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
552 Armor<br>\
+17 Strength<br>\
+18 Stamina<br>\
Classes: Warrior<br>\
Durability 80/80<br>\
Requires Level 60<br>\
Requires Rank 10<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Plate Hauberk', '<span class = "myBlue">\
Legionnaire\'s Plate Hauberk'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
706 Armor<br>\
+21 Strength<br>\
+23 Stamina<br>\
Classes: Warrior<br>\
Durability 135/135<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant\'s Plate Gauntlets', '<span class = "myBlue">\
Blood Guard\'s Plate Gauntlets'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
429 Armor<br>\
+17 Strength<br>\
+17 Stamina<br>\
Classes: Warrior<br>\
Durability 45/45<br>\
Requires Level 60<br>\
Requires Rank 7<br>\
<span class = "myGreen">\
Equip: Hamstring Rage cost reduced by 3.</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Captain\'s Plate Leggings', '<span class = "myBlue">\
Legionnaire\'s Plate Leggings'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
618 Armor<br>\
+12 Strength<br>\
+17 Stamina<br>\
Classes: Warrior<br>\
Durability 100/100<br>\
Requires Level 60<br>\
Requires Rank 8<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 2%.\
</span>\
<p>';

t++;
armorSetPvPSuperior.itemNameArray[t] = ['<span class = "myBlue">\
Knight-Lieutenant Plate Greaves', '<span class = "myBlue">\
Blood Guard\'s Plate Greaves'];

armorSetPvPSuperior.statsArray[t] = '</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
472 Armor<br>\
+10 Strength<br>\
+9 Agility<br>\
+23 Stamina<br>\
Classes: Warrior<br>\
Durability 65/65<br>\
Requires Level 60<br>\
Requires Rank 7\
<span class = "myGreen">\
</span>\
<p>';

//Warrior end

armorSetsArray[theArmorSetCounter] = armorSetPvPSuperior;
armorSetsValues[theArmorSetCounter] = "pvpsuperior";
theArmorSetCounter++;

