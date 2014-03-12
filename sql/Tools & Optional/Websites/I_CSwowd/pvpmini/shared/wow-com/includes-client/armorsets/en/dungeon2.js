var armorSetDungeon2 = new armorSetObject("dungeon2");

armorSetDungeon2.slotsArray = new Array();
t = 0;
armorSetDungeon2.slotsArray[t] = "head"; t++;
armorSetDungeon2.slotsArray[t] = "shoulder"; t++;
armorSetDungeon2.slotsArray[t] = "chest"; t++;
armorSetDungeon2.slotsArray[t] = "wrist"; t++;
armorSetDungeon2.slotsArray[t] = "hands"; t++;
armorSetDungeon2.slotsArray[t] = "waist"; t++;
armorSetDungeon2.slotsArray[t] = "legs"; t++;
armorSetDungeon2.slotsArray[t] = "feet"; t++;

armorSetDungeon2.slotsNumber = armorSetDungeon2.slotsArray.length;

//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

armorSetDungeon2.setNamesArray = new Array();
t = 0;
armorSetDungeon2.setNamesArray[t] = "Feralheart Raiment"; t++;
armorSetDungeon2.setNamesArray[t] = "Beastmaster Armor"; t++;
armorSetDungeon2.setNamesArray[t] = "Sorcerer's Regalia"; t++;
armorSetDungeon2.setNamesArray[t] = "Soulforge Armor"; t++;
armorSetDungeon2.setNamesArray[t] = "Vestments of the Virtuous"; t++;
armorSetDungeon2.setNamesArray[t] = "Darkmantle Armor"; t++;
armorSetDungeon2.setNamesArray[t] = "The Five Thunders"; t++;
armorSetDungeon2.setNamesArray[t] = "Deathmist Raiment"; t++;
armorSetDungeon2.setNamesArray[t] = "Battlegear of Heroism"; t++;

armorSetDungeon2.statsArray = new Array();
t = 0;

//druid begin
var feralheart = '<span class = "myYellow">\
Feralheart Rainment (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Feralheart Belt<br>\
&nbsp;Feralheart Boots<br>\
&nbsp;Feralheart Bracers<br>\
&nbsp;Feralheart Cowl<br>\
&nbsp;Feralheart Gloves<br>\
&nbsp;Feralheart Kilt<br>\
&nbsp;Feralheart Spaulders<br>\
&nbsp;Feralheart Vest<br>\
</span><span class = "myGreen">\
(2) Set: +8 All Resistances.<br>\
(4) Set: When struck in combat has a chance of returning 300 mana, 10 rage, or 40 energy to the wearer.<br>\
(6) Set: Increases damage and healing done by magical spells and effects by up to 15.<br>\
(6) Set: +26 Attack Power.<br>\
(8) Set: +200 Armor\
</span>';


armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Feralheart Cowl</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
150 Armor<br>\
+14 Strength<br>\
+9 Agility<br>\
+17 Stamina<br>\
+17 Intellect<br>\
+16 Spirit<br>\
Durability 70/70<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 16.</span>\
<p>'+ feralheart +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Feralheart Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
136 Armor<br>\
+8 Strength<br>\
+5 Agility<br>\
+9 Stamina<br>\
+16 Intellect<br>\
+8 Spirit<br>\
Durability 60/60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 6.<br>\
Equip: Restores 2 mana per 5 sec.\
</span>\
<p>'+ feralheart +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Feralheart Vest</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
185 Armor<br>\
+16 Strength<br>\
+9 Agility<br>\
+17 Stamina<br>\
+17 Intellect<br>\
+14 Spirit<br>\
Durability 120/120<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p>'+ feralheart +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Feralheart Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
79 Armor<br>\
+6 Strength<br>\
+6 Agility<br>\
+6 Stamina<br>\
+12 Intellect<br>\
+5 Spirit<br>\
Durability 35/35<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 5.\
</span>\
<p>'+ feralheart +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Feralheart Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
108 Armor<br>\
+10 Strength<br>\
+9 Agility<br>\
+10 Stamina<br>\
+12 Intellect<br>\
+10 Spirit<br>\
Durability 40/40<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 11.</span>\
<p>'+ feralheart +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Feralheart Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
102 Armor<br>\
+6 Strength<br>\
+7 Agility<br>\
+9 Stamina<br>\
+12 Intellect<br>\
+8 Spirit<br>\
Durability 35/35<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 7.\
</span>\
<p>'+ feralheart +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Feralheart Kilt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
160 Armor<br>\
+14 Strength<br>\
+12 Agility<br>\
+14 Stamina<br>\
+14 Intellect<br>\
+14 Spirit<br>\
Durability 75/75<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 9.\
</span>\
<p>'+ feralheart +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Feralheart Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
127 Armor<br>\
+12 Strength<br>\
+7 Agility<br>\
+13 Stamina<br>\
+12 Intellect<br>\
+10 Spirit<br>\
Durability 60/60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 11.<br>\
Equip: Restores 2 mana per 5 sec.</span>\
<p>'+ feralheart +'</span></td></tr></table>';

