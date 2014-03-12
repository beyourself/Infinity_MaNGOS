var armorSetTier2Raid = new armorSetObject("tier2raid");

armorSetTier2Raid.slotsArray = new Array();

t = 0;
armorSetTier2Raid.slotsArray[t] = "head"; t++;
armorSetTier2Raid.slotsArray[t] = "shoulder"; t++;
armorSetTier2Raid.slotsArray[t] = "chest"; t++;
armorSetTier2Raid.slotsArray[t] = "wrist"; t++;
armorSetTier2Raid.slotsArray[t] = "hands"; t++;
armorSetTier2Raid.slotsArray[t] = "waist"; t++;
armorSetTier2Raid.slotsArray[t] = "legs"; t++;
armorSetTier2Raid.slotsArray[t] = "feet"; t++;

armorSetTier2Raid.slotsNumber = armorSetTier2Raid.slotsArray.length;


//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

armorSetTier2Raid.setNamesArray = new Array();
t = 0;
armorSetTier2Raid.setNamesArray[t] = "Stormrage Raiment"; t++;
armorSetTier2Raid.setNamesArray[t] = "Dragonstalker Armor"; t++;
armorSetTier2Raid.setNamesArray[t] = "Netherwind Regalia"; t++;
armorSetTier2Raid.setNamesArray[t] = "Judgement Armor"; t++;
armorSetTier2Raid.setNamesArray[t] = "Vestments of Transcendence"; t++;
armorSetTier2Raid.setNamesArray[t] = "Bloodfang Armor"; t++;
armorSetTier2Raid.setNamesArray[t] = "The Ten Storms"; t++;
armorSetTier2Raid.setNamesArray[t] = "Nemesis Raiment"; t++;
armorSetTier2Raid.setNamesArray[t] = "Battlegear of Wrath"; t++;

armorSetTier2Raid.statsArray = new Array();

t = 0;


//druid begin

var stormrage = '<span class = "myYellow">\
Stormrage Raiment (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Stormrage Belt<br>\
&nbsp;Stormrage Boots<br>\
&nbsp;Stormrage Bracers<br>\
&nbsp;Stormrage Cover<br>\
&nbsp;Stormrage Handguards<br>\
&nbsp;Stormrage Legguards<br>\
&nbsp;Stormrage Pauldrons<br>\
&nbsp;Stormrage Chestguard<br>\
</span><span class = "myGreen">\
(3) Set: Allows 15% of your Mana regeneration to continue while casting.<br>\
(5) Set: Reduces the casting time of your Regrowth spell by 0.2 sec.<br>\
(8) Set: Increases the duration of your Rejuvenation spell by 3 sec.\
</span>';


armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Stormrage Cover</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
183 Armor<br>\
+20 Stamina<br>\
+31 Intellect<br>\
+12 Spirit<br>\
+10 Frost Resistance<br>\
+10 Shadow Resistance<br>\
Classes: Druid<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 29.</span>\
<p>'+ stormrage +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Stormrage Pauldrons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
169 Armor<br>\
+14 Stamina<br>\
+21 Intellect<br>\
+10 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Druid<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 29.\
</span>\
<p>'+ stormrage +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Stormrage Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
225 Armor<br>\
+20 Stamina<br>\
+25 Intellect<br>\
+17 Spirit<br>\
+10 Fire Resistance<br>\
+10 Nature Resistance<br>\
Classes: Druid<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases healing done by magical spells and effects by up to 42.</span>\
<p>'+ stormrage +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Stormrage Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
98 Armor<br>\
+11 Stamina<br>\
+15 Intellect<br>\
+12 Spirit<br>\
Classes: Druid<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by magical spells and effects by up to 33.\
</span>\
<p>'+ stormrage +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Stormrage Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
140 Armor<br>\
+13 Stamina<br>\
+19 Intellect<br>\
+15 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Druid<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by magical spells and effects by up to 42.</span>\
<p>'+ stormrage +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Stormrage Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
126 Armor<br>\
+12 Stamina<br>\
+23 Intellect<br>\
+10 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Druid<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 26.\
</span>\
<p>'+ stormrage +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Stormrage Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
197 Armor<br>\
+17 Stamina<br>\
+26 Intellect<br>\
+16 Spirit<br>\
+10 Arcane Resistance<br>\
+10 Fire Resistance<br>\
Classes: Druid<br>\
Durability 90/90<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases healing done by magical spells and effects by up to 48.\
</span>\
<p>'+ stormrage +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Stormrage Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
154 Armor<br>\
+15 Stamina<br>\
+17 Intellect<br>\
+11 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Druid<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases healing done by magical spells and effects by up to 26.</span>\
<p>'+ stormrage +'</span></td></tr></table>';

