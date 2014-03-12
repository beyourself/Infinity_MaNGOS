//CONSTRUCTOR

function RewardItem(playerFaction, reputationBracket, itemName, itemIcon, itemPrice, itemCost, itemStats, itemHTML)
{													//Constructor for RewardItem datatype; accepts up to 7 arguments
  this.playerFaction	 = playerFaction;			//string variable, can be "alliance", "horde" or "both"
  this.reputationBracket = reputationBracket;		//string variable, can be "friendly", "honored", "revered" or "exalted"
  this.itemName		 	 = itemName;				//string variable, contains the name shown in the rewards list
  this.itemIcon		 	 = itemIcon;				//string variable, contains path to item icon to be used
  this.itemPrice		 = itemPrice;				//how much the item costs, in COPPER
  this.itemCost			 = itemCost;
  this.itemStats		 = itemStats;				//Array
  this.itemHTML			 = itemHTML;				//string variable, contains the HTML code for the item
}

function selectBracket(thisObject,thisBracket)
{
  if (thisBracket >= 0)
  {
    if (thisObject.itemStats[thisBracket])
	{
	  thisObject.itemCost = processPrice(thisObject.itemPrice[thisBracket]);
	  thisObject.itemHTML = thisObject.itemStats[thisBracket];
	}
    else
	{
	  thisObject.itemHTML = "none";
	  thisObject.itemCost = "none";
	  selectBracket(thisObject,thisBracket-1);
	  selectBracket(thisObject,thisBracket-1);
	}
  }
}

function processPrice(copperPrice)
{
  goldPart = Math.floor(copperPrice / 10000);
  if (goldPart >= 1) copperPrice -= goldPart * 10000;
  silverPart = Math.floor(copperPrice / 100);
  if (silverPart >= 1) copperPrice -= silverPart * 100;
  outPutString = "";
  if (goldPart > 0) outPutString += goldPart+"<img src='/shared/wow-com/images/basics/factions/gold.gif'>&nbsp;";
  if (silverPart > 0) outPutString += silverPart+"<img src='/shared/wow-com/images/basics/factions/silver.gif'>&nbsp;";
  if (copperPrice > 0) outPutString += copperPrice+"<img src='/shared/wow-com/images/basics/factions/copper.gif'>";
  return outPutString;
}

//------BEGIN REWARDS DEFINITION------
i = 0;
var RewardItems = new Array();

var fRuneOfPerfection = new RewardItem("alliance","friendly","Rune of Perfection","../../../../shared/wow-com/images/basics/factions/warsong/rune01.gif");
fRuneOfPerfection.itemPrice = new Array();
fRuneOfPerfection.itemPrice[1] = 20000;
fRuneOfPerfection.itemStats = new Array();
fRuneOfPerfection.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Rune of Perfection</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
+4 Stamina<br>\
Classes: Priest, Shaman, Mage, Warlock, Druid<br>\
Requires Level 20<br>\
<span class='myGreen'>Equip: Decreases the magical resistances of your spell targets by 10.</span>\
</div>\
</td></tr></table>";
fRuneOfPerfection.itemPrice[3] = 40000;
fRuneOfPerfection.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Rune of Perfection</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
+7 Stamina<br>\
Classes: Priest, Shaman, Mage, Warlock, Druid<br>\
Requires Level 40<br>\
<span class='myGreen'>Equip: Decreases the magical resistances of your spell targets by 20.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fRuneOfPerfection; i++;

var fRuneOfDuty = new RewardItem("alliance","friendly","Rune of Duty","../../../../shared/wow-com/images/basics/factions/warsong/rune02.gif");
fRuneOfDuty.itemPrice = new Array();
fRuneOfDuty.itemPrice[1] = 20000;
fRuneOfDuty.itemStats = new Array();
fRuneOfDuty.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Rune of Duty</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
+4 Stamina<br>\
Classes: Warrior, Paladin, Hunter, Rogue<br>\
Requires Level 20<br>\
<span class='myGreen'>Equip: Restores 2 health every 5 sec.</span>\
</div>\
</td></tr></table>";

fRuneOfDuty.itemPrice[3] = 40000;
fRuneOfDuty.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Rune of Duty</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
+7 Stamina<br>\
Classes: Warrior, Paladin, Hunter, Rogue<br>\
Requires Level 40<br>\
<span class='myGreen'>Equip: Restores 4 health every 5 sec.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fRuneOfDuty; i++;


var fWarsongFieldRations = new RewardItem("alliance","friendly","Warsong Gulch Field Ration","../../../../shared/wow-com/images/basics/factions/warsong/fieldration.gif");
fWarsongFieldRations.itemPrice = new Array();
fWarsongFieldRations.itemPrice[1] = 1000;
fWarsongFieldRations.itemStats = new Array();
fWarsongFieldRations.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Field Ration</b><br>\
Binds when picked up<br>\
Requires Level 25<br>\
<span class='myGreen'>Use: Restores 1074 health and 2202 mana over 30 sec. Must remain seated while eating. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongFieldRations; i++;


var fWarsongIronRations = new RewardItem("alliance","friendly","Warsong Gulch Iron Ration","../../../../shared/wow-com/images/basics/factions/warsong/ironration.gif");
fWarsongIronRations.itemPrice = new Array();
fWarsongIronRations.itemPrice[2] = 1500;
fWarsongIronRations.itemStats = new Array();
fWarsongIronRations.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Iron Ration</b><br>\
Binds when picked up<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 1608 health and 3306 mana over 30 sec. Must remain seated while eating. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongIronRations; i++;


var fWarsongEnrichedRations = new RewardItem("alliance","friendly","Warsong Gulch Enriched Ration","../../../../shared/wow-com/images/basics/factions/warsong/enrichedration.gif");
fWarsongEnrichedRations.itemPrice = new Array();
fWarsongEnrichedRations.itemPrice[3] = 2000;
fWarsongEnrichedRations.itemStats = new Array();
fWarsongEnrichedRations.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Enriched Ration</b><br>\
Binds when picked up<br>\
Requires Level 45<br>\
<span class='myGreen'>Use: Restores 2148 health and 4410 mana over 30 sec. Must remain seated while eating. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongEnrichedRations; i++;







var fWarsongSilkBandages = new RewardItem("alliance","friendly","Warsong Gulch Silk Bandage","../../../../shared/wow-com/images/basics/factions/warsong/silkbandage.gif");
fWarsongSilkBandages.itemPrice = new Array();
fWarsongSilkBandages.itemPrice[1] = 1000;
fWarsongSilkBandages.itemStats = new Array();
fWarsongSilkBandages.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Silk Bandage</b><br>\
Binds when picked up<br>\
Requires Level 25<br>\
Requires First Aid (125)<br>\
<span class='myGreen'>Use: Heals 640 damage over 8 sec. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongSilkBandages; i++;

var fWarsongMageweaveBandages = new RewardItem("alliance","friendly","Warsong Gulch Mageweave Bandage","../../../../shared/wow-com/images/basics/factions/warsong/mageweavebandage.gif");
fWarsongMageweaveBandages.itemPrice = new Array();
fWarsongMageweaveBandages.itemPrice[2] = 1500;
fWarsongMageweaveBandages.itemStats = new Array();
fWarsongMageweaveBandages.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Mageweave Bandage</b><br>\
Binds when picked up<br>\
Requires Level 35<br>\
Requires First Aid (175)<br>\
<span class='myGreen'>Use: Heals 1104 damage over 8 sec. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongMageweaveBandages; i++;

var fWarsongRuneclothBandages = new RewardItem("alliance","friendly","Warsong Gulch Runecloth Bandage","../../../../shared/wow-com/images/basics/factions/warsong/runeclothbandage.gif");
fWarsongRuneclothBandages.itemPrice = new Array();
fWarsongRuneclothBandages.itemPrice[3] = 2000;
fWarsongRuneclothBandages.itemStats = new Array();
fWarsongRuneclothBandages.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Runecloth Bandage</b><br>\
Binds when picked up<br>\
Requires Level 45<br>\
Requires First Aid (225)<br>\
<span class='myGreen'>Use: Heals 2000 damage over 8 sec. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongRuneclothBandages; i++;




var fHealingDraught = new RewardItem("alliance","friendly","Superior Healing Draught","../../../../shared/wow-com/images/basics/factions/warsong/health02.gif");
fHealingDraught.itemPrice = new Array();
fHealingDraught.itemPrice[2] = 500;
fHealingDraught.itemStats = new Array();
fHealingDraught.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Superior Healing Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 health. This item may only be used in Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fHealingDraught; i++; 

var fManaDraught = new RewardItem("alliance","friendly","Superior Mana Draught","../../../../shared/wow-com/images/basics/factions/warsong/mana02.gif");
fManaDraught.itemPrice = new Array();
fManaDraught.itemPrice[2] = 500;
fManaDraught.itemStats = new Array();
fManaDraught.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Superior Mana Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 mana. This item may only be used in Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fManaDraught; i++;