//druid end

//hunter begin

var beastmaster = '<span class = "myYellow">\
Beastmaster Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Beastmaster\'s Belt<br>\
&nbsp;Beastmaster\'s Bindings<br>\
&nbsp;Beastmaster\'s Boots<br>\
&nbsp;Beastmaster\'s Cap<br>\
&nbsp;Beastmaster\'s Gloves<br>\
&nbsp;Beastmaster\'s Mantle<br>\
&nbsp;Beastmaster\'s Pants<br>\
&nbsp;Beastmaster\'s Tunic<br>\
</span><span class = "myGreen">\
(2) Set: +8 All Resistances.<br>\
(4) Set: Your normal ranged attacks have a 4% chance of restoring 200 mana.<br>\
(6) Set: +40 Attack Power.<br>\
(8) Set: +200 Armor\
</span>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Beastmaster\'s Cap</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
314 Armor<br>\
+22 Agility<br>\
+21 Stamina<br>\
+12 Intellect<br>\
Durability 85/85<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.<br>\
Equip: Increases your pet\'s maximum health by 3%.</span>\
<p>'+ beastmaster +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beastmaster\'s Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
286 Armor<br>\
+12 Agility<br>\
+18 Stamina<br>\
+10 Intellect<br>\
Durability 70/70<br>\
<span class = "myGreen">\
</span>\
<p>'+ beastmaster +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Beastmaster\'s Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
387 Armor<br>\
+25 Agility<br>\
+16 Stamina<br>\
+13 Intellect<br>\
Durability 140/140<br>\
<span class = "myGreen">\
Equip: Increases your pet\'s armor by 10%.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ beastmaster +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beastmaster\'s Bindings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
167 Armor<br>\
+16 Agility<br>\
+7 Stamina<br>\
+5 Intellect<br>\
Durability 40/40<br>\
<span class = "myGreen">\
</span>\
<p>'+ beastmaster +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Beastmaster\'s Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
223 Armor<br>\
+14 Agility<br>\
+12 Stamina<br>\
+10 Intellect<br>\
Durability 50/50<br>\
<span class = "myGreen">\
Equip: Increases your pet\'s critical strike chance by 2%.</span>\
<p>'+ beastmaster +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beastmaster\'s Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
214 Armor<br>\
+16 Agility<br>\
+16 Stamina<br>\
+10 Intellect<br>\
Durability 40/40<br>\
<span class = "myGreen">\
</span>\
<p>'+ beastmaster +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beastmaster\'s Pants</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
339 Armor<br>\
+28 Agility<br>\
+14 Stamina<br>\
+9 Intellect<br>\
Durability 90/90<br>\
<span class = "myGreen">\
</span>\
<p>'+ beastmaster +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Beastmaster\'s Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
266 Armor<br>\
+24 Agility<br>\
+9 Stamina<br>\
Durability 70/70<br>\
<span class = "myGreen">\
Equip: Increases damage dealt by your pet by 3%.</span>\
<p>'+ beastmaster +'</span></td></tr></table>';

//hunter end

//mage begin

