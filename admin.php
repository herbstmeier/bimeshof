<?php
if (!isset($_SERVER['PHP_AUTH_USER'])) {
    header('WWW-Authenticate: Basic realm="My Realm"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Text to send if user hits Cancel button';
    exit;
} else {
    echo "<p>Hello {$_SERVER['PHP_AUTH_USER']}.</p>";
    echo "<p>You entered {$_SERVER['PHP_AUTH_PW']} as your password.</p>";
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Contact Form Handler</title>
</head>

<body>
    <form action="" method="post">
        <input type="text" name="title">
        <input type="text" name="text">
        <input type="file" name="photo">
        <button type="submit">submit</button>
    </form>
</body>

</html>