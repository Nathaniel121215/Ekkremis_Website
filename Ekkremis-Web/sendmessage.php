<?php
    use PHPMailer\PHPMailer\PHPMailer;

    if (isset($_POST['email'])) {
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        require_once "PHPMailer/PHPMailer.php";
        require_once "PHPMailer/SMTP.php";
        require_once "PHPMailer/Exception.php";

        $mail = new PHPMailer();

        //SMTP Settings
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "ekkremissender@gmail.com"; //enter you email address
        $mail->Password = 'Ekkremis121215'; //enter you email password
        $mail->Port = 465;
        $mail->SMTPSecure = "ssl";

        //Email Settings
        $mail->isHTML(true);
        $mail->setFrom($email, $email);
        $mail->addAddress("info@ekkremis.com"); //enter you email address
        $mail->Subject = ($subject);
        $mail->Body = $message;

       
        
            if ($mail->send()) {
                $status = "success";
                $response = "Email is sent!";
                
            } else {
                $status = "failed";
                $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;
            }
        
   
        

        exit(json_encode(array("status" => $status, "response" => $response)));
    }
?>
