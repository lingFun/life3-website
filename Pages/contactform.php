<?php
$formInput= $_POST('Company Name');
$formInput= $_POST('Organization Type');
$formInput= $_POST('Name');
$formInput= $_POST('Phone-Number');
$input2= $_POST('Email-Address');

mysql_connect("localhost","root","");
mysql_select_db("test");
$select="insert into project(Company Name, Organization Type, Name, Phone-Number, Email-Address) values ('".$formInput"' ,'".$input2"')";
$sql=mysql_query($select);

print '<script type= "text/javascript">';
print 'alert("The data is inserted...")';
print '</script>';

mysql_close();
?>
