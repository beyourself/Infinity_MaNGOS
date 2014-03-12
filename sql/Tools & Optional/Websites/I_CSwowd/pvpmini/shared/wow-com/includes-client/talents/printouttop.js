//print out all the different types of talent trees
var i = 0;

//language fix for localisation images
var URL=location.href;
var lg = "";
if (URL.indexOf('../../../../index-3.html') != -1) lg = "/en";
        else if (URL.indexOf('http://www.wow-europe.com/fr/') != -1) lg = "/fr";
        else if (URL.indexOf('http://www.wow-europe.com/de/') != -1) lg = "/de";
        else if (URL.indexOf('http://www.wow-europe.com/es/') != -1) lg = "/es";
//For Localisation: removed seperate image string for talent image (this is a seperate image in the U.S .js
document.write("<table border = 0 cellpadding = 0 cellspacing = 0><tr><td><div style = 'position: relative; top: -12; left: 13;'><div style = 'position: absolute;'><table border = 0 cellpadding = 0 cellspacing = 0><tr><td><img src = \"http://www.wow-europe.com/shared/global/talents/"+nlclassFolder+lg+"/images/en/text-classname.gif\"></td><td valign = top></td></tr></table></div></div></td></tr><tr>");

//finally we get to arrange and print out all the info
for (var printTreeID = 0; printTreeID < numberOfTrees; printTreeID++) {
        var tier = 0;
        var treeID;

        treeID = tree[printTreeID];

        var treeName = nltree[printTreeID];
        treeName = treeName.toLowerCase();
        treeName = treeName.replace(" ", "");

        //box top
        document.write("<td><table border = 0 cellpadding = 0 cellspacing = 0><tr><td><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/top-left.gif\" width = 14 height = 13></td><td background = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/top.gif\"><img src = \"http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif\"></td><td><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/top-right.gif\" width = 19 height = 13></td></tr><tr><td background = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/left.gif\"><img src = \"http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif\"</td><td background=http://www.wow-europe.com/shared/global/talents/"+nlclass+"/images/"+ treeName +"/background.jpg>");

        document.write("<div id = '"+ treeID +"Tree'>");

        var vertical = tierNum;
        var verticalCounter;
        var horizontal = 4;
        var horizontalCounter;

        //begin while loop
        while (talent[i] && talent[i][0] == printTreeID &&  i != (talent.length - 1)){

                //if (talent[i][0] == printTreeID)
                //{

                        document.write("<table border = 0 cellspacing=0 cellpadding=0><tr><td style=padding-left:10;padding-right:10 align = 'center'><table border = 0 cellpadding = 10 cellspacing = 0>");

                        for (verticalCounter = 1; verticalCounter <= vertical; verticalCounter++)
                        {
                                document.write("<tr>");
                                for (horizontalCounter = 1; horizontalCounter <= horizontal; horizontalCounter++)
                                {
                                        document.write("<td>");
                                        if (talent[i] && talent[i][3] == horizontalCounter && talent[i][4] == verticalCounter)
                                        {

                                                var imageName;
                                                talentName = talent[i][1];
                                                imageName = nltalent[i][0];
                                                imageName = imageName.toLowerCase();
                                                imageName = imageName.replace(":", "");
                                                imageName = imageName.replace(" ", "");
                                                imageName = imageName.replace(" ", "");
                                                imageName = imageName.replace(" ", "");
                                                imageName = imageName.replace(" ", "");

                                                //rank
                                                document.write("<div id = wrapper99><div id = \"rankTopStyle\"><table><tr><td nowrap><span id=modifyRankTopColor"+ i +" style=color:ffffff class=mySmall><span id=modifyRankTop"+ i +" style=color:ffffff class=mySmall>"+ rankTop[i][0] +"</span>/"+ talent[i][2] +"</span></td></tr></table></div></div>");

                                                //description
                                                document.write("<div id = 'talentMouseOver"+ i +"' style=visibility:hidden;><div id = wrapper>");

                                                tierTalent = talent[i][4];

                                                if (printTreeID != 2 && tierTalent != vertical) {
                                                        document.write("<div id = \"descriptionTopStyle\">");
                                                } else if (printTreeID == 2 && tierTalent != vertical)  {
                                                        document.write("<div id = \"descriptionTopStyleThird\">");
                                                } else if (printTreeID != 2 && tierTalent == vertical) {
                                                        document.write("<div id = \"descriptionTopStyleBottom\">");
                                                } else {
                                                        document.write("<div id = \"descriptionTopStyleThirdBottom\">");
                                                }

                                                document.write("<table border = 0 cellpadding = 0 cellspacing = 0><tr><td></td><td bgcolor=d5d5d7 height = 1></td><td></td></tr><tr><td bgcolor=a5a5a5 width = 1><img src = \"http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif\"></td><td><table width=350 border=0 cellspacing=0 cellpadding=5 bordercolor=000000><tr><td style=\"filter: alpha(opacity=90);\" bgcolor=020303><span style=color:white;font-weight:bold;>"+ talent[i][1] +"</span>");
                                                document.write("<br><span class = mySmall style=color:white>"+textRank+" <span id=modifyRankTopDescription"+ i +" class=mySmall>"+ rankTop[i][0] + "</span>/"+ talent[i][2] +"</span>");

                                                if (talent[i][5])        //if the talent requires other talents
                                                {
                                                        requirement = talent[i][5][0];
                                                        requirementPoints = talent[i][5][1];
                                                        requirementName = talent[requirement][1];

                                                        document.write("<span id='requiresTalent"+ i +"' style=color:red class=mySmall><br>"+textRequires+" "+ requirementPoints +" "+textPointsin+" "+ requirementName +"</span>");
                                                }

                                                if (talent[i][4] != 1)        //if the talent requires other talents
                                                {
                                                        document.write("<span id='requiresPoints"+ i +"' style=color:red class=mySmall><br>"+textRequires+" "+ ((talent[i][4]*5)-5) +" "+textPointsin+" "+tree[talent[i][0]]+" "+textTalents+"</span>");
                                                }

                                                document.write("<p><span id = 'modifyDescriptionTop"+ i +"' style=color:FFFFFF>"+ rankTop[i][1] +"</span></span>");

                                                //description next
                                                document.write("<br>");

                                                document.write("<table border = 0 cellpadding = 0 cellspacing = 0 width=100% height=0><tr><td width=50%><br><font color = '1ae91b'>"+textLeftClick+"</font></td><td width=50% align=right><br><font color = 'fb1410'>"+textRightClick+"</font></td></tr></table>");
                                                document.write("</span></td></tr></table></td><td bgcolor=a5a5a5 width=1><img src = \"http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif\"></td></tr><tr><td></td><td bgcolor = 4f4f4f height = 2></td><td></td></tr></table></div></div></div>");

                                                if (is_ie4up)
                                                        document.write("<div style = 'z-index: 99999; position: absolute;'><div style = 'top: -2px; left: -2px; position: relative;'><img src=http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif width = 50 height = 50 border = 0 onDblClick='rankTopOnClick("+ i +");' onClick='rankTopOnClick("+ i +");' onMouseOver='unhideTalent("+ i +");' onMouseOut='hideTalent("+ i +");' onContextMenu='rankTopOnRightClick("+ i +"); return false;'></div></div>");
                                                else
                                                        document.write("<div style = 'z-index: 99999; position: absolute;'><div style = 'top: -2px; left: -2px; position: relative;'><img src=http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif width = 50 height = 50 border = 0 onClick='rankTopOnClick("+ i +");' onMouseOver='unhideTalent("+ i +");' onMouseOut='hideTalent("+ i +");' onContextMenu='rankTopOnRightClick("+ i +"); return false;'></div></div>");

                                                document.write("<div style = 'z-index: 50; position: absolute;'><div style = 'top: -2px; left: -2px; position: relative;'><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/icon-over-grey.gif border = 0></div></div>");


                                                if (rankTop[i][0] > 1)
                                                        document.write("<div id = 'iconOverGreen"+ i +"' style = 'position: relative; z-index:50;'><div id = iconOver><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/icon-over-green.gif border = 0></div></div>");
                                                else
                                                        document.write("<div id = 'iconOverGreen"+ i +"' style = 'visibility:hidden; position: relative; z-index:50;'><div id = iconOver><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/icon-over-green.gif border = 0></div></div>");
                                                if (rankTop[i][0] == talent[i][2])
                                                        document.write("<div id = 'iconOverYellow"+ i +"' style = 'position: relative; z-index:50;'><div id = iconOver><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/icon-over-yellow.gif border = 0></div></div>");
                                                else
                                                        document.write("<div id = 'iconOverYellow"+ i +"' style = 'visibility:hidden; position: relative; z-index:50;'><div id = iconOver><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/icon-over-yellow.gif border = 0></div></div>");

                                                if (rankTop[i][0] == 0)
                                                        document.write("<div id = 'talentThumb"+ i +"' style = 'visibility:hidden; position: relative'><div id = wrapper49><img src = http://www.wow-europe.com/shared/global/talents/"+nlclass+"/images/"+ treeName +"/"+ imageName +".jpg width = 43 height = 45 border = 0></div></div>");
                                                else
                                                        document.write("<div id = 'talentThumb"+ i +"' style = 'position: relative'><div id = wrapper49><img src = http://www.wow-europe.com/shared/global/talents/"+nlclass+"/images/"+ treeName +"/"+ imageName +".jpg width = 43 height = 45 border = 0></div></div>");

                                                if (talent[i][5]) {

                                                        thisTalentX = talent[i][3];
                                                        thisTalentY = talent[i][4];

                                                        requiredTalentX = talent[requirement][3];
                                                        requiredTalentY = talent[requirement][4];

                                                        if (thisTalentX == requiredTalentX) {  //up and down

                                                                if ((thisTalentY - 1) == requiredTalentY) {
                                                                        document.write("<div id=wrapper50><div id=arrowdown1><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-1-grey.gif></div></div>");
                                                                        document.write("<span id='arrowGreen"+ i +"' style = 'visibility:hidden;'><div id=wrapper50><div id=arrowdown1><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-1-green.gif></div></div></span>");
                                                                        document.write("<span id='arrowYellow"+ i +"' style = 'visibility:hidden;'><div id=wrapper50><div id=arrowdown1><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-1-yellow.gif></div></div></span>");
                                                                } else if ((thisTalentY - 2) == requiredTalentY) {
                                                                        document.write("<div id=wrapper50><div id=arrowdown2><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-2-grey.gif></div></div>");
                                                                        document.write("<div id=wrapper50><div id=arrowdown2 style = 'visibility:hidden;'><span id='arrowGreen"+ i +"'><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-2-green.gif></span></div></div>");
                                                                        document.write("<div id=wrapper50><div id=arrowdown2 style = 'visibility:hidden;'><span id='arrowYellow"+ i +"'><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-2-yellow.gif></span></div></div>");
                                                                } else if ((thisTalentY - 3) == requiredTalentY) {
                                                                        document.write("<div id=wrapper50><div id=arrowdown3><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-3-grey.gif></div></div>");
                                                                        document.write("<div id=wrapper50><div id=arrowdown3><span id='arrowGreen"+ i +"' style = 'visibility:hidden;'><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-3-green.gif></span></div></div>");
                                                                        document.write("<span id='arrowYellow"+ i +"' style = 'visibility:hidden;'><div id=wrapper50><div id=arrowdown3><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-3-yellow.gif></div></div></span>");
                                                                } else if ((thisTalentY - 4) == requiredTalentY) {
         document.write("<div id=wrapper50><div id=arrowdown4><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-4-grey.gif></div></div>");
         document.write("<div id=wrapper50><div id=arrowdown4><span id='arrowGreen"+ i +"' style = 'visibility:hidden;'><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-4-green.gif></span></div></div>");
         document.write("<span id='arrowYellow"+ i +"' style = 'visibility:hidden;'><div id=wrapper50><div id=arrowdown4><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-4-yellow.gif></div></div></span>");
                                                                }
                                                        } else if (thisTalentY == requiredTalentY) {  //across
                                                                if (requiredTalentX == (thisTalentX - 1)) {
                                                                        document.write("<div id=wrapper50><div id=arrowacrossright><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/across-right-grey.gif></div></div>");
                                                                        document.write("<span id='arrowGreen"+ i +"' style = 'visibility:hidden;'><div id=wrapper50><div id=arrowacrossright><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/across-right-green.gif></div></div></span>");
                                                                        document.write("<span id='arrowYellow"+ i +"' style = 'visibility:hidden;'><div id=wrapper50><div id=arrowacrossright><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/across-right-yellow.gif></div></div></span>");
                                                                }
                                                        } else if (thisTalentX == (requiredTalentX-1)){
                                                                document.write("<div id=wrapper50><div id=arrowdownleft><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-left-grey.gif></div></div>");
                                                                document.write("<span id='arrowGreen"+ i +"' style = 'visibility:hidden;'><div id=wrapper50><div id=arrowdownleft><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-left-green.gif></div></div></span>");
                                                                document.write("<span id='arrowYellow"+ i +"' style = 'visibility:hidden;'><div id=wrapper50><div id=arrowdownleft><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-left-yellow.gif></div></div></span>");
                                                        } else if ((thisTalentX-1) == requiredTalentX) {
                                                                document.write("<div id=wrapper50><div id=arrowdownright><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-right-grey.gif></div></div>");
                                                                document.write("<span id='arrowGreen"+ i +"' style = 'visibility:hidden;'><div id=wrapper50><div id=arrowdownright><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-right-green.gif></div></div></span>");
                                                                document.write("<span id='arrowYellow"+ i +"' style = 'visibility:hidden;'><div id=wrapper50><div id=arrowdownright><img src=http://www.wow-europe.com/shared/wow-com/images/basics/talents/arrows/down-right-yellow.gif></div></div></span>");
                                                        }

                                                        if (query) {
                                                                if (saveTemplate[i] == talent[i][2])
                                                                        document.getElementById("arrowYellow"+ i).style.visibility = "visible";
                                                        }

                                                }


                                                        document.write("<img src = http://www.wow-europe.com/shared/global/talents/"+nlclass+"/images/"+ treeName +"/"+ imageName +"-off.jpg width = 43 height = 45 border = 0>");
                                                i++;
                                        }
                                        else
                                                document.write("&nbsp;");
                                        document.write("</td>");
                                }
                                document.write("</tr>");
                        }

                        document.write("</table></td></tr></table>");
                        document.write("</div>");

        }


        //box bottom
        document.write("</td><td background = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/right.gif\"><img src = \"http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif\"></td></tr>");
        document.write("<tr><td><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-left.gif\"></td>");
        //added localised path to allow insertion of localised images
        document.write("<td background = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot.gif\" width=100%><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-left-left.gif\"></td><td width=100% nowrap><span style = 'color: ffe400; font-weight: bold; font-size: 11pt;'>&nbsp;"+ tree[printTreeID] +"</span><span style = 'color:ffffff'>"+textcolon+" <span id='"+tree[printTreeID]+"tabPoints'>0</span> <span id='"+tree[printTreeID]+"tabPointsText'>"+ textPoints +"</span></span></nobr></td><td><div style = 'position: relative; left: 3;'><a href =#none onclick = 'resetTree("+ printTreeID +")'><img src = 'http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/en"+lg+"/reset.gif' border = 0></a></div></td><td><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-right-right.gif\"></td></tr></table></td>");

        document.write("<td><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-right.gif\"></td></tr>");

        document.write("</table></td>");

}
//end for loop



