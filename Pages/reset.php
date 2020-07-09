<?php require_once('../includes/header.php')?>
<body>
  <div class="parent">
    <div class="child">
    <form class="modal-content" action="signin.php" style="border:1px solid #ccc" method="post">
        <div id="recover" class="container" mt-5>
          <h1>Reset Password</h1>
          <hr>
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>
      
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

          <div class="clearfix">
            <button type="button"  class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Send Password</button>
          </div>
      </form>
      </div>
    </div>
</body>
</html>