var hCaretakersCape = new RewardItem("alliance","honored","Caretaker's Cape","../../../../shared/wow-com/images/basics/factions/warsong/cape_a.gif");
hCaretakersCape.itemPrice = new Array();
hCaretakersCape.itemPrice[0] = 3285;
hCaretakersCape.itemStats = new Array();
hCaretakersCape.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Caretaker's Cape</span><br>\
Binds when picked up<br>\
Unique<br>\
Back<br>\
20 Armor<br>\
+4 Stamina<br>\
+2 Spirit<br>\
Requires Level 18<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 9.</span>\
</div>\
</td></tr></table>";
hCaretakersCape.itemPrice[1] = 9695;
hCaretakersCape.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Caretaker's Cape</span><br>\
Binds when picked up<br>\
Unique<br>\
Back<br>\
25 Armor<br>\
+6 Stamina<br>\
+4 Spirit<br>\
Requires Level 28<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 13.</span>\
</div>\
</td></tr></table>";
hCaretakersCape.itemPrice[2] = 22441;
hCaretakersCape.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Caretaker's Cape</span><br>\
Binds when picked up<br>\
Unique<br>\
Back<br>\
31 Armor<br>\
+8 Stamina<br>\
+5 Spirit<br>\
Requires Level 38<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 18.</span>\
</div>\
</td></tr></table>";
hCaretakersCape.itemPrice[3] = 45218;
hCaretakersCape.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Caretaker's Cape</span><br>\
Binds when picked up<br>\
Unique<br>\
Back<br>\
38 Armor<br>\
+9 Stamina<br>\
+6 Spirit<br>\
Requires Level 48<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 22.</span>\
</div>\
</td></tr></table>";
hCaretakersCape.itemPrice[4] = 76943;
hCaretakersCape.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Caretaker's Cape</span><br>\
Binds when picked up<br>\
Unique<br>\
Back<br>\
20 Armor<br>\
+11 Stamina<br>\
+8 Spirit<br>\
Requires Level 58<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 26.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = hCaretakersCape; i++;






var hLorekeepersRing = new RewardItem("alliance","honored","Lorekeeper's Ring","../../../../shared/wow-com/images/basics/factions/warsong/ring02.gif");
hLorekeepersRing.itemPrice = new Array();
hLorekeepersRing.itemPrice[0] = 18000;
hLorekeepersRing.itemStats = new Array();
hLorekeepersRing.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Lorekeeper's Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+2 Stamina<br>\
Requires Level 18<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 5.<br>\
Equip: Restores 2 mana per 5 sec.</span>\
</div>\
</td></tr></table>";
hLorekeepersRing.itemPrice[1] = 18000;
hLorekeepersRing.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Lorekeeper's Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+4 Stamina<br>\
Requires Level 28<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 7.<br>\
Equip: Restores 2 mana per 5 sec.</span>\
</div>\
</td></tr></table>";
hLorekeepersRing.itemPrice[2] = 40500;
hLorekeepersRing.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Lorekeeper's Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+5 Stamina<br>\
Requires Level 38<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 9.<br>\
Equip: Restores 3 mana per 5 sec.</span>\
</div>\
</td></tr></table>";
hLorekeepersRing.itemPrice[3] = 54000;
hLorekeepersRing.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Lorekeeper's Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+6 Stamina<br>\
Requires Level 48<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
</div>\
</td></tr></table>";
hLorekeepersRing.itemPrice[4] = 67500;
hLorekeepersRing.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Lorekeeper's Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+8 Stamina<br>\
Requires Level 58<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 14.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = hLorekeepersRing; i++;




var hSentinelsMedallion = new RewardItem("alliance","honored","Sentinel's Medallion","../../../../shared/wow-com/images/basics/factions/warsong/medallion_a.gif");
hSentinelsMedallion.itemPrice = new Array();
hSentinelsMedallion.itemPrice[0] = 18000;
hSentinelsMedallion.itemStats = new Array();
hSentinelsMedallion.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Sentinel's Medallion</span><br>\
Binds when picked up<br>\
Unique<br>\
Neck<br>\
+6 Agility<br>\
+2 Stamina<br>\
Requires Level 18<br>\
</div>\
</td></tr></table>";
hSentinelsMedallion.itemPrice[1] = 18000;
hSentinelsMedallion.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Sentinel's Medallion</span><br>\
Binds when picked up<br>\
Unique<br>\
Neck<br>\
+8 Agility<br>\
+5 Stamina<br>\
Requires Level 28<br>\
</div>\
</td></tr></table>";
hSentinelsMedallion.itemPrice[2] = 40500;
hSentinelsMedallion.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Sentinel's Medallion</span><br>\
Binds when picked up<br>\
Unique<br>\
Neck<br>\
+11 Agility<br>\
+7 Stamina<br>\
Requires Level 38<br>\
</div>\
</td></tr></table>";
hSentinelsMedallion.itemPrice[3] = 54000;
hSentinelsMedallion.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Sentinel's Medallion</span><br>\
Binds when picked up<br>\
Unique<br>\
Neck<br>\
+12 Agility<br>\
+8 Stamina<br>\
Requires Level 48<br>\
</div>\
</td></tr></table>";
hSentinelsMedallion.itemPrice[4] = 67500;
hSentinelsMedallion.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Sentinel's Medallion</span><br>\
Binds when picked up<br>\
Unique<br>\
Neck<br>\
+15 Agility<br>\
+10 Stamina<br>\
Requires Level 58<br>\
</div>\
</td></tr></table>";
RewardItems[i] = hSentinelsMedallion; i++;






var hProtectorsBand = new RewardItem("alliance","honored","Protector's Band","../../../../shared/wow-com/images/basics/factions/warsong/ring01.gif");
hProtectorsBand.itemPrice = new Array();
hProtectorsBand.itemPrice[0] = 18000;
hProtectorsBand.itemStats = new Array();
hProtectorsBand.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Protector's Band</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+4 Strength<br>\
+4 Agility<br>\
+2 Stamina<br>\
Requires Level 18<br>\
</div>\
</td></tr></table>";
hProtectorsBand.itemPrice[1] = 18000;
hProtectorsBand.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Protector's Band</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+6 Strength<br>\
+6 Agility<br>\
+4 Stamina<br>\
Requires Level 28<br>\
</div>\
</td></tr></table>";
hProtectorsBand.itemPrice[2] = 40500;
hProtectorsBand.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Protector's Band</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+8 Strength<br>\
+8 Agility<br>\
+5 Stamina<br>\
Requires Level 38<br>\
</div>\
</td></tr></table>";
hProtectorsBand.itemPrice[3] = 54000;
hProtectorsBand.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Protector's Band</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+10 Strength<br>\
+9 Agility<br>\
+6 Stamina<br>\
Requires Level 48<br>\
</div>\
</td></tr></table>";
hProtectorsBand.itemPrice[4] = 67500;
hProtectorsBand.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Protector's Band</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+12 Strength<br>\
+11 Agility<br>\
+8 Stamina<br>\
Requires Level 58<br>\
</div>\
</td></tr></table>";
RewardItems[i] = hProtectorsBand; i++;



var hHealingDraught = new RewardItem("alliance","honored","Major Healing Draught","../../../../shared/wow-com/images/basics/factions/warsong/health01.gif");
hHealingDraught.itemPrice = new Array();
hHealingDraught.itemPrice[3] = 900;
hHealingDraught.itemStats = new Array();
hHealingDraught.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Major Healing Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 45<br>\
<span class='myGreen'>Use: Restores 980 to 1260 health. This item may only be used in Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = hHealingDraught; i++; 

var hManaDraught = new RewardItem("alliance","honored","Major Mana Draught","../../../../shared/wow-com/images/basics/factions/warsong/mana01.gif");
hManaDraught.itemPrice = new Array();
hManaDraught.itemPrice[3] = 900;
hManaDraught.itemStats = new Array();
hManaDraught.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Major Mana Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 45<br>\
<span class='myGreen'>Use: Restores 980 to 1260 mana. This item may only be used in Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = hManaDraught; i++;












