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

var fSuperiorHealingDraught = new RewardItem("alliance","friendly","Superior Healing Draught","../../../../shared/wow-com/images/basics/factions/alteracvalley/superiorhealingdraught.gif");
fSuperiorHealingDraught.itemPrice = new Array();
fSuperiorHealingDraught.itemPrice[0] = 500;
fSuperiorHealingDraught.itemStats = new Array();
fSuperiorHealingDraught.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Superior Healing Draught</b></span><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 health. This item may only be used in Alterac Valley.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fSuperiorHealingDraught; i++;



var fSuperiorManaDraught = new RewardItem("alliance","friendly","Superior Mana Draught","../../../../shared/wow-com/images/basics/factions/alteracvalley/superiormanadraught.gif");
fSuperiorManaDraught.itemPrice = new Array();
fSuperiorManaDraught.itemPrice[0] = 500;
fSuperiorManaDraught.itemStats = new Array();
fSuperiorManaDraught.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Superior Mana Draught</b></span><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 mana. This item may only be used in Alterac Valley.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fSuperiorManaDraught; i++;



var fStormpikeBattleTabard = new RewardItem("alliance","friendly","Stormpike Battle Tabard","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikebattletabard.gif");
fStormpikeBattleTabard.itemPrice = new Array();
fStormpikeBattleTabard.itemPrice[0] = 10000;
fStormpikeBattleTabard.itemStats = new Array();
fStormpikeBattleTabard.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Stormpike Battle Tabard</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Tabard</span>\
</td></tr></table>";
RewardItems[i] = fStormpikeBattleTabard; i++;





var fAlteracHeavyRuneclothBandage = new RewardItem("alliance","friendly","Alterac Heavy Runecloth Bandage","../../../../shared/wow-com/images/basics/factions/alteracvalley/alteracheavyruneclothbandag.gif");
fAlteracHeavyRuneclothBandage.itemPrice = new Array();
fAlteracHeavyRuneclothBandage.itemPrice[0] = 8000;
fAlteracHeavyRuneclothBandage.itemStats = new Array();
fAlteracHeavyRuneclothBandage.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Alterac Heavy Runecloth Bandage</b></span><br>\
Binds when picked up<br>\
Requires First Aid (225)<br>\
<span class='myGreen'>Use: Heals 2000 damage over 8 sec.</span><br>\
<span class='myYellow'>&quot;May only be used in Alterac Valley.&quot;</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fAlteracHeavyRuneclothBandage; i++;



var fBottledAlteracSpringWater = new RewardItem("alliance","friendly","Bottled Alterac Spring Water","../../../../shared/wow-com/images/basics/factions/alteracvalley/bottledalteracspringwater.gif");
fBottledAlteracSpringWater.itemPrice = new Array();
fBottledAlteracSpringWater.itemPrice[0] = 5000;
fBottledAlteracSpringWater.itemStats = new Array();
fBottledAlteracSpringWater.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Bottled Alterac Spring Water</b></span><br>\
Binds when picked up<br>\
Requires Level 55<br>\
<span class='myGreen'>Use: Restores 4410 mana over 30 sec. Must remain seated while drinking. Also increases your Spirit by 10 for 10 min.</span><br>\
<span class='myYellow'>&quot;From the mountain springs of Alterac!&quot;</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fBottledAlteracSpringWater; i++;










var fMajorHealingDraught = new RewardItem("alliance","honored","Major Healing Draught","../../../../shared/wow-com/images/basics/factions/alteracvalley/majorhealingdraught.gif");
fMajorHealingDraught.itemPrice = new Array();
fMajorHealingDraught.itemPrice[0] = 900;
fMajorHealingDraught.itemStats = new Array();
fMajorHealingDraught.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Major Healing Draught</b></span><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 45<br>\
<span class='myGreen'>Use: Restores 980 to 1260 health. This item may only be used in Alterac Valley.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fMajorHealingDraught; i++;




var fMajorManaDraught = new RewardItem("alliance","honored","Major Mana Draught","../../../../shared/wow-com/images/basics/factions/alteracvalley/majormanadraught.gif");
fMajorManaDraught.itemPrice = new Array();
fMajorManaDraught.itemPrice[0] = 900;
fMajorManaDraught.itemStats = new Array();
fMajorManaDraught.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Major Mana Draught</b></span><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 45<br>\
<span class='myGreen'>Use: Restores 980 to 1260 mana. This item may only be used in Alterac Valley.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fMajorManaDraught; i++;




var fStormpikeSoldiersCloak = new RewardItem("alliance","honored","Stormpike Soldier's Cloak","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikecloak.gif");
fStormpikeSoldiersCloak.itemPrice = new Array();
fStormpikeSoldiersCloak.itemPrice[0] = 67950;
fStormpikeSoldiersCloak.itemStats = new Array();
fStormpikeSoldiersCloak.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Stormpike Soldier's Cloak</b></span><br>\
Binds when picked up<br>\
Back<br>\
43 Armor<br>\
+11 Stamina<br>\
+5 Frost Resistance<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: +24 Attack Power</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fStormpikeSoldiersCloak; i++;



var fStormpikeSagesCloak = new RewardItem("alliance","honored","Stormpike Sage's Cloak","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikecloak.gif");
fStormpikeSagesCloak.itemPrice = new Array();
fStormpikeSagesCloak.itemPrice[0] = 68440;
fStormpikeSagesCloak.itemStats = new Array();
fStormpikeSagesCloak.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Stormpike Sage's Cloak</b></span><br>\
Binds when picked up<br>\
Back<br>\
43 Armor<br>\
+11 Stamina<br>\
+5 Frost Resistance<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 14.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fStormpikeSagesCloak; i++;



var fStormpikeSoldiersPendant = new RewardItem("alliance","honored","Stormpike Soldier's Pendant","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikesoldierspendant.gif");
fStormpikeSoldiersPendant.itemPrice = new Array();
fStormpikeSoldiersPendant.itemPrice[0] = 64483;
fStormpikeSoldiersPendant.itemStats = new Array();
fStormpikeSoldiersPendant.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Stormpike Soldier's Pendant</b></span><br>\
Binds when picked up<br>\
Neck<br>\
+15 Stamina<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: +18 Attack Power.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fStormpikeSoldiersPendant; i++;




