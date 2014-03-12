var armorSetTier1Raid = new armorSetObject("tier1raid");

armorSetTier1Raid.slotsArray = new Array();

t = 0;
armorSetTier1Raid.slotsArray[t] = "head"; t++;
armorSetTier1Raid.slotsArray[t] = "shoulder"; t++;
armorSetTier1Raid.slotsArray[t] = "chest"; t++;
armorSetTier1Raid.slotsArray[t] = "wrist"; t++;
armorSetTier1Raid.slotsArray[t] = "hands"; t++;
armorSetTier1Raid.slotsArray[t] = "waist"; t++;
armorSetTier1Raid.slotsArray[t] = "legs"; t++;
armorSetTier1Raid.slotsArray[t] = "feet"; t++;

armorSetTier1Raid.slotsNumber = armorSetTier1Raid.slotsArray.length;


//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

armorSetTier1Raid.setNamesArray = new Array();
t = 0;
armorSetTier1Raid.setNamesArray[t] = "Cenarion Raiment"; t++;
armorSetTier1Raid.setNamesArray[t] = "Giantstalker Armor"; t++;
armorSetTier1Raid.setNamesArray[t] = "Arcanist Regalia"; t++;
armorSetTier1Raid.setNamesArray[t] = "Lawbringer Armor"; t++;
armorSetTier1Raid.setNamesArray[t] = "Vestments of Prophecy"; t++;
armorSetTier1Raid.setNamesArray[t] = "Nightslayer Armor"; t++;
armorSetTier1Raid.setNamesArray[t] = "The Earthfury"; t++;
armorSetTier1Raid.setNamesArray[t] = "Felheart Raiment"; t++;
armorSetTier1Raid.setNamesArray[t] = "Battlegear of Might"; t++;


armorSetTier1Raid.statsArray = new Array();

t = 0;

//druid begin

var cenarion = '<span class = "myYellow">\
Cenarion Raiment (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Cenarion Belt<br>\
&nbsp;Cenarion Boots<br>\
&nbsp;Cenarion Bracers<br>\
&nbsp;Cenarion Helm<br>\
&nbsp;Cenarion Gloves<br>\
&nbsp;Cenarion Leggings<br>\
&nbsp;Cenarion Spaulders<br>\
&nbsp;Cenarion Vestments<br>\
</span><span class = "myGreen">\
(3) Set: Damage dealt by Thorns increased by 4 and duration increased by 50%.<br>\
(5) Set: Improves your chance to get a critical strike with spells by 2%.<br>\
(8) Set: Reduces the cooldown of your Tranquility and Hurricane spells by 50%.\
</span>';


armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cenarion Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
163 Armor<br>\
+26 Stamina<br>\
+28 Intellect<br>\
+13 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Druid<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.</span>\
<p>'+ cenarion +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cenarion Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
150 Armor<br>\
+13 Stamina<br>\
+20 Intellect<br>\
+10 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Druid<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 18.\
</span>\
<p>'+ cenarion +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cenarion Vestments</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
200 Armor<br>\
+23 Stamina<br>\
+24 Intellect<br>\
+16 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Druid<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 3 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 22.</span>\
<p>'+ cenarion +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cenarion Bracers</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
88 Armor<br>\
+13 Stamina<br>\
+14 Intellect<br>\
+13 Spirit<br>\
Classes: Druid<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 6.\
</span>\
<p>'+ cenarion +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cenarion Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
125 Armor<br>\
+17 Stamina<br>\
+18 Intellect<br>\
+15 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Druid<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by magical spells and effects by up to 18.</span>\
<p>'+ cenarion +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cenarion Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
113 Armor<br>\
+10 Stamina<br>\
+22 Intellect<br>\
+10 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Druid<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 9.\
</span>\
<p>'+ cenarion +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cenarion Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
175 Armor<br>\
+18 Stamina<br>\
+19 Intellect<br>\
+20 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Druid<br>\
Durability 90/90<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 22.\
</span>\
<p>'+ cenarion +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cenarion Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
138 Armor<br>\
+16 Stamina<br>\
+13 Intellect<br>\
+15 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Druid<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 3 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 18.</span>\
<p>'+ cenarion +'</span></td></tr></table>';

//druid end

//hunter begin

