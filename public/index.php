<?php

    // configuration
    require("../includes/config.php"); 
    
    $id = $_SESSION["id"];
    
    $rows = CS50::query("SELECT `id` FROM users WHERE id = ?", $id);
    // render portfolio with appropriate key-value pairs for displaying portfolio table
    if($rows != NULL)
        render("login_home.php", NULL, NULL, NULL, ["title" => "Home"]);
    else
        redirect("login.php");
    
    
?>
