var armorSetDungeon1 = new armorSetObject("dungeon1");

armorSetDungeon1.slotsArray = new Array();
t = 0;
armorSetDungeon1.slotsArray[t] = "head"; t++;
armorSetDungeon1.slotsArray[t] = "shoulder"; t++;
armorSetDungeon1.slotsArray[t] = "chest"; t++;
armorSetDungeon1.slotsArray[t] = "wrist"; t++;
armorSetDungeon1.slotsArray[t] = "hands"; t++;
armorSetDungeon1.slotsArray[t] = "waist"; t++;
armorSetDungeon1.slotsArray[t] = "legs"; t++;
armorSetDungeon1.slotsArray[t] = "feet"; t++;

armorSetDungeon1.slotsNumber = armorSetDungeon1.slotsArray.length;

//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

armorSetDungeon1.setNamesArray = new Array();
t = 0;
armorSetDungeon1.setNamesArray[t] = "Wildheart Raiment"; t++;
armorSetDungeon1.setNamesArray[t] = "Beaststalker Armor"; t++;
armorSetDungeon1.setNamesArray[t] = "Magister's Regalia"; t++;
armorSetDungeon1.setNamesArray[t] = "Lightforge Armor"; t++;
armorSetDungeon1.setNamesArray[t] = "Vestments of the Devout"; t++;
armorSetDungeon1.setNamesArray[t] = "Shadowcraft Armor"; t++;
armorSetDungeon1.setNamesArray[t] = "The Elements"; t++;
armorSetDungeon1.setNamesArray[t] = "Dreadmist Raiment"; t++;
armorSetDungeon1.setNamesArray[t] = "Battlegear of Valor"; t++;

armorSetDungeon1.statsArray = new Array();
t = 0;

//druid begin
var wildheart = '<span class = "myYellow">\
Wildheart Rainment (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Wildheart Belt<br>\
&nbsp;Wildheart Boots<br>\
&nbsp;Wildheart Bracers<br>\
&nbsp;Wildheart Cowl<br>\
&nbsp;Wildheart Gloves<br>\
&nbsp;Wildheart Kilt<br>\
&nbsp;Wildheart Spaulders<br>\
&nbsp;Wildheart Vest<br>\
</span><span class = "myGreen">\
(2) Set: +200 Armor.<br>\
(4) Set: +26 Attack Power.<br>\
(6) Set: Increases damage and healing done by magical spells and effects by up to 15.<br>\
(6) Set: When struck in combat has a chance of returning 300 mana, 10 rage, or 40 energy to the wearer.<br>\
(8) Set: +8 All Resistances\
</span>';


armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wildheart Cowl</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
141 Armor<br>\
+6 Strength<br>\
+10 Stamina<br>\
+20 Intellect<br>\
+20 Spirit<br>\
Durability 60/60\
<br>Requires Level 57\
<span class = "myGreen">\
</span>\
<p>'+ wildheart +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wildheart Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
127 Armor<br>\
+9 Stamina<br>\
+18 Intellect<br>\
+8 Spirit<br>\
Durability 60/60\
<br>Requires Level 55\
<span class = "myGreen">\
</span>\
<p>'+ wildheart +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wildheart Vest</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
176 Armor<br>\
+13 Stamina<br>\
+20 Intellect<br>\
+20 Spirit<br>\
Durability 100/100\
<br>Requires Level 58\
<span class = "myGreen">\
</span>\
<p>'+ wildheart +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wildheart Bracers</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
71 Armor<br>\
+7 Strength<br>\
+15 Intellect<br>\
Durability 35/35\
<br>Requires Level 52\
<span class = "myGreen">\
</span>\
<p>'+ wildheart +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wildheart Gloves</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
105 Armor<br>\
+9 Intellect<br>\
+21 Spirit<br>\
Durability 35/35\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ wildheart +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wildheart Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
93 Armor<br>\
+9 Stamina<br>\
+17 Intellect<br>\
+10 Spirit<br>\
Durability 35/35\
<br>Requires Level 53\
<span class = "myGreen">\
</span>\
<p>'+ wildheart +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wildheart Kilt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
150 Armor<br>\
+13 Strength<br>\
+12 Agility<br>\
+14 Stamina<br>\
+14 Intellect<br>\
+14 Spirit<br>\
Durability 75/75\
<br>Requires Level 56\
<span class = "myGreen">\
</span>\
<p>'+ wildheart +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wildheart Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
115 Armor<br>\
+10 Stamina<br>\
+9 Intellect<br>\
+17 Spirit<br>\
Durability 50/50\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ wildheart +'</span></td></tr></table>';

