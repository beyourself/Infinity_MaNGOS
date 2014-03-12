var armorSetTier3Raid = new armorSetObject("tier3raid");

armorSetTier3Raid.slotsArray = new Array();

t = 0;
armorSetTier3Raid.slotsArray[t] = "head"; t++;
armorSetTier3Raid.slotsArray[t] = "shoulder"; t++;
armorSetTier3Raid.slotsArray[t] = "chest"; t++;
armorSetTier3Raid.slotsArray[t] = "wrist"; t++;
armorSetTier3Raid.slotsArray[t] = "hands"; t++;
armorSetTier3Raid.slotsArray[t] = "waist"; t++;
armorSetTier3Raid.slotsArray[t] = "legs"; t++;
armorSetTier3Raid.slotsArray[t] = "feet"; t++;
armorSetTier3Raid.slotsArray[t] = "finger"; t++;

armorSetTier3Raid.slotsNumber = armorSetTier3Raid.slotsArray.length;


//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

armorSetTier3Raid.setNamesArray = new Array();
t = 0;
armorSetTier3Raid.setNamesArray[t] = "Dreamwalker Raiment"; t++;
armorSetTier3Raid.setNamesArray[t] = "Cryptstalker Armor"; t++;
armorSetTier3Raid.setNamesArray[t] = "Frostfire Regalia"; t++;
armorSetTier3Raid.setNamesArray[t] = "Redemption Armor"; t++;
armorSetTier3Raid.setNamesArray[t] = "Vestments of Faith"; t++;
armorSetTier3Raid.setNamesArray[t] = "Bonescythe Armor"; t++;
armorSetTier3Raid.setNamesArray[t] = "The Earthshatterer"; t++;
armorSetTier3Raid.setNamesArray[t] = "Plagueheart Raiment"; t++;
armorSetTier3Raid.setNamesArray[t] = "Dreadnaught's Battlegear"; t++;

armorSetTier3Raid.statsArray = new Array();

t = 0;

//druid begin


var dreamwalker = '<span class = "myYellow">\
Dreamwalker Raiment (0/9)<br>\
</span><span class = "myGray">\
&nbsp;Dreamwalker Girdle<br>\
&nbsp;Dreamwalker Boots<br>\
&nbsp;Dreamwalker Wristguards<br>\
&nbsp;Dreamwalker Headpiece<br>\
&nbsp;Dreamwalker Handguards<br>\
&nbsp;Dreamwalker Legguards<br>\
&nbsp;Dreamwalker Spaulders<br>\
&nbsp;Dreamwalker Tunic<br>\
&nbsp;Ring of the Dreamwalker<br>\
</span><span class = "myGreen">\
(2) Set: Your rejuvenation ticks have a chance to restore 60 mana, 8 energy, or 2 rage to your target.<br>\
(4) Set: Reduces the mana cost of your Healing Touch, Regrowth, Rejuvenation, and Tranquility spells by 3%.<br>\
(6) Set: Your initial cast and regrowth ticks will increase the maximum health of your target by up to 50, stacking up to 7 times.<br>\
(8) Set: On Healing Touch critical hits, you regain 30% of the mana cost of the spell.\
</span>';


armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreamwalker Headpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
205 Armor<br>\
+25 Stamina<br>\
+31 Intellect<br>\
+20 Spirit<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 66.</span>\
<p>'+ dreamwalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreamwalker Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
186 Armor<br>\
+18 Stamina<br>\
+22 Intellect<br>\
+12 Spirit<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 5 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 48.\
</span>\
<p>'+ dreamwalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreamwalker Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
262 Armor<br>\
+29 Stamina<br>\
+29 Intellect<br>\
+19 Spirit<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 66.<br>\
Equip: Restores 8 mana per 5 sec.</span>\
<p>'+ dreamwalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreamwalker Wristguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
111 Armor<br>\
+14 Stamina<br>\
+16 Intellect<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 40.<br>\
Equip: Restores 5 mana per 5 sec.\
</span>\
<p>'+ dreamwalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreamwalker Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
158 Armor<br>\
+17 Stamina<br>\
+22 Intellect<br>\
+16 Spirit<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 53.</span>\
<p>'+ dreamwalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreamwalker Girdle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
142 Armor<br>\
+14 Stamina<br>\
+23 Intellect<br>\
+13 Spirit<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 51.\
</span>\
<p>'+ dreamwalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreamwalker Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
221 Armor<br>\
+22 Stamina<br>\
+26 Intellect<br>\
+20 Spirit<br>\
Durability 90/90<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 8 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 66.\
</span>\
<p>'+ dreamwalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreamwalker Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
171 Armor<br>\
+20 Stamina<br>\
+20 Intellect<br>\
+14 Spirit<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 5 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 46.</span>\
<p>'+ dreamwalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Ring of the Dreamwalker</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+16 Stamina<br>\
+16 Intellect<br>\
+16 Spirit<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 37.</span>\
<p>'+ dreamwalker +'</span></td></tr></table>';