var fStormpikeSagesPendant = new RewardItem("alliance","honored","Stormpike Sage's Pendant","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikesagespendant.gif");
fStormpikeSagesPendant.itemPrice = new Array();
fStormpikeSagesPendant.itemPrice[0] = 64483;
fStormpikeSagesPendant.itemStats = new Array();
fStormpikeSagesPendant.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Stormpike Sage's Pendant</b></span><br>\
Binds when picked up<br>\
Neck<br>\
+10 Stamina<br>\
+10 Intellect<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: Restores 4 mana per 5 sec.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fStormpikeSagesPendant; i++;



var fStormpikePlateGirdle = new RewardItem("alliance","honored","Stormpike Plate Girdle","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikeplategirdle.gif");
fStormpikePlateGirdle.itemPrice = new Array();
fStormpikePlateGirdle.itemPrice[0] = 42699;
fStormpikePlateGirdle.itemStats = new Array();
fStormpikePlateGirdle.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Stormpike Plate Girdle</b></span><br>\
Binds when picked up<br>\
Waist<span class='myRight'>Plate</span><br>\
353 Armor<br>\
+18 Strength<br>\
+7 Agility<br>\
+8 Stamina<br>\
+5 Frost Resistance<br>\
Requires Level 55</span>\
</td></tr></table>";
RewardItems[i] = fStormpikePlateGirdle; i++;






var fStormpikeMailGirdle = new RewardItem("alliance","honored","Stormpike Mail Girdle","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikemailgirdle.gif");
fStormpikeMailGirdle.itemPrice = new Array();
fStormpikeMailGirdle.itemPrice[0] = 64048;
fStormpikeMailGirdle.itemStats = new Array();
fStormpikeMailGirdle.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Stormpike Mail Girdle</b></span><br>\
Binds when picked up<br>\
Waist<span class='myRight'>Mail</span><br>\
199 Armor<br>\
+12 Agility<br>\
+12 Stamina<br>\
+12 Intellect<br>\
+5 Frost Resistance<br>\
Requires Level 55</span>\
</td></tr></table>";
RewardItems[i] = fStormpikeMailGirdle; i++;


var fStormpikeLeatherGirdle = new RewardItem("alliance","honored","Stormpike Leather Girdle","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikeleathergirdle.gif");
fStormpikeLeatherGirdle.itemPrice = new Array();
fStormpikeLeatherGirdle.itemPrice[0] = 53374;
fStormpikeLeatherGirdle.itemStats = new Array();
fStormpikeLeatherGirdle.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Stormpike Leather Girdle</b></span><br>\
Binds when picked up<br>\
Waist<span class='myRight'>Leather</span><br>\
95 Armor<br>\
+11 Strength<br>\
+10 Agility<br>\
+15 Stamina<br>\
+5 Frost Resistance<br>\
Requires Level 55</span>\
</td></tr></table>";
RewardItems[i] = fStormpikeLeatherGirdle; i++;


var fStormpikeClothGirdle = new RewardItem("alliance","honored","Stormpike Cloth Girdle","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikeclothgirdle.gif");
fStormpikeClothGirdle.itemPrice = new Array();
fStormpikeClothGirdle.itemPrice[0] = 42699;
fStormpikeClothGirdle.itemStats = new Array();
fStormpikeClothGirdle.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Stormpike Cloth Girdle</b></span><br>\
Binds when picked up<br>\
Waist<span class='myRight'>Cloth</span><br>\
48 Armor<br>\
+11 Stamina<br>\
+10 Intellect<br>\
+5 Frost Resistance<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 18.</span></span>\
</td></tr></table>";
RewardItems[i] = fStormpikeClothGirdle; i++;


var fAlteracMannaBiscuit = new RewardItem("alliance","honored","Alterac Manna Biscuit","../../../../shared/wow-com/images/basics/factions/alteracvalley/alteracmannabiscuit.gif");
fAlteracMannaBiscuit.itemPrice = new Array();
fAlteracMannaBiscuit.itemPrice[0] = 6300;
fAlteracMannaBiscuit.itemStats = new Array();
fAlteracMannaBiscuit.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Alterac Manna Biscuit</b></span><br>\
Binds when picked up<br>\
Requires Level 51<br>\
<span class='myGreen'>Use: Restores 4410 health and 4410 mana over 30 sec. Must remain seated while eating.</span></span>\
</td></tr></table>";
RewardItems[i] = fAlteracMannaBiscuit; i++;

var fIceThreadedArrow = new RewardItem("alliance","honored","Ice Threaded Arrow","../../../../shared/wow-com/images/basics/factions/alteracvalley/icethreadedarrow.gif");
fIceThreadedArrow.itemPrice = new Array();
fIceThreadedArrow.itemPrice[0] = 5400;
fIceThreadedArrow.itemStats = new Array();
fIceThreadedArrow.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myGreen'><b>Ice Threaded Arrow</b></span><br>\
Binds when picked up<br>\
Projectile<span class='myRight'>Arrow</span><br>\
Adds 16.5 damage per second<br>\
Requires Level 51</span>\
</td></tr></table>";
RewardItems[i] = fIceThreadedArrow; i++;



var fIceThreadedBullet = new RewardItem("alliance","honored","Ice Threaded Bullet","../../../../shared/wow-com/images/basics/factions/alteracvalley/icethreadedbullet.gif");
fIceThreadedBullet.itemPrice = new Array();
fIceThreadedBullet.itemPrice[0] = 5400;
fIceThreadedBullet.itemStats = new Array();
fIceThreadedBullet.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myGreen'><b>Ice Threaded Bullet</b></span><br>\
Binds when picked up<br>\
Projectile<span class='myRight'>Bullet</span><br>\
Adds 16.5 damage per second<br>\
Requires Level 51</span>\
</td></tr></table>";
RewardItems[i] = fIceThreadedBullet; i++;







var fStormpikeBattleStandard = new RewardItem("alliance","revered","Stormpike Battle Standard","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikebattlestandard.gif");
fStormpikeBattleStandard.itemPrice = new Array();
fStormpikeBattleStandard.itemPrice[0] = 45000;
fStormpikeBattleStandard.itemStats = new Array();
fStormpikeBattleStandard.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Stormpike Battle Standard</b></span><br>\
Binds when picked up<br>\
<span class='myGreen'>Use: Place a Battle Standard with 1500 health that increases the damage of all party members that stay within 45 yards of the Battle Standard by 10%. Lasts 2 min. May only be used in Alterac Valley.</span></span>\
</td></tr></table>";
RewardItems[i] = fStormpikeBattleStandard; i++;



