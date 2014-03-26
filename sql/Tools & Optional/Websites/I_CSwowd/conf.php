<?php
//==================================================================
// C.S Wowd config file
//==================================================================
$config =array (
'servername'=>'I_MaNGOS WoWDCS Armory',

// World Database
'hostname' => '127.0.0.1',    // mysql hostname
'username' => 'root',         // mysql username
'password' => 'ascent',             // mysql password
'dbName' => 'mangos',         // mysql data base name (mangos db)

// WowD Database
'whostname' => '127.0.0.1',   // mysql hostname
'wusername' => 'root',        // mysql username
'wpassword' => 'ascent',            // mysql password
'wdbName' => 'cswowd',          // mysql wowd base name

// Realm Database
'rhostname' => '127.0.0.1',   // mysql hostname
'rusername' => 'root',        // mysql username
'rpassword' => 'ascent',            // mysql password
'rdbName' =>'realmd',         // mysql data base name (realm db)

// Character database
'chostname' => '127.0.0.1',   // mysql hostname
'cusername' => 'root',        // mysql username
'cpassword' => 'ascent',            // mysql password
'cdbName' =>'characters',     // mysql data base name (characters db)

//Other
'lang'=>'en',                 // ???? ?????????? ????? ru,en
'client_charset'=> 'utf8',    // ????????? ??????? (?? ?????????? ?????? - ??? ??? ?????? ????????? ????? utf8)
'use_tab_mode'=>'1',          // Tabbed report mode

// ?????????????? ????? ??????????? ?? ?????? locales_...
'locales_lang'=>'0',          // ???????? ?????? ???? ???? ?????????? ??????? locales_xxx
'locales_charset'=>'',        // ??????? ???????????? ? ????????????? ??????? (??? ??????????? ????? ????? ? ??????)

// WWW ?????? ????? ???? ?????? ???????????? ???????
'www_creature'=>'http://wowhead.com/?npc=%d',		// ???, ??? %d - ????? ???
'www_gameobject'=>'http://wowhead.com/?object=%d',	// ???????, ??? %d - ????? ???????
'www_item'=>'http://wowhead.com/?item=%d',			// ????, ??? %d - ????? ????
'www_spell'=>'http://wowhead.com/?spell=%d',			// ?????, ??? %d - ????? ??????
'www_quest'=>'http://wowhead.com/?quest=%d',			// ??????, ??? %d - ????? ??????

// Set Skin of web page
'skin_type'=>'wrath',        // default, modern, lofk_skin, dark, wdb, wrath

// Show Debug
'show_sql_timings'=>'0',      // ???????? ?????????? ???????????
'show_ajax_sql_timings'=>'0', // ???????? ?????????? ???????????
'show_db_error'=>'1',         // ???????? ?????? ??? ??????
);

//error_reporting(E_ERROR | E_PARSE | E_WARNING);
error_reporting(E_ALL);
ini_set('display_errors', 1); //disable on production servers!

//==================================================================
// ???????????? ??????
//==================================================================
$modules=array();
$ajax_modules=array();

//==================================================================
// ?????????? ????????? ? module/module_cfg.php
//==================================================================
include("module/module_cfg.php");
?>