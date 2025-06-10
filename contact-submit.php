<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = [
        "name" => htmlspecialchars($_POST["name"]),
        "email" => htmlspecialchars($_POST["email"]),
        "message" => htmlspecialchars($_POST["message"]),
        "timestamp" => date("Y-m-d H:i:s")
    ];

    $file = "contacts.json";
    $allContacts = [];

    if (file_exists($file)) {
        $json = file_get_contents($file);
        $allContacts = json_decode($json, true) ?? [];
    }

    $allContacts[] = $data;
    file_put_contents($file, json_encode($allContacts, JSON_PRETTY_PRINT));

    header("Location: contact.html?success=true");
    exit;
} else {
    echo "Invalid request.";
}
?>
