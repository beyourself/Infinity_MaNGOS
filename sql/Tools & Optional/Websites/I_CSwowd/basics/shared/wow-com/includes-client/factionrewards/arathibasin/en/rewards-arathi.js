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

/*
var fXXX = new RewardItem("alliance","friendly","XXX","/shared/wow-com/images/basics/factions/arathi/XXX.gif");
fXXX.itemPrice = new Array();
fXXX.itemStats = new Array();
fXXX.itemPrice[0] = XXX;
fXXX.itemStats[0] = "Zug zug!";
RewardItems[i] = fXXX; i++;
*/

var fHealingDraught1 = new RewardItem("alliance","friendly","Superior Healing Draught","../../../../shared/wow-com/images/basics/factions/arathi/health02.gif");
fHealingDraught1.itemPrice = new Array();
fHealingDraught1.itemStats = new Array();
fHealingDraught1.itemPrice[2] = 500;
fHealingDraught1.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Superior Healing Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 health. Usable only inside Arathi Basin.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fHealingDraught1; i++;

var fManaDraught1 = new RewardItem("alliance","friendly","Superior Mana Draught","../../../../shared/wow-com/images/basics/factions/arathi/mana02.gif");
fManaDraught1.itemPrice = new Array();
fManaDraught1.itemStats = new Array();
fManaDraught1.itemPrice[2] = 500;
fManaDraught1.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Superior Mana Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 mana. Usable only inside Arathi Basin.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fManaDraught1; i++;

var fAllianceRations = new RewardItem("alliance","friendly","Highlander's Rations","../../../../shared/wow-com/images/basics/factions/arathi/food.gif");
fAllianceRations.itemPrice = new Array();
fAllianceRations.itemStats = new Array();
fAllianceRations.itemPrice[1] = 900;
fAllianceRations.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Highlander's Field Ration</b><br>\
Binds when picked up<br>\
Requires Level 25<br>\
Requires League of Arathor - Friendly<br>\
<span class='myGreen'>Use: Restores 1074 health and 2202 mana over 30 seconds. Must remain seated while eating. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
fAllianceRations.itemPrice[2] = 1350;
fAllianceRations.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Highlander's Enriched Ration</b><br>\
Binds when picked up<br>\
Requires Level 35<br>\
Requires League of Arathor - Friendly<br>\
<span class='myGreen'>Use: Restores 1608 health and 3306 mana over 30 seconds. Must remain seated while eating. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
fAllianceRations.itemPrice[3] = 1800;
fAllianceRations.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Highlander's Iron Ration</b><br>\
Binds when picked up<br>\
Requires Level 45<br>\
Requires League of Arathor - Friendly<br>\
<span class='myGreen'>Use: Restores 2148 health and 4410 mana over 30 seconds. Must remain seated while eating. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fAllianceRations; i++;

var fAllianceBandages = new RewardItem("alliance","friendly","Highlander's Bandages","../../../../shared/wow-com/images/basics/factions/arathi/bandages.gif");
fAllianceBandages.itemPrice = new Array();
fAllianceBandages.itemStats = new Array();
fAllianceBandages.itemPrice[1] = 900;
fAllianceBandages.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Highlander's Silk Bandage</b><br>\
Binds when picked up<br>\
Requires Level 25<br>\
Requires First Aid (125)<br>\
Requires League of Arathor - Friendly<br>\
<span class='myGreen'>Use: Heals 640 points of damage over 8 seconds. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
fAllianceBandages.itemPrice[2] = 1350;
fAllianceBandages.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Highlander's Mageweave Bandage</b><br>\
Binds when picked up<br>\
Requires Level 35<br>\
Requires First Aid (175)<br>\
Requires League of Arathor - Friendly<br>\
<span class='myGreen'>Use: Heals 1104 points of damage over 8 seconds. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
fAllianceBandages.itemPrice[3] = 1800;
fAllianceBandages.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Highlander's Runecloth Bandage</b><br>\
Binds when picked up<br>\
Requires Level 45<br>\
Requires First Aid (125)<br>\
Requires League of Arathor - Friendly<br>\
<span class='myGreen'>Use: Heals 2000 points of damage over 8 seconds. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fAllianceBandages; i++;

var fTalismanOfArathor = new RewardItem("alliance","friendly","Talisman of Arathor","../../../../shared/wow-com/images/basics/factions/arathi/talis01.gif");
fTalismanOfArathor.itemPrice = new Array();
fTalismanOfArathor.itemStats = new Array();
fTalismanOfArathor.itemPrice[1] = 6507;
fTalismanOfArathor.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Talisman of Arathor</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
Requires Level 28<br>\
Requires League of Arathor - Friendly<br>\
<span class='myGreen'>Use: Absorbs 248 to 302 points of physical damage. Lasts 15 seconds.</span>\
</span>\
</td></tr></table>";
fTalismanOfArathor.itemPrice[2] = 13707;
fTalismanOfArathor.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Talisman of Arathor</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
Requires Level 38<br>\
Requires League of Arathor - Friendly<br>\
<span class='myGreen'>Use: Absorbs 310 to 378 points of physical damage. Lasts 15 seconds.</span>\
</span>\
</td></tr></table>";
fTalismanOfArathor.itemPrice[3] = 25407;
fTalismanOfArathor.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Talisman of Arathor</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
Requires Level 48<br>\
Requires League of Arathor - Friendly<br>\
<span class='myGreen'>Use: Absorbs 392 to 478 points of physical damage. Lasts 15 seconds.</span>\
</span>\
</td></tr></table>";
fTalismanOfArathor.itemPrice[4] = 37107;
fTalismanOfArathor.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Talisman of Arathor</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
Requires Level 58<br>\
Requires League of Arathor - Friendly<br>\
<span class='myGreen'>Use: Absorbs 495 to 605 points of physical damage. Lasts 15 seconds.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fTalismanOfArathor; i++;

var fHilandersChainGirdle = new RewardItem("alliance","honored","Highlander's Chain Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt03.gif");
fHilandersChainGirdle.itemPrice = new Array();
fHilandersChainGirdle.itemStats = new Array();
fHilandersChainGirdle.itemPrice[1] = 8435;
fHilandersChainGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Chain Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
61 Armor<br>\
+5 Stamina<br>\
Classes: Hunter<br>\
Requires Level 28<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: +24 Attack Power</span><br>\
</td></tr></table>";
fHilandersChainGirdle.itemPrice[2] = 23436;
fHilandersChainGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Chain Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
149 Armor<br>\
+6 Stamina<br>\
Classes: Hunter<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.<br>\
Equip: +8 Attack Power</span><br>\
</td></tr></table>";
fHilandersChainGirdle.itemPrice[3] = 47230;
fHilandersChainGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Chain Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
178 Armor<br>\
+8 Stamina<br>\
Classes: Hunter<br>\
Requires Level 48<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.<br>\
Equip: +20 Attack Power</span><br>\
</td></tr></table>";
fHilandersChainGirdle.itemPrice[4] = 79259;
fHilandersChainGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Chain Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
208 Armor<br>\
+10 Stamina<br>\
Classes: Hunter<br>\
Requires Level 58<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.<br>\
Equip: +34 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Highlander's Determination</b><br>\
<b class='myGray'>Highlander's Chain Girdle</b><br>\
<b class='myGray'>Highlander's Chain Greaves</b><br>\
<b class='myGray'>Highlander's Chain Pauldrons</b>\
</td></tr></table>";
RewardItems[i] = fHilandersChainGirdle; i++;

var fHilandersClothGirdle = new RewardItem("alliance","honored","Highlander's Cloth Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt01.gif");
fHilandersClothGirdle.itemPrice = new Array();
fHilandersClothGirdle.itemStats = new Array();
fHilandersClothGirdle.itemPrice[1] = 6486;
fHilandersClothGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Cloth Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Cloth</span><br>\
88 Armor<br>\
+4 Stamina<br>\
+3 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 28<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases damage and healing done by spells and magical effects by up to 11.</span>\
</td></tr></table>";
fHilandersClothGirdle.itemPrice[2] = 15015;
fHilandersClothGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Cloth Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Cloth</span><br>\
105 Armor<br>\
+4 Stamina<br>\
+4 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 38<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases damage and healing done by spells and magical effects by up to 14.</span>\
</td></tr></table>";
fHilandersClothGirdle.itemPrice[3] = 30257;
fHilandersClothGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Cloth Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Cloth</span><br>\
113 Armor<br>\
+6 Stamina<br>\
+5 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 48<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 9.</span>\
</td></tr></table>";
fHilandersClothGirdle.itemPrice[4] = 53601;
fHilandersClothGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Cloth Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Cloth</span><br>\
150 Armor<br>\
+7 Stamina<br>\
+6 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 58<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 14.</span><br>\
<br>\
<b class='myYellow'>The Highlander's Intent</b><br>\
<b class='myGray'>Highlander's Cloth Girdle</b><br>\
<b class='myGray'>Highlander's Cloth Boots</b><br>\
<b class='myGray'>Highlander's Epaulets</b>\
</td></tr></table>";
RewardItems[i] = fHilandersClothGirdle; i++;

