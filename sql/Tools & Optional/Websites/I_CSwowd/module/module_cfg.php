<?php
//==================================================================
// Здесь подключаются модули и выставляются их настройки
//==================================================================

//==================================================================
// Подгрузка ajax подсказок к вещам, спеллам, энчантам, талантам
//==================================================================
$ajax_modules['tip'] = "include/ajax_tooltip.php";

//==================================================================
// Live search - предварительный поиск
//==================================================================
$ajax_modules['ls'] = "module/livesearch/live_search.php";
$ajax_modules['os'] = "module/livesearch/live_search.php";
$config['ls_limit'] = 15; // Выводить резальтатов по умолчанию

//==================================================================
// Ajax подгрузка карт
//==================================================================
$ajax_modules['jsarea'] = "include/ajax_area_data.php";

//==================================================================
// Модуль подключаемый по умолчанию
//==================================================================
$modules['default'] = "module/online/online.php";

//==================================================================
// Поиск вещей, заклинаний, нип, го, квестов, игроков
//==================================================================
$modules['s'] = "module/search/search.php";
$config['redirect_time']             = 2;
$config['fade_limit']                = 30; // Выводить резальтатов по умолчанию
$config['show_item_in_search']       =  1; // Показывать мини изображения вещей в search_quest
//==================================================================
// Вывод информации о вещях, спеллах, нип, го, квестов, энчантах
//==================================================================
$modules['npc']     = "module/show/show_npc.php";
$modules['quest']   = "module/show/show_quest.php";
$modules['item']    = "module/show/show_item.php";
$modules['spell']   = "module/show/show_spell.php";
$modules['enchant'] = "module/show/show_enchant.php";
$modules['faction'] = "module/show/show_faction.php";
$modules['itemset'] = "module/show/show_set.php";
$modules['zone']    = "module/show/show_zone.php";
$modules['object']  = "module/show/show_go.php";

$config['show_go_details'] = 1;
$config['show_npc_detalis'] = 1;
$config['show_3d_model_npc'] = 1;
//==================================================================
// Модуль добавления Open Search в браузеры
//==================================================================
$modules['open_search'] = "module/livesearch/open_search.php";

//==================================================================
// Вывод скилов (профессии в том числе)
//==================================================================
$modules['skill'] = "module/skills/show_prof_spells.php";
$config['skill_fade_limit'] = 25;

//==================================================================
// Данные об инстансах
//==================================================================
$modules['instance'] = "module/instance/instance.php";

//==================================================================
// Информация о картах
//==================================================================
$modules['map']  = "module/maps/map.php";
$modules['area'] = "module/maps/map.php";
$modules['location'] = "module/maps/show_location.php";

//==================================================================
// Калькулятор талантов
//==================================================================
$modules['talent'] = "module/talent_calc/talent.php";
$config['talent_calc_max_level'] = 80;

//==================================================================
// Мини армури
//==================================================================
$modules['player'] = "module/armory/show_character.php";
$config['show_player_skill']  = 1;         // Вывод скилов при показе игрока (пока что тестовый режим)
$config['show_player_fields'] = 1;         // Вывод таблицы полей data при показе игрока
$config['show_player_3d'] = 1;             // Вывод 3D модели игрока

//==================================================================
// Вывод вещей на аукционе
//==================================================================
$modules['auction'] = "module/auction/auctionhouse.php";

//==================================================================
// Вывод владельцев вещей
//==================================================================
$modules['itemOwner'] = "module/owners/item_owner.php";

//==================================================================
// Вывод для проверки данных в таблицах
//==================================================================
//$modules['debug'] = "module/show/show_debug.php";

//==================================================================
// Вывод данных об гильдиях
//==================================================================
$modules['guild'] = "module/guilds/guilds.php";

//==================================================================
// Информация о арена тимах
//==================================================================
$modules['arenateam'] = "module/arenateam/teams.php";

//==================================================================
// Вывод онлайн
//==================================================================
$modules['online'] = "module/online/online.php";
$config['show_map_ptr']=1;                 // Ссылки в карту из местоположения
$config['online_limit']=40;                // Лимит вывода онлайн на странице

//==================================================================
// Вывод top богачей, по хонору, анена 2,3,5
//==================================================================
$modules['top'] = "module/top/top_100.php";
$config['top_money_limit']=100;            // Ограничение количества богачей
$config['top_honor_limit']=100;            // Ограничение количества по хонору
$config['top_arena_limit']=20;             // Ограничение количества арена тим

//==================================================================
// Вывод достижений
//==================================================================
$modules['achievement'] = "module/achievement/achievement.php";
$config['achievement_last']=5;             // Кол-во последних достижений в статистике

//==================================================================
// Немного справочной информации
//==================================================================
$modules['faq'] = "module/faq/show_faq.php";

//==================================================================
// Регистрация аккаунтов
//==================================================================
$modules['register'] = "module/registration/script.php";
$config['limit_account_from_one_ip'] = 0;  // Запретить регистрацию больше одного аккаунта с одного IP

//==================================================================
// Вход/выход пользователя, личный кабинет
//==================================================================
//$modules['user'] = "module/userpage/user.php";

//==================================================================
// Статистика по персонажам
//==================================================================
$modules['stat'] = "module/stat/stat.php";

//==================================================================
// Встроеный в конфиг модуль смены языка и скина
//==================================================================

//==================================================================
// Поступил запрос на смену языка
//==================================================================
if (isset($_REQUEST['lang']))
{
    $_SESSION['lang'] = @$_REQUEST['lang'];        // Запоминаем язык
    // Восстанавливаем старую страничку
    if (isset($_SESSION['last_page']))
        @header('Location: ?'.$_SESSION['last_page']);
}
//==================================================================
// Поступил запрос на смену скина
//==================================================================
else if (isset($_REQUEST['skin']))
{
    $_SESSION['skin'] = @$_REQUEST['skin'];
    // Восстанавливаем старую страничку
    if (isset($_SESSION['last_page']))
        @header('Location: ?'.$_SESSION['last_page']);
}

if (isset($_SESSION['lang']))
{
    switch($_SESSION['lang'])
    {
        case "ru":
        $config['lang'] = "ru";
        $config['locales_lang']=8;
        break;
        case "en":
        $config['lang'] = "en";
        $config['locales_lang']=0;
        break;
        default:
        unset($_SESSION['lang']);
        break;
    }
}

//==================================================================
// Выбор набора букв для определения языка ввода
//==================================================================
switch ($config['locales_lang'])
{
    // Для русского клиента
    case 8: $config['locales_charset'] = '/[(а-я)|(А-Я)]/'; break;
}

if (isset($_SESSION['skin']))
    $config['skin_type'] = $_SESSION['skin'];
?>
