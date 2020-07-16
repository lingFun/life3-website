<?php require_once('../includes/header.php')?>

  <!-- <?php
      $sql = "select * from users";
      $query = Query($sql);
      confirm($query);
      $row = fetch_data($query);
      echo $row['Email'];
  ?> -->

  
    <form class="modal-content" style="border:1px solid #ccc" method="post">
        <div id="signin" class="container" >
          <?php login_validation();
                display_message(); ?>
          <h1>Life3 Member Sign in</h1>
          <hr>
          <label for="useremail"><b>User email</b></label>
          <input type="text" placeholder="Enter user email" name="Uemail" required>
    
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="Upass" required>
          <p>Don't have a account? <a href="signup.php">Sign up</a> first!</a></p>

          <div class="clearfix">
            <button type="button"  class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign in</button>
          </div>
          <hr>
          <input type="checkbox" name="remember"><span>Remember Me</span>
          <a href="recover.php" class="floatright">Forget Password</a>
        </div>
      </form>

      
</body>
</html>