var fElectrifiedDagger = new RewardItem("alliance","revered","Electrified Dagger","../../../../shared/wow-com/images/basics/factions/alteracvalley/electrifieddagger.gif");
fElectrifiedDagger.itemPrice = new Array();
fElectrifiedDagger.itemPrice[0] = 284853;
fElectrifiedDagger.itemStats = new Array();
fElectrifiedDagger.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Electrified Dagger</b></span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
53 - 100 Damage<span class='myRight'>Speed 1.80</span><br>\
(42.5 damage per second)<br>\
+10 Agility<br>\
Requires Level 60<br>\
<span class='myGreen'>Chance on hit: Blasts a target for 45 Nature damage.</span></span>\
</td></tr></table>";
RewardItems[i] = fElectrifiedDagger; i++;


var fCracklingStaff = new RewardItem("alliance","revered","Crackling Staff","../../../../shared/wow-com/images/basics/factions/alteracvalley/cracklingstaff.gif");
fCracklingStaff.itemPrice = new Array();
fCracklingStaff.itemPrice[0] = 358672;
fCracklingStaff.itemStats = new Array();
fCracklingStaff.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Crackling Staff</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
138 - 207 Damage<span class='myRight'>Speed 3.10</span><br>\
(55.6 damage per second)<br>\
+25 Stamina<br>\
+16 Intellect<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 15.</span></span>\
</td></tr></table>";
RewardItems[i] = fCracklingStaff; i++;


var fStormstrikeHammer = new RewardItem("alliance","revered","Stormstrike Hammer","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormstrikehammer.gif");
fStormstrikeHammer.itemPrice = new Array();
fStormstrikeHammer.itemPrice[0] = 289023;
fStormstrikeHammer.itemStats = new Array();
fStormstrikeHammer.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Stormstrike Hammer</b></span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Mace</span><br>\
80 - 150 Damage<span class='myRight'>Speed 2.70</span><br>\
(42.6 damage per second)<br>\
+15 Strength<br>\
Requires Level 60</span>\
</td></tr></table>";
RewardItems[i] = fStormstrikeHammer; i++;



var fGnollSkinBandolier = new RewardItem("alliance","revered","Gnoll Skin Bandolier","../../../../shared/wow-com/images/basics/factions/alteracvalley/gnollskinbandolier.gif");
fGnollSkinBandolier.itemPrice = new Array();
fGnollSkinBandolier.itemPrice[0] = 315000;
fGnollSkinBandolier.itemStats = new Array();
fGnollSkinBandolier.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Gnoll Skin Bandolier</b></span><br>\
Binds when picked up<br>\
Unique<br>\
16 Slot Ammo Pouch<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: Increases ranged attack speed by 15%.</span></span>\
</td></tr></table>";
RewardItems[i] = fGnollSkinBandolier; i++;

var fHarpyHideQuiver = new RewardItem("alliance","revered","Harpy Hide Quiver","../../../../shared/wow-com/images/basics/factions/alteracvalley/harpyhidequiver.gif");
fHarpyHideQuiver.itemPrice = new Array();
fHarpyHideQuiver.itemPrice[0] = 315000;
fHarpyHideQuiver.itemStats = new Array();
fHarpyHideQuiver.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Harpy Hide Quiver</b></span><br>\
Binds when picked up<br>\
Unique<br>\
16 Slot Quiver<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: Increases ranged attack speed by 15%.</span></span>\
</td></tr></table>";
RewardItems[i] = fHarpyHideQuiver; i++;







var fStormpikeBattleCharger = new RewardItem("alliance","exalted","Stormpike Battle Charger","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikebattlecharger.gif");
fStormpikeBattleCharger.itemPrice = new Array();
fStormpikeBattleCharger.itemPrice[0] = 7200000;
fStormpikeBattleCharger.itemStats = new Array();
fStormpikeBattleCharger.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Stormpike Battle Charger</b></span><br>\
Binds when picked up<br>\
Requires Level 60<br>\
<span class='myGreen'>Use: Summons and dismisses a rideable Stormpike Battle Charger. This is a very fast mount.</span></span>\
</td></tr></table>";
RewardItems[i] = fStormpikeBattleCharger; i++;



var fLeioftheLifegiver = new RewardItem("alliance","exalted","Lei of the Lifegiver","../../../../shared/wow-com/images/basics/factions/alteracvalley/leiofthelifegiver.gif");
fLeioftheLifegiver.itemPrice = new Array();
fLeioftheLifegiver.itemPrice[0] = 450000;
fLeioftheLifegiver.itemStats = new Array();
fLeioftheLifegiver.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Lei of the Lifegiver</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 53.<br>\
Equip: Restores 3 mana per 5 sec.</span></span>\
</td></tr></table>";
RewardItems[i] = fLeioftheLifegiver; i++;


var fTherazanesTouch = new RewardItem("alliance","exalted","Therazane's Touch","../../../../shared/wow-com/images/basics/factions/alteracvalley/therazanestouch.gif");
fTherazanesTouch.itemPrice = new Array();
fTherazanesTouch.itemPrice[0] = 450000;
fTherazanesTouch.itemStats = new Array();
fTherazanesTouch.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Therazane's Touch</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 33.</span></span>\
</td></tr></table>";
RewardItems[i] = fTherazanesTouch; i++;


var fTomeofArcaneDomination = new RewardItem("alliance","exalted","Tome of Arcane Domination","../../../../shared/wow-com/images/basics/factions/alteracvalley/tomeofarcanedomination.gif");
fTomeofArcaneDomination.itemPrice = new Array();
fTomeofArcaneDomination.itemPrice[0] = 450000;
fTomeofArcaneDomination.itemStats = new Array();
fTomeofArcaneDomination.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Tome of Arcane Domination</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage done by Arcane spells and effects by up to 34.<br>\
Equip: Restores 3 mana per 5 sec.</span></span>\
</td></tr></table>";
RewardItems[i] = fTomeofArcaneDomination; i++;