var giantstalker = '<span class = "myYellow">\
Giantstalker Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Giantstalker\'s Belt<br>\
&nbsp;Giantstalker\'s Boots<br>\
&nbsp;Giantstalker\'s Bracers<br>\
&nbsp;Giantstalker\'s Helmet<br>\
&nbsp;Giantstalker\'s Gloves<br>\
&nbsp;Giantstalker\'s Leggings<br>\
&nbsp;Giantstalker\'s Epaulets<br>\
&nbsp;Giantstalker\'s Breastplate<br>\
</span><span class = "myGreen">\
(3) Set: Increases the range of your Mend Pet spell by 50% and the effect by 10%.  Also reduces the cost by 30%.<br>\
(5) Set: Increases your pet\'s stamina by 30 and all spell resistances by 40.<br>\
(8) Set: Increases the damage of Multi-shot and Volley by 15%.\
</span>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Giantstalker\'s Helmet</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
343 Armor<br>\
+23 Agility<br>\
+23 Stamina<br>\
+15 Intellect<br>\
+8 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Hunter<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ giantstalker +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Giantstalker\'s Epaulets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
317 Armor<br>\
+24 Agility<br>\
+14 Stamina<br>\
+5 Intellect<br>\
+9 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Hunter<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>'+ giantstalker +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Giantstalker\'s Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
422 Armor<br>\
+26 Agility<br>\
+23 Stamina<br>\
+11 Intellect<br>\
+10 Fire Resistance<br>\
Classes: Hunter<br>\
Durability 140/140<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
<p>'+ giantstalker +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Giantstalker\'s Bracers</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
185 Armor<br>\
+20 Agility<br>\
+11 Stamina<br>\
+6 Intellect<br>\
+5 Spirit<br>\
Classes: Hunter<br>\
Durability 50/50<br>\
Requires Level 60\
<span class = "myGreen">\
</span>\
<p>'+ giantstalker +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Giantstalker\'s Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
264 Armor<br>\
+18 Agility<br>\
+12 Stamina<br>\
+7 Fire Resistance<br>\
Classes: Hunter<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 2%.</span>\
<p>'+ giantstalker +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Giantstalker\'s Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
237 Armor<br>\
+18 Agility<br>\
+16 Stamina<br>\
+9 Intellect<br>\
+4 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Hunter<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%\
</span>\
<p>'+ giantstalker +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Giantstalker\'s Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
369 Armor<br>\
+32 Agility<br>\
+15 Stamina<br>\
+6 Intellect<br>\
+8 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Hunter<br>\
Durability 105/105<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>'+ giantstalker +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Giantstalker\'s Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
290 Armor<br>\
+28 Agility<br>\
+14 Stamina<br>\
+6 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Hunter<br>\
Durability 70/70<br>\
Requires Level 60\
<span class = "myGreen">\
</span>\
<p>'+ giantstalker +'</span></td></tr></table>';

//hunter end

//mage begin

var arcanist = '<span class = "myYellow">\
Arcanist Regalia (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Arcanist Belt<br>\
&nbsp;Arcanist Boots<br>\
&nbsp;Arcanist Bindings<br>\
&nbsp;Arcanist Crown<br>\
&nbsp;Arcanist Gloves<br>\
&nbsp;Arcanist Leggings<br>\
&nbsp;Arcanist Mantle<br>\
&nbsp;Arcanist Robes<br>\
</span><span class = "myGreen">\
(3) Set: Increases damage and healing done by magical spells and effects by up to 18.<br>\
(5) Set: Decreases the magical resistances of your spell targets by 10.<br>\
(8) Set: Decreases the threat generated by your spells by 15%.\
</span>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Arcanist Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
83 Armor<br>\
+16 Stamina<br>\
+27 Intellect<br>\
+10 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Mage<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 20.<br>\
Equip: Improves your chance to hit with spells by 1%.</span>\
<p>'+ arcanist +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Arcanist Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
76 Armor<br>\
+10 Stamina<br>\
+21 Intellect<br>\
+5 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Mage<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 14.\
</span>\
<p>'+ arcanist +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Arcanist Robes</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
102 Armor<br>\
+19 Stamina<br>\
+25 Intellect<br>\
+10 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Mage<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 23.\
<p>'+ arcanist +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Arcanist Bindings</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
44 Armor<br>\
+8 Stamina<br>\
+15 Intellect<br>\
+6 Spirit<br>\
Classes: Mage<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Restores 3 mana per 5 sec.\
</span>\
<p>'+ arcanist +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Arcanist Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
63 Armor<br>\
+14 Stamina<br>\
+15 Intellect<br>\
+10 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Mage<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 14.</span>\
<p>'+ arcanist +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Arcanist Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
57 Armor<br>\
+11 Stamina<br>\
+20 Intellect<br>\
+10 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Mage<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 14.\
</span>\
<p>'+ arcanist +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Arcanist Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
89 Armor<br>\
+18 Stamina<br>\
+23 Intellect<br>\
+10 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Mage<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases healing done by magical spells and effects by up to 20.\
</span>\
<p>'+ arcanist +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Arcanist Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
70 Armor<br>\
+13 Stamina<br>\
+14 Intellect<br>\
+11 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Mage<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 11.</span>\
<p>'+ arcanist +'</span></td></tr></table>';