//druid end

//hunter begin

var cryptstalker = '<span class = "myYellow">\
Cryptstalker Armor (0/9)<br>\
</span><span class = "myGray">\
&nbsp;Cryptstalker Girdle<br>\
&nbsp;Cryptstalker Boots<br>\
&nbsp;Cryptstalker Wristguards<br>\
&nbsp;Cryptstalker Headpiece<br>\
&nbsp;Cryptstalker Handguards<br>\
&nbsp;Cryptstalker Legguards<br>\
&nbsp;Cryptstalker Spaulders<br>\
&nbsp;Cryptstalker Tunic<br>\
&nbsp;Ring of the Cryptstalker<br>\
</span><span class = "myGreen">\
(2) Set: Increases the duration of your Rapid Fire by 4 secs.<br>\
(4) Set: Increases Attack Power by 50 for both you and your pet.<br>\
(6) Set: Your ranged critical hits cause an Adrenaline Rush, granting you 50 mana.<br>\
(8) Set: Reduces the mana cost of your Multi-shot and Aimed Shot by 20.\
</span>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cryptstalker Headpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
449 Armor<br>\
+23 Agility<br>\
+32 Stamina<br>\
+12 Intellect<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 2%.<br>\
Equip: Restores 3 mana per 5 sec.</span>\
<p>'+ cryptstalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cryptstalker Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
406 Armor<br>\
+29 Agility<br>\
+23 Stamina<br>\
+10 Intellect<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>'+ cryptstalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cryptstalker Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
576 Armor<br>\
+45 Agility<br>\
+27 Stamina<br>\
+15 Intellect<br>\
Durability 140/140<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.<br>\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Improves your chance to get a critical strike by 1%.\
<p>'+ cryptstalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cryptstalker Wristguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
242 Armor<br>\
+26 Agility<br>\
+16 Stamina<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>'+ cryptstalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cryptstalker Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
346 Armor<br>\
+24 Agility<br>\
+21 Stamina<br>\
+15 Intellect<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p>'+ cryptstalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cryptstalker Girdle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
311 Armor<br>\
+24 Agility<br>\
+23 Stamina<br>\
+12 Intellect<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%<br>\
Equip: Improves your chance to get a critical strike by 1%<br>\
Equip: Restores 3 mana per 5 sec.\
</span>\
<p>'+ cryptstalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cryptstalker Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
484 Armor<br>\
+42 Agility<br>\
+26 Stamina<br>\
+10 Intellect<br>\
Durability 105/105<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>'+ cryptstalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Cryptstalker Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
372 Armor<br>\
+33 Agility<br>\
+19 Stamina<br>\
+8 Intellect<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>'+ cryptstalker +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Ring of the Cryptstalker</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+30 Agility<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ cryptstalker +'</span></td></tr></table>';

//hunter end

//mage begin

