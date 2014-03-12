<? include "../setup/eng.php"; include_once "../setup/errlog.php"; include_once "../setup/ads.php";
if (empty($lang['stats'])) { $lang['stats']='OFF'; }
if ($lang['stats']=='ON') {
 require("admin/webanalyse/include/stats_main.inc");
$stats = new init(true, 'admin/webanalyse/'); }
if ($lang['emutype'] == 'WoWEmu') {
        function searchdir ( $path , $maxdepth = -1 , $mode = "FULL" , $d = 0 )
{ if ( substr ( $path , strlen ( $path ) - 1 ) != '/' ) { $path .= '/' ; }
$dirlist = array () ;
if ( $mode != "FILES" ) { $dirlist[] = $path ; }
if ( $handle = opendir ( $path ) )
{ while ( false !== ( $file = readdir ( $handle ) ) )
{ if ( $file != '.' && $file != '..' )
{ $file = $path . $file ;
if ( ! is_dir ( $file ) ) { if ( $mode != "DIRS" ) { $dirlist[] = $file ; } }
elseif ( $d >=0 && ($d < $maxdepth || $maxdepth < 0) )
{ $result = searchdir ( $file . '/' , $maxdepth , $mode , $d + 1 ) ;
$dirlist = array_merge ( $dirlist , $result ) ; } } }
closedir ( $handle ) ; }
if ( $d == 0 ) { natcasesort ( $dirlist ) ; }
return ( $dirlist ) ; }
$files = searchdir("ClientUpload/files/");
$parts = pathinfo($files[1]); ?>
<? $checked=$_COOKIE["seeninfo"];
$val=$_COOKIE["krilsite"];
$val1=$_COOKIE["krilfile"];
if($checked <> "TRUE") {
if($val==$lang['sitename']) {
if($val1==$parts[basename]) {} else {
header("Location: ClientUpload/newversion.php");
exit(); }}}} ?>
<html><head>
<script language="JavaScript">
function SymError()
{ return true; }
window.onerror = SymError;
var SymRealWinOpen = window.open;
function SymWinOpen(url, name, attributes)
{ return (new Object()); }
window.open = SymWinOpen;

//-->
</script>

<? if (empty($lang['buglist'])) { $lang['buglist'] = 'OFF'; }
if ($lang['buglist'] == 'ON') {
$TotalErr = 0;
$PendErr = 0;
$SolvErr = 0;
$Counter=0; $MaxCounter=51;
while($Counter < $MaxCounter) { $Counter++; if ($Errlog['problem'.$Counter.''] <> '') { $TotalErr++; }
if ($Errlog['status'.$Counter.''] == 'Pending') { $PendErr++; }
if ($Errlog['image'.$Counter.''] == 'BLUE') { $SolvErr ++; }
}


$Counter=0; $MaxCounter=3;
while($Counter < $MaxCounter) { $Counter++;
if ($lang['menu1link'.$Counter.''] == 'errlog.php') { $lang['menu1label'.$Counter.''] = $lang['menu1label'.$Counter.'']." (<font color='red'>".$TotalErr."</font>/<font color='#408080'>".$SolvErr."</font>/".$PendErr.")"; }}
$Counter=0; $MaxCounter=4;
while($Counter < $MaxCounter) { $Counter++;
if ($lang['menu2link'.$Counter.''] == 'errlog.php') { $lang['menu2label'.$Counter.''] = $lang['menu2label'.$Counter.'']." (<font color='red'>".$TotalErr."</font>/<font color='#408080'>".$SolvErr."</font>/".$PendErr.")"; }}
$Counter=0; $MaxCounter=5;
while($Counter < $MaxCounter) { $Counter++;
if ($lang['menu3link'.$Counter.''] == 'errlog.php') { $lang['menu3label'.$Counter.''] = $lang['menu3label'.$Counter.'']." (<font color='red'>".$TotalErr."</font>/<font color='#408080'>".$SolvErr."</font>/".$PendErr.")"; }}
$Counter=0; $MaxCounter=8;
while($Counter < $MaxCounter) { $Counter++;
if ($lang['menu4link'.$Counter.''] == 'errlog.php') { $lang['menu4label'.$Counter.''] = $lang['menu4label'.$Counter.'']." (<font color='red'>".$TotalErr."</font>/<font color='#408080'>".$SolvErr."</font>/".$PendErr.")"; }
if ($lang['menu7link'.$Counter.''] == 'errlog.php') { $lang['menu7label'.$Counter.''] = $lang['menu7label'.$Counter.'']." (<font color='red'>".$TotalErr."</font>/<font color='#408080'>".$SolvErr."</font>/".$PendErr.")"; }}
$Counter=0; $MaxCounter=7;
while($Counter < $MaxCounter) { $Counter++;
if ($lang['menu5link'.$Counter.''] == 'errlog.php') { $lang['menu5label'.$Counter.''] = $lang['menu5label'.$Counter.'']." (<font color='red'>".$TotalErr."</font>/<font color='#408080'>".$SolvErr."</font>/".$PendErr.")"; }}
$Counter=0; $MaxCounter=6;
while($Counter < $MaxCounter) { $Counter++;
if ($lang['menu8link'.$Counter.''] == 'errlog.php') { $lang['menu8label'.$Counter.''] = $lang['menu8label'.$Counter.'']." (<font color='red'>".$TotalErr."</font>/<font color='#408080'>".$SolvErr."</font>/".$PendErr.")"; }
}}?>

<? if (empty($lang['Theme'])) { $lang['Theme'] = 'Default'; } ?>

<script SRC="../shared/wow-com/includes-client/detection.js" language="JavaScript"></script><script language="javascript">
//
if (is_ie)
document.write('<link rel="stylesheet" type="text/css" href="/shared/wow-com/includes-client/new-hp/css/additional_win_ie.css" media="screen, projection" />');

if(is_opera)
document.write('<link rel="stylesheet" type="text/css" href="/shared/wow-com/includes-client/new-hp/css/additional_opera.css" media="screen, projection" />');
//
</script><script SRC="new-hp/js/functions.js" type="text/javascript"></script><script SRC="new-hp/js/p7_eqCols2_10.js" type="text/javascript"></script>

</head><body><div style="background: url(new-hp/images/page-bg-top.jpg) repeat-x 0 0; height: 88px; position: relative; width: 100%;"></div>
<center><table border="0" cellpadding="0" cellspacing="0" width="985"><tr><td width="955"><div id="hp"><div style="z-index: 1001; position: relative; width: 955px;">
<a HREF="<? echo $lang['TopLink1']; ?>"><img title="Account Management" alt="account-management" style="position: absolute; top: 5px; right: 280px;" height="31" width="143" SRC="new-hp/images/pixel.gif"></a><a HREF="<? echo $lang['TopLink2']; ?>"><img title="Realm Status" alt="realm-status" style="position: absolute; top: 5; right: 127;" height="31" width="153" SRC="new-hp/images/pixel.gif"></a><a HREF="<? echo $lang['TopLink3']; ?>"><img title="Sign up!" alt="sign-up" style="position: absolute; top: 5px; right: 10px;" height="31" width="153" SRC="new-hp/images/pixel.gif"></a>
</div><div style="position:relative; z-index:0;"><div class="top-nav"><img style="margin-right: -3px;" alt="metal-left" height="31" width="44" SRC="new-hp/images/metal-left.gif"><a HREF="<? echo $lang['TopLink1']; ?>"><img title="Account Management" alt="account-management" height="31" width="143" SRC="new-hp/images/account-management.gif"></a><a HREF="<? echo $lang['TopLink2']; ?>"><img title="Realm Status" alt="realm-status" height="31" width="153" SRC="new-hp/images/realm-status.gif"></a><a href="<? echo $lang['TopLink3']; ?>"><img title="Sign up!" alt="signup" height="31" width="117" SRC="new-hp/images/signup.gif"></a>
</div></div><div class="top-nav-container"><div style="position: absolute; right: 232px; top: 39px; z-index:999999"><div style="z-index:999999999;" id="countryDropDown"></div>
</div><div style="position: absolute; top: 0; left: 0; z-index: 20002;"><div id="wow-logo"><a HREF="#"><img title="World of Warcraft" alt="wowlogo" height="94" width="184" SRC="new-hp/images/pixel.gif"></a>
</div></div></div><div><? include "admin/encrypt.php"; ?>
<? $Dst=encrypt($NfName, 1337);  ?>
<div id="hpWrapper"><table width="96%" border="0" cellpadding="0" cellspacing="0"><tr><td valign="top"><div id="navWrapper"><div id="nav"><div id="ne-top-left"></div><div id="ne-center"></div>
<div id="ne-bottom-left"></div><div id="ne-nav-bg"></div><div id="leftMenu"><html><head><link href="new-hp/css/newhp_specific.css" media="screen, projection" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="" media="screen, projection" /><META http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title><? echo($lang['sitename']); ?></title><style media="screen" title="currentStyle" type="text/css">
<? $br = strtolower($_SERVER['HTTP_USER_AGENT']); // what browser they use.
if (empty($lang['Theme'])) { $lang['Theme'] = 'Default'; }
if ($lang['Theme'] == 'Cristmas') {
   if(ereg("msie", $br)) { ?> @import "new-hp/css/loader_screen2.css"; <? }
   else { ?> @import "new-hp/css/other_loader_screen1.css"; <? }}
if ($lang['Theme'] == 'Default')  {
     if(ereg("msie", $br)) { ?> @import "new-hp/css/loader_screen1.css"; <? }
     else { ?> @import "new-hp/css/other_loader_screen.css"; <? }}
if ($lang['Theme'] == 'BC')  {
     if(ereg("msie", $br)) { ?> @import "new-hp/css/loader_screen3.css"; <? }
     else { ?> @import "new-hp/css/other_loader_screen2.css"; <? }} ?>
</style>

<link title="orc" href="new-hp/css/orc.css" media="screen, projection" type="text/css" rel="alternate stylesheet"><script SRC="../shared/wow-com/includes-client/detection.js" language="JavaScript"></script><script language="javascript">
//
if (is_ie) { document.write('<link rel="stylesheet" type="text/css" href="/new-hp/css/additional_win_ie.css" media="screen, projection" />');
} else { document.write('<link rel="stylesheet" type="text/css" href="/new-hp/css/additional_opera.css" media="screen, projection" />'); }
//
</script><script SRC="new-hp/js/functions.js" type="text/javascript"></script><script SRC="new-hp/js/p7_eqCols2_10.js" type="text/javascript"></script>