//druid end

//hunter begin

var dragonstalker = '<span class = "myYellow">\
Dragonstalker Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Dragonstalker\'s Belt<br>\
&nbsp;Dragonstalker\'s Greaves<br>\
&nbsp;Dragonstalker\'s Bracers<br>\
&nbsp;Dragonstalker\'s Helm<br>\
&nbsp;Dragonstalker\'s Gauntlets<br>\
&nbsp;Dragonstalker\'s Legguards<br>\
&nbsp;Dragonstalker\'s Spaulders<br>\
&nbsp;Dragonstalker\'s Breastplate<br>\
</span><span class = "myGreen">\
(3) Set: Increases the Ranged Attack Power bonus of your Aspect of the Hawk by 20%.<br>\
(5) Set: Increases your pet\'s stamina by 40 and all spell resistances by 60.<br>\
(8) Set: You have a chance whenever you deal ranged damage to apply an Expose Weakness effect to the target. Expose Weakness increases the Ranged Attack Power of all attackers against that target by 450 for 7 sec.\
</span>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dragonstalker\'s Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
392 Armor<br>\
+27 Agility<br>\
+26 Stamina<br>\
+16 Intellect<br>\
+8 Spirit<br>\
+10 Frost Resistance<br>\
+10 Shadow Resistance<br>\
Classes: Hunter<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ dragonstalker +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dragonstalker\'s Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
362 Armor<br>\
+23 Agility<br>\
+15 Stamina<br>\
+13 Intellect<br>\
+6 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Hunter<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>'+ dragonstalker +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dragonstalker\'s Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
482 Armor<br>\
+34 Agility<br>\
+17 Stamina<br>\
+14 Intellect<br>\
+6 Spirit<br>\
+10 Fire Resistance<br>\
+10 Nature Resistance<br>\
Classes: Hunter<br>\
Durability 140/140<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
<p>'+ dragonstalker +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dragonstalker\'s Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
211 Armor<br>\
+23 Agility<br>\
+13 Stamina<br>\
+6 Intellect<br>\
+6 Spirit<br>\
Classes: Hunter<br>\
Durability 50/50<br>\
Requires Level 60\
<span class = "myGreen">\
</span>\
<p>'+ dragonstalker +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dragonstalker\'s Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
301 Armor<br>\
+20 Agility<br>\
+17 Stamina<br>\
+13 Intellect<br>\
+6 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Hunter<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ dragonstalker +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dragonstalker\'s Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
271 Armor<br>\
+20 Agility<br>\
+15 Stamina<br>\
+13 Intellect<br>\
+11 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Hunter<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%\
</span>\
<p>'+ dragonstalker +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dragonstalker\'s Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
422 Armor<br>\
+31 Agility<br>\
+16 Stamina<br>\
+15 Intellect<br>\
+8 Spirit<br>\
+10 Fire Resistance<br>\
+10 Arcane Resistance<br>\
Classes: Hunter<br>\
Durability 105/105<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.<br>\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>'+ dragonstalker +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dragonstalker\'s Greaves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
332 Armor<br>\
+30 Agility<br>\
+15 Stamina<br>\
+6 Intellect<br>\
+6 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Hunter<br>\
Durability 70/70<br>\
Requires Level 60\
<span class = "myGreen">\
</span>\
<p>'+ dragonstalker +'</span></td></tr></table>';

//hunter end

//mage begin

