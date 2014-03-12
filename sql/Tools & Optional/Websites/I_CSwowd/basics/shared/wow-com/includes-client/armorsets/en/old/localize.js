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
classArrayLocalized[i] = "Warrior"; i++; // Warrior

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
classArray[i] = "warrior"; i++;


var raceArrayLocalized = new Array(); // translate and put in Alphabetical order
i = 0;
raceArrayLocalized[i] = "Dwarf"; i++;
raceArrayLocalized[i] = "Gnome"; i++;
raceArrayLocalized[i] = "Human"; i++;
raceArrayLocalized[i] = "Night Elf"; i++;
raceArrayLocalized[i] = "Orc"; i++;
raceArrayLocalized[i] = "Tauren"; i++;
raceArrayLocalized[i] = "Troll"; i++;
raceArrayLocalized[i] = "Undead"; i++;

var raceArray = new Array(); // dont translate here (just order in the target alphabetical order), thats for the filenames
i = 0;
raceArray[i] = "dwarf"; i++;
raceArray[i] = "gnome"; i++;
raceArray[i] = "human"; i++;
raceArray[i] = "nightelf"; i++;
raceArray[i] = "orc"; i++;
raceArray[i] = "tauren"; i++;
raceArray[i] = "troll"; i++;
raceArray[i] = "undead"; i++;

//Added*****************************
var whichFaction = new Array(); // set this array according to raceArray content
i = 0;
//Alliance = 0, Horde = 1
whichFaction[i] = 0; i++;
whichFaction[i] = 0; i++;
whichFaction[i] = 0; i++;
whichFaction[i] = 0; i++;
whichFaction[i] = 1; i++;
whichFaction[i] = 1; i++;
whichFaction[i] = 1; i++;
whichFaction[i] = 1; i++;
//End Added**************************

var availableArray = new Array(); // this array needs to be in sync with classArrayLocalized
i = 0;
availableArray[i] = [0, 0, 0, 1, 0, 1, 0, 0]; i++; // Druid; nightelf, tauren (2)
availableArray[i] = [1, 0, 0, 1, 1, 1, 1, 0]; i++; // Hunter; dwarf, nightelf, orc, tauren, troll (5)
availableArray[i] = [0, 1, 1, 0, 0, 0, 1, 1]; i++; // Mage; gnome, human, troll, undead (4)
availableArray[i] = [1, 0, 1, 0, 0, 0, 0, 0]; i++; // Paladin; dwarf, human (2)
availableArray[i] = [1, 0, 1, 1, 0, 0, 1, 1]; i++; // Priest; dwarf, human, nightelf, troll, undead (5)
availableArray[i] = [1, 1, 1, 1, 1, 0, 1, 1]; i++; // Rogue; dwarf, gnome, human, nightelf, orc, troll, undead (7)
availableArray[i] = [0, 0, 0, 0, 1, 1, 1, 0]; i++; // Shaman; orc, tauren, troll (3)
availableArray[i] = [0, 1, 1, 0, 1, 0, 0, 1]; i++; // Warlock; gnome, human, orc, undead (4)
availableArray[i] = [1, 1, 1, 1, 1, 1, 1, 1]; i++; // Warrior; dwarf, gnome, human, nightelf, orc, tauren, troll, undead (8)

var dblPoint = ":";
var selectArmortype = "Armor Set" + dblPoint;
var selectClass = "Class" + dblPoint;
var selectRace = "Race" + dblPoint;
var selectGender = "Gender" + dblPoint;

var male = "Male";
var female = "Female"

var mouseOverIcons = "&nbsp;Mouse over icons for item stats";

var armorSetsLocalized = new Array();
i = 0;
armorSetsLocalized[i] = "Dungeon Set 1"; i++;
armorSetsLocalized[i] = "Dungeon Set 2"; i++;
armorSetsLocalized[i] = "Tier 1 Raid Set"; i++;
armorSetsLocalized[i] = "Tier 2 Raid Set"; i++;
armorSetsLocalized[i] = "Tier 3 Raid Set"; whichIsTier3 = i; i++;
armorSetsLocalized[i] = "PvP - Superior"; whichIsPvPSuperior = i; i++;
armorSetsLocalized[i] = "PvP - Epic"; whichIsPvPEpic = i; i++;