var fTomeofFieryArcana = new RewardItem("alliance","exalted","Tome of Fiery Arcana","../../../../shared/wow-com/images/basics/factions/alteracvalley/tomeoffieryarcana.gif");
fTomeofFieryArcana.itemPrice = new Array();
fTomeofFieryArcana.itemPrice[0] = 450000;
fTomeofFieryArcana.itemStats = new Array();
fTomeofFieryArcana.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Tome of Fiery Arcana</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage done by Fire spells and effects by up to 40.</span></span>\
</td></tr></table>";
RewardItems[i] = fTomeofFieryArcana; i++;



var fTomeofShadowForce = new RewardItem("alliance","exalted","Tome of Shadow Force","../../../../shared/wow-com/images/basics/factions/alteracvalley/tomeofshadowforce.gif");
fTomeofShadowForce.itemPrice = new Array();
fTomeofShadowForce.itemPrice[0] = 450000;
fTomeofShadowForce.itemStats = new Array();
fTomeofShadowForce.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Tome of Shadow Force</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
+8 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage done by Shadow spells and effects by up to 34.</span></span>\
</td></tr></table>";
RewardItems[i] = fTomeofShadowForce; i++;


var fTomeoftheIceLord = new RewardItem("alliance","exalted","Tome of the Ice Lord","../../../../shared/wow-com/images/basics/factions/alteracvalley/tomeoftheicelord.gif");
fTomeoftheIceLord.itemPrice = new Array();
fTomeoftheIceLord.itemPrice[0] = 450000;
fTomeoftheIceLord.itemStats = new Array();
fTomeoftheIceLord.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Tome of the Ice Lord</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
+9 Intellect<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage done by Frost spells and effects by up to 34.</span></span>\
</td></tr></table>";
RewardItems[i] = fTomeoftheIceLord; i++;


var fTheUnstoppableForce = new RewardItem("alliance","exalted","The Unstoppable Force","../../../../shared/wow-com/images/basics/factions/alteracvalley/theunstoppableforce.gif");
fTheUnstoppableForce.itemPrice = new Array();
fTheUnstoppableForce.itemPrice[0] = 1408410;
fTheUnstoppableForce.itemStats = new Array();
fTheUnstoppableForce.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>The Unstoppable Force</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Two-Hand<span class='myRight'>Mace</span><br>\
175 - 292 Damage<span class='myRight'>Speed 3.80</span><br>\
(61.4 damage per second)<br>\
+19 Strength<br>\
+15 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 2%.<br>\
Chance on hit: Stuns target for 1 sec.</span></span>\
</td></tr></table>";
RewardItems[i] = fTheUnstoppableForce; i++;


var fTheImmovableObject = new RewardItem("alliance","exalted","The Immovable Object","../../../../shared/wow-com/images/basics/factions/alteracvalley/theimmovableobject.gif");
fTheImmovableObject.itemPrice = new Array();
fTheImmovableObject.itemPrice[0] = 715767;
fTheImmovableObject.itemStats = new Array();
fTheImmovableObject.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>The Immovable Object</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Off Hand<span class='myRight'>Shield</span><br>\
2468 Armor<br>\
44 Block<br>\
+15 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases the block value of your shield by 27.</span></span>\
</td></tr></table>";
RewardItems[i] = fTheImmovableObject; i++;



var fDonJuliosBand = new RewardItem("alliance","exalted","Don Julio's Band","../../../../shared/wow-com/images/basics/factions/alteracvalley/donjuliosband.gif");
fDonJuliosBand.itemPrice = new Array();
fDonJuliosBand.itemPrice[0] = 680000;
fDonJuliosBand.itemStats = new Array();
fDonJuliosBand.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Don Julio's Band</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+11 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 1%.<br>\
Equip: +16 Attack Power</span></span>\
</td></tr></table>";
RewardItems[i] = fDonJuliosBand; i++;


var fTheLobotomizer = new RewardItem("alliance","exalted","The Lobotomizer","../../../../shared/wow-com/images/basics/factions/alteracvalley/thelobotomizer.gif");
fTheLobotomizer.itemPrice = new Array();
fTheLobotomizer.itemPrice[0] = 1130956;
fTheLobotomizer.itemStats = new Array();
fTheLobotomizer.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>The Lobotomizer</b></span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
59 - 111 Damage<span class='myRight'>Speed 1.80</span><br>\
(47.2 damage per second)<br>\
Requires Level 60<br>\
<span class='myGreen'>Chance on hit: Wounds the target for 200 to 300 damage and lowers Intellect of target by 25 for 30 sec.</span></span>\
</td></tr></table>";
RewardItems[i] = fTheLobotomizer; i++;

var fDonRodrigosBand = new RewardItem("alliance","exalted","Don Rodrigo's Band","../../../../shared/wow-com/images/basics/factions/alteracvalley/donrodrigosband.gif");
fDonRodrigosBand.itemPrice = new Array();
fDonRodrigosBand.itemPrice[0] = 680000;
fDonRodrigosBand.itemStats = new Array();
fDonRodrigosBand.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Don Rodrigo's Band</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+7 Stamina<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Decreases the magical resistances of your spell targets by 20.</span></span>\
</td></tr></table>";
RewardItems[i] = fDonRodrigosBand; i++;
















//---Horde below

var fSuperiorHealingDraught = new RewardItem("horde","friendly","Superior Healing Draught","../../../../shared/wow-com/images/basics/factions/alteracvalley/superiorhealingdraught.gif");
fSuperiorHealingDraught.itemPrice = new Array();
fSuperiorHealingDraught.itemPrice[0] = 500;
fSuperiorHealingDraught.itemStats = new Array();
fSuperiorHealingDraught.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Superior Healing Draught</b></span><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 health. This item may only be used in Alterac Valley.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fSuperiorHealingDraught; i++;



var fSuperiorManaDraught = new RewardItem("horde","friendly","Superior Mana Draught","../../../../shared/wow-com/images/basics/factions/alteracvalley/superiormanadraught.gif");
fSuperiorManaDraught.itemPrice = new Array();
fSuperiorManaDraught.itemPrice[0] = 500;
fSuperiorManaDraught.itemStats = new Array();
fSuperiorManaDraught.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Superior Mana Draught</b></span><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 35<br>\
<span class='myGreen'>Use: Restores 560 to 720 mana. This item may only be used in Alterac Valley.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fSuperiorManaDraught; i++;