var netherwind = '<span class = "myYellow">\
Netherwind Regalia (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Netherwind Belt<br>\
&nbsp;Netherwind Boots<br>\
&nbsp;Netherwind Bindings<br>\
&nbsp;Netherwind Crown<br>\
&nbsp;Netherwind Gloves<br>\
&nbsp;Netherwind Pants<br>\
&nbsp;Netherwind Mantle<br>\
&nbsp;Netherwind Robes<br>\
</span><span class = "myGreen">\
(3) Set: Reduces the threat generated by your Scorch,  Arcane Missiles, Fireball, and Frostbolt spells.<br>\
(5) Set: Increases the radius of Arcane Explosion, Flamestrike, and Blizzard by 25%.<br>\
(8) Set: 10% chance after casting Arcane Missiles, Fireball, or Frostbolt that your next spell with a casting time under 10 seconds cast instantly.\
</span>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherwind Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
94 Armor<br>\
+17 Stamina<br>\
+26 Intellect<br>\
+7 Spirit<br>\
+10 Frost Resistance<br>\
+10 Shadow Resistance<br>\
Classes: Mage<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 32.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p>'+ netherwind +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherwind Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
87 Armor<br>\
+16 Stamina<br>\
+13 Intellect<br>\
+12 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Mage<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 21.\
</span>\
<p>'+ netherwind +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherwind Robes</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
116 Armor<br>\
+16 Stamina<br>\
+26 Intellect<br>\
+8 Spirit<br>\
+10 Fire Resistance<br>\
+10 Nature Resistance<br>\
Classes: Mage<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.\
<p>'+ netherwind +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherwind Bindings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
51 Armor<br>\
+9 Stamina<br>\
+15 Intellect<br>\
+8 Spirit<br>\
Classes: Mage<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 19.<br>\
Equip: Restores 4 mana per 5 sec.\
</span>\
<p>'+ netherwind +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherwind Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
72 Armor<br>\
+16 Stamina<br>\
+16 Intellect<br>\
+6 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Mage<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 20.</span>\
<p>'+ netherwind +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherwind Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
65 Armor<br>\
+13 Stamina<br>\
+20 Intellect<br>\
+13 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Mage<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 23.\
</span>\
<p>'+ netherwind +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherwind Pants</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
101 Armor<br>\
+16 Stamina<br>\
+27 Intellect<br>\
+5 Spirit<br>\
+10 Arcane Resistance<br>\
+10 Fire Resistance<br>\
Classes: Mage<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 30.\
</span>\
<p>'+ netherwind +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Netherwind Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
80 Armor<br>\
+13 Stamina<br>\
+16 Intellect<br>\
+10 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Mage<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 27.</span>\
<p>'+ netherwind +'</span></td></tr></table>';

//mage end

//paladin begin

var judgement = '<span class = "myYellow">\
Judgement Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Judgement Belt<br>\
&nbsp;Judgement Sabatons<br>\
&nbsp;Judgement Bindings<br>\
&nbsp;Judgement Crown<br>\
&nbsp;Judgement Gauntlets<br>\
&nbsp;Judgement Legplates<br>\
&nbsp;Judgement Spaulders<br>\
&nbsp;Judgement Breastplate<br>\
</span><span class = "myGreen">\
(3) Set: Increases the radius of a Paladin\'s auras by 10.<br>\
(5) Set: Increases damage and healing done by magical spells and effects by up to 47.<br>\
(8) Set: Inflicts 60 to 66 additional Holy damage on the target of a Paladin\'s Judgement.\
</span>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Judgement Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
696 Armor<br>\
+17 Strength<br>\
+18 Stamina<br>\
+23 Intellect<br>\
+6 Spirit<br>\
+10 Frost Resistance<br>\
+10 Shadow Resistance<br>\
Classes: Paladin<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by spells and effects by up to 32.</span>\
<p>'+ judgement +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Judgement Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
642 Armor<br>\
+13 Strength<br>\
+20 Stamina<br>\
+14 Intellect<br>\
+6 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Paladin<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 5 mana per 5 sec.<br>\
Equip: Increases damage and healing done by spells and effects by up to 13.\
</span>\
<p>'+ judgement +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Judgement Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
857 Armor<br>\
+16 Strength<br>\
+21 Stamina<br>\
+21 Intellect<br>\
+5 Spirit<br>\
+10 Fire Resistance<br>\
+10 Nature Resistance<br>\
Classes: Paladin<br>\
Durability 165/165<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 5 mana per 5 sec.<br>\
Equip: Increases damage and healing done by spells and effects by up to 25.\
<p>'+ judgement +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Judgement Bindings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
375 Armor<br>\
+9 Strength<br>\
+21 Stamina<br>\
+9 Intellect<br>\
+8 Spirit<br>\
Classes: Paladin<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 7.\
</span>\
<p>'+ judgement +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Judgement Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
535 Armor<br>\
+6 Strength<br>\
+15 Stamina<br>\
+20 Intellect<br>\
+6 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Paladin<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases damage and healing done by spells and effects by up to 15.</span>\
<p>'+ judgement +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Judgement Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
482 Armor<br>\
+8 Strength<br>\
+14 Stamina<br>\
+20 Intellect<br>\
+6 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Paladin<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by spells and effects by up to 23.\
</span>\
<p>'+ judgement +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Judgement Legplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
749 Armor<br>\
+10 Strength<br>\
+26 Stamina<br>\
+27 Intellect<br>\
+5 Spirit<br>\
+10 Arcane Resistance<br>\
+10 Fire Resistance<br>\
Classes: Paladin<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases damage and healing done by spells and effects by up to 20.\
</span>\
<p>'+ judgement +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Judgement Sabatons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
589 Armor<br>\
+13 Strength<br>\
+20 Stamina<br>\
+14 Intellect<br>\
+8 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Paladin<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by spells and effects by up to 18.\
</span>\
<p>'+ judgement +'</span></td></tr></table>';