//druid end

//hunter begin

var beaststalker = '<span class = "myYellow">\
Beastmaster Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Beaststalker\'s Belt<br>\
&nbsp;Beaststalker\'s Bindings<br>\
&nbsp;Beaststalker\'s Boots<br>\
&nbsp;Beaststalker\'s Cap<br>\
&nbsp;Beaststalker\'s Gloves<br>\
&nbsp;Beaststalker\'s Mantle<br>\
&nbsp;Beaststalker\'s Pants<br>\
&nbsp;Beaststalker\'s Tunic<br>\
</span><span class = "myGreen">\
(2) Set: +200 Armor.<br>\
(4) Set: +40 Attack Power.<br>\
(6) Set: Your normal ranged attacks have a 4% chance of restoring 200 mana.<br>\
(8) Set: +8 All Resistances.\
</span>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beaststalker\'s Cap</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
297 Armor<br>\
+20 Agility<br>\
+20 Stamina<br>\
+10 Intellect<br>\
+6 Spirit<br>\
Durability 70/70\
<br>Requires Level 57\
<span class = "myGreen">\
</span>\
<p>'+ beaststalker +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beaststalker\'s Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
266 Armor<br>\
+11 Agility<br>\
+17 Stamina<br>\
+7 Intellect<br>\
+4 Spirit<br>\
Durability 70/70\
<br>Requires Level 55\
<span class = "myGreen">\
</span>\
<p>'+ beaststalker +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beaststalker\'s Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
370 Armor<br>\
+5 Strength<br>\
+21 Agility<br>\
+16 Stamina<br>\
+13 Intellect<br>\
+6 Spirit<br>\
Durability 120/120\
<br>Requires Level 58\
<span class = "myGreen">\
</span>\
<p>'+ beaststalker +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beaststalker\'s Bindings</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
148 Armor<br>\
+15 Agility<br>\
+7 Stamina<br>\
Durability 40/40\
<br>Requires Level 52\
<span class = "myGreen">\
</span>\
<p>'+ beaststalker +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beaststalker\'s Gloves</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
218 Armor<br>\
+14 Agility<br>\
+9 Stamina<br>\
+9 Intellect<br>\
+10 Spirit<br>\
Durability 40/40\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ beaststalker +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beaststalker\'s Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
193 Armor<br>\
+9 Strength<br>\
+10 Agility<br>\
+6 Stamina<br>\
+9 Intellect<br>\
+11 Spirit<br>\
Durability 40/40\
<br>Requires Level 53\
<span class = "myGreen">\
</span>\
<p>'+ beaststalker +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beaststalker\'s Pants</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
315 Armor<br>\
+6 Strength<br>\
+26 Agility<br>\
+6 Stamina<br>\
+12 Spirit<br>\
Durability 90/90\
<br>Requires Level 56\
<span class = "myGreen">\
</span>\
<p>'+ beaststalker +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beaststalker\'s Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
240 Armor<br>\
+21 Agility<br>\
+9 Stamina<br>\
Durability 60/60\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ beaststalker +'</span></td></tr></table>';

//hunter end

//mage begin