var fFrostwolfBattleTabard = new RewardItem("horde","friendly","Frostwolf Battle Tabard","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikebattletabard.gif");
fFrostwolfBattleTabard.itemPrice = new Array();
fFrostwolfBattleTabard.itemPrice[0] = 10000;
fFrostwolfBattleTabard.itemStats = new Array();
fFrostwolfBattleTabard.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Frostwolf Battle Tabard</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Tabard</span>\
</td></tr></table>";
RewardItems[i] = fFrostwolfBattleTabard; i++;





var fAlteracHeavyRuneclothBandage = new RewardItem("horde","friendly","Alterac Heavy Runecloth Bandage","../../../../shared/wow-com/images/basics/factions/alteracvalley/alteracheavyruneclothbandag.gif");
fAlteracHeavyRuneclothBandage.itemPrice = new Array();
fAlteracHeavyRuneclothBandage.itemPrice[0] = 8000;
fAlteracHeavyRuneclothBandage.itemStats = new Array();
fAlteracHeavyRuneclothBandage.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Alterac Heavy Runecloth Bandage</b></span><br>\
Binds when picked up<br>\
Requires First Aid (225)<br>\
<span class='myGreen'>Use: Heals 2000 damage over 8 sec.</span><br>\
<span class='myYellow'>&quot;May only be used in Alterac Valley.&quot;</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fAlteracHeavyRuneclothBandage; i++;



var fBottledAlteracSpringWater = new RewardItem("horde","friendly","Bottled Alterac Spring Water","../../../../shared/wow-com/images/basics/factions/alteracvalley/bottledalteracspringwater.gif");
fBottledAlteracSpringWater.itemPrice = new Array();
fBottledAlteracSpringWater.itemPrice[0] = 5000;
fBottledAlteracSpringWater.itemStats = new Array();
fBottledAlteracSpringWater.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Bottled Alterac Spring Water</b></span><br>\
Binds when picked up<br>\
Requires Level 55<br>\
<span class='myGreen'>Use: Restores 4410 mana over 30 sec. Must remain seated while drinking. Also increases your Spirit by 10 for 10 min.</span><br>\
<span class='myYellow'>&quot;From the mountain springs of Alterac!&quot;</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fBottledAlteracSpringWater; i++;










var fMajorHealingDraught = new RewardItem("horde","honored","Major Healing Draught","../../../../shared/wow-com/images/basics/factions/alteracvalley/majorhealingdraught.gif");
fMajorHealingDraught.itemPrice = new Array();
fMajorHealingDraught.itemPrice[0] = 900;
fMajorHealingDraught.itemStats = new Array();
fMajorHealingDraught.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Major Healing Draught</b></span><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 45<br>\
<span class='myGreen'>Use: Restores 980 to 1260 health. This item may only be used in Alterac Valley.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fMajorHealingDraught; i++;




var fMajorManaDraught = new RewardItem("horde","honored","Major Mana Draught","../../../../shared/wow-com/images/basics/factions/alteracvalley/majormanadraught.gif");
fMajorManaDraught.itemPrice = new Array();
fMajorManaDraught.itemPrice[0] = 900;
fMajorManaDraught.itemStats = new Array();
fMajorManaDraught.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Major Mana Draught</b></span><br>\
Binds when picked up<br>\
Unique (10)<br>\
Requires Level 45<br>\
<span class='myGreen'>Use: Restores 980 to 1260 mana. This item may only be used in Alterac Valley.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fMajorManaDraught; i++;




var fFrostwolfLegionnairesCloak = new RewardItem("horde","honored","Frostwolf Legionnaire's Cloak","../../../../shared/wow-com/images/basics/factions/alteracvalley/frostwolfcloak.gif");
fFrostwolfLegionnairesCloak.itemPrice = new Array();
fFrostwolfLegionnairesCloak.itemPrice[0] = 67950;
fFrostwolfLegionnairesCloak.itemStats = new Array();
fFrostwolfLegionnairesCloak.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Frostwolf Legionnaire's Cloak</b></span><br>\
Binds when picked up<br>\
Back<br>\
43 Armor<br>\
+11 Stamina<br>\
+5 Frost Resistance<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: +24 Attack Power</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fFrostwolfLegionnairesCloak; i++;



var fFrostwolfAdvisorsCloak = new RewardItem("horde","honored","Frostwolf Advisor's Cloak","../../../../shared/wow-com/images/basics/factions/alteracvalley/frostwolfcloak.gif");
fFrostwolfAdvisorsCloak.itemPrice = new Array();
fFrostwolfAdvisorsCloak.itemPrice[0] = 68440;
fFrostwolfAdvisorsCloak.itemStats = new Array();
fFrostwolfAdvisorsCloak.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Frostwolf Advisor's Cloak</b></span><br>\
Binds when picked up<br>\
Back<br>\
43 Armor<br>\
+11 Stamina<br>\
+5 Frost Resistance<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 14.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fFrostwolfAdvisorsCloak; i++;



var fFrostwolfLegionnairesPendant = new RewardItem("horde","honored","Frostwolf Legionnaire's Pendant","../../../../shared/wow-com/images/basics/factions/alteracvalley/frostwolflegpendant.gif");
fFrostwolfLegionnairesPendant.itemPrice = new Array();
fFrostwolfLegionnairesPendant.itemPrice[0] = 64483;
fFrostwolfLegionnairesPendant.itemStats = new Array();
fFrostwolfLegionnairesPendant.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Frostwolf Legionnaire's Pendant</b></span><br>\
Binds when picked up<br>\
Neck<br>\
+15 Stamina<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: +18 Attack Power.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fFrostwolfLegionnairesPendant; i++;




var fFrostwolfAdvisorsPendant = new RewardItem("horde","honored","Frostwolf Advisor's Pendant","../../../../shared/wow-com/images/basics/factions/alteracvalley/frostwolfadvisorspendant.gif");
fFrostwolfAdvisorsPendant.itemPrice = new Array();
fFrostwolfAdvisorsPendant.itemPrice[0] = 64483;
fFrostwolfAdvisorsPendant.itemStats = new Array();
fFrostwolfAdvisorsPendant.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Frostwolf Advisor's Pendant</b></span><br>\
Binds when picked up<br>\
Neck<br>\
+10 Stamina<br>\
+10 Intellect<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: Restores 4 mana per 5 sec.</span>\
</span>\
</td></tr></table>";
RewardItems[i] = fFrostwolfAdvisorsPendant; i++;