var frostfire = '<span class = "myYellow">\
Frostfire Regalia (0/9)<br>\
</span><span class = "myGray">\
&nbsp;Frostfire Belt<br>\
&nbsp;Frostfire Sandals<br>\
&nbsp;Frostfire Bindings<br>\
&nbsp;Frostfire Circlet<br>\
&nbsp;Frostfire Gloves<br>\
&nbsp;Frostfire Leggings<br>\
&nbsp;Frostfire Shoulderpads<br>\
&nbsp;Frostfire Robe<br>\
&nbsp;Frostfire Ring<br>\
</span><span class = "myGreen">\
(2) Set: Reduces cooldown on your Evocation by 1 minute.<br>\
(4) Set: Gives your Mage Armor a chance when struck by a harmful spell to increase resistance against that school of magic by 35 for 30 sec.<br>\
(6) Set: Your damage spells have a chance to cause your target to take up to 200 increased damage from subsequent spells.<br>\
(8) Set: Your damage spells have a chance to displace you, causing the next spell cast to generate no threat.\
</span>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Frostfire Circlet</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
108 Armor<br>\
+22 Stamina<br>\
+23 Intellect<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 35.<br>\
Equip: Improves your chance to hit with spells by 1%.<br>\
Equip: Improves your chance to get a critical strike with spells by 2%.</span>\
<p>'+ frostfire +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Frostfire Shoulderpads</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+17 Stamina<br>\
+18 Intellect<br>\
+9 Spirit<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 36.\
</span>\
<p>'+ frostfire +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Frostfire Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
138 Armor<br>\
+21 Stamina<br>\
+27 Intellect<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 47.<br>\
Equip: Improves your chance to hit with spells by 1%.<br>\
Equip: Decreases the magical resistances of your spell targets by 13.\
<p>'+ frostfire +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Frostfire Bindings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
58 Armor<br>\
+14 Stamina<br>\
+15 Intellect<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 27.<br>\
Equip: Decreases the magical resistances of your spell targets by 10.\
</span>\
<p>'+ frostfire +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Frostfire Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
83 Armor<br>\
+17 Stamina<br>\
+19 Intellect<br>\
+10 Spirit<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 36.</span>\
<p>'+ frostfire +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Frostfire Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
75 Armor<br>\
+19 Stamina<br>\
+21 Intellect<br>\
+10 Spirit<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 28.<br>\
Equip: Improves your chance to hit with spells by 1%.\
</span>\
<p>'+ frostfire +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Frostfire Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
116 Armor<br>\
+25 Stamina<br>\
+26 Intellect<br>\
+10 Spirit<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 46.\
</span>\
<p>'+ frostfire +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Frostfire Sandals</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
89 Armor<br>\
+17 Stamina<br>\
+18 Intellect<br>\
+10 Spirit<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 28.</span>\
<p>'+ frostfire +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Frostfire Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+10 Stamina<br>\
+10 Intellect<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 30.<br>\
Equip: Increases your chance to get a critical strike with spells by 1%.</span>\
<p>'+ frostfire +'</span></td></tr></table>';

//mage end

//paladin begin

var redemption = '<span class = "myYellow">\
Redemption Armor (0/9)<br>\
</span><span class = "myGray">\
&nbsp;Redemption Girdle<br>\
&nbsp;Redemption Boots<br>\
&nbsp;Redemption Wristguards<br>\
&nbsp;Redemption Headpiece<br>\
&nbsp;Redemption Handguards<br>\
&nbsp;Redemption Legguards<br>\
&nbsp;Redemption Spaulders<br>\
&nbsp;Redemption Tunic<br>\
&nbsp;Ring of Redemption<br>\
</span><span class = "myGreen">\
(2) Set: Increases the amount healed by your Judgement of Light by 20.<br>\
(4) Set: Reduces cooldown on your Lay on Hands by 12 min.<br>\
(6) Set: Your Flash of Light and Holy Light spells have a chance to imbue your target with Holy Power.<br>\
(8) Set: Your Cleanse spell also heals the target for 200.\
</span>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Redemption Headpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
800 Armor<br>\
+28 Stamina<br>\
+26 Intellect<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 64.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Restores 8 mana per 5 sec.</span>\
<p>'+ redemption +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Redemption Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
722 Armor<br>\
+22 Stamina<br>\
+20 Intellect<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 4 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 40.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
</span>\
<p>'+ redemption +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Redemption Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1027 Armor<br>\
+25 Stamina<br>\
+31 Intellect<br>\
Durability 165/165<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 10 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 59.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
<p>'+ redemption +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Redemption Wristguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
431 Armor<br>\
+22 Stamina<br>\
+15 Intellect<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 31.<br>\
Equip: Restores 4 mana per 5 sec.\
</span>\
<p>'+ redemption +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Redemption Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
615 Armor<br>\
+23 Stamina<br>\
+22 Intellect<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 8 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 33.</span>\
<p>'+ redemption +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Redemption Girdle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
554 Armor<br>\
+19 Stamina<br>\
+29 Intellect<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 40.<br>\
Equip: Restores 5 mana per 5 sec.\
</span>\
<p>'+ redemption +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Redemption Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
861 Armor<br>\
+30 Stamina<br>\
+31 Intellect<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 8 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 42.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.\
</span>\
<p>'+ redemption +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Redemption Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
662 Armor<br>\
+22 Stamina<br>\
+18 Intellect<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 42.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Restores 5 mana per 5 sec.\
</span>\
<p>'+ redemption +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Ring of Redemption</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+16 Stamina<br>\
+16 Intellect<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 37.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ redemption +'</span></td></tr></table>';

