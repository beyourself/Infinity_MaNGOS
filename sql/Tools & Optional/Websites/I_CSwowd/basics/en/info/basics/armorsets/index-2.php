<? $Offset = '../../../'; ?>
<? $Offsetpic = '../../../'; ?>
<? include $Offset."../setup/eng.php"; ?>
<? include $Offset."header.php"; ?>
    <? if(ereg("msie", $br)) { }
     else { ?> <style type="text/css">
#cnt { width: 760px; height: auto; }
</style> <? } ?>
<? include $Offset."center.php"; ?>
<style type="text/css">

                BODY          {  BACKGROUND-COLOR: #000000; BACKGROUND-IMAGE: url('../../../../shared/screenshots/backgrounds/tirisfal-bg.jpg'); BACKGROUND-REPEAT: repeat-x; }

td { color: ffffff; font-family: tahoma, verdana; }

        td.featured                { color: #ffea00; font-family: tahoma; font-size: 13pt; padding-left: 8px;}
        td.featuredimage{ padding-left: 2px;}
        td.featureddate        { color: #ffffff; font-family: tahoma; font-size: 9pt; align: right; padding-right: 3px; text-align: right;}

        td.monthly                { color: #feb300; font-family: tahoma; font-size: 10pt; font-weight: bold; padding-left: 8px;}
        td.monthlyimage{ padding-left: 15px;}

select { font-family: Tahoma, Arial, Helvetica; font-size: 8pt; color: #ffb019; background-color: #030a14; }

option.orange { font-family: Tahoma, Arial, Helvetica; font-size: 8pt; color: #ffb019; background-color: #030a14; }
option.gray { font-family: Tahoma, Arial, Helvetica; font-size: 8pt; color: #945d22; background-color: #030a14; }
option.grayorange { font-family: Tahoma, Arial, Helvetica; font-size: 8pt; color: #775026; background-color: #030a14; }



                small          { font-family: Arial,Helvetica,Sans-Serif; color: #D7CEA4; font-size: 8pt; }

hr {
  border: 0;
  width: 98%;
  color: #292929;
background-color: #292929;
height: 1px;

}
span.grey { font-family: Arial,Helvetica,Sans-Serif; color: #A0A1A3; font-size: 9pt; }
.main {
    width:181px;
}

.myPurple {
  color: A335EE;
  font-weight: bold;
  font-size: 8pt;
 }
 .myBlue {
  color: 0070DD;
  font-weight: bold;
  font-size: 8pt;
 }
 .myGray {
  color: c9c9c9;
  font-size: 8pt;
 }
 .myGreen {
  color: 00FF00;
  font-size: 8pt;
 }
 .myYellow {
  color: ffd517;
  font-size: 8pt;
 }
 .myRed {
  color: d80000;
  font-size: 8pt;
 }
 .myTable {
  color: FFFFFF;
  font-size: 8pt;
 }

         .myBlueGem { color:#666666; display:block; background:url(../../../../shared/wow-com/images/basics/honor/rewards/blue-mini.gif) no-repeat 3px 4px; padding-left:19px; }
 .myMetaGem { color:#666666; display:block; background:url(../../../../shared/wow-com/images/basics/honor/rewards/meta-mini.gif) no-repeat 3px 4px; padding-left:19px; }
 .myOrangeGem { color:#666666; display:block; background:url(../../../../shared/wow-com/images/basics/honor/rewards/orange-mini.gif) no-repeat 3px 4px; padding-left:19px; }
 .myPurpleGem { color:#666666; display:block; background:url(../../../../shared/wow-com/images/basics/honor/rewards/purple-mini.gif) no-repeat 3px 4px; padding-left:19px; }
 .myRedGem { color:#666666; display:block; background:url(../../../../shared/wow-com/images/basics/honor/rewards/red-mini.gif) no-repeat 3px 4px; padding-left:19px; }
 .myYellowGem { color:#666666; display:block; background:url(../../../../shared/wow-com/images/basics/honor/rewards/yellow-mini.gif) no-repeat 3px 4px; padding-left:19px; }

</style>










<style type="text/css">

#contents{
visibility: hidden;
position: absolute;
Z-INDEX: 999999;
width: 5px;
filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale src='../../../../shared/wow-com/images/backgrounds/blue-bg.png');
}
#dynamicTooltip{
visibility: hidden;
position: absolute;
Z-INDEX: 999999;
}
#tooltipText{
visibility: hidden;
color: #ffffff;
font-family: verdana, arial, sans-serif;
font-size:8pt;
font-weight:normal;
padding: 4px;
white-space:nowrap;
}
.trans_div {
/* This is an IE filter command. Other browsers will ignore it */
/* It goes into the trans_div class */
}
.trans_div[class] {
background-image:url(../../../../shared/wow-com/images/backgrounds/blue-bg.png);
}

</style>
<div id="contents">
                        <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%">
                          <tr>
                                <td width = "1" height = "1"></td>
                                <td bgcolor = "#ffffff" height = "1"><img src = "../../../../wow-com/images/layout/pixel.html" width = "1" height = "1"></td>
                                <td width = "1" height = "1"></td>
                          </tr>
                          <tr>
                                <td bgcolor = "#A5A5A5" width = "1"><img src = "../../../../wow-com/images/layout/pixel.html" width = "1" height = "1"></td>
                                <td valign = "top" class="trans_div"><div id="tooltipText"></div></td>
                                <td bgcolor = "#A5A5A5" width = "1"><img src = "../../../../wow-com/images/layout/pixel.html" width = "1" height = "1"></td>
                          </tr>
                          <tr>
                                <td width = "1" height = "1"></td>
                                <td bgcolor = "#4F4F4F"><img src = "../../../../wow-com/images/layout/pixel.html" width = "1" height = "2"></td>
                                <td width = "1" height = "1"></td>
                          </tr>
                        </table>
</div>


<script type="text/javascript" src="../../../../shared/wow-com/includes-client/third-party/tooltip.js"></script>
<div class = "header">
<table cellpadding="0" cellspacing="0" border="0" width = "100%">
    <tr>
        <td colspan = "3"><img src = "../../../../shared/wow-com/images/layout/pixel.gif" width = "1" height = "12"></td>
    </tr>
    <tr>
        <td width = "29"><img src = "../../../../shared/wow-com/images/headers/dateheader/dateheader-left.gif" width = "31" height = "38"></td>
        <td background = "../../../../shared/wow-com/images/headers/dateheader/dateheader-bg.gif" width = "100%"><h3 class = "titleLight">Armor Sets</h3></td>
        <td width = "17"><img src = "../../../../shared/wow-com/images/headers/dateheader/dateheader-right.gif" width = "17" height = "38"></td>
    </tr>
</table>
</div>
<!--  BANNER & NAV -->
<!--end banner-->
<!-- BEGIN OLD BANNER SHOW X--




<style type="text/css">
        .attribute                 { font-family: "Arial", "Helvetica", "Sans-Serif"; color: #000000; font-weight: bold; font-size: 12;}
              #icon { position: absolute;
                        top: -144px;
                        left: 310px;
                        z-index: 100;
       }
            #icon1 { position: absolute;
                        top: -55px;
                        left: 45px;
                        z-index: 100;
       }
              #text { position: relative;
                        top: 78px;
                        left: 12px;
                        z-index: 100;
       }
                #wrapper { position: relative;
                        z-index: 100;
       }
                #wrapper99 { position: relative;
                        z-index: 99;
       }
</style>
<table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style="background: url('/shared/wow-com/images/basics/armorsets/background.jpg');">
  <tr>
          <td>
                  <div id = "wrapper">
                        <div id = "text">
                                <img src="/shared/wow-com/images/basics/armorsets/en/header-text.gif">
                        </div>
                </div>
          </td>
            <td><img src="/shared/wow-com/images/layout/pixel.gif" width="1" height="153"></td>
  </tr>
  <tr>
          <td colspan="3">
                  <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%">
                          <tr>
                                <td background = "/shared/wow-com/images/banner/bottom.gif" width = "100%" ><img src = "/shared/wow-com/images/layout/pixel.gif" height = "18" width = "200"></td>
                          </tr>
                  </table>
          </td>
  </tr>
</table>
<!-- END OLD BANNER SHOW -->
<!-- BEGIN NEW BANNER HIDDEN Y-->




<style type="text/css">
        .attribute                 { font-family: "Arial", "Helvetica", "Sans-Serif"; color: #000000; font-weight: bold; font-size: 12;}
              #icon { position: absolute;
                        top: -144px;
                        left: 310px;
                        z-index: 100;
       }
            #icon1 { position: absolute;
                        top: -55px;
                        left: 45px;
                        z-index: 100;
       }
              #text { position: relative;
                        top: 78px;
                        left: 12px;
                        z-index: 100;
       }
                #wrapper { position: relative;
                        z-index: 100;
       }
                #wrapper99 { position: relative;
                        z-index: 99;
       }
</style>
<table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style="background: url('../../../../shared/wow-com/images/basics/armorsets/background.jpg');">
  <tr>
          <td>
                  <div id = "wrapper">
                        <div id = "text">
                                <img src="../../../../shared/wow-com/images/basics/armorsets/en/header-text.gif">
                        </div>
                </div>
          </td>
            <td><img src="../../../../shared/wow-com/images/layout/pixel.gif" width="1" height="153"></td>
  </tr>
  <tr>
          <td colspan="3">
                  <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%">
                          <tr>
                                <td background = "../../../../shared/wow-com/images/banner/bottom.gif" width = "100%" ><img src = "../../../../shared/wow-com/images/layout/pixel.gif" height = "18" width = "200"></td>
                          </tr>
                  </table>
          </td>
  </tr>
</table>
<!-- END BANNER -->
<!-- BEGIN Subnav é-->
<script language = "javascript">
var pageId = "Armor Sets";
</script>
<script type="text/javascript" src='../../../../shared/wow-com/includes-client/en/navtree-gameguide.js'></script>
<script language="javascript">
/***********************************************************************************
*        (c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*        For info write to menus@burmees.nl                          *
*        You may remove all comments for faster loading                  *
***********************************************************************************/

        var NoOffFirstLineMenus=1;                        // Number of first level items
        var LowBgColor='#1e0500';                        // Background color when mouse is not over
        var LowSubBgColor='#08244a';                        // Background color when mouse is not over on subs
        var HighBgColor='black';                        // Background color when mouse is over
        var HighSubBgColor='#013a88';                        // Background color when mouse is over on subs
        var FontLowColor='white';                        // Font color when mouse is not over
        var FontSubLowColor='#ffffff';                        // Font color subs when mouse is not over
        var FontHighColor='white';                        // Font color when mouse is over
        var FontSubHighColor='white';                        // Font color subs when mouse is over
        var BorderColor='#000000';                        // Border color
        var BorderSubColor='#116eed';                        // Border color for subs
        var BorderWidth=1;                                // Border width
        var BorderBtwnElmnts=0;                        // Border between elements 1 or 0
        var FontFamily="arial,comic sans ms,technical"        // Font family menu items
        var FontSize=8;                                // Font size menu items
        var FontBold=0;                                // Bold menu items 1 or 0
        var FontItalic=0;                                // Italic menu items 1 or 0
        var MenuTextCentered='left';                        // Item text position 'left', 'center' or 'right'
        var MenuCentered='left';                        // Menu horizontal position 'left', 'center' or 'right'
        var MenuVerticalCentered='top';                // Menu vertical position 'top', 'middle','bottom' or static
        var ChildOverlap=.2;                                // horizontal overlap child/ parent
        var ChildVerticalOverlap=.2;                        // vertical overlap child/ parent
        var StartTop=-9;                                // Menu offset x coordinate
        var StartLeft=0;                                // Menu offset y coordinate
        var VerCorrect=0;                                // Multiple frames y correction
        var HorCorrect=0;                                // Multiple frames x correction
        var LeftPaddng=6;                                // Left padding
        var TopPaddng=0;                                // Top padding
        var FirstLineHorizontal=1;                        // SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
        var MenuFramesVertical=1;                        // Frames in cols or rows 1 or 0
        var DissapearDelay=500;                        // delay before menu folds in
        var TakeOverBgColor=1;                        // Menu frame takes over background color subitem frame
        var FirstLineFrame='navig';                        // Frame where first level appears
        var SecLineFrame='space';                        // Frame where sub levels appear
        var DocTargetFrame='space';                        // Frame where target documents appear
        var TargetLoc='filterMenu';                                // span id for relative positioning
        var HideTop=0;                                // Hide first level when loading new document 1 or 0
        var MenuWrap=1;                                // enables/ disables menu wrap 1 or 0
        var RightToLeft=0;                                // enables/ disables right to left unfold 1 or 0
        var UnfoldsOnClick=0;                        // Level 1 unfolds onclick/ onmouseover
        var WebMasterCheck=0;                        // menu tree checking on or off 1 or 0
        var ShowArrow=1;                                // Uses arrow gifs when 1
        var KeepHilite=1;                                // Keep selected path highligthed
        var Arrws=['/shared/wow-com/images/subnav/tri.gif',14,15,'../../../../shared/wow-com/images/subnav/arrow_right2.gif',18,12,'items/trileft.gif',5,10];        // Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//        MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//        For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

</script>
<!-- Here came the include of the nav tree, now put in the page for localizatiopn purpose -->
<script type="text/javascript" src="../../../../shared/third-party/menu_com.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/navtreefunctions.js"></script>


<style type="text/css">

.navigation
                {
                font-family:arial,palatino, georgia, verdana, arial, sans-serif;
                color:#000000;
                padding:5px;
                margin-bottom: 4px;
                background-color: #E7CFA3;
                background-image: url('../../../../shared/wow-com/images/parchment/plain/light.jpg');
                border-style: solid; border-color: #000000; border-width: 0px; border-bottom-width:1px; border-top-width:1px;
                }

.button
                {
                color:#FFFFFF;
                font-size:9px;
                letter-spacing:-1px;
                }

a.nav:link                {
                        font-family: arial,verdana, sans-serif;
                        color: CBA300;
                        font-size: 11px;
                        font-weight:normal;
                        }

a.nav:visited         {
                        font-family: arial,verdana, sans-serif;
                        color: CBA300;
                        font-size: 11px;
                        font-weight:normal;
                        }

a.nav:hover                {
                        font-family: arial,verdana, sans-serif;
                        color: FFFFFF;
                        font-size: 11px;
                        font-weight:normal;
                        }

a.nav:active         {
                        font-family: arial,verdana, sans-serif;
                        color: CBA300;
                        font-size: 11px;
                        font-weight:normal;
                        }


</style>
<div class="navigation">
<center>
<table cellspacing = "0" cellpadding = "0" border = "0" width = "655">
<tr>

<script language = "javascript">

        var iconId;
        if (result!=1)
                document.write('<td width="59" rowspan="3" valign = "top"><a href = "' + Menu2[1] + '"><img src = "/shared/wow-com/images/subnav/icon_' + Menu2[11].toLowerCase() + '.jpg" width="59" height="65" border = "0"></a></td>');
        else
                document.write('<td width="59" rowspan="3" valign = "top"><a href = "' + Menu1[1] + '"><img src = "/shared/wow-com/images/subnav/icon_' + Menu1[11].toLowerCase() + '.jpg" width="59" height="65" border = "0"></a></td>');
</script>



<td height="15" background="../../../../shared/wow-com/images/subnav/nav_top.jpg"></td>
<td width="18" height="65" rowspan="3" style="background-image:url(../../../../shared/wow-com/images/subnav/nav_right.jpg); background-position:top; background-repeat:no-repeat;"></td>
</tr>

<tr>
<td height="17" background="../../../../shared/wow-com/images/subnav/nav_middle.jpg" nowrap><div id = "filterMenu"></div></td>
</tr>

<tr>
<td>
        <table cellpadding="0" cellspacing="0" border="0">
        <tr>
        <td width="5" height="33" style="background-image:url(../../../../shared/wow-com/images/subnav/leftsubnav.jpg); background-position:top; background-repeat:repeat-x;"><img src="../../../../shared/wow-com/images/layout/pixel.gif" width="5" height="1"></td>
        <td height="33" background="../../../../shared/wow-com/images/subnav/subnav.jpg" width="100%">
                <table height="33" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                <td width="5" height="5" background="../../../../shared/wow-com/images/subnav/subnav_topleft.gif"></td>
                <td height="5" background="../../../../shared/wow-com/images/subnav/subnav_top.gif"></td>
                <td width="6" height="5" background="../../../../shared/wow-com/images/subnav/subnav_topright.gif"></td>
                </tr>
                <tr>
                <td width="5" height="19" background="../../../../shared/wow-com/images/subnav/subnav_left.gif"></td>
                <td height="19" style="text-align:center;" background="../../../../shared/wow-com/images/subnav/subnav_bg.gif" valign="middle"><img src="../../../../shared/wow-com/images/layout/pixel.gif" width="1" height="1"><small class="button" style="color:#808080; letter-spacing:normal;">

<script language = "javascript">



</script>


                </small></td>
                <td width="6" height="19" background="../../../../shared/wow-com/images/subnav/subnav_right.gif"></td>
                </tr>
                <tr>
                <td width="5" height="9" background="../../../../shared/wow-com/images/subnav/subnav_botleft.gif"></td>
                <td height="9" background="../../../../shared/wow-com/images/subnav/subnav_bot.gif"></td>
                <td width="6" height="9" background="../../../../shared/wow-com/images/subnav/subnav_botright.gif"></td>
                </tr>
                </table>
        </td>
        </tr>
        </table>
</td>
</tr>

</table>
</center>
</div>



<!-- END Subnav -->
<!--Main-->
<!--  END BANNER & NAV -->

<div class="guideHeader">
<table width="100%" align="center" cellspacing =" 0" cellpadding =" 0" border =" 0" >
    <tr>
        <td width="10"><img src="../../../../shared/wow-com/images/headers/tabheader/tabheader-left-left.jpg" width="17" height="29" border="0" ></td>
        <td width =" 362" background ="../../../../shared/wow-com/images/headers/tabheader/tabheader-left.jpg" align =" left" NOWRAP><h3 class =" guideTitle">High Level Armor Sets</h3></td>
        <td width="100%" background ="../../../../shared/wow-com/images/headers/tabheader/tabheader-bg.jpg"></td>
    </tr>
</table>
</div>
<div class =" postContainerPlain">
    <div class =" postBody">



        This page shows some of the high level armor sets which players can obtain in dungeons or by completing quests. New and existing sets will be added to this page regularly, so check back often.

        &nbsp;<p>

        <script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/localize.js"></script>
    <script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/dontlocalize.js"></script>
    <script language = "javascript">
var theArmorSetCounter = 0;
</script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/dungeon1.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/dungeon2.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/dungeon3.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/tier1raid.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/tier2raid.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/tier3raid.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/tier4raid.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/tier5raid.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/pvpsuperior.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/pvpepic.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/pvplevel70.js"></script>
<script type="text/javascript" src="../../../../shared/wow-com/includes-client/armorsets/en/arenagladiator.js"></script>

<!--amended-->



        <script type="text/javascript">
        <!--

  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split(",");
}
        var theDungeonNumber = pair[0];
        var theClassNumber = theClassNumber2 = pair[1];
        var theRaceNumber = pair[2];
        var gender = pair[3];
        var theDungeon = "";

        if (!theDungeonNumber){
                var theDungeonNumber = "0";
                var gender = "male";
                var theClassNumber = 4;
                var theRaceNumber = 0;
        }

        gender = (gender==0 ? "male" : "female");

        switch (theDungeonNumber) {
                case "0" : theDungeon = "dungeon1"; break;
                case "1" : theDungeon = "dungeon2"; break;
                case "2" : theDungeon = "dungeon3"; break;
                case "3" : theDungeon = "tier1raid"; break;
                case "4" : theDungeon = "tier2raid"; break;
                case "5" : theDungeon = "tier3raid"; break;
                case "6" : theDungeon = "tier4raid"; break;
                case "7" : theDungeon = "tier5raid"; break;
                case "8" : theDungeon = "pvpsuperior"; break;
                case "9" : theDungeon = "pvpepic"; break;
                case "10" : theDungeon = "pvplevel70"; break;
                case "11" : theDungeon = "arenagladiator"; break;
        }


    var setName = armorSetsArray[theDungeonNumber].setNamesArray[theClassNumber];
        var theClass = classArray[theClassNumber];
        var theRace = raceArray[theRaceNumber];

        //-->
        </script>


<table cellspacing = "0" cellpadding = "0" border = "0">
    <tr>
        <td valign = "top">
            <table cellspacing = "0" cellpadding = "0" border = "0" width = "200" style = "BACKGROUND-IMAGE: url('/shared/wow-com/images/basics/armorsets/framebg.jpg');  BACKGROUND-REPEAT: repeat-x; BACKGROUND-POSITION: top center;">
                <tr>
                    <td>
                        <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "BACKGROUND-IMAGE: url('/shared/wow-com/images/basics/armorsets/border-left.gif');  BACKGROUND-REPEAT: repeat-y; BACKGROUND-POSITION: top left;">
                            <tr>
                                <td>
                                    <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "BACKGROUND-IMAGE: url('/shared/wow-com/images/basics/armorsets/border-right.gif');  BACKGROUND-REPEAT: repeat-y; BACKGROUND-POSITION: top right;">
                                        <tr>
                                            <td>
                                                <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "BACKGROUND-IMAGE: url('/shared/wow-com/images/basics/armorsets/ss-border-top.gif'); BACKGROUND-REPEAT: repeat-x; BACKGROUND-POSITION: top center;">
                                                    <tr>
                                                        <td>
                                                            <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "BACKGROUND-IMAGE: url('/shared/wow-com/images/basics/armorsets/border-bot.gif');  BACKGROUND-REPEAT: repeat-x; BACKGROUND-POSITION: bottom center;">
                                                                <tr>
                                                                    <td>
                                                                        <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "BACKGROUND-IMAGE: url('/shared/wow-com/images/basics/armorsets/ss-border-top-left.gif');  BACKGROUND-REPEAT: no-repeat; BACKGROUND-POSITION: top left;">
                                                                            <tr>
                                                                                <td>
                                                                                    <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "BACKGROUND-IMAGE: url('/shared/wow-com/images/basics/armorsets/ss-border-top-right.gif');  BACKGROUND-REPEAT: no-repeat; BACKGROUND-POSITION: top right;">
                                                                                        <tr>
                                                                                            <td>
                                                                                                <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "BACKGROUND-IMAGE: url('/shared/wow-com/images/basics/armorsets/border-bot-left.gif');  BACKGROUND-REPEAT: no-repeat; BACKGROUND-POSITION: bottom left;">
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "BACKGROUND-IMAGE: url('/shared/wow-com/images/basics/armorsets/border-bot-right.gif');  BACKGROUND-REPEAT: no-repeat; BACKGROUND-POSITION: bottom right;">
                                                                                                                <tr>
                                                                                                                    <td valign = "top">
                                                                                                                        <br><img src = "../../../../shared/wow-com/images/layout/pixel.gif" width = "450" height = "10"><br>
                                                                                                                        <center>
                                                                                                                        <span id="setName" style="font-family: Arial; color: #fff; font-size: 20px; letter-spacing: 1px;">&nbsp;</span>
                                                                                                                        <br><img src = "../../../../shared/wow-com/images/layout/pixel.gif" width = "450" height = "5"><br>
                                                                                                                        <table cellpadding="0" cellspacing="0" border="0">
                                                                                                                            <tr>
                                                                                                                                <td colspan = 3><img src = "../../../../shared/wow-com/images/basics/armorsets/top.gif"></td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td><img src = "../../../../shared/wow-com/images/basics/armorsets/side.gif"></td>
                                                                                                                                <script language = "javascript">
                                                                                                                                document.write('<td><img src = "/shared/wow-com/images/basics/armorsets/'+ theDungeon +'/'+ theClass +'/'+ theRace +'-'+ gender +'.jpg" id = "theImage"></td>');
                                                                                                                                </script>
                                                                                                                                <td><img src = "../../../../shared/wow-com/images/basics/armorsets/side.gif"><td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td colspan = 3><img src = "../../../../shared/wow-com/images/basics/armorsets/top.gif"></td>
                                                                                                                            </tr>
                                                                                                                        </table>
                                                                                                                        <br><br>
                                                                                                                        <img src = "../../../../shared/wow-com/images/layout/pixel.gif" width = "475" height = "10">
                                                                                                                        </center>
                                                                                                                       </span>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
         </td>
         <td>&nbsp;</td>
         <td align = "center" valign = "top" height="100%">
            <table cellpadding="0" cellspacing="0" height="100%">
                <tr><td colspan="3" background="../../../../shared/wow-com/images/basics/armorsets/top.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" height="1" width="100"></td></tr>
                <form id = "armorSets" name = "armorSets">
                <tr>
                    <td background="../../../../shared/wow-com/images/basics/armorsets/side.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" width="1"></td>
                    <td valign="top" bgcolor="#000" align="center" height="100%">
                        <br />
                        <div style = "position: relative; left: 20px; top: -10px;"><div style="position: absolute; _left: -50%; width: 100%; text-align: left;"><img src="../../../../shared/wow-com/images/basics/armorsets/en/options.jpg"></div></div>
                        <div style = "padding: 3px;">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tr><td colspan="3" background="../../../../shared/wow-com/images/basics/armorsets/top.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" height="1" width="100"></td></tr>
                            <tr>
                                <td background="../../../../shared/wow-com/images/basics/armorsets/side.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" width="1" height="1"></td>
                                <td valign ="top" bgcolor="000">
                                    <div style = "padding: 5px; padding-top: 20px;">
                                    <table border = 0 cellpadding = 2 cellspacing = 0 width="100%" style="font-size: 8pt;">
                                        <tr>
                                            <td>&nbsp;<script type="text/javascript">document.write(selectArmortype);</script><br>
                                                <select onChange = "javascript:changeArmorSet(this.value, document.forms['armorSets'].formSelectClass.selectedIndex);" name = "formSelectArmorSet" style="width: 130px;">
                                                    <script language = "javascript">
                                                    for (var a = 0; a < armorSetsValues.length; a++) {
                                                            document.write('<option value = "'+ a +'">'+ armorSetsLocalized[a] +'</option>');
                                                    }
                                                    document.forms["armorSets"].formSelectArmorSet.selectedIndex = theDungeonNumber;
                                                    </script>
                                                </select>
                                            </td>
                                        </tr>
                                                                                <tr>
                                            <td><div id="selectSetSpecDiv" style="display: none;">&nbsp;<script type="text/javascript">document.write(selectSetSpec);</script><br>
                                                <select onchange="changeSetSpec(this.value, document.forms['armorSets'].formSelectClass.selectedIndex)" id="formSelectSetSpec" name="formSelectSetSpec" style="width: 130px;">
                                                                                                        <option value=""></option>
                                                    </select>
                                                                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>&nbsp;<script type="text/javascript">document.write(selectClass);</script><br>
                                                <select onchange="changeClass(this.value)" name = "formSelectClass" style="width: 130px;">
                                                    <script language = "javascript">
                                                        a = 0;
                                                        while (a < classArray.length) {
                                                    //                document.write('<option value ="'+ classArray[a] +'" id = "option'+ classArray[a] +'">'+ classArrayLocalized[a] +'</option>');
                                                                document.write('<option value ="'+ a +'" id = "option'+ classArray[a] +'">'+ classArrayLocalized[a] +'</option>');
                                                                a++;
                                                           }
                                                    </script>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;<script type="text/javascript">document.write(selectRace);</script><br>
                                                <script language = "javascript">
                                                        document.write('<div id = "selectRace">');
                                                        document.write('<select onchange="changeRace(this.value)" name = "formSelectRace"  style="width: 130px;">');
                                                        fillSelectRace(theClassNumber);
                                                        document.write('</select>');
                                                        document.write('</div>');
                                                </script>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;<script type="text/javascript">document.write(selectGender);</script><br>
                                                <select onchange="changeGender(this.value)" name = "formSelectGender" style="width: 130px;">
                                                    <script language = "javascript">
                                                            document.write('<option value ="female">'+ female +'</option>');
                                                            document.write('<option value ="male">'+ male +'</option>');
                                                    </script>
                                                </select>
                                            </td>
                                        </tr>
                                    </table>
                                    </div>
                                </td>
                                <td background="../../../../shared/wow-com/images/basics/armorsets/side.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" width="1"></td>
                            </tr>
                            </form>
                            <tr><td colspan="3" background="../../../../shared/wow-com/images/basics/armorsets/top.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" height="1" width="100"></td></tr>
                        </table>
                        <br><br>
                        <div style = "position: relative; left: 10px; top: -11px;"><div style="position: absolute; _left: -50%; width: 100%; text-align: left;"><img src="../../../../shared/wow-com/images/basics/armorsets/en/title-item.jpg"></div></div>
                        <table cellpadding="0" cellpadding="0" border="0">
                            <tr><td colspan="3" background="../../../../shared/wow-com/images/basics/armorsets/top.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" height="1" width="100"></td></tr>
                            <tr>
                                <td background="../../../../shared/wow-com/images/basics/armorsets/side.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" width="1"></td>
                                <td valign="top" bgcolor="#000">

                                    <div style="padding: 5px;">
                                        <div id="uberLeet"></div>
                                    </div>
                                </td>
                                <td background="../../../../shared/wow-com/images/basics/armorsets/side.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" width="1"></td>
                            </tr>
                            <tr>
                                <td colspan="3" background="../../../../shared/wow-com/images/basics/armorsets/top.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" height="1" width="100"></td>
                            </tr>
                        </table>
                        <center>
                        <table cellpadding="2" cellspacing="0" border="0" width="151">
                            <tr>
                                <td>
                                <span style = "color: ffffff; font-family: tahoma, verdana; font-size: 7.5pt;">
                                    <script language = "javascript">
                                            document.write(mouseOverIcons);
                                    </script>
                                </span>
                                </td>
                            </tr>
                        </table>
                    </center>
                    <p>
                    </td>
                    <td background="../../../../shared/wow-com/images/basics/armorsets/side.gif"><img src="../../../../shared/wow-com/images/layout/pixel.gif" width="1"></td>
                </tr>
                <tr><td colspan="3" background="../../../../shared/wow-com/images/basics/armorsets/top.gif"><img src = ../../../../shared/wow-com/images/layout/pixel.gif height="1" width="100"></td></tr>
            </table>
               </td>
    </tr>
</table>

<script language = "javascript">

var showItemID = theClassNumber * armorSetsArray[theDungeonNumber].slotsNumber;
switcherooo();
changeClass(theClassNumber);
changeClassColors(theRaceNumber);
changeRace(theRaceNumber);

document.forms["armorSets"].formSelectClass.selectedIndex = theClassNumber;
if (gender == "female")
        document.forms["armorSets"].formSelectGender.selectedIndex = 0;
else
        document.forms["armorSets"].formSelectGender.selectedIndex = 1;

</script>

        <ul>
        <li><b>Dungeon set 1:</b> Players can acquire this set from Stratholme, Scholomance and Blackrock Spire.</li>
        <li><b>Dungeon set 2:</b> Players with set 1 can upgrade to this set by completing a new quest series.</li>
        <li><b>Dungeon set 3:</b> These sets can be found in the level 70 wings of dungeons throughout Outland.</li>
        <li><b>Tier 1 raid set:</b> These sets are obtained from Molten Core.</li>
        <li><b>Tier 2 raid set:</b> This armor is found inside Molten Core, Onyxia's Lair and Blackwing Lair.</li>
        <li><b>Tier 3 raid set:</b> This armor is found in Naxxramas.</li>
        <li><b>Tier 4 raid set:</b> This armor can be obtained from Asuur (Aldor) or Arodis Sunblade (Scryer) in Shattrath City using tokens obtained from Karazhan, Gruul's Lair, and Magtheridon's Lair.</li>
        <li><b>Tier 5 raid set:</b> This armor can be obtained from Kelara (Aldor) or Veynna Dawnstar (Scryer) in Shattrath City using tokens obtained from Serpentshrine Cavern and Tempest Keep.</li>
        <li><b>PvP Superior set:</b> This armor can be purchased using points accumulated through the Honor System.</li>
        <li><b>PvP Epic set:</b> This armor can be purchased using points accumulated through the Honor System.</li>
        <li><b>PvP Level 70 Armor:</b> This armor can be purchased using points accumulated through the Honor System.</li>
        <li><b>Arena Gladiator Set:</b> This armor can be purchased using points accumulated through the Arena System.</li>
        </ul>
<br><br><br><br><br><br><br><br><br><br><br>

    </div>
</div>

<!--Related Links-->
<div class = "guideHeader">
<table width="100%" align="center" cellspacing = "0" cellpadding = "0" border = "0" >
<tr>
        <td width="10"><img src="../../../../shared/wow-com/images/headers/tabheader/tabheader-left-left.jpg" width="17" height="29" border="0" ></td>
    <td width = "362" background = "../../../../shared/wow-com/images/headers/tabheader/tabheader-left.jpg" align = "left" NOWRAP><h3 class = "guideTitle">Related Links</h3></td>
        <td width="100%" background = "../../../../shared/wow-com/images/headers/tabheader/tabheader-bg.jpg"></td>
</tr>
</table>
</div>

<div class = "postContainerPlain">
<div class = "postBody">
<script language = "javascript">
printSubNav(result,2)
printRelatedLinks(result);
</script>
</div>
</div>
<!--End Related Links-->


</td>
</tr>
</table>
</div>
</center>
</div>
<div id="pageEnd"></div>

</body>

</html>

<? include $Offset."bottem.php"; ?>