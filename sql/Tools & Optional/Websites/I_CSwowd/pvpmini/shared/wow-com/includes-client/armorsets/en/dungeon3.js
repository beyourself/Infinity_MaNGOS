var armorSetDungeon3 = new armorSetObject("dungeon3");

armorSetDungeon3.slotsArray = new Array();
t = 0;
armorSetDungeon3.slotsArray[t] = "head"; t++;
armorSetDungeon3.slotsArray[t] = "shoulder"; t++;
armorSetDungeon3.slotsArray[t] = "chest"; t++;
armorSetDungeon3.slotsArray[t] = "hands"; t++;
armorSetDungeon3.slotsArray[t] = "legs"; t++;

armorSetDungeon3.slotsNumber = armorSetDungeon3.slotsArray.length;

//DONT LOCALIZE ABOVE THIS COMMENT LINE
//LOCALIZE EVERYTHING BELOW THIS COMMENT LINE

armorSetDungeon3.setNamesArray = new Array();
t = 1;
armorSetDungeon3.setNamesArray[t] = "Moonglade Raiment"; t++; //druid
armorSetDungeon3.setNamesArray[t] = "Wastewalker Armor"; t++; //druid and rogue
armorSetDungeon3.setNamesArray[t] = "Beast Lord Armor"; t++; //hunter
armorSetDungeon3.setNamesArray[t] = "Desolation Battlegear"; t++; //hunter and shaman
armorSetDungeon3.setNamesArray[t] = "Incanter's Regalia"; t++; //mage
armorSetDungeon3.setNamesArray[t] = "Mana-Etched Regalia"; t++; //mage, priest, and warlock
armorSetDungeon3.setNamesArray[t] = "Righteous Armor"; t++; //paladin
armorSetDungeon3.setNamesArray[t] = "Doomplate Battlegear"; t++; //paladin and warrior
armorSetDungeon3.setNamesArray[t] = "Hallowed Raiment"; t++; //priest
armorSetDungeon3.setNamesArray[t] = "Assassination Armor"; t++; //rogue
armorSetDungeon3.setNamesArray[t] = "Tidefury Raiment"; t++; //shaman
armorSetDungeon3.setNamesArray[t] = "Oblivion Raiment"; t++; //warlock
armorSetDungeon3.setNamesArray[t] = "Bold Armor"; t++; //warrior

armorSetDungeon3.statsArray = new Array();
t = 0;

//Moonglade Raiment Begin
var moonglade = '<span class = "myYellow">\
Moonglade Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Moonglade Cowl<br>\
&nbsp;Moonglade Handwraps<br>\
&nbsp;Moonglade Pants<br>\
&nbsp;Moonglade Robe<br>\
&nbsp;Moonglade Shoulders<br>\
</span><span class = "myGreen">\
(2) Set: Your Rejuvenation spell now also grants 35 dodge rating.<br>\
(4) Set: Reduces the mana cost of all shapeshifting by 25%.\
</span>';


armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Moonglade Cowl</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
237 Armor<br>\
+24 Strength<br>\
+8 Agility<br>\
+18 Stamina<br>\
+25 Intellect<br>\
+13 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Spirit</span><br>\
<span class="myTable">Durability 60/60<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 53.</span>\
<p>'+ moonglade +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Moonglade Shoulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
219 Armor<br>\
+13 Strength<br>\
+12 Agility<br>\
+18 Stamina<br>\
+19 Intellect<br>\
+18 Spirit<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +3 Intellect</span><br>\
<span class="myTable">Durability 60/60<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 29.\
</span>\
<p>'+ moonglade +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Moonglade Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
292 Armor<br>\
+25 Strength<br>\
+17 Agility<br>\
+16 Stamina<br>\
+17 Intellect<br>\
+14 Spirit<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Critical Strike Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 55.</span>\
<p>'+ moonglade +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Moonglade Handwraps</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
183 Armor<br>\
+19 Strength<br>\
+13 Agility<br>\
+18 Stamina<br>\
+20 Intellect<br>\
+17 Spirit<br>\
Durability 35/35<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 40.</span>\
<p>'+ moonglade +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Moonglade Pants</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
256 Armor<br>\
+25 Strength<br>\
+16 Agility<br>\
+24 Stamina<br>\
+25 Intellect<br>\
+23 Spirit<br>\
Durability 75/75<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 55.\
</span>\
<p>'+ moonglade +'</span></td></tr></table>';
//Moonglade Raiment end

