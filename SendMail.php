<?php



  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $mailFor = $_POST['mailfor'];
  $description = $_POST['desc'];

  echo "$name";
  echo "$email";
  echo "$phone";
  echo "$mailFor";
  echo "$description";


  $email_subject = "Request for Information by $name";

  $email_body = "Hi Team \n\n".
                  "\t One of the visitor of our site has requested for the Information from Us \n".
                  "\t The User details are provided below.\n \n".
                  "\t Visitor Name : $name .\n".
                  "\t Email ID  : $email \n".
                  "\t Phone No  : $phone \n".
                  "\t Description : ".
                  "$description \n\n".
                  "\t  Please provide with the Information to user.\n\n".
                  "With Regards, \n".
                  "Team Amrutha- Develpment";


  $to = "info.aesvsp@gmail.com";

  $headers = "From: $email";

  if(mail($to, $email_subject, $email_body, $headers))
  {
    header("mail-submitted.html");
    exit();
  }
  else
  {
    echo "Failed in sending message";
  }

  header("Location: mail.html");


 ?>