function changeArmorSet(whichArmorSet, classNr) {
        theDungeonNumber = whichArmorSet;
        theDungeon = armorSetsValues[whichArmorSet];
    numberOfSlots = armorSetsArray[theDungeonNumber].slotsNumber;
    showItemID = 0;
    var theClassNumber2 = classNr;

        switch (classNr) { // case 0 is the first position in classArrayLocalized, the second 0 points to the first set in dungeons1.js (position - 1) and so on..
            case 0: // Druid
                showItemID = 0 * numberOfSlots;
                setName = armorSetsArray[theDungeonNumber].setNamesArray[0];
            break;
            case 1: // Hunter
                showItemID = 1 * numberOfSlots;
                setName = armorSetsArray[theDungeonNumber].setNamesArray[1];
            break;
                    case 2: // Mage
                showItemID = 2 * numberOfSlots;
                setName = armorSetsArray[theDungeonNumber].setNamesArray[2];
            break;
                    case 3:  // Paladin
                showItemID = 3 * numberOfSlots;
                setName = armorSetsArray[theDungeonNumber].setNamesArray[3];
            break;
                    case 4:  // Priest
                showItemID = 4 * numberOfSlots;
                setName = armorSetsArray[theDungeonNumber].setNamesArray[4];
            break;
                    case 5:  // Rogue
                showItemID = 5 * numberOfSlots;
                setName = armorSetsArray[theDungeonNumber].setNamesArray[5];
            break;
                    case 6:  // Shaman
                showItemID = 6 * numberOfSlots;
                setName = armorSetsArray[theDungeonNumber].setNamesArray[6];
            break;
                    case 7: // Warlock
                showItemID = 7 * numberOfSlots;
                setName = armorSetsArray[theDungeonNumber].setNamesArray[7];
            break;
            case 8: // Warrior
                showItemID = 8 * numberOfSlots;
                setName = armorSetsArray[theDungeonNumber].setNamesArray[8];
            break;
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
        whichClass = classArray[whichClass];
        theClass = whichClass;

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

    switch (theClassNumber) { // case 0 is the first position in classArrayLocalized, the second 0 points to the first set in dungeons1.js (position - 1) and so on..
        case "0": // Druid
            showItemID = 0 * numberOfSlots;
            setName = armorSetsArray[theDungeonNumber].setNamesArray[0];
        break
        case "1": // Hunter
            showItemID = 1 * numberOfSlots;
            setName = armorSetsArray[theDungeonNumber].setNamesArray[1];
        break
                case "2": // Mage
            showItemID = 2 * numberOfSlots;
            setName = armorSetsArray[theDungeonNumber].setNamesArray[2];
        break
                case "3":  // Paladin
            showItemID = 3 * numberOfSlots;
            setName = armorSetsArray[theDungeonNumber].setNamesArray[3];
        break
                case "4":  // Priest
            showItemID = 4 * numberOfSlots;
            setName = armorSetsArray[theDungeonNumber].setNamesArray[4];
        break
                case "5":  // Rogue
            showItemID = 5 * numberOfSlots;
            setName = armorSetsArray[theDungeonNumber].setNamesArray[5];
        break
                case "6":  // Shaman
            showItemID = 6 * numberOfSlots;
            setName = armorSetsArray[theDungeonNumber].setNamesArray[6];
        break
                case "7": // Warlock
            showItemID = 7 * numberOfSlots;
            setName = armorSetsArray[theDungeonNumber].setNamesArray[7];
        break
        case "8": // Warrior
            showItemID = 8 * numberOfSlots;
            setName = armorSetsArray[theDungeonNumber].setNamesArray[8];
        break
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

        purgeSelectRace();
        fillSelectRace(theClassNumber);
}