var rLorekeepersStaff = new RewardItem("alliance","revered","Lorekeeper's Staff","../../../../shared/wow-com/images/basics/factions/warsong/staff_a.gif");
rLorekeepersStaff.itemPrice = new Array();
rLorekeepersStaff.itemPrice[0] = 13690;
rLorekeepersStaff.itemStats = new Array();
rLorekeepersStaff.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Lorekeeper's Staff</span><br>\
Binds when picked up<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
45 - 69 Damage<span class='myRight'>Speed 2.90</span><br>\
(19.7 damage per second)<br>\
+8 Stamina<br>\
+4 Intellect<br>\
Requires Level 18<br>\
<span class='myGreen'>Equip: Restores 3 mana every 5 sec.</span>\
</div>\
</td></tr></table>";
rLorekeepersStaff.itemPrice[1] = 40383;
rLorekeepersStaff.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Lorekeeper's Staff</span><br>\
Binds when picked up<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
64 - 97 Damage<span class='myRight'>Speed 2.90</span><br>\
(27.8 damage per second)<br>\
+11 Stamina<br>\
+7 Intellect<br>\
Requires Level 28<br>\
<span class='myGreen'>Equip: Restores 4 mana every 5 sec.</span>\
</div>\
</td></tr></table>";
rLorekeepersStaff.itemPrice[2] = 93478;
rLorekeepersStaff.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Lorekeeper's Staff</span><br>\
Binds when picked up<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
88 - 133 Damage<span class='myRight'>Speed 2.90</span><br>\
(38.1 damage per second)<br>\
+14 Stamina<br>\
+9 Intellect<br>\
Requires Level 38<br>\
<span class='myGreen'>Equip: Restores 6 mana every 5 sec.</span>\
</div>\
</td></tr></table>";
rLorekeepersStaff.itemPrice[3] = 188354;
rLorekeepersStaff.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Lorekeeper's Staff</span><br>\
Binds when picked up<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
106 - 160 Damage<span class='myRight'>Speed 2.90</span><br>\
(45.9 damage per second)<br>\
+18 Stamina<br>\
+11 Intellect<br>\
Requires Level 48<br>\
<span class='myGreen'>Equip: Restores 7 mana every 5 sec.</span>\
</div>\
</td></tr></table>";
rLorekeepersStaff.itemPrice[4] = 320533;
rLorekeepersStaff.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Lorekeeper's Staff</span><br>\
Binds when picked up<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
125 - 188 Damage<span class='myRight'>Speed 2.90</span><br>\
(54.0 damage per second)<br>\
+21 Stamina<br>\
+13 Intellect<br>\
Requires Level 58<br>\
<span class='myGreen'>Equip: Restores 8 mana every 5 sec.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = rLorekeepersStaff; i++;





var rOutrunnersBow = new RewardItem("alliance","revered","Outrunner's Bow","../../../../shared/wow-com/images/basics/factions/warsong/bow_a.gif");
rOutrunnersBow.itemPrice = new Array();
rOutrunnersBow.itemPrice[0] = 8213;
rOutrunnersBow.itemStats = new Array();
rOutrunnersBow.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Outrunner's Bow</span><br>\
Binds when picked up<br>\
Ranged<span class='myRight'>Bow</span><br>\
19 - 37 Damage<span class='myRight'>Speed 2.40</span><br>\
(11.7 damage per second)<br>\
Requires Level 18<br>\
</div>\
</td></tr></table>";
rOutrunnersBow.itemPrice[1] = 23097;
rOutrunnersBow.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Outrunner's Bow</span><br>\
Binds when picked up<br>\
Ranged<span class='myRight'>Bow</span><br>\
28 - 52 Damage<span class='myRight'>Speed 2.40</span><br>\
(16.7 damage per second)<br>\
Requires Level 28<br>\
</div>\
</td></tr></table>";
rOutrunnersBow.itemPrice[2] = 53662;
rOutrunnersBow.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Outrunner's Bow</span><br>\
Binds when picked up<br>\
Ranged<span class='myRight'>Bow</span><br>\
38 - 71 Damage<span class='myRight'>Speed 2.40</span><br>\
(22.7 damage per second)<br>\
+3 Agility<br>\
+6 Stamina<br>\
Requires Level 38<br>\
</div>\
</td></tr></table>";
rOutrunnersBow.itemPrice[3] = 108528;
rOutrunnersBow.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Outrunner's Bow</span><br>\
Binds when picked up<br>\
Ranged<span class='myRight'>Bow</span><br>\
46 - 86 Damage<span class='myRight'>Speed 2.40</span><br>\
(27.5 damage per second)<br>\
+3 Agility<br>\
+8 Stamina<br>\
Requires Level 48<br>\
</div>\
</td></tr></table>";
rOutrunnersBow.itemPrice[4] = 185362;
rOutrunnersBow.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Outrunner's Bow</span><br>\
Binds when picked up<br>\
Ranged<span class='myRight'>Bow</span><br>\
54 - 101 Damage<span class='myRight'>Speed 2.40</span><br>\
(32.3 damage per second)<br>\
+4 Agility<br>\
+10 Stamina<br>\
Requires Level 58<br>\
</div>\
</td></tr></table>";
RewardItems[i] = rOutrunnersBow; i++;





var rProtectorsSword = new RewardItem("alliance","revered","Protector's Sword","../../../../shared/wow-com/images/basics/factions/warsong/sword_a.gif");
rProtectorsSword.itemPrice = new Array();
rProtectorsSword.itemPrice[0] = 11619;
rProtectorsSword.itemStats = new Array();
rProtectorsSword.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Protector's Sword</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Sword</span><br>\
28 - 53 Damage<span class='myRight'>Speed 2.70</span><br>\
(15.0 damage per second)<br>\
+4 Strength<br>\
+2 Stamina<br>\
Requires Level 18<br>\
</div>\
</td></tr></table>";
rProtectorsSword.itemPrice[1] = 32784;
rProtectorsSword.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Protector's Sword</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Sword</span><br>\
40 - 75 Damage<span class='myRight'>Speed 2.70</span><br>\
(21.3 damage per second)<br>\
+7 Strength<br>\
+3 Stamina<br>\
Requires Level 28<br>\
</div>\
</td></tr></table>";
rProtectorsSword.itemPrice[2] = 71548;
rProtectorsSword.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Protector's Sword</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Sword</span><br>\
55 - 103 Damage<span class='myRight'>Speed 2.70</span><br>\
(29.3 damage per second)<br>\
+8 Strength<br>\
+3 Stamina<br>\
Requires Level 38<br>\
</div>\
</td></tr></table>";
rProtectorsSword.itemPrice[3] = 144705;
rProtectorsSword.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Protector's Sword</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Sword</span><br>\
66 - 124 Damage<span class='myRight'>Speed 2.70</span><br>\
(35.2 damage per second)<br>\
+11 Strength<br>\
+5 Stamina<br>\
Requires Level 48<br>\
</div>\
</td></tr></table>";
rProtectorsSword.itemPrice[4] = 247150;
rProtectorsSword.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Protector's Sword</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Sword</span><br>\
78 - 146 Damage<span class='myRight'>Speed 2.70</span><br>\
(41.5 damage per second)<br>\
+13 Strength<br>\
+5 Stamina<br>\
Requires Level 58<br>\
</div>\
</td></tr></table>";
RewardItems[i] = rProtectorsSword; i++;






var rSentinelsBlade = new RewardItem("alliance","revered","Sentinel's Blade","../../../../shared/wow-com/images/basics/factions/warsong/dagger_a.gif");
rSentinelsBlade.itemPrice = new Array();
rSentinelsBlade.itemPrice[0] = 11745;
rSentinelsBlade.itemStats = new Array();
rSentinelsBlade.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Sentinel's Blade</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
18 - 34 Damage<span class='myRight'>Speed 1.70</span><br>\
(15.3 damage per second)<br>\
+4 Agility<br>\
+2 Stamina<br>\
Requires Level 18<br>\
</div>\
</td></tr></table>";
rSentinelsBlade.itemPrice[1] = 31835;
rSentinelsBlade.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Sentinel's Blade</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
25 - 47 Damage<span class='myRight'>Speed 1.70</span><br>\
(21.2 damage per second)<br>\
+7 Agility<br>\
+3 Stamina<br>\
Requires Level 28<br>\
</div>\
</td></tr></table>";
rSentinelsBlade.itemPrice[2] = 73694;
rSentinelsBlade.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Sentinel's Blade</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
34 - 65 Damage<span class='myRight'>Speed 1.70</span><br>\
(29.1 damage per second)<br>\
+8 Agility<br>\
+3 Stamina<br>\
Requires Level 38<br>\
</div>\
</td></tr></table>";
rSentinelsBlade.itemPrice[3] = 148483;
rSentinelsBlade.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Sentinel's Blade</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
41 - 78 Damage<span class='myRight'>Speed 1.70</span><br>\
(35.0 damage per second)<br>\
+11 Agility<br>\
+5 Stamina<br>\
Requires Level 48<br>\
</div>\
</td></tr></table>";
rSentinelsBlade.itemPrice[4] = 252644;
rSentinelsBlade.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Sentinel's Blade</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
49 - 92 Damage<span class='myRight'>Speed 1.70</span><br>\
(41.5 damage per second)<br>\
+13 Agility<br>\
+5 Stamina<br>\
Requires Level 58<br>\
</div>\
</td></tr></table>";
RewardItems[i] = rSentinelsBlade; i++;








var eSilverWingBattleTabard = new RewardItem("alliance","exalted","Silverwing Battle Tabard","../../../../shared/wow-com/images/basics/factions/warsong/tabard.gif");
eSilverWingBattleTabard.itemPrice = new Array();
eSilverWingBattleTabard.itemPrice[0] = 45000;
eSilverWingBattleTabard.itemStats = new Array();
eSilverWingBattleTabard.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Silverwing Battle Tabard</b><br>\
Binds when picked up<br>\
Unique<br>\
Tabard<br>\
</div>\
</td></tr></table>";
RewardItems[i] = eSilverWingBattleTabard; i++;




