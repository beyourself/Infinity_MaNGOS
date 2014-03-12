<? $Offset = '../../'; ?>
<? $Offsetpic = '../../'; ?>
<? include $Offset."../setup/eng.php"; ?>
<? include $Offset."header.php"; ?>
<? include $Offset."center.php"; ?>

<style type="text/css">

#contents{
visibility: hidden;
position: absolute;
Z-INDEX: 999999;
width: 5px;
filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale src='../../../shared/wow-com/images/backgrounds/blue-bg.png');
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
background-image:url(../../../shared/wow-com/images/backgrounds/blue-bg.png);
}

</style>
<div id="contents">
                        <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%">
                          <tr>
                                <td width = "1" height = "1"></td>
                                <td bgcolor = "#ffffff" height = "1"><img src = "../../../wow-com/images/layout/pixel.html" width = "1" height = "1"></td>
                                <td width = "1" height = "1"></td>
                          </tr>
                          <tr>
                                <td bgcolor = "#A5A5A5" width = "1"><img src = "../../../wow-com/images/layout/pixel.html" width = "1" height = "1"></td>
                                <td valign = "top" class="trans_div"><div id="tooltipText"></div></td>
                                <td bgcolor = "#A5A5A5" width = "1"><img src = "../../../wow-com/images/layout/pixel.html" width = "1" height = "1"></td>
                          </tr>
                          <tr>
                                <td width = "1" height = "1"></td>
                                <td bgcolor = "#4F4F4F"><img src = "../../../wow-com/images/layout/pixel.html" width = "1" height = "2"></td>
                                <td width = "1" height = "1"></td>
                          </tr>
                        </table>
</div>


<script type="text/javascript" src="../../../shared/wow-com/includes-client/third-party/tooltip.js"></script>
<link rel="stylesheet" type="text/css" href="../../../shared/wow-com/includes-client/vendorwindow/vendortable.html">

<script language="javascript">
var apprenticeskinning = '<span class = "myYellow">\
Skinning (Apprentice)</span><br>\
<span class="myTable">\
5 yd range<br>\
2.5 sec cast<br>\
Tools: Skinning Knife<br>\
The basics of how to skin animals for their pelts and furs for use in Leatherworking.<br>\
Gives a potential skinning skill of 75. Requires a Skinning Knife.<br>\
</span>';
var journeymanskinning = '<span class = "myYellow">\
Skinning (Journeyman)<br>\
<span class="myTable">\
5 yd range<br>\
2.5 sec cast<br>\
Tools: Skinning Knife<br>\
Advanced skills in skinning the leather from beasts for use in Leatherworking.<br>\
Gives a potential skinning skill of 125. Requires a Skinning Knife.<br>\
</span>';
var expertskinning = '<span class = "myYellow">\
Skinning (Expert)<br>\
<span class="myTable">\
5 yd range<br>\
2.5 sec cast<br>\
Tools: Skinning Knife<br>\
Advanced skills in skinning the leather from beasts for use in Leatherworking.<br>\
Gives a potential skinning skill of 225. Requires a Skinning Knife.<br>\
</span>';
var artisanskinning = '<span class = "myYellow">\
Skinning (Artisan)<br>\
<span class="myTable">\
5 yd range<br>\
2.5 sec cast<br>\
Tools: Skinning Knife<br>\
Advanced skills in skinning the leather from beasts for use in Leatherworking.<br>\
Gives a potential skinning skill of 300. Requires a Skinning Knife.<br>\
</span>';
</script>
<STYLE type="text/css">
  .myTable { color: FFFFFF; font-size: 9pt; position:relative; display: block;}