//Wastewalker Armor begin
var wastewalker = '<span class = "myYellow">\
Wastewalker Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Wastewalker Tunic<br>\
&nbsp;Wastewalker Gloves<br>\
&nbsp;Wastewalker Helm<br>\
&nbsp;Wastewalker Leggings<br>\
&nbsp;Wastewalker Shoulderpads<br>\
</span><span class = "myGreen">\
(2) Set: Increases your hit rating by 35.<br>\
(4) Set: Your attacks have a chance to grant you 160 attack power for 15 sec.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wastewalker Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
237 Armor<br>\
+30 Stamina<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +8 Attack Power</span><br>\
<span class="myTable">Durability 60/60<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves hit rating by 18.<br>\
Equip: Improves critical strike rating by 22.<br>\
Equip: Increases attack power by 56.</span>\
<p>'+ wastewalker +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wastewalker Shoulderpads</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
219 Armor<br>\
+25 Agility<br>\
+13 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Crit Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves hit rating by 16.<br>\
Equip: Increases attack power by 34.</span>\
<p>'+ wastewalker +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wastewalker Tunic</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
292 Armor<br>\
+28 Agility<br>\
+36 Stamina<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Agility</span><br>\
<span class="myTable">Durability 100/100<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases attack power by 56.</span>\
<p>'+ wastewalker +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wastewalker Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
183 Armor<br>\
+32 Agility<br>\
+33 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Dodge Rating</span><br>\
<span class="myTable">Durability 35/35<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases attack power by 16.</span>\
<p>'+ wastewalker +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Wastewalker Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
256 Armor<br>\
+31 Agility<br>\
+27 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience Rating</span><br>\
<span class="myTable">Durability 75/75<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 19.<br>\
Equip: Increases attack power by 28.</span>\
<p>'+ wastewalker +'</span></td></tr></table>';

//Wastewalker Armor end

//Beast Lord Armor begin

var beastlord = '<span class = "myYellow">\
Beast Lord Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Beast Lord Cuirass<br>\
&nbsp;Beast Lord Handguards<br>\
&nbsp;Beast Lord Helm<br>\
&nbsp;Beast Lord Leggings<br>\
&nbsp;Beast Lord Mantle<br>\
</span><span class = "myGreen">\
(2) Set: Reduces the cooldown on your traps by 4 sec.<br>\
(4) Set: Each time you use your Kill Command ability, your attacks ignore 600 of your victim\'s armor for 15 sec.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beast Lord Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
530 Armor<br>\
+25 Agility<br>\
+21 Stamina<br>\
+22 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: 2 mana per 5 sec.</span><br>\
<span class="myTable">Durability 70/70<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases attack power by 50.<br>\
</span>\
<p>'+ beastlord +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beast Lord Mantle</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
489 Armor<br>\
+25 Agility<br>\
+12 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Stamina</span><br>\
<span class="myTable">Durability 70/70<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases attack power by 34.<br>\
Equip: Restores 5 mana per 5 sec.\
</span>\
<p>'+ beastlord +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beast Lord Cuirass</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
652 Armor<br>\
+20 Agility<br>\
+30 Stamina<br>\
+24 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Agility</span><br>\
<span class="myTable">Durability 120/120<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases attack power by 40.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p>'+ beastlord +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beast Lord Handguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
407 Armor<br>\
+25 Agility<br>\
+12 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Hit Rating</span><br>\
<span class="myTable">Durability 40/40<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases attack power by 34.</span>\
<p>'+ beastlord +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Beast Lord Leggings</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
570 Armor<br>\
+30 Agility<br>\
+25 Stamina<br>\
+19 Intellect<br>\
Durability 90/90<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases attack power by 52.<br>\
Equip: Restores 7 mana per 5 sec.\
</span>\
<p>'+ beastlord +'</span></td></tr></table>';
//Beast Lord Armor end