var eBerserkerBracers = new RewardItem("alliance","exalted","Berserker Bracers","../../../../shared/wow-com/images/basics/factions/warsong/bracers02.gif");
eBerserkerBracers.itemPrice = new Array();
eBerserkerBracers.itemPrice[3] = 22254;
eBerserkerBracers.itemStats = new Array();
eBerserkerBracers.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Berserker Bracers</span><br>\
Binds when picked up<br>\
Unique<br>\
Wrist<span class='myRight'>Plate</span><br>\
229 Armor<br>\
+14 Strength<br>\
+6 Agility<br>\
+8 Stamina<br>\
Requires Level 40<br>\
</div>\
</td></tr></table>";
eBerserkerBracers.itemPrice[4] = 43358;
eBerserkerBracers.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Berserker Bracers</span><br>\
Binds when picked up<br>\
Unique<br>\
Wrist<span class='myRight'>Plate</span><br>\
275 Armor<br>\
+17 Strength<br>\
+7 Agility<br>\
+9 Stamina<br>\
Requires Level 50<br>\
</div>\
</td></tr></table>";
eBerserkerBracers.itemPrice[5] = 79647;
eBerserkerBracers.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Berserker Bracers</span><br>\
Binds when picked up<br>\
Unique<br>\
Wrist<span class='myRight'>Plate</span><br>\
323 Armor<br>\
+19 Strength<br>\
+8 Agility<br>\
+11 Stamina<br>\
Requires Level 60<br>\
</div>\
</td></tr></table>";
RewardItems[i] = eBerserkerBracers; i++;





var eDryadsWristBindings = new RewardItem("alliance","exalted","Dryad's Wrist Bindings","../../../../shared/wow-com/images/basics/factions/warsong/bracers03.gif");
eDryadsWristBindings.itemPrice = new Array();
eDryadsWristBindings.itemPrice[3] = 24305;
eDryadsWristBindings.itemStats = new Array();
eDryadsWristBindings.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Dryad's Wrist Bindings</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Cloth</span><br>\
31 Armor<br>\
+6 Stamina<br>\
+6 Intellect<br>\
+5 Spirit<br>\
Requires Level 40<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 16.</span><br>\
</div>\
</td></tr></table>";
eDryadsWristBindings.itemPrice[4] = 47184;
eDryadsWristBindings.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Dryad's Wrist Bindings</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Cloth</span><br>\
37 Armor<br>\
+7 Stamina<br>\
+6 Intellect<br>\
+7 Spirit<br>\
Requires Level 50<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 20.</span><br>\
</div>\
</td></tr></table>";
eDryadsWristBindings.itemPrice[5] = 78794;
eDryadsWristBindings.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Dryad's Wrist Bindings</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Cloth</span><br>\
44 Armor<br>\
+8 Stamina<br>\
+8 Intellect<br>\
+7 Spirit<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 22.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eDryadsWristBindings; i++;





var eForestStalkersBracers = new RewardItem("alliance","exalted","Forest Stalker's Bracers","../../../../shared/wow-com/images/basics/factions/warsong/bracers01.gif");
eForestStalkersBracers.itemPrice = new Array();
eForestStalkersBracers.itemPrice[3] = 27818;
eForestStalkersBracers.itemStats = new Array();
eForestStalkersBracers.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Forest Stalker's Bracers</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Leather</span><br>\
64 Armor<br>\
+8 Strength<br>\
+14 Agility<br>\
+6 Stamina<br>\
Requires Level 40<br>\
</div>\
</td></tr></table>";
eForestStalkersBracers.itemPrice[4] = 54196;
eForestStalkersBracers.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Forest Stalker's Bracers</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Leather</span><br>\
75 Armor<br>\
+9 Strength<br>\
+17 Agility<br>\
+7 Stamina<br>\
Requires Level 50<br>\
</div>\
</td></tr></table>";
eForestStalkersBracers.itemPrice[5] = 90827;
eForestStalkersBracers.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Forest Stalker's Bracers</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Leather</span><br>\
86 Armor<br>\
+11 Strength<br>\
+19 Agility<br>\
+8 Stamina<br>\
Requires Level 60<br>\
</div>\
</td></tr></table>";
RewardItems[i] = eForestStalkersBracers; i++;






var eWindtalkersWristguards = new RewardItem("alliance","exalted","Windtalker's Wristguards","../../../../shared/wow-com/images/basics/factions/warsong/bracers04.gif");
eWindtalkersWristguards.itemPrice = new Array();
eWindtalkersWristguards.itemPrice[3] = 33381;
eWindtalkersWristguards.itemStats = new Array();
eWindtalkersWristguards.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Windtalker's Wristguards</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Mail</span><br>\
130 Armor<br>\
+6 Stamina<br>\
+6 Intellect<br>\
+5 Spirit<br>\
Requires Level 40<br>\
<span class='myGreen'>Equip: +28 Attack Power.</span><br>\
</div>\
</td></tr></table>";
eWindtalkersWristguards.itemPrice[4] = 65036;
eWindtalkersWristguards.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Windtalker's Wristguards</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Mail</span><br>\
156 Armor<br>\
+7 Stamina<br>\
+6 Intellect<br>\
+6 Spirit<br>\
Requires Level 50<br>\
<span class='myGreen'>Equip: +34 Attack Power.</span><br>\
</div>\
</td></tr></table>";
eWindtalkersWristguards.itemPrice[5] = 108993;
eWindtalkersWristguards.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Windtalker's Wristguards</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Mail</span><br>\
182 Armor<br>\
+8 Stamina<br>\
+8 Intellect<br>\
+7 Spirit<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: +38 Attack Power.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eWindtalkersWristguards; i++;



var eSentinelSilkLeggings = new RewardItem("alliance","exalted","Sentinel's Silk Leggings","../../../../shared/wow-com/images/basics/factions/warsong/silk_leggings.gif");
eSentinelSilkLeggings.itemPrice = new Array();
eSentinelSilkLeggings.itemPrice[5] = 153673;
eSentinelSilkLeggings.itemStats = new Array();
eSentinelSilkLeggings.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Sentinel's Silk Leggings</span><br>\
Binds when picked up<br>\
Unique<br>\
Legs<span class='myRight'>Cloth</span><br>\
188 Armor<br>\
+23 Stamina<br>\
+19 Intellect<br>\
+10 Spirit<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 28.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eSentinelSilkLeggings; i++;

var eSentinelLizardhidePants = new RewardItem("alliance","exalted","Sentinel's Lizardhide Pants","../../../../shared/wow-com/images/basics/factions/warsong/lizardhide_pants.gif");
eSentinelLizardhidePants.itemPrice = new Array();
eSentinelLizardhidePants.itemPrice[5] = 190682;
eSentinelLizardhidePants.itemStats = new Array();
eSentinelLizardhidePants.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Sentinel's Lizardhide Pants</span><br>\
Binds when picked up<br>\
Legs<span class='myRight'>Leather</span><br>\
263 Armor<br>\
+22 Strength<br>\
+10 Agility<br>\
+22 Stamina<br>\
+22 Intellect<br>\
+9 Spirit<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 11.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eSentinelLizardhidePants; i++;

var eSentinelLeatherPants = new RewardItem("alliance","exalted","Sentinel's Leather Pants","../../../../shared/wow-com/images/basics/factions/warsong/leather_pants.gif");
eSentinelLeatherPants.itemPrice = new Array();
eSentinelLeatherPants.itemPrice[5] = 189977;
eSentinelLeatherPants.itemStats = new Array();
eSentinelLeatherPants.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Sentinel's Leather Pants</span><br>\
Binds when picked up<br>\
Legs<span class='myRight'>Leather</span><br>\
233 Armor<br>\
+28 Agility<br>\
+27 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 1%.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eSentinelLeatherPants; i++;

var eSentinelChainLeggings = new RewardItem("alliance","exalted","Sentinel's Chain Leggings","../../../../shared/wow-com/images/basics/factions/warsong/chain_leggings.gif");
eSentinelChainLeggings.itemPrice = new Array();
eSentinelChainLeggings.itemPrice[5] = 217986;
eSentinelChainLeggings.itemStats = new Array();
eSentinelChainLeggings.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Sentinel's Chain Leggings</span><br>\
Binds when picked up<br>\
Legs<span class='myRight'>Mail</span><br>\
364 Armor<br>\
+35 Agility<br>\
+15 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 1%.<br>Equip: Improves your chance to hit by 1%.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eSentinelChainLeggings; i++;

var eSentinelLamellarLegguards = new RewardItem("alliance","exalted","Sentinel's Lamellar Legguards","../../../../shared/wow-com/images/basics/factions/warsong/lamellar_legguards.gif");
eSentinelLamellarLegguards.itemPrice = new Array();
eSentinelLamellarLegguards.itemPrice[5] = 154222;
eSentinelLamellarLegguards.itemStats = new Array();
eSentinelLamellarLegguards.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Sentinel's Lamellar Legguards</span><br>\
Binds when picked up<br>\
Legs<span class='myRight'>Plate</span><br>\
646 Armor<br>\
+21 Strength<br>\
+21 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 1%.<br>Equip: Improves your chance to hit by 1%.<br>Equip: Increases damage and healing done by magical spells and effects by up to 25.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eSentinelLamellarLegguards; i++;