TD.menuHeader         {
background-image: url('../../../images/parchment-light.html');
background-color: #E9D4A9;
font-family: Arial,Helvetica,Sans-Serif; color: #000000; font-size: 10pt;
border-style: solid;
border-width: 1px;
border-color: #FEF4DF #A2957F #686152 #FFF3D7;
}
TD.menuHeader2         {
background-image: url('../../../images/parchment-light3.html');
background-color: #E9D4A9;
font-family: Arial,Helvetica,Sans-Serif; color: #000000; font-size: 10pt;
border-style: solid;
border-width: 1px;
border-color: #FEF4DF #A2957F #686152 #FFF3D7;
}
a.button:link                { color: #003366; display: block; padding: 2px; padding-left: 4px; padding-right: 4px;}
a.button:visited         { color: #003366; display: block; padding: 2px; padding-left: 4px; padding-right: 4px; }
a.button:hover                { color: #C60000; background-image: url('../../../images/parchment-light3.html'); display: block; padding: 2px; padding-left: 4px; padding-right: 4px; }
a.button:active         { color: #FFFFFF; display: block; padding: 2px; padding-left: 4px; padding-right: 4px; }
TD.headerOutline2         { border-style: solid; border-width: 1px; border-color: #271A13; padding: 2px; padding-bottom:0px;}
TD.headerOutline3         { border-style: solid; border-width: 1px; border-color: #5B492C #000000 #000000 #5B492C; padding: 0px;}
TD.headerOutline4         { border-style: solid; border-width: 1px; border-bottom-width: 0px; border-color: #5B492C #000000 #000000 #5B492C; padding: 0px;}
</STYLE>
<SCRIPT language="JavaScript" src="../../../includes/wow-2.html"></SCRIPT>
<!--HEADER-->
<DIV class = "header">
<TABLE cellspacing = "0" cellpadding = "0" border = "0" width = "100%">
<TR>
        <TD colspan = "3"><IMG src = "../../../shared/wow-com/images/layout/pixel.gif" width = "1" height = "12"></TD>
</TR>
<TR>
        <TD width = "29"><IMG src = "../../../shared/wow-com/images/headers/dateheader/dateheader-left.gif" width = "31" height = "38"></TD>
        <TD background = "../../../shared/wow-com/images/headers/dateheader/dateheader-bg.gif" width = "100%"><H3 class = "titleLight">Skinning Basics</H3></TD>
        <TD width = "17"><IMG src = "../../../shared/wow-com/images/headers/dateheader/dateheader-right.gif" width = "17" height = "38"></TD>
</TR>
</TABLE>
</DIV>
<!-- BEGIN OLD BANNER SHOW X--
<!-- END OLD BANNER SHOW -->
<!-- BEGIN NEW BANNER HIDDEN Y-->




<style type="text/css">
        .attribute                 { font-family: "Arial", "Helvetica", "Sans-Serif"; color: #000000; font-weight: bold; font-size: 12;}
              #icon { position: absolute;
                        top: -79px; _top: -81px;
                        left: 0px;
                        z-index: 100;
       }
              #text { position: relative;
                        top: 80px;
                        left: 125px;
                        z-index: 100;
       }
                #wrapper { position: relative;
                        z-index: 100;
       }
                #wrapper99 { position: relative;
                        z-index: 99;
       }
</style>
<table cellspacing = "0" cellpadding = "0" border = "0" width="100%" style="background: url('../../../shared/wow-com/images/guide-banners/yourcharacter/background.jpg'); background-position:-200px 0px;">
  <tr>
          <td>
                  <div id="wrapper99">
                        <div id = "icon">
                                <img src="../../../shared/wow-com/images/guide-banners/yourcharacter/icon.jpg" title="">
                        </div>
                </div>
          </td>
          <td>
                  <div id = "wrapper">
                        <div id = "text">
                                <img src="../../../shared/wow-com/images/guide-banners/yourcharacter/en/header-text.gif">
                        </div>
                </div>
          </td>
            <td><img src="../../../shared/wow-com/images/layout/pixel.gif" width="1" height="162"></td>
  </tr>
  <tr>
          <td colspan="3">
                  <table cellspacing = "0" cellpadding = "0" border = "0" width = "100%">
                          <tr>
                                <td background = "../../../shared/wow-com/images/banner/bottom.gif" width = "100%" ><img src = "../../../shared/wow-com/images/layout/pixel.gif" height = "18" width = "1"></td>
                          </tr>
                  </table>
          </td>
  </tr>
</table>
<!-- END NEW BANNER HIDDEN -->
<!-- BEGIN OLD Subnav SHOW X--
<div class="postContainerPlain">
<div class="postBody">
<CENTER>




<small><a href = "
/en/info/professions/basics.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Basics</a> |</small>
<small><a href = "
/en/info/professions/intro.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Introduction</a> |</small>
<small><a href = "
/en/info/professions/herbalism.html
"  ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Herbalism</a> |</small>
<small><a href = "
/en/info/professions/mining.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Mining</a> |</small>
<small><a href = "
/en/info/professions/skinning.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Skinning</a> |</small>
<small><a href = "
/en/info/professions/blacksmithing.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Blacksmithing</a> |</small>
<small><a href = "
/en/info/professions/engineering.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Engineering</a> |</small>
<small><a href = "
/en/info/professions/alchemy.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Alchemy</a> |</small>
<small><a href = "
/en/info/professions/leatherworking.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Leatherworking</a> |</small>
<small><a href = "
/en/info/professions/tailoring.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Tailoring</a> |</small>
<small><a href = "
/en/info/professions/enchanting.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Enchanting</a> |</small>
<small><a href = "
/en/info/professions/cooking.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Cooking</a> |</small>
<small><a href = "
/en/info/professions/fishing.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">Fishing</a> |</small>
<small><a href = "
/en/info/professions/firstaid.html
" ><img src = "/shared/wow-com/images/layout/pixel.gif" width = "1" height = "1" border = "0">First Aid</a> |</small>

</CENTER>
<P>
</div>
</div>
<!-- End OLD Subnav SHOW -->
<!-- BEGIN NEW Subnav HIDDEN Y-->
<script language = "javascript">
var pageId = "Skinning";
</script>


<script type="text/javascript" src="../../../shared/wow-com/includes-client/en/navtree.js"></script>


<script type="text/javascript" src="../../../shared/third-party/menu_com.js"></script>
<script type="text/javascript" src="../../../shared/wow-com/includes-client/navtreefunctions.js"></script>


<style type="text/css">

.navigation
                {
                font-family:arial,palatino, georgia, verdana, arial, sans-serif;
                color:#000000;
                padding:5px;
                margin-bottom: 4px;
                background-color: #E7CFA3;
                background-image: url('../../../shared/wow-com/images/parchment/plain/light.jpg');
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
<table cellspacing = "0" cellpadding = "0" border = "0" width = "96%">
<tr>

<script language = "javascript">

        var iconId;
        if (result!=1)
                document.write('<td width="59" rowspan="3" valign = "top"><a href = "' + Menu2[1] + '"><img src = "/shared/wow-com/images/subnav/icon_' + Menu2[11].toLowerCase() + '.jpg" width="59" height="65" border = "0"></a></td>');
        else
                document.write('<td width="59" rowspan="3" valign = "top"><a href = "' + Menu1[1] + '"><img src = "/shared/wow-com/images/subnav/icon_' + Menu1[11].toLowerCase() + '.jpg" width="59" height="65" border = "0"></a></td>');
</script>



<td height="15" background="../../../shared/wow-com/images/subnav/nav_top.jpg"></td>
<td width="18" height="65" rowspan="3" style="background-image:url(../../../shared/wow-com/images/subnav/nav_right.jpg); background-position:top; background-repeat:no-repeat;"></td>
</tr>

<tr>
<td height="17" background="../../../shared/wow-com/images/subnav/nav_middle.jpg" nowrap><div id = "filterMenu"></div></td>
</tr>

<tr>
<td>
        <table cellpadding="0" cellspacing="0" border="0">
        <tr>
        <td width="5" height="33" style="background-image:url(../../../shared/wow-com/images/subnav/leftsubnav.jpg); background-position:top; background-repeat:repeat-x;"><img src="../../../shared/wow-com/images/layout/pixel.gif" width="5" height="1"></td>
        <td height="33" background="../../../shared/wow-com/images/subnav/subnav.jpg" width="100%">
                <table height="33" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                <td width="5" height="5" background="../../../shared/wow-com/images/subnav/subnav_topleft.gif"></td>
                <td height="5" background="../../../shared/wow-com/images/subnav/subnav_top.gif"></td>
                <td width="6" height="5" background="../../../shared/wow-com/images/subnav/subnav_topright.gif"></td>
                </tr>
                <tr>
                <td width="5" height="19" background="../../../shared/wow-com/images/subnav/subnav_left.gif"></td>
                <td height="19" style="text-align:center;" background="../../../shared/wow-com/images/subnav/subnav_bg.gif" valign="middle"><img src="../../../shared/wow-com/images/layout/pixel.gif" width="1" height="1"><small class="button" style="color:#808080; letter-spacing:normal;">

<script language = "javascript">

//printSubNav(result,1);

printSubNav2(result);

</script>


                </small></td>
                <td width="6" height="19" background="../../../shared/wow-com/images/subnav/subnav_right.gif"></td>
                </tr>
                <tr>
                <td width="5" height="9" background="../../../shared/wow-com/images/subnav/subnav_botleft.gif"></td>
                <td height="9" background="../../../shared/wow-com/images/subnav/subnav_bot.gif"></td>
                <td width="6" height="9" background="../../../shared/wow-com/images/subnav/subnav_botright.gif"></td>
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



<!-- END NEW Subnav HIDDEN -->
<!--END HEADER-->
<!--END HEADER-->
<DIV class = "postContainerPlain">
<DIV class = "postBody">
<!--MAIN-->

<CENTER>
<TABLE cellpadding = "0" cellspacing = "0" border = "0" width = "80%">
        <TR>
                <TD>
                <SPAN>
                        <IMG src="../../../shared/wow-com/images/info/professions/skinning/skinningicon.gif" width="70" height="64" border="0" align="left">
                        Skinning allows players to gather leather and hides by skinning animals.
                        Leather and hides are used for leatherworking.
                        Leather is also used for some blacksmithing, engineering, and tailoring recipes.
                </SPAN>
                </TD>
        </TR>
        <TR>
                <TD><IMG src = "../../../shared/wow-com/images/layout/pixel.gif" width = "512" height = "1" border = "0"></TD>
        </TR>
</TABLE>
</CENTER>
<P>
</DIV>
</DIV>
<!--Getting Started-->
<DIV class = "guideHeader">
<TABLE width="100%" align="center" cellspacing = "0" cellpadding = "0" border = "0" >
<TR>
        <TD width="10"><IMG src="../../../shared/wow-com/images/headers/tabheader/tabheader-left-left.jpg" width="17" height="29" border="0" ></TD>
    <TD width = "362" background = "../../../shared/wow-com/images/headers/tabheader/tabheader-left.jpg" align = "left" nowrap><H3 class = "guideTitle">Becoming a Skinner</H3></TD>
        <TD width="100%" background = "../../../shared/wow-com/images/headers/tabheader/tabheader-bg.jpg"></TD>
          <TD width="26"><IMG src="../../../shared/wow-com/images/headers/tabheader/tabheader-right.jpg" width="26" height="29" border="0"></TD>
        <TD width="50"><IMG src="../../../shared/wow-com/images/layout/pixel.gif" width="50" height="29" border="0"></TD>
</TR>
</TABLE>
</DIV>
<DIV class = "postContainerPlain">
<DIV class = "postBody">
<CENTER>
<TABLE cellpadding = "0" cellspacing = "0" border = "0" width = "80%">
<TR>
        <TD>
                <SPAN><IMG src="../../../shared/wow-com/images/info/professions/skinning/mskinningknife.gif" width="55" height="55" border="0" align="left">
        First, find an NPC who can teach you the skinning profession (look for the words "&lt;Skinner&gt;" under the NPC's name). They will likely be somewhere near leatherworking trainers.
        Now, you need to purchase a skinning knife. You can find skinning knives at merchants who sell Profession-related items. Place the skinning knife somewhere in your bag. You do not need to equip it.
        <P>
                </SPAN>
        </TD>
        <TD>
        <A href="../../../shared/wow-com/images/info/professions/skinning/screenshots/en/ss01.jpg"><IMG src="../../../shared/wow-com/images/info/professions/skinning/en/ss01-thumb.jpg" width="202" height="143"  align="right" border="0"></A>
        </TD>
</TR>
<TR>
        <TD colspan = "2"><IMG src = "../../../shared/wow-com/images/layout/pixel.gif" width = "512" height = "1" border = "0"></TD>
</TR>
</TABLE>
</CENTER>
<!--Getting Started-->
</DIV>
</DIV>
<!--Second tab-->
<DIV class = "guideHeader">
<TABLE width="100%" align="center" cellspacing = "0" cellpadding = "0" border = "0" >
<TR>
        <TD width="10"><IMG src="../../../shared/wow-com/images/headers/tabheader/tabheader-left-left.jpg" width="17" height="29" border="0" ></TD>
    <TD width = "362" background = "../../../shared/wow-com/images/headers/tabheader/tabheader-left.jpg" align = "left" nowrap><H3 class = "guideTitle">How to Skin Animals</H3></TD>
        <TD width="100%" background = "../../../shared/wow-com/images/headers/tabheader/tabheader-bg.jpg"></TD>
          <TD width="26"><IMG src="../../../shared/wow-com/images/headers/tabheader/tabheader-right.jpg" width="26" height="29" border="0"></TD>
        <TD width="50"><IMG src="../../../shared/wow-com/images/layout/pixel.gif" width="50" height="29" border="0"></TD>
</TR>
</TABLE>
</DIV>
<DIV class = "postContainerPlain">
<DIV class = "postBody">
<CENTER>
<TABLE cellpadding = "0" cellspacing = "0" border = "0" width = "80%">
<TR>
        <TD>
                <SPAN><IMG src="../../../shared/wow-com/images/info/professions/leatherworking/pelt.gif" width="55" height="55" border="0" align="left">
                <A href="../../../shared/wow-com/images/info/professions/skinning/screenshots/en/ss02.jpg"><IMG src="../../../shared/wow-com/images/info/professions/skinning/ss02-thumb.jpg" width="202" height="143"  align="right" border="0"></A>
                Only certain monsters can be skinned. When you kill a monster, select its corpse to see if it is skinnable.
                If the animal is skinnable, it will display "Skinnable," with a color to indicate the difficulty.
                Open up your abilities book ("p") and find the "Skinning" icon. Drag the icon over to your action bar.
                Right-click on the icon and target a corpse that is marked as skinnable. Your character will then begin to skin the monster.
                You can also simply just right-click on the corpse to skin it after it has been looted.
                <P>
                <P>
                </SPAN>
        </TD>
</TR>
<TR>
        <TD colspan = "2"><IMG src = "../../../shared/wow-com/images/layout/pixel.gif" width = "512" height = "1" border = "0"></TD>
</TR>
</TABLE>
</CENTER>
</DIV>
</DIV>
<!--Second tab-->
<!--Third tab-->
<DIV class = "guideHeader">
<TABLE width="100%" align="center" cellspacing = "0" cellpadding = "0" border = "0" >
<TR>
        <TD width="10"><IMG src="../../../shared/wow-com/images/headers/tabheader/tabheader-left-left.jpg" width="17" height="29" border="0" ></TD>
    <TD width = "362" background = "../../../shared/wow-com/images/headers/tabheader/tabheader-left.jpg" align = "left" nowrap><H3 class = "guideTitle">Information</H3></TD>
        <TD width="100%" background = "../../../shared/wow-com/images/headers/tabheader/tabheader-bg.jpg"></TD>
          <TD width="26"><IMG src="../../../shared/wow-com/images/headers/tabheader/tabheader-right.jpg" width="26" height="29" border="0"></TD>
        <TD width="50"><IMG src="../../../shared/wow-com/images/layout/pixel.gif" width="50" height="29" border="0"></TD>
</TR>
</TABLE>
</DIV>
<DIV class = "postContainerPlain">
<DIV class = "postBody">
<CENTER>
<TABLE cellpadding = "0" cellspacing = "0" border = "0" width = "80%">
<TR>
<TD>
<SPAN><IMG src="../../../shared/wow-com/images/info/professions/skinning/skinningperson1.jpg" width="220" height="400" border="0" align="right">
<LI> As your skill goes up, you become better at gathering higher-quality materials.
<BR><BR>
<LI> The text displaying "Skinnable" is colored the same way as other trade skill abilities, indicating how difficult the task is (or whether it's even possible at your current skill level) as well as how likely you are to earn skill points.
<BR><BR>
<LI>You cannot skin the monster if your skill is not high enough. You will have to practice on lower-level monsters that are easier until you have enough skill to skin a higher-level monster.
<BR><BR>
<LI> If you kill the animal (or it's your turn to loot it in a group), you must loot it before you can skin it.
<BR><BR>
<LI>You can skin animals that have been killed by other players that are just lying around if they have looted the corpse.
<P>
</SPAN>
        </TD>
</TR>
<TR>
        <TD colspan = "2"><IMG src = "../../../shared/wow-com/images/layout/pixel.gif" width = "512" height = "1" border = "0"></TD>
</TR>
</TABLE>
</CENTER>
<!--Third tab
</DIV>
</DIV>
<DIV class = "guideHeader">
<TABLE width="100%" align="center" cellspacing = "0" cellpadding = "0" border = "0" >
<TR>
        <TD width="10"><IMG src="/shared/wow-com/images/headers/tabheader/tabheader-left-left.jpg" width="17" height="29" border="0" ></TD>
    <TD width = "362" background = "/shared/wow-com/images/headers/tabheader/tabheader-left.jpg" align = "left" nowrap><H3 class = "guideTitle">Skill Table</H3></TD>
        <TD width="100%" background = "/shared/wow-com/images/headers/tabheader/tabheader-bg.jpg"></TD>
          <TD width="26"><IMG src="/shared/wow-com/images/headers/tabheader/tabheader-right.jpg" width="26" height="29" border="0"></TD>
        <TD width="50"><IMG src="/shared/wow-com/images/layout/pixel.gif" width="50" height="29" border="0"></TD>
</TR>
</TABLE>
</DIV>
<DIV class = "postContainerPlain">
<DIV class = "postBody">
<CENTER>
<table cellpadding="0" cellspacing="0" border="0" width="398">
        <tr>
                <td background="/shared/wow-com/images/basics/vendor/top.jpg" height="113" width="398" colspan="7"></td>
        </tr>
        <tr>
                <td width="9"></td>
                <td background="/shared/wow-com/images/basics/vendor/left.jpg" width="23"></td>
                <td background="/shared/wow-com/images/basics/vendor/background-top-top.jpg" colspan="4">
                <img src="/shared/wow-com/images/basics/vendor/collapse.jpg" align="left"><font color="#cca700"><b>Development Skills</b></font><br>
                <select size="4" onChange="changeLevel(this.value)">
                        <option value="apprentice" SELECTED>Apprentice Skinning</option><br>
                        <option value="journeyman">Journeyman Skinning</option><br>
                        <option value="expert">Expert Skinning</option><br>
                        <option value="artisan">Artisan Skinning</option>
<script language = "javascript">
var i = 0;

function changeLevel(whichLevel) {
        document.getElementById('apprentice').style.display = "none";
        document.getElementById('journeyman').style.display = "none";
        document.getElementById('expert').style.display = "none";
        document.getElementById('artisan').style.display = "none";

        if (whichLevel == 'apprentice')
                document.getElementById('apprentice').style.display = "inline";
        else if (whichLevel == 'journeyman')
                document.getElementById('journeyman').style.display = "inline";
        else if (whichLevel == 'expert')
                document.getElementById('expert').style.display = "inline";
        else if (whichLevel == 'artisan')
                document.getElementById('artisan').style.display = "inline";

}

</script>
</select></td>

        <td background="/shared/wow-com/images/basics/vendor/right.jpg" width="23"></td>
        </tr>
        <tr align="center" height="25">
                <td width="9"></td>
                <td background="/shared/wow-com/images/basics/vendor/divider-left.jpg"></td>
                <td background="/shared/wow-com/images/basics/vendor/divider.jpg" colspan="4"></td>
                <td background="/shared/wow-com/images/basics/vendor/divider-right.jpg"></td>
        </tr>
        <tr>
                <td width="9"></td>
                <td background="/shared/wow-com/images/basics/vendor/left.jpg" width="23"></td>
                <td background="/shared/wow-com/images/basics/vendor/background-top-top.jpg"><div id="apprentice" style="display: none;"><span onMouseover="ddrivetip(apprenticeskinning)"; onMouseout="hideddrivetip();"><img src="/shared/wow-com/images/icons/45x46square/skinning-blacked.jpg" align="left"><font color="#cca700">Apprentice Skinning<br><br><br>Cost: 10<img src="/shared/wow-com/images/basics/factions/copper.gif"><br><font color="#FFFFFF">The basics of how to skin animals for their pelts and furs for use in Leatherworking. Gives a potential skinning skill of 75. Requires a Skinning Knife.</span></div></td>
                <td background="/shared/wow-com/images/basics/vendor/background-top-top.jpg"><div id="journeyman" style="display: none;"><span onMouseover="ddrivetip(journeymanskinning)"; onMouseout="hideddrivetip();"><img src="/shared/wow-com/images/icons/45x46square/skinning-blacked.jpg" align="left"><font color="#cca700">Apprentice Skinning<br><br><br>Cost: 1<img src="/shared/wow-com/images/basics/factions/silver.gif"><br><font color="#FFFFFF">The basics of how to skin animals for their pelts and furs for use in Leatherworking. Gives a potential skinning skill of 125. Requires a Skinning Knife.</span></div></td>
                <td background="/shared/wow-com/images/basics/vendor/background-top-top.jpg"><div id="expert" style="display: none;"><span onMouseover="ddrivetip(expertskinning)"; onMouseout="hideddrivetip();"><img src="/shared/wow-com/images/icons/45x46square/skinning-blacked.jpg" align="left"><font color="#cca700">Apprentice Skinning<br><br><br>Cost: 1<img src="/shared/wow-com/images/basics/factions/gold.gif"><br><font color="#FFFFFF">The basics of how to skin animals for their pelts and furs for use in Leatherworking. Gives a potential skinning skill of 225. Requires a Skinning Knife.</span></div></td>
                <td background="/shared/wow-com/images/basics/vendor/background-top-top.jpg"><div id="artisan" style="display: none;"><span onMouseover="ddrivetip(artisanskinning)"; onMouseout="hideddrivetip();"><img src="/shared/wow-com/images/icons/45x46square/skinning-blacked.jpg" align="left"><font color="#cca700">Apprentice Skinning<br><br><br>Cost: 5<img src="/shared/wow-com/images/basics/factions/gold.gif"><br><font color="#FFFFFF">The basics of how to skin animals for their pelts and furs for use in Leatherworking. Gives a potential skinning skill of 300. Requires a Skinning Knife.</span></div></td>
                <td background="/shared/wow-com/images/basics/vendor/right.jpg" width="23"></td>
        </tr>
        <tr>
                <td background="/shared/wow-com/images/basics/vendor/bottom.jpg" colspan="7" height="43" width="398"></td>
        </tr>
</table>
</CENTER>

</DIV>
</DIV-->
<!--END MAIN-->
<!--Related Links-->
<div class = "guideHeader">
<table width="100%" align="center" cellspacing = "0" cellpadding = "0" border = "0" >
<tr>
        <td width="10"><img src="../../../shared/wow-com/images/headers/tabheader/tabheader-left-left.jpg" width="17" height="29" border="0" ></td>
    <td width = "362" background = "../../../shared/wow-com/images/headers/tabheader/tabheader-left.jpg" align = "left" NOWRAP><h3 class = "guideTitle">Related Links</h3></td>
        <td width="100%" background = "../../../shared/wow-com/images/headers/tabheader/tabheader-bg.jpg"></td>
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


</body></html>


<script language="JavaScript">
<!--
var SymRealOnLoad;
var SymRealOnUnload;

function SymOnUnload()
{
  window.open = SymWinOpen;
  if(SymRealOnUnload != null)
     SymRealOnUnload();
}

function SymOnLoad()
{
  if(SymRealOnLoad != null)
     SymRealOnLoad();
  window.open = SymRealWinOpen;
  SymRealOnUnload = window.onunload;
  window.onunload = SymOnUnload;
}

SymRealOnLoad = window.onload;
window.onload = SymOnLoad;

//-->
</script>
<? include $Offset."bottem.php"; ?>