//Paladin end

//priest begin

var transcendence = '<span class = "myYellow">\
Vestments of Transcendence (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Belt of Transcendence<br>\
&nbsp;Halo of Transcendence<br>\
&nbsp;Boots of Transcendence<br>\
&nbsp;Handguards of Transcendence<br>\
&nbsp;Pauldrons of Transcendence<br>\
&nbsp;Leggings of Transcendence<br>\
&nbsp;Robes of Transcendence<br>\
&nbsp;Bindings of Transcendence<br>\
</span><span class = "myGreen">\
(3) Set: Allows 15% of your Mana regeneration to continue while casting.<br>\
(5) Set: When struck in melee there is a 50% chance you will Fade for 4 sec.<br>\
(8) Set: Your Greater Heals now have a heal over time component equivalent to a rank 5 Renew.\
</span>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Halo of Transcendence</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
94 Armor<br>\
+17 Stamina<br>\
+27 Intellect<br>\
+22 Spirit<br>\
+10 Fire Resistance<br>\
+10 Frost Resistance<br>\
Classes: Priest<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 48.<br>\
<p>'+ transcendence +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Pauldrons of Transcendence</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
87 Armor<br>\
+12 Stamina<br>\
+25 Intellect<br>\
+13 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Priest<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 26.\
</span>\
<p>'+ transcendence +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Robes of Transcendence</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
116 Armor<br>\
+17 Stamina<br>\
+27 Intellect<br>\
+16 Spirit<br>\
+10 Fire Resistance<br>\
+10 Nature Resistance<br>\
Classes: Priest<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 57.\
<p>'+ transcendence +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bindings of Transcendence</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
51 Armor<br>\
+9 Stamina<br>\
+13 Intellect<br>\
+16 Spirit<br>\
Classes: Priest<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 33.\
</span>\
<p>'+ transcendence +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Handguards of Transcendence</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
72 Armor<br>\
+12 Stamina<br>\
+20 Intellect<br>\
+13 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Priest<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases healing done by spells and effects by up to 29.</span>\
<p>'+ transcendence +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Belt of Transcendence</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
65 Armor<br>\
+14 Stamina<br>\
+26 Intellect<br>\
+9 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Priest<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 26.\
</span>\
<p>'+ transcendence +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Leggings of Transcendence</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
101 Armor<br>\
+16 Stamina<br>\
+21 Intellect<br>\
+21 Spirit<br>\
+10 Arcane Resistance<br>\
+10 Shadow Resistance<br>\
Classes: Priest<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 7 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 46.\
</span>\
<p>'+ transcendence +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Boots of Transcendence</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
80 Armor<br>\
+17 Stamina<br>\
+17 Intellect<br>\
+17 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Priest<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 35.</span>\
<p>'+ transcendence +'</span></td></tr></table>';