//mage end

//paladin begin

var lawbringer = '<span class = "myYellow">\
Lawbringer Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Lawbringer Belt<br>\
&nbsp;Lawbringer Boots<br>\
&nbsp;Lawbringer Bracers<br>\
&nbsp;Lawbringer Helm<br>\
&nbsp;Lawbringer Gauntlets<br>\
&nbsp;Lawbringer Legplates<br>\
&nbsp;Lawbringer Spaulders<br>\
&nbsp;Lawbringer Chestguard<br>\
</span><span class = "myGreen">\
(3) Set: Increases the chance of triggering a Judgement of Light heal by 10%.<br>\
(5) Set: Improves your chance to get a critical strike with spells by 1%.<br>\
(5) Set: Improves your chance to get a critical strike by 1%.<br>\
(8) Set: Gives the Paladin a chance on every melee hit to heal your party for 189 to 211.\
</span>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Lawbringer Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
608 Armor<br>\
+9 Strength<br>\
+20 Stamina<br>\
+24 Intellect<br>\
+10 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Paladin<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 22.</span>\
<p>'+ lawbringer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Lawbringer Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
562 Armor<br>\
+10 Strength<br>\
+22 Stamina<br>\
+15 Intellect<br>\
+8 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Paladin<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 18.\
</span>\
<p>'+ lawbringer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Lawbringer Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
749 Armor<br>\
+8 Strength<br>\
+26 Stamina<br>\
+21 Intellect<br>\
+13 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Paladin<br>\
Durability 165/165<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 22.\
<p>'+ lawbringer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Lawbringer Bracers</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
328 Armor<br>\
+10 Strength<br>\
+11 Stamina<br>\
+8 Intellect<br>\
+11 Spirit<br>\
Classes: Paladin<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
</span>\
<p>'+ lawbringer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Lawbringer Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
468 Armor<br>\
+10 Strength<br>\
+15 Stamina<br>\
+15 Intellect<br>\
+14 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Paladin<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 18.</span>\
<p>'+ lawbringer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Lawbringer Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
421 Armor<br>\
+13 Strength<br>\
+15 Stamina<br>\
+20 Intellect<br>\
+8 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Paladin<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 18.\
</span>\
<p>'+ lawbringer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Lawbringer Legplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
655 Armor<br>\
+7 Strength<br>\
+24 Stamina<br>\
+18 Intellect<br>\
+18 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Paladin<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 3 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 22.\
</span>\
<p>'+ lawbringer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Lawbringer Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
515 Armor<br>\
+7 Strength<br>\
+20 Stamina<br>\
+13 Intellect<br>\
+10 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Paladin<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 2 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 18.\
</span>\
<p>'+ lawbringer +'</span></td></tr></table>';

//Paladin end

//priest begin

