<?php
set_time_limit(600);
error_reporting(0);
$NfName="&copy;2006-2007 krillins. All rights reserved.";
function encrypt($__content, $__key) {
   $__content = chunk_split(base64_encode($__content), 1, ",");
   $__content = explode(",", $__content);
   foreach($__content as $void => $__row) {
      $__cache_content = $__cache_content.md5($__row.rand(1, 5).$__key).",";
   }
   return $__cache_content;
}

function decrypt($__content, $__key) {
   $__content = explode(",", $__content);
   $__possible_chars = "1234567890=QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
   $__possible_chars = explode(",", chunk_split($__possible_chars, 1, ","));
   foreach($__content as $void => $__row) {
      foreach ($__possible_chars as $void2 => $__row_char) {
         for($i=1;$i!=6;$i++) {
            if (md5($__row_char.$i.$__key) == $__row) {
               $__cache_res = $__cache_res.$__row_char;
            }
         }
      }
   }
   return base64_decode($__cache_res);
}
?>