//Desolation Battlegear begin
var desolation = '<span class = "myYellow">\
Desolation Battlegear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Greaves of Desolation<br>\
&nbsp;Hauberk of Desolation<br>\
&nbsp;Gauntlets of Desolation<br>\
&nbsp;Helm of Desolation<br>\
&nbsp;Pauldrons of Desolation<br>\
</span><span class = "myGreen">\
(2) Set: Increases your hit rating by 35.<br>\
(4) Set: Your attacks have a chance to grant you 160 attack power for 15 sec.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Helm of Desolation</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
530 Armor<br>\
+21 Stamina<br>\
+25 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Hit Rating</span><br>\
<span class="myTable">Durability 70/70<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 14.<br>\
Equip: Increases attack power by 66.</span>\
<p>'+ desolation +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Pauldrons of Desolation</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
489 Armor<br>\
+23 Agility<br>\
+16 Stamina<br>\
+19 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +3 Hit Rating</span><br>\
<span class=\"myTable\">Durability 70/70<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves hit rating by 17.\
</span>\
<p>'+ desolation +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Hauberk of Desolation</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
652 Armor<br>\
+28 Stamina<br>\
+25 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Crit Rating</span><br>\
<span class="myTable">Durability 120/120<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 16.<br>\
Equip: Increases attack power by 50.</span>\
<p>'+ desolation +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Gauntlets of Desolation</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
407 Armor<br>\
+25 Stamina<br>\
+16 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 40/40<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 17.<br>\
Equip: Increases attack power by 32.</span>\
<p>'+ desolation +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Greaves of Desolation</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
570 Armor<br>\
+24 Stamina<br>\
+33 Intellect<br>\
Durability 90/90<br>\
Requires Level 68<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 12.<br>\
Equip: Improves critical strike rating by 22.<br>\
Equip: Increases attack power by 66.</span>\
<p>'+ desolation +'</span></td></tr></table>';
//Desolation Battlegear end

//Incanter's Regalia begin
var incanters = '<span class = "myYellow">\
Incanter\'s Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Incanter\'s Cowl<br>\
&nbsp;Incanter\'s Gloves<br>\
&nbsp;Incanter\'s Pauldrons<br>\
&nbsp;Incanter\'s Robe<br>\
&nbsp;Incanter\'s Trousers<br>\
</span><span class = "myGreen">\
(2) Set: Reduces the cast time on your Flamestrike ability by 0.25 sec.<br>\
(4) Set: When you are hit while Mana Shield is active, you have a chance to gain up to 100 spell damage for 15 sec.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Incanter\'s Cowl</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
127 Armor<br>\
+15 Stamina<br>\
+27 Intellect<br>\
+17 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Spirit</span><br>\
<span class="myTable">Durability 50/50<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 29.\
</span>\
<p>'+ incanters +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Incanter\'s Pauldrons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
117 Armor<br>\
+24 Stamina<br>\
+17 Intellect<br>\
+16 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +3 Spell Crit Rating</span><br>\
<span class="myTable">Durability 50/50<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 20.\
</span>\
<p>'+ incanters +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Incanter\'s Robe</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
156 Armor<br>\
+24 Stamina<br>\
+22 Intellect<br>\
+22 Spirit<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +4 Intellect</span><br>\
<span class="myTable">Durability 80/80<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 8.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 29.</span>\
<p>'+ incanters +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Incanter\'s Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+21 Stamina<br>\
+24 Intellect<br>\
+12 Spirit<br>\
Durability 30/30<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 14.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 29.</span>\
<p>'+ incanters +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Incanter\'s Trousers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
136 Armor<br>\
+25 Stamina<br>\
+30 Intellect<br>\
+17 Spirit<br>\
Durability 65/65<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 18.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 42.\
</span>\
<p>'+ incanters +'</span></td></tr></table>';
//Incanter's Regalia end