var magister = '<span class = "myYellow">\
Magister\'s Regalia (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Magister\'s Belt<br>\
&nbsp;Magister\'s Bindings<br>\
&nbsp;Magister\'s Boots<br>\
&nbsp;Magister\'s Crown<br>\
&nbsp;Magister\'s Gloves<br>\
&nbsp;Magister\'s Leggings<br>\
&nbsp;Magister\'s Mantle<br>\
&nbsp;Magister\'s Robes<br>\
</span><span class = "myGreen">\
(2) Set: +200 Armor<br>\
(4) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(6) Set: When struck in combat has a chance of freezing the attacker in place for 3 sec.<br>\
(8) Set: +8 All Resistances\
</span>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Magister\'s Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
71 Armor<br>\
+11 Stamina<br>\
+30 Intellect<br>\
+5 Spirit<br>\
Durability 50/50\
<br>Requires Level 57\
<span class = "myGreen">\
</span>\
<p>'+ magister +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Magister\'s Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
64 Armor<br>\
+6 Stamina<br>\
+22 Intellect<br>\
+6 Spirit<br>\
Durability 50/50\
<br>Requires Level 55\
<span class = "myGreen">\
</span>\
<p>'+ magister +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Magister\'s Robes</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
89 Armor<br>\
+9 Stamina<br>\
+31 Intellect<br>\
+8 Spirit<br>\
Durability 80/80\
<br>Requires Level 58\
<span class = "myGreen">\
</span>\
<p>'+ magister +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Magister\'s Bindings</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
35 Armor<br>\
+4 Stamina<br>\
+15 Intellect<br>\
+5 Spirit<br>\
Durability 30/30\
<br>Requires Level 52\
<span class = "myGreen">\
</span>\
<p>'+ magister +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Magister\'s Gloves</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
52 Armor<br>\
+9 Stamina<br>\
+14 Intellect<br>\
+14 Spirit<br>\
Durability 30/30\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ magister +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Magister\'s Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
46 Armor<br>\
+6 Stamina<br>\
+21 Intellect<br>\
+6 Spirit<br>\
Durability 30/30\
<br>Requires Level 53\
<span class = "myGreen">\
</span>\
<p>'+ magister +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Magister\'s Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
76 Armor<br>\
+12 Stamina<br>\
+20 Intellect<br>\
+21 Spirit<br>\
Durability 65/65\
<br>Requires Level 56\
<span class = "myGreen">\
</span>\
<p>'+ magister +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Magister\'s Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
58 Armor<br>\
+9 Stamina<br>\
+14 Intellect<br>\
+14 Spirit<br>\
Durability 40/40\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ magister +'</span></td></tr></table>';

//mage end

//paladin begin

