<html>
<head>
<title>Wallpaper and Mp3 setup</title>
<style type="text/css">
    .rssxpresschannel {   width:240px;}
    .rssxpresstable { }
    .rssxpresschtitle { display:none}
    .rssxpresschdesc { display:none}
    .rssxpressittitle { }
    .rssxpressitdesc { background-color : EFEFEF}
    .rssxpressdivider {background-color : ;}
</style>
</head>
<body bgcolor="white">
<table width="800" align="center">
<tr>
<th valign=top> Mp3 and Wallpapers howto </th>
</tr>
<tr>
<td>
<b><br>Adding MP3</b><br>
There are three locations where the Mp3's are located.
<br>
<p>For the mainpage: setup/mp3player/</p>
<p>For the screenshots and wallpapers: en/downloads/music/</p>
<p>For the mp3player: en/music/</p><br>
<p>To add some music just upload your Mp3 file to the target directory</p>
<p>and edit the playlist.xspf in the specified directory</p>
<p>The playlist will contain something like this:</p><br>
<samp>
<pre style="background:#eee;border:thin solid #ddd;display:block;overflow:auto;">
&lt;playlist version="1" xmlns="http://xspf.org/ns/0/">
&lt;title>WoW player&lt;/title>
&lt;trackList>
&lt;track>                                      &lt;-- Start new track
&lt;location>wow_legends.mp3&lt;/location>      &lt;-- Track location and name
&lt;image>fanart_6-28-06.jpg&lt;/image>         &lt;-- image to show (not ness)
&lt;annotation>WoW Legends&lt;/annotation>      &lt;-- title to show
&lt;/track>                                     &lt;-- end track
&lt;/trackList>
&lt;/playlist>
</pre>
</samp>
<br>
So we are going to add krillins.mp3 with image krillins.jpg and name krillins song to the list
<samp>
<pre style="background:#eee;border:thin solid #ddd;display:block;overflow:auto;">
&lt;playlist version="1" xmlns="http://xspf.org/ns/0/">
&lt;title>WoW player&lt;/title>
&lt;trackList>
&lt;track>                                      &lt;-- Start new track
&lt;location>wow_legends.mp3&lt;/location>      &lt;-- Track location and name
&lt;image>fanart_6-28-06.jpg&lt;/image>         &lt;-- image to show (not ness)
&lt;annotation>WoW Legends&lt;/annotation>      &lt;-- title to show
&lt;/track>                                     &lt;-- end track
&lt;track>                                      &lt;-- Start new track
&lt;location>krillins.mp3&lt;/location>      &lt;-- Track location and name
&lt;image>krillins.jpg&lt;/image>         &lt;-- image to show (not ness)
&lt;annotation>Krillins song&lt;/annotation>      &lt;-- title to show
&lt;/track>                                     &lt;-- end track
&lt;/trackList>
&lt;/playlist>
</pre>
</samp><br><br>
<p><b>Removing Wallpapers</b></p>
<p>Installing wallpapers and screenshots are already explained in de config window. But how remove them?</p>
<br>
<p>There are five locations where you can find your images namely:</P><br>
<p>/en/downloads/screenshotone/</p>
<p>/en/downloads/screenshottwo/</p>
<p>/en/downloads/screenshotthree/</p>
<p>/en/downloads/wallpaperone/</p>
<p>/en/downloads/wallpapertwo/</p>
<p>/en/downloads/wallpaperthree/</p>
<p>/en/downloads/fanartone/</p><br><br>
<p>each directory has a directory gallery and in this directory are two subdirectories wich are called
thumbs and pictures. In these directories you have to remove the picture you want to delete.
</td>
</tr>
</table>
</body>
</html>