//Paladin end

//priest begin

var faith = '<span class = "myYellow">\
Vestments of Faith (0/9)<br>\
</span><span class = "myGray">\
&nbsp;Belt of Faith<br>\
&nbsp;Circlet of Faith<br>\
&nbsp;Sandals of Faith<br>\
&nbsp;Gloves of Faith<br>\
&nbsp;Shoulderpads of Faith<br>\
&nbsp;Leggings of Faith<br>\
&nbsp;Robe of Faith<br>\
&nbsp;Bindings of Faith<br>\
&nbsp;Ring of Faith<br>\
</span><span class = "myGreen">\
(2) Set: Reduces the mana cost of your Renew spell by 12%.<br>\
(4) Set: On Greater Heal critical hits, your target will gain Armor of Faith, absorbing up to 500 damage.<br>\
(6) Set: Reduces the threat from your healing spells.<br>\
(8) Set: Each spell you cast can trigger an Epiphany, increasing your mana regeneration by 24 for 30 sec.\
</span>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Circlet of Faith</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
108 Armor<br>\
+22 Stamina<br>\
+22 Intellect<br>\
+22 Spirit<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 75.<br>\
Equip: Restores 5 mana per 5 sec.</span>\
<p>'+ faith +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Shoulderpads of Faith</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+17 Stamina<br>\
+18 Intellect<br>\
+17 Spirit<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 51.<br>\
Equip: Restores 3 mana per 5 sec.\
</span>\
<p>'+ faith +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Robe of Faith</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
138 Armor<br>\
+26 Stamina<br>\
+27 Intellect<br>\
+21 Spirit<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 75.<br>\
Equip: Restores 5 mana per 5 sec.\
<p>'+ faith +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bindings of Faith</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
58 Armor<br>\
+11 Stamina<br>\
+15 Intellect<br>\
+17 Spirit<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 40.\
</span>\
<p>'+ faith +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Gloves of Faith</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
83 Armor<br>\
+16 Stamina<br>\
+21 Intellect<br>\
+22 Spirit<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 40.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p>'+ faith +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Belt of Faith</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
75 Armor<br>\
+18 Stamina<br>\
+23 Intellect<br>\
+17 Spirit<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 48.\
</span>\
<p>'+ faith +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Leggings of Faith</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
116 Armor<br>\
+25 Stamina<br>\
+26 Intellect<br>\
+28 Spirit<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 66.\
</span>\
<p>'+ faith +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Sandals of Faith</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
89 Armor<br>\
+19 Stamina<br>\
+22 Intellect<br>\
+13 Spirit<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 44.</span>\
<p>'+ faith +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Ring of Faith</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+16 Intellect<br>\
+16 Spirit<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 55.</span>\
<p>'+ faith +'</span></td></tr></table>';

//priest end

//rogue begin