var sorcerer = '<span class = "myYellow">\
Sorcerer\'s Regalia (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Sorcerer\'s Belt<br>\
&nbsp;Sorcerer\'s Bindings<br>\
&nbsp;Sorcerer\'s Boots<br>\
&nbsp;Sorcerer\'s Crown<br>\
&nbsp;Sorcerer\'s Gloves<br>\
&nbsp;Sorcerer\'s Leggings<br>\
&nbsp;Sorcerer\'s Mantle<br>\
&nbsp;Sorcerer\'s Robes<br>\
</span><span class = "myGreen">\
(2) Set: +8 All Resistances.<br>\
(4) Set: When struck in combat has a chance of freezing the attacker in place for 3 sec.<br>\
(6) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(8) Set: +200 Armor\
</span>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Sorcerer\'s Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
75 Armor<br>\
+16 Stamina<br>\
+25 Intellect<br>\
+14 Spirit<br>\
Durability 60/60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 11.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
</span>\
<p>'+ sorcerer +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Sorcerer\'s Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
69 Armor<br>\
+11 Stamina<br>\
+17 Intellect<br>\
+7 Spirit<br>\
Durability 50/50<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 9.\
</span>\
<p>'+ sorcerer +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Sorcerer\'s Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
93 Armor<br>\
+14 Stamina<br>\
+25 Intellect<br>\
+9 Spirit<br>\
Durability 100/100<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 16.<br>\
Equip: Decreases the magical resistances of your spell targets by 20.</span>\
<p>'+ sorcerer +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Sorcerer\'s Bindings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
40 Armor<br>\
+8 Stamina<br>\
+12 Intellect<br>\
+5 Spirit<br>\
Durability 30/30<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 8.\
</span>\
<p>'+ sorcerer +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Sorcerer\'s Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
54 Armor<br>\
+12 Stamina<br>\
+14 Intellect<br>\
+10 Spirit<br>\
Durability 35/35<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Improves your chance to hit with spells by 1%.</span>\
<p>'+ sorcerer +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Sorcerer\'s Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
52 Armor<br>\
+12 Stamina<br>\
+14 Intellect<br>\
+7 Spirit<br>\
Durability 30/30<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 14.\
</span>\
<p>'+ sorcerer +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Sorcerer\'s Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
81 Armor<br>\
+17 Stamina<br>\
+22 Intellect<br>\
+10 Spirit<br>\
Durability 65/65<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 16.\
</span>\
<p>'+ sorcerer +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Sorcerer\'s Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
64 Armor<br>\
+14 Stamina<br>\
+16 Intellect<br>\
+10 Spirit<br>\
Durability 50/50<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 21.</span>\
<p>'+ sorcerer +'</span></td></tr></table>';

//mage end

//paladin begin

var soulforge = '<span class = "myYellow">\
Soulforge Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Soulforge Belt<br>\
&nbsp;Soulforge Boots<br>\
&nbsp;Soulforge Bracers<br>\
&nbsp;Soulforge Breastplate<br>\
&nbsp;Soulforge Gauntlets<br>\
&nbsp;Soulforge Helm<br>\
&nbsp;Soulforge Legplates<br>\
&nbsp;Soulforge Spaulders<br>\
</span><span class = "myGreen">\
(2) Set: +8 All Resistances.<br>\
(4) Set: Chance on melee attack to increase your damage and healing done by magical spells and effects by up to 95 for 10 sec.<br>\
(6) Set: +40 Attack Power.<br>\
(8) Set: +200 Armor\
</span>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Soulforge Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
556 Armor<br>\
+16 Strength<br>\
+17 Stamina<br>\
+17 Intellect<br>\
+12 Spirit<br>\
Durability 100/100<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 14.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ soulforge +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Soulforge Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
507 Armor<br>\
+10 Strength<br>\
+11 Stamina<br>\
+11 Intellect<br>\
Durability 80/80<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Restores 4 mana per 5 sec.\
</span>\
<p>'+ soulforge +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Soulforge Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
684 Armor<br>\
+16 Strength<br>\
+17 Stamina<br>\
+17 Intellect<br>\
+12 Spirit<br>\
Durability 165/165<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 14.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ soulforge +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Soulforge Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
296 Armor<br>\
+9 Strength<br>\
+10 Stamina<br>\
+9 Intellect<br>\
Durability 45/45<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 8.</span>\
<p>'+ soulforge +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Soulforge Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
393 Armor<br>\
+9 Strength<br>\
+10 Stamina<br>\
+10 Intellect<br>\
Durability 55/55<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 11.<br>\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ soulforge +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Soulforge Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
380 Armor<br>\
+10 Strength<br>\
+11 Stamina<br>\
+11 Intellect<br>\
Durability 45/45<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p>'+ soulforge +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Soulforge Legplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
601 Armor<br>\
+16 Strength<br>\
+17 Stamina<br>\
+17 Intellect<br>\
+10 Spirit<br>\
Durability 100/100<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 11.</span>\
<p>'+ soulforge +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Soulforge Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
470 Armor<br>\
+12 Strength<br>\
+13 Stamina<br>\
+12 Intellect<br>\
+10 Spirit<br>\
Durability 75/75<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p>'+ soulforge +'</span></td></tr></table>';