var fFrostwolfPlateBelt = new RewardItem("horde","honored","Frostwolf Plate Belt","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikeplategirdle.gif");
fFrostwolfPlateBelt.itemPrice = new Array();
fFrostwolfPlateBelt.itemPrice[0] = 42699;
fFrostwolfPlateBelt.itemStats = new Array();
fFrostwolfPlateBelt.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Frostwolf Plate Belt</b></span><br>\
Binds when picked up<br>\
Waist<span class='myRight'>Plate</span><br>\
353 Armor<br>\
+18 Strength<br>\
+7 Agility<br>\
+8 Stamina<br>\
+5 Frost Resistance<br>\
Requires Level 55</span>\
</td></tr></table>";
RewardItems[i] = fFrostwolfPlateBelt; i++;






var fFrostwolfMailBelt = new RewardItem("horde","honored","Frostwolf Mail Belt","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikemailgirdle.gif");
fFrostwolfMailBelt.itemPrice = new Array();
fFrostwolfMailBelt.itemPrice[0] = 64048;
fFrostwolfMailBelt.itemStats = new Array();
fFrostwolfMailBelt.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Frostwolf Mail Belt</b></span><br>\
Binds when picked up<br>\
Waist<span class='myRight'>Mail</span><br>\
199 Armor<br>\
+12 Agility<br>\
+12 Stamina<br>\
+12 Intellect<br>\
+5 Frost Resistance<br>\
Requires Level 55</span>\
</td></tr></table>";
RewardItems[i] = fFrostwolfMailBelt; i++;


var fFrostwolfLeatherBelt = new RewardItem("horde","honored","Frostwolf Leather Belt","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikeleathergirdle.gif");
fFrostwolfLeatherBelt.itemPrice = new Array();
fFrostwolfLeatherBelt.itemPrice[0] = 53374;
fFrostwolfLeatherBelt.itemStats = new Array();
fFrostwolfLeatherBelt.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Frostwolf Leather Belt</b></span><br>\
Binds when picked up<br>\
Waist<span class='myRight'>Leather</span><br>\
95 Armor<br>\
+11 Strength<br>\
+10 Agility<br>\
+15 Stamina<br>\
+5 Frost Resistance<br>\
Requires Level 55</span>\
</td></tr></table>";
RewardItems[i] = fFrostwolfLeatherBelt; i++;


var fFrostwolfClothBelt = new RewardItem("horde","honored","Frostwolf Cloth Belt","../../../../shared/wow-com/images/basics/factions/alteracvalley/stormpikeclothgirdle.gif");
fFrostwolfClothBelt.itemPrice = new Array();
fFrostwolfClothBelt.itemPrice[0] = 42699;
fFrostwolfClothBelt.itemStats = new Array();
fFrostwolfClothBelt.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Frostwolf Cloth Belt</b></span><br>\
Binds when picked up<br>\
Waist<span class='myRight'>Cloth</span><br>\
48 Armor<br>\
+11 Stamina<br>\
+10 Intellect<br>\
+5 Frost Resistance<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 18.</span></span>\
</td></tr></table>";
RewardItems[i] = fFrostwolfClothBelt; i++;


var fAlteracMannaBiscuit = new RewardItem("horde","honored","Alterac Manna Biscuit","../../../../shared/wow-com/images/basics/factions/alteracvalley/alteracmannabiscuit.gif");
fAlteracMannaBiscuit.itemPrice = new Array();
fAlteracMannaBiscuit.itemPrice[0] = 6300;
fAlteracMannaBiscuit.itemStats = new Array();
fAlteracMannaBiscuit.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myTable'><b>Alterac Manna Biscuit</b></span><br>\
Binds when picked up<br>\
Requires Level 51<br>\
<span class='myGreen'>Use: Restores 4410 health and 4410 mana over 30 sec. Must remain seated while eating.</span></span>\
</td></tr></table>";
RewardItems[i] = fAlteracMannaBiscuit; i++;

var fIceThreadedArrow = new RewardItem("horde","honored","Ice Threaded Arrow","../../../../shared/wow-com/images/basics/factions/alteracvalley/icethreadedarrow.gif");
fIceThreadedArrow.itemPrice = new Array();
fIceThreadedArrow.itemPrice[0] = 5400;
fIceThreadedArrow.itemStats = new Array();
fIceThreadedArrow.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myGreen'><b>Ice Threaded Arrow</b></span><br>\
Binds when picked up<br>\
Projectile<span class='myRight'>Arrow</span><br>\
Adds 16.5 damage per second<br>\
Requires Level 51</span>\
</td></tr></table>";
RewardItems[i] = fIceThreadedArrow; i++;



var fIceThreadedBullet = new RewardItem("horde","honored","Ice Threaded Bullet","../../../../shared/wow-com/images/basics/factions/alteracvalley/icethreadedbullet.gif");
fIceThreadedBullet.itemPrice = new Array();
fIceThreadedBullet.itemPrice[0] = 5400;
fIceThreadedBullet.itemStats = new Array();
fIceThreadedBullet.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myGreen'><b>Ice Threaded Bullet</b></span><br>\
Binds when picked up<br>\
Projectile<span class='myRight'>Bullet</span><br>\
Adds 16.5 damage per second<br>\
Requires Level 51</span>\
</td></tr></table>";
RewardItems[i] = fIceThreadedBullet; i++;







var fFrostwolfBattleStandard = new RewardItem("horde","revered","Frostwolf Battle Standard","../../../../shared/wow-com/images/basics/factions/alteracvalley/frostwolfbattlestandard.gif");
fFrostwolfBattleStandard.itemPrice = new Array();
fFrostwolfBattleStandard.itemPrice[0] = 45000;
fFrostwolfBattleStandard.itemStats = new Array();
fFrostwolfBattleStandard.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Frostwolf Battle Standard</b></span><br>\
Binds when picked up<br>\
<span class='myGreen'>Use: Place a Battle Standard with 1500 health that increases the damage of all party members that stay within 45 yards of the Battle Standard by 10%. Lasts 2 min. May only be used in Alterac Valley.</span></span>\
</td></tr></table>";
RewardItems[i] = fFrostwolfBattleStandard; i++;



