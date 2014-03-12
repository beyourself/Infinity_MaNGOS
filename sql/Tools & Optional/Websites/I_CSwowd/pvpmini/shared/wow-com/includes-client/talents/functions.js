var colorGreen = "1AFF1A";
var colorYellow = "FFD100";
var colorWhite = "FFFFFF";


function saveTheTemplate() {

        var templateString = "";
        for (i = 0; talent[i]; i++) {
                templateString = templateString + rankTop[i][0]
        }

        if (is_ie4up)
            var w = window.open("","","resizable=0,toolbar=1,width=850,height=155,status=1,scrollbars=1,menubar=1, screenX=100, screenY=100, left=100, top=100");
        else
            var w = window.open("","","resizable=0,toolbar=1,width=850,height=175,status=1,scrollbars=1,menubar=1, screenX=100, screenY=100, left=100, top=100");

        w.document.write("<html>");

        w.document.write('<body marginheight = 0 marginwidth = 0 topmargin = 0 leftmargin = 0 bgcolor = "#000000"><center><table cellspacing = "0" cellpadding = "0" border = "0" width = "100%"><tr><td><img src = "../../../../../info/classes/includes-new/images/bot-box/top-left.html"></td>');
        w.document.write('<td width = "100%" background = "../../../../../info/classes/includes-new/images/bot-box/top.html"></td><td><img src = "../../../../../info/classes/includes-new/images/bot-box/top-right.html"></td></tr>        <tr>');
        w.document.write('<td background = "/info/classes/includes-new/images/bot-box/left.gif" valign = "top"><img src = "/shared/wow-com/images/layout/pixel.gif" width = "10" height = "1"></td><td align="center" width = "100%"><table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "background-image: url(\'/links/images/border-right.gif\'); background-repeat: repeat-y; background-position: right;">');
        w.document.write('<tr><td align = center><table cellspacing = "0" cellpadding = "0" border = "0"><tr><td>');

        w.document.write("<h3><span style = 'color: ffffff;'>Saving the Template</span></h3>");
        w.document.write("<span style = 'font-family: tahoma, arial; font-size: 10pt; color: ffffff'><b>"+copyurl+"</b><br>");
        w.document.write("http://www.krillins.com/"+lg+"/info/basics/talents/"+ nlclass +"/talents.html?" +templateString);

        w.document.write('</td></tr></table></td></tr></table></td><td background = "/info/classes/includes-new/images/bot-box/right.gif" valign = "top"><img src = "/shared/wow-com/images/layout/pixel.gif" width = "14" height = "145"></td></tr>');
        w.document.write('        <tr><td><img src = "../../../../../info/classes/includes-new/images/bot-box/bot-left.html"></td>        <td width = "100%" background = "../../../../../info/classes/includes-new/images/bot-box/bot.html"></td>                        <td width = "14"><img src = "../../../../../info/classes/includes-new/images/bot-box/bot-right.html"></td>                </tr>                </table>                                        ');
        w.document.write('</center></body></html>');


}