var lightforge = '<span class = "myYellow">\
Lightforge Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Lightforge Belt<br>\
&nbsp;Lightforge Boots<br>\
&nbsp;Lightforge Bracers<br>\
&nbsp;Lightforge Breastplate<br>\
&nbsp;Lightforge Gauntlets<br>\
&nbsp;Lightforge Helm<br>\
&nbsp;Lightforge Legplates<br>\
&nbsp;Lightforge Spaulders<br>\
</span><span class = "myGreen">\
(2) Set: +200 Armor.<br>\
(4) Set: +40 Attack Power.<br>\
(6) Set: Chance on melee attack to increase your damage and healing done by magical spells and effects by up to 95 for 10 sec.<br>\
(8) Set: +8 All Resistances.\
</span>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Lightforge Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
526 Armor<br>\
+13 Strength<br>\
+6 Agility<br>\
+20 Stamina<br>\
+14 Intellect<br>\
+10 Spirit<br>\
Durability 80/80\
<br>Requires Level 57\
<span class = "myGreen">\
</span>\
<p>'+ lightforge +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Lightforge Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
470 Armor<br>\
+9 Strength<br>\
+4 Agility<br>\
+15 Stamina<br>\
+11 Intellect<br>\
+5 Spirit<br>\
Durability 80/80\
<br>Requires Level 55\
<span class = "myGreen">\
</span>\
<p>'+ lightforge +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Lightforge Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
657 Armor<br>\
+13 Strength<br>\
+21 Stamina<br>\
+16 Intellect<br>\
+8 Spirit<br>\
Durability 135/135\
<br>Requires Level 58\
<span class = "myGreen">\
</span>\
<p>'+ lightforge +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Lightforge Bracers</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
261 Armor<br>\
+7 Strength<br>\
+4 Agility<br>\
+10 Stamina<br>\
+8 Spirit<br>\
Durability 45/45\
<br>Requires Level 52\
<span class = "myGreen">\
</span>\
<p>'+ lightforge +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Lightforge Gauntlets</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
386 Armor<br>\
+14 Strength<br>\
+9 Stamina<br>\
+14 Spirit<br>\
Durability 45/45<br>\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ lightforge +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Lightforge Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
341 Armor<br>\
+10 Strength<br>\
+9 Stamina<br>\
+15 Intellect<br>\
+6 Spirit<br>\
Durability 45/45<br>\
<br>Requires Level 53\
<span class = "myGreen">\
</span>\
<p>'+ lightforge +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Lightforge Legplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
557 Armor<br>\
+20 Strength<br>\
+8 Agility<br>\
+14 Stamina<br>\
+12 Intellect<br>\
+9 Spirit<br>\
Durability 100/100\
<br>Requires Level 56\
<span class = "myGreen">\
</span>\
<p>'+ lightforge +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Lightforge Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
424 Armor<br>\
+8 Strength<br>\
+18 Stamina<br>\
+9 Spirit<br>\
Durability 65/65\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ lightforge +'</span></td></tr></table>';

//paladin end

//priest begin

var devout = '<span class = "myYellow">\
Vestments of the Devout (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Devout Belt<br>\
&nbsp;Devout Bracers<br>\
&nbsp;Devout Crown<br>\
&nbsp;Devout Gloves<br>\
&nbsp;Devout Mantle<br>\
&nbsp;Devout Robe<br>\
&nbsp;Devout Sandals<br>\
&nbsp;Devout Skirt<br>\
</span><span class = "myGreen">\
(2) Set: +200 Armor.<br>\
(4) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(6) Set: When struck in combat has a chance of shielding the wearer in a protective shield which will absorb 350 damage.<br>\
(8) Set: +8 All Resistances.\
</span>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Devout Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
71 Armor<br>\
+13 Stamina<br>\
+24 Intellect<br>\
+15 Spirit<br>\
Durability 50/50\
<br>Requires Level 57\
<span class = "myGreen">\
</span>\
<p>'+ devout +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Devout Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
64 Armor<br>\
+4 Stamina<br>\
+21 Intellect<br>\
+9 Spirit<br>\
Durability 50/50\
<br>Requires Level 55\
<span class = "myGreen">\
</span>\
<p>'+ devout +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Devout Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
89 Armor<br>\
+13 Stamina<br>\
+24 Intellect<br>\
+15 Spirit<br>\
Durability 80/80\
<br>Requires Level 58\
<span class = "myGreen">\
</span>\
<p>'+ devout +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Devout Bracers</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
35 Armor<br>\
+7 Stamina<br>\
+10 Intellect<br>\
+10 Spirit<br>\
Durability 30/30\
<br>Requires Level 52\
<span class = "myGreen">\
</span>\
<p>'+ devout +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Devout Gloves</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
52 Armor<br>\
+9 Stamina<br>\
+10 Intellect<br>\
+17 Spirit<br>\
Durability 30/30\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ devout +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Devout Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
46 Armor<br>\
+4 Stamina<br>\
+20 Intellect<br>\
+9 Spirit<br>\
Durability 30/30\
<br>Requires Level 53\
<span class = "myGreen">\
</span>\
<p>'+ devout +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Devout Skirt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
76 Armor<br>\
+12 Stamina<br>\
+15 Intellect<br>\
+23 Spirit<br>\
Durability 65/65\
<br>Requires Level 56\
<span class = "myGreen">\
</span>\
<p>'+ devout +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Devout Sandals</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
58 Armor<br>\
+9 Stamina<br>\
+10 Intellect<br>\
+17 Spirit<br>\
Durability 40/40\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ devout +'</span></td></tr></table>';