//priest end

//rogue begin

var bloodfang = '<span class = "myYellow">\
Bloodfang Armor (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Bloodfang Belt<br>\
&nbsp;Bloodfang Boots<br>\
&nbsp;Bloodfang Bracers<br>\
&nbsp;Bloodfang Hood<br>\
&nbsp;Bloodfang Gloves<br>\
&nbsp;Bloodfang Pants<br>\
&nbsp;Bloodfang Spaulders<br>\
&nbsp;Bloodfang Chestpiece<br>\
</span><span class = "myGreen">\
(3) Set: Increases the chance to apply poisons to your target by 5%.<br>\
(5) Set: Improves the threat reduction of Feint by 25%.<br>\
(8) Set: Gives the Rogue a chance to inflict 283 to 317 damage on the target and heal the Rogue for 50 health every 1 sec. for 6 sec. on a melee hit.\
</span>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bloodfang Hood</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
183 Armor<br>\
+19 Strength<br>\
+27 Agility<br>\
+25 Stamina<br>\
+10 Frost Resistance<br>\
+10 Shadow Resistance<br>\
Classes: Rogue<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.</span>\
<p>'+ bloodfang +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bloodfang Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
169 Armor<br>\
+6 Strength<br>\
+25 Agility<br>\
+17 Stamina<br>\
+10 Fire Resistance<br>\
Classes: Rogue<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to dodge an attack by 1%.\
</span>\
<p>'+ bloodfang +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bloodfang Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
225 Armor<br>\
+12 Strength<br>\
+26 Agility<br>\
+17 Stamina<br>\
+10 Fire Resistance<br>\
+10 Nature Resistance<br>\
Classes: Rogue<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 2%.\
<p>'+ bloodfang +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bloodfang Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
98 Armor<br>\
+23 Agility<br>\
+13 Stamina<br>\
Classes: Rogue<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Improves your chance to hit by 1%.<br>\
</span>\
<p>'+ bloodfang +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bloodfang Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
140 Armor<br>\
+19 Strength<br>\
+20 Agility<br>\
+20 Stamina<br>\
+10 Shadow Resistance<br>\
Classes: Rogue<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Immune to Disarm.</span>\
<p>'+ bloodfang +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bloodfang Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
126 Armor<br>\
+13 Strength<br>\
+20 Agility<br>\
+15 Stamina<br>\
+10 Shadow Resistance<br>\
Classes: Rogue<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>'+ bloodfang +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bloodfang Pants</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
197 Armor<br>\
+11 Strength<br>\
+37 Agility<br>\
+17 Stamina<br>\
+10 Arcane Resistance<br>\
+10 Fire Resistance<br>\
Classes: Rogue<br>\
Durability 90/90<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>'+ bloodfang +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bloodfang Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
154 Armor<br>\
+6 Strength<br>\
+25 Agility<br>\
+17 Stamina<br>\
+10 Fire Resistance<br>\
Classes: Rogue<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to dodge an attack by 1%.\
</span>\
<p>'+ bloodfang +'</span></td></tr></table>';

//Rogue end

//shaman begin