function resetTree(theTree) {

        if (pointsTree[theTree] == 0)
                return;

        maxTierArray[theTree] = 1;
        rankPoints += pointsTree[theTree];
        pointsTree[theTree] = 0;

        document.getElementById(tree[theTree]+'PointsTopRight').innerHTML = 0;

        for (var y = 0; y < tierNum; y++)
                pointsTier[theTree][y] = 0;


        var i;
        var iStop;
        if (theTree == 0)
                i = 0;
        else
                i = treeStartStop[theTree-1] + 1;

        iStop = treeStartStop[theTree];

        while (i <= iStop) {
                rankTop[i][0] = 0;
                rankTop[i][1] = rank[i][0];
                rankTop[i][2] = rank[i][1];

                document.getElementById("modifyRankTopColor"+ i).style.color = colorWhite;
                document.getElementById("modifyRankTop"+ i).style.color = colorWhite;

                   document.getElementById('modifyDescriptionTop'+i).innerHTML = rankTop[i][1];
                if (talent[i][5]) {
                        document.getElementById("arrowYellow"+ i).style.visibility = "hidden";
                        document.getElementById("arrowGreen"+ i).style.visibility = "hidden";
                }

                document.getElementById('modifyRankTopDescription'+i).innerHTML = 0;
                document.getElementById('modifyRankTop'+i).innerHTML = 0;
                document.getElementById('talentThumb'+ i).style.visibility = "hidden";

                document.getElementById('iconOverGreen'+ i).style.visibility = "hidden";
                document.getElementById('iconOverYellow'+ i).style.visibility = "hidden";

                if (talent[i][4] == 1 && (!talent[i][5])) {
                        document.getElementById("modifyRankTopColor"+ i).style.color = colorGreen;
                        document.getElementById("modifyRankTop"+ i).style.color = colorGreen;
                }
                i++;
        }

    document.getElementById('levelRequired').innerHTML = rankPointsMax - rankPoints + levelMin - 1;
        document.getElementById('modifyRankPoints').innerHTML = rankPointsMax - rankPoints;
        document.getElementById('tabPointsAvailable').innerHTML = rankPoints;
        document.getElementById(tree[theTree]+'tabPoints').innerHTML = 0;

}

function resetTreeAll() {
        for (var i = 0; i < tree.length; i++) {
                resetTree(i);
        }
}

function getMaxTier(theTree) {
        var maxTier = 0;
        for (var loopMaxTier = 0; loopMaxTier < tierNum; loopMaxTier++) {
                if (pointsTier[theTree][loopMaxTier] != 0)
                        maxTier = loopMaxTier;
        }
        maxTier++;
        return maxTier;
}

function getPointsAboveAndCurrent(theTree, maxTier) {
        var pointsTierTotalAboveAndCurrent = 0;
        var loopPointsTierAbove = 0;
        for (loopPointsTierAbove; loopPointsTierAbove < maxTier; loopPointsTierAbove++) {
                pointsTierTotalAboveAndCurrent += pointsTier[theTree][loopPointsTierAbove];
        }
        return pointsTierTotalAboveAndCurrent;
}

function canUnlearn(talentID, clickLeftRight, maxTier) {
        var treeID = talent[talentID][0];
        var maxRank = talent[talentID][2];
        var treePoints = pointsTree[treeID];
        var necessaryPoints;
        var projectedPoints;
        var pointsAboveAndCurrent;

        if (hasDependentTalentWithPoints(talentID))
                return false;

        if (clickLeftRight == 0) { //left click

                var theCurrentRank = rankTop[talentID][0];
                if (theCurrentRank < maxRank) {

                        necessaryPoints = (talent[talentID][4] - 1) * 5;
                        if (treePoints < necessaryPoints)
                                return false;

                        if (rankPoints == 0)
                                return false;

                        if (!checkRequiredTalent(talentID) && theCurrentRank == 0)
                                return false;

                        projectedPoints = pointsAboveAndCurrent++;

                } else {
                        return false;
                }

        } else {        //right click

                if (rankTop[talentID][0] != 0){

                        pointsAboveAndCurrent = getPointsAboveAndCurrent(treeID, maxTier-1);
                        projectedPoints = pointsAboveAndCurrent - 1 + pointsTier[treeID][maxTier-1];

                        for (var thisTier = talent[talentID][4]; thisTier < maxTier; maxTier--) {

                                necessaryPoints = (maxTier-1) *5;
                                projectedPoints -= pointsTier[treeID][maxTier-1];
                                if (projectedPoints < necessaryPoints)
                                        return false;
                        }

                } else {  //if the rank is 0

                        return false;
                }

        }
        return true;

}

function getTalentID(talentName) {
        var theTalentID;
        for (theTalentID = 0; talent[theTalentID]; theTalentID++) {
                if (talent[theTalentID][1] == talentName)
                        return theTalentID;
        }
}

function getMinLevel(talentID) {
        return ((talent[talentID][4] -1)* 5 + 10);
}