//priest end

//rogue begin

var shadowcraft = '<span class = "myYellow">\
Shadowcraft Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Shadowcraft Belt<br>\
&nbsp;Shadowcraft Boots<br>\
&nbsp;Shadowcraft Bracers<br>\
&nbsp;Shadowcraft Cap<br>\
&nbsp;Shadowcraft Gloves<br>\
&nbsp;Shadowcraft Pants<br>\
&nbsp;Shadowcraft Spaulders<br>\
&nbsp;Shadowcraft Tunic<br>\
</span><span class = "myGreen">\
(2) Set: +200 Armor.<br>\
(4) Set: +40 Attack Power.<br>\
(6) Set: Chance on melee attack to restore 35 energy.<br>\
(8) Set: +8 All Resistances\
</span>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Shadowcraft Cap</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
141 Armor<br>\
+13 Strength<br>\
+20 Agility<br>\
+18 Stamina<br>\
+5 Spirit<br>\
Durability 60/60\
<br>Requires Level 57\
<span class = "myGreen">\
</span>\
<p>'+ shadowcraft +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Shadowcraft Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
127 Armor<br>\
+22 Agility<br>\
+9 Stamina<br>\
Durability 60/60\
<br>Requires Level 55\
<span class = "myGreen">\
</span>\
<p>'+ shadowcraft +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Shadowcraft Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
176 Armor<br>\
+26 Agility<br>\
+13 Stamina<br>\
+12 Spirit<br>\
Durability 100/100\
<br>Requires Level 58\
<span class = "myGreen">\
</span>\
<p>'+ shadowcraft +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Shadowcraft Bracers</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
71 Armor<br>\
+15 Agility<br>\
+7 Stamina<br>\
Durability 35/35\
<br>Requires Level 52\
<span class = "myGreen">\
</span>\
<p>'+ shadowcraft +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Shadowcraft Gloves</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
105 Armor<br>\
+9 Strength<br>\
+14 Agility<br>\
+9 Stamina<br>\
+10 Spirit<br>\
Durability 35/35\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ shadowcraft +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Shadowcraft Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
93 Armor<br>\
+9 Strength<br>\
+14 Agility<br>\
+10 Stamina<br>\
+9 Spirit<br>\
Durability 35/35\
<br>Requires Level 53\
<span class = "myGreen">\
</span>\
<p>'+ shadowcraft +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Shadowcraft Pants</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
150 Armor<br>\
+12 Strength<br>\
+25 Agility<br>\
+12 Stamina<br>\
Durability 75/75\
<br>Requires Level 56\
<span class = "myGreen">\
</span>\
<p>'+ shadowcraft +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Shadowcraft Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
115 Armor<br>\
+21 Agility<br>\
+9 Stamina<br>\
Durability 50/50\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ shadowcraft +'</span></td></tr></table>';

//rogue end

//shaman begin