//Mana-Etched Regalia begin
var manaetched = '<span class = "myYellow">\
Mana-Etched Regalia (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Mana-Etched Crown<br>\
&nbsp;Mana-Etched Gloves<br>\
&nbsp;Mana-Etched Pantaloons<br>\
&nbsp;Mana-Etched Vestments<br>\
&nbsp;Mana-Etched Spaulders<br>\
</span><span class = "myGreen">\
(2) Set: Increases your spell hit rating by 35.<br>\
(4) Set: Your harmful spells have a chance to grant you up to 110 spell damage and healing for 15 sec.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Mana-Etched Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
127 Armor<br>\
+27 Stamina<br>\
+20 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Resilience Rating</span><br>\
<span class="myTable">Durability 50/50<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases your spell penetration by 15.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 34.</span>\
<p>'+ manaetched +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Mana-Etched Spaulders</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
117 Armor<br>\
+25 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 50/50<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 16.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 20.</span>\
<p>'+ manaetched +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Mana-Etched Vestments</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
156 Armor<br>\
+25 Stamina<br>\
+25 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 80/80<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 17.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 29.</span>\
<p>'+ manaetched +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Mana-Etched Gloves</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+25 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Resilience Rating</span><br>\
<span class="myTable">Durability 30/30<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 16.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 20.</span>\
<p>'+ manaetched +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Mana-Etched Pantaloons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
136 Armor<br>\
+34 Stamina<br>\
+32 Intellect<br>\
Durability 65/65<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 21.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 33.<br>\
Equip: Increases your spell penetration by 18.</span>\
<p>'+ manaetched +'</span></td></tr></table>';
//Mana-Etched Regalia end

//Righteous Armor begin
var righteous = '<span class = "myYellow">\
Righteous Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Breastplate of the Righteous<br>\
&nbsp;Gauntlets of the Righteous<br>\
&nbsp;Helm of the Righteous<br>\
&nbsp;Legplates of the Righteous<br>\
&nbsp;Spaulers of the Righteous<br>\
</span><span class = "myGreen">\
(2) Set: Your Consecration ability costs 15% less mana.<br>\
(4) Set: Reduces the cooldown on your Righteous Defense ability by -2 sec.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Helm of the Righteous</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
946 Armor<br>\
+30 Stamina<br>\
+20 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Intellect</span><br>\
<span class="myTable">Durability 80/80<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases defense rating by 21.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 23.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ righteous +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Spaulders of the Righteous</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
873 Armor<br>\
+22 Stamina<br>\
+22 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Defense Rating</span><br>\
<span class="myTable">Durability 80/80<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases defense rating by 20.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 15.</span>\
<p>'+ righteous +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Breastplate of the Righteous</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1164 Armor<br>\
+30 Stamina<br>\
+28 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: 2 mana per 5 sec.</span><br>\
<span class="myTable">Durability 135/135<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases defense rating by 20.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 23.</span>\
<p>'+ righteous +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Gauntlets of the Righteous</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
728 Armor<br>\
+22 Stamina<br>\
+20 Intellect<br>\
Durability 45/45<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 21.<br>\
Equip: Restores 7 mana per 5 sec.</span>\
<p>'+ righteous +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Legplates of the Righteous</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1019 Armor<br>\
+27 Stamina<br>\
+24 Intellect<br>\
Durability 100/100<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 26.<br>\
Equip: Restores 10 mana per 5 sec.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 28.</span>\
<p>'+ righteous +'</span></td></tr></table>';
//Righteous Armor end

