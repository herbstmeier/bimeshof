<?php
$errors = '';
$myemail = 'info@bimeshof.de';
if (
    empty($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['message'])
) {
    $errors .= "\n Error: Keine leeren Felder erlaubt.";
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

if (
    !preg_match(
        "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
        $email_address
    )
) {
    $errors .= "\n Error: Ungültige Email-Adresse.";
}

if (empty($errors)) {

    $to = $myemail;

    $email_subject = "Kontaktformular-Nachricht von: $name";

    $email_body = "Neue Nachricht erhalten: \n\n" .

        "\tName: $name\n" .

        "\tEmail: $email_address\n\nNachricht:\n\n$message";

    $headers = "Von: $myemail\n";

    $headers .= "Antworten an: $email_address";

    mail($to, $email_subject, $email_body, $headers);

    //redirect to the 'thank you' page

    header('Location: contact-form-thank-you.html');

}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Contact Form Handler</title>
</head>

<body>
    <?php
    echo nl2br($errors);
    ?>
</body>

</html>