var tenstorms = '<span class = "myYellow">\
The Ten Storms (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Belt of Ten Storms<br>\
&nbsp;Greaves of Ten Storms<br>\
&nbsp;Bracers of Ten Storms<br>\
&nbsp;Helmet of Ten Storms<br>\
&nbsp;Gauntlets of Ten Storms<br>\
&nbsp;Legplates of Ten Storms<br>\
&nbsp;Epaulets of Ten Storms<br>\
&nbsp;Breastplate of Ten Storms<br>\
</span><span class = "myGreen">\
(3) Set: Increases the amount healed by Chain Heal to targets beyond the first by 30%.<br>\
(5) Set: Improves your chance to get a critical strike with Nature spells by 3%.<br>\
(8) Set: When you cast a Healing Wave or Lesser Healing Wave, there is a 25% chance the target also receives a free Lightning Shield that causes 50 Nature damage to attacker on hit.\
</span>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Helmet of Ten Storms</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
392 Armor<br>\
+20 Stamina<br>\
+24 Intellect<br>\
+12 Spirit<br>\
+10 Frost Resistance<br>\
+10 Shadow Resistance<br>\
Classes: Shaman<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 9.<br>\
Equip: Increases healing done by spells and effects by up to 18.</span>\
<p>'+ tenstorms +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Epaulets of Ten Storms</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
362 Armor<br>\
+23 Stamina<br>\
+17 Intellect<br>\
+8 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Shaman<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.\
</span>\
<p>'+ tenstorms +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Breastplate of Ten Storms</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
482 Armor<br>\
+17 Stamina<br>\
+31 Intellect<br>\
+16 Spirit<br>\
+10 Fire Resistance<br>\
+10 Nature Resistance<br>\
Classes: Shaman<br>\
Durability 140/140<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 23.\
<p>'+ tenstorms +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bracers of Ten Storms</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
211 Armor<br>\
+13 Stamina<br>\
+16 Intellect<br>\
+9 Spirit<br>\
Classes: Shaman<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>'+ tenstorms +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gauntlets of Ten Storms</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
301 Armor<br>\
+15 Stamina<br>\
+17 Intellect<br>\
+13 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Shaman<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 8.<br>\
Equip: Increases healing done by spells and effects by up to 15.</span>\
<p>'+ tenstorms +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Belt of Ten Storms</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
271 Armor<br>\
+13 Stamina<br>\
+18 Intellect<br>\
+11 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Shaman<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases healing done by magical spells and effects by up to 26.\
</span>\
<p>'+ tenstorms +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Legplates of Ten Storms</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
422 Armor<br>\
+16 Stamina<br>\
+18 Intellect<br>\
+20 Spirit<br>\
+10 Arcane Resistance<br>\
+10 Fire Resistance<br>\
Classes: Shaman<br>\
Durability 105/105<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 29.\
</span>\
<p>'+ tenstorms +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Greaves of Ten Storms</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
332 Armor<br>\
+17 Stamina<br>\
+16 Intellect<br>\
+16 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Shaman<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 20.</span>\
<p>'+ tenstorms +'</span></td></tr></table>';

//Shaman end

//warlock begin

var nemesis = '<span class = "myYellow">\
Nemesis Raiment (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Nemesis Belt<br>\
&nbsp;Nemesis Bracers<br>\
&nbsp;Nemesis Gloves<br>\
&nbsp;Nemesis Skullcap<br>\
&nbsp;Nemesis Leggings<br>\
&nbsp;Nemesis Robes<br>\
&nbsp;Nemesis Spaulders<br>\
&nbsp;Nemesis Boots<br>\
</span><span class = "myGreen">\
(3) Set: Increases damage and healing done by magical spells and effects by up to 23.<br>\
(5) Set: Your pet gains 20 stamina and 130 spell resistance against all schools of magic.<br>\
(8) Set: Reduces the threat generated by your Destruction spells by 20%.\
</span>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nemesis Skullcap</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
94 Armor<br>\
+26 Stamina<br>\
+16 Intellect<br>\
+6 Spirit<br>\
+10 Frost Resistance<br>\
+10 Shadow Resistance<br>\
Classes: Warlock<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 health every 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 32.<br>\
<p>'+ nemesis +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nemesis Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
87 Armor<br>\
+20 Stamina<br>\
+13 Intellect<br>\
+6 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Warlock<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 health every 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 23.\
</span>\
<p>'+ nemesis +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nemesis Robes</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
116 Armor<br>\
+26 Stamina<br>\
+16 Intellect<br>\
+8 Spirit<br>\
+10 Fire Resistance<br>\
+10 Nature Resistance<br>\
Classes: Warlock<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 32.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
<p>'+ nemesis +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nemesis Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
51 Armor<br>\
+21 Stamina<br>\
+11 Intellect<br>\
+6 Spirit<br>\
Classes: Warlock<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 15.\
</span>\
<p>'+ nemesis +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nemesis Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
72 Armor<br>\
+17 Stamina<br>\
+15 Intellect<br>\
+10 Shadow Resistance<br>\
Classes: Warlock<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 health every 5 sec.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 15.</span>\
<p>'+ nemesis +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nemesis Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
65 Armor<br>\
+18 Stamina<br>\
+8 Intellect<br>\
+6 Spirit<br>\
+10 Shadow Resistance<br>\
Classes: Warlock<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 25.\
</span>\
<p>'+ nemesis +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nemesis Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
101 Armor<br>\
+23 Stamina<br>\
+16 Intellect<br>\
+4 Spirit<br>\
+10 Arcane Resistance<br>\
+10 Fire Resistance<br>\
Classes: Warlock<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 39.\
</span>\
<p>'+ nemesis +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Nemesis Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
80 Armor<br>\
+20 Stamina<br>\
+17 Intellect<br>\
+6 Spirit<br>\
+10 Fire Resistance<br>\
Classes: Warlock<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 23.</span>\
<p>'+ nemesis +'</span></td></tr></table>';