var elements = '<span class = "myYellow">\
The Elements (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Bindings of Elements<br>\
&nbsp;Boots of Elements<br>\
&nbsp;Coif of Elements<br>\
&nbsp;Cord of Elements<br>\
&nbsp;Gauntlets of Elements<br>\
&nbsp;Kilt of Elements<br>\
&nbsp;Pauldrons of Elements<br>\
&nbsp;Vest of Elements<br>\
</span><span class = "myGreen">\
(2) Set: +200 Armor.<br>\
(4) Set: Increases damage and healing done by spells and effects by up to 23.<br>\
(6) Set: Chance on spell cast to increase your damage and healing done by up to 95 for 10 sec.<br>\
(8) Set: +8 All Resistances.\
</span>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Coif of Elements</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
297 Armor<br>\
+7 Strength<br>\
+13 Stamina<br>\
+23 Intellect<br>\
+12 Spirit<br>\
Durability 70/70\
<br>Requires Level 57\
<span class = "myGreen">\
</span>\
<p>'+ elements +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Pauldrons of Elements</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
266 Armor<br>\
+6 Strength<br>\
+14 Stamina<br>\
+15 Intellect<br>\
+6 Spirit<br>\
Durability 70/70\
<br>Requires Level 55\
<span class = "myGreen">\
</span>\
<p>'+ elements +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Vest of Elements</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
370 Armor<br>\
+13 Stamina<br>\
+20 Intellect<br>\
+20 Spirit<br>\
Durability 120/120\
<br>Requires Level 58\
<span class = "myGreen">\
</span>\
<p>'+ elements +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Bindings of Elements</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
148 Armor<br>\
+7 Stamina<br>\
+10 Intellect<br>\
+10 Spirit<br>\
Durability 40/40\
<br>Requires Level 52\
<span class = "myGreen">\
</span>\
<p>'+ elements +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Gauntlets of Elements</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
218 Armor<br>\
+9 Strength<br>\
+4 Stamina<br>\
+10 Intellect<br>\
+16 Spirit<br>\
Durability 40/40\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ elements +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Cord of Elements</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
193 Armor<br>\
+9 Strength<br>\
+6 Stamina<br>\
+17 Intellect<br>\
+7 Spirit<br>\
Durability 40/40\
<br>Requires Level 53\
<span class = "myGreen">\
</span>\
<p>'+ elements +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Kilt of Elements</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
315 Armor<br>\
+12 Strength<br>\
+6 Agility<br>\
+7 Stamina<br>\
+15 Intellect<br>\
+20 Spirit<br>\
Durability 90/90\
<br>Requires Level 56\
<span class = "myGreen">\
</span>\
<p>'+ elements +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Boots of Elements</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
240 Armor<br>\
+9 Agility<br>\
+17 Spirit<br>\
Durability 60/60\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ elements +'</span></td></tr></table>';

//shaman end

//warlock begin

var dreadmist = '<span class = "myYellow">\
Dreadmist Raiment (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Dreadmist Belt<br>\
&nbsp;Dreadmist Bracers<br>\
&nbsp;Dreadmist Leggings<br>\
&nbsp;Dreadmist Mantle<br>\
&nbsp;Dreadmist Mask<br>\
&nbsp;Dreadmist Robe<br>\
&nbsp;Dreadmist Sandals<br>\
&nbsp;Dreadmist Wraps<br>\
</span><span class = "myGreen">\
(2) Set: +200 Armor.<br>\
(4) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(6) Set: When struck in combat has a chance of causing the attacker to flee in terror for 2 seconds.<br>\
(8) Set: +8 All Resistances\
</span>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Dreadmist Mask</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
71 Armor<br>\
+15 Stamina<br>\
+23 Intellect<br>\
+12 Spirit<br>\
Durability 50/50\
<br>Requires Level 57\
<span class = "myGreen">\
</span>\
<p>'+ dreadmist +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Dreadmist Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
64 Armor<br>\
+14 Stamina<br>\
+15 Intellect<br>\
+9 Spirit<br>\
Durability 50/50\
<br>Requires Level 55\
<span class = "myGreen">\
</span>\
<p>'+ dreadmist +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Dreadmist Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
89 Armor<br>\
+20 Stamina<br>\
+21 Intellect<br>\
+13 Spirit<br>\
Durability 80/80\
<br>Requires Level 58\
<span class = "myGreen">\
</span>\
<p>'+ dreadmist +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Dreadmist Bracers</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
35 Armor<br>\
+10 Stamina<br>\
+10 Intellect<br>\
+7 Spirit<br>\
Durability 30/30\
<br>Requires Level 52\
<span class = "myGreen">\
</span>\
<p>'+ dreadmist +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Dreadmist Wraps</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
52 Armor<br>\
+13 Stamina<br>\
+9 Intellect<br>\
+14 Spirit<br>\
Durability 30/30\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ dreadmist +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Dreadmist Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
46 Armor<br>\
+10 Stamina<br>\
+17 Intellect<br>\
+9 Spirit<br>\
Durability 30/30\
<br>Requires Level 53\
<span class = "myGreen">\
</span>\
<p>'+ dreadmist +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Dreadmist Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
76 Armor<br>\
+15 Stamina<br>\
+14 Intellect<br>\
+21 Spirit<br>\
Durability 65/65\
<br>Requires Level 56\
<span class = "myGreen">\
</span>\
<p>'+ dreadmist +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Dreadmist Sandals</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
58 Armor<br>\
+17 Stamina<br>\
+9 Intellect<br>\
+10 Spirit<br>\
Durability 40/40\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ dreadmist +'</span></td></tr></table>';

