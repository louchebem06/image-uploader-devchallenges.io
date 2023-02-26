<?php
$root = $_SERVER['DOCUMENT_ROOT'];
$path = "$root/api/image";
if (!file_exists($path))
	exit();
$files = scandir($path);
foreach($files as $file) {
	if ($file == ".." || $file == "." || $file == "")
		continue ;
	$pathFile = "$path/$file";
	$ts = filectime($pathFile);
	if (time() - $ts >= 3600)
		unlink($pathFile);
}