var eSentinelPlateLegguards = new RewardItem("alliance","exalted","Sentinel's Plate Legguards","../../../../shared/wow-com/images/basics/factions/warsong/plate_legguards.gif");
eSentinelPlateLegguards.itemPrice = new Array();
eSentinelPlateLegguards.itemPrice[5] = 145324;
eSentinelPlateLegguards.itemStats = new Array();
eSentinelPlateLegguards.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Sentinel's Plate Legguards</span><br>\
Binds when picked up<br>\
Legs<span class='myRight'>Plate</span><br>\
646 Armor<br>\
+28 Strength<br>\
+27 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 1%.<br>Equip: Improves your chance to hit by 1%.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eSentinelPlateLegguards; i++;
//---Horde below

var fRuneOfPerfection = new RewardItem("horde","friendly","Rune of Perfection","../../../../shared/wow-com/images/basics/factions/warsong/rune01.gif");
fRuneOfPerfection.itemPrice = new Array();
fRuneOfPerfection.itemPrice[1] = 20000;
fRuneOfPerfection.itemStats = new Array();
fRuneOfPerfection.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Rune of Perfection</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
+4 Stamina<br>\
Classes: Priest, Shaman, Mage, Warlock, Druid<br>\
Requires Level 20<br>\
<span class='myGreen'>Equip: Decreases the magical resistances of your spell targets by 10.</span>\
</div>\
</td></tr></table>";

fRuneOfPerfection.itemPrice[3] = 40000;
fRuneOfPerfection.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Rune of Perfection</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
+7 Stamina<br>\
Classes: Priest, Shaman, Mage, Warlock, Druid<br>\
Requires Level 40<br>\
<span class='myGreen'>Equip: Decreases the magical resistances of your spell targets by 20.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fRuneOfPerfection; i++;




var fRuneOfDuty = new RewardItem("horde","friendly","Rune of Duty","../../../../shared/wow-com/images/basics/factions/warsong/rune02.gif");
fRuneOfDuty.itemPrice = new Array();
fRuneOfDuty.itemPrice[1] = 20000;
fRuneOfDuty.itemStats = new Array();
fRuneOfDuty.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Rune of Duty</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
+4 Stamina<br>\
Classes: Warrior, Paladin, Hunter, Rogue<br>\
Requires Level 20<br>\
<span class='myGreen'>Equip: Restores 2 health every 5 sec.</span>\
</div>\
</td></tr></table>";

fRuneOfDuty.itemPrice[3] = 40000;
fRuneOfDuty.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Rune of Duty</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
+7 Stamina<br>\
Classes: Warrior, Paladin, Hunter, Rogue<br>\
Requires Level 40<br>\
<span class='myGreen'>Equip: Restores 4 health every 5 sec.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fRuneOfDuty; i++;

var fWarsongFieldRations = new RewardItem("horde","friendly","Warsong Gulch Field Ration","../../../../shared/wow-com/images/basics/factions/warsong/fieldration.gif");
fWarsongFieldRations.itemPrice = new Array();
fWarsongFieldRations.itemPrice[1] = 1000;
fWarsongFieldRations.itemStats = new Array();
fWarsongFieldRations.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Field Ration</b><br>\
Binds when picked up<br>\
Requires Level 25<br>\
<span class='myGreen'>Use: Restores 1074 health and 2202 mana over 30 sec. Must remain seated while eating. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongFieldRations; i++;


var fWarsongIronRations = new RewardItem("horde","friendly","Warsong Gulch Iron Ration","../../../../shared/wow-com/images/basics/factions/warsong/ironration.gif");
fWarsongIronRations.itemPrice = new Array();
fWarsongIronRations.itemPrice[2] = 1500;
fWarsongIronRations.itemStats = new Array();
fWarsongIronRations.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Iron Ration</b><br>\
Binds when picked up<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 1608 health and 3306 mana over 30 sec. Must remain seated while eating. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongIronRations; i++;


var fWarsongEnrichedRations = new RewardItem("horde","friendly","Warsong Gulch Enriched Ration","../../../../shared/wow-com/images/basics/factions/warsong/enrichedration.gif");
fWarsongEnrichedRations.itemPrice = new Array();
fWarsongEnrichedRations.itemPrice[3] = 2000;
fWarsongEnrichedRations.itemStats = new Array();
fWarsongEnrichedRations.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Enriched Ration</b><br>\
Binds when picked up<br>\
Requires Level 45<br>\
<span class='myGreen'>Use: Restores 2148 health and 4410 mana over 30 sec. Must remain seated while eating. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongEnrichedRations; i++;






var fWarsongSilkBandages = new RewardItem("horde","friendly","Warsong Gulch Silk Bandage","../../../../shared/wow-com/images/basics/factions/warsong/silkbandage.gif");
fWarsongSilkBandages.itemPrice = new Array();
fWarsongSilkBandages.itemPrice[1] = 1000;
fWarsongSilkBandages.itemStats = new Array();
fWarsongSilkBandages.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Silk Bandage</b><br>\
Binds when picked up<br>\
Requires Level 25<br>\
Requires First Aid (125)<br>\
<span class='myGreen'>Use: Heals 640 damage over 8 sec. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongSilkBandages; i++;

var fWarsongMageweaveBandages = new RewardItem("horde","friendly","Warsong Gulch Mageweave Bandage","../../../../shared/wow-com/images/basics/factions/warsong/mageweavebandage.gif");
fWarsongMageweaveBandages.itemPrice = new Array();
fWarsongMageweaveBandages.itemPrice[2] = 1500;
fWarsongMageweaveBandages.itemStats = new Array();
fWarsongMageweaveBandages.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Mageweave Bandage</b><br>\
Binds when picked up<br>\
Requires Level 35<br>\
Requires First Aid (175)<br>\
<span class='myGreen'>Use: Heals 1104 damage over 8 sec. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongMageweaveBandages; i++;

var fWarsongRuneclothBandages = new RewardItem("horde","friendly","Warsong Gulch Runecloth Bandage","../../../../shared/wow-com/images/basics/factions/warsong/runeclothbandage.gif");
fWarsongRuneclothBandages.itemPrice = new Array();
fWarsongRuneclothBandages.itemPrice[3] = 2000;
fWarsongRuneclothBandages.itemStats = new Array();
fWarsongRuneclothBandages.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Gulch Runecloth Bandage</b><br>\
Binds when picked up<br>\
Requires Level 45<br>\
Requires First Aid (225)<br>\
<span class='myGreen'>Use: Heals 2000 damage over 8 sec. Usable only inside Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fWarsongRuneclothBandages; i++;





var fHealingDraught = new RewardItem("horde","friendly","Superior Healing Draught","../../../../shared/wow-com/images/basics/factions/warsong/health02.gif");
fHealingDraught.itemPrice = new Array();
fHealingDraught.itemPrice[2] = 500;
fHealingDraught.itemStats = new Array();
fHealingDraught.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Superior Healing Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 health. This item may only be used in Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fHealingDraught; i++; 

var fManaDraught = new RewardItem("horde","friendly","Superior Mana Draught","../../../../shared/wow-com/images/basics/factions/warsong/mana02.gif");
fManaDraught.itemPrice = new Array();
fManaDraught.itemPrice[2] = 500;
fManaDraught.itemStats = new Array();
fManaDraught.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Superior Mana Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 mana. This item may only be used in Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = fManaDraught; i++;
















var hCaretakersCape = new RewardItem("horde","honored","Battle Healer's Cloak","../../../../shared/wow-com/images/basics/factions/warsong/cape_h.gif");
hCaretakersCape.itemPrice = new Array();
hCaretakersCape.itemPrice[0] = 3285;
hCaretakersCape.itemStats = new Array();
hCaretakersCape.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Battle Healer's Cloak</span><br>\
Binds when picked up<br>\
Unique<br>\
Back<br>\
20 Armor<br>\
+4 Stamina<br>\
+2 Spirit<br>\
Requires Level 18<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 9.</span>\
</div>\
</td></tr></table>";
hCaretakersCape.itemPrice[1] = 9552;
hCaretakersCape.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Battle Healer's Cloak</span><br>\
Binds when picked up<br>\
Unique<br>\
Back<br>\
25 Armor<br>\
+6 Stamina<br>\
+4 Spirit<br>\
Requires Level 28<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 13.</span>\
</div>\
</td></tr></table>";
hCaretakersCape.itemPrice[2] = 21514;
hCaretakersCape.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Battle Healer's Cloak</span><br>\
Binds when picked up<br>\
Unique<br>\
Back<br>\
31 Armor<br>\
+8 Stamina<br>\
+5 Spirit<br>\
Requires Level 38<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 18.</span>\
</div>\
</td></tr></table>";
hCaretakersCape.itemPrice[3] = 43343;
hCaretakersCape.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Battle Healer's Cloak</span><br>\
Binds when picked up<br>\
Unique<br>\
Back<br>\
38 Armor<br>\
+9 Stamina<br>\
+6 Spirit<br>\
Requires Level 48<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 22.</span>\
</div>\
</td></tr></table>";
hCaretakersCape.itemPrice[4] = 81522;
hCaretakersCape.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Battle Healer's Cloak</span><br>\
Binds when picked up<br>\
Unique<br>\
Back<br>\
20 Armor<br>\
+11 Stamina<br>\
+8 Spirit<br>\
Requires Level 58<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 26.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = hCaretakersCape; i++;