//warlock end

//warrior begin

var valor = '<span class = "myYellow">\
Battlegear of Valor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Belt of Valor<br>\
&nbsp;Boots of Valor<br>\
&nbsp;Bracers of Valor<br>\
&nbsp;Breastplate of Valor<br>\
&nbsp;Gauntlets of Valor<br>\
&nbsp;Helm of Valor<br>\
&nbsp;Legplates of Valor<br>\
&nbsp;Spaulders of Valor<br>\
</span><span class = "myGreen">\
(2) Set: +200 Armor.<br>\
(4) Set: +40 Attack Power.<br>\
(6) Set: Chance on melee attack to heal you for 88 to 132.<br>\
(8) Set: +8 All Resistances\
</span>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Helm of Valor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
526 Armor<br>\
+15 Strength<br>\
+9 Agility<br>\
+23 Stamina<br>\
+8 Spirit<br>\
Durability 80/80\
<br>Requires Level 57\
<span class = "myGreen">\
</span>\
<p>'+ valor +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Spaulders of Valor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
470 Armor<br>\
+11 Strength<br>\
+9 Agility<br>\
+17 Stamina<br>\
Durability 80/80\
<br>Requires Level 55\
<span class = "myGreen">\
</span>\
<p>'+ valor +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Breastplate of Valor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
657 Armor<br>\
+15 Strength<br>\
+10 Agility<br>\
+24 Stamina<br>\
+6 Spirit<br>\
Durability 135/135\
<br>Requires Level 58\
<span class = "myGreen">\
</span>\
<p>'+ valor +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Bracers of Valor</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
261 Armor<br>\
+7 Strength<br>\
+3 Agility<br>\
+14 Stamina<br>\
+2 Spirit<br>\
Durability 45/45\
<br>Requires Level 52\
<span class = "myGreen">\
</span>\
<p>'+ valor +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Gauntlets of Valor</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
386 Armor<br>\
+17 Strength<br>\
+3 Agility<br>\
+10 Stamina<br>\
+8 Spirit<br>\
Durability 45/45\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ valor +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Belt of Valor</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
341 Armor<br>\
+14 Strength<br>\
+7 Agility<br>\
+8 Stamina<br>\
+4 Spirit<br>\
Durability 45/45\
<br>Requires Level 53\
<span class = "myGreen">\
</span>\
<p>'+ valor +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Legplates of Valor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
557 Armor<br>\
+23 Strength<br>\
+11 Agility<br>\
+15 Stamina<br>\
+4 Spirit<br>\
Durability 100/100<br>\
<br>Requires Level 56\
<span class = "myGreen">\
</span>\
<p>'+ valor +'</span></td></tr></table>';

t++;
armorSetDungeon1.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Boots of Valor</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
424 Armor<br>\
+8 Strength<br>\
+4 Agility<br>\
+20 Stamina<br>\
+3 Spirit<br>\
Durability 65/65\
<br>Requires Level 54\
<span class = "myGreen">\
</span>\
<p>'+ valor +'</span></td></tr></table>';

//warrior end


armorSetsArray[theArmorSetCounter] = armorSetDungeon1;
armorSetsValues[theArmorSetCounter] = "dungeon1";
theArmorSetCounter++;

