<? $Offset = '../../'; ?>
<? $Offsetpic = '../../'; ?>
<? include $Offset."../setup/eng.php"; ?>
<? include $Offset."header.php"; ?>
<? include $Offset."center.php"; ?>


<link type="text/css" rel="stylesheet" href="../../../shared/wow-com/includes-client/dance.css"></link>

<script type="text/javascript">

var thisGender = 0;
var thisRace = 0;

var i = 0;
var danceList = new Array();
danceList[i] = ["/shared/wow-com/images/basics/dancing/gifs/dwarf_male.swf","/shared/wow-com/images/basics/dancing/gifs/dwarf_female.swf"]; i++;
danceList[i] = ["/shared/wow-com/images/basics/dancing/gifs/gnome_male.swf","/shared/wow-com/images/basics/dancing/gifs/gnome_female.swf"]; i++;
danceList[i] = ["/shared/wow-com/images/basics/dancing/gifs/human_male.swf","/shared/wow-com/images/basics/dancing/gifs/human_female.swf"]; i++;
danceList[i] = ["/shared/wow-com/images/basics/dancing/gifs/nightelf_male.swf","/shared/wow-com/images/basics/dancing/gifs/nightelf_female.swf"]; i++;
danceList[i] = ["/shared/wow-com/images/basics/dancing/gifs/orc_male.swf","/shared/wow-com/images/basics/dancing/gifs/orc_female.swf"]; i++;
danceList[i] = ["/shared/wow-com/images/basics/dancing/gifs/tauren_male.swf","/shared/wow-com/images/basics/dancing/gifs/tauren_female.swf"]; i++;
danceList[i] = ["/shared/wow-com/images/basics/dancing/gifs/troll_male.swf","/shared/wow-com/images/basics/dancing/gifs/troll_female.swf"]; i++;
danceList[i] = ["/shared/wow-com/images/basics/dancing/gifs/undead_male.swf","/shared/wow-com/images/basics/dancing/gifs/undead_female.swf"]; i++;