document.write("</tr></table><p>");

document.write("<table><tr><td valign=top width = 350>");

//box top
document.write("<table border = \"0\" width = \"100%\" cellpadding = \"0\" cellspacing = \"0\"><tr><td><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-box/top-left.gif\"></td><td background = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-box/top.gif\"><img src = \"http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif\" height = 1 width = 325></td><td><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-box/top-right.gif\"></td></tr><tr><td background = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-box/left.gif\"><img src = \"http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif\"</td><td style=padding:7 bgcolor=000000 width = 350>");
document.write("<table width = 100%><tr><td nowrap width = \"50%\"><span class=mySmallWhite><b>"+ textPointsLeft +"</b>"+textcolon+" <span id=tabPointsAvailable class=mySmallWhite>"+ rankPoints +"</span><br><b>"+ textPointsSpent +"</b>"+textcolon+" <span id=modifyRankPoints class=mySmallWhite>"+ eval(theRequiredLevel - 9) +"</span><br><b>"+ textLevelRequired +"</b>"+textcolon+" <span id=levelRequired class=mySmallWhite>"+ theRequiredLevel +"</span></span></td>");

document.write("<td rowspan=2>&nbsp;&nbsp;&nbsp;</td><td align=right valign=bottom>");

document.write("<table border = 0 cellpadding = 0 cellspacing = 0>");

