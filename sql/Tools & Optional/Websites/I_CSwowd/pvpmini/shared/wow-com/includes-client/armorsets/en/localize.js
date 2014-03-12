 // ORDER MATTERS on all arrays. Here translate and put in alphabetical order
var classArrayLocalized = new Array();
i = 0;
classArrayLocalized[i] = "Druid"; i++; // Druid
classArrayLocalized[i] = "Hunter"; i++; // Hunter
classArrayLocalized[i] = "Mage"; i++; // Mage
classArrayLocalized[i] = "Paladin"; i++; // Paladin
classArrayLocalized[i] = "Priest"; i++; // Priest
classArrayLocalized[i] = "Rogue"; i++; // Rogue
classArrayLocalized[i] = "Shaman"; i++; // Shaman
classArrayLocalized[i] = "Warlock"; i++; // Warlock
classArrayLocalized[i] = "Warrior"; // Warrior

var classArray = new Array(); // dont translate here (just order in the target alphabetical order), thats for the filenames
i = 0;
classArray[i] = "druid"; i++;
classArray[i] = "hunter"; i++;
classArray[i] = "mage"; i++;
classArray[i] = "paladin"; i++;
classArray[i] = "priest"; i++;
classArray[i] = "rogue"; i++;
classArray[i] = "shaman"; i++;
classArray[i] = "warlock"; i++;
classArray[i] = "warrior";

var posArrayT4 = {}; // used for T4 T5 set sepcifications
posArrayT4["druid"] = [1,2,3];
posArrayT4["hunter"] = [4];
posArrayT4["mage"] = [5];
posArrayT4["paladin"] = [6,7,8];
posArrayT4["priest"] = [9,10];
posArrayT4["rogue"] = [11];
posArrayT4["shaman"] = [12,13,14];
posArrayT4["warlock"] = [15];
posArrayT4["warrior"] = [16,17];

var posArrayArenaGladiator = {}; // used for Gladiator set sepcifications
posArrayArenaGladiator["druid"] = [1,2,3];
posArrayArenaGladiator["hunter"] = [4];
posArrayArenaGladiator["mage"] = [5];
posArrayArenaGladiator["paladin"] = [6,7,8];
posArrayArenaGladiator["priest"] = [9,10];
posArrayArenaGladiator["rogue"] = [11];
posArrayArenaGladiator["shaman"] = [12,13,14];
posArrayArenaGladiator["warlock"] = [15,16];
posArrayArenaGladiator["warrior"] = [17];

var posArrayLvl70PVP = {}; // used for PVP Level 70 set sepcifications
posArrayLvl70PVP["druid"] = [1,2,3];
posArrayLvl70PVP["hunter"] = [4];
posArrayLvl70PVP["mage"] = [5];
posArrayLvl70PVP["paladin"] = [6,7,8];
posArrayLvl70PVP["priest"] = [9,10];
posArrayLvl70PVP["rogue"] = [11];
posArrayLvl70PVP["shaman"] = [12,13,14];
posArrayLvl70PVP["warlock"] = [15];
posArrayLvl70PVP["warrior"] = [16];

var posArrayDungeonThree = {}; // used for Dungeon 3 set sepcifications
posArrayDungeonThree["druid"] = [1,2];
posArrayDungeonThree["hunter"] = [3,4];
posArrayDungeonThree["mage"] = [5,6];
posArrayDungeonThree["paladin"] = [7,8];
posArrayDungeonThree["priest"] = [9,6];
posArrayDungeonThree["rogue"] = [10,2];
posArrayDungeonThree["shaman"] = [11,4];
posArrayDungeonThree["warlock"] = [12,6];
posArrayDungeonThree["warrior"] = [13,8];


var raceArrayLocalized = new Array(); // translate and put in Alphabetical order
i = 0;
raceArrayLocalized[i] = "Blood Elf"; i++;
raceArrayLocalized[i] = "Draenei"; i++;
raceArrayLocalized[i] = "Dwarf"; i++;
raceArrayLocalized[i] = "Gnome"; i++;
raceArrayLocalized[i] = "Human"; i++;
raceArrayLocalized[i] = "Night Elf"; i++;
raceArrayLocalized[i] = "Orc"; i++;
raceArrayLocalized[i] = "Tauren"; i++;
raceArrayLocalized[i] = "Troll"; i++;
raceArrayLocalized[i] = "Undead";

var raceArray = new Array(); // dont translate here (just order in the target alphabetical order), thats for the filenames
i = 0;
raceArray[i] = "bloodelf"; i++;
raceArray[i] = "draenei"; i++;
raceArray[i] = "dwarf"; i++;
raceArray[i] = "gnome"; i++;
raceArray[i] = "human"; i++;
raceArray[i] = "nightelf"; i++;
raceArray[i] = "orc"; i++;
raceArray[i] = "tauren"; i++;
raceArray[i] = "troll"; i++;
raceArray[i] = "undead";

