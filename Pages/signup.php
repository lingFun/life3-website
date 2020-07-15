<?php require_once('../includes/header.php')?>

  <!-- <?php
      $sql = "select * from users";
      $query = Query($sql);
      confirm($query);
      $row = fetch_data($query);
      echo $row['Email'];
  ?> -->

<?php display_message(); ?>

<form style="border:1px solid #ccc" method="post">
        <div id="signup" class="container">
          <?php user_validation();?>
          <h1>Life3 Member Sign Up</h1>
          <hr>
          
          <label for="firstname"><b>First Name</b></label>
          <input type="text" placeholder="Enter first name" name="FirstName" required>
          <label for="lastname"><b>Last Name</b></label>
          <input type="text" placeholder="Enter last name" name="LastName" required>

          <label for="username"><b>User Name</b></label>
          <input type="text" placeholder="Enter username" name="UserName" required>

          <label for="email"><b>Email</b></label>
          <input type="email" placeholder="Enter email" name="Email" required>
      
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="Password" required>
      
          <label for="confirm-password"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="CPassword" required>
      
      
          <p>By creating an account you agree to our Terms & Privacy.</p>
      
          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    
          
</body>
</html>