//paladin end

//priest begin

var virtuous = '<span class = "myYellow">\
Vestments of the Virtuous (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Virtuous Belt<br>\
&nbsp;Virtuous Bracers<br>\
&nbsp;Virtuous Crown<br>\
&nbsp;Virtuous Gloves<br>\
&nbsp;Virtuous Mantle<br>\
&nbsp;Virtuous Robe<br>\
&nbsp;Virtuous Sandals<br>\
&nbsp;Virtuous Skirt<br>\
</span><span class = "myGreen">\
(2) Set: +8 All Resistances.<br>\
(4) Set: When struck in combat has a chance of shielding the wearer in a protective shield which will absorb 350 damage.<br>\
(6) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(8) Set: +200 Armor\
</span>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Virtuous Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
75 Armor<br>\
+16 Stamina<br>\
+17 Intellect<br>\
+16 Spirit<br>\
Durability 60/60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 11.<br>\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
</span>\
<p>'+ virtuous +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Virtuous Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
69 Armor<br>\
+12 Stamina<br>\
+13 Intellect<br>\
+12 Spirit<br>\
Durability 50/50<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.\
</span>\
<p>'+ virtuous +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Virtuous Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
93 Armor<br>\
+21 Stamina<br>\
+22 Intellect<br>\
+12 Spirit<br>\
Durability 100/100<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 14.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ virtuous +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Virtuous Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
40 Armor<br>\
+8 Stamina<br>\
+8 Intellect<br>\
+8 Spirit<br>\
Durability 30/30<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 9.<br>\
Equip: Restores 2 mana per 5 sec.\
</span>\
<p>'+ virtuous +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Virtuous Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
54 Armor<br>\
+14 Stamina<br>\
+15 Intellect<br>\
+12 Spirit<br>\
Durability 35/35<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 11.</span>\
<p>'+ virtuous +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Virtuous Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
52 Armor<br>\
+12 Stamina<br>\
+13 Intellect<br>\
+12 Spirit<br>\
Durability 30/30<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.\
</span>\
<p>'+ virtuous +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Virtuous Skirt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
81 Armor<br>\
+13 Stamina<br>\
+14 Intellect<br>\
+12 Spirit<br>\
Durability 65/65<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 16.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>'+ virtuous +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Virtuous Sandals</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
64 Armor<br>\
+12 Stamina<br>\
+13 Intellect<br>\
+12 Spirit<br>\
Durability 50/50<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Restores 7 mana per 5 sec.</span>\
<p>'+ virtuous +'</span></td></tr></table>';

//priest end

//rogue begin

var darkmantle = '<span class = "myYellow">\
Darkmantle Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Darkmantle Belt<br>\
&nbsp;Darkmantle Boots<br>\
&nbsp;Darkmantle Bracers<br>\
&nbsp;Darkmantle Cap<br>\
&nbsp;Darkmantle Gloves<br>\
&nbsp;Darkmantle Pants<br>\
&nbsp;Darkmantle Spaulders<br>\
&nbsp;Darkmantle Tunic<br>\
</span><span class = "myGreen">\
(2) Set: +8 All Resistances.<br>\
(4) Set: Chance on melee attack to restore 35 energy.<br>\
(6) Set: +40 Attack Power.<br>\
(8) Set: +200 Armor\
</span>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Darkmantle Cap</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
150 Armor<br>\
+13 Strength<br>\
+26 Agility<br>\
+18 Stamina<br>\
Durability 70/70<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ darkmantle +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Darkmantle Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
136 Armor<br>\
+24 Agility<br>\
+10 Stamina<br>\
Durability 60/60<br>\
<span class = "myGreen">\
</span>\
<p>'+ darkmantle +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Darkmantle Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
185 Armor<br>\
+31 Agility<br>\
+15 Stamina<br>\
Durability 120/120<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 2%.</span>\
<p>'+ darkmantle +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Darkmantle Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
79 Armor<br>\
+7 Strength<br>\
+15 Agility<br>\
+7 Stamina<br>\
Durability 35/35<br>\
<span class = "myGreen">\
</span>\
<p>'+ darkmantle +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Darkmantle Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
108 Armor<br>\
+12 Strength<br>\
+22 Agility<br>\
+9 Stamina<br>\
Durability 40/40<br>\
<span class = "myGreen">\
</span>\
<p>'+ darkmantle +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Darkmantle Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
102 Armor<br>\
+10 Strength<br>\
+17 Agility<br>\
+13 Stamina<br>\
Durability 35/35<br>\
<span class = "myGreen">\
</span>\
<p>'+ darkmantle +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Darkmantle Pants</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
160 Armor<br>\
+15 Strength<br>\
+25 Agility<br>\
+15 Stamina<br>\
Durability 75/75<br>\
<span class = "myGreen">\
</span>\
<p>'+ darkmantle +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Darkmantle Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
127 Armor<br>\
+24 Agility<br>\
+10 Stamina<br>\
Durability 60/60<br>\
<span class = "myGreen">\
Equip: Increases your effective stealth level.<br>\
</span>\
<p>'+ darkmantle +'</span></td></tr></table>';