//Doomplate Battlegear begin
var doomplate = '<span class = "myYellow">\
Doomplate Battlegear (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Doomplate Chestguard<br>\
&nbsp;Doomplate Gauntlets<br>\
&nbsp;Doomplate Warhelm<br>\
&nbsp;Doomplate Legguards<br>\
&nbsp;Doomplate Shoulderguards<br>\
</span><span class = "myGreen">\
(2) Set: Increases your hit rating by 35.<br>\
(4) Set: Your attacks have a chance to grant you 160 attack power for 15 sec.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Doomplate Warhelm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
946 Armor<br>\
+34 Strength<br>\
+39 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Hit Rating</span><br>\
<span class="myTable">Durability 80/80<br>\
Requires Level 70<br>\
<span class = "myGreen">\
</span>\
<p>'+ doomplate +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Doomplate Shoulderguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
873 Armor<br>\
+19 Strength<br>\
+22 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myGray\">Socket Bonus: +3 Parry Rating</span><br>\
<span class="myTable">Durability 80/80<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 20.\
</span>\
<p>'+ doomplate +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Doomplate Chestguard</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1164 Armor<br>\
+30 Strength<br>\
+27 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Crit Rating</span><br>\
<span class="myTable">Durability 135/135<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves critical strike rating by 19.</span>\
<p>'+ doomplate +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Doomplate Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
728 Armor<br>\
+31 Strength<br>\
+25 Stamina<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Hit Rating</span><br>\
<span class="myTable">Durability 45/45<br>\
Requires Level 70<br>\
<span class = "myGreen">\
</span>\
<p>'+ doomplate +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Doomplate Legguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1019 Armor<br>\
+36 Strength<br>\
+33 Stamina<br>\
Durability 100/100<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 17.<br>\
Equip: Improves critical strike rating by 27.\
</span>\
<p>'+ doomplate +'</span></td></tr></table>';
//Doomplate Battlegear end

//Hallowed Raiment begin
var hallowed = '<span class = "myYellow">\
Hallowed Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Hallowed Crown<br>\
&nbsp;Hallowed Garments<br>\
&nbsp;Hallowed Handwraps<br>\
&nbsp;Hallowed Pauldrons<br>\
&nbsp;Hallowed Trousers<br>\
</span><span class = "myGreen">\
(2) Set: Gives you a 30% chance to avoid interruptions caused by damage while casting Binding Heal.<br>\
(4) Set: Your Prayer of Mending heals an additional 100 health.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Hallowed Crown</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
127 Armor<br>\
+12 Stamina<br>\
+24 Intellect<br>\
+26 Spirit<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Spirit</span><br>\
<span class="myTable">Durability 50/50<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 57.</span>\
<p>'+ hallowed +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Hallowed Pauldrons</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
117 Armor<br>\
+10 Stamina<br>\
+17 Intellect<br>\
+20 Spirit<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Intellect</span><br>\
<span class="myTable">Durability 50/50<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 42.\
</span>\
<p>'+ hallowed +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Hallowed Garments</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
156 Armor<br>\
+12 Stamina<br>\
+26 Intellect<br>\
+26 Spirit<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +6 Stamina</span><br>\
<span class="myTable">Durability 80/80<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 57.</span>\
<p>'+ hallowed +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Hallowed Handwraps</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+19 Stamina<br>\
+20 Intellect<br>\
+26 Spirit<br>\
Durability 30/30<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 51.</span>\
<p>'+ hallowed +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Hallowed Trousers</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
136 Armor<br>\
+25 Stamina<br>\
+33 Intellect<br>\
+18 Spirit<br>\
Durability 65/65<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases healing done by spells and effects by up to 73.<br>\
Equip: Restores 7 mana per 5 sec.</span>\
<p>'+ hallowed +'</span></td></tr></table>';
//Hallowed Raiment end

