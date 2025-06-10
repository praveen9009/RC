<?php
$contacts = [];
if (file_exists("contacts.json")) {
    $json = file_get_contents("contacts.json");
    $contacts = json_decode($json, true) ?? [];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard - Contact Messages</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-light">

<div class="container py-5">
  <h2 class="mb-4">Contact Messages</h2>
  <div class="table-responsive">
    <table class="table table-bordered table-hover table-dark">
      <thead class="table-light text-dark">
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Message</th>
          <th>Date Submitted</th>
        </tr>
      </thead>
      <tbody>
        <?php if (count($contacts) === 0): ?>
          <tr><td colspan="5" class="text-center">No messages received yet.</td></tr>
        <?php else: ?>
          <?php foreach ($contacts as $index => $contact): ?>
            <tr>
              <td><?= $index + 1 ?></td>
              <td><?= $contact["name"] ?></td>
              <td><?= $contact["email"] ?></td>
              <td><?= $contact["message"] ?></td>
              <td><?= $contact["timestamp"] ?></td>
            </tr>
          <?php endforeach; ?>
        <?php endif; ?>
      </tbody>
    </table>
  </div>
</div>

</body>
</html>