//rogue end

//shaman begin

var fivethunders = '<span class = "myYellow">\
The Five Thunders (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Bindings of The Five Thunders<br>\
&nbsp;Boots of The Five Thunders<br>\
&nbsp;Coif of The Five Thunders<br>\
&nbsp;Cord of The Five Thunders<br>\
&nbsp;Gauntlets of The Five Thunders<br>\
&nbsp;Kilt of The Five Thunders<br>\
&nbsp;Pauldrons of The Five Thunders<br>\
&nbsp;Vest of The Five Thunders<br>\
</span><span class = "myGreen">\
(2) Set: +8 All Resistances.<br>\
(4) Set: Chance on spell cast to increase your damage and healing by up to 95 for 10 sec.<br>\
(6) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(8) Set: +200 Armor\
</span>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Coif of The Five Thunders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
314 Armor<br>\
+22 Stamina<br>\
+21 Intellect<br>\
+12 Spirit<br>\
Durability 85/85<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 14.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.</span>\
<p>'+ fivethunders +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Pauldrons of The Five Thunders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
286 Armor<br>\
+10 Strength<br>\
+11 Stamina<br>\
+11 Intellect<br>\
+10 Spirit<br>\
Durability 70/70<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.</span>\
<p>'+ fivethunders +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Vest of The Five Thunders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
387 Armor<br>\
+12 Strength<br>\
+17 Stamina<br>\
+17 Intellect<br>\
+16 Spirit<br>\
Durability 140/140<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 14.</span>\
<p>'+ fivethunders +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Bindings of The Five Thunders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
167 Armor<br>\
+10 Stamina<br>\
+9 Intellect<br>\
+9 Spirit<br>\
Durability 40/40<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 8.</span>\
<p>'+ fivethunders +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gauntlets of The Five Thunders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
223 Armor<br>\
+9 Strength<br>\
+12 Stamina<br>\
+14 Intellect<br>\
Durability 50/50<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 12.</span>\
<p>'+ fivethunders +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Cord of The Five Thunders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
214 Armor<br>\
+10 Strength<br>\
+11 Stamina<br>\
+11 Intellect<br>\
Durability 40/40<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 12.</span>\
<p>'+ fivethunders +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Kilt of The Five Thunders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
339 Armor<br>\
+10 Strength<br>\
+17 Stamina<br>\
+17 Intellect<br>\
+16 Spirit<br>\
Durability 90/90<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 11.</span>\
<p>'+ fivethunders +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Boots of The Five Thunders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
266 Armor<br>\
+12 Strength<br>\
+13 Stamina<br>\
+12 Intellect<br>\
+10 Spirit<br>\
Durability 70/70<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p>'+ fivethunders +'</span></td></tr></table>';

//shaman end

//warlock begin

