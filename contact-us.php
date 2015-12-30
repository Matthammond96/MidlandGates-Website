<?php

    
    if ($_POST["submit"]) {

        $result='<div class="alert alert-success">Form Submitted</div>';
    }

    if (!$_POST['name']){
        
        $error="<br />Please enter your name";
    }

    if (!$_POST['email']){
        
        $error.="<br />Please enter your email address";        
    }

    if (!$_POST['telno']){
        
        $error.="<br />Please enter your telephone number";
    }

    if (!$_POST['message']){
        
        $error.="<br />Please enter your query";        
    }
    
    if ($error){
        
        $result='<div class="alert alert-danger"><strong>All fields must be filled!</strong>'.$error.'</div>';
    }

    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        
         $error.="<br />Please enter a valid email address";
    }

    else {
        
        if (mail("sales@midlandgates.co.uk", "Comment from website!", "Name: ".$_POST['name']."
                      
        Email: ".$_POST['email']."
             
        Phone Number: ".$_POST['telno']."
    
        Message: ".$_POST['message'])){
            
        $result='<div class="alert alert-success"><strong>Thank You! We will get back to your as soon as we can!</strong></div>';
            
        }
        
        else {
            
            $result='<div class="alert alert-danger"><strong>Sorry there was an error sending your message. Please try again later.</strong></div>';
    }
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta Data -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">
    <title>Midland Gates - Contact Us</title>

    <!-- Links -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
   
</head>
<body> 
    
    <!-- Nav-Bar Section  -->
    <section>
        <script src="js/navTemplate.js"></script>
    </section> 
            
    
                
             <!--   <div class="row" id="headerRow"> -->
                    
  <div class="screenSize">
    <div class="container contentContainer" id="topRow">
    
        <div class="row">
      
        <div class="col-md-10 col-md-offset-1 center" id="">
        
        <h1>Midland Gates</h1>
        <h2>Contact Us</h2>
        <p class="lead">Wooden Driveway Gates Hand Made To Order In The Heart Of The National Forest.</p>
            
        <!-- Displays Result of form submit -->    
        <?php echo $result; ?> 
            
        <form method="post">  
            <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="Enter your name:" value="<?php echo $_POST['name']; ?>">
                <br>
                <input type="email" name="email" class="form-control" placeholder="Enter your email:" value="<?php echo $_POST['email']; ?>">
                <br>
                <input type="tel" name="telno" class="form-control" placeholder="Contact number:" value="<?php echo $_POST['telno']; ?>">
                <br>
                <textarea type="text" name="message" <?php echo $_POST['message']; ?> class="form-control" placeholder="Enter your query:"></textarea>     
                <input type="submit" id="btnSubmit" name="submit" class="btn btn-success btn-lg marginTop" value="Submit"/>  
            </div>
        </form>
      
      <h2>Alternativley call us on <a href="tel:01283 000000">01283 000000</a></h2>
      <h2>Or Email us at <a href="mailto:sales@midlandgates.co.uk">sales@midlandgates.co.uk</a></h2>
      <br>
    </div>
      
    </div>         
    </div>                     
                    
         
                
    </section>
        
  
    
    <!-- Footer Section -->
     <section>
        <script src="js/footerTemplate.js"></script> 
    </section>
    
    <!-- Script Links --> 
    <section>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>    
        <script src="js/homePageOnLoad.js"></script>
        <script src="js/linkscroll.js"></script>
        <script>$(".screenSize").css("min-height",$(window).height())</script>
    </section>

</body>
</html>