var fHilandersLizardhideGirdle = new RewardItem("alliance","honored","Highlander's Lizardhide Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt01.gif");
fHilandersLizardhideGirdle.itemPrice = new Array();
fHilandersLizardhideGirdle.itemStats = new Array();
fHilandersLizardhideGirdle.itemPrice[1] = 8286;
fHilandersLizardhideGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lizardhide Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
91 Armor<br>\
+4 Stamina<br>\
+12 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 28<br>\
Requires League of Arathor - Honored<br>\
</td></tr></table>";
fHilandersLizardhideGirdle.itemPrice[2] = 19182;
fHilandersLizardhideGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lizardhide Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
113 Armor<br>\
+4 Stamina<br>\
+15 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 38<br>\
Requires League of Arathor - Honored<br>\
</td></tr></table>";
fHilandersLizardhideGirdle.itemPrice[3] = 38656;
fHilandersLizardhideGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lizardhide Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
136 Armor<br>\
+6 Stamina<br>\
+10 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 48<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 1%.</span>\
</td></tr></table>";
fHilandersLizardhideGirdle.itemPrice[4] = 66762;
fHilandersLizardhideGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lizardhide Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
159 Armor<br>\
+7 Stamina<br>\
+17 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 58<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 1%.</span><br>\
<br>\
<b class='myYellow'>The Highlander's Will</b><br>\
<b class='myGray'>Highlander's Lizardhide Girdle</b><br>\
<b class='myGray'>Highlander's Lizardhide Boots</b><br>\
<b class='myGray'>Highlander's Lizardhide Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLizardhideGirdle; i++;

var fHilandersLeatherGirdle = new RewardItem("alliance","honored","Highlander's Leather Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt01.gif");
fHilandersLeatherGirdle.itemPrice = new Array();
fHilandersLeatherGirdle.itemStats = new Array();
fHilandersLeatherGirdle.itemPrice[1] = 8046;
fHilandersLeatherGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
91 Armor<br>\
+4 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 28<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: +24 Attack Power</span>\
</td></tr></table>";
fHilandersLeatherGirdle.itemPrice[2] = 18629;
fHilandersLeatherGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
113 Armor<br>\
+4 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 38<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: +30 Attack Power</span>\
</td></tr></table>";
fHilandersLeatherGirdle.itemPrice[3] = 37537;
fHilandersLeatherGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
136 Armor<br>\
+6 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 48<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.<br>\
Equip: +20 Attack Power</span>\
</td></tr></table>";
fHilandersLeatherGirdle.itemPrice[4] = 66528;
fHilandersLeatherGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
159 Armor<br>\
+7 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 58<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.<br>\
Equip: +34 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Highlander's Purpose</b><br>\
<b class='myGray'>Highlander's Leather Girdle</b><br>\
<b class='myGray'>Highlander's Leather Boots</b><br>\
<b class='myGray'>Highlander's Leather Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLeatherGirdle; i++;

var fHilandersLamellarGirdle = new RewardItem("alliance","honored","Highlander's Lamellar Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt02.gif");
fHilandersLamellarGirdle.itemPrice = new Array();
fHilandersLamellarGirdle.itemStats = new Array();
fHilandersLamellarGirdle.itemPrice[1] = 9337;
fHilandersLamellarGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lamellar Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
236 Armor<br>\
+11 Strength<br>\
+4 Stamina<br>\
+5 Intellect<br>\
Classes: Paladin<br>\
Requires Level 28<br>\
Requires League of Arathor - Honored\
</td></tr></table>";
fHilandersLamellarGirdle.itemPrice[2] = 14407;
fHilandersLamellarGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lamellar Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Plate</span><br>\
236 Armor<br>\
+12 Strength<br>\
+6 Stamina<br>\
+6 Intellect<br>\
Classes: Paladin<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires League of Arathor - Honored\
</td></tr></table>";
fHilandersLamellarGirdle.itemPrice[3] = 31258;
fHilandersLamellarGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lamellar Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Plate</span><br>\
313 Armor<br>\
+11 Strength<br>\
+4 Stamina<br>\
+8 Intellect<br>\
Classes: Paladin<br>\
Requires Level 48<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.</span>\
</td></tr></table>";
fHilandersLamellarGirdle.itemPrice[4] = 51274;
fHilandersLamellarGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lamellar Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Plate</span><br>\
369 Armor<br>\
+15 Strength<br>\
+6 Stamina<br>\
+10 Intellect<br>\
Classes: Paladin<br>\
Requires Level 58<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.</span><br>\
<br>\
<b class='myYellow'>The Highlander's Resolve</b><br>\
<b class='myGray'>Highlander's Lamellar Girdle</b><br>\
<b class='myGray'>Highlander's Lamellar Greaves</b><br>\
<b class='myGray'>Highlander's Lamellar Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLamellarGirdle; i++;

var fHilandersPlateGirdle = new RewardItem("alliance","honored","Highlander's Plate Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt02.gif");
fHilandersPlateGirdle.itemPrice = new Array();
fHilandersPlateGirdle.itemStats = new Array();
fHilandersPlateGirdle.itemPrice[1] = 9264;
fHilandersPlateGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Plate Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
128 Armor<br>\
+12 Strength<br>\
+5 Stamina<br>\
Classes: Warrior, Paladin<br>\
Requires Level 28<br>\
Requires League of Arathor - Honored<br>\
</td></tr></table>";
fHilandersPlateGirdle.itemPrice[2] = 14294;
fHilandersPlateGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Plate Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Plate</span><br>\
236 Armor<br>\
+15 Strength<br>\
+6 Stamina<br>\
Classes: Warrior, Paladin<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires League of Arathor - Honored<br>\
</td></tr></table>";
fHilandersPlateGirdle.itemPrice[3] = 31838;
fHilandersPlateGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Plate Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Plate</span><br>\
313 Armor<br>\
+10 Strength<br>\
+8 Stamina<br>\
Classes: Warrior, Paladin<br>\
Requires Level 48<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.</span>\
</td></tr></table>";
fHilandersPlateGirdle.itemPrice[4] = 51087;
fHilandersPlateGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Plate Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Plate</span><br>\
369 Armor<br>\
+17 Strength<br>\
+10 Stamina<br>\
Classes: Warrior, Paladin<br>\
Requires Level 58<br>\
Requires League of Arathor - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.</span><br>\
<br>\
<b class='myYellow'>The Highlander's Resolution</b><br>\
<b class='myGray'>Highlander's Plate Girdle</b><br>\
<b class='myGray'>Highlander's Plate Greaves</b><br>\
<b class='myGray'>Highlander's Plate Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersPlateGirdle; i++;

var fHilandersChainGreaves = new RewardItem("alliance","revered","Highlander's Chain Greaves","../../../../shared/wow-com/images/basics/factions/arathi/boots02.gif");
fHilandersChainGreaves.itemPrice = new Array();
fHilandersChainGreaves.itemStats = new Array();
fHilandersChainGreaves.itemPrice[1] = 11895;
fHilandersChainGreaves.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Chain Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
74 Armor<br>\
+8 Agility<br>\
+8 Stamina<br>\
Classes: Hunter<br>\
Requires Level 28<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersChainGreaves.itemPrice[2] = 33187;
fHilandersChainGreaves.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Chain Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
183 Armor<br>\
+10 Agility<br>\
+10 Stamina<br>\
+3 Intellect<br>\
Classes: Hunter<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersChainGreaves.itemPrice[3] = 66867;
fHilandersChainGreaves.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Chain Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
218 Armor<br>\
+12 Agility<br>\
+13 Stamina<br>\
+6 Intellect<br>\
Classes: Hunter<br>\
Requires Level 48<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersChainGreaves.itemPrice[4] = 122427;
fHilandersChainGreaves.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Chain Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
255 Armor<br>\
+15 Agility<br>\
+16 Stamina<br>\
+8 Intellect<br>\
Classes: Hunter<br>\
Requires Level 58<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span><br>\
<br>\
<b class='myYellow'>The Highlander's Determination</b><br>\
<b class='myGray'>Highlander's Chain Girdle</b><br>\
<b class='myGray'>Highlander's Chain Greaves</b><br>\
<b class='myGray'>Highlander's Chain Pauldrons</b>\
</td></tr></table>";
RewardItems[i] = fHilandersChainGreaves; i++;