var hLorekeepersRing = new RewardItem("horde","honored","Advisor's Ring","../../../../shared/wow-com/images/basics/factions/warsong/ring03.gif");
hLorekeepersRing.itemPrice = new Array();
hLorekeepersRing.itemPrice[0] = 18000;
hLorekeepersRing.itemStats = new Array();
hLorekeepersRing.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Advisor's Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+2 Stamina<br>\
Requires Level 18<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 5.<br>\
Equip: Restores 2 mana per 5 sec.</span>\
</div>\
</td></tr></table>";
hLorekeepersRing.itemPrice[1] = 18000;
hLorekeepersRing.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Advisor's Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+4 Stamina<br>\
Requires Level 28<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 7.<br>\
Equip: Restores 2 mana per 5 sec.</span>\
</div>\
</td></tr></table>";
hLorekeepersRing.itemPrice[2] = 40500;
hLorekeepersRing.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Advisor's Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+5 Stamina<br>\
Requires Level 38<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 9.<br>\
Equip: Restores 3 mana per 5 sec.</span>\
</div>\
</td></tr></table>";
hLorekeepersRing.itemPrice[3] = 54000;
hLorekeepersRing.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Advisor's Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+6 Stamina<br>\
Requires Level 48<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 12.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
</div>\
</td></tr></table>";
hLorekeepersRing.itemPrice[4] = 67500;
hLorekeepersRing.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Advisor's Ring</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+8 Stamina<br>\
Requires Level 58<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 14.<br>\
Equip: Restores 4 mana per 5 sec.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = hLorekeepersRing; i++;





var hSentinelsMedallion = new RewardItem("horde","honored","Scout's Medallion","../../../../shared/wow-com/images/basics/factions/warsong/medallion_h.gif");
hSentinelsMedallion.itemPrice = new Array();
hSentinelsMedallion.itemPrice[0] = 18000;
hSentinelsMedallion.itemStats = new Array();
hSentinelsMedallion.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Scout's Medallion</span><br>\
Binds when picked up<br>\
Unique<br>\
Neck<br>\
+6 Agility<br>\
+2 Stamina<br>\
Requires Level 18<br>\
</div>\
</td></tr></table>";
hSentinelsMedallion.itemPrice[1] = 18000;
hSentinelsMedallion.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Scout's Medallion</span><br>\
Binds when picked up<br>\
Unique<br>\
Neck<br>\
+8 Agility<br>\
+5 Stamina<br>\
Requires Level 28<br>\
</div>\
</td></tr></table>";
hSentinelsMedallion.itemPrice[2] = 40500;
hSentinelsMedallion.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Scout's Medallion</span><br>\
Binds when picked up<br>\
Unique<br>\
Neck<br>\
+11 Agility<br>\
+7 Stamina<br>\
Requires Level 38<br>\
</div>\
</td></tr></table>";
hSentinelsMedallion.itemPrice[3] = 54000;
hSentinelsMedallion.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Scout's Medallion</span><br>\
Binds when picked up<br>\
Unique<br>\
Neck<br>\
+12 Agility<br>\
+8 Stamina<br>\
Requires Level 48<br>\
</div>\
</td></tr></table>";
hSentinelsMedallion.itemPrice[4] = 67500;
hSentinelsMedallion.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Scout's Medallion</span><br>\
Binds when picked up<br>\
Unique<br>\
Neck<br>\
+15 Agility<br>\
+10 Stamina<br>\
Requires Level 58<br>\
</div>\
</td></tr></table>";
RewardItems[i] = hSentinelsMedallion; i++;





var hProtectorsBand = new RewardItem("horde","honored","Legionnaire's Band","../../../../shared/wow-com/images/basics/factions/warsong/ring04.gif");
hProtectorsBand.itemPrice = new Array();
hProtectorsBand.itemPrice[0] = 18000;
hProtectorsBand.itemStats = new Array();
hProtectorsBand.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Legionnaire's Band</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+4 Strength<br>\
+4 Agility<br>\
+2 Stamina<br>\
Requires Level 18<br>\
</div>\
</td></tr></table>";
hProtectorsBand.itemPrice[1] = 18000;
hProtectorsBand.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Legionnaire's Band</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+6 Strength<br>\
+6 Agility<br>\
+4 Stamina<br>\
Requires Level 28<br>\
</div>\
</td></tr></table>";
hProtectorsBand.itemPrice[2] = 40500;
hProtectorsBand.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Legionnaire's Band</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+8 Strength<br>\
+8 Agility<br>\
+5 Stamina<br>\
Requires Level 38<br>\
</div>\
</td></tr></table>";
hProtectorsBand.itemPrice[3] = 54000;
hProtectorsBand.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Legionnaire's Band</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+10 Strength<br>\
+9 Agility<br>\
+6 Stamina<br>\
Requires Level 48<br>\
</div>\
</td></tr></table>";
hProtectorsBand.itemPrice[4] = 67500;
hProtectorsBand.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Legionnaire's Band</span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+12 Strength<br>\
+11 Agility<br>\
+8 Stamina<br>\
Requires Level 58<br>\
</div>\
</td></tr></table>";
RewardItems[i] = hProtectorsBand; i++;












var hHealingDraught = new RewardItem("horde","honored","Major Healing Draught","../../../../shared/wow-com/images/basics/factions/warsong/health01.gif");
hHealingDraught.itemPrice = new Array();
hHealingDraught.itemPrice[3] = 900;
hHealingDraught.itemStats = new Array();
hHealingDraught.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Superior Major Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 45<br>\
<span class='myGreen'>Use: Restores 980 to 1260 health. This item may only be used in Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = hHealingDraught; i++; 

var hManaDraught = new RewardItem("horde","honored","Major Mana Draught","../../../../shared/wow-com/images/basics/factions/warsong/mana01.gif");
hManaDraught.itemPrice = new Array();
hManaDraught.itemPrice[3] = 900;
hManaDraught.itemStats = new Array();
hManaDraught.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Major Mana Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 45<br>\
<span class='myGreen'>Use: Restores 980 to 1260 mana. This item may only be used in Warsong Gulch.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = hManaDraught; i++;











var rLorekeepersStaff = new RewardItem("horde","revered","Advisor's Gnarled Staff","../../../../shared/wow-com/images/basics/factions/warsong/staff_h.gif");
rLorekeepersStaff.itemPrice = new Array();
rLorekeepersStaff.itemPrice[0] = 13690;
rLorekeepersStaff.itemStats = new Array();
rLorekeepersStaff.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Advisor's Gnarled Staff</span><br>\
Binds when picked up<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
45 - 69 Damage<span class='myRight'>Speed 2.90</span><br>\
(19.7 damage per second)<br>\
+8 Stamina<br>\
+4 Intellect<br>\
Requires Level 18<br>\
<span class='myGreen'>Equip: Restores 3 mana every 5 sec.</span>\
</div>\
</td></tr></table>";
rLorekeepersStaff.itemPrice[1] = 38494;
rLorekeepersStaff.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Advisor's Gnarled Staff</span><br>\
Binds when picked up<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
64 - 97 Damage<span class='myRight'>Speed 2.90</span><br>\
(27.8 damage per second)<br>\
+11 Stamina<br>\
+7 Intellect<br>\
Requires Level 28<br>\
<span class='myGreen'>Equip: Restores 4 mana every 5 sec.</span>\
</div>\
</td></tr></table>";
rLorekeepersStaff.itemPrice[2] = 89436;
rLorekeepersStaff.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Advisor's Gnarled Staff</span><br>\
Binds when picked up<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
88 - 133 Damage<span class='myRight'>Speed 2.90</span><br>\
(38.1 damage per second)<br>\
+14 Stamina<br>\
+9 Intellect<br>\
Requires Level 38<br>\
<span class='myGreen'>Equip: Restores 6 mana every 5 sec.</span>\
</div>\
</td></tr></table>";
rLorekeepersStaff.itemPrice[3] = 180881;
rLorekeepersStaff.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Advisor's Gnarled Staff</span><br>\
Binds when picked up<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
106 - 160 Damage<span class='myRight'>Speed 2.90</span><br>\
(45.9 damage per second)<br>\
+18 Stamina<br>\
+11 Intellect<br>\
Requires Level 48<br>\
<span class='myGreen'>Equip: Restores 7 mana every 5 sec.</span>\
</div>\
</td></tr></table>";
rLorekeepersStaff.itemPrice[4] = 315771;
rLorekeepersStaff.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Advisor's Gnarled Staff</span><br>\
Binds when picked up<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
125 - 188 Damage<span class='myRight'>Speed 2.90</span><br>\
(54.0 damage per second)<br>\
+21 Stamina<br>\
+13 Intellect<br>\
Requires Level 58<br>\
<span class='myGreen'>Equip: Restores 8 mana every 5 sec.</span>\
</div>\
</td></tr></table>";
RewardItems[i] = rLorekeepersStaff; i++;



