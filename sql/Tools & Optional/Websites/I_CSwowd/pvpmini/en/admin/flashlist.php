         <html>

<head>
  <title></title>
</head>

<body>



<? function readDirectory($drPath, $extension){
    if(is_dir($drPath)){
        $workDirectory=opendir($drPath);
        $drContents = array();
        while($entryName = readdir($workDirectory)){
            if(is_file($drPath.$entryName)){
                if(eregi($extension, $entryName)){
                    $drContents[]=$entryName;
                }//End if
            }//End if
        }//End while loop

        return $drContents;
    }//end if
}//End function
$swflist = readDirectory("../new-hp/flashheader/", "\.swf$");

$i = 0;
$total = sizeof($swflist);

while ($i < $total) { ?>
                                <center>
                                <object width="540" height="320">
                                <param name="intro" value="<? echo $swflist[$i]; ?>">
                                <embed src="../new-hp/flash/<? echo $swflist[$i]; ?>" width="540" height="320"></embed>
                                </object><br><? echo $swflist[$i]; ?><br><br><br>


        <? $i++;
        }  ?>

</body>

</html>