var fHilandersClothBoots = new RewardItem("alliance","revered","Highlander's Cloth Boots","../../../../shared/wow-com/images/basics/factions/arathi/boots05.gif");
fHilandersClothBoots.itemPrice = new Array();
fHilandersClothBoots.itemStats = new Array();
fHilandersClothBoots.itemPrice[1] = 11895;
fHilandersClothBoots.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Cloth Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Cloth</span><br>\
84 Armor<br>\
+8 Stamina<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 28<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 7.</span>\
</td></tr></table>";
fHilandersClothBoots.itemPrice[2] = 33187;
fHilandersClothBoots.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Cloth Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Cloth</span><br>\
103 Armor<br>\
+10 Stamina<br>\
+3 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 38<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 8.</span>\
</td></tr></table>";
fHilandersClothBoots.itemPrice[3] = 66867;
fHilandersClothBoots.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Cloth Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Cloth</span><br>\
132 Armor<br>\
+13 Stamina<br>\
+6 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 48<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 9.</span>\
</td></tr></table>";
fHilandersClothBoots.itemPrice[4] = 122427;
fHilandersClothBoots.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Cloth Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Cloth</span><br>\
161 Armor<br>\
+16 Stamina<br>\
+8 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 58<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 12.</span><br>\
<br>\
<b class='myYellow'>The Highlander's Intent</b><br>\
<b class='myGray'>Highlander's Cloth Girdle</b><br>\
<b class='myGray'>Highlander's Cloth Boots</b><br>\
<b class='myGray'>Highlander's Epaulets</b>\
</td></tr></table>";
RewardItems[i] = fHilandersClothBoots; i++;

var fHilandersLamellarGreaves = new RewardItem("alliance","revered","Highlander's Lamellar Greaves","../../../../shared/wow-com/images/basics/factions/arathi/boots01.gif");
fHilandersLamellarGreaves.itemPrice = new Array();
fHilandersLamellarGreaves.itemStats = new Array();
fHilandersLamellarGreaves.itemPrice[1] = 14229;
fHilandersLamellarGreaves.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lamellar Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
157 Armor<br>\
+6 Strength<br>\
+6 Agility<br>\
+4 Stamina<br>\
+4 Intellect<br>\
Classes: Paladin<br>\
Requires Level 28<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersLamellarGreaves.itemPrice[2] = 21858;
fHilandersLamellarGreaves.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lamellar Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Plate</span><br>\
289 Armor<br>\
+8 Strength<br>\
+8 Agility<br>\
+6 Stamina<br>\
+5 Intellect<br>\
Classes: Paladin<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersLamellarGreaves.itemPrice[3] = 44044;
fHilandersLamellarGreaves.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lamellar Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Plate</span><br>\
383 Armor<br>\
+11 Strength<br>\
+10 Agility<br>\
+7 Stamina<br>\
+6 Intellect<br>\
Classes: Paladin<br>\
Requires Level 48<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersLamellarGreaves.itemPrice[4] = 80977;
fHilandersLamellarGreaves.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Lamellar Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Plate</span><br>\
452 Armor<br>\
+14 Strength<br>\
+12 Agility<br>\
+8 Stamina<br>\
+8 Intellect<br>\
Classes: Paladin<br>\
Requires Level 58<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span><br>\
<br>\
<b class='myYellow'>The Highlander's Resolve</b><br>\
<b class='myGray'>Highlander's Lamellar Girdle</b><br>\
<b class='myGray'>Highlander's Lamellar Greaves</b><br>\
<b class='myGray'>Highlander's Lamellar Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLamellarGreaves; i++;

var fHilandersLeatherBoots = new RewardItem("alliance","revered","Highlander's Leather Boots","../../../../shared/wow-com/images/basics/factions/arathi/boots03.gif");
fHilandersLeatherBoots.itemPrice = new Array();
fHilandersLeatherBoots.itemStats = new Array();
fHilandersLeatherBoots.itemPrice[1] = 11937;
fHilandersLeatherBoots.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
104 Armor<br>\
+7 Agility<br>\
+8 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 28<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersLeatherBoots.itemPrice[2] = 27634;
fHilandersLeatherBoots.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
129 Armor<br>\
+8 Agility<br>\
+10 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 38<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +6 Attack Power</span>\
</td></tr></table>";
fHilandersLeatherBoots.itemPrice[3] = 55681;
fHilandersLeatherBoots.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
145 Armor<br>\
+11 Agility<br>\
+13 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 48<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +12 Attack Power</span>\
</td></tr></table>";
fHilandersLeatherBoots.itemPrice[4] = 92564;
fHilandersLeatherBoots.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
181 Armor<br>\
+12 Agility<br>\
+16 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 58<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +16 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Highlander's Purpose</b><br>\
<b class='myGray'>Highlander's Leather Girdle</b><br>\
<b class='myGray'>Highlander's Leather Boots</b><br>\
<b class='myGray'>Highlander's Leather Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLeatherBoots; i++;

var fHilandersLizardHideBoots = new RewardItem("alliance","revered","Highlander's Lizardhide Boots","../../../../shared/wow-com/images/basics/factions/arathi/boots04.gif");
fHilandersLizardHideBoots.itemPrice = new Array();
fHilandersLizardHideBoots.itemStats = new Array();
fHilandersLizardHideBoots.itemPrice[1] = 12294;
fHilandersLizardHideBoots.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
104 Armor<br>\
+5 Agility<br>\
+8 Stamina<br>\
+4 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 28<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersLizardHideBoots.itemPrice[2] = 28465;
fHilandersLizardHideBoots.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
129 Armor<br>\
+6 Agility<br>\
+10 Stamina<br>\
+5 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 38<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +6 Attack Power</span>\
</td></tr></table>";
fHilandersLizardHideBoots.itemPrice[3] = 57358;
fHilandersLizardHideBoots.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
145 Armor<br>\
+8 Agility<br>\
+13 Stamina<br>\
+7 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 48<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +12 Attack Power</span>\
</td></tr></table>";
fHilandersLizardHideBoots.itemPrice[4] = 92914;
fHilandersLizardHideBoots.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
181 Armor<br>\
+8 Agility<br>\
+16 Stamina<br>\
+8 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 58<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +16 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Highlander's Will</b><br>\
<b class='myGray'>Highlander's Lizardhide Girdle</b><br>\
<b class='myGray'>Highlander's Lizardhide Boots</b><br>\
<b class='myGray'>Highlander's Lizardhide Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLizardHideBoots; i++;

var fHilandersPlateGreaves = new RewardItem("alliance","revered","Highlander's Plate Greaves","../../../../shared/wow-com/images/basics/factions/arathi/boots01.gif");
fHilandersPlateGreaves.itemPrice = new Array();
fHilandersPlateGreaves.itemStats = new Array();
fHilandersPlateGreaves.itemPrice[1] = 14119;
fHilandersPlateGreaves.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Plate Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Plate</span><br>\
157 Armor<br>\
+6 Strength<br>\
+6 Agility<br>\
+6 Stamina<br>\
Classes: Warrior, Paladin<br>\
Requires Level 28<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersPlateGreaves.itemPrice[2] = 21691;
fHilandersPlateGreaves.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Plate Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Plate</span><br>\
289 Armor<br>\
+8 Strength<br>\
+8 Agility<br>\
+8 Stamina<br>\
Classes: Warrior, Paladin<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersPlateGreaves.itemPrice[3] = 43702;
fHilandersPlateGreaves.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Plate Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Plate</span><br>\
383 Armor<br>\
+11 Strength<br>\
+10 Agility<br>\
+10 Stamina<br>\
Classes: Warrior, Paladin<br>\
Requires Level 48<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersPlateGreaves.itemPrice[4] = 80690;
fHilandersPlateGreaves.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Highlander's Plate Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Plate</span><br>\
452 Armor<br>\
+14 Strength<br>\
+12 Agility<br>\
+12 Stamina<br>\
Classes: Warrior, Paladin<br>\
Requires Level 58<br>\
Requires League of Arathor - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span><br>\
<br>\
<b class='myYellow'>The Highlander's Resolution</b><br>\
<b class='myGray'>Highlander's Plate Girdle</b><br>\
<b class='myGray'>Highlander's Plate Greaves</b><br>\
<b class='myGray'>Highlander's Plate Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersPlateGreaves; i++;

