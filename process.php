<?php

$_POST = json_decode(file_get_contents('php://input'), true);

if ((isset($_POST['name'])) && (strlen(trim($_POST['name'])) > 0)) {

	$name = stripslashes(strip_tags($_POST['name']));

} else {$name = 'No name entered';}

if ((isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0)) {

	$email = stripslashes(strip_tags($_POST['email']));

} else {$email = 'No email entered';}

if ((isset($_POST['phone'])) && (strlen(trim($_POST['phone'])) > 0)) {

	$phone = stripslashes(strip_tags($_POST['phone']));

} else {$phone = 'No phone entered';}

if ((isset($_POST['website'])) && (strlen(trim($_POST['website'])) > 0)) {

	$website = stripslashes(strip_tags($_POST['website']));

} else {$website = 'No website entered';}

if ((isset($_POST['project'])) && (strlen(trim($_POST['project'])) > 0)) {

	$project = stripslashes(strip_tags($_POST['project']));

}

if ((isset($_POST['message'])) && (strlen(trim($_POST['message'])) > 0)) {

	$inquiry = stripslashes(strip_tags($_POST['message']));

} else {$inquiry = 'No inquiry entered';}

ob_start();

?>

<html>

<head>

<style type="text/css">

</style>

</head>

<body>

<table width="550" border="0" cellspacing="2" cellpadding="2">

  <tr bgcolor="#fefefe" width="550">

    <td>Name</td>

    <td><?=$name;?></td>

  </tr>

  <tr bgcolor="#ffffff" width="550">

    <td>Email</td>

    <td><?=$email;?></td>

  </tr>

  <tr bgcolor="#fefefe" width="550">

    <td>Phone</td>

    <td><?=$phone;?></td>

  </tr>

	<tr bgcolor="#fefefe" width="550">

    <td>Website</td>

    <td><?=$website;?></td>

  </tr>

	<tr bgcolor="#fefefe" width="550">

    <td>Project Type</td>

    <td><?=$project;?></td>

  </tr>

  <tr bgcolor="#ffffff" width="550">

    <td>Inquiry:</td>

    <td><?=$inquiry;?></td>

  </tr>

</table>

</body>

</html>

<?

$body = ob_get_contents();

ob_end_clean();

$to = 'chrismills.me@gmail.com';

$email = 'email@example.com';

$fromaddress = "you@example.com";

$fromname = "ChrisMills.la";



require("phpmailer.php");



$mail = new PHPMailer();



$mail->From     = "chrismills.me@gmail.com";

$mail->FromName = $fromname;

$mail->AddAddress("chrismills.me@gmail.com","Chris");



$mail->WordWrap = 50;

$mail->IsHTML(true);



$mail->Subject  =  "ChrisMills.la Inquiry - " . $fromname;

$mail->Body     =  $body;

$mail->AltBody  =  "This is the text-only body";



if(!$mail->Send()) {

	$recipient = 'chrismills.me@gmail.com';

	$subject = 'Contact form failed';

	$content = $body;	

  mail($recipient, $subject, $content, "From: chrismills.me@gmail.com\r\nReply-To: $email\r\nX-Mailer: DT_formmail");

  exit;

}

?>