var bonescythe = '<span class = "myYellow">\
Bonescythe Armor (0/9)<br>\
</span><span class = "myGray">\
&nbsp;Bonescythe Waistguard<br>\
&nbsp;Bonescythe Sabatons<br>\
&nbsp;Bonescythe Bracers<br>\
&nbsp;Bonescythe Helmet<br>\
&nbsp;Bonescythe Gauntlets<br>\
&nbsp;Bonescythe Legplates<br>\
&nbsp;Bonescythe Pauldrons<br>\
&nbsp;Bonescythe Breastplate<br>\
&nbsp;Bonescythe Ring<br>\
</span><span class = "myGreen">\
(2) Set: Your normal melee swings have a chance to Invigorate you, healing you for 90 to 110.<br>\
(4) Set: Your Backstab, Sinister Strike, and Hemorrhage critical hits cause you to regain 5 energy.<br>\
(6) Set: Reduces the threat from your Backstab, Sinister Strike, Hemorrhage, and Eviscerate abilities.<br>\
(8) Set: Your Eviscerate has a chance per combo point to reveal a flaw in your opponenent\'s armor, granting a 100% critical hit chance for your next Backstab, Sinister Strike, or Hemorrhage.\
</span>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bonescythe Helmet</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
205 Armor<br>\
+18 Strength<br>\
+30 Agility<br>\
+29 Stamina<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.<br>\
Equip: Improves your chance to get a critical strike by 2%.</span>\
<p>'+ bonescythe +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bonescythe Pauldrons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
186 Armor<br>\
+22 Strength<br>\
+22 Agility<br>\
+15 Stamina<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>'+ bonescythe +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bonescythe Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
262 Armor<br>\
+29 Stamina<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 2%.<br>\
Equip: +80 Attack Power.<br>\
Equip: Improves your chance to hit by 1%.\
<p>'+ bonescythe +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bonescythe Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
111 Armor<br>\
+26 Agility<br>\
+14 Stamina<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
</span>\
<p>'+ bonescythe +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bonescythe Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
158 Armor<br>\
+20Stamina<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: +66 Attack Power.<br>\
Equip: Improves your chance to hit by 1%.</span>\
<p>'+ bonescythe +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bonescythe Waistguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
142 Armor<br>\
+23 Strength<br>\
+24 Agility<br>\
+20 Stamina<br>\
Durability 40/40<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.\
</span>\
<p>'+ bonescythe +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bonescythe Legplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
221 Armor<br>\
+31 Strength<br>\
+32 Agility<br>\
+25 Stamina<br>\
Durability 90/90<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 1%.\
</span>\
<p>'+ bonescythe +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bonescythe Sabatons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
171 Armor<br>\
+18 Stamina<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: +64 Attack Power.<br>\
Equip: Increases your chance to hit by 1%.\
</span>\
<p>'+ bonescythe +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Bonescythe Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+20 Strength<br>\
+20 Agility<br>\
+10 Stamina<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.</span>\
<p>'+ bonescythe +'</span></td></tr></table>';

//Rogue end

//shaman begin

var earthshatter = '<span class = "myYellow">\
The Earthshatterer (0/9)<br>\
</span><span class = "myGray">\
&nbsp;Earthshatter Girdle<br>\
&nbsp;Earthshatter Boots<br>\
&nbsp;Earthshatter Handguards<br>\
&nbsp;Earthshatter Headpiece<br>\
&nbsp;Earthshatter Legguards<br>\
&nbsp;Earthshatter Spaulders<br>\
&nbsp;Earthshatter Tunic<br>\
&nbsp;Earthshatter Wristguards<br>\
&nbsp;Ring of the Earthshatterer<br>\
</span><span class = "myGreen">\
(2) Set: Reduces the mana cost of your totem spells by 12%.<br>\
(4) Set: Increases the mana gained from your Mana Spring totems by 25%.<br>\
(6) Set: Your Healing Wave and Lesser Healing Wave spells have a chance to imbue your target with Totemic Power.<br>\
(8) Set: Your Lightning Shield spell also grants you 15 mana per 5 sec. while active.\
</span>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthshatter Headpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
449 Armor<br>\
+26 Stamina<br>\
+30 Intellect<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 8 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 68.</span>\
<p>'+ earthshatter +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthshatter Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
406 Armor<br>\
+24 Stamina<br>\
+19 Intellect<br>\
Durability 85/85<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 42.<br>\
Equip: Restores 6 mana per 5 sec.\
</span>\
<p>'+ earthshatter +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthshatter Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
576 Armor<br>\
+26 Stamina<br>\
+32 Intellect<br>\
Durability 140/140<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 59.<br>\
Equip: Restores 12 mana per 5 sec.\
<p>'+ earthshatter +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthshatter Wristguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
242 Armor<br>\
+17 Stamina<br>\
+18 Intellect<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 33.<br>\
Equip: Restores 4 mana per 5 sec.\
</span>\
<p>'+ earthshatter +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthshatter Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
346 Armor<br>\
+21 Stamina<br>\
+28 Intellect<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 35.</span>\
<p>'+ earthshatter +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthshatter Girdle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
311 Armor<br>\
+18 Stamina<br>\
+25 Intellect<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 7 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 42.\
</span>\
<p>'+ earthshatter +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthshatter Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
484 Armor<br>\
+28 Stamina<br>\
+30 Intellect<br>\
Durability 105/105<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 9 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 59.\
</span>\
<p>'+ earthshatter +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Earthshatter Boots</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
372 Armor<br>\
+20 Stamina<br>\
+25 Intellect<br>\
Durability 70/70<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Restores 6 mana per 5 sec.<br>\
Equip: Increases healing done by spells and effects by up to 37.</span>\
<p>'+ earthshatter +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Ring of the Earthshatterer</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+16 Stamina<br>\
+16 Intellect<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 37.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ earthshatter +'</span></td></tr></table>';