var i = 0;
var linkList = new Array();
linkList[i] = [["/shared/wow-com/images/basics/dancing/gifs/dwarf_male250x.zip","../shared/wow-com/images/basics/dancing/gifs/dwarf_male250b.zip","/shared/wow-com/images/basics/dancing/gifs/dwarf_male120x.zip"],["/shared/wow-com/images/basics/dancing/gifs/dwarf_female250x.zip","../shared/wow-com/images/basics/dancing/gifs/dwarf_female250b.zip","/shared/wow-com/images/basics/dancing/gifs/dwarf_female120x.zip"]]; i++;
linkList[i] = [["/shared/wow-com/images/basics/dancing/gifs/gnome_male250x.zip","../shared/wow-com/images/basics/dancing/gifs/gnome_male250b.zip","/shared/wow-com/images/basics/dancing/gifs/gnome_male120x.zip"],["/shared/wow-com/images/basics/dancing/gifs/gnome_female250x.zip","../shared/wow-com/images/basics/dancing/gifs/gnome_female250b.zip","/shared/wow-com/images/basics/dancing/gifs/gnome_female120x.zip"]]; i++;
linkList[i] = [["/shared/wow-com/images/basics/dancing/gifs/human_male250x.zip","../shared/wow-com/images/basics/dancing/gifs/human_male250b.zip","/shared/wow-com/images/basics/dancing/gifs/human_male120x.zip"],["/shared/wow-com/images/basics/dancing/gifs/human_female250x.zip","../shared/wow-com/images/basics/dancing/gifs/human_female250b.zip","/shared/wow-com/images/basics/dancing/gifs/human_female120x.zip"]]; i++;
linkList[i] = [["/shared/wow-com/images/basics/dancing/gifs/nightelf_male250x.zip","../shared/wow-com/images/basics/dancing/gifs/nightelf_male250b.zip","/shared/wow-com/images/basics/dancing/gifs/nightelf_male120x.zip"],["/shared/wow-com/images/basics/dancing/gifs/nightelf_female250x.zip","../shared/wow-com/images/basics/dancing/gifs/nightelf_female250b.zip","/shared/wow-com/images/basics/dancing/gifs/nightelf_female120x.zip"]]; i++;
linkList[i] = [["/shared/wow-com/images/basics/dancing/gifs/orc_male250x.zip","../shared/wow-com/images/basics/dancing/gifs/orc_male250b.zip","/shared/wow-com/images/basics/dancing/gifs/orc_male120x.zip"],["/shared/wow-com/images/basics/dancing/gifs/orc_female250x.zip","../shared/wow-com/images/basics/dancing/gifs/orc_female250b.zip","/shared/wow-com/images/basics/dancing/gifs/orc_female120x.zip"]]; i++;
linkList[i] = [["/shared/wow-com/images/basics/dancing/gifs/tauren_male250x.zip","../shared/wow-com/images/basics/dancing/gifs/tauren_male250b.zip","/shared/wow-com/images/basics/dancing/gifs/tauren_male120x.zip"],["/shared/wow-com/images/basics/dancing/gifs/tauren_female250x.zip","../shared/wow-com/images/basics/dancing/gifs/tauren_female250b.zip","/shared/wow-com/images/basics/dancing/gifs/tauren_female120x.zip"]]; i++;
linkList[i] = [["/shared/wow-com/images/basics/dancing/gifs/troll_male250x.zip","../shared/wow-com/images/basics/dancing/gifs/troll_male250b.zip","/shared/wow-com/images/basics/dancing/gifs/troll_male120x.zip"],["/shared/wow-com/images/basics/dancing/gifs/troll_female250x.zip","../shared/wow-com/images/basics/dancing/gifs/troll_female250b.zip","/shared/wow-com/images/basics/dancing/gifs/troll_female120x.zip"]]; i++;
linkList[i] = [["/shared/wow-com/images/basics/dancing/gifs/undead_male250x.zip","../shared/wow-com/images/basics/dancing/gifs/undead_male250b.zip","/shared/wow-com/images/basics/dancing/gifs/undead_male120x.zip"],["/shared/wow-com/images/basics/dancing/gifs/undead_female250x.zip","../shared/wow-com/images/basics/dancing/gifs/undead_female250b.zip","/shared/wow-com/images/basics/dancing/gifs/undead_female120x.zip"]]; i++;

var i = 0;
var sizeList = new Array();
sizeList[i] = [["339","329","92"],["205","228","63"]]; i++;
sizeList[i] = [["321","401","92"],["395","387","105"]]; i++;
sizeList[i] = [["303","310","81"],["216","197","55"]]; i++;
sizeList[i] = [["443","446","117"],["302","310","85"]]; i++;
sizeList[i] = [["316","323","95"],["230","216","69"]]; i++;
sizeList[i] = [["423","411","108"],["558","533","130"]]; i++;
sizeList[i] = [["227","221","57"],["235","238","72"]]; i++;
sizeList[i] = [["108","114","27"],["282", "301", "81"]]; i++;

function reloadGender(re_Gender)
{
thisGender = re_Gender;
reloadData();
}

function reloadRace(re_Race)
{
thisRace = re_Race;
reloadData();
}

function reloadData()
{
//document.getElementById("mainImage").src = danceList[thisRace][thisGender];

var flashString = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='250' height='250'>\
<param id='mainImage' name='movie' value = "+danceList[thisRace][thisGender]+">\
<param name='quality' value='high'>\
<param name='menu' value='false'>\
<embed id='mainImage' src = "+danceList[thisRace][thisGender]+" quality='high' menu='false' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='250' height='250'></embed>\
</object>";
document.getElementById("flashImage").innerHTML = flashString;

document.getElementById("dl_transparent").href = linkList[thisRace][thisGender][0];
document.getElementById("txt_transparent").innerHTML = sizeList[thisRace][thisGender][0];

document.getElementById("dl_black").href = linkList[thisRace][thisGender][1];
document.getElementById("txt_black").innerHTML = sizeList[thisRace][thisGender][1];


document.getElementById("dl_avatar").href = linkList[thisRace][thisGender][2];
document.getElementById("txt_avatar").innerHTML = sizeList[thisRace][thisGender][2];
}