var fHilandersChainPauldron = new RewardItem("alliance","exalted","Highlander's Chain Pauldron","../../../../shared/wow-com/images/basics/factions/arathi/shoulders02.gif");
fHilandersChainPauldron.itemPrice = new Array();
fHilandersChainPauldron.itemStats = new Array();
fHilandersChainPauldron.itemPrice[5] = 165903;
fHilandersChainPauldron.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Highlander's Chain Pauldron</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Mail</span><br>\
312 Armor<br>\
+20 Agility<br>\
+18 Stamina<br>\
+17 Intellect<br>\
Classes: Hunter<br>\
Requires Level 60<br>\
Requires League of Arathor - Exalted<br>\
<br>\
<b class='myYellow'>The Highlander's Determination</b><br>\
<b class='myGray'>Highlander's Chain Girdle</b><br>\
<b class='myGray'>Highlander's Chain Greaves</b><br>\
<b class='myGray'>Highlander's Chain Pauldrons</b>\
</td></tr></table>";
RewardItems[i] = fHilandersChainPauldron; i++;

var fHilandersEpaulets = new RewardItem("alliance","exalted","Highlander's Epaulets","../../../../shared/wow-com/images/basics/factions/arathi/shoulders01.gif");
fHilandersEpaulets.itemPrice = new Array();
fHilandersEpaulets.itemStats = new Array();
fHilandersEpaulets.itemPrice[5] = 115654;
fHilandersEpaulets.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Highlander's Epaulets</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Cloth</span><br>\
185 Armor<br>\
+18 Stamina<br>\
+17 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 60<br>\
Requires League of Arathor - Exalted<br>\
<span class='myGreen'>Equip: Increases damage and healing done by spells and magical effects by up to 12.<br>\
Equip: Regenerates 4 mana every 5 seconds</span><br>\
<br>\
<b class='myYellow'>The Highlander's Intent</b><br>\
<b class='myGray'>Highlander's Cloth Girdle</b><br>\
<b class='myGray'>Highlander's Cloth Boots</b><br>\
<b class='myGray'>Highlander's Epaulets</b>\
</td></tr></table>";
RewardItems[i] = fHilandersEpaulets; i++;

var fHilandersLamellarSpaulders = new RewardItem("alliance","exalted","Highlander's Lamellar Spaulders","../../../../shared/wow-com/images/basics/factions/arathi/shoulders02.gif");
fHilandersLamellarSpaulders.itemPrice = new Array();
fHilandersLamellarSpaulders.itemStats = new Array();
fHilandersLamellarSpaulders.itemPrice[5] = 111369;
fHilandersLamellarSpaulders.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Highlander's Lamellar Spaulders</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Plate</span><br>\
553 Armor<br>\
+18 Strength<br>\
+17 Agility<br>\
+15 Stamina<br>\
+10 Intellect<br>\
Classes: Paladin<br>\
Requires Level 60<br>\
Requires League of Arathor - Exalted<br>\
<br>\
<b class='myYellow'>The Highlander's Resolve</b><br>\
<b class='myGray'>Highlander's Lamellar Girdle</b><br>\
<b class='myGray'>Highlander's Lamellar Greaves</b><br>\
<b class='myGray'>Highlander's Lamellar Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLamellarSpaulders; i++;

var fHilandersLeatherShoulders = new RewardItem("alliance","exalted","Highlander's Leather Shoulders","../../../../shared/wow-com/images/basics/factions/arathi/shoulders01.gif");
fHilandersLeatherShoulders.itemPrice = new Array();
fHilandersLeatherShoulders.itemStats = new Array();
fHilandersLeatherShoulders.itemPrice[5] = 143525;
fHilandersLeatherShoulders.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Highlander's Leather Spaulders</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Leather</span><br>\
258 Armor<br>\
+18 Agility<br>\
+17 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 60<br>\
Requires League of Arathor - Exalted<br>\
<span class='myGreen'>Equip: +30 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Highlander's Purpose</b><br>\
<b class='myGray'>Highlander's Leather Girdle</b><br>\
<b class='myGray'>Highlander's Leather Boots</b><br>\
<b class='myGray'>Highlander's Leather Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLeatherShoulders; i++;

var fHilandersPlateSpaulders = new RewardItem("alliance","exalted","Highlander's Plate Spaulders","../../../../shared/wow-com/images/basics/factions/arathi/shoulders02.gif");
fHilandersPlateSpaulders.itemPrice = new Array();
fHilandersPlateSpaulders.itemStats = new Array();
fHilandersPlateSpaulders.itemPrice[5] = 110946;
fHilandersPlateSpaulders.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Highlander's Plate Spaulders</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Plate</span><br>\
553 Armor<br>\
+18 Strength<br>\
+17 Agility<br>\
+20 Stamina<br>\
Classes: Warrior, Paladin<br>\
Requires Level 60<br>\
Requires League of Arathor - Exalted<br>\
<br>\
<b class='myYellow'>The Highlander's Resolution</b><br>\
<b class='myGray'>Highlander's Plate Girdle</b><br>\
<b class='myGray'>Highlander's Plate Greaves</b><br>\
<b class='myGray'>Highlander's Plate Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersPlateSpaulders; i++;

var fHilandersLizardhideShoulders = new RewardItem("alliance","exalted","Highlander's Lizardhide Shoulders","../../../../shared/wow-com/images/basics/factions/arathi/shoulders01.gif");
fHilandersLizardhideShoulders.itemPrice = new Array();
fHilandersLizardhideShoulders.itemStats = new Array();
fHilandersLizardhideShoulders.itemPrice[5] = 144054;
fHilandersLizardhideShoulders.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Highlander's Leather Spaulders</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Leather</span><br>\
258 Armor<br>\
+12 Agility<br>\
+17 Stamina<br>\
+12 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 60<br>\
Requires League of Arathor - Exalted<br>\
<span class='myGreen'>Equip: +30 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Highlander's Will</b><br>\
<b class='myGray'>Highlander's Lizardhide Girdle</b><br>\
<b class='myGray'>Highlander's Lizardhide Boots</b><br>\
<b class='myGray'>Highlander's Lizardhide Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLizardhideShoulders; i++;

var fCloakOfTheHonorGuard = new RewardItem("alliance","exalted","Cloak of the Honor Guard","../../../../shared/wow-com/images/basics/factions/arathi/cape01.gif");
fCloakOfTheHonorGuard.itemPrice = new Array();
fCloakOfTheHonorGuard.itemStats = new Array();
fCloakOfTheHonorGuard.itemPrice[5] = 109255;
fCloakOfTheHonorGuard.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Cloak of the Honor Guard</span><br>\
Binds when picked up<br>\
Back<br>\
50 Armor<br>\
+5 Agility<br>\
+11 Stamina<br>\
Requires Level 60<br>\
Requires League of Arathor - Exalted<br>\
<span class='myGreen'>Equip: +34 Attack Power</span>\
</td></tr></table>";
RewardItems[i] = fCloakOfTheHonorGuard; i++;

var eSageClaw = new RewardItem("alliance","exalted","Sageclaw","../../../../shared/wow-com/images/basics/factions/arathi/dagger01.gif");
eSageClaw.itemPrice = new Array();
eSageClaw.itemStats = new Array();
eSageClaw.itemPrice[5] = 110946;
eSageClaw.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Sageclaw</span><br>\
Binds when picked up<br>\
One Hand<span class='myRight'>Dagger</span><br>\
46-96 Damage<span class='myRight'>Speed 1.70</span><br>\
(41.7 damager per second)<br>\
40 Armor<br>\
+8 Stamina<br>\
Requires Level 60<br>\
Requires League of Arathor - Exalted<br>\
<span class='myGreen'>Equip: Increases damage and healing done by spells and magical effects by up to 30.<br>\
Equip: Increases your chance for a critical strike with spells by 1%.</span>\
</td></tr></table>";
RewardItems[i] = eSageClaw; i++;

var eIronbarkStaff = new RewardItem("alliance","exalted","Ironbark Staff","../../../../shared/wow-com/images/basics/factions/arathi/staff01.gif");
eIronbarkStaff.itemPrice = new Array();
eIronbarkStaff.itemStats = new Array();
eIronbarkStaff.itemPrice[5] = 110946;
eIronbarkStaff.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Ironbark Staff</span><br>\
Binds when picked up<br>\
Two Hand<span class='myRight'>Staff</span><br>\
136-243 Damage<span class='myRight'>Speed 3.40</span><br>\
(55.8 damager per second)<br>\
100 Armor<br>\
+19 Stamina<br>\
+10 Intellect<br>\
Requires Level 60<br>\
Requires League of Arathor - Exalted<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 2%.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 41.</span>\
</td></tr></table>";
RewardItems[i] = eIronbarkStaff; i++;

//---Horde 1362

var fHealingDraught1 = new RewardItem("horde","friendly","Superior Healing Draught","../../../../shared/wow-com/images/basics/factions/arathi/health02.gif");
fHealingDraught1.itemPrice = new Array();
fHealingDraught1.itemStats = new Array();
fHealingDraught1.itemPrice[2] = 500;
fHealingDraught1.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Superior Healing Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 health. Usable only inside Arathi Basin.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fHealingDraught1; i++;