//Warlock end

//warrior begin

var wrath = '<span class = "myYellow">\
Battlegear of Wrath (0/8)<br>\
</span><span class = "myGray">\
&nbsp;Waistband of Wrath<br>\
&nbsp;Bracelets of Wrath<br>\
&nbsp;Breastplate of Wrath<br>\
&nbsp;Gauntlets of Wrath<br>\
&nbsp;Helm of Wrath<br>\
&nbsp;Legplates of Wrath<br>\
&nbsp;Pauldrons of Wrath<br>\
&nbsp;Sabatons of Wrath<br>\
</span><span class = "myGreen">\
(3) Set: Increases the attack power granted by Battle Shout by 30.<br>\
(5) Set: 20% chance after using an offensive ability requiring rage that your next offensive ability requires 5 less rage to use.<br>\
(8) Set: 4% chance to parry the next attack after a block.\
</span>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Helm of Wrath</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
696 Armor<br>\
+17 Strength<br>\
+40 Stamina<br>\
+10 Frost Resistance<br>\
+10 Shadow Resistance<br>\
Classes: Warrior<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increased Defense +11.</span>\
<p>'+ wrath +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Pauldrons of Wrath</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
642 Armor<br>\
+13 Strength<br>\
+27 Stamina<br>\
+10 Fire Resistance<br>\
Classes: Warrior<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases the block value of your shield by 27.<br>\
Equip: Increased Defense +7.\
</span>\
<p>'+ wrath +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Breastplate of Wrath</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
857 Armor<br>\
+17 Strength<br>\
+40 Stamina<br>\
+10 Fire Resistance<br>\
+10 Nature Resistance<br>\
Classes: Warrior<br>\
Durability 165/165<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increased Defense +11.\
<p>'+ wrath +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bracers of Wrath</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
375 Armor<br>\
+13 Strength<br>\
+27 Stamina<br>\
Classes: Warrior<br>\
Durability 55/55<br>\
Requires Level 60\
<span class = "myGreen">\
</span>\
<p>'+ wrath +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gauntlets of Wrath</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
535 Armor<br>\
+15 Strength<br>\
+20 Stamina<br>\
+10 Shadow Resistance<br>\
Classes: Warrior<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to parry an attack by 1%.<br>\
Equip: Increased Defense +7.</span>\
<p>'+ wrath +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Waistband of Wrath</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
482 Armor<br>\
+20 Strength<br>\
+20 Stamina<br>\
+10 Shadow Resistance<br>\
Classes: Warrior<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to block attacks with a shield by 3%.<br>\
Equip: Increased Defense +7\
</span>\
<p>'+ wrath +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Legplates of Wrath</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
749 Armor<br>\
+19 Strength<br>\
+27 Stamina<br>\
+10 Arcane Resistance<br>\
+10 Fire Resistance<br>\
Classes: Warrior<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to dodge an attack by 2%.<br>\
Equip: Increased Defense +11.\
</span>\
<p>'+ wrath +'</span></td></tr></table>';

t++;
armorSetTier2Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Sabatons of Wrath</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
589 Armor<br>\
+13 Strength<br>\
+30 Stamina<br>\
+10 Fire Resistance<br>\
Classes: Warrior<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases the block value of your shield by 14.<br>\
Equip: Increased Defense +7.\
</span>\
<p>'+ wrath +'</span></td></tr></table>';

//Warrior end

armorSetsArray[theArmorSetCounter] = armorSetTier2Raid;
armorSetsValues[theArmorSetCounter] = "tier2raid";
theArmorSetCounter++;