//Added*****************************
var whichFaction = new Array(); // set this array according to raceArray content
i = 0;
//Alliance = 0, Horde = 1
whichFaction[i] = 1; i++;
whichFaction[i] = 0; i++;
whichFaction[i] = 0; i++;
whichFaction[i] = 0; i++;
whichFaction[i] = 0; i++;
whichFaction[i] = 0; i++;
whichFaction[i] = 1; i++;
whichFaction[i] = 1; i++;
whichFaction[i] = 1; i++;
whichFaction[i] = 1;
//End Added**************************

var availableArray = new Array(); // this array needs to be in sync with classArrayLocalized
i = 0;
availableArray[i] = [0, 0, 0, 0, 0, 1, 0, 1, 0, 0]; i++; // Druid; nightelf, tauren (2)
availableArray[i] = [1, 1, 1, 0, 0, 1, 1, 1, 1, 0]; i++; // Hunter; dwarf, nightelf, orc, tauren, troll (5)
availableArray[i] = [1, 1, 0, 1, 1, 0, 0, 0, 1, 1]; i++; // Mage; gnome, human, troll, undead (4)
availableArray[i] = [1, 1, 1, 0, 1, 0, 0, 0, 0, 0]; i++; // Paladin; dwarf, human (2)
availableArray[i] = [1, 1, 1, 0, 1, 1, 0, 0, 1, 1]; i++; // Priest; dwarf, human, nightelf, troll, undead (5)
availableArray[i] = [1, 0, 1, 1, 1, 1, 1, 0, 1, 1]; i++; // Rogue; dwarf, gnome, human, nightelf, orc, troll, undead (7)
availableArray[i] = [0, 1, 0, 0, 0, 0, 1, 1, 1, 0]; i++; // Shaman; orc, tauren, troll (3)
availableArray[i] = [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]; i++; // Warlock; gnome, human, orc, undead (4)
availableArray[i] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // Warrior; dwarf, gnome, human, nightelf, orc, tauren, troll, undead (8)

var dblPoint = ":";
var selectArmortype = "Armor Set" + dblPoint;
var selectClass = "Class" + dblPoint;
var selectRace = "Race" + dblPoint;
var selectGender = "Gender" + dblPoint;
var selectSetSpec = "Set Specialization";

var male = "Male";
var female = "Female"

var mouseOverIcons = "&nbsp;Mouse over icons for item stats";

var armorSetsLocalized = new Array();
i = 0;
armorSetsLocalized[i] = "Dungeon Set 1"; i++;
armorSetsLocalized[i] = "Dungeon Set 2"; i++;
armorSetsLocalized[i] = "Dungeon Set 3"; i++;
armorSetsLocalized[i] = "Tier 1 Raid Set"; i++;
armorSetsLocalized[i] = "Tier 2 Raid Set"; i++;
armorSetsLocalized[i] = "Tier 3 Raid Set"; whichIsTier3 = i; i++;
armorSetsLocalized[i] = "Tier 4 Raid Set"; i++;
armorSetsLocalized[i] = "Tier 5 Raid Set"; i++;
armorSetsLocalized[i] = "PvP - Superior"; whichIsPvPSuperior = i; i++;
armorSetsLocalized[i] = "PvP - Epic"; whichIsPvPEpic = i; i++;
armorSetsLocalized[i] = "PvP - Level 70"; whichIsPvPLevel70 = i; i++;
armorSetsLocalized[i] = "Arena Gladiator Set"; whichIsArenaGladiator = i; i++;
function $(elem) { return document.getElementById(elem); }

function changeArmorSet(whichArmorSet, classNr) {
        theDungeonNumber = whichArmorSet;
        theDungeon = armorSetsValues[whichArmorSet];
    numberOfSlots = armorSetsArray[theDungeonNumber].slotsNumber;

    showItemID = 0;
    var theClassNumber2 = classNr;
        theClass = classArray[theClassNumber2];

   if (whichArmorSet == 6 || whichArmorSet == 7) { // if t4 or t5 or d3
       fillSelectSetSpec(classNr);
       setName = armorSetsArray[theDungeonNumber].setNamesArray[posArrayT4[classArray[classNr]][0]];
       showItemID = (posArrayT4[classArray[classNr]][document.forms["armorSets"].formSelectSetSpec.selectedIndex] * numberOfSlots) - numberOfSlots;
   } else if (whichArmorSet == whichIsArenaGladiator) {
       fillSelectSetSpec(classNr);
           setName = armorSetsArray[theDungeonNumber].setNamesArray[posArrayArenaGladiator[classArray[classNr]][0]];
       showItemID = (posArrayArenaGladiator[classArray[classNr]][document.forms["armorSets"].formSelectSetSpec.selectedIndex] * numberOfSlots) - numberOfSlots;
             if (classArray[classNr] == "warlock") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
   } else if (whichArmorSet == 2) {
       fillSelectSetSpec(classNr);
           setName = armorSetsArray[theDungeonNumber].setNamesArray[posArrayDungeonThree[classArray[classNr]][0]];
       showItemID = (posArrayDungeonThree[classArray[classNr]][document.forms["armorSets"].formSelectSetSpec.selectedIndex] * numberOfSlots) - numberOfSlots;
             if (classArray[classNr] == "druid") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[classNr] == "hunter") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[classNr] == "mage") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[classNr] == "paladin") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[classNr] == "priest") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[classNr] == "rogue") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[classNr] == "shaman") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[classNr] == "warlock") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[classNr] == "warrior") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);

   } else if (whichArmorSet == whichIsPvPLevel70) {
       fillSelectSetSpec(classNr);
           setName = armorSetsArray[theDungeonNumber].setNamesArray[posArrayLvl70PVP[classArray[classNr]][document.forms["armorSets"].formSelectSetSpec.selectedIndex]];
       showItemID = (posArrayLvl70PVP[classArray[classNr]][document.forms["armorSets"].formSelectSetSpec.selectedIndex] * numberOfSlots) - numberOfSlots;
   } else {
       $("selectSetSpecDiv").style.display = "none";
       setName = armorSetsArray[theDungeonNumber].setNamesArray[classNr];
       showItemID = classNr * numberOfSlots;
   }
    document.getElementById('theImage').src = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/"+ theDungeon +"/"+ theClass +"/"+ theRace +"-"+ gender +".jpg";
    document.getElementById('setName').innerHTML = setName;
    switcherooo();
        purgeSelectRace();
        fillSelectRace(theClassNumber);
}