function hasDependentTalentWithPoints(talentID) {

        var loopStart;
        var loopStop;
        var theTree = talent[talentID][0];

        loopStart = talentID;
        loopStop = treeStartStop[theTree];

        while (loopStart <= loopStop){
                if (talent[loopStart][5] && talent[loopStart][5][0] == talentID && rankTop[loopStart][0] != 0)
                        return true;
                loopStart++;
        }
        return false;

}

function canTurnGreen(totalPoints, tree, oldMaxTier) {
        var i;
        var necessaryPoints;
        var iStop;
        var thisTier;

        if (tree == 0)
                i = 0;
        else
                i = treeStartStop[tree-1] + 1;

        iStop = treeStartStop[tree];

        while (i <= iStop) {

                thisTier = talent[i][4];

                necessaryPoints = (thisTier-1) * 5;

                if (thisTier <= oldMaxTier+3 || necessaryPoints <= totalPoints){

                        var noRequirement = checkRequiredTalent(i);

                        var theCurrentRank = rankTop[i][0];
                        var theMaxRank = talent[i][2];

                        if ((talent[i][4] * 5) <= totalPoints && theCurrentRank != theMaxRank && noRequirement
                                ||
                                (theCurrentRank < theMaxRank && necessaryPoints <= totalPoints && noRequirement)
                                ) {

                                document.getElementById("modifyRankTopColor"+ i).style.color = colorGreen;
                                document.getElementById("modifyRankTop"+ i).style.color = colorGreen;


                                if (canUnlearn(i, 0, oldMaxTier)) {
                                        if (talent[i][5])
                                                document.getElementById("arrowGreen"+ i).style.visibility = "visible";
                                }

                        } else if (theCurrentRank == theMaxRank) {
                                document.getElementById("modifyRankTopColor"+ i).style.color = colorYellow;
                                document.getElementById("modifyRankTop"+ i).style.color = colorYellow;

                        } else {
                                document.getElementById("modifyRankTopColor"+ i).style.color = colorWhite;
                                document.getElementById("modifyRankTop"+ i).style.color = colorWhite;

                                document.getElementById("iconOverGreen"+ i).style.visibility = "hidden";

                                if (talent[i][5])
                                        document.getElementById("arrowGreen"+ i).style.visibility = "hidden";

                        }
                }
                i++;
        }

        i=0;
        if (rankPoints == 0) {
                while (talent[i]){
                        if (rankTop[i][0] == 0) {
                                document.getElementById("modifyRankTopColor"+ i).style.color = colorWhite;
                                document.getElementById("modifyRankTop"+ i).style.color = colorWhite;
                                document.getElementById("iconOverGreen"+ i).style.visibility = "hidden";
                        }
                        i++;
                }
        }

}

function checkRequiredTalent(talentID) {

        var reqTalent;
        if (reqTalent = talent[talentID][5]) {
                reqTalentID = reqTalent[0];
                reqTalentPoints = reqTalent[1];
                if (rankTop[reqTalentID][0] != reqTalentPoints)
                        return false;
        }
        return true;
}