var deathmist = '<span class = "myYellow">\
Deathmist Raiment (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Deathmist Belt<br>\
&nbsp;Deathmist Bracers<br>\
&nbsp;Deathmist Leggings<br>\
&nbsp;Deathmist Mantle<br>\
&nbsp;Deathmist Mask<br>\
&nbsp;Deathmist Robe<br>\
&nbsp;Deathmist Sandals<br>\
&nbsp;Deathmist Wraps<br>\
</span><span class = "myGreen">\
(2) Set: +8 All Resistances.<br>\
(4) Set: When struck in combat has a chance of causing the attacker to flee in terror for 2 seconds.<br>\
(6) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(8) Set: +200 Armor\
</span>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Deathmist Mask</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
75 Armor<br>\
+24 Stamina<br>\
+24 Intellect<br>\
Durability 60/60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 16.<br>\
Equip: Improves your chance to hit with spells by 1%.<br>\
</span>\
<p>'+ deathmist +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Deathmist Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
69 Armor<br>\
+16 Stamina<br>\
+16 Intellect<br>\
Durability 50/50<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.\
</span>\
<p>'+ deathmist +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Deathmist Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
93 Armor<br>\
+27 Stamina<br>\
+22 Intellect<br>\
Durability 100/100<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.</span>\
<p>'+ deathmist +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Deathmist Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
40 Armor<br>\
+12 Stamina<br>\
+12 Intellect<br>\
Durability 30/30<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 8.\
</span>\
<p>'+ deathmist +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Deathmist Wraps</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
54 Armor<br>\
+16 Stamina<br>\
+13 Intellect<br>\
Durability 35/35<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 13.<br>\
Equip: Improves your chance to hit with spells by 1%.</span>\
<p>'+ deathmist +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Deathmist Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
52 Armor<br>\
+16 Stamina<br>\
+16 Intellect<br>\
Durability 30/30<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.\
</span>\
<p>'+ deathmist +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Deathmist Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
81 Armor<br>\
+22 Stamina<br>\
+21 Intellect<br>\
Durability 65/65<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 16.\
</span>\
<p>'+ deathmist +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Deathmist Sandals</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
64 Armor<br>\
+24 Stamina<br>\
+14 Intellect<br>\
Durability 50/50<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.</span>\
<p>'+ deathmist +'</span></td></tr></table>';

//warlock end

//warrior begin

var heroism = '<span class = "myYellow">\
Battlegear of Heroism (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Belt of Heroism<br>\
&nbsp;Boots of Heroism<br>\
&nbsp;Bracers of Heroism<br>\
&nbsp;Breastplate of Heroism<br>\
&nbsp;Gauntlets of Heroism<br>\
&nbsp;Helm of Heroism<br>\
&nbsp;Legplates of Heroism<br>\
&nbsp;Spaulders of Heroism<br>\
</span><span class = "myGreen">\
(2) Set: +8 All Resistances.<br>\
(4) Set: Chance on melee attack to heal you for 88 to 132.<br>\
(6) Set: +40 Attack Power.<br>\
(8) Set: +200 Armor\
</span>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Helm of Heroism</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
556 Armor<br>\
+18 Strength<br>\
+32 Stamina<br>\
Durability 100/100<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ heroism +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Spaulders of Heroism</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
507 Armor<br>\
+12 Strength<br>\
+12 Agility<br>\
+18 Stamina<br>\
Durability 80/80<br>\
<span class = "myGreen">\
</span>\
<p>'+ heroism +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Breastplate of Heroism</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
684 Armor<br>\
+21 Strength<br>\
+13 Agility<br>\
+26 Stamina<br>\
Durability 165/165<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.</span>\
<p>'+ heroism +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Bracers of Heroism</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
296 Armor<br>\
+9 Strength<br>\
+5 Agility<br>\
+14 Stamina<br>\
Durability 45/45<br>\
<span class = "myGreen">\
Equip: Increased Defense +3.</span>\
<p>'+ heroism +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gauntlets of Heroism</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
393 Armor<br>\
+18 Strength<br>\
+12 Stamina<br>\
Durability 55/55<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ heroism +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Belt of Heroism</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
380 Armor<br>\
+15 Strength<br>\
+9 Agility<br>\
+12 Stamina<br>\
Durability 45/45<br>\
<span class = "myGreen">\
Equip: Increased Defense +7.</span>\
<p>'+ heroism +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Legplates of Heroism</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
601 Armor<br>\
+25 Strength<br>\
+11 Agility<br>\
+16 Stamina<br>\
Durability 100/100<br>\
<span class = "myGreen">\
Equip: Increased Defense +5.</span>\
<p>'+ heroism +'</span></td></tr></table>';

t++;
armorSetDungeon2.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Boots of Heroism</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
470 Armor<br>\
+20 Strength<br>\
+20 Stamina<br>\
Durability 75/75<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.</span>\
<p>'+ heroism +'</span></td></tr></table>';

//warrior end

armorSetsArray[theArmorSetCounter] = armorSetDungeon2;
armorSetsValues[theArmorSetCounter] = "dungeon2";
theArmorSetCounter++;