//Assassination Armor begin
var assassination = '<span class = "myYellow">\
Assassination Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Handgrips of Assassination<br>\
&nbsp;Helm of Assassination<br>\
&nbsp;Leggings of Assassination<br>\
&nbsp;Shoulderpads of Assassination<br>\
&nbsp;Tunic of Assassination<br>\
</span><span class = "myGreen">\
(2) Set: Your Cheap Shot and Kidney Shot attacks grant you 160 haste rating for 6 sec.<br>\
(4) Set: Your Eviscerate and Envenom abilities cost 10 less energy.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Helm of Assassination</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
237 Armor<br>\
+25 Stamina<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Dodge Rating</span><br>\
<span class="myTable">Durability 60/60<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases your critical strike rating by 25.<br>\
Equip: Increases attack power by 66.</span>\
<p>'+ assassination +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Shoulderpads of Assassination</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
219 Armor<br>\
+25 Agility<br>\
+25 Stamina<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +4 Stamina</span><br>\
<span class="myTable">Durability 60/60<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases attack power by 42.\
</span>\
<p>'+ assassination +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Tunic of Assassination</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
292 Armor<br>\
+28 Agility<br>\
+21 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Dodge Rating</span><br>\
<span class="myTable">Durability 100/100<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases attack power by 54.</span>\
<p>'+ assassination +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Handgrips of Assassination</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
183 Armor<br>\
+25 Agility<br>\
+24 Stamina<br>\
Durability 35/35<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 17.<br>\
Equip: Increases attack power by 50.\
</span>\
<p>'+ assassination +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Leggings of Assassination</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Leather\
</span></td></tr></table>\
256 Armor<br>\
+40 Agility<br>\
+33 Stamina<br>\
Durability 75/75<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves hit rating by 22.<br>\
Equip: Increases attack power by 44.\
</span>\
<p>'+ assassination +'</span></td></tr></table>';
//Assassination Armor end

//Tidefury Raiment begin
var tidefury = '<span class = "myYellow">\
Tidefury Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Tidefury Chestpiece<br>\
&nbsp;Tidefury Gauntlets<br>\
&nbsp;Tidefury Helm<br>\
&nbsp;Tidefury Kilt<br>\
&nbsp;Tidefury Shoulderguards<br>\
</span><span class = "myGreen">\
(2) Set: Your Chain Lightning Spell now only loses 17% of its damage per jump.<br>\
(4) Set: Your Water Shield ability grants an additional 20 mana each time it triggers.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Tidefury Helm</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
530 Armor<br>\
+31 Stamina<br>\
+26 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Intellect</span><br>\
<span class="myTable">Durability 70/70<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 32.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ tidefury +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Tidefury Shoulderguards</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
489 Armor<br>\
+18 Stamina<br>\
+23 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Spell Damage</span><br>\
<span class="myTable">Durability 70/70<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 19.<br>\
Equip: Restores 6 mana per 5 sec.</span>\
<p>'+ tidefury +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Tidefury Chestpiece</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
652 Armor<br>\
+28 Stamina<br>\
+22 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 120/120<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 10.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 36.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
<p>'+ tidefury +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Tidefury Gauntlets</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
407 Armor<br>\
+22 Stamina<br>\
+26 Intellect<br>\
Durability 40/40<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 29.<br>\
Equip: Restores 7 mana per 5 sec.</span>\
<p>'+ tidefury +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Tidefury Kilt</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Mail\
</span></td></tr></table>\
570 Armor<br>\
+39 Stamina<br>\
+31 Intellect<br>\
Durability 90/90<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell critical strike rating by 19.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 35.</span>\
<p>'+ tidefury +'</span></td></tr></table>';
//Tidefury Raiment end

//Oblivion Raiment begin
var oblivion = '<span class = "myYellow">\
Oblivion Raiment (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Gloves of Oblivion<br>\
&nbsp;Hood of Oblivion<br>\
&nbsp;Robe of Oblivion<br>\
&nbsp;Spaulders of Oblivion<br>\
&nbsp;Trousers of Oblivion<br>\
</span><span class = "myGreen">\
(2) Set: Grants your pet 45 mana per 5 sec.<br>\
(4) Set: Your Seed of Corruption deals 180 additional damage when it detonates.<br>\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Hood of Oblivion</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
127 Armor<br>\
+27 Stamina<br>\
+32 Intellect<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +5 Spell Damage</span><br>\
<span class="myTable">Durability 50/50<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 40.\
</span>\
<p>'+ oblivion +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Spaulders of Oblivion</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
117 Armor<br>\
+25 Stamina<br>\
+17 Intellect<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Spell Hit Rating</span><br>\
<span class="myTable">Durability 50/50<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 29.\
</span>\
<p>'+ oblivion +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Robe of Oblivion</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
156 Armor<br>\
+30 Stamina<br>\
+20 Intellect<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +6 Stamina</span><br>\
<span class="myTable">Durability 80/80<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases damage and healing done by magical spells and effects by up to 40.</span>\
<p>'+ oblivion +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Gloves of Oblivion</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
97 Armor<br>\
+33 Stamina<br>\
+21 Intellect<br>\
Durability 30/30<br>\
Requires Level 70<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 20.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 26.</span>\
<p>'+ oblivion +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Trousers of Oblivion</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Cloth\
</span></td></tr></table>\
136 Armor<br>\
+42 Stamina<br>\
+33 Intellect<br>\
Durability 65/65<br>\
Requires Level 68<br>\
<span class = "myGreen">\
Equip: Improves spell hit rating by 12.<br>\
Equip: Increases damage and healing done by magical spells and effects by up to 39.\
</span>\
<p>'+ oblivion +'</span></td></tr></table>';
//Oblivion Raiment end