var prophecy = '<span class = "myYellow">\
Vestments of Prophecy (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Girdle of Prophecy<br>\
&nbsp;Circlet of Prophecy<br>\
&nbsp;Boots of Prophecy<br>\
&nbsp;Gloves of Prophecy<br>\
&nbsp;Mantle of Prophecy<br>\
&nbsp;Pants of Prophecy<br>\
&nbsp;Robes of Prophecy<br>\
&nbsp;Vambraces of Prophecy<br>\
</span><span class = "myGreen">\
(3) Set: -0.1 sec to the casting time of your Flash Heal spell.<br>\
(5) Set: Improves your chance to get a critical strike with Holy spells by 2%.<br>\
(8) Set: Increases your chance of a critical hit with Prayer of Healing by 25%.\
</span>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Circlet of Prophecy</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
83 Armor<br>\
+17 Stamina<br>\
+27 Intellect<br>\
+20 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Priest<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
<p>'+ prophecy +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Mantle of Prophecy</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
76 Armor<br>\
+13 Stamina<br>\
+23 Intellect<br>\
+10 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Priest<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 9.\
</span>\
<p>'+ prophecy +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Robes of Prophecy</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
102 Armor<br>\
+20 Stamina<br>\
+27 Intellect<br>\
+17 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Priest<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 22.\
<p>'+ prophecy +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Vambraces of Prophecy</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
44 Armor<br>\
+8 Stamina<br>\
+14 Intellect<br>\
+10 Spirit<br>\
Classes: Priest<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by magical spells and effects by up to 12.<br>\
Equip: Restores 2 mana per 5 sec.\
</span>\
<p>'+ prophecy +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gloves of Prophecy</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
63 Armor<br>\
+10 Stamina<br>\
+15 Intellect<br>\
+15 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Priest<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 18.</span>\
<p>'+ prophecy +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Girdle of Prophecy</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
57 Armor<br>\
+10 Stamina<br>\
+22 Intellect<br>\
+10 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Priest<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 9.\
</span>\
<p>'+ prophecy +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Pants of Prophecy</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
89 Armor<br>\
+18 Stamina<br>\
+24 Intellect<br>\
+20 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Priest<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 22.\
</span>\
<p>'+ prophecy +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Boots of Prophecy</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
70 Armor<br>\
+17 Stamina<br>\
+18 Intellect<br>\
+15 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Priest<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by magical spells and effects by up to 18.</span>\
<p>'+ prophecy +'</span></td></tr></table>';

//priest end

//rogue begin

var nightslayer = '<span class = "myYellow">\
Nightslayer Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Nightslayer Belt<br>\
&nbsp;Nightslayer Boots<br>\
&nbsp;Nightslayer Bracelets<br>\
&nbsp;Nightslayer Cover<br>\
&nbsp;Nightslayer Gloves<br>\
&nbsp;Nightslayer Pants<br>\
&nbsp;Nightslayer Shoulder Pads<br>\
&nbsp;Nightslayer Chestpiece<br>\
</span><span class = "myGreen">\
(3) Set: Reduces the cooldown of your Vanish ability by 30 sec.<br>\
(5) Set: Increases your maximum Energy by 10.<br>\
(8) Set: Heals the rogue for 500 when Vanish is performed.\
</span>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nightslayer Cover</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
163 Armor<br>\
+6 Strength<br>\
+20 Agility<br>\
+19 Stamina<br>\
+10 Fire Resistance<br>\
Classes: Rogue<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 2%.</span>\
<p>'+ nightslayer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nightslayer Shoulder Pads</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
150 Armor<br>\
+3 Strength<br>\
+26 Agility<br>\
+12 Stamina<br>\
+7 Shadow Resistance<br>\
Classes: Rogue<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>'+ nightslayer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nightslayer Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
200 Armor<br>\
+10 Strength<br>\
+29 Agility<br>\
+20 Stamina<br>\
+10 Fire Resistance<br>\
Classes: Rogue<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
<p>'+ nightslayer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nightslayer Bracelets</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
88 Armor<br>\
+20 Agility<br>\
+15 Stamina<br>\
Classes: Rogue<br>\
Durability 40/40<br>\
Requires Level 60\
<span class = "myGreen">\
</span>\
<p>'+ nightslayer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nightslayer Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
125 Armor<br>\
+12 Strength<br>\
+18 Agility<br>\
+17 Stamina<br>\
+7 Fire Resistance<br>\
Classes: Rogue<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.</span>\
<p>'+ nightslayer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nightslayer Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
113 Armor<br>\
+9 Strength<br>\
+17 Agility<br>\
+18 Stamina<br>\
+7 Fire Resistance<br>\
Classes: Rogue<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>'+ nightslayer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nightslayer Pants</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
175 Armor<br>\
+10 Strength<br>\
+33 Agility<br>\
+15 Stamina<br>\
+10 Shadow Resistance<br>\
Classes: Rogue<br>\
Durability 90/90<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>'+ nightslayer +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nightslayer Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
138 Armor<br>\
+26 Agility<br>\
+18 Stamina<br>\
+7 Shadow Resistance<br>\
Classes: Rogue<br>\
Durability 60/60<br>\
Requires Level 60\
<span class = "myGreen">\
</span>\
<p>'+ nightslayer +'</span></td></tr></table>';