</script>

<!--HEADER------------------------------------------>
<div style = "background-image: url('/shared/wow-com/images/parchment/plain/light3/parchborder/parchborder-top.gif'); width: 100%; margin: 0px; border: 0px solid black;">

<table cellpadding="0" cellspacing="0" border="0" width = "100%">
<tr>
<td colspan = "3"><img src = "../../../shared/wow-com/images/layout/pixel.gif" width = "1" height = "12"></td>
</tr>
<tr>
<td width = "29"><img src = "../../../shared/wow-com/images/headers/dateheader/dateheader-left.gif" width = "31" height = "38"></td>
<td background = "../../../shared/wow-com/images/headers/dateheader/dateheader-bg.gif" width = "100%"><h3 class = "titleLight">Lords of the Dance</h3></td>
<td width = "17"><img src = "../../../shared/wow-com/images/headers/dateheader/dateheader-right.gif" width = "17" height = "38"></td>

</tr>
</table>

</div>
<!--END HEADER------------------------------------------>




<style type="text/css">
.attribute { font-family: "Arial", "Helvetica", "Sans-Serif"; color: #000000; font-weight: bold; font-size: 12;}
#icon { position: absolute;
top: -149px;
left: -25px;
z-index: 100;
 }
#icon2 { position: absolute;
top: -145px;
left: 420px;
z-index: 100;
 }
#text { position: relative;
top: 80px;
left: 150px;
z-index: 100;
 }
#wrapper { position: relative;
z-index: 100;
 }
#wrapper99 { position: relative;
z-index: 99;
 }
</style>
<table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style="background: url('../../../shared/wow-com/images/basics/dancing/banner/background.jpg');">
<tr>
<td>
<div id="wrapper99">
<div id = "icon">
<img src="../../../shared/wow-com/images/basics/dancing/banner/icon.gif" title="The Alliance shake their groove thang!">
</div>
<div id = "icon2">
<img src="../../../shared/wow-com/images/basics/dancing/banner/icon2.gif" title="Horde like to work it on the dance floor.">
</div>
</div>
</td>
<td>
<div id = "wrapper">
<div id = "text">
<img src="../../../shared/wow-com/images/basics/dancing/banner/en/header-text.gif">
</div>
</div>
</td>
<td><img src="../../../shared/wow-com/images/layout/pixel.gif" width="1" height="162"></td>
</tr>
<tr>
<td colspan="3">
<table cellspacing = "0" cellpadding = "0" border = "0" width = "100%">
<tr>
<td background = "../../../shared/wow-com/images/banner/bottom.gif" width = "100%" ><img src = ../../../shared/wow-com/images/layout/pixel.gif height = "18" width = "200"></td>
</tr>
</table>
</td>
</tr>
</table>

<script language = "javascript">
var pageId = "Dancing";
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

a.nav:link{
font-family: arial,verdana, sans-serif;
color: CBA300;
font-size: 11px;
font-weight:normal;
}

a.nav:visited {
font-family: arial,verdana, sans-serif;
color: CBA300;
font-size: 11px;
font-weight:normal;
}

a.nav:hover{
font-family: arial,verdana, sans-serif;
color: FFFFFF;
font-size: 11px;
font-weight:normal;
}

