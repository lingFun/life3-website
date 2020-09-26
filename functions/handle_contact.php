<?php
    require_once('../functions/config.php');

    //Handle contact form info and send email 

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $companyName = clean($_POST['companyName']);
        $organizationType = clean($_POST['organizationType']);
        $name = clean($_POST['name']);
        $phoneNumber = clean($_POST['phoneNumber']);
        $emailAddress = clean($_POST['emailAddress']);
        $message = clean($_POST['message']);

        $sql ="INSERT INTO contactInfo (CompanyName, OrganizationType, FullName, PhoneNumber, Email) 
            VALUES ('$companyName' ,'$organizationType', '$name', '$phoneNumber', '$emailAddress')";
        $result = Query($sql);
        confirm($result);

        $mailTo = "omar.duran@life3.io";
        $headers = "From: life3.io"  . "\r\n" .
        "CC: omar.duran@life3.io";
        $txt = "Company name: ".$companyName."\nOrganization type: ".$organizationType."\nName: ".$name.
        "\nEmail address: ".$emailAddress."\nPhone#: ".$phoneNumber."\nMessage: ".$message;


        mail($mailTo, $companyName, $txt, $headers);
        redirect("../Pages/thankyou.html");
    }


?>