var rOutrunnersBow = new RewardItem("horde","revered","Outrider's Bow","../../../../shared/wow-com/images/basics/factions/warsong/bow_h.gif");
rOutrunnersBow.itemPrice = new Array();
rOutrunnersBow.itemPrice[0] = 8213;
rOutrunnersBow.itemStats = new Array();
rOutrunnersBow.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Outrider's Bow</span><br>\
Binds when picked up<br>\
Ranged<span class='myRight'>Bow</span><br>\
19 - 37 Damage<span class='myRight'>Speed 2.40</span><br>\
(11.7 damage per second)<br>\
Requires Level 18<br>\
</div>\
</td></tr></table>";
rOutrunnersBow.itemPrice[1] = 23097;
rOutrunnersBow.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Outrider's Bow</span><br>\
Binds when picked up<br>\
Ranged<span class='myRight'>Bow</span><br>\
28 - 52 Damage<span class='myRight'>Speed 2.40</span><br>\
(16.7 damage per second)<br>\
Requires Level 28<br>\
</div>\
</td></tr></table>";
rOutrunnersBow.itemPrice[2] = 53662;
rOutrunnersBow.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Outrider's Bow</span><br>\
Binds when picked up<br>\
Ranged<span class='myRight'>Bow</span><br>\
38 - 71 Damage<span class='myRight'>Speed 2.40</span><br>\
(22.7 damage per second)<br>\
+3 Agility<br>\
+6 Stamina<br>\
Requires Level 38<br>\
</div>\
</td></tr></table>";
rOutrunnersBow.itemPrice[3] = 108528;
rOutrunnersBow.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Outrider's Bow</span><br>\
Binds when picked up<br>\
Ranged<span class='myRight'>Bow</span><br>\
46 - 86 Damage<span class='myRight'>Speed 2.40</span><br>\
(27.5 damage per second)<br>\
+3 Agility<br>\
+8 Stamina<br>\
Requires Level 48<br>\
</div>\
</td></tr></table>";
rOutrunnersBow.itemPrice[4] = 198053;
rOutrunnersBow.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Outrider's Bow</span><br>\
Binds when picked up<br>\
Ranged<span class='myRight'>Bow</span><br>\
54 - 101 Damage<span class='myRight'>Speed 2.40</span><br>\
(32.3 damage per second)<br>\
+4 Agility<br>\
+10 Stamina<br>\
Requires Level 58<br>\
</div>\
</td></tr></table>";
RewardItems[i] = rOutrunnersBow; i++;





var rProtectorsSword = new RewardItem("horde","revered","Legionnaire's Sword","../../../../shared/wow-com/images/basics/factions/warsong/sword_h.gif");
rProtectorsSword.itemPrice = new Array();
rProtectorsSword.itemPrice[0] = 10952;
rProtectorsSword.itemStats = new Array();
rProtectorsSword.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Legionnaire's Sword</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Sword</span><br>\
28 - 53 Damage<span class='myRight'>Speed 2.70</span><br>\
(15.0 damage per second)<br>\
+4 Strength<br>\
+2 Stamina<br>\
Requires Level 18<br>\
</div>\
</td></tr></table>";
rProtectorsSword.itemPrice[1] = 30795;
rProtectorsSword.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Legionnaire's Sword</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Sword</span><br>\
40 - 75 Damage<span class='myRight'>Speed 2.70</span><br>\
(21.3 damage per second)<br>\
+7 Strength<br>\
+3 Stamina<br>\
Requires Level 28<br>\
</div>\
</td></tr></table>";
rProtectorsSword.itemPrice[2] = 71548;
rProtectorsSword.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Legionnaire's Sword</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Sword</span><br>\
55 - 103 Damage<span class='myRight'>Speed 2.70</span><br>\
(29.3 damage per second)<br>\
+8 Strength<br>\
+3 Stamina<br>\
Requires Level 38<br>\
</div>\
</td></tr></table>";
rProtectorsSword.itemPrice[3] = 144705;
rProtectorsSword.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Legionnaire's Sword</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Sword</span><br>\
66 - 124 Damage<span class='myRight'>Speed 2.70</span><br>\
(35.2 damage per second)<br>\
+11 Strength<br>\
+5 Stamina<br>\
Requires Level 48<br>\
</div>\
</td></tr></table>";
rProtectorsSword.itemPrice[4] = 247150;
rProtectorsSword.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Legionnaire's Sword</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Sword</span><br>\
78 - 146 Damage<span class='myRight'>Speed 2.70</span><br>\
(41.5 damage per second)<br>\
+13 Strength<br>\
+5 Stamina<br>\
Requires Level 58<br>\
</div>\
</td></tr></table>";
RewardItems[i] = rProtectorsSword; i++;










var rSentinelsBlade = new RewardItem("horde","revered","Scout's Blade","../../../../shared/wow-com/images/basics/factions/warsong/dagger_h.gif");
rSentinelsBlade.itemPrice = new Array();
rSentinelsBlade.itemPrice[0] = 10952;
rSentinelsBlade.itemStats = new Array();
rSentinelsBlade.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Scout's Blade</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
18 - 34 Damage<span class='myRight'>Speed 1.70</span><br>\
(15.3 damage per second)<br>\
+4 Agility<br>\
+2 Stamina<br>\
Requires Level 18<br>\
</div>\
</td></tr></table>";
rSentinelsBlade.itemPrice[1] = 31360;
rSentinelsBlade.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Scout's Blade</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
25 - 47 Damage<span class='myRight'>Speed 1.70</span><br>\
(21.2 damage per second)<br>\
+7 Agility<br>\
+3 Stamina<br>\
Requires Level 28<br>\
</div>\
</td></tr></table>";
rSentinelsBlade.itemPrice[2] = 78112;
rSentinelsBlade.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Scout's Blade</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
34 - 65 Damage<span class='myRight'>Speed 1.70</span><br>\
(29.1 damage per second)<br>\
+8 Agility<br>\
+3 Stamina<br>\
Requires Level 38<br>\
</div>\
</td></tr></table>";
rSentinelsBlade.itemPrice[3] = 157419;
rSentinelsBlade.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Scout's Blade</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
41 - 78 Damage<span class='myRight'>Speed 1.70</span><br>\
(35.0 damage per second)<br>\
+11 Agility<br>\
+5 Stamina<br>\
Requires Level 48<br>\
</div>\
</td></tr></table>";
rSentinelsBlade.itemPrice[4] = 267906;
rSentinelsBlade.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myBlue'>Scout's Blade</span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
49 - 92 Damage<span class='myRight'>Speed 1.70</span><br>\
(41.5 damage per second)<br>\
+13 Agility<br>\
+5 Stamina<br>\
Requires Level 58<br>\
</div>\
</td></tr></table>";
RewardItems[i] = rSentinelsBlade; i++;




var eSilverWingBattleTabard = new RewardItem("horde","exalted","Warsong Battle Tabard","../../../../shared/wow-com/images/basics/factions/warsong/tabard.gif");
eSilverWingBattleTabard.itemPrice = new Array();
eSilverWingBattleTabard.itemPrice[0] = 45000;
eSilverWingBattleTabard.itemStats = new Array();
eSilverWingBattleTabard.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<b>Warsong Battle Tabard</b><br>\
Binds when picked up<br>\
Unique<br>\
Tabard<br>\
</div>\
</td></tr></table>";
RewardItems[i] = eSilverWingBattleTabard; i++;




var eBerserkerBracers = new RewardItem("horde","exalted","Berserker Bracers","../../../../shared/wow-com/images/basics/factions/warsong/bracers02.gif");
eBerserkerBracers.itemPrice = new Array();
eBerserkerBracers.itemPrice[3] = 22254;
eBerserkerBracers.itemStats = new Array();
eBerserkerBracers.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Berserker Bracers</span><br>\
Binds when picked up<br>\
Unique<br>\
Wrist<span class='myRight'>Plate</span><br>\
229 Armor<br>\
+14 Strength<br>\
+6 Agility<br>\
+8 Stamina<br>\
Requires Level 40<br>\
</div>\
</td></tr></table>";
eBerserkerBracers.itemPrice[4] = 43358;
eBerserkerBracers.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Berserker Bracers</span><br>\
Binds when picked up<br>\
Unique<br>\
Wrist<span class='myRight'>Plate</span><br>\
275 Armor<br>\
+17 Strength<br>\
+7 Agility<br>\
+9 Stamina<br>\
Requires Level 50<br>\
</div>\
</td></tr></table>";
eBerserkerBracers.itemPrice[5] = 79647;
eBerserkerBracers.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Berserker Bracers</span><br>\
Binds when picked up<br>\
Unique<br>\
Wrist<span class='myRight'>Plate</span><br>\
323 Armor<br>\
+19 Strength<br>\
+8 Agility<br>\
+11 Stamina<br>\
Requires Level 60<br>\
</div>\
</td></tr></table>";
RewardItems[i] = eBerserkerBracers; i++;





