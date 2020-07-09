<?php require_once('../includes/header.php')?>
<body>
  <div class="parent">
    <div class="child">
    <form class="modal-content" action="signin.php" style="border:1px solid #ccc" method="post">
        <div id="recover" class="container" mt-5>
          <h1>Recover Password</h1>
          <hr>
          <label for="useremail"><b>User email</b></label>
          <input type="text" placeholder="Enter user email" name="useremail" required>

          <div class="clearfix">
            <button type="button"  class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Send Password</button>
          </div>
      </form>
      </div>
    </div>
</body>
</html>