var fGlacialBlade = new RewardItem("horde","revered","Glacial Blade","../../../../shared/wow-com/images/basics/factions/alteracvalley/glacialblade.gif");
fGlacialBlade.itemPrice = new Array();
fGlacialBlade.itemPrice[0] = 284853;
fGlacialBlade.itemStats = new Array();
fGlacialBlade.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Glacial Blade</b></span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
53 - 100 Damage<span class='myRight'>Speed 1.80</span><br>\
(42.5 damage per second)<br>\
+10 Agility<br>\
Requires Level 60<br>\
<span class='myGreen'>Chance on hit: Blasts a target for 45 Frost damage.</span></span>\
</td></tr></table>";
RewardItems[i] = fGlacialBlade; i++;




var fWhiteoutStaff = new RewardItem("horde","revered","Whiteout Staff","../../../../shared/wow-com/images/basics/factions/alteracvalley/whiteoutstaff.gif");
fWhiteoutStaff.itemPrice = new Array();
fWhiteoutStaff.itemPrice[0] = 358672;
fWhiteoutStaff.itemStats = new Array();
fWhiteoutStaff.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Whiteout Staff</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Two-Hand<span class='myRight'>Staff</span><br>\
138 - 207 Damage<span class='myRight'>Speed 3.10</span><br>\
(55.6 damage per second)<br>\
+25 Stamina<br>\
+16 Intellect<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 15.</span></span>\
</td></tr></table>";
RewardItems[i] = fWhiteoutStaff; i++;





var fFrostbite = new RewardItem("horde","revered","Frostbite","../../../../shared/wow-com/images/basics/factions/alteracvalley/frostbite.gif");
fFrostbite.itemPrice = new Array();
fFrostbite.itemPrice[0] = 284853;
fFrostbite.itemStats = new Array();
fFrostbite.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Frostbite</b></span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Axe</span><br>\
80 - 150 Damage<span class='myRight'>Speed 2.70</span><br>\
(42.6 damage per second)<br>\
+15 Strength<br>\
Requires Level 60<br>\
</span>\
</td></tr></table>";
RewardItems[i] = fFrostbite; i++;









var fGnollSkinBandolier = new RewardItem("horde","revered","Gnoll Skin Bandolier","../../../../shared/wow-com/images/basics/factions/alteracvalley/gnollskinbandolier.gif");
fGnollSkinBandolier.itemPrice = new Array();
fGnollSkinBandolier.itemPrice[0] = 315000;
fGnollSkinBandolier.itemStats = new Array();
fGnollSkinBandolier.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Gnoll Skin Bandolier</b></span><br>\
Binds when picked up<br>\
Unique<br>\
16 Slot Ammo Pouch<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: Increases ranged attack speed by 15%.</span></span>\
</td></tr></table>";
RewardItems[i] = fGnollSkinBandolier; i++;

var fHarpyHideQuiver = new RewardItem("horde","revered","Harpy Hide Quiver","../../../../shared/wow-com/images/basics/factions/alteracvalley/harpyhidequiver.gif");
fHarpyHideQuiver.itemPrice = new Array();
fHarpyHideQuiver.itemPrice[0] = 315000;
fHarpyHideQuiver.itemStats = new Array();
fHarpyHideQuiver.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myBlue'><b>Harpy Hide Quiver</b></span><br>\
Binds when picked up<br>\
Unique<br>\
16 Slot Quiver<br>\
Requires Level 55<br>\
<span class='myGreen'>Equip: Increases ranged attack speed by 15%.</span></span>\
</td></tr></table>";
RewardItems[i] = fHarpyHideQuiver; i++;







var fHornoftheFrostwolfHowler = new RewardItem("horde","exalted","Horn of the Frostwolf Howler","../../../../shared/wow-com/images/basics/factions/alteracvalley/frostwolfhowler.gif");
fHornoftheFrostwolfHowler.itemPrice = new Array();
fHornoftheFrostwolfHowler.itemPrice[0] = 7200000;
fHornoftheFrostwolfHowler.itemStats = new Array();
fHornoftheFrostwolfHowler.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Horn of the Frostwolf Howler</b></span><br>\
Binds when picked up<br>\
Requires Level 60<br>\
<span class='myGreen'>Use: Summons and dismisses a rideable Frostwolf Howler. This is a very fast mount.</span></span>\
</td></tr></table>";
RewardItems[i] = fHornoftheFrostwolfHowler; i++;



var fLeioftheLifegiver = new RewardItem("horde","exalted","Lei of the Lifegiver","../../../../shared/wow-com/images/basics/factions/alteracvalley/leiofthelifegiver.gif");
fLeioftheLifegiver.itemPrice = new Array();
fLeioftheLifegiver.itemPrice[0] = 450000;
fLeioftheLifegiver.itemStats = new Array();
fLeioftheLifegiver.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Lei of the Lifegiver</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases healing done by spells and effects by up to 53.<br>\
Equip: Restores 3 mana per 5 sec.</span></span>\
</td></tr></table>";
RewardItems[i] = fLeioftheLifegiver; i++;


var fTherazanesTouch = new RewardItem("horde","exalted","Therazane's Touch","../../../../shared/wow-com/images/basics/factions/alteracvalley/therazanestouch.gif");
fTherazanesTouch.itemPrice = new Array();
fTherazanesTouch.itemPrice[0] = 450000;
fTherazanesTouch.itemStats = new Array();
fTherazanesTouch.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Therazane's Touch</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage and healing done by magical spells and effects by up to 33.</span></span>\
</td></tr></table>";
RewardItems[i] = fTherazanesTouch; i++;


var fTomeofArcaneDomination = new RewardItem("horde","exalted","Tome of Arcane Domination","../../../../shared/wow-com/images/basics/factions/alteracvalley/tomeofarcanedomination.gif");
fTomeofArcaneDomination.itemPrice = new Array();
fTomeofArcaneDomination.itemPrice[0] = 450000;
fTomeofArcaneDomination.itemStats = new Array();
fTomeofArcaneDomination.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Tome of Arcane Domination</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage done by Arcane spells and effects by up to 34.<br>\
Equip: Restores 3 mana per 5 sec.</span></span>\
</td></tr></table>";
RewardItems[i] = fTomeofArcaneDomination; i++;