var classChanged = 0;

function changeClass(whichClass) {
        theClassNumber = theClassNumber2 = whichClass;
        var whichClassName = classArray[whichClass];
        theClass = classArray[whichClass];

        numberOfSlots = armorSetsArray[theDungeonNumber].slotsNumber;


/* this is the order in dungeonsX.js (not changeable for easier future updates):
    1. "Druid"
    2. "Hunter"
    3. "Mage"
    4. "Paladin"
    5. "Priest"
    6. "Rouge"
    7. "Shamane"
    8. "Warlock"
    9. "Warrior"
*/

        showItemID = 0;

    theDungeonNumber = document.forms["armorSets"].formSelectArmorSet.options[document.forms["armorSets"].formSelectArmorSet.selectedIndex].value;

        purgeSelectRace();
        fillSelectRace(theClassNumber);

    if (theDungeonNumber == 6 || theDungeonNumber == 7 ) { // if t4 or t5
       fillSelectSetSpec(theClassNumber);
       setName = armorSetsArray[theDungeonNumber].setNamesArray[posArrayT4[classArray[theClassNumber]][0]];
       showItemID = (posArrayT4[classArray[whichClass]][document.forms["armorSets"].formSelectSetSpec.selectedIndex] * numberOfSlots) - numberOfSlots;
   } else if (theDungeonNumber == whichIsArenaGladiator) {
       fillSelectSetSpec(theClassNumber);
       setName = armorSetsArray[theDungeonNumber].setNamesArray[posArrayArenaGladiator[classArray[theClassNumber]][0]];
       showItemID = (posArrayArenaGladiator[classArray[whichClass]][document.forms["armorSets"].formSelectSetSpec.selectedIndex] * numberOfSlots) - numberOfSlots;
           if (classArray[whichClass] == "warlock") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
   } else if (theDungeonNumber == whichIsPvPLevel70) {
       fillSelectSetSpec(theClassNumber);
       setName = armorSetsArray[theDungeonNumber].setNamesArray[posArrayLvl70PVP[classArray[theClassNumber]][0]];
       showItemID = (posArrayLvl70PVP[classArray[whichClass]][document.forms["armorSets"].formSelectSetSpec.selectedIndex] * numberOfSlots) - numberOfSlots;
   } else if (theDungeonNumber == 2) {
       fillSelectSetSpec(theClassNumber);
       setName = armorSetsArray[theDungeonNumber].setNamesArray[posArrayDungeonThree[classArray[theClassNumber]][0]];
       showItemID = (posArrayDungeonThree[classArray[whichClass]][document.forms["armorSets"].formSelectSetSpec.selectedIndex] * numberOfSlots) - numberOfSlots;
           if (classArray[whichClass] == "druid") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[whichClass] == "hunter") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[whichClass] == "mage") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[whichClass] == "priest") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[whichClass] == "paladin") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[whichClass] == "rogue") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[whichClass] == "shaman") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[whichClass] == "warlock") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
           if (classArray[whichClass] == "warrior") theClass = theClass + (document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1);
   } else {
       setName = armorSetsArray[theDungeonNumber].setNamesArray[theClassNumber];
       showItemID = theClassNumber * numberOfSlots;
   }

        if (availableArray[theClassNumber][theRaceNumber] == 0) {
                b = 0;
                while (availableArray[theClassNumber][b] == 0) {
                        b++;
                }
        classChanged = 1;
             changeRace(b);
        }
        document.getElementById('theImage').src = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/"+ theDungeon +"/"+ theClass +"/"+ theRace +"-"+ gender +".jpg";
    document.getElementById('setName').innerHTML = setName;

    switcherooo();


}