 <?php require_once('../includes/header.php')?>
<body>
  <div class="parent">
    <div class="child">
    <form class="modal-content" method="post">
        <div id="recover" class="container" mt-5>
          <h1>Enter Code</h1>
          <hr>
          <?php validation_code(); ?>
          <input type="text" placeholder="######" name="recover-code" required>

          <div class="clearfix">
            <button type="button"  class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Send Password</button>
          </div>
      </form>
      </div>
    </div>

    <?php require_once('../includes/footer.php') ?>