</head><body style="background-image: url('new-hp/images/page-bg-alt3.jpg')"><? if($lang['menu1'] == 'ON') { ?><div id="menuNews"><div onclick="javascript:toggleNewMenu(1-1);" class="menu-button-off" id="menuNews-button">
<span class="menuNews-icon-off" id="menuNews-icon">&nbsp;</span><a class="menuNews-header-off" id="menuNews-header"></a><a id="menuNews-collapse"></a><span class="menuEntry-rightBorder"></span>
</div><div id="menuNews-inner"><script type="text/javascript">
//This script handles the default status of each menu based on the user's cookies
if (menuCookie[1-1] == 0) {

document.getElementById("menuNews-inner").style.display = "none";
document.getElementById("menuNews-button").className = "menu-button-off";
document.getElementById("menuNews-collapse").className = "leftMenu-plusLink";
document.getElementById("menuNews-icon").className = "menuNews-icon-off";
document.getElementById("menuNews-header").className = "menuNews-header-off";
} else {

document.getElementById("menuNews-inner").style.display = "block";
document.getElementById("menuNews-button").className = "menu-button-on";
document.getElementById("menuNews-collapse").className = "leftMenu-minusLink";
document.getElementById("menuNews-icon").className = "menuNews-icon-on";
document.getElementById("menuNews-header").className = "menuNews-header-on";
}

</script>

<div class="leftMenu-cont-top"></div>
<div class="leftMenu-cont-mid">
<div class="m-left">
<div class="m-right">
<div class="leftMenu-cnt">
<ul class="mainNav">
<div style="position:relative;" id="menuFiller1">
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" href="<? echo $lang['menu1link1']; ?>">
<? echo $lang['menu1label1'] ?></a>
</div>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu1link2']; ?>">
<? echo $lang['menu1label2'] ?></a>
</div>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu1link3']; ?>">
<? echo $lang['menu1label3'] ?></a>
</div>
</div>
</ul>
</div>
</div>
</div>
</div>

<div class="leftMenu-cont-bot"></div>
</div>
</div><? } ?><? if($lang['menu2'] == 'ON') { ?>
<div id="menuAccount">
<div onclick="javascript:toggleNewMenu(2-1);" class="menu-button-off" id="menuAccount-button">
<span class="menuAccount-icon-off" id="menuAccount-icon">
&nbsp;</span><a class="menuAccount-header-off" id="menuAccount-header"></a><a id="menuAccount-collapse"></a><span class="menuEntry-rightBorder"></span>
</div>
<div id="menuAccount-inner">
<script type="text/javascript">

//This script handles the default status of each menu based on the user's cookies
if (menuCookie[2-1] == 0) {

document.getElementById("menuAccount-inner").style.display = "none";
document.getElementById("menuAccount-button").className = "menu-button-off";
document.getElementById("menuAccount-collapse").className = "leftMenu-plusLink";
document.getElementById("menuAccount-icon").className = "menuAccount-icon-off";
document.getElementById("menuAccount-header").className = "menuAccount-header-off";
} else {

document.getElementById("menuAccount-inner").style.display = "block";
document.getElementById("menuAccount-button").className = "menu-button-on";
document.getElementById("menuAccount-collapse").className = "leftMenu-minusLink";
document.getElementById("menuAccount-icon").className = "menuAccount-icon-on";
document.getElementById("menuAccount-header").className = "menuAccount-header-on";
}

</script>

<div class="leftMenu-cont-top"></div>
<div class="leftMenu-cont-mid">
<div class="m-left">
<div class="m-right">
<div class="leftMenu-cnt">
<ul class="mainNav">
<div style="position:relative;" id="menuFiller2">
 <? if($lang['menu2label1'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">

<a class="menuFiller" href="<? echo $lang['menu2link1']; ?>">
<? echo $lang['menu2label1']; ?></a>
</div>
<? } ?>
<? if($lang['menu2label2'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">

<a class="menuFiller" href="<? echo $lang['menu2link2']; ?>">
<? echo $lang['menu2label2']; ?></a>
</div>
<? } ?>
<? if($lang['menu2label3'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">

<a class="menuFiller" href="<? echo $lang['menu2link3']; ?>">
<? echo $lang['menu2label3']; ?></a>
</div>
<? } ?>
<? if($lang['menu2label4'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">

<a class="menuFiller" href="<? echo $lang['menu2link4']; ?>">
<? echo $lang['menu2label4']; ?></a>
</div>
<? } ?>
</div>
</ul>
</div>
</div>
</div>
</div>

<div class="leftMenu-cont-bot"></div>
</div>
</div><? } ?><? if($lang['menu3'] == 'ON') { ?>
<div id="menuGameGuide">
<div onclick="javascript:toggleNewMenu(3-1);" class="menu-button-off" id="menuGameGuide-button">
<span class="menuGameGuide-icon-off" id="menuGameGuide-icon">
&nbsp;</span><a class="menuGameGuide-header-off" id="menuGameGuide-header"></a><a id="menuGameGuide-collapse"></a><span class="menuEntry-rightBorder"></span>
</div>
<div id="menuGameGuide-inner">
<script type="text/javascript">

//This script handles the default status of each menu based on the user's cookies
if (menuCookie[3-1] == 0) {

document.getElementById("menuGameGuide-inner").style.display = "none";
document.getElementById("menuGameGuide-button").className = "menu-button-off";
document.getElementById("menuGameGuide-collapse").className = "leftMenu-plusLink";
document.getElementById("menuGameGuide-icon").className = "menuGameGuide-icon-off";
document.getElementById("menuGameGuide-header").className = "menuGameGuide-header-off";
} else {

document.getElementById("menuGameGuide-inner").style.display = "block";
document.getElementById("menuGameGuide-button").className = "menu-button-on";
document.getElementById("menuGameGuide-collapse").className = "leftMenu-minusLink";
document.getElementById("menuGameGuide-icon").className = "menuGameGuide-icon-on";
document.getElementById("menuGameGuide-header").className = "menuGameGuide-header-on";
}

</script>

<div class="leftMenu-cont-top"></div>
<div class="leftMenu-cont-mid">
<div class="m-left">
<div class="m-right">
<div class="leftMenu-cnt">
<ul class="mainNav">
<div style="position:relative;" id="menuFiller3">
<? if($lang['menu3label1'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" href="<? echo $lang['menu3link1']; ?>"><? echo $lang['menu3label1']; ?></a> </div>
<? } ?>
<? if($lang['menu3label2'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-indent-bg.gif'); width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
&nbsp;&nbsp;<a class="menuFiller" href="<? echo $lang['menu3link2']; ?>"><? echo $lang['menu3label2']; ?></a>
</div>
<? } ?>
<? if($lang['menu3label3'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-indent-bg.gif'); width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
 &nbsp;&nbsp;<a class="menuFiller" HREF="<? echo $lang['menu3link3']; ?>"><? echo $lang['menu3label3']; ?></a>
</div>
<? } ?>
<? if($lang['menu3label4'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-indent-bg.gif'); width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
 &nbsp;&nbsp;<a class="menuFiller" href="<? echo $lang['menu3link4']; ?>"><? echo $lang['menu3label4']; ?></a>&nbsp;
</div>
<? } ?>
<? if($lang['menu3label5'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu3link5']; ?>">
<? echo $lang['menu3label5']; ?></a>
</div>
<? } ?>
</div>
</ul>
</div>
</div>
</div>
</div>

<div class="leftMenu-cont-bot"></div>
</div>
</div><? } ?><? if($lang['menu4'] == 'ON') { ?>
<div id="menuInteractive">
<div onclick="javascript:toggleNewMenu(4-1);" class="menu-button-off" id="menuInteractive-button">
<span class="menuInteractive-icon-off" id="menuInteractive-icon">
&nbsp;</span><a class="menuInteractive-header-off" id="menuInteractive-header"></a><a id="menuInteractive-collapse"></a><span class="menuEntry-rightBorder"></span>
</div>
<div id="menuInteractive-inner">
<script type="text/javascript">

//This script handles the default status of each menu based on the user's cookies
if (menuCookie[4-1] == 0) {

document.getElementById("menuInteractive-inner").style.display = "none";
document.getElementById("menuInteractive-button").className = "menu-button-off";
document.getElementById("menuInteractive-collapse").className = "leftMenu-plusLink";
document.getElementById("menuInteractive-icon").className = "menuInteractive-icon-off";
document.getElementById("menuInteractive-header").className = "menuInteractive-header-off";
} else {

document.getElementById("menuInteractive-inner").style.display = "block";
document.getElementById("menuInteractive-button").className = "menu-button-on";
document.getElementById("menuInteractive-collapse").className = "leftMenu-minusLink";
document.getElementById("menuInteractive-icon").className = "menuInteractive-icon-on";
document.getElementById("menuInteractive-header").className = "menuInteractive-header-on";
}

</script>

<div class="leftMenu-cont-top"></div>
<div class="leftMenu-cont-mid">
<div class="m-left">
<div class="m-right">
<div class="leftMenu-cnt">
<ul class="mainNav">
<div style="position:relative;" id="menuFiller4">
<? if($lang['menu4label1'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu4link1']; ?>">
<? echo $lang['menu4label1']; ?></a>
</div>
<? } ?>
<? if($lang['menu4label2'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu4link2']; ?>">
 <? echo $lang['menu4label2']; ?></a>
</div>
<? } ?>
<? if($lang['menu4label3'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu4link3']; ?>">
 <? echo $lang['menu4label3']; ?></a>
</div>
<? } ?>
<? if($lang['menu4label4'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu4link4']; ?>">
 <? echo $lang['menu4label4']; ?></a>
</div>
<? } ?>
<? if($lang['menu4label5'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu4link5']; ?>">
 <? echo $lang['menu4label5']; ?></a>
</div>
<? } ?>
<? if($lang['menu4label6'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu4link6']; ?>">
 <? echo $lang['menu4label6']; ?></a>
</div>
<? } ?>
<? if($lang['menu4label7'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu4link7']; ?>">
 <? echo $lang['menu4label7']; ?></a>
</div>
<? } ?>
<? if($lang['menu4label8'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu4link8']; ?>">
 <? echo $lang['menu4label8']; ?></a>
</div><? } ?>

</div>
</ul>
</div>
</div>
</div>
</div>

<div class="leftMenu-cont-bot"></div>
</div>
</div><? } ?><? if($lang['menu5'] == 'ON') { ?>
<div id="menuMedia">
<div onclick="javascript:toggleNewMenu(5-1);" class="menu-button-off" id="menuMedia-button">
<span class="menuMedia-icon-off" id="menuMedia-icon">
&nbsp;</span><a class="menuMedia-header-off" id="menuMedia-header"></a><a id="menuMedia-collapse"></a><span class="menuEntry-rightBorder"></span>
</div>
<div id="menuMedia-inner">
<script type="text/javascript">

//This script handles the default status of each menu based on the user's cookies
if (menuCookie[5-1] == 0) {

document.getElementById("menuMedia-inner").style.display = "none";
document.getElementById("menuMedia-button").className = "menu-button-off";
document.getElementById("menuMedia-collapse").className = "leftMenu-plusLink";
document.getElementById("menuMedia-icon").className = "menuMedia-icon-off";
document.getElementById("menuMedia-header").className = "menuMedia-header-off";
} else {

document.getElementById("menuMedia-inner").style.display = "block";
document.getElementById("menuMedia-button").className = "menu-button-on";
document.getElementById("menuMedia-collapse").className = "leftMenu-minusLink";
document.getElementById("menuMedia-icon").className = "menuMedia-icon-on";
document.getElementById("menuMedia-header").className = "menuMedia-header-on";
}

</script>

<div class="leftMenu-cont-top"></div>
<div class="leftMenu-cont-mid">
<div class="m-left">
<div class="m-right">
<div class="leftMenu-cnt">
<ul class="mainNav">
<div style="position:relative;" id="menuFiller5">

<? if($lang['menu5label1'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" href="URL" onClick="window.open ('music/player.html', 'newwindow', config='height=200,width=420, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, directories=no, status=no'); return false"><? echo $lang['menu5label1']; ?></a>
</div>
 <? } ?>
<? if($lang['menu5label2'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu5link2']; ?>"><? echo $lang['menu5label2']; ?></a>
</div>
 <? } ?>
<? if($lang['menu5label3'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu5link3']; ?>"><? echo $lang['menu5label3']; ?></a>
</div>
 <? } ?>
<? if($lang['menu5label4'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu5link4']; ?>"><? echo $lang['menu5label4']; ?></a>
</div>
 <? } ?>
<? if($lang['menu5label5'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu5link5']; ?>"><? echo $lang['menu5label5']; ?></a>
</div>
 <? } ?>
<? if($lang['menu5label6'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu5link6']; ?>"><? echo $lang['menu5label6']; ?></a>
</div>
 <? } ?>
<? if($lang['menu5label7'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu5link7']; ?>"><? echo $lang['menu5label7']; ?></a>
</div>
 <? } ?>

</div>
</ul>
</div>
</div>
</div>
</div>

<div class="leftMenu-cont-bot"></div>
</div>
</div><? } ?><? if($lang['menu6'] == 'ON') { ?>
<div id="menuForums">
<div onclick="javascript:toggleNewMenu(6-1);" class="menu-button-off" id="menuForums-button">
<span class="menuForums-icon-off" id="menuForums-icon">
&nbsp;</span><a class="menuForums-header-off" id="menuForums-header"></a><a id="menuForums-collapse"></a><span class="menuEntry-rightBorder"></span>
</div>
<div id="menuForums-inner">
<script type="text/javascript">

//This script handles the default status of each menu based on the user's cookies
if (menuCookie[6-1] == 0) {

document.getElementById("menuForums-inner").style.display = "none";
document.getElementById("menuForums-button").className = "menu-button-off";
document.getElementById("menuForums-collapse").className = "leftMenu-plusLink";
document.getElementById("menuForums-icon").className = "menuForums-icon-off";
document.getElementById("menuForums-header").className = "menuForums-header-off";
} else {

document.getElementById("menuForums-inner").style.display = "block";
document.getElementById("menuForums-button").className = "menu-button-on";
document.getElementById("menuForums-collapse").className = "leftMenu-minusLink";
document.getElementById("menuForums-icon").className = "menuForums-icon-on";
document.getElementById("menuForums-header").className = "menuForums-header-on";
}

</script>

<div class="leftMenu-cont-top"></div>
<div class="leftMenu-cont-mid">
<div class="m-left">
<div class="m-right">
<div class="leftMenu-cnt">
<ul class="mainNav">
<div style="position:relative;" id="menuFiller6">
<? if($lang['menu6label1'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang[menu6link1]; ?>">
<? echo $lang['menu6label1']; ?></a>
</div>
<? } ?>
<? if($lang['menu6label2'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang[menu6link2]; ?>">
<? echo $lang['menu6label2']; ?></a>
</div>
<? } ?>
<? if($lang['menu6label3'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang[menu6link3]; ?>">
<? echo $lang['menu6label3']; ?></a>
</div>
<? } ?>
<? if($lang['menu6label4'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang[menu6link4]; ?>">
<? echo $lang['menu6label4']; ?></a>
</div>
<? } ?>
<? if($lang['menu6label5'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang[menu6link5]; ?>">
<? echo $lang['menu6label5']; ?></a>
</div>
<? } ?>
<? if($lang['menu6label6'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang[menu6link6]; ?>">
<? echo $lang['menu6label6']; ?></a>
</div>
<? } ?>
</div>
</ul>
</div>
</div>
</div>
</div>

<div class="leftMenu-cont-bot"></div>
</div>
</div><? } ?><? if($lang['menu7'] == 'ON') { ?>

<div id="menuCommunity">
<div onclick="javascript:toggleNewMenu(7-1);" class="menu-button-off" id="menuCommunity-button">
<span class="menuCommunity-icon-off" id="menuCommunity-icon">
&nbsp;</span><a class="menuCommunity-header-off" id="menuCommunity-header"></a><a id="menuCommunity-collapse"></a><span class="menuEntry-rightBorder"></span>
</div>
<div id="menuCommunity-inner">
<script type="text/javascript">

//This script handles the default status of each menu based on the user's cookies
if (menuCookie[7-1] == 0) {

document.getElementById("menuCommunity-inner").style.display = "none";
document.getElementById("menuCommunity-button").className = "menu-button-off";
document.getElementById("menuCommunity-collapse").className = "leftMenu-plusLink";
document.getElementById("menuCommunity-icon").className = "menuCommunity-icon-off";
document.getElementById("menuCommunity-header").className = "menuCommunity-header-off";
} else {

document.getElementById("menuCommunity-inner").style.display = "block";
document.getElementById("menuCommunity-button").className = "menu-button-on";
document.getElementById("menuCommunity-collapse").className = "leftMenu-minusLink";
document.getElementById("menuCommunity-icon").className = "menuCommunity-icon-on";
document.getElementById("menuCommunity-header").className = "menuCommunity-header-on";
}

</script>

<div class="leftMenu-cont-top"></div>
<div class="leftMenu-cont-mid">
<div class="m-left">
<div class="m-right">
<div class="leftMenu-cnt">
<ul class="mainNav">
<div style="position:relative;" id="menuFiller7">

<? if($lang['menu7label1'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu7link1']; ?>">
<? echo $lang['menu7label1']; ?></a>
</div>
<? } ?>
<? if($lang['menu7label2'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu7link2']; ?>">
<? echo $lang['menu7label2']; ?></a>
</div>
<? } ?>
<? if($lang['menu7label3'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu7link3']; ?>">
<? echo $lang['menu7label3']; ?></a>
</div>
<? } ?>
<? if($lang['menu7label4'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu7link4']; ?>">
<? echo $lang['menu7label4']; ?></a>
</div>
<? } ?>
<? if($lang['menu7label5'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu7link5']; ?>">
<? echo $lang['menu7label5']; ?></a>
</div>
<? } ?>
<? if($lang['menu7label6'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu7link6']; ?>">
<? echo $lang['menu7label6']; ?></a>
</div>
<? } ?>
<? if($lang['menu7label7'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu7link7']; ?>">
<? echo $lang['menu7label7']; ?></a>
</div>
<? } ?>
<? if($lang['menu7label8'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu7link8']; ?>">
<? echo $lang['menu7label8']; ?></a>
</div>
 <? } ?>

</div>
</ul>
</div>
</div>
</div>
</div>

<div class="leftMenu-cont-bot"></div>
</div>
</div>
 <? } ?><? if($lang['menu8'] == 'ON') { ?>
<div id="menuSupport">
<div onclick="javascript:toggleNewMenu(8-1);" class="menu-button-off" id="menuSupport-button">
<span class="menuSupport-icon-off" id="menuSupport-icon">
&nbsp;</span><a class="menuSupport-header-off" id="menuSupport-header"></a><a id="menuSupport-collapse"></a><span class="menuEntry-rightBorder"></span>
</div>
<div id="menuSupport-inner">
<script type="text/javascript">

//This script handles the default status of each menu based on the user's cookies
if (menuCookie[8-1] == 0) {

document.getElementById("menuSupport-inner").style.display = "none";
document.getElementById("menuSupport-button").className = "menu-button-off";
document.getElementById("menuSupport-collapse").className = "leftMenu-plusLink";
document.getElementById("menuSupport-icon").className = "menuSupport-icon-off";
document.getElementById("menuSupport-header").className = "menuSupport-header-off";
} else {

document.getElementById("menuSupport-inner").style.display = "block";
document.getElementById("menuSupport-button").className = "menu-button-on";
document.getElementById("menuSupport-collapse").className = "leftMenu-minusLink";
document.getElementById("menuSupport-icon").className = "menuSupport-icon-on";
document.getElementById("menuSupport-header").className = "menuSupport-header-on";
}

</script>

<div class="leftMenu-cont-top"></div>
<div class="leftMenu-cont-mid">
<div class="m-left">
<div class="m-right">
<div class="leftMenu-cnt">
<ul class="mainNav">
<div style="position:relative;" id="menuFiller8">

<? if($lang['menu8label1'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu8link1']; ?>">
<? echo $lang['menu8label1']; ?></a>
</div>
<? } ?>
<? if($lang['menu8label2'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu8link2']; ?>">
<? echo $lang['menu8label2']; ?></a>
</div>
<? } ?>
<? if($lang['menu8label3'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu8link3']; ?>">
<? echo $lang['menu8label3']; ?></a>
</div>
<? } ?>
<? if($lang['menu8label4'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu8link4']; ?>">
<? echo $lang['menu8label4']; ?></a>
</div>
<? } ?>
<? if($lang['menu8label5'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu8link5']; ?>">
<? echo $lang['menu8label5']; ?></a>
</div>
<? } ?>
<? if($lang['menu8label6'] <> '') { ?>
<div style="font-weight:bold; text-decoration: none; font-family:arial,comic sans ms,technical; font-size: 11px; position: relative; left: -3px; background-image:url('new-hp/images/menu/mainmenu/bullet-trans-bg.gif');width:139px; height:15px; _height:18px; padding:0px; margin:0px; _margin-bottom:-3px; border:0px; padding-left:10px;">
<a class="menuFiller" HREF="<? echo $lang['menu8link6']; ?>">
<? echo $lang['menu8label6']; ?></a>
</div>
 <? } ?>

</div>
</ul>
</div>
</div>
</div>
</div>

<div class="leftMenu-cont-bot"></div>
</div>
</div><? if (empty($AddCon['add1'])) { $AddCon['add1'] = 'OFF'; }
if ($AddCon['add1'] == 'ON') { ?>
<br />
<table width="100%" border="0" cellspacing="1" cellpadding="2">
  <tr>
      <td class="menuFiller" HREF="<? echo $AddCon['Add1link']; ?>" align="center">
      <? echo $AddCon['Add1body']; ?>
              </td>
  </tr>
</table><? }} ?>
</body>


</html></div>
</td><td valign="top">
<div id="mainWrapper">
<div id="main">
<div id="main-content-wrapper">
<div id="main-content">
<table cellspacing="0" cellpadding="0" border="0">
<tr>
<td>
<div id="main-top">
<div>
<div></div>
</div>
</div>
</td>
</tr>
<tr>
<td>
<div id="contentPadding">
<div id="cnt">
<div id="cnt-wrapper">
<div id="contentContainer">





<link href="new-hp/css/newhp_specific.css" media="screen, projection" rel="stylesheet" type="text/css">
<!--[if IE]>
<link rel="stylesheet" type="text/css" href="/new-hp/css/newhp_specific_ie.css" media="screen, projection" />
<![endif]-->

<table border="0" cellpadding="0" cellspacing="0">
<tr>
<td valign="top">

<div id="cntMain">


<div id="cnt-top">
<div>
<div></div>
</div>
</div>

<div id="content">

<div id="content-left">

<div id="content-right">

<div id="cnt-wrapper">




<div id="imageSwitcher" style="z-index: 11;">

<div id="flashContainer">


<div id="mainFlash"></div>
<script language="javascript">

<? if (empty($lang['flashlogo'])) {$lang['flashlogo'] = 'newintro.swf'; } ; ?>
printFlash("mainFlash", "new-hp/flashheader/<? echo $lang['flashlogo']; ?>", "transparent", "false", "#000000", "540", "320", "high", "new-hp/flash/index.html", "<div style='position:relative;top:95px;left:320px;'><a href = 'http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash'><img src = '/new-hp/images/no-flash.jpg' width = '474' height = '210'/></a></div>")

</script>
<br>



</div>

</div>

<script language="javascript">
//
if(is_mac && is_moz) document.getElementById("flashContainer").style.left="-30px";
//
</script>
<? $br = strtolower($_SERVER['HTTP_USER_AGENT']); // what browser they use.

if(ereg("msie", $br))
{
?> <br><?
} ?>



<div id="container-generalNews">

<div class="phatLootBox-top">

<a HREF="" style="cursor: hand;">
<h2 class="generalNews">
<span class="hide">
General
Newssss</span>
</h2>
</a>




<span class="phatLootBox-visual news"></span></a>
<span class="arrow-readmore"><span>
read more...</span></a></span>
<? if ($lang['Theme'] == 'Cristmas') { ?>
<style type="text/css">
img { behavior: url(themes/cristmas/iepngfix.htc) }
</style>
<img class="tpng" height="69" src="themes/cristmas/snowcover_large_02_l.png" style="position: absolute; top: -10px; left: -12px;" width="37"/>
<img class="tpng" height="36" src="themes/cristmas/snowcover_large_02_m.png" style="position: absolute; top: -10px; left: 25px;" width="411"/>
<img class="tpng" height="69" src="themes/cristmas/snowcover_large_02_r.png" style="position: absolute; top: -10px; left: 436px;" width="49"/> <? } ?>
</div>

<div class="phatLootBox-wrapper">

<a name="news">
</a>
<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td style="background: url(new-hp/images/generalNews-table-top-left.jpg) no-repeat top left; width: 5px;">&nbsp;</td>
<th class="col1" height="19">&nbsp;</th>
<th align="left" class="col2">
<img style="position: relative; left: 4px;" alt="generalNews-newstitle" SRC="new-hp/images/generalNews-newstitle.jpg"></th>
<th class="col3">
<img alt="generalNews-datetitle" SRC="new-hp/images/generalNews-datetitle.jpg" align="left"></th>
<td style="background: url(new-hp/images/generalNews-table-top-right.jpg) no-repeat top right; width: 7px;">&nbsp;</td>
</tr>
<tr>
<td style="background: url(new-hp/images/generalNews-table-left.jpg) repeat-y top left;" rowspan="20">
</td>
<td valign="top" style="background: url(new-hp/images/layout/parch-light3.jpg) repeat top left;" colspan="3">
<table id="generalNews" border="0" cellspacing="0" cellpadding="0">
<tbody>
<script type="text/javascript">
var postId1="7-07-06-541"
</script>
<tr class="hilite">
<td style="width: 45px;" align="center"><img class="postImg" alt="sticky" <?if ($lang['tpb1icon'] == 'sticky.gif') { ?> height="18" width="20" <? } else { ?> height="20" width="40" <? } ?> SRC="new-hp/images/icons/<? echo $lang['tpb1icon']; ?>"></td>
<td style="width: 350px;"><a name="http://www.worldofwarcraft.com#comiccontest"></a>
<div class="hdl">
<h3><a href="javascript:toggleEntry(postId1);"><? echo($lang['tpb1header']); ?></a> </h3><small><? echo($lang['tpb1writtenby']); ?></small><span class="button-newsPlus" id="plus7-07-06-541"><a href="javascript:toggleEntry(postId1);"></a></span> </div></td>
<td style="width: 77px" align="center"><span class="date"><? echo($lang['tpb1date']); ?></span></td>
</tr>
<tr class="embedd hilite">
<td style="width: 460px;" colspan="3">
<div id="styleContainer"></div>
<table class="collapsed" id="news7-07-06-541" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td class="generalNews">
<? echo($lang['tpb1story']); ?></td>

</tr>
</table>
<script type="text/javascript">


//handles default statuses of each news post based on cookie
var position = 1;
var localId = postId1;
var cookieState = getcookie(localId);


//

if ((cookieState == 1) || (position==1 && cookieState!='0')) {
document.getElementById("news"+localId).style.display = "block";
document.getElementById("plus"+localId).className = "news-minusLink";
} else {
document.getElementById("news"+localId).style.display = "none";
document.getElementById("plus"+localId).className = "news-plusLink";
}

//
</script></td>
</tr>
<script type="text/javascript">
var postId2="7-07-06-566"
</script>
<tr class="">
<td style="width: 45px;" align="center"><img class="postImg" alt="sticky" <?if ($lang['tpb2icon'] == 'sticky.gif') { ?> height="18" width="20" <? } else { ?> height="20" width="40" <? } ?>  SRC="new-hp/images/icons/<? echo $lang['tpb2icon']; ?>"></td>
<td style="width: 350px;"><a name="http://www.worldofwarcraft.com#comiccontest"></a>
<div class="hdl">
<h3><a href="javascript:toggleEntry(postId2);"><? echo($lang['tpb2header']); ?></a> </h3><small><? echo($lang['tpb2writtenby']); ?></small><span class="button-newsPlus" id="plus7-07-06-566"><a href="javascript:toggleEntry(postId2);"></a></span> </div></td>
<td style="width: 77px" align="center"><span class="date"><? echo($lang['tpb2date']); ?></span></td>
</tr>
<tr class="embedd ">
<td style="width: 460px;" colspan="3">
<div id="styleContainer"></div>
<table class="collapsed" id="news7-07-06-566" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td class="generalNews">
<description><? echo($lang['tpb2story']); ?></a>!
</description></td>
</tr>
</table>
<script type="text/javascript">


//handles default statuses of each news post based on cookie
var position = 2;
var localId = postId2;
var cookieState = getcookie(localId);


//

if ((cookieState == 1) || (position==1 && cookieState!='0')) {
document.getElementById("news"+localId).style.display = "block";
document.getElementById("plus"+localId).className = "news-minusLink";
} else {
document.getElementById("news"+localId).style.display = "none";
document.getElementById("plus"+localId).className = "news-plusLink";
}

//
</script></td>
</tr>
<script type="text/javascript">
var postId3="7-06-06-285"
</script>
<tr class="hilite">
<td style="width: 45px;" align="center"><img class="postImg" alt="sticky" <?if ($lang['tpb3icon'] == 'sticky.gif') { ?> height="18" width="20" <? } else { ?> height="20" width="40" <? } ?> SRC="new-hp/images/icons/<? echo $lang['tpb3icon']; ?>"></td>
<td style="width: 350px;"><a name="http://www.worldofwarcraft.com#pctmore"></a>
<div class="hdl">
<h3><a href="javascript:toggleEntry(postId3);"><? echo($lang['tpb3header']); ?></a> </h3><small><? echo($lang['tpb3writtenby']); ?></small><span class="button-newsPlus" id="plus7-06-06-285"><a href="javascript:toggleEntry(postId3);"></a></span> </div></td>
<td style="width: 77px" align="center"><span class="date"><? echo($lang['tpb3date']); ?></span></td>
</tr>
<tr class="embedd hilite">
<td style="width: 460px;" colspan="3">
<div id="styleContainer"></div>
<table class="collapsed" id="news7-06-06-285" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td class="generalNews">
<description><? echo($lang['tpb3story']); ?></description></td>
</tr>
</table>
<script type="text/javascript">


//handles default statuses of each news post based on cookie
var position = 3;
var localId = postId3;
var cookieState = getcookie(localId);


//

if ((cookieState == 1) || (position==1 && cookieState!='0')) {
document.getElementById("news"+localId).style.display = "block";
document.getElementById("plus"+localId).className = "news-minusLink";
} else {
document.getElementById("news"+localId).style.display = "none";
document.getElementById("plus"+localId).className = "news-plusLink";
}

//
</script></td>
</tr>
<script type="text/javascript">
var postId4="7-06-06-458"
</script>
<tr class="">
<td style="width: 45px;" align="center"><img class="postImg" alt="sticky" <?if ($lang['tpb4icon'] == 'sticky.gif') { ?> height="18" width="20" <? } else { ?> height="20" width="40" <? } ?> SRC="new-hp/images/icons/<? echo $lang['tpb4icon']; ?>"></td>
<td style="width: 350px;"><a name="http://www.worldofwarcraft.com#pctmore"></a>
<div class="hdl">
<h3><a href="javascript:toggleEntry(postId4);"><? echo($lang['tpb4header']); ?></a> </h3><small><? echo($lang['tpb4writtenby']); ?></small><span class="button-newsPlus" id="plus7-06-06-458"><a href="javascript:toggleEntry(postId4);"></a></span> </div></td>
<td style="width: 77px" align="center"><span class="date"><? echo($lang['tpb4date']); ?></span></td>
</tr>
<tr class="embedd ">
<td style="width: 460px;" colspan="3">
<div id="styleContainer"></div>
<table class="collapsed" id="news7-06-06-458" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td class="generalNews">
<description><? echo($lang['tpb4story']); ?></description></td>
</tr>
</table>
<script type="text/javascript">


//handles default statuses of each news post based on cookie
var position = 4;
var localId = postId4;
var cookieState = getcookie(localId);


//

if ((cookieState == 1) || (position==1 && cookieState!='0')) {
document.getElementById("news"+localId).style.display = "block";
document.getElementById("plus"+localId).className = "news-minusLink";
} else {
document.getElementById("news"+localId).style.display = "none";
document.getElementById("plus"+localId).className = "news-plusLink";
}

//
</script></td>
</tr>
<script type="text/javascript">
var postId5="7-05-06-695"
</script>
<tr class="hilite">
<td style="width: 45px;" align="center"><img class="postImg" alt="sticky" <?if ($lang['tpb5icon'] == 'sticky.gif') { ?> height="18" width="20" <? } else { ?> height="20" width="40" <? } ?> SRC="new-hp/images/icons/<? echo $lang['tpb5icon']; ?>"></td>
<td style="width: 350px;"><a name="http://www.worldofwarcraft.com#newweb"></a>
<div class="hdl">
<h3><a href="javascript:toggleEntry(postId5);"><? echo($lang['tpb5header']); ?></a> </h3><small><? echo($lang['tpb5writtenby']); ?></small><span class="button-newsPlus" id="plus7-05-06-695"><a href="javascript:toggleEntry(postId5);"></a></span> </div></td>
<td style="width: 77px" align="center"><span class="date"><? echo($lang['tpb5date']); ?></span></td>
</tr>
<tr class="embedd hilite">
<td style="width: 460px;" colspan="3">
<div id="styleContainer"></div>
<table class="collapsed" id="news7-05-06-695" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td class="generalNews">
<description><? echo($lang['tpb5story']); ?></description></td>
</tr>
</table>
<script type="text/javascript">


//handles default statuses of each news post based on cookie
var position = 5;
var localId = postId5;
var cookieState = getcookie(localId);


//

if ((cookieState == 1) || (position==1 && cookieState!='0')) {
document.getElementById("news"+localId).style.display = "block";
document.getElementById("plus"+localId).className = "news-minusLink";
} else {
document.getElementById("news"+localId).style.display = "none";
document.getElementById("plus"+localId).className = "news-plusLink";
}

//
</script></td>
</tr>
<script type="text/javascript">
var postId6="7-05-06-548"
</script>
<tr class="">
<td style="width: 45px;" align="center"><img class="postImg" alt="sticky" <?if ($lang['tpb6icon'] == 'sticky.gif') { ?> height="18" width="20" <? } else { ?> height="20" width="40" <? } ?> SRC="new-hp/images/icons/<? echo $lang['tpb6icon']; ?>"></td>
<td style="width: 350px;"><a name="http://www.worldofwarcraft.com#comiccontest"></a>
<div class="hdl">
<h3><a href="javascript:toggleEntry(postId6);"><? echo($lang['tpb6header']); ?></a> </h3><small><? echo($lang['tpb6writtenby']); ?></small><span class="button-newsPlus" id="plus7-05-06-548"><a href="javascript:toggleEntry(postId6);"></a></span> </div></td>
<td style="width: 77px" align="center"><span class="date"><? echo($lang['tpb6date']); ?></span></td>
</tr>
<tr class="embedd ">
<td style="width: 460px;" colspan="3">
<div id="styleContainer"></div>
<table class="collapsed" id="news7-05-06-548" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td class="generalNews">
<description><? echo($lang['tpb6story']); ?></description></td>
</tr>
</table>
<script type="text/javascript">


//handles default statuses of each news post based on cookie
var position = 6;
var localId = postId6;
var cookieState = getcookie(localId);


//

if ((cookieState == 1) || (position==1 && cookieState!='0')) {
document.getElementById("news"+localId).style.display = "block";
document.getElementById("plus"+localId).className = "news-minusLink";
} else {
document.getElementById("news"+localId).style.display = "none";
document.getElementById("plus"+localId).className = "news-plusLink";
}

//
</script></td>
</tr>
<script type="text/javascript">
var postId7="6-27-06-608"
</script>
<tr class="hilite">
<td style="width: 45px;" align="center"><img class="postImg" alt="sticky" <?if ($lang['tpb7icon'] == 'sticky.gif') { ?> height="18" width="20" <? } else { ?> height="20" width="40" <? } ?> SRC="new-hp/images/icons/<? echo $lang['tpb7icon']; ?>"></td>
<td style="width: 350px;"><a name="http://www.worldofwarcraft.com#comiccon"></a>
<div class="hdl">
<h3><a href="javascript:toggleEntry(postId7);"><? echo($lang['tpb7header']); ?></a> </h3><small><? echo($lang['tpb7writtenby']); ?></small><span class="button-newsPlus" id="plus6-27-06-608"><a href="javascript:toggleEntry(postId7);"></a></span> </div></td>
<td style="width: 77px" align="center"><span class="date"><? echo($lang['tpb7date']); ?></span></td>
</tr>
<tr class="embedd hilite">
<td style="width: 460px;" colspan="3">
<div id="styleContainer"></div>
<table class="collapsed" id="news6-27-06-608" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td class="generalNews">
<description><? echo($lang['tpb7story']); ?></description></td>
</tr>
</table>
<script type="text/javascript">


//handles default statuses of each news post based on cookie
var position = 7;
var localId = postId7;
var cookieState = getcookie(localId);


//

if ((cookieState == 1) || (position==1 && cookieState!='0')) {
document.getElementById("news"+localId).style.display = "block";
document.getElementById("plus"+localId).className = "news-minusLink";
} else {
document.getElementById("news"+localId).style.display = "none";
document.getElementById("plus"+localId).className = "news-plusLink";
}

//
</script></td>
</tr>
</tbody>
</table>
</td>
<td style="background: url(new-hp/images/generalNews-table-right.jpg) repeat-y top right;" rowspan="20">
</td>
</tr>
</table>

</div>

<div class="phatLootBox-bottom">
<div>
&nbsp;</div>
</div>

</div>

<hr>



<html>


<!-- Mirrored from home.no.net/dzwt2/index.php by HTTrack Website Copier/3.x [XR&CO'2006], Fri, 01 Sep 2006 18:54:10 GMT -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<title>New Page 1</title>
</head>




<!-- Mirrored from home.no.net/dzwt2/index.php by HTTrack Website Copier/3.x [XR&CO'2006], Fri, 01 Sep 2006 18:54:10 GMT -->
</html>

<hr>

<div id="container-community">

<div class="phatLootBox-top">


<h2 class="c">
<span class="hide"><? echo $lang['installmenulabel']; ?></span>
</h2>
</a>
<a HREF="" style="cursor: hand;"><span class="phatLootBox-visual comm"></span></a>

<? if ($lang['Theme'] == 'Cristmas') { ?>
<img class="tpng" height="69" src="themes/cristmas/snowcover_large_02_l.png" style="position: absolute; top: -10px; left: -12px;" width="37"/>
<img class="tpng" height="36" src="themes/cristmas/snowcover_large_02_m.png" style="position: absolute; top: -10px; left: 25px;" width="411"/>
<img class="tpng" height="69" src="themes/cristmas/snowcover_large_02_r.png" style="position: absolute; top: -10px; left: 436px;" width="49"/> <? } ?>
</div>

<div class="phatLootBox-wrapper">

<div class="community-top">

<h3><?echo $lang['installheader']; ?><i><? echo $lang['comboxwrittenby']; ?></i>
</h3>

</div>

<div class="community-cnt">



<p><? echo $lang['installstory']; ?>
</p>



<div class="community-buttons" style="">

<ul>





</ul>

</div>

</div>

</div>

<div class="phatLootBox-bottom">

</div>

</div>

<hr>

<div id="container-community">

<div class="phatLootBox-top">

<a HREF="<? echo $lang['comboxlink']; ?>" style="cursor: hand;">
<h2 class="community">
<span class="hide"><? echo $lang['comboxmenulabel']; ?></span>
</h2>
</a>
<a HREF="<? echo $lang['comboxlink']; ?>" style="cursor: hand;"><span class="phatLootBox-visual comm"></span></a>
<span class="arrow-readmore"><a HREF="<? echo $lang['comboxlink']; ?>"><span>read more...</span></a></span>
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img class="tpng" height="69" src="themes/cristmas/snowcover_large_02_l.png" style="position: absolute; top: -10px; left: -12px;" width="37"/>
<img class="tpng" height="36" src="themes/cristmas/snowcover_large_02_m.png" style="position: absolute; top: -10px; left: 25px;" width="411"/>
<img class="tpng" height="69" src="themes/cristmas/snowcover_large_02_r.png" style="position: absolute; top: -10px; left: 436px;" width="49"/> <? } ?>

</div>

<div class="phatLootBox-wrapper">

<div class="community-top">

<h3><?echo $lang['comboxheader']; ?><i><? echo $lang['comboxwrittenby']; ?></i>
</h3>

</div>

<div class="community-cnt">

<div class="community-portrait">
</div>

<p><? echo $lang['comboxstory']; ?>
</p>

<div class="community-watch">
Have you made or seen something that you think deserves to be on the World of Warcraft Community Watch? Send the link to: <a href="<? echo $lang['adminmailadress']; ?>"><? echo $lang['adminname']; ?></a>.
</div>

<p>

<small class="blood">
* Links on this news post may expire over time and are created by other companies/individuals that are neither affiliated with nor supported by <? echo $lang['adminname']; ?>.
</small>

</p>

<div class="community-buttons" style="">

<ul>





</ul>

</div>

</div>

</div>

<div class="phatLootBox-bottom">
<div>
<a HREF="<? echo $lang['comboxlink']; ?>"><img alt="button-red-more" height="12" SRC="new-hp/images/icons/button-red-more.jpg" width="72"></a>
</div>
</div>

</div>

<hr>

<!-- break here --><div id="threeCol-teasers">

<h2>
<span class="hide">Community Teasers</span>
</h2>

<div class="smallTeaser firstTeaser">
<? if (empty($lang['Theme'])) { $lang['Theme'] = 'Default'; }
if ($lang['Theme'] == 'Cristmas') { ?>
<img class="tpng" height="63" src="themes/cristmas/snowcover_tiny_round_01.png" style="position: absolute; top: -12px; left: -12px; z-index: 200032;" width="161"/>
<img class="tpng" height="49" src="themes/cristmas/little_presents.png" style="position: absolute; top: -45px; left: 75px; z-index: 200032;" width="64"/> <? } ?>

<span class="smallTeaser-visual community-contests"></span>

<div class="smallTeaser-bg">

<div class="chains"></div>

<h3 class="contests">
<span>Movies</span>
</h3>

<span class="arrow-readmore"><a HREF="<? echo $lang['menu5link2']; ?>"></a></span>
<a HREF="<? echo $lang['menu5link2']; ?>"><img alt="Contest" SRC="new-hp/images/featured/contest_6-7-06.jpg" title="Movies"></a>
<span class="button-readmore"><a HREF="contests/index.htm"><span>read more...</span></a></span>

</div>

</div>

<div class="smallTeaser">
<? if (empty($lang['Theme'])) { $lang['Theme'] = 'Default'; }
if ($lang['Theme'] == 'Cristmas') { ?>
<img class="tpng" height="63" src="themes/cristmas/snowcover_tiny_round_02.png" style="position: absolute; top: -12px; left: -12px; z-index: 200032;" width="161"/> <? } ?>

<span class="smallTeaser-visual community-fanarts"></span>

<div class="smallTeaser-bg">

<div class="chains"></div>

<h3 class="fanarts">
<span>Fan Art</span>
</h3>

<span class="arrow-readmore"><a HREF="<? echo $lang['menu5link5']; ?>"><span>Click here to see more Fan Art</span></a></span>
<a HREF="<? echo $lang['menu5link5']; ?>"><img alt="Fan Art" border="0" SRC="new-hp/images/featured/fanart_6-28-06.jpg" title="Fan Art"></a>
<span class="button-readmore"><a HREF="<? echo $lang['menu5link5']; ?>"><span>read more...</span></a></span>

</div>

</div>

<div class="smallTeaser">
<? if (empty($lang['Theme'])) { $lang['Theme'] = 'Default'; }
if ($lang['Theme'] == 'Cristmas') { ?>
<img class="tpng" height="63" src="themes/cristmas/snowcover_tiny_round_01.png" style="position: absolute; top: -12px; left: -12px; z-index: 200032;" width="161"/> <? } ?>

<span class="smallTeaser-visual community-wallpapers"></span>

<div class="smallTeaser-bg">

<div class="chains"></div>

<h3 class="wallpapers">
<span> Wallpapers</span>
</h3>

<span class="arrow-readmore"><a HREF="<? echo $lang['menu5link4']; ?>"><span>Click here to see more Wallpapers</span></a></span>
<a HREF="<? echo $lang['menu5link4']; ?>"><img alt="Wallpapers" SRC="new-hp/images/featured/wallpaper_6-28-06.jpg" title="Wallpapers"></a>
<span class="button-readmore"><a HREF="<? echo $lang['menu5link4']; ?>"><span>read more...</span></a></span>
</div>

</div>

<div class="container-misc">



<div class="miscBox1 left">

<div class="miscBox-top">


<h4> <? echo $lang['Epic1header']; ?></h4>

</div>

<img alt="image-miscbox1" class="left" height="50" SRC="new-hp/images/icon-movies.gif" width="54">
<span>

<ul class="bullet-list">

<li>
<a HREF="<? echo $lang['Epic1link1']; ?>"><? echo $lang['Epic1label1']; ?></a>


<li>
<a HREF="<? echo $lang['Epic1link2']; ?>"><? echo $lang['Epic1label2']; ?></a>




<li>
<a HREF="<? echo $lang['Epic1link3']; ?>"><? echo $lang['Epic1label3']; ?></a>


</ul>

</span>

</div>

<div class="miscBox1 right">

<div class="miscBox-top">

<h4> <? echo $lang['Epic2header']; ?></h4>

</div>

<span>
<img alt="image-miscbox1" class="left" height="50" SRC="new-hp/images/icon-art.gif" width="54">
<ul class="bullet-list">

<li>
<a HREF="<? echo $lang['Epic2link1']; ?>"><? echo $lang['Epic2label1']; ?></a>


<li>
<a HREF="<? echo $lang['Epic2link2']; ?>"><? echo $lang['Epic2label2']; ?></a>


<li>
<a HREF="<? echo $lang['Epic2link3']; ?>"><? echo $lang['Epic2label3']; ?></a>


</ul>

</span>

</div>


<br>

</div>


<br>
<?


$br = strtolower($_SERVER['HTTP_USER_AGENT']); // what browser they use.

if(ereg("msie", $br))
{
?> <br><br><br><br><br><br> <?
}

 ?>

<br>

<div class="container-misc">

<div class="miscBox1 left">

<div class="miscBox-top">

<h4> <? echo $lang['Epic3header']; ?></h4>

</div>

<span>
<img alt="image-miscbox1" class="left" height="50" SRC="new-hp/images/icon-insider.gif" width="54">
 <? echo $lang['Epic3story']; ?>
 <br>

<ul class="bullet-list" style="margin-left:60px; _margin-left:30px; padding: 3px;">

<li>
<a HREF="<? echo $lang['Epic3link1']; ?>"><? echo $lang['Epic3label1']; ?></a>


<li>
<a HREF="<? echo $lang['Epic3link2']; ?>"><? echo $lang['Epic3label2']; ?></a>


</ul>

</span>



</div>

<div class="miscBox1 right">

<div class="miscBox-top" style="width: 220px; height: 29px">

<h4> <? echo $lang['Epic4header']; ?></h4>

</div>

<span>
<img alt="image-miscbox1" class="left" height="50" SRC="new-hp/images/misc4-teaser.gif" width="54">
 </span><font style="font-family: Helvetica, Arial, sans-serif; font-size:12px;"><? echo $lang['Epic4story']; ?></div>

<div class="clearing">
<p>&nbsp;</div>

<br>
<br>
<br>

</div>


</div>

</div>

</div>

</div>

<div id="cnt-bot">
<div>
<div>&nbsp;</div>
</div>
</div>

</div>

</td>

<td valign="top">



<div id="marginal">

<!-- quicklinks-section -->

<div id="quicklinks">


<div scr="new-hp/images/plainBox-top.jpg">
<h3>

<img border="0" src="new-hp/images/ql-plainBox-top2.jpg" width="213" height="25"></h3>
</div>


<div class="plainBox-cnt">

<div class="plainBox-cnt-top">

<div class="plainBox-cnt-bot">
<!--<img src="/new-hp/images/quicklinks-testimage.jpg" width="195" height="66" alt="quicklinks-testimage" /> -->
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img height="40" src="themes/cristmas/snowcover_small_round_02.png" style="position: absolute; top: -35px; left: -12px;" width="227"/>
<img height="110" src="themes/cristmas/stocking.png" style="position: absolute; top: 30px; left: 150px;" width="65"/>
<img height="208" src="themes/cristmas/holly_big.png" style="position: absolute; top: -35px; left: 200px; z-index: 2002;" width="66"/> <? } ?>

<ul class="none">

<? if($lang['quick1label'] <> '') { ?>
<li>
<a HREF="<? echo $lang['quick1link']; ?>">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img src="themes/cristmas/chrisball_blue.gif" width="25" height="25"><? } else { ?>
<img SRC="new-hp/images/icons/support.jpg" width="25" height="25"><? } ?><? echo $lang['quick1label']; ?></a>
<? } ?>
<? if($lang['quick2label'] <> '') { ?>
<li>
<a href="<? echo $lang['quick2link']; ?>">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img src="themes/cristmas/chrisball_green.gif" width="25" height="25"><? } else { ?>
<img SRC="new-hp/images/icons/realmstatus.jpg" width="25" height="25"><? } ?><? echo $lang['quick2label']; ?></a>
<? } ?>
<? if($lang['quick3label'] <> '') { ?>
<li>
<a href="<? echo $lang['quick3link']; ?>">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img src="themes/cristmas/chrisball_purple.gif" width="25" height="25"><? } else { ?>
<img SRC="new-hp/images/icons/acc_creation.jpg" width="25" height="25"><? } ?><? echo $lang['quick3label']; ?></a>
<? } ?>
<? if($lang['quick4label'] <> '') { ?>
<li>
<a href="<? echo $lang['quick4link']; ?>">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img src="themes/cristmas/chrisball_blue.gif" width="25" height="25"><? } else { ?>
<img SRC="new-hp/images/icons/acct_management.jpg" width="25" height="25"><? } ?><? echo $lang['quick4label']; ?>
</a>
<? } ?>
<? if($lang['quick5label'] <> '') { ?>
<li>
<a HREF="<? echo $lang['quick5link']; ?>">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img src="themes/cristmas/chrisball_red.gif" width="25" height="25"><? } else { ?>
<img SRC="new-hp/images/icons/retrieve_pwd.jpg" width="25" height="25"><? } ?><? echo $lang['quick5label']; ?></a>
<? } ?>
<? if($lang['quick6label'] <> '') { ?>
<li>
<a HREF="<? echo $lang['quick6link']; ?>">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img src="themes/cristmas/chrisball_purple.gif" width="25" height="25"><? } else { ?>
<img SRC="new-hp/images/icons/faq.jpg" width="25" height="25"><? } ?><? echo $lang['quick6label']; ?></a>
<? } ?>
 <? if($lang['quick7label'] <> '') { ?>
<li>
<a href="<? echo $lang['quick7link']; ?>">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img src="themes/cristmas/chrisball_skull.gif" width="25" height="25"><? } else { ?>
<img SRC="new-hp/images/icons/patch_notes.jpg" width="25" height="25"><? } ?><? echo $lang['quick7label']; ?></a>

<? } ?>
</ul>

</div>

</div>

</div>

<div class="plainBox-bot"></div>

</div>

<!-- buttons -->

</div>
 <div style="width: 213px; margin-left: auto; margin-right: auto; margin-top:0px; margin-bottom:8px;">
<p align="center">
&nbsp;</p>
</div>



<!-- gameinfo gameinfo-section -->

<div id="gameinfo-bg-container">



<div class="marginal-infoBox-top">




<a HREF="info/items/armorsets/index.html" style="cursor: hand;"><span class="infoBox-visual battlegrounds">
&nbsp;</span></a>
<span class="arrow-readmore"><a HREF="info/items/armorsets/index.html"><span>
</span></a></span>

</div>

<div class="marginal-infoBox">

<div class="marginal-infoBox-cnt">

<div class="parchment">

<div class="parchment-top">

<div class="parchment-bot">

<img alt="High Level Armor Sets" border="0" SRC="new-hp/images/bg-highlevelarmor%20copy.jpg" style="padding-left: 5px; _margin-left: 5px; display: block;"></a>

<div class="gameinfo-entry">

<?php if (eregi("MSIE",getenv("HTTP_USER_AGENT")) ||
eregi("Internet Explorer",getenv("HTTP_USER_AGENT"))) {
?><img alt="High Level Armor Sets" border="1" class="img-float" SRC="new-hp/images/warrior-top.gif" style="position: absolute; left: 20; top: -133" width="175" height="93"></a>
<?php } else { ?>
<img alt="High Level Armor Sets" border="1" class="img-float" SRC="new-hp/images/warrior-top.gif" style="position: absolute; left: 32; top: -135" width="175" height="93"></a>
<?php } ?>

</div>
<center>
<div style="margin-top: 5px; padding-bottom: 5px; width:170px;">
<font face="Times New Roman">

<? if ($lang['emutype'] == 'WoWEmu') { ?>
<script language="JavaScript">
//
function MM_jumpMenu(targ,selObj,restore){ //v3.0
eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
if (restore) selObj.selectedIndex=0;
}
//

<?php
$up = @fsockopen($lang['serverip'],$lang['serverport'], $errno, $errstr, 2);
if($up)
{
$serverres='../shared/wow-com/images/icons/serverstatus/uparrow2.gif';
}
else
{
$serverres='../shared/wow-com/images/icons/serverstatus/downarrow2.gif';
}
?>
</script> <? }
if ($lang['emutype'] == 'Ludmilla') {
$RealmOnline = False;
$connection = mysql_connect ($lang['hostname'],$lang['dbaselogin'],decrypt($lang['dbasepw'], 1200));
if(!$connection) { die(mysql_error()); }
mysql_select_db($lang['dbasename']);
if(!@mysql_select_db($lang['dbasename'],$connection)) { die(mysql_error()); }
$sql_text = 'SELECT * FROM realm_list';
if ($r = mysql_query($sql_text,$connection)){
while ($row = mysql_fetch_array($r)){
if ($row['status'] == '1') { $RealmOnline = True; }}}
if ($RealmOnline) {
$serverres='../shared/wow-com/images/icons/serverstatus/uparrow2.gif';
} else {
$serverres='../shared/wow-com/images/icons/serverstatus/downarrow2.gif'; }
mysql_close($connection);
}
if ($lang['emutype'] == 'Mangos') {
$connection = mysql_connect ($lang['hostname'],$lang['dbaselogin'],decrypt($lang['dbasepw'], 1200));
if(!$connection) { die(mysql_error()); }
mysql_select_db($lang['dbasename']);
if(!@mysql_select_db($lang['dbasename'],$connection)) { die(mysql_error()); }
$sql_text = 'SELECT * FROM realmlist';
$r2 = mysql_query($sql_text);
$row2 = mysql_fetch_array($r2);
$serverip = $row2['address'];
$serverport = $row2['port'];
if(!@mysql_select_db($lang['dbasename'],$connection)) { die(mysql_error()); }
$sql_text = 'SELECT * FROM account';
$r2 = mysql_query($sql_text);
$totalacc = mysql_num_rows($r2);
$up = @fsockopen($serverip,$serverport, $errno, $errstr, 2);
 if($up) {
    $serverres='../shared/wow-com/images/icons/serverstatus/uparrow2.gif';
 } else {
    $serverres='../shared/wow-com/images/icons/serverstatus/downarrow2.gif';
 }
mysql_close($connection);

$filename = $lang['mlogfile'];
if (file_exists($filename)) {

$endtime = date ("Y-m-d H:i:s");
$starttime = date ("Y-m-d H:i:s", filemtime($filename));
$detailed=true;
$short = true;



        if(! is_int($starttime)) $starttime = strtotime($starttime);
        if(! is_int($endtime)) $endtime = strtotime($endtime);

        $diff = ($starttime >= $endtime ? $starttime - $endtime : $endtime - $starttime);

        # Set the periods of time
        $periods = array("second", "minute", "hour", "day", "week", "month", "year", "decade");
        $lengths = array(1, 60, 3600, 86400, 604800, 2630880, 31570560, 315705600);

        if($short){
            $periods = array("s", "m", "h", "d", "m", "y");
            $lengths = array(1, 60, 3600, 86400, 2630880, 31570560);
        }

        # Go from decades backwards to seconds
        $i = sizeof($lengths) - 1; # Size of the lengths / periods in case you change them
        $time = ""; # The string we will hold our times in
        while($i >= 0) {
            if($diff > $lengths[$i-1]) { # if the difference is greater than the length we are checking... continue
                $val = floor($diff / $lengths[$i-1]);    # 65 / 60 = 1.  That means one minute.  130 / 60 = 2. Two minutes.. etc
                $time .= $val . ($short ? '' : ' ') . $periods[$i-1] . ((!$short && $val > 1) ? 's ' : ' ');  # The value, then the name associated, then add 's' if plural
                $diff -= ($val * $lengths[$i-1]);    # subtract the values we just used from the overall diff so we can find the rest of the information
                if(!$detailed) { $i = 0; }    # if detailed is turn off (default) only show the first set found, else show all information
            }
            $i--;
        }



        }

$conn = mysql_connect ($lang['hostname'],$lang['dbaselogin'],decrypt($lang['dbasepw'], 1200));
if(!$conn) { die(mysql_error()); }
mysql_select_db($lang['rdbasename']);
if(!@mysql_select_db($lang['rdbasename'],$conn)) { die(mysql_error()); }
$sql_text = 'SELECT name FROM `character`';
$r3 = mysql_query($sql_text);
$totalchar = mysql_num_rows($r3);
mysql_close($conn);


}
if ($lang['emutype'] == 'Antrix') { ?>
<script language="JavaScript">
//
function MM_jumpMenu(targ,selObj,restore){ //v3.0
eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
if (restore) selObj.selectedIndex=0;
}
//
</script>
<?php
if (empty($lang['awline'])) { $lang['awline'] = 'OFF'; }
if ($lang['awline'] == 'OFF') {
$up = @fsockopen($lang['serverip'],$lang['serverport'], $errno, $errstr, 2);
if($up)
{
$serverres='../shared/wow-com/images/icons/serverstatus/uparrow2.gif';
}
else
{
$serverres='../shared/wow-com/images/icons/serverstatus/downarrow2.gif';
}} else { $serverres='../shared/wow-com/images/icons/serverstatus/uparrow2.gif'; }
?>

<? $filename = $lang['mlogfile'];
if (file_exists($filename)) {

$endtime = date ("Y-m-d H:i:s");
$starttime = date ("Y-m-d H:i:s", filemtime($filename));
$detailed=true;
$short = true;



        if(! is_int($starttime)) $starttime = strtotime($starttime);
        if(! is_int($endtime)) $endtime = strtotime($endtime);

        $diff = ($starttime >= $endtime ? $starttime - $endtime : $endtime - $starttime);

        # Set the periods of time
        $periods = array("second", "minute", "hour", "day", "week", "month", "year", "decade");
        $lengths = array(1, 60, 3600, 86400, 604800, 2630880, 31570560, 315705600);

        if($short){
            $periods = array("s", "m", "h", "d", "m", "y");
            $lengths = array(1, 60, 3600, 86400, 2630880, 31570560);
        }

        # Go from decades backwards to seconds
        $i = sizeof($lengths) - 1; # Size of the lengths / periods in case you change them
        $time = ""; # The string we will hold our times in
        while($i >= 0) {
            if($diff > $lengths[$i-1]) { # if the difference is greater than the length we are checking... continue
                $val = floor($diff / $lengths[$i-1]);    # 65 / 60 = 1.  That means one minute.  130 / 60 = 2. Two minutes.. etc
                $time .= $val . ($short ? '' : ' ') . $periods[$i-1] . ((!$short && $val > 1) ? 's ' : ' ');  # The value, then the name associated, then add 's' if plural
                $diff -= ($val * $lengths[$i-1]);    # subtract the values we just used from the overall diff so we can find the rest of the information
                if(!$detailed) { $i = 0; }    # if detailed is turn off (default) only show the first set found, else show all information
            }
            $i--;
        }



        }
$connection = mysql_connect ($lang['hostname'],$lang['dbaselogin'],decrypt($lang['dbasepw'], 1200));
if(!$connection) { die(mysql_error()); }
if(!@mysql_select_db($lang['dbasename'],$connection)) { die(mysql_error()); }
$sql_text = 'SELECT * FROM accounts';
$r2 = mysql_query($sql_text);
$totalacc = mysql_num_rows($r2);
$sql_text = 'SELECT * FROM characters';
$r2 = mysql_query($sql_text);
$totalchar = mysql_num_rows($r2);
mysql_close($connection); }

if ($lang['emutype'] <> 'Mangos') { if ($lang['emutype'] <> 'Antrix') { ?>
&nbsp;<img src="<? echo $serverres ?>" width="18" height="19">
<br>
<font color="#000000" face="Times New Roman" size="2">Above you can see if the realm is Online or offline.</font>
<? }}
if ($lang['emutype'] == 'Mangos') { ?>

<table width="100%" border="0">
      <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Serverstatus
      </TD>
            <TD>
      :
      </TD>
      <TD>
      <img src="<? echo $serverres ?>" width="18" height="19">
      </TD>
      </TR>
      <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Realm Name
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? if ($lang['emutype'] == 'Mangos') { echo $row2['name']; } ?>
      </TD>
      </TR>
            <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      IP Address
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="0000A0"><? echo $serverip;  ?></font></b>
      </TD>
      </TR>
                  <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      No Accounts
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $totalacc;  ?>
      </TD>
      </TR>
      <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      No Characters
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $totalchar;  ?>
      </TD>
      </TR>
                              <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Uptime
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $time;  ?>
      </TD>
      </TR></table>

      <? if ($lang['server1'] <> "") { ?>
      <table width="100%" border="0">
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">___________________________<br></TD></TR></Table><? } ?>

      <? if ($lang['server1'] <> "") { ?>
      <table width="100%" border="0">
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b>ServerDetails</b>
      </TD></TR></table><? } ?>

      <? if ($lang['server1'] <> "") { ?>
      <table width="100%" border="0">
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Server
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['server1'];  ?>
      </TD>
      </TR> <? } ?>
      <? if ($lang['server2'] <> "") { ?>
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Version
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['server2'];  ?>
      </TD>
      </TR> <? } ?>
            <? if ($lang['server3'] <> "") { ?>
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      DBase type
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['server3'];  ?>
      </TD>
      </TR> <? } ?>
            <? if ($lang['server4'] <> "") { ?>
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      DBase version
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['server4'];  ?>
      </TD>
      </TR> <? } ?>
                  <? if ($lang['server5'] <> "") { ?>
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      ScriptDev version
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['server5'];  ?>
      </TD>
      </TR> <? } ?>
                        <? if ($lang['server6'] <> "") { ?>
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Client version
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="0000A0"><? echo $lang['server6'];  ?></font></b>
      </TD>
      </TR></Table><? } ?>

            <? if ($lang['server7'] <> "") { ?>
      <table width="100%" border="0">
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">___________________________<br></TD></TR></Table><? } ?>

      <? if ($lang['server7'] <> "") { ?>
      <table width="100%" border="0">
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b>Patches</b>
      </TD></TR><? } ?>

      <? if ($lang['server7'] <> "") { ?>
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server7'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server8'] <> "") { ?>
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server8'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server9'] <> "") { ?>

      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server9'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server10'] <> "") { ?>

      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server10'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server11'] <> "") { ?>

      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server11'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server12'] <> "") { ?>
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server12'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server7'] <> "") { ?> </TABLE> <? } ?>

      <table width="100%" border="0">
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">___________________________<br></TD></TR></Table>

<? }
if ($lang['emutype'] == 'Antrix') { ?>
<table width="100%" border="0"
      <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Serverstatus
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <img src="<? echo $serverres ?>" width="18" height="19">
      </TD>
      </TR>
      <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Realm Name
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['Antrixname']; ?>
      </TD>
      </TR>
            <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      IP Address
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['serverip'];  ?>
      </TD>
      </TR>
                  <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      No Accounts
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $totalacc;  ?>
      </TD>
      </TR>
      <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      No Characters
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $totalchar;  ?>
      </TD>
      </TR>
                              <TR>
      <TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Uptime
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $time;  ?>
      </TD>
      </TR>
  </TABLE>

      <? if ($lang['server1'] <> "") { ?>
      <table width="100%" border="0">
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">___________________________<br></TD></TR></Table><? } ?>

      <? if ($lang['server1'] <> "") { ?>
      <table width="100%" border="0">
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b>ServerDetails</b>
      </TD></TR></table><? } ?>

      <? if ($lang['server1'] <> "") { ?>
      <table width="100%" border="0">
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Server
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['server1'];  ?>
      </TD>
      </TR> <? } ?>
      <? if ($lang['server2'] <> "") { ?>
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Version
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['server2'];  ?>
      </TD>
      </TR> <? } ?>
            <? if ($lang['server3'] <> "") { ?>
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      DBase type
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['server3'];  ?>
      </TD>
      </TR> <? } ?>
            <? if ($lang['server4'] <> "") { ?>
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      DBase version
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['server4'];  ?>
      </TD>
      </TR> <? } ?>
                  <? if ($lang['server5'] <> "") { ?>
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      ScriptDev version
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <? echo $lang['server5'];  ?>
      </TD>
      </TR> <? } ?>
                        <? if ($lang['server6'] <> "") { ?>
      <TR><TD ALIGN=left style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      Client version
      </TD>
            <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      :
      </TD>
      <TD style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="0000A0"><? echo $lang['server6'];  ?></font></b>
      </TD>
      </TR></Table><? } ?>

            <? if ($lang['server7'] <> "") { ?>
      <table width="100%" border="0">
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">___________________________<br></TD></TR></Table><? } ?>

      <? if ($lang['server7'] <> "") { ?>
      <table width="100%" border="0">
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b>Patches</b>
      </TD></TR><? } ?>

      <? if ($lang['server7'] <> "") { ?>
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server7'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server8'] <> "") { ?>
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server8'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server9'] <> "") { ?>

      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server9'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server10'] <> "") { ?>

      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server10'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server11'] <> "") { ?>

      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server11'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server12'] <> "") { ?>
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">
      <b><font color="804000"><? echo $lang['server12'];  ?></font></b>
      </TD></TR><? } ?>

      <? if ($lang['server7'] <> "") { ?> </TABLE> <? } ?>

      <table width="100%" border="0">
      <TR><TD ALIGN=center style="font-family: Helvetica, Arial, sans-serif; font-size:11px;">___________________________<br></TD></TR></Table>
<? }

if ($lang['emutype'] == 'WoWEmu') {
if (empty($lang['statstype'])) { $lang['statstype'] = 'FILE'; }
$statxml = $lang['xmlpath'];
if (empty($lang['totalmplayers'])) { $lang['totalmplayers'] = 10; }
if (empty($lang['inline'])) { $lang['inline'] = 'OFF'; }
if ($lang['statstype'] == 'DATABASE') {
if ($lang['inline'] == 'OFF')  {
if($statxml <> '') {
 ?><br><br><font size="3">Now Online:<? }
class Parser
{var $_error = null;
var $XMLFile;
var $XMLSection;
var $XMLData;
var $unique;
function _setError($error_str)
{ $this->_error = $error_str; }
function getError()
{ return $this->_error; }
function Parser()
{        }
function _Parser()
{         }
function setXMLFile($XMLFile)
{ $this->XMLFile = $XMLFile;
  $this->XMLData = array(); }
function setXMLSection($XMLSection, $unique = NULL)
{ $this->XMLSection = $XMLSection;
$this->XMLData    = array();
$this->unique     = $unique;}
function readDatabase()
{ // read the xml database of users
$data   = implode("", file($this->XMLFile));
$parser = xml_parser_create();
xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0);
xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE,   1);
xml_parse_into_struct($parser, $data, $values, $tags);
xml_parser_free($parser);
$tdb = array();
// loop through the structures
foreach ($tags as $key => $val)
{if ($key == $this->XMLSection)
{$ranges = $val;
if ($this->unique){
$offset = $ranges[0] + 1;
$len    = $ranges[1] - $offset;
$this->XMLData[]  = $this->_parse(array_slice($values, $offset, $len));}
else for ($i=0; $i < count($ranges); $i+=2){
$offset = $ranges[$i] + 1;
$len    = $ranges[$i + 1] - $offset;
$this->XMLData[]  = $this->_parse(array_slice($values, $offset, $len)); }} else { continue; } } }
function _parse($values) {
for ($i=0; $i < count($values); $i++)
$result[$values[$i]["tag"]] = $values[$i]["value"];
return $result; }}
require_once "includes/zone.inc";
$honor_file = $statxml;
if (!@file($honor_file))
{ echo "<div align='center'>Error: '<font color='#ff0000'>$honor_file</font>' file not exists</div>"; exit(); }
$XML      = new Parser();
$XML->setXMLfile($honor_file);
$XML->setXMLsection("player");
$XML->readDatabase();
$chars_db = $XML->XMLData;
?><br><table width="100%" border="0"><tr><td><b>Name:</td><td><b>Class:</td><td><b>Level:</td></tr><br><?
$total = sizeof($chars_db);
$i = 0;
while ($i < $total) {
if ($i <= $lang['totalmplayers']) {
?><b><tr><td><? echo $chars_db[$i]["name"]; ?> </b></td> <?
$clas = $chars_db[$i]["class"];
if($clas == 1) { ?> <td><img src="new-hp/Warrior.jpg" alt="Warrior" width="20" height="20"></td> <? }
if($clas == 2) { ?> <td><img src="new-hp/Paladin.jpg" alt="Paladin" width="20" height="20"></td> <? }
if($clas == 3) { ?> <td><img src="new-hp/Hunter.jpg" alt="Hunter" width="20" height="20"></td> <? }
if($clas == 4) { ?> <td><img src="new-hp/Rogue.jpg" alt="Rogue" width="20" height="20"></td> <? }
if($clas == 5) { ?> <td><img src="new-hp/Priest.jpg" alt="Priest" width="20" height="20"></td> <? }
if($clas == 7) { ?> <td><img src="new-hp/Shaman.gif" alt="Shaman" width="20" height="20"></td> <? }
if($clas == 8) { ?> <td><img src="new-hp/mage.jpg" alt="Mage" width="20" height="20"></td> <? }
if($clas == 9) { ?> <td><img src="new-hp/Warlock.gif" alt="Warlock" width="20" height="20"></td> <? }
if($clas == 11) { ?> <td><img src="new-hp/Druid.jpg" alt="Druid" width="20" height="20"></td> <? }
?><td> <? echo $chars_db[$i]["level"]; ?> </td></tr> <?
$i++; }} ?>
</table><br></b><font size="3">There are <? echo $total; ?> players online<br><? }}

if ($lang['statstype']='FILE') {
if ($lang['inline'] == 'OFF')  {
$statxml = $lang['xmlpath'];


if($statxml <> '') {

           ?><br><br><font size="3">Now Online:<?


          global $statxml;
          if(!$handle = fopen ($statxml, "r"))
          {
           print "Could not open $statxml for reading...";
           exit;
          }
          ?>
          <br><table width="100%" border="0"><tr>
          <td><b>Name:</td><td><b>Class:</td><td><b>Level:</b></td></tr><br><?
          $i = 0;
          while (!feof($handle)) {

                 $filedata = fgets($handle, 4096);
                    $dataline = trim($filedata);
                if (preg_match('/^<name>(.+)<\/name>/', $dataline, $matches)){
                 $player[] = $matches[1];
                 $name = $matches[1];
                 $total ++; ?><b><tr><td><?


                 if ($i < $lang['totalmplayers']) {
                 echo $name; ?> </b></td> <?
                 }}
                 if (preg_match('/^<race>(.+)<\/race>/', $dataline, $matches)){
                 $user[$name]['race'] = $matches[1];
                 }
                if (preg_match('/^<class>(.+)<\/class>/', $dataline, $matches)){
                 $user[$name]['class'] = $matches[1];
                 $clas = $matches[1];
                 if ($i < $lang['totalmplayers']) {
                 if($clas == 1) { ?> <td><img src="new-hp/Warrior.jpg" alt="Warrior" width="20" height="20"></td> <? }
                 if($clas == 2) { ?> <td><img src="new-hp/Paladin.jpg" alt="Paladin" width="20" height="20"></td> <? }
                 if($clas == 3) { ?> <td><img src="new-hp/Hunter.jpg" alt="Hunter" width="20" height="20"></td> <? }
                 if($clas == 4) { ?> <td><img src="new-hp/Rogue.jpg" alt="Rogue" width="20" height="20"></td> <? }
                 if($clas == 5) { ?> <td><img src="new-hp/Priest.jpg" alt="Priest" width="20" height="20"></td> <? }
                 if($clas == 7) { ?> <td><img src="new-hp/Shaman.gif" alt="Shaman" width="20" height="20"></td> <? }
                 if($clas == 8) { ?> <td><img src="new-hp/mage.jpg" alt="Mage" width="20" height="20"></td> <? }
                 if($clas == 9) { ?> <td><img src="new-hp/Warlock.gif" alt="Warlock" width="20" height="20"></td> <? }
                 if($clas == 11) { ?> <td><img src="new-hp/Druid.jpg" alt="Druid" width="20" height="20"></td> <? }
                 }}
                 if (preg_match('/^<level>(.+)<\/level>/', $dataline, $matches)){
                 $user[$name]['level'] = $matches[1];
                 $level = $matches[1];
                 ?><td>
                 <?
                 if ($i < $lang['totalmplayers']) {
                 echo $level ?> </td></tr> <? }
                 $i++;
                 }
                $player['stats'] = $user;
          }
          fclose($handle);
          ?>
          <? if($total == 0) {

                  $total = 0;
             } ?>
          </table></b><font size="3">There are <? echo $total; ?> players online<br><?
        }}}






if ($lang['inline'] == 'OFF')  {
if ($total > $lang['totalmplayers']) {
?><font size="1"><center><A href="players.php">Show Player list</A><?
} } else { ?><font size="1"><center><A href="players.php">Show player list</A><? }}

if ($lang['emutype'] == 'Ludmilla') { ?>

<br><br><font size="3">Now Online:
<br><table width="100%" border="0"><tr>
          <td><b>Name:</td><td><b>Class:</td><td><b>Level:</b></td></tr><br><?
          $i = 0;

$connection = mysql_connect ($lang['hostname'],$lang['dbaselogin'],decrypt($lang['dbasepw'], 1200));
if(!$connection) { die(mysql_error()); }
mysql_select_db($lang['dbasename']);
if(!@mysql_select_db($lang['dbasename'],$connection)) { die(mysql_error()); }
$sql_text = 'SELECT * FROM char_state WHERE online_state = 1';
if ($r = mysql_query($sql_text,$connection)){
while ($row = mysql_fetch_array($r)){

           $tt = $row['player_guid'];
           $sql_text2 = "SELECT * FROM characters WHERE guid='$tt'";
           $r2 = mysql_query($sql_text2);
           $row2 = mysql_fetch_array($r2);

                 $total ++; ?><b><tr><td><?


                 if ($i < $lang['totalmplayers']) {
                 echo $row2['name']; ?> </b></td> <? }

                 $clas = $row2['class'];
                 if ($i < $lang['totalmplayers']) {
                 if($clas == 1) { ?> <td><img src="new-hp/Warrior.jpg" alt="Warrior" width="20" height="20"></td> <? }
                 if($clas == 2) { ?> <td><img src="new-hp/Paladin.jpg" alt="Paladin" width="20" height="20"></td> <? }
                 if($clas == 3) { ?> <td><img src="new-hp/Hunter.jpg" alt="Hunter" width="20" height="20"></td> <? }
                 if($clas == 4) { ?> <td><img src="new-hp/Rogue.jpg" alt="Rogue" width="20" height="20"></td> <? }
                 if($clas == 5) { ?> <td><img src="new-hp/Priest.jpg" alt="Priest" width="20" height="20"></td> <? }
                 if($clas == 7) { ?> <td><img src="new-hp/Shaman.gif" alt="Shaman" width="20" height="20"></td> <? }
                 if($clas == 8) { ?> <td><img src="new-hp/mage.jpg" alt="Mage" width="20" height="20"></td> <? }
                 if($clas == 9) { ?> <td><img src="new-hp/Warlock.gif" alt="Warlock" width="20" height="20"></td> <? }
                 if($clas == 11) { ?> <td><img src="new-hp/Druid.jpg" alt="Druid" width="20" height="20"></td> <? }
                 }
                 ?><td>
                 <?
                 if ($i < $lang['totalmplayers']) {
                 echo $row2['level']; ?> </td></tr> <? }
                 $i++;


          }}
          if($total == 0) {

                  $total = 0;
             } ?>
          </table></b><b><font size="3">There are <? echo $total; ?> players online</b><br><?

          $filename = "uptime.log";
          $file = fopen($filename,"a");
          $time = date ("D-Y-m-d H:i:s");
          fwrite($file,$time."\n");
          fwrite($file,$total."\n");
          fclose($file);



mysql_close($connection);


if ($total > $lang['totalmplayers']) {
?><font size="1"><center><A href="players.php">Show Player list</A> <? }}

if ($lang['emutype'] == 'Mangos') { ?>

<br><br><b><font style="font-family: Helvetica, Arial, sans-serif; font-size:12px;">Now Online:
<br><table width="100%" border="0"><tr>
          <td style="font-family: Helvetica, Arial, sans-serif; font-size:11px;"><b>Name:</td><td style="font-family: Helvetica, Arial, sans-serif; font-size:11px;"><b>Class:</td><td style="font-family: Helvetica, Arial, sans-serif; font-size:11px;"><b>Level:</b></td></tr><br><?
          $i = 0;

$connection = mysql_connect ($lang['hostname'],$lang['dbaselogin'],decrypt($lang['dbasepw'], 1200));
if(!$connection) { die(mysql_error()); }
mysql_select_db($lang['rdbasename']);

if(!@mysql_select_db($lang['rdbasename'],$connection)) { die(mysql_error()); }
$sql_text = 'SELECT *
 FROM `character` WHERE online = 1';
if ($r = mysql_query($sql_text,$connection)){

while ($row = mysql_fetch_array($r)){



                 $total ++;


                 if ($i < $lang['totalmplayers']) {
                         ?><b><tr><td style="font-family: Helvetica, Arial, sans-serif; font-size:11px;"><?
                 echo $row['name']; ?> </b></td> <? }

                 $clas = $row['class'];
                 if ($i < $lang['totalmplayers']) {
                 if($clas == 1) { ?> <td><img src="new-hp/Warrior.jpg" alt="Warrior" width="20" height="20"></td> <? }
                 if($clas == 2) { ?> <td><img src="new-hp/Paladin.jpg" alt="Paladin" width="20" height="20"></td> <? }
                 if($clas == 3) { ?> <td><img src="new-hp/Hunter.jpg" alt="Hunter" width="20" height="20"></td> <? }
                 if($clas == 4) { ?> <td><img src="new-hp/Rogue.jpg" alt="Rogue" width="20" height="20"></td> <? }
                 if($clas == 5) { ?> <td><img src="new-hp/Priest.jpg" alt="Priest" width="20" height="20"></td> <? }
                 if($clas == 7) { ?> <td><img src="new-hp/Shaman.gif" alt="Shaman" width="20" height="20"></td> <? }
                 if($clas == 8) { ?> <td><img src="new-hp/mage.jpg" alt="Mage" width="20" height="20"></td> <? }
                 if($clas == 9) { ?> <td><img src="new-hp/Warlock.gif" alt="Warlock" width="20" height="20"></td> <? }
                 if($clas == 11) { ?> <td><img src="new-hp/Druid.jpg" alt="Druid" width="20" height="20"></td> <? }
                 }
                 ?>

                 <?
                 if ($i < $lang['totalmplayers']) {
                $char_data = explode(' ',$row['data']);
                $char_gender = dechex($char_data[36]);
                $char_gender = str_pad($char_gender,8, 0, STR_PAD_LEFT);
                $char_gender = $char_gender{3};

                 ?><td style="font-family: Helvetica, Arial, sans-serif; font-size:11px;"><center><? echo $char_data[34];
                 ?></td></tr><? }
                 $i++;


          }}
          if($total == 0) {

                  $total = 0;
             } ?>
          </table></b><br><b><font style="font-family: Helvetica, Arial, sans-serif; font-size:12px;">There are <? echo $total; ?> players online</b><br><?

          $filename = "uptime.log";
          $file = fopen($filename,"a");
          $time = date ("D-Y-m-d H:i:s");
          fwrite($file,$time."\n");
          fwrite($file,$total."\n");
          fclose($file);



mysql_close($connection);


if ($total > $lang['totalmplayers']) {
?><font style="font-family: Helvetica, Arial, sans-serif; font-size:8px;"><center><A href="players.php">Show Player list</A> <? }}

if ($lang['emutype'] == 'Antrix') { ?>

<br><br><font style="font-family: Helvetica, Arial, sans-serif; font-size:12px;">Now Online:
<br><table width="100%" border="0"><tr>
          <td style="font-family: Helvetica, Arial, sans-serif; font-size:11px;"><b>Name:</td><td style="font-family: Helvetica, Arial, sans-serif; font-size:11px;"><b>Class:</td><td style="font-family: Helvetica, Arial, sans-serif; font-size:11px;"><b>Level:</b></td></tr><br><?
          $i = 0;

$connection = mysql_connect ($lang['hostname'],$lang['dbaselogin'],decrypt($lang['dbasepw'], 1200));
if(!$connection) { die(mysql_error()); }
mysql_select_db($lang['dbasename']);

if(!@mysql_select_db($lang['dbasename'],$connection)) { die(mysql_error()); }
$sql_text = 'SELECT *
 FROM `characters` WHERE online = 1';
if ($r = mysql_query($sql_text,$connection)){

while ($row = mysql_fetch_array($r)){



                 $total ++;


                 if ($i < $lang['totalmplayers']) {
                         ?><b><tr><td style="font-family: Helvetica, Arial, sans-serif; font-size:11px;"><?
                 echo $row['name']; ?> </b></td> <? }

                 $clas = $row['class'];
                 if ($i < $lang['totalmplayers']) {
                 if($clas == 1) { ?> <td><img src="new-hp/Warrior.jpg" alt="Warrior" width="20" height="20"></td> <? }
                 if($clas == 2) { ?> <td><img src="new-hp/Paladin.jpg" alt="Paladin" width="20" height="20"></td> <? }
                 if($clas == 3) { ?> <td><img src="new-hp/Hunter.jpg" alt="Hunter" width="20" height="20"></td> <? }
                 if($clas == 4) { ?> <td><img src="new-hp/Rogue.jpg" alt="Rogue" width="20" height="20"></td> <? }
                 if($clas == 5) { ?> <td><img src="new-hp/Priest.jpg" alt="Priest" width="20" height="20"></td> <? }
                 if($clas == 7) { ?> <td><img src="new-hp/Shaman.gif" alt="Shaman" width="20" height="20"></td> <? }
                 if($clas == 8) { ?> <td><img src="new-hp/mage.jpg" alt="Mage" width="20" height="20"></td> <? }
                 if($clas == 9) { ?> <td><img src="new-hp/Warlock.gif" alt="Warlock" width="20" height="20"></td> <? }
                 if($clas == 11) { ?> <td><img src="new-hp/Druid.jpg" alt="Druid" width="20" height="20"></td> <? }
                 }
                 ?>

                 <?
                 if ($i < $lang['totalmplayers']) {


                 ?><td style="font-family: Helvetica, Arial, sans-serif; font-size:11px;"><center><? echo $row['level'];
                 ?></td></tr><? }
                 $i++;


          }}
          if($total == 0) {

                  $total = 0;
             } ?>
          </table></b><br><b><font style="font-family: Helvetica, Arial, sans-serif; font-size:12px;">There are <? echo $total; ?> players online</b><br><?

          $filename = "uptime.log";
          $file = fopen($filename,"a");
          $time = date ("D-Y-m-d H:i:s");
          fwrite($file,$time."\n");
          fwrite($file,$total."\n");
          fclose($file);



mysql_close($connection);


if ($total > $lang['totalmplayers']) {
?><font style="font-family: Helvetica, Arial, sans-serif; font-size:8px;"><center><A href="players.php">Show Player list</A> <? }} ?>

</font></div></center></div><div style="background: url(new-hp/images/marginal-infoBox-cnt-bottompaper.jpg) no-repeat 0 0; height: 6px;  font-size: 1px;"></div>
</div></div></div></div></div><div class="marginal-infoBox-bottom">&nbsp;</div></div >

<div id="margial" style="margin-bottom: -5px; margin-top: 4px;">

<a class="button-armory" href="armory/index.php"></a>
<a class="button-forums" href="<? echo $lang['menu6link1']; ?>"></a>
</div></br>
<?if (empty($lang['chat'])) { $lang['chat'] = 'OFF'; }
if ($lang['chat'] == 'ON') { ?><div id="quicklinks"><div scr="new-hp/images/plainBox-top.jpg"><h3>
<img border="0" src="new-hp/images/sh-plainBox-top1.jpg" width="213" height="25"></h3>
</div>
<div class="plainBox-cnt"><div class="plainBox-cnt-top"><div class="plainBox-cnt-bot">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img height="40" src="themes/cristmas/snowcover_small_round_01.png" style="position: absolute; top: -35px; left: -12px;" width="227"/> <? } ?>
<!--<img src="/new-hp/images/quicklinks-testimage.jpg" width="195" height="66" alt="quicklinks-testimage" /> -->
<ul class="none"><table border="0" cellpadding="0" cellspacing="0" width="0" ALIGN="center"><tr><td>
<br>Want to chat about quests, bugs or want to talk to a GM, even talk about the weather then join the club<br>
<br><center><font size="2">Now chatting :</font><br><br>
<?php
$connection = mysql_connect ($lang['chathostname'],$lang['chatdbaselogin'],decrypt($lang['chatdbasepw'],1600));
mysql_select_db($lang['chatdbasename']);
$sql_text = 'SELECT flashchat_users.login FROM  flashchat_connections inner join flashchat_users ON flashchat_connections.userid = flashchat_users.id';
if ($r = mysql_query($sql_text,$connection)){
while ($row = mysql_fetch_array($r)){ ?><center><?
echo '<strong><font size="2">'.$row['login'].'</font></strong></br>'; } }
mysql_close($connection);?>
<br><a href="../setup/chat/flashchat.php" title="live chat" target="_blank">Enter the live chat</a><br></td></tr></table></ul></div></div></div><div class="plainBox-bot"></div>
</div><br><? } ?>

<?if (empty($lang['teamspeak'])) { $lang['teamspeak'] = 'OFF'; }
if ($lang['teamspeak'] == 'ON') { ?><div id="quicklinks"><div scr="new-hp/images/plainBox-top.jpg"><h3>
<img border="0" src="new-hp/images/sh-plainBox-top3.jpg" width="213" height="25"></h3>
</div>
<div class="plainBox-cnt"><div class="plainBox-cnt-top"><div class="plainBox-cnt-bot">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img height="40" src="themes/cristmas/snowcover_small_round_01.png" style="position: absolute; top: -35px; left: -12px;" width="227"/> <? } ?>
<ul class="none"><table border="0" cellpadding="0" cellspacing="0" width="0" ALIGN="center"><tr><td>
<? include_once ("teamspeak/ts.php"); ?>
</td></tr></table></ul></div></div></div><div class="plainBox-bot"></div>
</div><br><? } ?>

<? if($lang['shoutbox'] == 'ON') { ?>
<div id="quicklinks"><div scr="new-hp/images/plainBox-top.jpg"><h3><img border="0" src="new-hp/images/sh-plainBox-top.jpg" width="213" height="25"></h3></div>
<div class="plainBox-cnt"><div class="plainBox-cnt-top"><div class="plainBox-cnt-bot">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img height="40" src="themes/cristmas/snowcover_small_round_02.png" style="position: absolute; top: -35px; left: -12px;" width="227"/>
<img height="49" src="themes/cristmas/little_presents.png" style="position: absolute; top: -65px; left: 150px; z-index: 200032;" width="64"/> <? } ?>
<!--<img src="/new-hp/images/quicklinks-testimage.jpg" width="195" height="66" alt="quicklinks-testimage" /> -->
<ul class="none"><table border="0" cellpadding="0" cellspacing="0" width="0"><tr><td><? include "../setup/shout/index.php"; ?></td></tr></table>
</ul></div></div></div><div class="plainBox-bot"></div></div><? } ?>

<?if (empty($lang['devbox'])) { $lang['devbox'] = 'ON'; }
 if ($lang['devbox'] == 'ON') { ?>
<!-- in development-section -->
<div id="gameinfo-underdev-container"><div class="marginal-infoBox-top"><a HREF="" style="cursor: hand;"><h3><span>In development</span></h3></a>
<a HREF="" style="cursor: hand;"><span class="infoBox-visual pvp"></span></a><span class="arrow-readmore"><span>Under Development Section</span></a></span>
</div><div class="marginal-infoBox"><div class="marginal-infoBox-cnt" style="position: relative;"><div class="under-dev"><div style="z-index: 2; position: static;">
<div style="position:relative;"></div><img alt="Patch 1.12" height="169" SRC="new-hp/images/bg-patch112.jpg" style="display:block;" width="195"></div>
<span class="infoBox-visual underdev"></span><div class="underdev-wrapper"><div class="underdev-top"></div><div class="underdev-links"><ul class="none">
<li><a HREF="<? echo $lang['developmentlink']; ?>"><? echo $lang['developmentstory']; ?></a></ul></div><div class="underdev-bottom">&nbsp;</div></div></div></div></div>
<div class="marginal-infoBox-bottom">
</div></div><? } else { ?><br><? } ?>
<?if (empty($lang['chat'])) { $lang['chat'] = 'OFF'; }
 if ($lang['donationbox'] == 'ON') { ?>
<div id="quicklinks"><div scr="new-hp/images/plainBox-top.jpg"><h3><img border="0" src="new-hp/images/sh-plainBox-top2.jpg" width="213" height="25"></h3></div>
<div class="plainBox-cnt"><div class="plainBox-cnt-top"><div class="plainBox-cnt-bot">
<? if ($lang['Theme'] == 'Cristmas') { ?>
<img height="40" src="themes/cristmas/snowcover_small_round_01.png" style="position: absolute; top: -35px; left: -12px;" width="227"/><? } ?>
<!--<img src="/new-hp/images/quicklinks-testimage.jpg" width="195" height="66" alt="quicklinks-testimage" /> -->
<? include_once "../setup/paypal.php"; ?>

<? if (!$paypal['boxstory']) {
$paypal['boxstory']='<ul class="none"><table border="0" cellpadding="0" cellspacing="0" width="0"><tr><td><br>
Buy <font color="yellow">Gold</font>, <font color="purple">Epics</font>, <font color="blue">Blues</font> or make a <font color="red">Donation</font>. This way we can upgrade our server to host a bigger player base and help you getting your goal<br>
<br><center>Current Balance:<br><br>
<b>14 - 350 Euro</b><br><br>
<center><font color="darkblue"><b>HALL OF FAME</b></font></center><br>
<table border="0" width="100%" cellspacing="0"><tr>
<td align="middle"><b>Donation</b></td><!-- Col 1 -->
<td align="middle"><b>Amount</b></td></tr>
<tr>
<td align="middle">Detao</td>
<td align="middle">10 Euro</td></tr>
<tr><td align="middle">Aeon</td>
<td align="middle">4 Euro</td></tr>
</table><br>
<a href="contrib.php" TARGET="_self">Buy your items or make a donation</p>
</td></tr></table>
</ul>'; } ?>
<? echo $paypal['boxstory']; ?>

</div></div></div><div class="plainBox-bot"></div></div><? } ?>

<div id="gameinfo-newcomers-container"><div class="marginal-infoBox-top"><a HREF="" style="cursor: hand;">
<h3><span>Newcomers Section</span></h3></a><a HREF="info/index.php" style="cursor: hand;"><span class="infoBox-visual newbieguide"></span></a>
<span class="arrow-readmore"><a HREF="info/beginners/index.php"><span>open Newcommers Section</span></a></span></div><div class="marginal-infoBox"><div class="marginal-infoBox-cnt">
<div class="parchment"><div class="parchment-top">
<div class="parchment-bot">

<hr><div class="parchment-subHeader secondSubHeadline">
<h4 class="begin-journey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img border="0" src="new-hp/images/header-journey.gif" width="104" height="14"></h4>
</div><div class="gameinfo-entry thirdEntry">
<? $br = strtolower($_SERVER['HTTP_USER_AGENT']); // what browser they use.
if(ereg("msie", $br)) {
?><img alt="journey-human" class="left" SRC="new-hp/images/bg-journey-human.gif" style="position: absolute; top: 0px; right: 116px; _right: 116px;"><?
}else{ ?><img alt="journey-human" class="left" SRC="new-hp/images/bg-journey-human.gif" style="position: absolute; top: 0px; right: 96px; _right: 116px;"><? }  ?>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b><font style="font-family: Helvetica, Arial, sans-serif; font-size:12px;">Lost in Azeroth?</b>
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Find your way
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a HREF="info/basics/gettingstarted.php">in this Guide</a>!</p><div class="opera-break"></div>
<div class="gameinfo-entry"><br>Read everything you ever wanted to know about Azeroth.</div><script language="javascript">
//
if(is_mac) document.getElementById("elf-ear").style.top="-19px";
//
</script></div><div style="clear: both; height: 1px; font-size: 0;">&nbsp;</div></div></div></div><div style="background: url(new-hp/images/marginal-infoBox-cnt-bottompaper.jpg) no-repeat 0 0; height: 6px; font-size: 1px;"></div>
</div></div></td></tr><tr><td valign="top">&nbsp;</td><td valign="top">&nbsp;</td></tr></table></div></div></div><div style="clear: both; font-size: 1px;">&nbsp;

</div><center><? if (empty($AddCon['add2'])) { $AddCon['add2'] = 'OFF'; }
if ($AddCon['add2'] == 'ON') { ?>
        <br><div align="center"><? echo $AddCon['Add2body']; ?></div><? } ?>
<div id="copyright"><span class="textlinks"><small><? if($lang['mp3player'] == 'ON' ) { ?>
 <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/
flash/swflash.cab#version=7,0,0,0" width="160" height="15">
<param name="allowScriptAccess" value="sameDomain" />
<param name="movie" value="../setup/mp3player/xspf_player_slim.swf?playlist_url=../setup/mp3player/playlist.xspf&autoplay=true&autoload=true" />
<param name="quality" value="high" />
<param name="bgcolor" value="#000000" />
<embed src="../setup/mp3player/xspf_player_slim.swf?playlist_url=../setup/mp3player/playlist.xspf&autoplay=true&autoload=true" quality="high" bgcolor="#E6E6E6" name="xspf_player" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" align="center" width="160" height="15">
</embed></object> <? } ?><br><? echo decrypt($Dst, 1337); ?><br>online visitors: <?php include("../setup/counter/useronline.php4"); ?></small></span>
</div></center></div><map name="bot_blizzlogo_Map"><area HREF="" coords="8,8,86,54" alt="<? echo $lang['sitename']; ?>" shape="rect"></map></td></tr><tr><td><div id="main-bottom">
<div><div><div id="blizzlogo-bot"><img style="position: absolute; top: 14px; left: 45%;" alt="<? echo $lang['sitename']; ?>" usemap="#bot_blizzlogo_Map" border="0" height="57" width="97" SRC="new-hp/images/new/bot-blizzlogo.gif"></div>
</div></div></div></td></tr></table></div></div><div style="position: relative;"><img style="position: absolute; top: -445px; left: -243px;" alt="statue" SRC="new-hp/images/statue-left.jpg"></div>
</div></div></td><td valign="top"><p align="center">&nbsp;</td></tr></table></div></div></div></td><td align="right" valign="top">&nbsp;</td></tr></table></center><div id="ironFrame"></div>
<iframe name="menuIframe1" id="menuIframe1" frameborder="0" height="0" width="0" SRC="new-hp/menus/menu1.html"></iframe><iframe name="menuIframe2" id="menuIframe2" frameborder="0" height="0" width="0" SRC="new-hp/menus/menu2.html"></iframe>
<iframe name="menuIframe3" id="menuIframe3" frameborder="0" height="0" width="0" SRC="new-hp/menus/menu3.html"></iframe><iframe name="menuIframe4" id="menuIframe4" frameborder="0" height="0" width="0" SRC="new-hp/menus/menu4.html"></iframe>
<iframe name="menuIframe5" id="menuIframe5" frameborder="0" height="0" width="0" SRC="new-hp/menus/menu5.html"></iframe><iframe name="menuIframe6" id="menuIframe6" frameborder="0" height="0" width="0" SRC="new-hp/menus/menu6.html"></iframe>
<iframe name="menuIframe7" id="menuIframe7" frameborder="0" height="0" width="0" SRC="new-hp/menus/menu7.html"></iframe><iframe name="menuIframe8" id="menuIframe8" frameborder="0" height="0" width="0" SRC="new-hp/menus/menu8.html"></iframe>
<div id="pageEnd"></div></body><? if ($lang['voting']=='ON') { include_once("voting.php"); } ?><? include_once("stat/inc_stat.php");  ?></html><script language="JavaScript">
<!--
var SymRealOnLoad;
var SymRealOnUnload;
function SymOnUnload()
{ window.open = SymWinOpen;
if(SymRealOnUnload != null)
 SymRealOnUnload();
}function SymOnLoad()
{ if(SymRealOnLoad != null)
 SymRealOnLoad();
window.open = SymRealWinOpen;
SymRealOnUnload = window.onunload;
window.onunload = SymOnUnload;
}SymRealOnLoad = window.onload;
window.onload = SymOnLoad;
//-->
</script>