<?php
	function httpResponse(int $statusCode, string $message): void {
		$response = [
			"statusCode" => $statusCode,
			"message" => $message
		];
		http_response_code($response['statusCode']);
		header('Content-Type: application/json; charset=utf-8');
		echo json_encode($response);
		exit();
	}

	if ($_SERVER['REQUEST_METHOD'] !== 'POST')
		httpResponse(400, "Method is not POST");
	if (!isset($_FILES) || !isset($_FILES['file']))
		httpResponse(403, "Bad Request");

	$file = $_FILES['file'];
	if (empty($file['tmp_name']) || getimagesize($file['tmp_name']) === false)
		httpResponse(404, "Bad Request");

	$root = $_SERVER['DOCUMENT_ROOT'];
	$dir = "$root/api/image";
	if (!file_exists($dir))
		mkdir("$root/api/image");
	$type = explode("/", $file['type'])[1];
	$filename = uniqid().".".$type;
	move_uploaded_file($file['tmp_name'], $dir."/".$filename);
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode([
		"statusCode" => 200,
		"message" => "/api/image/$filename"
	]);
?>
