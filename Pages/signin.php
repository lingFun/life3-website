<?php require_once('../functions/config.php') ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>LIFE3 - Learn & Innovate For Education, Enablement, Empowerment</title>
    <link type="text/css" rel="stylesheet" href="../CSS/form.css">
</head>

<body>
    <header>
        <nav class="navBar">
            <a class="navLink navLinkText" href="Pages/community.html">Community
                Development</a>
            <a class="navLink navLogo" href="../index.html"><img src="../Assets/Images/Icons/LIFE3HeaderLogo.png" alt="LIFE3 Logo"
                    title="LIFE3"></img></a>
            <a class="navLink navLinkText" href="Pages/professional.html">Professional Development</a>
            <a href="signup.php"><button type="button" class="contactUsButton"><p>Sign Up</p></button></a>
            <!-- <button type="button" class="contactUsButton">
                <p>Contact Us</p>
                <i class="fas fa-envelope-open-text"></i>
            </button> -->
        </nav>

        <div class="homeBanner">
            <a class="navClickArea" href="Pages/community.html"></a>
            <a class="navClickArea" href="#eventsAnchor"></a>
            <a class="navClickArea" href="Pages/professional.html"></a>
        </div>
    </header>

    <div id="signin" class="container" style="border:1px solid #ccc"  >
      <form class="modal-content" method="post">
        
          <?php login_validation();
                display_message(); ?>
          <h1>Life3 Member Sign in</h1>
          <hr>
          <label for="useremail"><b>User email</b></label>
          <input type="text" placeholder="Enter user email" name="Uemail" required>
    
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="Upass" required>
          <p>Don't have a account? <a href="signup.php" style="color: black;text-decoration:underline;">Sign up</a> first!</a></p>

          <div class="clearfix">
            <button type="button"  class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn"><b>Sign in</b></button>
          </div>
          <hr>
          <input type="checkbox" name="remember"><span> Remember Me</span>
          <a href="recover.php" class="floatright"><u>Forget Password?</u></a>
        
      </form>
      </div>

<?php require_once('../includes/footer.php') ?>