var fTomeofFieryArcana = new RewardItem("horde","exalted","Tome of Fiery Arcana","../../../../shared/wow-com/images/basics/factions/alteracvalley/tomeoffieryarcana.gif");
fTomeofFieryArcana.itemPrice = new Array();
fTomeofFieryArcana.itemPrice[0] = 450000;
fTomeofFieryArcana.itemStats = new Array();
fTomeofFieryArcana.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Tome of Fiery Arcana</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage done by Fire spells and effects by up to 40.</span></span>\
</td></tr></table>";
RewardItems[i] = fTomeofFieryArcana; i++;



var fTomeofShadowForce = new RewardItem("horde","exalted","Tome of Shadow Force","../../../../shared/wow-com/images/basics/factions/alteracvalley/tomeofshadowforce.gif");
fTomeofShadowForce.itemPrice = new Array();
fTomeofShadowForce.itemPrice[0] = 450000;
fTomeofShadowForce.itemStats = new Array();
fTomeofShadowForce.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Tome of Shadow Force</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
+8 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage done by Shadow spells and effects by up to 34.</span></span>\
</td></tr></table>";
RewardItems[i] = fTomeofShadowForce; i++;


var fTomeoftheIceLord = new RewardItem("horde","exalted","Tome of the Ice Lord","../../../../shared/wow-com/images/basics/factions/alteracvalley/tomeoftheicelord.gif");
fTomeoftheIceLord.itemPrice = new Array();
fTomeoftheIceLord.itemPrice[0] = 450000;
fTomeoftheIceLord.itemStats = new Array();
fTomeoftheIceLord.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Tome of the Ice Lord</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Held in Off-hand<br>\
+9 Intellect<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases damage done by Frost spells and effects by up to 34.</span></span>\
</td></tr></table>";
RewardItems[i] = fTomeoftheIceLord; i++;


var fTheUnstoppableForce = new RewardItem("horde","exalted","The Unstoppable Force","../../../../shared/wow-com/images/basics/factions/alteracvalley/theunstoppableforce.gif");
fTheUnstoppableForce.itemPrice = new Array();
fTheUnstoppableForce.itemPrice[0] = 1408410;
fTheUnstoppableForce.itemStats = new Array();
fTheUnstoppableForce.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>The Unstoppable Force</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Two-Hand<span class='myRight'>Mace</span><br>\
175 - 292 Damage<span class='myRight'>Speed 3.80</span><br>\
(61.4 damage per second)<br>\
+19 Strength<br>\
+15 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 2%.<br>\
Chance on hit: Stuns target for 1 sec.</span></span>\
</td></tr></table>";
RewardItems[i] = fTheUnstoppableForce; i++;


var fTheImmovableObject = new RewardItem("horde","exalted","The Immovable Object","../../../../shared/wow-com/images/basics/factions/alteracvalley/theimmovableobject.gif");
fTheImmovableObject.itemPrice = new Array();
fTheImmovableObject.itemPrice[0] = 715767;
fTheImmovableObject.itemStats = new Array();
fTheImmovableObject.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>The Immovable Object</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Off Hand<span class='myRight'>Shield</span><br>\
2468 Armor<br>\
44 Block<br>\
+15 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Increases the block value of your shield by 27.</span></span>\
</td></tr></table>";
RewardItems[i] = fTheImmovableObject; i++;



var fDonJuliosBand = new RewardItem("horde","exalted","Don Julio's Band","../../../../shared/wow-com/images/basics/factions/alteracvalley/donjuliosband.gif");
fDonJuliosBand.itemPrice = new Array();
fDonJuliosBand.itemPrice[0] = 680000;
fDonJuliosBand.itemStats = new Array();
fDonJuliosBand.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Don Julio's Band</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+11 Stamina<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike by 1%.<br>\
Equip: Improves your chance to hit by 1%.<br>\
Equip: +16 Attack Power</span></span>\
</td></tr></table>";
RewardItems[i] = fDonJuliosBand; i++;


var fTheLobotomizer = new RewardItem("horde","exalted","The Lobotomizer","../../../../shared/wow-com/images/basics/factions/alteracvalley/thelobotomizer.gif");
fTheLobotomizer.itemPrice = new Array();
fTheLobotomizer.itemPrice[0] = 1130956;
fTheLobotomizer.itemStats = new Array();
fTheLobotomizer.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>The Lobotomizer</b></span><br>\
Binds when picked up<br>\
Unique<br>\
One-Hand<span class='myRight'>Dagger</span><br>\
59 - 111 Damage<span class='myRight'>Speed 1.80</span><br>\
(47.2 damage per second)<br>\
Requires Level 60<br>\
<span class='myGreen'>Chance on hit: Wounds the target for 200 to 300 damage and lowers Intellect of target by 25 for 30 sec.</span></span>\
</td></tr></table>";
RewardItems[i] = fTheLobotomizer; i++;

var fDonRodrigosBand = new RewardItem("horde","exalted","Don Rodrigo's Band","../../../../shared/wow-com/images/basics/factions/alteracvalley/donrodrigosband.gif");
fDonRodrigosBand.itemPrice = new Array();
fDonRodrigosBand.itemPrice[0] = 680000;
fDonRodrigosBand.itemStats = new Array();
fDonRodrigosBand.itemStats[0] = "\
<table border='0' cellpadding='0' cellspacing='0' width='275'><tr><td>\
<span class='myTable'>\
<span class='myPurple'><b>Don Rodrigo's Band</b></span><br>\
Binds when picked up<br>\
Unique<br>\
Finger<br>\
+7 Stamina<br>\
Classes: Priest, Mage, Warlock<br>\
Requires Level 60<br>\
<span class='myGreen'>Equip: Improves your chance to get a critical strike with spells by 1%.<br>\
Equip: Decreases the magical resistances of your spell targets by 20.</span></span>\
</td></tr></table>";
RewardItems[i] = fDonRodrigosBand; i++;

//------END REWARDS DEFINITION------
