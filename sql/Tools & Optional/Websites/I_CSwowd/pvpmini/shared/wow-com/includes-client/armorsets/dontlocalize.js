var armorSetsValues = new Array();

function purgeSelectRace() {
        document.forms["armorSets"].formSelectRace.options.length = 0;
}

function fillSelectRace(whichClassID) {
        savedCounter = 0;
        selectCounter = 0;
        counter = 0;
        while (counter < raceArray.length) {
                if (availableArray[whichClassID][counter]){
                        document.forms["armorSets"].formSelectRace.options[selectCounter] = new Option(raceArrayLocalized[counter], counter);
                        if (counter == theRaceNumber)
                                savedCounter = selectCounter;
                        selectCounter++;
                }
                counter++;
        }
        document.forms["armorSets"].formSelectRace.selectedIndex = savedCounter;
}

function getSetArray () {
        var dung = parseInt(document.forms["armorSets"].formSelectArmorSet.options[document.forms["armorSets"].formSelectArmorSet.selectedIndex].value);
        var setArray = {};
        switch (dung) {
                case 2: setArray = posArrayDungeonThree; break;
                case 6: setArray = posArrayT4; break;
                case 7: setArray = posArrayT4; break;
                case whichIsArenaGladiator: setArray = posArrayArenaGladiator; break;
                case whichIsPvPLevel70: setArray = posArrayLvl70PVP; break;

        }
        return setArray;
}

function fillSelectSetSpec(whichClassID) {
        var setArray = getSetArray();
        $("selectSetSpecDiv").style.display = (setArray[classArray[whichClassID]].length > 1) ? "block" : "none";
    document.forms["armorSets"].formSelectSetSpec.options.length = 0;
    for (var x = 0; x < setArray[classArray[whichClassID]].length; x++) {
            document.forms["armorSets"].formSelectSetSpec.options[x] = new Option(armorSetsArray[theDungeonNumber].setNamesArray[setArray[classArray[whichClassID]][x]], (x + 1));
    }
}

function changeClassColors(whichRaceID) {
        for (var i = 0; i < availableArray.length; i++) {
                if (availableArray[i][whichRaceID])
                        document.getElementById('option'+classArray[i]).className = "orange";
                else
                        document.getElementById('option'+classArray[i]).className = "gray";
        }
}

function changeRace(whichRace) {
        changeClassColors(whichRace);
        theRace = raceArray[whichRace];
        theRaceNumber = whichRace;
        document.getElementById('theImage').src = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/"+ theDungeon +"/"+ theClass +"/"+ theRace +"-"+ gender +".jpg";

    if (theDungeonNumber == whichIsPvPSuperior || theDungeonNumber == whichIsPvPEpic) {
                numberOfSlots = armorSetsArray[theDungeonNumber].slotsNumber;
                showItemID = theClassNumber2 * numberOfSlots;
        if(classChanged == 1) showItemID = showItemID - 6;
        switcherooo();
        classChanged = 0;
        } else if (theDungeonNumber == whichIsPvPLevel70) {
                numberOfSlots = armorSetsArray[theDungeonNumber].slotsNumber;
                showItemID = (posArrayLvl70PVP[classArray[theClassNumber]][document.forms["armorSets"].formSelectSetSpec.selectedIndex] * numberOfSlots) - numberOfSlots;
        if(classChanged == 1) showItemID = showItemID - numberOfSlots;
        switcherooo();
        classChanged = 0;
        }
}

function changeGender(whichGender) {
        gender = whichGender;
        document.getElementById('theImage').src = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/"+ theDungeon +"/"+ theClass +"/"+ theRace +"-"+ gender +".jpg";
}

function changeURL(whichSet) {
        document.location.href = whichSet +".html?"+ whichSet +","+ theClassNumber + ","+ theRaceNumber +","+gender;
}

function armorSetObject(directory, slotsNumber, slotsArray, statsArray) {
        this.directory = directory;
        this.slotsNumber = slotsNumber;
        this.slotsArray = slotsArray;
        this.statsArray = statsArray;
}

