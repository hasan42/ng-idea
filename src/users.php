<?php
include "config.php";

switch ($method) {
  case 'GET':
    if($_GET["login"] == '1'){
      $login = $_GET["login"];
      $name = $_GET['name'];
      $userPass = $_GET['password'];
      $sql = "SELECT * FROM users WHERE name='$name' AND password='$userPass'";
    }else{
      $id = $_GET['id'];
      $sql = "select * from users".($id?" where id=$id":''); 
    } 
    break;
  case 'POST':
    if($_POST["actions"] == 'add new'){
      $name = $_POST["name"];
      $userPass = $_POST["password"];
      $sql = "insert into users (id, name, password, admin) values (NULL, '$name', '$userPass', '0')"; 
    }
    break;
  case 'DELETE':
    $id = $_GET["id"];
    $sql = "delete from users where id = $id"; 
    break;
}
$result = mysqli_query($con,$sql);

if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {
  $response = array();
  while($row = mysqli_fetch_assoc($result)){
     $response[] = $row;
  }
  echo json_encode($response);
} elseif ($method == 'POST') {
  echo json_encode($result);
} elseif ($method == 'DELETE') {
  echo json_encode($result);
}else {
  echo mysqli_affected_rows($con);
}
exit;
?>