//Shaman end

//warlock begin

var plagueheart = '<span class = "myYellow">\
Plagueheart Raiment (0/9)<br>\
</span><span class = "myGray">\
&nbsp;Plagueheart Belt<br>\
&nbsp;Plagueheart Bindings<br>\
&nbsp;Plagueheart Gloves<br>\
&nbsp;Plagueheart Circlet<br>\
&nbsp;Plagueheart Leggings<br>\
&nbsp;Plagueheart Robe<br>\
&nbsp;Plagueheart Shoulderpads<br>\
&nbsp;Plagueheart Sandals<br>\
&nbsp;Plagueheart Ring<br>\
</span><span class = "myGreen">\
(2) Set: Your Shadow Bolts now have a chance to gain Vampirism against targets afflicted by Corruption, healing you for 270 to 330.<br>\
(4) Set: Increases damage caused by your Corruption by 12%.<br>\
(6) Set: Your spell critical hits generate 25% less threat. In addition, Corruption, Immolate, Curse of Agony, and Siphon Life generate 25% less threat.<br>\
(8) Set: Reduces health cost of your Life Tap by 12%.\
</span>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Plagueheart Circlet</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
108 Armor<br>\
+28 Stamina<br>\
+25 Intellect<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 33.<br>\
Equip: Improves your chance to get a critical strike with spells by 2%.<br>\
Equip: Improves your chance to hit with spells by 1%.\
<p>'+ plagueheart +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Plagueheart Shoulderpads</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+22 Stamina<br>\
+12 Intellect<br>\
Durability 60/60<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 36.<br>\
Equip: Improves your chance to hit with spells by 1%.\
</span>\
<p>'+ plagueheart +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Plagueheart Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
138 Armor<br>\
+27 Stamina<br>\
+22 Intellect<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 51.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Improves your chance to hit with spells by 1%.\
<p>'+ plagueheart +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Plagueheart Bindings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
58 Armor<br>\
+23 Stamina<br>\
+14 Intellect<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 23.\
</span>\
<p>'+ plagueheart +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Plagueheart Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
83 Armor<br>\
+25 Stamina<br>\
+17 Intellect<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 26.</span>\
<p>'+ plagueheart +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Plagueheart Belt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
75 Armor<br>\
+23 Stamina<br>\
+12 Intellect<br>\
Durability 35/35<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 34.\
</span>\
<p>'+ plagueheart +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Plagueheart Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
116 Armor<br>\
+30 Stamina<br>\
+25 Intellect<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 37.<br>\
Equip: Decreases the magical resistances of your spell targets by 10.<br>\
Equip: Improves your chance to hit with spells by 1%.\
</span>\
<p>'+ plagueheart +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Plagueheart Sandals</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
89 Armor<br>\
+20 Stamina<br>\
+12 Intellect<br>\
Durability 50/50<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 25.<br>\
Equip: Improves your chance to get a critical strike with spells by 1%.</span>\
<p>'+ plagueheart +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Plagueheart Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+24 Stamina<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 29.</span>\
<p>'+ plagueheart +'</span></td></tr></table>';