function rankTopOnClick(talentID) {

        var theTree = talent[talentID][0];
//        var oldMaxTier = getMaxTier(theTree);
        var oldMaxTier = maxTierArray[theTree];

        if (!canUnlearn(talentID, 0, oldMaxTier))
                return;

        maxRank = talent[talentID][2];                                        //maximum rank possible
        var theTier = talent[talentID][4];
        var theTierIndex = theTier - 1;
        var rankString = rankTop[talentID][1];

        var theCurrentRank = rankTop[talentID][0];

        if (theCurrentRank < maxRank) {                                        //see if you hit max rank
                rankTop[talentID][1] = rank[talentID][theCurrentRank];
                rankTop[talentID][0]++;                                                //if you haven't hit max rank, increment
                theUpdatedRank = rankTop[talentID][0];
                rankTop[talentID][2] = rank[talentID][theUpdatedRank];
                rankPoints--;
                if (theUpdatedRank != maxRank) {
                        rankString = rankTop[talentID][1] +"<br><br><font color=ffffff>"+textNextRank+"</font><br>"+ rankTop[talentID][2];
                        document.getElementById('iconOverGreen'+ talentID).style.visibility = "visible";
                        if (theUpdatedRank == 1 && theTier > oldMaxTier)
                                maxTierArray[theTree] = theTier;
                } else {
                        rankString = rankTop[talentID][1];
                        document.getElementById('iconOverYellow'+ talentID).style.visibility = "visible";
                }
                if (talent[talentID][5])
                        document.getElementById("arrowYellow"+ talentID).style.visibility = "visible";
                //keep track of points in the tier
                pointsTree[theTree]++;
                pointsTier[theTree][theTierIndex] = pointsTier[theTree][theTierIndex] + 1;
        }

        document.getElementById("talentThumb"+ talentID).style.visibility = "visible";

        if (pointsTree[theTree] == 1)
                document.getElementById(tree[theTree]+'tabPointsText').innerHTML = textPoint;
        else
                document.getElementById(tree[theTree]+'tabPointsText').innerHTML = textPoints;
        document.getElementById('modifyDescriptionTop'+talentID).innerHTML = rankString;
    document.getElementById('modifyRankTop'+talentID).innerHTML = rankTop[talentID][0];
    document.getElementById('modifyRankTopDescription'+talentID).innerHTML = rankTop[talentID][0];
    document.getElementById('modifyRankPoints').innerHTML = rankPointsMax - rankPoints;
    document.getElementById('levelRequired').innerHTML = rankPointsMax - rankPoints + levelMin - 1;
    document.getElementById(tree[theTree]+'PointsTopRight').innerHTML = pointsTree[theTree];
    document.getElementById('tabPointsAvailable').innerHTML = rankPoints;
    document.getElementById(tree[theTree]+'tabPoints').innerHTML = pointsTree[theTree];
        canTurnGreen(pointsTree[theTree], theTree, oldMaxTier);

        changeCopyURL();

}

function changeCopyURL(){

        var templateString = "";

//        loopStop = treeStartStop[0] + 1;
/*
        for (var bah = 0; bah < loopStop; bah++) {
                templateString = templateString + rankTop[bah][0];
        }        */
        for (i = 0; talent[i]; i++) {
                templateString = templateString + rankTop[i][0]
        }

    document.getElementById('copyURL').innerHTML = templateString;

}

function rankTopOnRightClick(talentID) {

        var theTree = talent[talentID][0];
//        var oldMaxTier = getMaxTier(theTree);
        var oldMaxTier = maxTierArray[theTree];

        if (!canUnlearn(talentID, 1, oldMaxTier))
                return;

        var maxRank = talent[talentID][2];                                        //maximum rank possible
        var theTier = talent[talentID][4];
        var theTierIndex = theTier - 1;
        var rankString = rankTop[talentID][1];

        if (rankTop[talentID][0] > 0) {

                rankTop[talentID][0]--;
                if (rankTop[talentID][0]-1 != -1) {
                        rankTop[talentID][1] = rank[talentID][(rankTop[talentID][0]-1)];
                        rankTop[talentID][2] = rank[talentID][(rankTop[talentID][0])];
                        rankString = rankTop[talentID][1] +"<br><br><font color=ffffff>"+textNextRank+"</font><br>"+ rankTop[talentID][2];
                } else {
                        rankTop[talentID][1] = rank[talentID][rankTop[talentID][0]];
                        rankString = rankTop[talentID][1];
                }

                rankPoints++;

                //keep track of points in the tier
                pointsTree[theTree]--;
                pointsTier[theTree][theTierIndex]--;

                document.getElementById('iconOverYellow'+ talentID).style.visibility = "hidden";
                document.getElementById('iconOverGreen'+ talentID).style.visibility = "visible";

                if (rankTop[talentID][0] == 0) {
                        document.getElementById('iconOverGreen'+ talentID).style.visibility = "hidden";
                        document.getElementById('iconOverYellow'+ talentID).style.visibility = "hidden";
                        document.getElementById("talentThumb"+ talentID).style.visibility = "hidden";

                        if (talent[talentID][5])
                                document.getElementById("arrowYellow"+ talentID).style.visibility = "hidden";

                        oldMaxTier = getMaxTier(theTree);
                        maxTierArray[theTree] = oldMaxTier;

                }

                if (rankPoints == 1) {
                        canTurnGreen(pointsTree[0], 0, maxTierArray[0]);
                        canTurnGreen(pointsTree[1], 1, maxTierArray[1]);
                        canTurnGreen(pointsTree[2], 2, maxTierArray[2]);
                }


        }

        if (pointsTree[theTree] == 1)
                document.getElementById(tree[theTree]+'tabPointsText').innerHTML = textPoint;
        else
                document.getElementById(tree[theTree]+'tabPointsText').innerHTML = textPoints;

    document.getElementById('modifyDescriptionTop'+talentID).innerHTML = rankString;

    document.getElementById('modifyRankTop'+talentID).innerHTML = rankTop[talentID][0];
    document.getElementById('modifyRankTopDescription'+talentID).innerHTML = rankTop[talentID][0];
    document.getElementById('modifyRankPoints').innerHTML = rankPointsMax - rankPoints;
    document.getElementById('levelRequired').innerHTML = rankPointsMax - rankPoints + levelMin - 1;
    document.getElementById(tree[theTree]+'PointsTopRight').innerHTML = pointsTree[theTree];
    document.getElementById(tree[theTree]+'tabPoints').innerHTML = pointsTree[theTree];
    document.getElementById('tabPointsAvailable').innerHTML = rankPoints;
        if (rankPoints != 1)
                canTurnGreen(pointsTree[theTree], theTree, oldMaxTier);
        changeCopyURL();
}