//Rogue end

//shaman begin

var earthfury = '<span class = "myYellow">\
The Earthfury (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Earthfury Belt<br>\
&nbsp;Earthfury Boots<br>\
&nbsp;Earthfury Bracers<br>\
&nbsp;Earthfury Helmet<br>\
&nbsp;Earthfury Gauntlets<br>\
&nbsp;Earthfury Legguards<br>\
&nbsp;Earthfury Epaulets<br>\
&nbsp;Earthfury Vestments<br>\
</span><span class = "myGreen">\
(3) Set: The radius of your totems that affect friendly targets is increased by 10 yd.<br>\
(5) Set: After casting your Healing Wave or Lesser Healing Wave spell, gives you a 25% chance to gain Mana equal to 35% of the base cost of the spell.<br>\
(8) Set: Your Healing Wave will now jump to additional nearby targets. Each jump reduces the effectiveness of the heal by 80%, and the spell will jump to up to two additional targets.\
</span>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthfury Helmet</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
343 Armor<br>\
+24 Stamina<br>\
+23 Intellect<br>\
+13 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Shaman<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 22.</span>\
<p>'+ earthfury +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthfury Epaulets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
317 Armor<br>\
+17 Stamina<br>\
+18 Intellect<br>\
+10 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Shaman<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 18.\
</span>\
<p>'+ earthfury +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthfury Vestments</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
422 Armor<br>\
+17 Stamina<br>\
+27 Intellect<br>\
+13 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Shaman<br>\
Durability 140/140<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases healing done by magical spells and effects by up to 22.</span>\
<p>'+ earthfury +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthfury Bracers</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
185 Armor<br>\
+10 Stamina<br>\
+17 Intellect<br>\
+11 Spirit<br>\
Classes: Shaman<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 6.\
</span>\
<p>'+ earthfury +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthfury Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
264 Armor<br>\
+14 Stamina<br>\
+13 Intellect<br>\
+15 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Shaman<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 9.</span>\
<p>'+ earthfury +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthfury Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
237 Armor<br>\
+12 Stamina<br>\
+21 Intellect<br>\
+7 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Shaman<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 18.\
</span>\
<p>'+ earthfury +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthfury Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
369 Armor<br>\
+18 Stamina<br>\
+19 Intellect<br>\
+21 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Shaman<br>\
Durability 105/105<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 12.\
</span>\
<p>'+ earthfury +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthfury Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
290 Armor<br>\
+15 Stamina<br>\
+10 Intellect<br>\
+22 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Shaman<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by magical spells and effects by up to 18.</span>\
<p>'+ earthfury +'</span></td></tr></table>';

//Shaman end

//warlock begin

var felheart = '<span class = "myYellow">\
Felheart Raiment (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Felheart Belt<br>\
&nbsp;Felheart Bracers<br>\
&nbsp;Felheart Gloves<br>\
&nbsp;Felheart Horns<br>\
&nbsp;Felheart Pants<br>\
&nbsp;Felheart Robes<br>\
&nbsp;Felheart Shoulder Pads<br>\
&nbsp;Felheart Slippers<br>\
</span><span class = "myGreen">\
(3) Set: Health or Mana gained from Drain Life and Drain Mana increased by 15%.<br>\
(5) Set: Your pet gains 15 stamina and 100 spell resistance against all schools of magic.<br>\
(8) Set: Mana cost of Shadow spells reduced by 15%.\
</span>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Felheart Horns</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
83 Armor<br>\
+27 Stamina<br>\
+20 Intellect<br>\
+10 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Warlock<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 20.<br>\
<p>'+ felheart +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Felheart Shoulder Pads</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
76 Armor<br>\
+25 Stamina<br>\
+17 Intellect<br>\
+7 Spirit<br>\
+7 Shadow Resistance<br>\
Classes: Warlock<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 9.\
</span>\
<p>'+ felheart +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Felheart Robes</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
102 Armor<br>\
+31 Stamina<br>\
+20 Intellect<br>\
+10 Fire Resistance<br>\
Classes: Warlock<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 13.<br>\
Equip: Improves your chance to hit with spells by 1%.\
<p>'+ felheart +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Felheart Bracers</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
44 Armor<br>\
+18 Stamina<br>\
+11 Intellect<br>\
+8 Spirit<br>\
Classes: Warlock<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 13.\
</span>\
<p>'+ felheart +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Felheart Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
63 Armor<br>\
+18 Stamina<br>\
+15 Intellect<br>\
+8 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Warlock<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 9.</span>\
<p>'+ felheart +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Felheart Belt</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
57 Armor<br>\
+18 Stamina<br>\
+15 Intellect<br>\
+8 Spirit<br>\
+7 Fire Resistance<br>\
Classes: Warlock<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 20.\
</span>\
<p>'+ felheart +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Felheart Pants</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
89 Armor<br>\
+20 Stamina<br>\
+19 Intellect<br>\
+10 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Warlock<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 30.\
</span>\
<p>'+ felheart +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Felheart Slippers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
70 Armor<br>\
+23 Stamina<br>\
+11 Intellect<br>\
+7 Shadow Resistance<br>\
Classes: Warlock<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 18.</span>\
<p>'+ felheart +'</span></td></tr></table>';