for (var jia = 0; jia < tree.length; jia++){
        document.write("<tr><td width = \"50%\"><nobr><span class=mySmallWhite><b>"+tree[jia]+"</b>"+textcolon+"</td><td align=right>&nbsp;&nbsp;<span id='"+ tree[jia] +"PointsTopRight' class=mySmallWhite>"+ pointsTree[jia] +"</span></span></nobr></td></tr>");
}

document.write("</table>");

document.write("</td></tr>");

document.write("</table>");



document.write("<img src = \"http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif\" height = 10 width = 300>");

document.write("<table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td width = 100%><a href = #none onClick=printableVersion();><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/en"+lg+"/printableversion.gif\" border = 0></a></td>");
//added variable for localisation to button paths
document.write('<td><a href = #none onClick=resetTreeAll()><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/en'+lg+'/resetall.gif\" border = 0></a></td>');

document.write("</table>");

//box bottom
document.write("</td><td background = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-box/right.gif\"><img src = \"http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif\"></td></tr>");
document.write("<tr><td><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-box/bot-left.gif\"></td><td background = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-box/bot.gif\"><img src = \"http://www.wow-europe.com/shared/wow-com/images/layout/pixel.gif\"></td><td><img src = \"http://www.wow-europe.com/shared/wow-com/images/basics/talents/blacklayout/bot-box/bot-right.gif\"></td></tr></table>");

document.write("</td></tr><tr><td valign=top>");

document.write("</td></tr>");

//document.write("<tr><td colspan = 3><table><tr><td width = 100%>");

//document.write("<small><nobr><span onmouseover=this.style.cursor='hand' onClick=printableVersion(); class=mySmallWhite><u>"+ textPrintableVersion +"</u></span></nobr></td>");
//document.write("<td nowrap><small><nobr><span onmouseover=this.style.cursor='hand' onClick=saveTheTemplate(); class=mySmallWhite><u>"+ textSaveTemplate +"</u></span></nobr></small></small><br>");

//document.write("</td></tr></table>");
//document.write("</td></tr></table>");
document.write("</table>");


        changeCopyURL();

canTurnGreen(0, 0, 1);
canTurnGreen(0, 1, 1);
canTurnGreen(0, 2, 1);