var fManaDraught1 = new RewardItem("horde","friendly","Superior Mana Draught","../../../../shared/wow-com/images/basics/factions/arathi/mana02.gif");
fManaDraught1.itemPrice = new Array();
fManaDraught1.itemStats = new Array();
fManaDraught1.itemPrice[2] = 500;
fManaDraught1.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Superior Mana Draught</b><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 mana. Usable only inside Arathi Basin.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fManaDraught1; i++;

var fAllianceRations = new RewardItem("horde","friendly","Defiler's Rations","../../../../shared/wow-com/images/basics/factions/arathi/food.gif");
fAllianceRations.itemPrice = new Array();
fAllianceRations.itemStats = new Array();
fAllianceRations.itemPrice[1] = 900;
fAllianceRations.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Defiler's Field Ration</b><br>\
Binds when picked up<br>\
Requires Level 25<br>\
Requires The Defilers - Friendly<br>\
<span class='myGreen'>Use: Restores 1074 health and 2202 mana over 30 seconds. Must remain seated while eating. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
fAllianceRations.itemPrice[2] = 1350;
fAllianceRations.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Defiler's Enriched Ration</b><br>\
Binds when picked up<br>\
Requires Level 35<br>\
Requires The Defilers - Friendly<br>\
<span class='myGreen'>Use: Restores 1608 health and 3306 mana over 30 seconds. Must remain seated while eating. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
fAllianceRations.itemPrice[3] = 1800;
fAllianceRations.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Defiler's Iron Ration</b><br>\
Binds when picked up<br>\
Requires Level 45<br>\
Requires The Defilers - Friendly<br>\
<span class='myGreen'>Use: Restores 2148 health and 4410 mana over 30 seconds. Must remain seated while eating. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fAllianceRations; i++;

var fAllianceBandages = new RewardItem("horde","friendly","Defiler's Bandages","../../../../shared/wow-com/images/basics/factions/arathi/bandages.gif");
fAllianceBandages.itemPrice = new Array();
fAllianceBandages.itemStats = new Array();
fAllianceBandages.itemPrice[1] = 900;
fAllianceBandages.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Defiler's Silk Bandage</b><br>\
Binds when picked up<br>\
Requires Level 25<br>\
Requires First Aid (125)<br>\
Requires The Defilers - Friendly<br>\
<span class='myGreen'>Use: Heals 640 points of damage over 8 seconds. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
fAllianceBandages.itemPrice[2] = 1350;
fAllianceBandages.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Defiler's Mageweave Bandage</b><br>\
Binds when picked up<br>\
Requires Level 35<br>\
Requires First Aid (175)<br>\
Requires The Defilers - Friendly<br>\
<span class='myGreen'>Use: Heals 1104 points of damage over 8 seconds. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
fAllianceBandages.itemPrice[3] = 1800;
fAllianceBandages.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<b>Defiler's Runecloth Bandage</b><br>\
Binds when picked up<br>\
Requires Level 45<br>\
Requires First Aid (125)<br>\
Requires The Defilers - Friendly<br>\
<span class='myGreen'>Use: Heals 2000 points of damage over 8 seconds. Usable only in Arathi Basin.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fAllianceBandages; i++;

var fTalismanOfArathor = new RewardItem("horde","friendly","Defiler's Talisman","../../../../shared/wow-com/images/basics/factions/arathi/talis01.gif");
fTalismanOfArathor.itemPrice = new Array();
fTalismanOfArathor.itemStats = new Array();
fTalismanOfArathor.itemPrice[1] = 6507;
fTalismanOfArathor.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Talisman</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
Requires Level 28<br>\
Requires The Defilers - Friendly<br>\
<span class='myGreen'>Use: Absorbs 248 to 302 points of physical damage. Lasts 15 seconds.</span>\
</span>\
</td></tr></table>";
fTalismanOfArathor.itemPrice[2] = 13707;
fTalismanOfArathor.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Talisman</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
Requires Level 38<br>\
Requires The Defilers - Friendly<br>\
<span class='myGreen'>Use: Absorbs 310 to 378 points of physical damage. Lasts 15 seconds.</span>\
</span>\
</td></tr></table>";
fTalismanOfArathor.itemPrice[3] = 25407;
fTalismanOfArathor.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Talisman</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
Requires Level 48<br>\
Requires The Defilers - Friendly<br>\
<span class='myGreen'>Use: Absorbs 392 to 478 points of physical damage. Lasts 15 seconds.</span>\
</span>\
</td></tr></table>";
fTalismanOfArathor.itemPrice[4] = 37107;
fTalismanOfArathor.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Talisman</span><br>\
Binds when picked up<br>\
Unique<br>\
Trinket<br>\
Requires Level 58<br>\
Requires The Defilers - Friendly<br>\
<span class='myGreen'>Use: Absorbs 495 to 605 points of physical damage. Lasts 15 seconds.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fTalismanOfArathor; i++;

var fHilandersChainGirdle = new RewardItem("horde","honored","Defiler's Chain Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt03.gif");
fHilandersChainGirdle.itemPrice = new Array();
fHilandersChainGirdle.itemStats = new Array();
fHilandersChainGirdle.itemPrice[1] = 8435;
fHilandersChainGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Chain Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
61 Armor<br>\
+5 Stamina<br>\
Classes: Hunter, Shaman<br>\
Requires Level 28<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: +24 Attack Power</span><br>\
</td></tr></table>";
fHilandersChainGirdle.itemPrice[2] = 23436;
fHilandersChainGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Chain Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
149 Armor<br>\
+6 Stamina<br>\
Classes: Hunter, Shaman<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.<br>\
Equip: +8 Attack Power</span><br>\
</td></tr></table>";
fHilandersChainGirdle.itemPrice[3] = 47230;
fHilandersChainGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Chain Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
178 Armor<br>\
+8 Stamina<br>\
Classes: Hunter, Shaman<br>\
Requires Level 48<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.<br>\
Equip: +20 Attack Power</span><br>\
</td></tr></table>";
fHilandersChainGirdle.itemPrice[4] = 79259;
fHilandersChainGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Chain Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
208 Armor<br>\
+10 Stamina<br>\
Classes: Hunter, Shaman<br>\
Requires Level 58<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.<br>\
Equip: +34 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Defiler's Determination</b><br>\
<b class='myGray'>Defiler's Chain Girdle</b><br>\
<b class='myGray'>Defiler's Chain Greaves</b><br>\
<b class='myGray'>Defiler's Chain Pauldrons</b>\
</td></tr></table>";
RewardItems[i] = fHilandersChainGirdle; i++;

var fHilandersClothGirdle = new RewardItem("horde","honored","Defiler's Cloth Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt01.gif");
fHilandersClothGirdle.itemPrice = new Array();
fHilandersClothGirdle.itemStats = new Array();
fHilandersClothGirdle.itemPrice[1] = 6486;
fHilandersClothGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Cloth Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Cloth</span><br>\
88 Armor<br>\
+4 Stamina<br>\
+3 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 28<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases damage and healing done by spells and magical effects by up to 11.</span>\
</td></tr></table>";
fHilandersClothGirdle.itemPrice[2] = 15015;
fHilandersClothGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Cloth Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Cloth</span><br>\
105 Armor<br>\
+4 Stamina<br>\
+4 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 38<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases damage and healing done by spells and magical effects by up to 14.</span>\
</td></tr></table>";
fHilandersClothGirdle.itemPrice[3] = 30257;
fHilandersClothGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Cloth Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Cloth</span><br>\
113 Armor<br>\
+6 Stamina<br>\
+5 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 48<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 9.</span>\
</td></tr></table>";
fHilandersClothGirdle.itemPrice[4] = 53601;
fHilandersClothGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Cloth Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Cloth</span><br>\
150 Armor<br>\
+7 Stamina<br>\
+6 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 58<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 1%.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 14.</span><br>\
<br>\
<b class='myYellow'>The Defiler's Intent</b><br>\
<b class='myGray'>Defiler's Cloth Girdle</b><br>\
<b class='myGray'>Defiler's Cloth Boots</b><br>\
<b class='myGray'>Defiler's Epaulets</b>\
</td></tr></table>";
RewardItems[i] = fHilandersClothGirdle; i++;

