<div class=faq>
<?php
 $site = 'http://'.$_SERVER['SERVER_NAME'].str_ireplace('index.php', '', $_SERVER['SCRIPT_NAME']);
 $file  = "cache/wowd.xml";
 // Create if need open search script for client
 if (time() - @filemtime($file) > 24*60*60) // Check for update requirest
 {
  $open=@fopen($file, "w");
  flock($open, LOCK_EX);
  rewind($open);
  fwrite($open,
  '<?xml version="1.0" encoding="UTF-8" ?>
   <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
   <ShortName>C.S. Wowd</ShortName>
   <Description>Search by use C.S. Wowd</Description>
   <Url type="text/html" method="GET" template="'.$site.'index.php?s=all&amp;name={searchTerms}" />
   <Url type="application/x-suggestions+json" method="GET" template="'.$site.'ajax.php?os=all&amp;name={searchTerms}" />
   <Image width="16" height="16">data:image/x-icon;base64,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</Image>
   <OutputEncoding>UTF-8</OutputEncoding>
   <InputEncoding>UTF-8</InputEncoding>
   </OpenSearchDescription>');
   fclose($open);
 }
 // Allow add open search in browser add search
 echo '<link rel="search" type="application/opensearchdescription+xml" href="'.$file.'" title="Wowd">';
 // Allow simly click on link to add plugin
 echo
 '<script type="text/javascript">
 function addPlugin()
 {
	try
	{
		window.external.AddSearchProvider(\''.$site.$file.'\');
	}
	catch(e)
	{
		alert(\'This feature requires either Firefox 2 or Internet Explorer 7.\');
	}
 }
 </script>';
 $langfile = 'module/livesearch/text_'.$config['lang'].'.php';
 if (file_exists($langfile)) include($langfile);
 else include('module/livesearch/text_en.php');
?>
</div>