function switcherooo() {
thisString = "<table><tr><td colspan='2'><img src='/shared/wow-com/images/layout/pixel.gif' height='2'></td></tr>";

tooltipString = '<table cellspacing = "0" cellpadding = "0" border = "0" width = "275"><tr><td><span class = "myTable">';
endtooltipString = '</span></td></tr></table>';

          if (theDungeonNumber == whichIsPvPSuperior) {
                for (var i=0; i < armorSetsArray[theDungeonNumber].slotsArray.length; i++) {
                        if (i%2 == 0)
                                thisString = thisString + "<tr>";
                        thisString = thisString + '<td width = "68" height = "68" background = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/'+ armorSetsValues[theDungeonNumber] +'/'+ classArray[theClassNumber] +'/'+ armorSetsArray[theDungeonNumber].slotsArray[i] +'.jpg" style = "background-repeat: no-repeat; background-position: center center;"><span onMouseover="ddrivetip(tooltipString + armorSetPvPSuperior.itemNameArray['+showItemID+'][whichFaction['+theRaceNumber+']] + armorSetsArray[theDungeonNumber].statsArray['+showItemID+'] + armorSetPvPSuperior.setNameArray['+ theClassNumber2 +'][whichFaction['+theRaceNumber+']] + endtooltipString)"; onMouseout="hideddrivetip();"><img src = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/icon-over.gif" border = "0" width = "68" height = "68"></span></td>';
                        if (i%2 == 1)
                                thisString = thisString +"</tr>";
                        showItemID++;
                }
        } else if (theDungeonNumber == whichIsPvPEpic){
                for (var i=0; i < armorSetsArray[theDungeonNumber].slotsArray.length; i++) {
                        if (i%2 == 0)
                                thisString = thisString + "<tr>";
                        thisString = thisString + '<td width = "68" height = "68" background = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/'+ armorSetsValues[theDungeonNumber] +'/'+ classArray[theClassNumber] +'/'+ armorSetsArray[theDungeonNumber].slotsArray[i] +'.jpg" style = "background-repeat: no-repeat; background-position: center center;"><span onMouseover="ddrivetip(tooltipString + armorSetPvPEpic.itemNameArray['+showItemID+'][whichFaction['+theRaceNumber+']] + armorSetsArray[theDungeonNumber].statsArray['+showItemID+'] + armorSetPvPEpic.setNameArray['+ theClassNumber2 +'][whichFaction['+theRaceNumber+']] + endtooltipString)"; onMouseout="hideddrivetip();"><img src = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/icon-over.gif" border = "0" width = "68" height = "68"></span></td>';
                        if (i%2 == 1)
                                thisString = thisString +"</tr>";
                        showItemID++;
                }
        } else if (theDungeonNumber == whichIsPvPLevel70){
        theLength = armorSetsArray[theDungeonNumber].slotsNumber;
                var setSpec = document.forms["armorSets"].formSelectSetSpec.selectedIndex
                thisClass = Math.round(showItemID/5);
                for (var i=0; i < theLength; i++) {
                        if (theLength%2 == 1 && i == armorSetsArray[theDungeonNumber].slotsArray.length - 1)
                                writeColspan = "colspan = 2 align = center";
                        else
                                writeColspan = "width = 68";
                        if (i%2 == 0)
                                thisString = thisString + "<tr>";
                        thisString = thisString + '<td '+ writeColspan +' height = 68 background = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/'+ armorSetsValues[theDungeonNumber] +'/'+ classArray[theClassNumber] +'/'+ armorSetsArray[theDungeonNumber].slotsArray[i] +'.jpg" style = "background-repeat: no-repeat; background-position: center center;"><span onMouseover="ddrivetip(tooltipString + armorSetsArray[theDungeonNumber].itemNameArray['+showItemID+'][whichFaction['+theRaceNumber+']] + armorSetsArray[theDungeonNumber].statsArray['+showItemID+'] + armorSetsArray[theDungeonNumber].setNameArray['+ thisClass +'][whichFaction['+theRaceNumber+']] + endtooltipString)"; onMouseout="hideddrivetip();"><img src = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/icon-over.gif" border = "0" width = "68" height = "68"></span></td>';
                        if (i%2 == 1)
                                thisString = thisString +"</tr>";
                        showItemID++;
                }
    }else {
        theLength = armorSetsArray[theDungeonNumber].slotsNumber;
        var theIndex = (theDungeonNumber == 2) ? document.forms["armorSets"].formSelectSetSpec.selectedIndex + 1 : "";
                for (var i=0; i < theLength; i++) {
                        if (theLength%2 == 1 && i == armorSetsArray[theDungeonNumber].slotsArray.length - 1)
                                writeColspan = "colspan = 2 align = center";
                        else
                                writeColspan = "width = 68";
                        if (i%2 == 0)
                                thisString = thisString + "<tr>";
                        thisString = thisString + '<td '+ writeColspan +' height = 68 background = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/'+ armorSetsValues[theDungeonNumber] +'/'+ classArray[theClassNumber] + '' + theIndex + '/'+ armorSetsArray[theDungeonNumber].slotsArray[i] +'.jpg" style = "background-repeat: no-repeat; background-position: center center;"><span onMouseover="ddrivetip(armorSetsArray[theDungeonNumber].statsArray['+showItemID+'])"; onMouseout="hideddrivetip();"><img src = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/icon-over.gif" border = "0" width = "68" height = "68"></span></td>';
                        if (i%2 == 1)
                                thisString = thisString +"</tr>";
                        showItemID++;
                }
        }

        thisString = thisString + "</table>";

  document.getElementById("uberLeet").innerHTML = thisString;
}

var armorSetsArray = new Array();

function changeSetSpec (setNumber, classNr) {
    theClass = classArray[classNr];
    numberOfSlots = armorSetsArray[theDungeonNumber].slotsNumber;
        var setArray = getSetArray();
    showItemID = (setArray[classArray[classNr]][setNumber - 1] * numberOfSlots) - numberOfSlots;
    setName = armorSetsArray[theDungeonNumber].setNamesArray[setArray[classArray[classNr]][setNumber - 1]];

    if (theDungeonNumber == 2) {
        theClass = theClass + (setNumber);
    } else {
        if (classArray[classNr] == "warlock") theClass = theClass + (setNumber);
    }

    document.getElementById('theImage').src = "http://www.wow-europe.com/shared/wow-com/images/basics/armorsets/"+ theDungeon +"/"+ theClass +"/"+ theRace +"-"+ gender +".jpg";
    document.getElementById('setName').innerHTML = setName;
    switcherooo();
        purgeSelectRace();
        fillSelectRace(theClassNumber);
}