a.nav:active {
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



<!---Subnav----->
<script language = "javascript">
var pageId = "Dancing";
</script>
<!---End Subnav----->

<!-----------------------------MAIN------------------------------>

<center>
<table cellpadding="0" cellspacing="0" border="0" width = "100%">
<tr>
<td>
<div class = "guideHeader">

<table width="100%" cellpadding="0" cellspacing="0" border="0" valign="top">
<tr>
<td width="10" valign="top"><img src="../../../shared/wow-com/images/headers/tabheader/tabheader-left-left.jpg" width="17" height="29" border="0" ></td>
<td width="300" background = "../../../shared/wow-com/images/headers/tabheader/tabheader-left.jpg" align = "left" NOWRAP><h3 class = "guideTitle">Dancing Races</h3></td>
<td width="100%" background = "../../../shared/wow-com/images/headers/tabheader/tabheader-bg.jpg" valign="top"></td>
</tr>
</table>
</div>


<!-- /* Dance Character Select */ -->
<div class="postContainerPlain">
<div class = "postBody">
<span>
<img src="../../../shared/wow-com/images/smallcaps/plain/t.gif" align="left">his is the dance page. You can preview some of the many different dance animations in World of Warcraft and even download animated images of your favorite dances. Simply select a race and gender from the drop-down menus below and watch them get into the groove. To download an animation, simply click on one of the links below the animation window and save the files to your computer. Time to start practicing your moves!
</span>
</div>
</div>

<div id = "danceMaster">
<div id = "danceShelltop">
<div class = "left"></div>
</div>
<div id = "danceShellmid">
<div class = "left">
<div class = "ring1"></div>
<div class = "ring2"></div>
</div>
<div class = "right">
<div class = "header-en"></div>
<div class = "select">
<span>Select Race:</span>
<select onchange="reloadRace(this.value)" style="width: 80;">
<option value = 0 >Dwarf</option>
<option value = 1 >Gnome</option>
<option value = 2 >Human</option>
<option value = 3 >Night Elf</option>
<option value = 4 >Orc</option>
<option value = 5 >Tauren</option>
<option value = 6 >Troll</option>
<option value = 7 >Undead</option>
</select><p>

<span>Select Gender:</span>
<select onChange="reloadGender(this.value)" style="width: 80;">
<option value = 0 >Male</option>
<option value = 1 >Female</option>
</select></div>

</div>

</div>
<div id = "danceShellbot">

<!-- /* Write Files */ -->
<div id = "flashImage" style = "position: absolute; top: -199px; left: 76px; z-index: 1000;">
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="250" height="250">
<param id="mainImage" name="movie" value = "http://www.wow-europe.com/shared/wow-com/images/basics/dancing/gifs/dwarf_male.swf">
<param name="quality" value="high">
<param name='menu' value='false'>
<embed id="mainImage" src = "http://www.wow-europe.com/shared/wow-com/images/basics/dancing/gifs/dwarf_male.swf" quality="high" menu="false" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="250" height="250"></embed>
</object>
<!--<img src = "/shared/wow-com/images/basics/dancing/gifs/dwarf_male.gif" />--></div>
<div id = "files" style = "position: absolute; top: 105px; left: 120px; z-index: 100;">
<a id="dl_transparent" href="http://www.wow-europe.com/shared/wow-com/images/basics/dancing/gifs/dwarf_male250x.zip">250 x 250 Transparent (<span id="txt_transparent">339</span>kb)</a><br />
<a id="dl_black" href="http://www.wow-europe.com/shared/wow-com/images/basics/dancing/gifs/dwarf_male250b.zip">250 x 250 Black (<span id="txt_black">329</span>kb)</a> <br />
<a id="dl_avatar" href="http://www.wow-europe.com/shared/wow-com/images/basics/dancing/gifs/dwarf_male120x.zip">120 x 120 Avatar (<span id="txt_avatar">92</span>kb)</a> <br />
</div>
<!-- /* Write Files */ -->

<div class = "left-en"></div>

<div style = "position: absolute; top: 150px; left: 320px; font-family: Arial, Helvetica, sans-serif; font-size: 11px;"><i>*All files are in *.zip format.</i></div>
</div>

</div>
<p>
</td>
</tr>
</table>
<p>
<!---------------------------END MAIN------------------------------>
</div>
</div>


<!--Related Links-->
<!--End Related Links-->
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



</body>

<!-- Mirrored from www.wow-europe.com/en/info/basics/dancing.html by HTTrack Website Copier/3.x [XR&CO'2006], Sat, 02 Sep 2006 09:16:05 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=iso-8859-1"><!-- /Added by HTTrack -->
</html>



<? include $Offset."bottem.php"; ?>