var fHilandersLizardhideGirdle = new RewardItem("horde","honored","Defiler's Lizardhide Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt01.gif");
fHilandersLizardhideGirdle.itemPrice = new Array();
fHilandersLizardhideGirdle.itemStats = new Array();
fHilandersLizardhideGirdle.itemPrice[1] = 8286;
fHilandersLizardhideGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Lizardhide Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
91 Armor<br>\
+4 Stamina<br>\
+12 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 28<br>\
Requires The Defilers - Honored<br>\
</td></tr></table>";
fHilandersLizardhideGirdle.itemPrice[2] = 19182;
fHilandersLizardhideGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Lizardhide Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
113 Armor<br>\
+4 Stamina<br>\
+15 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 38<br>\
Requires The Defilers - Honored<br>\
</td></tr></table>";
fHilandersLizardhideGirdle.itemPrice[3] = 38656;
fHilandersLizardhideGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Lizardhide Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
136 Armor<br>\
+6 Stamina<br>\
+10 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 48<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 1%.</span>\
</td></tr></table>";
fHilandersLizardhideGirdle.itemPrice[4] = 66762;
fHilandersLizardhideGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Lizardhide Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
159 Armor<br>\
+7 Stamina<br>\
+17 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 58<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 1%.</span><br>\
<br>\
<b class='myYellow'>The Defiler's Will</b><br>\
<b class='myGray'>Defiler's Lizardhide Girdle</b><br>\
<b class='myGray'>Defiler's Lizardhide Boots</b><br>\
<b class='myGray'>Defiler's Lizardhide Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLizardhideGirdle; i++;

var fHilandersLeatherGirdle = new RewardItem("horde","honored","Defiler's Leather Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt01.gif");
fHilandersLeatherGirdle.itemPrice = new Array();
fHilandersLeatherGirdle.itemStats = new Array();
fHilandersLeatherGirdle.itemPrice[1] = 8046;
fHilandersLeatherGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
91 Armor<br>\
+4 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 28<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: +24 Attack Power</span>\
</td></tr></table>";
fHilandersLeatherGirdle.itemPrice[2] = 18629;
fHilandersLeatherGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
113 Armor<br>\
+4 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 38<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: +30 Attack Power</span>\
</td></tr></table>";
fHilandersLeatherGirdle.itemPrice[3] = 37537;
fHilandersLeatherGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
136 Armor<br>\
+6 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 48<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.<br>\
Equip: +20 Attack Power</span>\
</td></tr></table>";
fHilandersLeatherGirdle.itemPrice[4] = 66528;
fHilandersLeatherGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
159 Armor<br>\
+7 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 58<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.<br>\
Equip: +34 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Defiler's Purpose</b><br>\
<b class='myGray'>Defiler's Leather Girdle</b><br>\
<b class='myGray'>Defiler's Leather Boots</b><br>\
<b class='myGray'>Defiler's Leather Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLeatherGirdle; i++;

var fHilandersLamellarGirdle = new RewardItem("horde","honored","Defiler's Mail Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt03.gif");
fHilandersLamellarGirdle.itemPrice = new Array();
fHilandersLamellarGirdle.itemStats = new Array();
fHilandersLamellarGirdle.itemPrice[1] = 9337;
fHilandersLamellarGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Mail Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Leather</span><br>\
61 Armor<br>\
+5 Stamina<br>\
+12 Intellect<br>\
Classes: Hunter, Shaman<br>\
Requires Level 28<br>\
Requires The Defilers - Honored\
</td></tr></table>";
fHilandersLamellarGirdle.itemPrice[2] = 14407;
fHilandersLamellarGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Mail Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
149 Armor<br>\
+6 Stamina<br>\
+15 Intellect<br>\
Classes: Hunter, Shaman<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires The Defilers - Honored\
</td></tr></table>";
fHilandersLamellarGirdle.itemPrice[3] = 31258;
fHilandersLamellarGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Mail Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
178 Armor<br>\
+8 Stamina<br>\
+10 Intellect<br>\
Classes: Hunter, Shaman<br>\
Requires Level 48<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 1%.</span>\
</td></tr></table>";
fHilandersLamellarGirdle.itemPrice[4] = 51274;
fHilandersLamellarGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Mail Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
208 Armor<br>\
+10 Stamina<br>\
+17 Intellect<br>\
Classes: Hunter, Shaman<br>\
Requires Level 58<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 1%.</span><br>\
<br>\
<b class='myYellow'>The Defiler's Fortitude</b><br>\
<b class='myGray'>Defiler's Mail Girdle</b><br>\
<b class='myGray'>Defiler's Mail Greaves</b><br>\
<b class='myGray'>Defiler's Mail Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLamellarGirdle; i++;

var fHilandersPlateGirdle = new RewardItem("horde","honored","Defiler's Plate Girdle","../../../../shared/wow-com/images/basics/factions/arathi/belt02.gif");
fHilandersPlateGirdle.itemPrice = new Array();
fHilandersPlateGirdle.itemStats = new Array();
fHilandersPlateGirdle.itemPrice[1] = 9264;
fHilandersPlateGirdle.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Plate Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Mail</span><br>\
128 Armor<br>\
+12 Strength<br>\
+5 Stamina<br>\
Classes: Warrior<br>\
Requires Level 28<br>\
Requires The Defilers - Honored<br>\
</td></tr></table>";
fHilandersPlateGirdle.itemPrice[2] = 14294;
fHilandersPlateGirdle.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Plate Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Plate</span><br>\
236 Armor<br>\
+15 Strength<br>\
+6 Stamina<br>\
Classes: Warrior<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires The Defilers - Honored<br>\
</td></tr></table>";
fHilandersPlateGirdle.itemPrice[3] = 31838;
fHilandersPlateGirdle.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Plate Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Plate</span><br>\
313 Armor<br>\
+10 Strength<br>\
+8 Stamina<br>\
Classes: Warrior<br>\
Requires Level 48<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.</span>\
</td></tr></table>";
fHilandersPlateGirdle.itemPrice[4] = 51087;
fHilandersPlateGirdle.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Plate Girdle</span><br>\
Binds when picked up<br>\
Unique<br>\
Waist<span class='myRight'>Plate</span><br>\
369 Armor<br>\
+17 Strength<br>\
+10 Stamina<br>\
Classes: Warrior<br>\
Requires Level 58<br>\
Requires The Defilers - Honored<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike by 1%.</span><br>\
<br>\
<b class='myYellow'>The Defiler's Resolution</b><br>\
<b class='myGray'>Defiler's Plate Girdle</b><br>\
<b class='myGray'>Defiler's Plate Greaves</b><br>\
<b class='myGray'>Defiler's Plate Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersPlateGirdle; i++;

var fHilandersChainGreaves = new RewardItem("horde","revered","Defiler's Chain Greaves","../../../../shared/wow-com/images/basics/factions/arathi/boots02.gif");
fHilandersChainGreaves.itemPrice = new Array();
fHilandersChainGreaves.itemStats = new Array();
fHilandersChainGreaves.itemPrice[1] = 11895;
fHilandersChainGreaves.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Chain Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
74 Armor<br>\
+8 Agility<br>\
+8 Stamina<br>\
Classes: Hunter, Shaman<br>\
Requires Level 28<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersChainGreaves.itemPrice[2] = 33187;
fHilandersChainGreaves.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Chain Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
183 Armor<br>\
+10 Agility<br>\
+10 Stamina<br>\
+3 Intellect<br>\
Classes: Hunter, Shaman<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersChainGreaves.itemPrice[3] = 66867;
fHilandersChainGreaves.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Chain Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
218 Armor<br>\
+12 Agility<br>\
+13 Stamina<br>\
+6 Intellect<br>\
Classes: Hunter, Shaman<br>\
Requires Level 48<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersChainGreaves.itemPrice[4] = 122427;
fHilandersChainGreaves.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Chain Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
255 Armor<br>\
+15 Agility<br>\
+16 Stamina<br>\
+8 Intellect<br>\
Classes: Hunter, Shaman<br>\
Requires Level 58<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span><br>\
<br>\
<b class='myYellow'>The Defiler's Determination</b><br>\
<b class='myGray'>Defiler's Chain Girdle</b><br>\
<b class='myGray'>Defiler's Chain Greaves</b><br>\
<b class='myGray'>Defiler's Chain Pauldrons</b>\
</td></tr></table>";
RewardItems[i] = fHilandersChainGreaves; i++;