//Warlock end

//warrior begin

var might = '<span class = "myYellow">\
Battlegear of Might (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Belt of Might<br>\
&nbsp;Bracers of Might<br>\
&nbsp;Breastplate of Might<br>\
&nbsp;Gauntlets of Might<br>\
&nbsp;Helm of Might<br>\
&nbsp;Legplates of Might<br>\
&nbsp;Pauldrons of Might<br>\
&nbsp;Sabatons of Might<br>\
</span><span class = "myGreen">\
(3) Set: Increases the block value of your shield by 30.<br>\
(5) Set: Gives you a 20% chance to generate an additional Rage point whenever damage is dealt to you.<br>\
(8) Set: Increases the threat generated by Sunder Armor by 15%.\
</span>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Helm of Might</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
608 Armor<br>\
+15 Strength<br>\
+35 Stamina<br>\
+10 Fire Resistance<br>\
Classes: Warrior<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to dodge an attack by 1%.<br>\
Equip: Increased Defense +7.</span>\
<p>'+ might +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Pauldrons of Might</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
562 Armor<br>\
+15 Strength<br>\
+22 Stamina<br>\
+7 Shadow Resistance<br>\
Classes: Warrior<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to block attacks with a shield by 2%.<br>\
Equip: Increased Defense +5.\
</span>\
<p>'+ might +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Breastplate of Might</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
749 Armor<br>\
+20 Strength<br>\
+28 Stamina<br>\
+10 Fire Resistance<br>\
Classes: Warrior<br>\
Durability 165/165<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to block attacks with a shield by 3%.<br>\
Equip: Increased Defense +7.\
<p>'+ might +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bracers of Might</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
328 Armor<br>\
+11 Strength<br>\
+23 Stamina<br>\
Classes: Warrior<br>\
Durability 55/55<br>\
Requires Level 60\
<span class = "myGreen">\
</span>\
<p>'+ might +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gauntlets of Might</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
468 Armor<br>\
+22 Strength<br>\
+17 Stamina<br>\
+7 Fire Resistance<br>\
Classes: Warrior<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.<br>\
Equip: Increased Defense +5.</span>\
<p>'+ might +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Belt of Might</span><br>\
Binds when equipped<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
421 Armor<br>\
+21 Strength<br>\
+15 Stamina<br>\
+7 Fire Resistance<br>\
Classes: Warrior<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to dodge an attack by 1%.<br>\
Equip: Increased Defense +5\
</span>\
<p>'+ might +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Legplates of Might</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
655 Armor<br>\
+24 Strength<br>\
+23 Stamina<br>\
+10 Shadow Resistance<br>\
Classes: Warrior<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to parry an attack by 1%.<br>\
Equip: Increased Defense +7.\
</span>\
<p>'+ might +'</span></td></tr></table>';

t++;
armorSetTier1Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Sabatons of Might</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
515 Armor<br>\
+15 Strength<br>\
+26 Stamina<br>\
+7 Shadow Resistance<br>\
Classes: Warrior<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increased Defense +5.\
</span>\
<p>'+ might +'</span></td></tr></table>';

//Warrior end

armorSetsArray[theArmorSetCounter] = armorSetTier1Raid;
armorSetsValues[theArmorSetCounter] = "tier1raid";
theArmorSetCounter++;