//Bold Armor begin
var barmor = '<span class = "myYellow">\
Bold Armor (0/5)<br>\
</span><span class = "myGray">\
&nbsp;Breastplate of the Bold<br>\
&nbsp;Gauntlets of the Bold<br>\
&nbsp;Legplates of the Bold<br>\
&nbsp;Shoulderguards of the Bold<br>\
&nbsp;Warhelm of the Bold<br>\
</span><span class = "myGreen">\
(2) Set: All of your shout abilities cost 2 less rage.<br>\
(4) Set: Your Charge ability generates an additional 5 rage.\
</span>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Warhelm of the Bold</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Head\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
946 Armor<br>\
+24 Strength<br>\
+22 Agility<br>\
+23 Stamina<br>\
</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myMetaGem\">Meta Socket</span><span class=\"myGray\">Socket Bonus: +4 Strength</span><br>\
<span class="myTable">Durability 80/80<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases defense rating by 20.</span>\
<p>'+ barmor +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Shoulderguards of the Bold</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Shoulder\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
873 Armor<br>\
+25 Strength<br>\
+25 Stamina<br>\
</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +3 Dodge Rating</span><br>\
<span class="myTable">Durability 80/80<br>\
Requires Level 70<br></span>\
<span class = "myGreen">\
Equip: Increases defense rating by 17.\
</span>\
<p>'+ barmor +'</span></td></tr></table>';

t++;
armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Breastplate of the Bold</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Chest\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1164 Armor<br>\
+23 Strength<br>\
+21 Agility<br>\
+33 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myRedGem\">Red Socket</span><span class=\"myBlueGem\">Blue Socket</span><span class=\"myGray\">Socket Bonus: +4 Defense Rating</span><br>\
<span class="myTable">Durability 135/135<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 19.</span>\
<p>'+ barmor +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Gauntlets of the Bold</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Hands\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
728 Armor<br>\
+17 Strength<br>\
+16 Agility<br>\
+31 Stamina<br>\
</span><span class=\"myRedGem\">Red Socket</span><span class=\"myYellowGem\">Yellow Socket</span><span class=\"myGray\">Socket Bonus: +3 Parry Rating</span><br>\
<span class="myTable">Durability 45/45<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 14.</span>\
<p>'+ barmor +'</span></td></tr></table>';

t++;

armorSetDungeon3.statsArray[t] = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable"><span class = "myBlue">\
Legplates of the Bold</span><br>\
Binds when picked up<br>\
<table cellspacing = "0" cellpadding = "0" border = "0" width = "265"><tr><td><span class = "myTable">\
Legs\
</span></td><td align = "right"><span class = "myTable">\
Plate\
</span></td></tr></table>\
1019 Armor<br>\
+31 Strength<br>\
+19 Agility<br>\
+45 Stamina<br>\
Durability 100/100<br>\
Requires Level 68<br>\
<span class = "myGreen">\
Equip: Increases defense rating by 26.</span>\
<p>'+ barmor +'</span></td></tr></table>';
//Bold Armor end

armorSetsArray[theArmorSetCounter] = armorSetDungeon3;
armorSetsValues[theArmorSetCounter] = "dungeon3";
theArmorSetCounter++;