var fHilandersClothBoots = new RewardItem("horde","revered","Defiler's Cloth Boots","../../../../shared/wow-com/images/basics/factions/arathi/boots05.gif");
fHilandersClothBoots.itemPrice = new Array();
fHilandersClothBoots.itemStats = new Array();
fHilandersClothBoots.itemPrice[1] = 11895;
fHilandersClothBoots.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Cloth Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Cloth</span><br>\
84 Armor<br>\
+8 Stamina<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 28<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 7.</span>\
</td></tr></table>";
fHilandersClothBoots.itemPrice[2] = 33187;
fHilandersClothBoots.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Cloth Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Cloth</span><br>\
103 Armor<br>\
+10 Stamina<br>\
+3 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 38<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 8.</span>\
</td></tr></table>";
fHilandersClothBoots.itemPrice[3] = 66867;
fHilandersClothBoots.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Cloth Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Cloth</span><br>\
132 Armor<br>\
+13 Stamina<br>\
+6 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 48<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 9.</span>\
</td></tr></table>";
fHilandersClothBoots.itemPrice[4] = 122427;
fHilandersClothBoots.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Cloth Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Cloth</span><br>\
161 Armor<br>\
+16 Stamina<br>\
+8 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 58<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 12.</span><br>\
<br>\
<b class='myYellow'>The Defiler's Intent</b><br>\
<b class='myGray'>Defiler's Cloth Girdle</b><br>\
<b class='myGray'>Defiler's Cloth Boots</b><br>\
<b class='myGray'>Defiler's Epaulets</b>\
</td></tr></table>";
RewardItems[i] = fHilandersClothBoots; i++;

var fHilandersLamellarGreaves = new RewardItem("horde","revered","Defiler's Mail Greaves","../../../../shared/wow-com/images/basics/factions/arathi/boots02.gif");
fHilandersLamellarGreaves.itemPrice = new Array();
fHilandersLamellarGreaves.itemStats = new Array();
fHilandersLamellarGreaves.itemPrice[1] = 14229;
fHilandersLamellarGreaves.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Mail Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
74 Armor<br>\
+8 Agility<br>\
+8 Stamina<br>\
Classes: Hunter, Shaman<br>\
Requires Level 28<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersLamellarGreaves.itemPrice[2] = 21858;
fHilandersLamellarGreaves.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Mail Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
183 Armor<br>\
+10 Agility<br>\
+10 Stamina<br>\
+3 Intellect<br>\
Classes: Hunter, Shaman<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersLamellarGreaves.itemPrice[3] = 44044;
fHilandersLamellarGreaves.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Mail Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
218 Armor<br>\
+12 Agility<br>\
+13 Stamina<br>\
+6 Intellect<br>\
Classes: Hunter, Shaman<br>\
Requires Level 48<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersLamellarGreaves.itemPrice[4] = 80977;
fHilandersLamellarGreaves.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Mail Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
255 Armor<br>\
+15 Agility<br>\
+16 Stamina<br>\
+8 Intellect<br>\
Classes: Hunter, Shaman<br>\
Requires Level 58<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span><br>\
<br>\
<b class='myYellow'>The Defiler's Fortitude</b><br>\
<b class='myGray'>Defiler's Mail Girdle</b><br>\
<b class='myGray'>Defiler's Mail Greaves</b><br>\
<b class='myGray'>Defiler's Mail Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLamellarGreaves; i++;

var fHilandersLeatherBoots = new RewardItem("horde","revered","Defiler's Leather Boots","../../../../shared/wow-com/images/basics/factions/arathi/boots03.gif");
fHilandersLeatherBoots.itemPrice = new Array();
fHilandersLeatherBoots.itemStats = new Array();
fHilandersLeatherBoots.itemPrice[1] = 11937;
fHilandersLeatherBoots.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
104 Armor<br>\
+7 Agility<br>\
+8 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 28<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersLeatherBoots.itemPrice[2] = 27634;
fHilandersLeatherBoots.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
129 Armor<br>\
+8 Agility<br>\
+10 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 38<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +6 Attack Power</span>\
</td></tr></table>";
fHilandersLeatherBoots.itemPrice[3] = 55681;
fHilandersLeatherBoots.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
145 Armor<br>\
+11 Agility<br>\
+13 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 48<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +12 Attack Power</span>\
</td></tr></table>";
fHilandersLeatherBoots.itemPrice[4] = 92564;
fHilandersLeatherBoots.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
181 Armor<br>\
+12 Agility<br>\
+16 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 58<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +16 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Defiler's Purpose</b><br>\
<b class='myGray'>Defiler's Leather Girdle</b><br>\
<b class='myGray'>Defiler's Leather Boots</b><br>\
<b class='myGray'>Defiler's Leather Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLeatherBoots; i++;

var fHilandersLizardHideBoots = new RewardItem("horde","revered","Defiler's Lizardhide Boots","../../../../shared/wow-com/images/basics/factions/arathi/boots04.gif");
fHilandersLizardHideBoots.itemPrice = new Array();
fHilandersLizardHideBoots.itemStats = new Array();
fHilandersLizardHideBoots.itemPrice[1] = 12294;
fHilandersLizardHideBoots.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
104 Armor<br>\
+5 Agility<br>\
+8 Stamina<br>\
+4 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 28<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersLizardHideBoots.itemPrice[2] = 28465;
fHilandersLizardHideBoots.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
129 Armor<br>\
+6 Agility<br>\
+10 Stamina<br>\
+5 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 38<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +6 Attack Power</span>\
</td></tr></table>";
fHilandersLizardHideBoots.itemPrice[3] = 57358;
fHilandersLizardHideBoots.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
145 Armor<br>\
+8 Agility<br>\
+13 Stamina<br>\
+7 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 48<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +12 Attack Power</span>\
</td></tr></table>";
fHilandersLizardHideBoots.itemPrice[4] = 92914;
fHilandersLizardHideBoots.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Leather Boots</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Leather</span><br>\
181 Armor<br>\
+8 Agility<br>\
+16 Stamina<br>\
+8 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 58<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.<br>\
Equip: +16 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Defiler's Will</b><br>\
<b class='myGray'>Defiler's Lizardhide Girdle</b><br>\
<b class='myGray'>Defiler's Lizardhide Boots</b><br>\
<b class='myGray'>Defiler's Lizardhide Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLizardHideBoots; i++;

var fHilandersPlateGreaves = new RewardItem("horde","revered","Defiler's Plate Greaves","../../../../shared/wow-com/images/basics/factions/arathi/boots01.gif");
fHilandersPlateGreaves.itemPrice = new Array();
fHilandersPlateGreaves.itemStats = new Array();
fHilandersPlateGreaves.itemPrice[1] = 14119;
fHilandersPlateGreaves.itemStats[1] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Plate Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Mail</span><br>\
157 Armor<br>\
+6 Strength<br>\
+6 Agility<br>\
+6 Stamina<br>\
Classes: Warrior<br>\
Requires Level 28<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersPlateGreaves.itemPrice[2] = 21691;
fHilandersPlateGreaves.itemStats[2] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Plate Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Plate</span><br>\
289 Armor<br>\
+8 Strength<br>\
+8 Agility<br>\
+8 Stamina<br>\
Classes: Warrior<br>\
<span class='myRed'>Requires Level 40</span><br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersPlateGreaves.itemPrice[3] = 43702;
fHilandersPlateGreaves.itemStats[3] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Plate Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Plate</span><br>\
383 Armor<br>\
+11 Strength<br>\
+10 Agility<br>\
+10 Stamina<br>\
Classes: Warrior<br>\
Requires Level 48<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span>\
</td></tr></table>";
fHilandersPlateGreaves.itemPrice[4] = 80690;
fHilandersPlateGreaves.itemStats[4] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'>Defiler's Plate Greaves</span><br>\
Binds when picked up<br>\
Unique<br>\
Feet<span class='myRight'>Plate</span><br>\
452 Armor<br>\
+14 Strength<br>\
+12 Agility<br>\
+12 Stamina<br>\
Classes: Warrior<br>\
Requires Level 58<br>\
Requires The Defilers - Revered<br>\
<span class='myGreen'>Equip: Running speed slightly increased.</span><br>\
<br>\
<b class='myYellow'>The Defiler's Resolution</b><br>\
<b class='myGray'>Defiler's Plate Girdle</b><br>\
<b class='myGray'>Defiler's Plate Greaves</b><br>\
<b class='myGray'>Defiler's Plate Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersPlateGreaves; i++;

var fHilandersChainPauldron = new RewardItem("horde","exalted","Defiler's Chain Pauldron","../../../../shared/wow-com/images/basics/factions/arathi/shoulders02.gif");
fHilandersChainPauldron.itemPrice = new Array();
fHilandersChainPauldron.itemStats = new Array();
fHilandersChainPauldron.itemPrice[5] = 165903;
fHilandersChainPauldron.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Defiler's Chain Pauldron</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Mail</span><br>\
312 Armor<br>\
+20 Agility<br>\
+18 Stamina<br>\
+17 Intellect<br>\
Classes: Hunter, Shaman<br>\
Requires Level 60<br>\
Requires The Defilers - Exalted<br>\
<br>\
<b class='myYellow'>The Defiler's Determination</b><br>\
<b class='myGray'>Defiler's Chain Girdle</b><br>\
<b class='myGray'>Defiler's Chain Greaves</b><br>\
<b class='myGray'>Defiler's Chain Pauldrons</b>\
</td></tr></table>";
RewardItems[i] = fHilandersChainPauldron; i++;