var eDryadsWristBindings = new RewardItem("horde","exalted","Dryad's Wrist Bindings","../../../../shared/wow-com/images/basics/factions/warsong/bracers03.gif");
eDryadsWristBindings.itemPrice = new Array();
eDryadsWristBindings.itemPrice[3] = 24305;
eDryadsWristBindings.itemStats = new Array();
eDryadsWristBindings.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Dryad's Wrist Bindings</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Cloth</span><br>\
31 Armor<br>\
+6 Stamina<br>\
+6 Intellect<br>\
+5 Spirit<br>\
Requires Level 40<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 16.</span><br>\
</div>\
</td></tr></table>";
eDryadsWristBindings.itemPrice[4] = 47184;
eDryadsWristBindings.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Dryad's Wrist Bindings</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Cloth</span><br>\
37 Armor<br>\
+7 Stamina<br>\
+6 Intellect<br>\
+7 Spirit<br>\
Requires Level 50<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 20.</span><br>\
</div>\
</td></tr></table>";
eDryadsWristBindings.itemPrice[5] = 78794;
eDryadsWristBindings.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Dryad's Wrist Bindings</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Cloth</span><br>\
44 Armor<br>\
+8 Stamina<br>\
+8 Intellect<br>\
+7 Spirit<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 22.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eDryadsWristBindings; i++;





var eForestStalkersBracers = new RewardItem("horde","exalted","Forest Stalker's Bracers","../../../../shared/wow-com/images/basics/factions/warsong/bracers01.gif");
eForestStalkersBracers.itemPrice = new Array();
eForestStalkersBracers.itemPrice[3] = 27818;
eForestStalkersBracers.itemStats = new Array();
eForestStalkersBracers.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Forest Stalker's Bracers</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Leather</span><br>\
64 Armor<br>\
+8 Strength<br>\
+14 Agility<br>\
+6 Stamina<br>\
Requires Level 40<br>\
</div>\
</td></tr></table>";
eForestStalkersBracers.itemPrice[4] = 54196;
eForestStalkersBracers.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Forest Stalker's Bracers</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Leather</span><br>\
75 Armor<br>\
+9 Strength<br>\
+17 Agility<br>\
+7 Stamina<br>\
Requires Level 50<br>\
</div>\
</td></tr></table>";
eForestStalkersBracers.itemPrice[5] = 90827;
eForestStalkersBracers.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Forest Stalker's Bracers</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Leather</span><br>\
86 Armor<br>\
+11 Strength<br>\
+19 Agility<br>\
+8 Stamina<br>\
Requires Level 60<br>\
</div>\
</td></tr></table>";
RewardItems[i] = eForestStalkersBracers; i++;






var eWindtalkersWristguards = new RewardItem("horde","exalted","Windtalker's Wristguards","../../../../shared/wow-com/images/basics/factions/warsong/bracers04.gif");
eWindtalkersWristguards.itemPrice = new Array();
eWindtalkersWristguards.itemPrice[3] = 33381;
eWindtalkersWristguards.itemStats = new Array();
eWindtalkersWristguards.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Windtalker's Wristguards</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Mail</span><br>\
130 Armor<br>\
+6 Stamina<br>\
+6 Intellect<br>\
+5 Spirit<br>\
Requires Level 40<br>\
<span class='myGreen'>Equip: +28 Attack Power.</span><br>\
</div>\
</td></tr></table>";
eWindtalkersWristguards.itemPrice[4] = 65036;
eWindtalkersWristguards.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Windtalker's Wristguards</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Mail</span><br>\
156 Armor<br>\
+7 Stamina<br>\
+6 Intellect<br>\
+6 Spirit<br>\
Requires Level 50<br>\
<span class='myGreen'>Equip: +34 Attack Power.</span><br>\
</div>\
</td></tr></table>";
eWindtalkersWristguards.itemPrice[5] = 108993;
eWindtalkersWristguards.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Windtalker's Wristguards</span><br>\
Binds when picked up<br>\
Wrist<span class='myRight'>Mail</span><br>\
182 Armor<br>\
+8 Stamina<br>\
+8 Intellect<br>\
+7 Spirit<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: +38 Attack Power.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eWindtalkersWristguards; i++;

var eOutriderSilkLeggings = new RewardItem("horde","exalted","Outrider's Silk Leggings","../../../../shared/wow-com/images/basics/factions/warsong/silk_leggings.gif");
eOutriderSilkLeggings.itemPrice = new Array();
eOutriderSilkLeggings.itemPrice[5] = 150870;
eOutriderSilkLeggings.itemStats = new Array();
eOutriderSilkLeggings.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Outrider's Silk Leggings</span><br>\
Binds when picked up<br>\
Unique<br>\
Legs<span class='myRight'>Cloth</span><br>\
188 Armor<br>\
+23 Stamina<br>\
+19 Intellect<br>\
+10 Spirit<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 28.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eOutriderSilkLeggings; i++;

var eOutriderLizardhidePants = new RewardItem("horde","exalted","Outrider's Lizardhide Pants","../../../../shared/wow-com/images/basics/factions/warsong/lizardhide_pants.gif");
eOutriderLizardhidePants.itemPrice = new Array();
eOutriderLizardhidePants.itemPrice[5] = 198415;
eOutriderLizardhidePants.itemStats = new Array();
eOutriderLizardhidePants.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Outrider's Lizardhide Pants</span><br>\
Binds when picked up<br>\
Legs<span class='myRight'>Leather</span><br>\
263 Armor<br>\
+22 Strength<br>\
+10 Agility<br>\
+22 Stamina<br>\
+22 Intellect<br>\
+9 Spirit<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 11.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eOutriderLizardhidePants; i++;

var eOutriderLeatherPants = new RewardItem("horde","exalted","Outrider's Leather Pants","../../../../shared/wow-com/images/basics/factions/warsong/leather_pants.gif");
eOutriderLeatherPants.itemPrice = new Array();
eOutriderLeatherPants.itemPrice[5] = 197710;
eOutriderLeatherPants.itemStats = new Array();
eOutriderLeatherPants.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Outrider's Leather Pants</span><br>\
Binds when picked up<br>\
Legs<span class='myRight'>Leather</span><br>\
233 Armor<br>\
+28 Agility<br>\
+27 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 1%.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eOutriderLeatherPants; i++;

var eOutriderChainLeggings = new RewardItem("horde","exalted","Outrider's Chain Leggings","../../../../shared/wow-com/images/basics/factions/warsong/chain_leggings.gif");
eOutriderChainLeggings.itemPrice = new Array();
eOutriderChainLeggings.itemPrice[5] = 225414;
eOutriderChainLeggings.itemStats = new Array();
eOutriderChainLeggings.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Outrider's Chain Leggings</span><br>\
Binds when picked up<br>\
Legs<span class='myRight'>Mail</span><br>\
364 Armor<br>\
+35 Agility<br>\
+15 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 1%.<br>Equip: Improves your chance to hit by 1%.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eOutriderChainLeggings; i++;

var eOutriderLamellarLegguards = new RewardItem("horde","exalted","Outrider's Mail Leggings","../../../../shared/wow-com/images/basics/factions/warsong/chain_leggings.gif");
eOutriderLamellarLegguards.itemPrice = new Array();
eOutriderLamellarLegguards.itemPrice[5] = 227928;
eOutriderLamellarLegguards.itemStats = new Array();
eOutriderLamellarLegguards.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Outrider's Mail Leggings</span><br>\
Binds when picked up<br>\
Legs<span class='myRight'>Mail</span><br>\
364 Armor<br>\
+14 Strength<br>\
+22 Stamina<br>\
+22 Intellect<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 1%.<br>Equip: Improves your chance to get a critical strike with spells by 1%.<br>Equip: Restores 6 mana per 5 sec.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eOutriderLamellarLegguards; i++;

var eOutriderPlateLegguards = new RewardItem("horde","exalted","Outrider's Plate Legguards","../../../../shared/wow-com/images/basics/factions/warsong/plate_legguards.gif");
eOutriderPlateLegguards.itemPrice = new Array();
eOutriderPlateLegguards.itemPrice[5] = 149163;
eOutriderPlateLegguards.itemStats = new Array();
eOutriderPlateLegguards.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<div class='myTable'>\
<span class='myPurple'>Outrider's Plate Legguards</span><br>\
Binds when picked up<br>\
Legs<span class='myRight'>Plate</span><br>\
646 Armor<br>\
+28 Strength<br>\
+27 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 1%.<br>Equip: Improves your chance to hit by 1%.</span><br>\
</div>\
</td></tr></table>";
RewardItems[i] = eOutriderPlateLegguards; i++;

//------END REWARDS DEFINITION------