//Warlock end

//warrior begin

var dreadnaught = '<span class = "myYellow">\
Dreadnaught\'s Battlegear (0/9)<br>\
</span><span class = "myGray">\
&nbsp;Dreadnaught Bracers<br>\
&nbsp;Dreadnaught Breastplate<br>\
&nbsp;Dreadnaught Gauntlets<br>\
&nbsp;Dreadnaught Waistguard<br>\
&nbsp;Dreadnaught Helmet<br>\
&nbsp;Dreadnaught Legplates<br>\
&nbsp;Dreadnaught Pauldrons<br>\
&nbsp;Dreadnaught Sabatons<br>\
&nbsp;Ring of the Dreadnaught<br>\
</span><span class = "myGreen">\
(2) Set: Increases the damage done by your Revenge ability by 75.<br>\
(4) Set: Improves your chance to hit with Taunt and Challenging Shout by 5%.<br>\
(6) Set: Improves your chance to hit with Sunder Armor, Heroic Strike, Revenge, and Shield Slam by 5%.<br>\
(8) Set: When your health drops below 20%, for the next 5 seconds healing spells cast on you help you to Cheat Death, increasing healing done by up to 160.\
</span>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreadnaught Helmet</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
800 Armor<br>\
+21 Strength<br>\
+45 Stamina<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to dodge an attack by 1%.<br>\
Equip: Increased Defense +14.</span>\
<p>'+ dreadnaught +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreadnaught Pauldrons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulders\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
722 Armor<br>\
+16 Strength<br>\
+29 Stamina<br>\
Durability 100/100<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Improves your chance to hit by 1%.<br>\
Equip: Increases the block value of your shield by 21.<br>\
Equip: Increased Defense +9.\
</span>\
<p>'+ dreadnaught +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreadnaught Breastplate</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1027 Armor<br>\
+21 Strength<br>\
+43 Stamina<br>\
Durability 165/165<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increased Defense +13.<br>\
Equip: Increases your chance to dodge an attack by 1%.<br>\
Equip: Improves your chance to hit by 2%.\
<p>'+ dreadnaught +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreadnaught Bracers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Wrist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
431 Armor<br>\
+14 Strength<br>\
+28 Stamina<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increased Defense +5.\
</span>\
<p>'+ dreadnaught +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreadnaught Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
615 Armor<br>\
+17 Strength<br>\
+27 Stamina<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to block attacks with a shield by 3%.<br>\
Equip: Increases the block value of your shield by 21.<br>\
Equip: Increased Defense +9.</span>\
<p>'+ dreadnaught +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreadnaught Waistguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Waist\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
554 Armor<br>\
+20 Strength<br>\
+26 Stamina<br>\
Durability 55/55<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases the block value of your shield by 18.<br>\
Equip: Increases your chance to block attacks with a shield by 3%.<br>\
Equip: Increased Defense +9.\
</span>\
<p>'+ dreadnaught +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreadnaught Legplates</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
861 Armor<br>\
+23 Strength<br>\
+37 Stamina<br>\
Durability 120/120<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increased Defense +13.<br>\
Equip: Increases your chance to dodge an attack by 1%.<br>\
Equip: Increases the block value of your shield by 32.\
</span>\
<p>'+ dreadnaught +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Dreadnaught Sabatons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Feet\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
662 Armor<br>\
+15 Strength<br>\
+34 Stamina<br>\
Durability 75/75<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increased Defense +9.<br>\
Equip: Increases your chance to dodge an attack by 1%.\
</span>\
<p>'+ dreadnaught +'</span></td></tr></table>';

t++;
armorSetTier3Raid.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myPurple">\
Ring of the Dreadnaught</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+27 Stamina<br>\
Requires Level 60<br>\
<span class = "myGreen">\
Equip: Increases your chance to dodge an attack by 1%.<br>\
Equip: Increased Defense +10.</span>\
<p>'+ dreadnaught +'</span></td></tr></table>';

//Warrior end

armorSetsArray[theArmorSetCounter] = armorSetTier3Raid;
armorSetsValues[theArmorSetCounter] = "tier3raid";
theArmorSetCounter++;

