<?php
include "config.php";

switch ($method) {
  case 'GET':
    $id = $_GET['id'];
    $author = $_GET['author'];
    $sql = "select * from things".($author?" where author=$author":'').($id?" where id=$id":'');
    break;
  case 'POST':
    if($_POST["actions"] == 'add new'){

      $name = $_POST["name"];
      $text = $_POST["text"];
      $author = $_POST["author"];
      $sql = "insert into things (id, name, text, author) values (NULL, '$name', '$text', '$author')"; 

    }
    break;
  case 'DELETE':
    $id = $_GET["id"];
    $sql = "delete from things".($id?" where id=$id":''); 
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

// $comapanyData = mysqli_query($con,"select * from items");

// $response = array();

// while($row = mysqli_fetch_assoc($itemsData)){

//   $response[] = $row;
// }

// echo json_encode($response);
exit;
?>