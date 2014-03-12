<?php

// page header, and any additional required libraries
require_once 'header.php';
require_once 'libs/char_lib.php';
require_once 'libs/map_zone_lib.php';
// minimum permission to view page
valid_login($action_permission['read']);

//########################################################################################################################
//  BROWSE CHARS
//########################################################################################################################
function browse_chars(&$sqlr, &$sqlc)
{
	global	$output, $lang_char_list, $lang_global,
			$mmfpm_db,
			$realm_id,
			$action_permission, $user_lvl, $user_name,
			$showcountryflag, $itemperpage;

$sqlm = new SQL;
$sqlm->connect($mmfpm_db['addr'], $mmfpm_db['user'], $mmfpm_db['pass'], $mmfpm_db['name']);

//==========================$_GET and SECURE========================
	$start = (isset($_GET['start'])) ? $sqlr->quote_smart($_GET['start']) : 0;
	if (is_numeric($start));
	else
		$start=0;

	$order_by = (isset($_GET['order_by'])) ? $sqlr->quote_smart($_GET['order_by']) : 'guid';
	if (preg_match('/^[_[:lower:]]{1,12}$/', $order_by));
	else
		$order_by = 'guid';

	$dir = (isset($_GET['dir'])) ? $sqlr->quote_smart($_GET['dir']) : 1;
	if (preg_match('/^[01]{1}$/', $dir));
	else
		$dir=1;

	$order_dir = ($dir) ? 'ASC' : 'DESC';
	$dir = ($dir) ? 0 : 1;

	if ($order_by == 'map')
		$order_by = 'map '.$order_dir.', zone';
	elseif ($order_by == 'zone')
		$order_by = 'zone '.$order_dir.', map';
//==========================$_GET and SECURE end========================

	$search_by = '';
	$search_value = '';

	// if we have a search request, if not we just return everything
	if(isset($_GET['search_value']) && isset($_GET['search_by']))
	{
		// injection prevention
		$search_value = $sqlr->quote_smart($_GET['search_value']);
		$search_by = (isset($_GET['search_by'])) ? $sqlr->quote_smart($_GET['search_by']) : 'name';
		$search_menu = array('name', 'guid', 'account', 'level', 'greater_level', 'lesser_level', 'guild', 'race', 'class', 'map', 'online', 'gold', 'item');
		if (in_array($search_by, $search_menu));
		else $search_by = 'name';
unset($search_menu);

		// special search cases
		// developer note: 'if else' is always faster then 'switch case'
		if ($search_by === 'account')
		{
			//need to get the acc id from other table since input comes as name
			if (preg_match('/^[\t\v\b\f\a\n\r\\\"\'\? <>[](){}_=+-|!@#$%^&*~`.,0123456789\0]{1,30}$/', $search_value))
				redirect("charlist.php?error=2");

			$result = $sqlr->query('
				SELECT id
				FROM account
				WHERE username LIKE "%'.$search_value.'%"
				LIMIT '.$start.', '.$itemperpage.'');

			$where_out = ' account IN (0 ';
			while ($char = $sqlr->fetch_assoc($result))
			{
				$where_out .= ' ,';
				$where_out .= $char['id'];
			};
			$where_out .= ') ';
unset($result);
			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}
		elseif ($search_by === 'level')
		{
			if (is_numeric($search_value));
			else $search_value = 1;

			$where_out ='level = '.$search_value.'';

			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}
		elseif ($search_by === 'greater_level')
		{
			if (is_numeric($search_value));
			else $search_value = 1;

			$where_out ='level > '.$search_value.'';

			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}
		elseif ($search_by === 'lesser_level')
		{
			if (is_numeric($search_value));
			else $search_value = 1;

			$where_out ='level < '.$search_value.'';

			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}
		elseif ($search_by === 'guid')
		{
			if (is_numeric($search_value));
			else $search_value = 1;

			$where_out ='c.guid = '.$search_value.'';

			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}
		elseif ($search_by === 'race')
		{
			if (is_numeric($search_value));
			else $search_value = 1;

			$where_out ='c.race = '.$search_value.'';

			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}
		elseif ($search_by === 'class')
		{
			if (is_numeric($search_value));
			else $search_value = 1;

			$where_out ='c.class = '.$search_value.'';

			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}
		elseif ($search_by === 'gold')
		{
			if (is_numeric($search_value));
			else $search_value = 1;

			$where_out ='money > '.$search_value.'';

			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}
		elseif ($search_by === 'guild')
		{
			if (preg_match('/^[\t\v\b\f\a\n\r\\\"\'\? <>[](){}_=+-|!@#$%^&*~`.,0123456789\0]{1,30}$/', $search_value))
				redirect("charlist.php?error=2");

			$result = $sqlc->query('
				SELECT guildid
				FROM guild
				WHERE name LIKE "%'.$search_value.'%"');

			$guildid = $sqlc->result($result, 0, 'guildid');

			if (!$search_value)
				$guildid = 0;
				$Q1 = '
					SELECT guid
					FROM guild_member
					WHERE guildid = ';

				$Q1 .= $guildid;

				$result = $sqlc->query($Q1);
unset($guildid);
unset($Q1);
				$where_out = 'guid IN (0 ';
				while ($char = $sqlc->fetch_row($result))
				{
					$where_out .= ' ,';
					$where_out .= $char['guid'];
				};
				$where_out .= ') ';
unset($result);

			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}
		elseif ($search_by === 'item')
		{
			if (is_numeric($search_value));
			else $search_value = 0;

			$result = $sqlc->query('
				SELECT guid
				FROM character_inventory
				WHERE item_template = '.$search_value.'');

			$where_out = 'guid IN (0 ';
			while ($char = $sqlc->fetch_assoc($result))
			{
				$where_out .= ' ,';
				$where_out .= $char['guid'];
			};
			$where_out .= ') ';
unset($result);

			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}
		else
		{
			if (preg_match('/^[\t\v\b\f\a\n\r\\\"\'\? <>[](){}_=+-|!@#$%^&*~`.,0123456789\0]{1,30}$/', $search_value))
				redirect("charlist.php?error=2");

			$where_out =''.$search_by.' LIKE "%'.$search_value.'%"';

			$sql_query = '
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				WHERE '.$where_out.'
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'';
		}

		$query_1 = $sqlc->query('
			SELECT count(*) 
			FROM characters c
			WHERE '.$where_out.'');
		$query = $sqlc->query($sql_query);
	}
	else
	{
		$query_1 = $sqlc->query('
			SELECT count(*)
			FROM characters');

		$query = $sqlc->query('
				SELECT c.guid as guid, c.name as name, c.account as account, c.race as race, c.class as class, c.zone as zone, c.map as map, c.online as online, c.level as level, c.gender as gender, c.logout_time as logout_time,
					COALESCE(guild_member.guildid,0) as gname
				FROM characters c 
					LEFT JOIN guild_member ON guild_member.guid = c.guid 
				ORDER BY '.$order_by.' '.$order_dir.'
				LIMIT '.$start.', '.$itemperpage.'');
	}

  $all_record = $sqlc->result($query_1,0);
  unset($query_1);

  $this_page = $sqlc->num_rows($query) or die(error($lang_global['err_no_result']));

//==========================top tage navigaion starts here========================

$output .= '
<script type="text/javascript" src="libs/js/check.js"></script>
<center>
<table class="top_hidden">
	<tr>
		<td>';
	if($user_lvl >= $action_permission['delete'])
	{
			makebutton($lang_char_list['cleanup'], 'cleanup.php" type="wrn', 130);
	}
			makebutton($lang_global['back'], 'javascript:window.history.back()', 130);
				($search_by && $search_value) ? makebutton($lang_char_list['characters'], 'characters.php" type="def', 130) : $output .= '';
$output .= '
		</td>
	</tr>
	<tr>
		<td>
			<table class="lined">
				<tr>
					<td "class="hidden" align="left" width="40%">
						<form action="characters.php" method="get" name="form">
							<input type="hidden" name="error" value="3"  />
							<input type="text" size="24" maxlength="50" name="search_value" value="'.$search_value.'" />
							<select name="search_by">
								<option value="name"'.($search_by == 'name' ? ' selected="selected"' : '').'>'.$lang_char_list['by_name'].'</option>
								<option value="guid"'.($search_by == 'guid' ? ' selected="selected"' : '').'>'.$lang_char_list['by_id'].'</option>
								<option value="account"'.($search_by == 'account' ? ' selected="selected"' : '').'>'.$lang_char_list['by_account'].'</option>
								<option value="level"'.($search_by == 'level' ? ' selected="selected"' : '').'>'.$lang_char_list['by_level'].'</option>
								<option value="greater_level"'.($search_by == 'greater_level' ? ' selected="selected"' : '').'>'.$lang_char_list['greater_level'].'</option>
								<option value="lesser_level"'.($search_by == 'lesser_level' ? ' selected="selected"' : '').'>'.$lang_char_list['lesser_level'].'</option>
								<option value="guild"'.($search_by == 'guild' ? ' selected="selected"' : '').'>'.$lang_char_list['by_guild'].'</option>
								<option value="race"'.($search_by == 'race' ? ' selected="selected"' : '').'>'.$lang_char_list['by_race_id'].'</option>
								<option value="class"'.($search_by == 'class' ? ' selected="selected"' : '').'>'.$lang_char_list['by_class_id'].'</option>
								<option value="map"'.($search_by == 'map' ? ' selected="selected"' : '').'>'.$lang_char_list['by_map_id'].'</option>
								<option value="online"'.($search_by == 'online' ? ' selected="selected"' : '').'>'.$lang_char_list['by_online'].'</option>
								<option value="gold"'.($search_by == 'gold' ? ' selected="selected"' : '').'>'.$lang_char_list['chars_gold'].'</option>
								<option value="item"'.($search_by == 'item' ? ' selected="selected"' : '').'>'.$lang_char_list['by_item'].'</option>
							</select>
						</form>
					</td>
					<td align="left">';
						makebutton($lang_global['search'], 'javascript:do_submit()',80);
$output .= '
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>';

//==========================top tage navigaion ENDS here ========================

$output .= '
<form method="get" action="characters.php" name="form1">
	<input type="hidden" name="action" value="del_char_form" />
	<input type="hidden" name="start" value="$start" />
	<table class="lined">
		<tr>
			<td "class="hidden" align="left" width="25%">';
$output .= '
				'.$lang_char_list['tot_chars'].' : '.$all_record.'
			</td>
			<td "class="hidden" align="right" width="25%">';
$output .=
				generate_pagination('characters.php?order_by='.$order_by.'&amp;dir='.(($dir) ? 0 : 1).( $search_value && $search_by ? '&amp;search_by='.$search_by.'&amp;search_value='.$search_value.'' : '' ), $all_record, $itemperpage, $start);
$output .= '
			</td>
		</tr>
	</table>';
$output .= "
	<table class=\"lined\">
		<tr>
			<th width=\"1%\"><input name=\"allbox\" type=\"checkbox\" value=\"Check All\" onclick=\"CheckAll(document.form1);\" /></th>
			<th width=\"1%\"><a href=\"characters.php?order_by=guid&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='guid' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['id']}</a></th>
			<th width=\"1%\"><a href=\"characters.php?order_by=name&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='name' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['char_name']}</a></th>
			<th width=\"1%\"><a href=\"characters.php?order_by=account&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='account' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['account']}</a></th>
			<th width=\"1%\"><a href=\"characters.php?order_by=race&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='race' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['race']}</a></th>
			<th width=\"1%\"><a href=\"characters.php?order_by=class&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='class' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['class']}</a></th>
			<th width=\"1%\"><a href=\"characters.php?order_by=level&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='level' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['level']}</a></th>
			<th width=\"10%\"><a href=\"characters.php?order_by=map&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='map '.$order_dir.', zone' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['map']}</a></th>
			<th width=\"10%\"><a href=\"characters.php?order_by=zone&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='zone '.$order_dir.', map' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['zone']}</a></th>
			<th width=\"10%\"><a href=\"characters.php?order_by=gname&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='gname' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['guild']}</a></th>
			<th width=\"1%\"><a href=\"characters.php?order_by=logout_time&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='logout_time' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['lastseen']}</a></th>
			<th width=\"1%\"><a href=\"characters.php?order_by=online&amp;start=$start".( $search_value && $search_by ? "&amp;search_by=$search_by&amp;search_value=$search_value" : "" )."&amp;dir=$dir\">".($order_by=='online' ? "<img src=\"img/arr_".($dir ? "up" : "dw").".gif\" alt=\"\" /> " : "")."{$lang_char_list['online']}</a></th>";

	if ($showcountryflag)
	{
require_once 'libs/misc_lib.php';
$output .= '
			<th width="1%">'.$lang_global['country'].'</th>';
	}

$output .='
		</tr>';

		$looping = ($this_page < $itemperpage) ? $this_page : $itemperpage;

	for ($i=1; $i<=$looping; $i++)
	{
		$char = $sqlr->fetch_assoc($query) or die(error($lang_global['err_no_user']));
		// to disalow lower lvl gm to  view accounts of other gms
		$result = $sqlr->query('
			SELECT gmlevel, username
			FROM account
			WHERE id = '.$char['account'].'');

		$owner_gmlvl = $sqlr->result($result, 0, 'gmlevel');
		if ($owner_gmlvl == null)
			$owner_gmlvl = 0;
			$owner_acc_name = $sqlr->result($result, 0, 'username');
			$lastseen = date('Y-m-d G:i:s', $char['logout_time']);

			$guild_name = $sqlc->fetch_assoc($sqlc->query('
				SELECT name
				FROM guild
				WHERE guildid = '.$char['gname'].''));

		if (($user_lvl >= $owner_gmlvl)||($owner_acc_name == $user_name))
		{
$output .= '
		<tr>
			<td>';
			if (($user_lvl >= $action_permission['delete'])||($owner_acc_name == $user_name))
$output .= '
				<input type="checkbox" name="check[]" value="'.$char['guid'].'" onclick="CheckCheckAll(document.form1);" />';
$output .= '
			</td>
			<td>'.$char['guid'].'</td>
			<td><a href="char.php?id='.$char['guid'].'">'.htmlentities($char['name']).'</a></td>
			<td><a href="accounts.php?action=edit_user&amp;error=11&amp;id='.$char['account'].'">'.htmlentities($owner_acc_name).'</a></td>
			<td><img src="img/c_icons/'.$char['race'].'-'.$char['gender'].'.gif" onmousemove="toolTip(\''.char_get_race_name($char['race']).'\', \'item_tooltip\')" onmouseout="toolTip()" alt="" /></td>
			<td><img src="img/c_icons/'.$char['class'].'.gif" onmousemove="toolTip(\''.char_get_class_name($char['class']).'\',\'item_tooltip\')" onmouseout="toolTip()" alt="" /></td>
			<td>'.char_get_level_color($char['level']).'</td>
			<td class="small"><span onmousemove="toolTip(\'MapID:'.$char['map'].'\', \'item_tooltip\')" onmouseout="toolTip()">'.get_map_name($char['map'], $sqlm).'</span></td>
			<td class="small"><span onmousemove="toolTip(\'ZoneID:'.$char['zone'].'\',\'item_tooltip\')" onmouseout="toolTip()">'.get_zone_name($char['zone'], $sqlm).'</span></td>
			<td class="small"><a href="guild.php?action=view_guild&amp;error=3&amp;id='.$char['gname'].'">'.htmlentities($guild_name['name']).'</a></td>
			<td class="small">'.$lastseen.'</td>
			<td>'.(($char['online']) ? "<img src=\"img/up.gif\" alt=\"\" />" : "-").'</td>';
			if ($showcountryflag)
			{
				$country = misc_get_country_by_account($char['account'], $sqlr, $sqlm);
$output .= "
			<td>".(($country['code']) ? "<img src='img/flags/".$country['code'].".png' onmousemove='toolTip(\"".($country['country'])."\",\"item_tooltip\")' onmouseout='toolTip()' alt=\"\" />" : "-")."</td>";
			}
$output .= '
		</tr>';
		}
		else
		{
$output .= '
		<tr>
			<td>*</td><td>***</td><td>***</td><td>You</td><td>Have</td><td>No</td><td class=\"small\">Permission</td><td>to</td><td>View</td><td>this</td><td>Data</td><td>***</td><td>*</td>';
			if ($showcountryflag)
$output .= '
			<td>*</td>';
$output .= '
		</tr>';
		}
	}
unset($char);
unset($result);

$output .= '
	</table>
	<table class="lined">
		<tr>
			<th>
			</th>
		</tr>
	</table>
	<table class="lined">
		<tr>
			<td "class="hidden" align="left" width="25%">';
$output .= '
				'.$lang_char_list['tot_chars'].' : '.$all_record.'
			</td>
			<td "class="hidden" align="right" width="25%">';
$output .=
				generate_pagination('characters.php?order_by='.$order_by.'&amp;dir='.(($dir) ? 0 : 1).( $search_value && $search_by ? '&amp;search_by='.$search_by.'&amp;search_value='.$search_value.'' : '' ), $all_record, $itemperpage, $start);
$output .= '
			</td>
		</tr>
	</table>
	<table class="top_hidden">
		<tr>
			<td>';
	if (($user_lvl >= $action_permission['delete']) || ($owner_acc_name == $user_name))
				makebutton($lang_char_list['del_selected_chars'], 'javascript:do_submit(\'form1\',0)" type="wrn', 220);
$output .= '
			</td>
		</tr>
	</table>
</form>
</center>';

}


//########################################################################################################################
//  DELETE CHAR
//########################################################################################################################
function del_char_form(&$sqlc)
{
	global	$output, $lang_char_list, $lang_global,
			$realm_id,
			$action_permission;

	valid_login($action_permission['delete']);

	if(isset($_GET['check']))
		$check = $_GET['check'];
	else
		redirect('characters.php?error=1');

$output .= '
<center>
<table class="lined">
	<tr>
		<td>
			<img src="img/warn_red.gif" width="48" height="48" alt="" />
			<h1>
				<font class="error">
					'.$lang_global['are_you_sure'].'
				</font>
			</h1>
			<br />
			<font class="bold">
	'.$lang_char_list['char_ids'].': ';

	$pass_array = '';
	$n_check = count($check);
	for ($i=0; $i<$n_check; ++$i)
	{
		$name = $sqlc->result($sqlc->query('
			SELECT name
			FROM characters
			WHERE guid = '.$check[$i].''), 0);

$output .= '
				<a href="char.php?id='.$check[$i].'" target="_blank">'.$name.', </a>';
		$pass_array .= '&amp;check%5B%5D='.$check[$i].'';
	}
unset($name);
unset($n_check);
unset($check);

$output .= '
				<br />'.$lang_global['will_be_erased'].'
			</font>
			<br /><br />
		</td>
	</tr>
</table>
<br /><br />
<table width="300" class="hidden" align="center">
				<tr>
					<td>';
						makebutton($lang_global['yes'], 'characters.php?action=dodel_char'.$pass_array.'" type="wrn', 130);
						makebutton($lang_global['no'], 'characters.php" type="def', 130);
unset($pass_array);
$output .= '
					</td>
				</tr>
			</table>
</center>';
}


//########################################################################################################################
//  DO DELETE CHARS
//########################################################################################################################
function dodel_char(&$sqlc)
{
	global	$output, $lang_global, $lang_char_list,
			$realm_id,
			$action_permission,
			$tab_del_user_characters;

	valid_login($action_permission['delete']);

	if(isset($_GET['check']))
		$check = $sqlc->quote_smart($_GET['check']);
	else
		redirect('characters.php?error=1');

	$deleted_chars = 0;

require_once 'libs/del_lib.php';

	$n_check = count($check);
	for ($i=0; $i<$n_check; ++$i)
	{
		if ($check[$i] == '');
		else
			if (del_char($check[$i], $realm_id))
				$deleted_chars++;
	}
unset($n_check);
unset($check);

$output .= '
<center>
<table class="lined">
	<tr>
		<td>';
	if ($deleted_chars)
$output .= '
			<h1>
				<font class="error">
					'.$lang_char_list['total'].' <font color=blue>'.$deleted_chars.'</font> '.$lang_char_list['chars_deleted'].'
				</font>
			</h1>';
	else
$output .= '
			<h1>
				<font class="error">
					'.$lang_char_list['no_chars_del'].'
				</font>
			</h1>';
unset($deleted_chars);
$output .= '
			<br /><br />
		</td>
	</tr>
</table>';
$output .= '
<table width="300" class="hidden" align="center">
	<tr>
		<td>';
			makebutton($lang_char_list['back_browse_chars'], 'characters.php', 220);
$output .= '
		</td>
	</tr>
</table>
<br />
</center>';
}


//########################################################################################################################
// MAIN
//########################################################################################################################

// load language
$lang_char_list = lang_char_list();

// $_GET and SECURE
$err = (isset($_GET['error'])) ? $_GET['error'] : NULL;

$output .= '
<div class="top">';

// defines the title header in error cases
if(1 ==  $err)
$output .= '
	<h1><font class="error\">'.$lang_global['empty_fields'].'</font></h1>';
else if(2 == $err)
$output .= '
	<h1><font class="error\">'.$lang_global['err_no_search_passed'].'</font></h1>';
else if(3 == $err)
$output .= '
	<h1><font class="error\">'.$lang_char_list['search_results'].'</font></h1>';
else
$output .= '
	<h1>'.$lang_char_list['browse_chars'].'</h1>';

$output .= '
</div>';

// $_GET and SECURE
$action = (isset($_GET['action'])) ? $_GET['action'] : NULL;

// define functions to be called by actions
if ('del_char_form' == $action)
	del_char_form($sqlc);
else if('dodel_char' == $action)
	dodel_char($sqlc);
else
	browse_chars($sqlr, $sqlc);

// close whats not needed anymore
unset($err);
unset($action);
unset($action_permission);
unset($lang_char_list);

// page footer
require_once 'footer.php';

?>