var fHilandersEpaulets = new RewardItem("horde","exalted","Defiler's Epaulets","../../../../shared/wow-com/images/basics/factions/arathi/shoulders01.gif");
fHilandersEpaulets.itemPrice = new Array();
fHilandersEpaulets.itemStats = new Array();
fHilandersEpaulets.itemPrice[5] = 115654;
fHilandersEpaulets.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Defiler's Epaulets</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Cloth</span><br>\
185 Armor<br>\
+18 Stamina<br>\
+17 Intellect<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 60<br>\
Requires The Defilers - Exalted<br>\
<span class='myGreen'>Equip: Increases damage and healing done by spells and magical effects by up to 12.<br>\
Equip: Regenerates 4 mana every 5 seconds</span><br>\
<br>\
<b class='myYellow'>The Defiler's Intent</b><br>\
<b class='myGray'>Defiler's Cloth Girdle</b><br>\
<b class='myGray'>Defiler's Cloth Boots</b><br>\
<b class='myGray'>Defiler's Epaulets</b>\
</td></tr></table>";
RewardItems[i] = fHilandersEpaulets; i++;

var fHilandersLamellarSpaulders = new RewardItem("horde","exalted","Defiler's Mail Spaulders","../../../../shared/wow-com/images/basics/factions/arathi/shoulders02.gif");
fHilandersLamellarSpaulders.itemPrice = new Array();
fHilandersLamellarSpaulders.itemStats = new Array();
fHilandersLamellarSpaulders.itemPrice[5] = 111369;
fHilandersLamellarSpaulders.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Defiler's Mail Spaulders</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Mail</span><br>\
312 Armor<br>\
+11 Strength<br>\
+10 Agility<br>\
+18 Stamina<br>\
+17 Intellect<br>\
Classes: Hunter, Shaman<br>\
Requires Level 60<br>\
Requires The Defilers - Exalted<br>\
<span class='myGreen'>Equip: Restores 4 mana every 5 seconds</span><br>\
<br>\
<b class='myYellow'>The Defiler's Fortitude</b><br>\
<b class='myGray'>Defiler's Mail Girdle</b><br>\
<b class='myGray'>Defiler's Mail Greaves</b><br>\
<b class='myGray'>Defiler's Mail Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLamellarSpaulders; i++;

var fHilandersLeatherShoulders = new RewardItem("horde","exalted","Defiler's Leather Shoulders","../../../../shared/wow-com/images/basics/factions/arathi/shoulders01.gif");
fHilandersLeatherShoulders.itemPrice = new Array();
fHilandersLeatherShoulders.itemStats = new Array();
fHilandersLeatherShoulders.itemPrice[5] = 143525;
fHilandersLeatherShoulders.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Defiler's Leather Spaulders</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Leather</span><br>\
258 Armor<br>\
+18 Agility<br>\
+17 Stamina<br>\
Classes: Rogue, Druid<br>\
Requires Level 60<br>\
Requires The Defilers - Exalted<br>\
<span class='myGreen'>Equip: +30 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Defiler's Purpose</b><br>\
<b class='myGray'>Defiler's Leather Girdle</b><br>\
<b class='myGray'>Defiler's Leather Boots</b><br>\
<b class='myGray'>Defiler's Leather Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLeatherShoulders; i++;

var fHilandersPlateSpaulders = new RewardItem("horde","exalted","Defiler's Plate Spaulders","../../../../shared/wow-com/images/basics/factions/arathi/shoulders02.gif");
fHilandersPlateSpaulders.itemPrice = new Array();
fHilandersPlateSpaulders.itemStats = new Array();
fHilandersPlateSpaulders.itemPrice[5] = 110946;
fHilandersPlateSpaulders.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Defiler's Plate Spaulders</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Plate</span><br>\
553 Armor<br>\
+18 Strength<br>\
+17 Agility<br>\
+20 Stamina<br>\
Classes: Warrior<br>\
Requires Level 60<br>\
Requires The Defilers - Exalted<br>\
<br>\
<b class='myYellow'>The Defiler's Resolution</b><br>\
<b class='myGray'>Defiler's Plate Girdle</b><br>\
<b class='myGray'>Defiler's Plate Greaves</b><br>\
<b class='myGray'>Defiler's Plate Spaulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersPlateSpaulders; i++;

var fHilandersLizardhideShoulders = new RewardItem("horde","exalted","Defiler's Lizardhide Shoulders","../../../../shared/wow-com/images/basics/factions/arathi/shoulders01.gif");
fHilandersLizardhideShoulders.itemPrice = new Array();
fHilandersLizardhideShoulders.itemStats = new Array();
fHilandersLizardhideShoulders.itemPrice[5] = 144054;
fHilandersLizardhideShoulders.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Defiler's Leather Spaulders</span><br>\
Binds when picked up<br>\
Unique<br>\
Shoulder<span class='myRight'>Leather</span><br>\
258 Armor<br>\
+12 Agility<br>\
+17 Stamina<br>\
+12 Intellect<br>\
Classes: Rogue, Druid<br>\
Requires Level 60<br>\
Requires The Defilers - Exalted<br>\
<span class='myGreen'>Equip: +30 Attack Power</span><br>\
<br>\
<b class='myYellow'>The Defiler's Will</b><br>\
<b class='myGray'>Defiler's Lizardhide Girdle</b><br>\
<b class='myGray'>Defiler's Lizardhide Boots</b><br>\
<b class='myGray'>Defiler's Lizardhide Shoulders</b>\
</td></tr></table>";
RewardItems[i] = fHilandersLizardhideShoulders; i++;

var fCloakOfTheHonorGuard = new RewardItem("horde","exalted","Deathguard's Cloak","../../../../shared/wow-com/images/basics/factions/arathi/cape01.gif");
fCloakOfTheHonorGuard.itemPrice = new Array();
fCloakOfTheHonorGuard.itemStats = new Array();
fCloakOfTheHonorGuard.itemPrice[5] = 109255;
fCloakOfTheHonorGuard.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Deathguard's Cloak</span><br>\
Binds when picked up<br>\
Back<br>\
50 Armor<br>\
+5 Agility<br>\
+11 Stamina<br>\
Requires Level 60<br>\
Requires The Defilers - Exalted<br>\
<span class='myGreen'>Equip: +34 Attack Power</span>\
</td></tr></table>";
RewardItems[i] = fCloakOfTheHonorGuard; i++;

var eSageClaw = new RewardItem("horde","exalted","Mindfang","../../../../shared/wow-com/images/basics/factions/arathi/dagger01.gif");
eSageClaw.itemPrice = new Array();
eSageClaw.itemStats = new Array();
eSageClaw.itemPrice[5] = 110946;
eSageClaw.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Mindfang</span><br>\
Binds when picked up<br>\
One Hand<span class='myRight'>Dagger</span><br>\
46-96 Damage<span class='myRight'>Speed 1.70</span><br>\
(41.7 damager per second)<br>\
40 Armor<br>\
+8 Stamina<br>\
Requires Level 60<br>\
Requires The Defilers - Exalted<br>\
<span class='myGreen'>Equip: Increases damage and healing done by spells and magical effects by up to 30.<br>\
Equip: Increases your chance for a critical strike with spells by 1%.</span>\
</td></tr></table>";
RewardItems[i] = eSageClaw; i++;

var eIronbarkStaff = new RewardItem("horde","exalted","Ironbark Staff","../../../../shared/wow-com/images/basics/factions/arathi/staff01.gif");
eIronbarkStaff.itemPrice = new Array();
eIronbarkStaff.itemStats = new Array();
eIronbarkStaff.itemPrice[5] = 110946;
eIronbarkStaff.itemStats[5] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'>Ironbark Staff</span><br>\
Binds when picked up<br>\
Two Hand<span class='myRight'>Staff</span><br>\
136-243 Damage<span class='myRight'>Speed 3.40</span><br>\
(55.8 damager per second)<br>\
100 Armor<br>\
+19 Stamina<br>\
+10 Intellect<br>\
Requires Level 60<br>\
Requires The Defilers - Exalted<br>\
<span class='myGreen'>Equip: Increases your chance for a critical strike with spells by 2%.<br>\
Equip: Increases damage and healing done by spells and magical effects by up to 41.</span>\
</td></tr></table>";
RewardItems[i] = eIronbarkStaff; i++;

//------END REWARDS DEFINITION------
