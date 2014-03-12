<?php

// page header, and any additional required libraries
require_once 'header.php';
require_once 'libs/char_lib.php';
require_once 'libs/map_zone_lib.php';
// minimum permission to view page
valid_login($action_permission['read']);

//########################################################################################################################
// SHOW CHARACTERS ACHIEVEMENTS
//########################################################################################################################
function char_friends(&$sqlr, &$sqlc)
{
	global	$output, $lang_global, $lang_char,
			$realm_id, $realm_db, $mmfpm_db, $characters_db,
			$action_permission, $user_lvl, $user_name;

//==========================$_GET and SECURE=================================

// id and multi realm security to prevent sql injection
require_once './include/char/include/char_multi_realm_security.php';

	$order_by = (isset($_GET['order_by'])) ? $sqlc->quote_smart($_GET['order_by']) : 'name';
	if (preg_match('/^[[:lower:]]{1,6}$/', $order_by));
	else
		$order_by = 'name';

	$dir = (isset($_GET['dir'])) ? $sqlc->quote_smart($_GET['dir']) : 1;
	if (preg_match('/^[01]{1}$/', $dir));
		else $dir = 1;

	$order_dir = ($dir) ? 'ASC' : 'DESC';
	$dir = ($dir) ? 0 : 1;

	if ($order_by === 'map')
		$order_by = 'map '.$order_dir.', zone';
	elseif ($order_by === 'zone')
		$order_by = 'zone '.$order_dir.', map';

//==========================$_GET and SECURE end========================

	// getting character data from database
	$result = $sqlc->query('
		SELECT account, name, race, class, gender, level
		FROM characters
		WHERE guid = '.$id.'
		LIMIT 1');

	// no point going further if character does not exist
	if ($sqlc->num_rows($result))
	{
		$char = $sqlc->fetch_assoc($result);

		// we get user permissions first
		$owner_acc_id = $sqlc->result($result, 0, 'account');
		$result = $sqlr->query('
			SELECT gmlevel, username 
			FROM account 
			WHERE id = '.$char['account'].'');

		$owner_gmlvl = $sqlr->result($result, 0, 'gmlevel');
		$owner_name = $sqlr->result($result, 0, 'username');

		// check user permission
		if (($user_lvl > $owner_gmlvl)||($owner_name === $user_name))
		{

// character sub header
$output .= '
<center>
<div id="tab_content">
	<h1>'.$lang_char['friends'].'</h1>
	<br />';
	
// character menu tab
require_once './include/char/include/char_header.php';
// character info
require_once './include/char/include/char_info.php';

//---------------Page Specific Data Starts Here--------------------------

$output .= '
<script type="text/javascript">
	// <![CDATA[
		function wrap()
		{
			if (getBrowserWidth() > 1024)
				document.write(\'</table></td><td><table class="lined" style="width: 1%;">\');
		}
		// ]]>
</script>
	<div id="tab_content2">
		<table class="lined" style="width: 1%;">';

$sqlm = new SQL;
$sqlm->connect($mmfpm_db['addr'], $mmfpm_db['user'], $mmfpm_db['pass'], $mmfpm_db['name']);

			$result = $sqlc->query('
				SELECT name, race, class, map, zone, level, gender, online, account, guid
				FROM characters 
				WHERE guid in 
					(SELECT friend 
					FROM character_social 
					WHERE guid = '.$id.' and flags <= 1) 
				ORDER BY '.$order_by.' '.$order_dir.'');

			if ($sqlc->num_rows($result))
			{
$output .= '
			<tr>
				<th colspan="7" align="left">'.$lang_char['friends'].'</th>
			</tr>
			<tr>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=name&amp;dir='.$dir.'"'.($order_by==='name' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['name'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=race&amp;dir='.$dir.'"'.($order_by==='race' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['race'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=class&amp;dir='.$dir.'"'.($order_by==='class' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['class'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=level&amp;dir='.$dir.'"'.($order_by==='level' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['level'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=map&amp;dir='.$dir.'"'.($order_by==='map '.$order_dir.', zone' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['map'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=zone&amp;dir='.$dir.'"'.($order_by==='zone '.$order_dir.', map' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['zone'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=online&amp;dir='.$dir.'"'.($order_by==='online' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['online'].'</a></th>
			</tr>';
				while ($data = $sqlc->fetch_assoc($result))
				{
					$char_gm_level=$sqlr->result($sqlr->query('
						SELECT gmlevel 
						FROM account 
						WHERE id = '.$data['account'].''), 0, 'gmlevel');

$output .= '
			<tr>
				<td>';
					if ($user_lvl >= $char_gm_level)
$output .= '
					<a href="char.php?id='.$data['guid'].'">'.$data['name'].'</a>';
					else
$output .=
					$data['name'];
$output .= '
				</td>
				<td><img src="img/c_icons/'.$data['race'].'-'.$data['gender'].'.gif" onmousemove="toolTip(\''.char_get_race_name($data['race']).'\', \'item_tooltip\')" onmouseout="toolTip()" alt="" /></td>
				<td><img src="img/c_icons/'.$data['class'].'.gif" onmousemove="toolTip(\''.char_get_class_name($data['class']).'\', \'item_tooltip\')" onmouseout="toolTip()" alt="" /></td>
				<td>'.char_get_level_color($data['level']).'</td>
				<td class="small"><span onmousemove="toolTip(\'MapID:'.$data['map'].'\', \'item_tooltip\')" onmouseout="toolTip()">'.get_map_name($data['map'], $sqlm).'</span></td>
				<td class="small"><span onmousemove="toolTip(\'ZoneID:'.$data['zone'].'\', \'item_tooltip\')" onmouseout="toolTip()">'.get_zone_name($data['zone'], $sqlm).'</span></td>
				<td>'.(($data['online']) ? '<img src="img/up.gif" alt="" />' : '-').'</td>
			</tr>';
				}
			}

			$result = $sqlc->query('
				SELECT name, race, class, map, zone, level, gender, online, account, guid
				FROM characters 
				WHERE guid in
					(SELECT guid
					FROM character_social
					WHERE friend = '.$id.' and flags <= 1)
				ORDER BY '.$order_by.' '.$order_dir.'');

			if ($sqlc->num_rows($result))
			{
$output .= '
			<tr>
				<th colspan="7" align="left">'.$lang_char['friendof'].'</th>
			</tr>
			<tr>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=name&amp;dir='.$dir.'"'.($order_by==='name' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['name'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=race&amp;dir='.$dir.'"'.($order_by==='race' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['race'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=class&amp;dir='.$dir.'"'.($order_by==='class' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['class'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=level&amp;dir='.$dir.'"'.($order_by==='level' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['level'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=map&amp;dir='.$dir.'"'.($order_by==='map '.$order_dir.', zone' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['map'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=zone&amp;dir='.$dir.'"'.($order_by==='zone '.$order_dir.', map' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['zone'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=online&amp;dir='.$dir.'"'.($order_by==='online' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['online'].'</a></th>
			</tr>';
				while ($data = $sqlc->fetch_assoc($result))
				{
					$char_gm_level=$sqlr->result($sqlr->query('
						SELECT gmlevel
						FROM account
						WHERE id = '.$data['account'].''), 0, 'gmlevel');

$output .= '
			<tr>
				<td>';
					if ($user_lvl >= $char_gm_level)
$output .= '
					<a href="char.php?id='.$data['guid'].'">'.$data['name'].'</a>';
					else
$output .=
					$data['name'];
$output .= '
				</td>
				<td><img src="img/c_icons/'.$data['race'].'-'.$data['gender'].'.gif" onmousemove="toolTip(\''.char_get_race_name($data['race']).'\', \'item_tooltip\')" onmouseout="toolTip()" alt="" /></td>
				<td><img src="img/c_icons/'.$data['class'].'.gif" onmousemove="toolTip(\''.char_get_class_name($data['class']).'\', \'item_tooltip\')" onmouseout="toolTip()" alt="" /></td>
				<td>'.char_get_level_color($data['level']).'</td>
				<td class="small"><span onmousemove="toolTip(\'MapID:'.$data['map'].'\', \'item_tooltip\')" onmouseout="toolTip()">'.get_map_name($data['map'], $sqlm).'</span></td>
				<td class="small"><span onmousemove="toolTip(\'ZoneID:'.$data['zone'].'\', \'item_tooltip\')" onmouseout="toolTip()">'.get_zone_name($data['zone'], $sqlm).'</span></td>
				<td>'.(($data['online']) ? '<img src="img/up.gif" alt="" />' : '-').'</td>
			</tr>';
				}
			}

$output .= '
<script type="text/javascript">
	// <![CDATA[
		wrap();
	// ]]>
</script>';

			$result = $sqlc->query('
				SELECT name, race, class, map, zone, level, gender, online, account, guid
				FROM characters
				WHERE guid in
					(SELECT friend
					FROM character_social
					WHERE guid = '.$id.' and flags > 1)
				ORDER BY '.$order_by.' '.$order_dir.'');

			if ($sqlc->num_rows($result))
			{
$output .= '
			<tr>
				<th colspan="7" align="left">'.$lang_char['ignored'].'</th>
			</tr>
			<tr>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=name&amp;dir='.$dir.'"'.($order_by==='name' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['name'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=race&amp;dir='.$dir.'"'.($order_by==='race' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['race'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=class&amp;dir='.$dir.'"'.($order_by==='class' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['class'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=level&amp;dir='.$dir.'"'.($order_by==='level' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['level'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=map&amp;dir='.$dir.'"'.($order_by==='map '.$order_dir.', zone' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['map'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=zone&amp;dir='.$dir.'"'.($order_by==='zone '.$order_dir.', map' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['zone'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=online&amp;dir='.$dir.'"'.($order_by==='online' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['online'].'</a></th>
			</tr>';
				while ($data = $sqlc->fetch_assoc($result))
				{
					$char_gm_level=$sqlr->result($sqlr->query('
						SELECT gmlevel
						FROM account
						WHERE id = '.$data['account'].''), 0, 'gmlevel');

$output .= '
			<tr>
				<td>';
					if ($user_lvl >= $char_gm_level)
$output .= '
					<a href="char.php?id='.$data['guid'].'">'.$data['name'].'</a>';
					else
$output .=
					$data['name'];
$output .= '
				</td>
				<td><img src="img/c_icons/'.$data['race'].'-'.$data['gender'].'.gif" onmousemove="toolTip(\''.char_get_race_name($data['race']).'\', \'item_tooltip\')" onmouseout="toolTip()" alt="" /></td>
				<td><img src="img/c_icons/'.$data['class'].'.gif" onmousemove="toolTip(\''.char_get_class_name($data['class']).'\', \'item_tooltip\')" onmouseout="toolTip()" alt="" /></td>
				<td>'.char_get_level_color($data['level']).'</td>
				<td class="small"><span onmousemove="toolTip(\'MapID:'.$data['map'].'\', \'item_tooltip\')" onmouseout="toolTip()">'.get_map_name($data['map'], $sqlm).'</span></td>
				<td class="small"><span onmousemove="toolTip(\'ZoneID:'.$data['zone'].'\', \'item_tooltip\')" onmouseout="toolTip()">'.get_zone_name($data['zone'], $sqlm).'</span></td>
				<td>'.(($data['online']) ? '<img src="img/up.gif" alt="" />' : '-').'</td>
			</tr>';
				}
			}

			$result = $sqlc->query('
				SELECT name, race, class, map, zone, level, gender, online, account, guid
				FROM characters
				WHERE guid in
					(SELECT guid
					FROM character_social
					WHERE friend = '.$id.' and flags > 1)
				ORDER BY '.$order_by.' '.$order_dir.'');

			if ($sqlc->num_rows($result))
			{
$output .= '
			<tr>
				<th colspan="7" align="left">'.$lang_char['ignoredby'].'</th>
			</tr>
			<tr>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=name&amp;dir='.$dir.'"'.($order_by==='name' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['name'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=race&amp;dir='.$dir.'"'.($order_by==='race' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['race'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=class&amp;dir='.$dir.'"'.($order_by==='class' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['class'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=level&amp;dir='.$dir.'"'.($order_by==='level' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['level'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=map&amp;dir='.$dir.'"'.($order_by==='map '.$order_dir.', zone' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['map'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=zone&amp;dir='.$dir.'"'.($order_by==='zone '.$order_dir.', map' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['zone'].'</a></th>
				<th width="1%"><a href="char_friends.php?id='.$id.'&amp;realm='.$realmid.'&amp;order_by=online&amp;dir='.$dir.'"'.($order_by==='online' ? ' class="'.$order_dir.'"' : '').'>'.$lang_char['online'].'</a></th>
			</tr>';
				while ($data = $sqlc->fetch_assoc($result))
				{
					$char_gm_level=$sqlr->result($sqlr->query('
						SELECT gmlevel
						FROM account
						WHERE id = '.$data['account'].''), 0, 'gmlevel');

$output .= '
			<tr>
				<td>';
					if ($user_lvl >= $char_gm_level)
$output .= '
					<a href="char.php?id='.$data['guid'].'">'.$data['name'].'</a>';
					else
$output .=
					$data['name'];
$output .= '
				</td>
				<td><img src="img/c_icons/'.$data['race'].'-'.$data['gender'].'.gif" onmousemove="toolTip(\''.char_get_race_name($data['race']).'\', \'item_tooltip\')" onmouseout="toolTip()" alt="" /></td>
				<td><img src="img/c_icons/'.$data['class'].'.gif" onmousemove="toolTip(\''.char_get_class_name($data['class']).'\', \'item_tooltip\')" onmouseout="toolTip()" alt="" /></td>
				<td>'.char_get_level_color($data['level']).'</td>
				<td class="small"><span onmousemove="toolTip(\'MapID:'.$data['map'].'\', \'item_tooltip\')" onmouseout="toolTip()">'.get_map_name($data['map'], $sqlm).'</span></td>
				<td class="small"><span onmousemove="toolTip(\'ZoneID:'.$data['zone'].'\', \'item_tooltip\')" onmouseout="toolTip()">'.get_zone_name($data['zone'], $sqlm).'</span></td>
				<td>'.(($data['online']) ? '<img src="img/up.gif" alt="" />' : '-').'</td>
			</tr>';
				}
			}
$output .= '
		</table>
	</div>
</div>
<br />';
	
//---------------Page Specific Data Ends here----------------------------

// character sub footer
require_once './include/char/include/char_ footer.php';

$output .= '
<br />
</center>';

		}
		else
			error($lang_char['no_permission']);
	}
	else
		error($lang_char['no_char_found']);
}
unset($char);


//########################################################################################################################
// MAIN
//########################################################################################################################

// action variable reserved for future use
//$action = (isset($_GET['action'])) ? $_GET['action'] : NULL;

// load language
$lang_char = lang_char();

$output .= '
<div class="top">
	<h1>'.$lang_char['character'].'</h1>
</div>';

// we getting links to realm database and character database left behind by header
// header does not need them anymore, might as well reuse the link
char_friends($sqlr, $sqlc);

//unset($action);
unset($action_permission);
unset($lang_char);

require_once 'footer.php';


?>
