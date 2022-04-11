<?php

    require 'php/PHPMailer.php'
    require 'php/SMTP.php'
    require 'php/Exception.php'

    use PHPMailer\PHPMailer\PHPMailer;
    use SMTP\SMTP\SMTP;
    use Exception\Exception\Exception;

    $mail = new PHPMailer();

    $mail -> isSMTP();

    $mail -> Host = "smtp.gmail.com";

    $mail -> SMTPAuth = "true";

    $mail -> SMTPSecure = "tls";

    $mail -> Port = "587";

    $mail -> Username = "nathanielpenaranda4@gmail.com";

    $mail -> Password = "nathananthan";

    $mail -> Subject = "Test Email";

    $mail -> Body = "test body of message";

    $mail -> addAddress = "Nathaniel121215@gmail.com";

    $mail -> Body = "test body of message";

    $mail -> smtpClose();

?>