function unhideTalent(input) {
        document.getElementById("talentMouseOver"+ input).style.visibility = "visible";
}

function hideTalent(input) {
        document.getElementById("talentMouseOver"+ input).style.visibility = "hidden";
}

function printableVersion() {

        var levelRequired = rankPointsMax - rankPoints + levelMin - 1;
        var pointsRequired = rankPointsMax - rankPoints;

    var w = window.open("","","resizable=1,toolbar=1,width=800,height=600,status=1,scrollbars=1,menubar=1, screenX=100, screenY=100, left=100, top=100");
        w.document.write("<html><body bgcolor=ffffff><span style = 'font-family: verdana; font-size = 10pt'>");
        w.document.write("<h3>"+ className+"</h3>"+ minRequiredlv +"<b>"+ levelRequired +"</b><br>"+ ReqTalentPoints + "<b>"+ pointsRequired +"</b>");
        w.document.write("<table border=0 cellpadding=0 cellspacing=0 width=100%>");


        if (pointsRequired == 0) {
                w.document.write("<br /><br />"+ Paper);
        }

        var rightTreeID = -1;
        for (var blah = 0; blah != talent.length; blah++){
                if (talent[blah][0] != rightTreeID) {
                        rightTreeID = talent[blah][0];

                        if (pointsTree[rightTreeID] != 0)
                                w.document.write("<tr><td width=100%><br><b><u>"+tree[rightTreeID]+""+textTalentprint+"</u> - </b></span><span class=mySmall>&nbsp;<span id='"+ tree[rightTreeID] + textPoints +"' class=mySmall>"+ pointsTree[rightTreeID] +"</span> "+textPoints+"<br><br></td></tr>");
                }

                if (rankTop[blah][0] != 0) {
                        w.document.write("<tr><td colspan=2 style = \"padding-left:18px\"><span id='displayRight"+ blah +"'><li><b>"+ talent[blah][1] +"</b> - "+textRankPrint+" <span id='modifyRankRight"+ blah +"' class=mySmallBlack>"+ rankTop[blah][0] +"</span>/<span class=mySmallBlack>"+ talent[blah][2] +"</span><br></span></td></tr>");
                        //w.document.write("<tr><td colspan=2 style = \"padding-left:36px\">"+ rankTop[blah][1] +"</td></tr>");
                }
        }

        w.document.write("</table>");
        w.document.write("</font></body></html>");
        w.document.close();

}
